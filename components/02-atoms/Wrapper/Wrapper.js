import classnames from 'classnames'
import styles from './Wrapper.css'

export default function Wrapper ({
  as: Tag = 'div',
  variant = Wrapper.shell,
  className,
  children,
  ...props
}) {
  const classList = classnames(
    styles.root,
    variant,
    className
  )

  return (
    <Tag className={classList} {...props}>{children}</Tag>
  )
}

// variants
Wrapper.shell = styles.variantShell
