// import React from 'react'
import classnames from 'classnames'
import { Rhythm, Text } from '@utils'
import { Heading, Wrapper } from '@atoms'
// import { PageContext } from '@contexts'

export default function PageTemplate ({ slug }) {
  // const data = React.useContext(PageContext)

  return (
    <Wrapper className={classnames(Rhythm.medium, Text.alignCenter)}>
      <section>
        <Heading>Page – {slug}</Heading>
      </section>
    </Wrapper>
  )
}
