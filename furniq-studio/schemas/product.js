export default {
  name: 'product',
  type: 'document',
  title: 'Product',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Name',
      validation: (Rule) => Rule.required(),
    },

    {
      name: 'slug',
      type: 'slug',
      title: 'Slug',
      options: {
        source: 'name',
        maxLength: 100,
      },
    },
    {
      name: 'category',
      type: 'string',
      title: 'Category',
    },

    {
      name: 'isNew',
      type: 'boolean',
      title: 'is New',
    },
    {
      name: 'price',
      type: 'number',
      title: 'Price',
    },
    {
      name: 'description',
      type: 'text',
      title: 'Description',
    },

    {
      name: 'image',
      type: 'url',
      title: 'Image URL',
    },

    {
      name: 'thumbnailImgs',
      type: 'array',
      title: 'Thumbnail Images',
      of: [{type: 'url', options: {hotspot: true}}],
    },
  ],
}
