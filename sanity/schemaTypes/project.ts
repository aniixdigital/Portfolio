import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'project',
  title: 'Project',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: [
          { title: 'Digital Marketing', value: 'digital-marketing' },
          { title: 'Advertisement', value: 'advertisement' },
          { title: 'Graphic Design', value: 'graphic-design' },
          { title: 'Web Development', value: 'web-development' },
        ],
        layout: 'radio',
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 4,
    }),
    defineField({
      name: 'image',
      title: 'Project Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'projectUrl',
      title: 'Project URL',
      type: 'url',
    }),
    defineField({
      name: 'technologies',
      title: 'Technologies Used',
      type: 'array',
      of: [{ type: 'string' }],
      options: {
        layout: 'tags',
      },
    }),
    defineField({
      name: 'completedAt',
      title: 'Completed At',
      type: 'date',
    }),
    defineField({
      name: 'showcase',
      title: 'Showcase Project',
      type: 'boolean',
      description: 'Mark this project to be shown in the showcase section. Only projects marked as showcase will be displayed if more than 6 projects exist.',
      initialValue: false,
    }),
  ],
  preview: {
    select: {
      title: 'title',
      category: 'category',
      media: 'image',
    },
    prepare({ title, category, media }) {
      const categoryLabels: Record<string, string> = {
        'digital-marketing': 'Digital Marketing',
        'advertisement': 'Advertisement',
        'graphic-design': 'Graphic Design',
        'web-development': 'Web Development',
      }
      return {
        title,
        subtitle: categoryLabels[category] || category,
        media,
      }
    },
  },
})
