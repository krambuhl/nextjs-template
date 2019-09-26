import { storiesOf } from '@storybook/react'
import { Button } from '@atoms'
import { Centered } from '@decorators'

storiesOf('Button', module)
  .addDecorator(Centered)
  .add('with text', () => <Button>Send</Button>)
  .add('with link', () => <Button href="#/">Link</Button>)
