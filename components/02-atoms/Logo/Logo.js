import classnames from 'classnames'
import styles from './Logo.css'
import { A11y } from '@utils'
import { Link } from '@atoms'

export default function Logo ({
  variant = Logo.default,
  className,
  ...props
}) {
  const classList = classnames(styles.root, variant, className)

  return (
    <Link
      href='/'
      className={classList}
      {...props}
    >
      <span>Site Name</span>
      <span className={A11y.visuallyHidden}>Site Name</span>
    </Link>
  )
}

Logo.default = styles.defaultVariant
