const fetch = require('isomorphic-unfetch')
const dev = process.env.NODE_ENV !== 'production'

async function fetchWrapper (url) {
  try {
    const res = await fetch(url)
    const json = await res.json()
    return json
  } catch (err) {
    return null
  }
}

const getNowUrl = (req = {}) => (
  req.headers && req.headers['x-now-deployment-url']
)

const getGraphUrl = (nowUrl) => {
  if (nowUrl) return `https://${nowUrl}/graphql`
  if (dev) return 'http://localhost:3001/graphql'
  if (typeof window !== "undefined" && window.location.origin) {
    return `${window.location.origin}/graphql`
  }
}

module.exports = {
  fetch: fetchWrapper,
  getNowUrl,
  getGraphUrl
}
