import React from 'react'
import { useGraphQL } from 'graphql-react'
import { LoadingLayout } from '@organisms'
import { EnvContext } from '@contexts'

function DataContainer ({
  query,
  Context,
  children,
  Loading = LoadingLayout
}) {
  const { graphUrl } = React.useContext(EnvContext)
  const { cacheValue = {} } = useGraphQL({
    fetchOptionsOverride (options) {
      options.url = graphUrl
    },
    operation: { query: `{ ${query} }` }
  })

  const { data, fetchError, httpError, parseError, graphQLErrors } = cacheValue
  const error = fetchError || httpError || parseError || graphQLErrors

  if (error) {
    return <pre>{JSON.stringify(error, null, 2)}</pre>
  }

  if (!Context) {
    return children(data)
  }

  if (data) {
    return (
      <Context.Provider value={data}>
        {children}
      </Context.Provider>
    )
  }

  return <Loading />
}

function DataContainerWrapper ({
  children,
  ...props
}) {
  if (props.query) {
    return (
      <DataContainer {...props}>
        {children}
      </DataContainer>
    )
  }

  return children
}

export default React.memo(DataContainerWrapper)
