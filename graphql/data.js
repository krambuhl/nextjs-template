const DataLoader = require('dataloader')
const { fetch } = require('./utils')

const WP_URL = 'https://bluejackstudio.com/clients/smith'

const fetchWpApi = endpoint => (
  fetch(`${WP_URL}/wp-json/${endpoint}`)
)

const createDataLoader = (fn, opts = {}) => (
  new DataLoader(keys => Promise.all(keys.map(fn)), opts)
)

const createContext = () => ({
  wpApi: createDataLoader(fetchWpApi)
})

module.exports = {
  WP_URL,
  createContext
}
