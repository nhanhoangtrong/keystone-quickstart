export default {
  pages: () => {
    return [
      {
        label: 'Blog',
        children: [{ listKey: 'Post' }, { label: 'Categories', listKey: 'PostCategory' }],
      },
      {
        label: 'People',
        children: ['User'],
      },
      {
        label: 'Contacts',
        children: ['Contact'],
      },
    ];
  },
};
