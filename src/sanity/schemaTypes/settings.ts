import { defineField, defineType } from 'sanity'

export const settingsType = defineType({
  name: 'settings',
  title: 'Store Settings',
  type: 'document',
  fields: [
    defineField({
      name: 'weekdayHours',
      title: 'Weekday Hours (Senin - Jumat)',
      type: 'string',
      initialValue: '07.00 - 21.00',
    }),
    defineField({
      name: 'saturdayHours',
      title: 'Saturday Hours',
      type: 'string',
      initialValue: '07.00 - 22.00',
    }),
    defineField({
      name: 'sundayHours',
      title: 'Sunday Hours',
      type: 'string',
      initialValue: '08.00 - 21.00',
    }),
    defineField({
      name: 'whatsappNumber',
      title: 'WhatsApp Number',
      type: 'string',
      initialValue: '+62 812-3456-7890',
    }),
    defineField({
      name: 'instagramHandle',
      title: 'Instagram Handle',
      type: 'string',
      initialValue: '@maniswara.soc',
    }),
  ],
})
