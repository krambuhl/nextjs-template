import fetch from 'isomorphic-unfetch'
import App from 'next/app'
import { GraphQLProvider } from 'graphql-react'
import { withGraphQLApp } from 'next-graphql-react'

import { DataContainer } from '@utils'
import { PageLayout } from '@organisms'
import { EnvContext, AppContext, PageContext } from '@contexts'
import { getNowUrl, getGraphUrl } from '@graphql/utils'
import '@styles/styles.css'

if (!process.browser) {
  global.fetch = fetch
}

class CustomApp extends App {
  static async getInitialProps ({ Component, ctx }) {
    let pageProps = {}

    const nowUrl = getNowUrl(ctx.req)
    const graphUrl = getGraphUrl(nowUrl)

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx)
    }

    return {
      pageProps,
      nowUrl,
      graphUrl,
      graphQuery: Component.graphQuery
    }
  }

  static graphQuery () {
    return `
      menu {
        id
        title
        slug
      }
      tags {
        id
        name
        count
      }
    `
  }

  constructor (props) {
    super(props)

    const { nowUrl, graphUrl } = props
    const setState = (value) => this.setState(value)

    this.state = {
      nowUrl,
      graphUrl,
      setState
    }
  }

  render () {
    const {
      Component,
      pageProps,
      graphql
    } = this.props

    const appQuery = CustomApp.graphQuery(pageProps)
    const pageQuery = Component.graphQuery ? Component.graphQuery(pageProps) : null

    return (
      <GraphQLProvider graphql={graphql}>
        <EnvContext.Provider value={this.state}>
          <DataContainer query={appQuery} Context={AppContext}>
            <PageLayout>
              <DataContainer query={pageQuery} Context={PageContext}>
                <Component {...pageProps} />
              </DataContainer>
            </PageLayout>
          </DataContainer>
        </EnvContext.Provider>
      </GraphQLProvider>
    )
  }
}

export default withGraphQLApp(CustomApp)
