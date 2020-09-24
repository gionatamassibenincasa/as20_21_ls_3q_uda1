export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-blog'
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
                  buildHookId: '5f6c98ad482bba1b16189bdb',
                  title: 'Sanity Studio',
                  name: 'as-20-21-ls-3-q-uda-1-studio',
                  apiId: 'd2009a26-9275-447b-b74a-3b3aed45e50a'
                },
                {
                  buildHookId: '5f6c98ad36f4ac3706f337f8',
                  title: 'Blog Website',
                  name: 'as-20-21-ls-3-q-uda-1',
                  apiId: 'c79fd597-d541-4b82-b4af-8bf171a3fb90'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/gionatamassibenincasa/as20_21_ls_3q_uda1',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://as-20-21-ls-3-q-uda-1.netlify.app', category: 'apps'}
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
