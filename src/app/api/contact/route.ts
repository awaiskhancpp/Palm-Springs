import configPromise from '@payload-config'
import { getPayload } from 'payload'

// US Phone number validation
// Accepts formats: (555) 123-4567, 555-123-4567, 5551234567, +1-555-123-4567, +1 555 123 4567, etc.
function isValidUSPhoneNumber(phone: string): boolean {
  // Remove all whitespace and hyphens for digit counting
  const digitsOnly = phone.replace(/\D/g, '')

  // US phone numbers must have exactly 10 digits (or 11 if starting with 1)
  if (digitsOnly.length === 10) {
    // Valid 10-digit format
    return /^\d{10}$/.test(digitsOnly)
  } else if (digitsOnly.length === 11 && digitsOnly.startsWith('1')) {
    // Valid 11-digit format starting with 1 (country code)
    return /^1\d{10}$/.test(digitsOnly)
  }

  return false
}

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { name, email, phone, company, message } = body

    // Basic validation
    if (!name || !email || !message) {
      return Response.json({ error: 'Name, email, and message are required' }, { status: 400 })
    }

    if (name.trim().length < 2) {
      return Response.json({ error: 'Name must be at least 2 characters' }, { status: 400 })
    }

    if (message.trim().length < 10) {
      return Response.json({ error: 'Message must be at least 10 characters' }, { status: 400 })
    }

    // Validate phone number if provided
    if (phone) {
      const trimmedPhone = phone.trim()
      if (!isValidUSPhoneNumber(trimmedPhone)) {
        return Response.json(
          { error: 'Please enter a valid US phone number (e.g., (555) 123-4567 or 555-123-4567)' },
          { status: 400 },
        )
      }
    }

    const payload = await getPayload({
      config: configPromise,
    })

    // Create contact submission in database
    const contact = await payload.create({
      collection: 'contact',
      data: {
        name: name.trim(),
        email: email.trim(),
        phone: phone?.trim() || null,
        company: company?.trim() || null,
        message: message.trim(),
      },
    })

    return Response.json({ success: true, id: contact.id }, { status: 201 })
  } catch (error) {
    console.error('Contact form error:', error)
    return Response.json({ error: 'Failed to submit contact form' }, { status: 500 })
  }
}
