import classnames from 'classnames'
import { Rhythm, Text } from '@utils'
import { Heading, Wrapper } from '@atoms'

export default function HomeTemplate () {
  return (
    <Wrapper className={classnames(Rhythm.medium, Text.alignCenter)}>
      <section>
        <Heading>Homepage</Heading>
      </section>
    </Wrapper>
  )
}
