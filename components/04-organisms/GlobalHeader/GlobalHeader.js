import classnames from 'classnames'
import { Logo, Wrapper } from '@atoms'
import { Menu } from '@molecules'
import styles from './GlobalHeader.css'

export default function GlobalHeader ({
  className,
  ...props
}) {
  const classList = classnames(styles.root, className)

  return (
    <header className={classList} {...props}>
      <Wrapper>
        <div className={styles.container}>
          <Logo />
          <Menu />
        </div>
      </Wrapper>
    </header>
  )
}
