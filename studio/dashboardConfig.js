export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-eleventy-blog'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '62fbe04f4b05e7073c13dc75',
                  title: 'Sanity Studio',
                  name: 'sanity-eleventy-blog-studio-8hpzg6fa',
                  apiId: '52426013-49a8-4762-b28c-8af86e95fa03'
                },
                {
                  buildHookId: '62fbe04e8cfdbb38b7b93504',
                  title: 'Blog Website',
                  name: 'sanity-eleventy-blog-web-9ck6dwfi',
                  apiId: '5feff4e1-5f52-4fe5-9b86-9f7bf791ecba'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/billder/sanity-eleventy-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-eleventy-blog-web-9ck6dwfi.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
