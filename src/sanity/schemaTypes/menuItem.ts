import { defineField, defineType, defineArrayMember } from 'sanity'

export const menuItemType = defineType({
  name: 'menuItem',
  title: 'Menu Item',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Item Name',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'price',
      title: 'Price',
      type: 'number',
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
    }),
    defineField({
      name: 'category',
      title: 'Category',
      type: 'reference',
      to: [{ type: 'menuCategory' }],
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'options',
      title: 'Options (Variants/Levels)',
      type: 'object',
      fields: [
        defineField({
          name: 'label',
          title: 'Option Label (e.g., Spicy Level)',
          type: 'string',
        }),
        defineField({
          name: 'choices',
          title: 'Choices',
          type: 'array',
          of: [
            defineArrayMember({
              name: 'choiceString',
              type: 'string',
            }),
            defineArrayMember({
              name: 'choiceObject',
              type: 'object',
              fields: [
                defineField({ name: 'name', type: 'string' }),
                defineField({ name: 'price', type: 'number' }),
              ],
            }),
          ],
        }),
      ],
    }),
  ],
})
