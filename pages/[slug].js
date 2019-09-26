import { Page } from '@templates'

export default function PageEntry ({ slug }) {
  return (
    <Page slug={slug} />
  )
}

PageEntry.getInitialProps = ({ query }) => ({ ...query })

PageEntry.graphQuery = null
// PageEntry.graphQuery = ({ slug }) => ``

