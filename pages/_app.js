import App from 'next/app'

import { PageLayout } from '@organisms'
import '@styles/styles.css'

export default class CustomApp extends App {
  render () {
    const {
      Component,
      pageProps
    } = this.props

    return (
      <PageLayout>
        <Component {...pageProps} />
      </PageLayout>
    )
  }
}
