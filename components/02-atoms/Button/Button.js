import classnames from 'classnames'
import styles from './Button.css'

export default function Button ({
  tagName,
  href,
  className,
  children,
  ...props
}) {
  const Tag = tagName || href ? 'a' : 'button'
  const classList = classnames(styles.root, className)

  if (href) {
    props.href = href
  }

  return (
    <Tag className={classList} {...props}>
      {children}
    </Tag>
  )
}
