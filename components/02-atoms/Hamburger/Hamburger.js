import classnames from 'classnames'
import { A11y } from '@utils'
import styles from './Hamburger.css'

export default function Hamburger ({
  isExpanded = false,
  className,
  ...props
}) {
  const classList = classnames(styles.root, {
    [styles.isExpanded]: isExpanded
  }, className)

  return (
    <a href='#' className={classList} {...props}>
      <span className={A11y.visuallyHidden}>Menu</span>
      <div className={classnames(styles.bar, styles.bar1)} />
      <div className={classnames(styles.bar, styles.bar2)} />
      <div className={classnames(styles.bar, styles.bar3)} />
    </a>
  )
}
