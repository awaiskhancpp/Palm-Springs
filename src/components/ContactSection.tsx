'use client'
import Image from 'next/image'
import { useState } from 'react'
import { useToast, ToastContainer } from './Toast'

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const { toasts, showToast, removeToast } = useToast()
  const [errors, setErrors] = useState<Record<string, string>>({})
  const validateForm = () => {
    const errors: Record<string, string> = {}

    // Name validation
    if (!formData.name.trim()) {
      errors.name = 'Name is required'
    } else if (formData.name.trim().length < 2) {
      errors.name = 'Name must be at least 2 characters'
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!formData.email.trim()) {
      errors.email = 'Email is required'
    } else if (!emailRegex.test(formData.email)) {
      errors.email = 'Please enter a valid email'
    }

    // Message validation
    if (!formData.message.trim()) {
      errors.message = 'Message is required'
    } else if (formData.message.trim().length < 10) {
      errors.message = 'Message must be at least 10 characters'
    }

    // Phone validation (same logic as backend)
    if (formData.phone.trim()) {
      const digitsOnly = formData.phone.replace(/\D/g, '')

      const isValid =
        digitsOnly.length === 10 || (digitsOnly.length === 11 && digitsOnly.startsWith('1'))

      if (!isValid) {
        errors.phone = 'Enter a valid US phone number'
      }
    }

    return errors
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const validationErrors = validateForm()

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors)
      showToast('Please fix the errors in the form', 'error')
      return
    }

    setErrors({})
    setIsSubmitting(true)

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (!response.ok) {
        showToast(data.error || 'Failed to submit form', 'error')
        return
      }

      showToast('Thank you! Your message has been sent successfully.', 'success')

      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        message: '',
      })
    } catch (error) {
      showToast('An error occurred. Please try again.', 'error')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <>
      <ToastContainer toasts={toasts} removeToast={removeToast} />
      <section className="w-full bg-[#0080801A] py-16 ">
        <div className="relative max-w-[1441px] w-[95%] mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="font-futura-black-bold text-[#232323] font-normal text-[46px] leading-[48px] mb-4">
              Let Us Know <span className="text-secondary">What You Think!</span>
            </h2>
            <p className="text-[#666666] text-[16px] leading-[24px] tracking-normal">
              Lorem ipsum dolor sit amet consectetur adipiscing eli mattis sit phasellus mollis sit
              aliquam sit nullam.
            </p>
          </div>

          {/* Form Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 lg:max-w-[1254px] mx-auto gap-3 items-center">
            {/* Left Illustration */}
            <div className="flex justify-center w-full lg:w-auto mb-3">
              <div className="w-full lg:max-w-[611px] rounded-3xl">
                <Image
                  src="/contact_us.png"
                  alt=""
                  width={611}
                  height={511}
                  className="w-full h-auto"
                />
              </div>
            </div>

            {/* Right Form */}
            <form onSubmit={handleSubmit} className="flex flex-col gap-6 mb-3 w-full">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex flex-col gap-2">
                  <label
                    id="name"
                    className="font-avenir-lt font-medium text-[18px] leading-[20px] text-[#232323]"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="John Doe"
                    value={formData.name}
                    onChange={handleChange}
                    className="font-avenir-lt bg-white px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#008080] focus:ring-2 focus:ring-[#008080] focus:ring-opacity-20"
                    required
                  />
                  {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
                </div>
                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="email"
                    className="font-avenir-lt font-medium text-[18px] leading-[20px] text-[#232323]"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="johndoe@gmail.com"
                    value={formData.email}
                    onChange={handleChange}
                    className="font-avenir-lt bg-white px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#008080] focus:ring-2 focus:ring-[#008080] focus:ring-opacity-20"
                    required
                  />
                  {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="phone"
                    className="font-avenir-lt font-medium text-[18px] leading-[20px] text-[#232323]"
                  >
                    Phone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    placeholder="+1 718 222 2222"
                    value={formData.phone}
                    onChange={handleChange}
                    className="font-avenir-lt px-4 bg-white py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#008080] focus:ring-2 focus:ring-[#008080] focus:ring-opacity-20"
                  />
                  {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
                </div>

                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="company"
                    className="font-avenir-lt  font-medium text-[18px] leading-[20px] text-[#232323]"
                  >
                    Company
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    placeholder="Company"
                    value={formData.company}
                    onChange={handleChange}
                    className="font-avenir-lt bg-white px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#008080] focus:ring-2 focus:ring-[#008080] focus:ring-opacity-20"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label
                  htmlFor="message"
                  className="font-avenir-lt font-medium text-[18px] leading-[20px] text-[#232323]"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  placeholder="Type Your Message Here..."
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className="font-avenir-lt px-4 py-3 bg-white border border-gray-300 rounded-lg focus:outline-none focus:border-[#008080] focus:ring-2 focus:ring-[#008080] focus:ring-opacity-20 resize-none"
                  required
                />
                {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="bg-primary hover:bg-[#006666] disabled:bg-gray-400 disabled:cursor-not-allowed text-white font-avenir-lt font-semibold px-8 py-4 rounded transition-colors w-full"
              >
                {isSubmitting ? 'Submitting...' : 'Submit'}
              </button>
            </form>
          </div>
          <div className=" absolute right-0 -bottom-15 xl:-bottom-10">
            <div className="bg-radial from-[#00B8B8] to-primary rounded-full ml-8 w-5 h-5" />
            <div className="bg-gradient-to-b from-[#FFA500] to-[#EA7000] rounded-full w-10 h-10 mt-2" />
          </div>
          <div className=" absolute -bottom-30 left-[20%] bg-gradient-to-b from-[#FFA500] to-[#EA7000] rounded-full w-20 h-20" />
        </div>
      </section>
    </>
  )
}
