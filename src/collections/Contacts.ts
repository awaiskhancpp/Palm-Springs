import type { CollectionConfig } from 'payload'

export const Contact: CollectionConfig = {
  slug: 'contact',
  admin: {
    useAsTitle: 'name',
  },
  access: {
    create: () => true,
  },
  fields: [
    {
      name: 'name',
      type: 'text',
      required: true,
      validate: (value: string | null | undefined) => {
        if (!value || value.trim().length < 2) {
          return 'Name must be at least 2 characters'
        }
        return true
      },
    },
    {
      name: 'email',
      type: 'email',
      required: true,
    },
    {
      name: 'phone',
      type: 'text',
    },
    {
      name: 'company',
      type: 'text',
    },
    {
      name: 'message',
      type: 'textarea',
      required: true,
      validate: (value: string | null | undefined) => {
        if (!value || value.trim().length < 10) {
          return 'Message must be at least 10 characters'
        }
        return true
      },
    },
  ],
}
