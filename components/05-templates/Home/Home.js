// import React from 'react'
import classnames from 'classnames'
import { Rhythm, Text } from '@utils'
import { Heading, Wrapper } from '@atoms'
// import { PageContext } from '@contexts'

export default function HomeTemplate () {
  // const data = React.useContext(PageContext)

  return (
    <Wrapper className={classnames(Rhythm.medium, Text.alignCenter)}>
      <section>
        <Heading>Homepage</Heading>
      </section>
    </Wrapper>
  )
}
