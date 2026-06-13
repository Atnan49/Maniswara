import { defineField, defineType } from 'sanity'

export const promoType = defineType({
  name: 'promo',
  title: 'Promo & Event',
  type: 'document',
  fields: [
    defineField({
      name: 'badge',
      title: 'Badge (e.g., Promo Mahasiswa)',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'desc',
      title: 'Description',
      type: 'text',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'isActive',
      title: 'Active Status',
      type: 'boolean',
      initialValue: true,
      description: 'Turn off to hide from the website without deleting',
    }),
    defineField({
      name: 'order',
      title: 'Order',
      type: 'number',
    }),
  ],
})
