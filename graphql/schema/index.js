// this is how we restructure the ugly wp-api data into
// a useful template that can be a single call per page

const {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLList
} = require('graphql')

const { EntryType, MenuType } = require('./global')

// Top level schema (menu + options + pages)
module.exports = new GraphQLSchema({
  query: new GraphQLObjectType({
    name: 'Query',
    fields: () => ({
      categories: {
        type: new GraphQLList(EntryType),
        resolve: (root, _, { wpApi }) => wpApi.load('wp/v2/categories')
      },
      tags: {
        type: new GraphQLList(EntryType),
        resolve: (root, _, { wpApi }) => wpApi.load('wp/v2/tags')
      },
      menu: {
        type: new GraphQLList(MenuType),
        resolve: async (root, _, { wpApi }) => {
          const res = await wpApi.load('menus/v1/menus/main_menu')
          return res.items
        }
      }
    })
  })
})
