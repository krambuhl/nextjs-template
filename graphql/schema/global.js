const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLInt
} = require('graphql')

const { WP_URL } = require('../data')

const MenuType = new GraphQLObjectType({
  name: 'Menu',
  fields: () => ({
    id: {
      type: GraphQLInt,
      resolve: root => root.ID
    },
    title: {
      type: GraphQLString,
      resolve: root => root.title
    },
    slug: {
      type: GraphQLString,
      resolve: root => {
        const { url, post_name } = root
        const slug = url.substr(WP_URL.length).replace(/\//g, '')
        return slug || post_name
      }
    }
  })
})

const EntryType = new GraphQLObjectType({
  name: 'Entry',
  fields: () => ({
    id: {
      type: GraphQLString,
      resolve: (root) => root.id
    },
    name: {
      type: GraphQLString,
      resolve: (root) => root.name
    },
    slug: {
      type: GraphQLString,
      resolve: (root) => root.slug
    },
    count: {
      type: GraphQLString,
      resolve: (root) => root.count
    }
  })
})

module.exports = {
  MenuType,
  EntryType
}
