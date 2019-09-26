const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLFloat
} = require('graphql')

const ImageType = new GraphQLObjectType({
  name: 'Image',
  fields: () => ({
    ratio: {
      type: GraphQLFloat,
      resolve: root => root.height / root.width
    },
    url: {
      type: GraphQLString,
      resolve: root => root.url
    }
  })
})

module.exports = {
  ImageType
}
