const express = require('express')
const graphqlHTTP = require('express-graphql')
const cors = require('cors')

const dev = process.env.NODE_ENV !== 'production'

const graphSchema = require('./schema')
const { createContext } = require('./data')
const context = createContext()

const server = express()

server.use(cors())

server.use('/graphql', graphqlHTTP({
  schema: graphSchema,
  context,
  graphiql: dev
}))

server.get('/graphql-flush', (req, res) => {
  Object.values(context)
    .forEach(loader => loader.clearAll())

  res.send('data flushed.')
})

if (dev) {
  server.listen(3001, err => {
    if (err) throw err
    console.log('> GraphQL running on http://localhost:3001')
  })
} else {
  module.exports = server
}

