import { Wrapper } from '@atoms'
import classnames from 'classnames'
import styles from './GlobalFooter.css'

export default function GlobalFooter ({
  className,
  ...props
}) {
  const classList = classnames(
    styles.root,
    className
  )

  return (
    <footer className={classList} {...props}>
      <Wrapper>
        &copy; Site Name 2019
      </Wrapper>
    </footer>
  )
}
