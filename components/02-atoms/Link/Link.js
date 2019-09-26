import NextLink from 'next/link'
import classnames from 'classnames'
import styles from './Link.css'

const externalRegEx = new RegExp(/^https?:\/\//)

export default function Link ({
  href,
  className,
  children,
  ...props
}) {
  const classList = classnames(
    styles.root,
    className
  )

  if (externalRegEx.test(href)) {
    props = { target: '_blank', rel: 'noopener noreferrer', ...props }
    return (
      <a href={href} className={classList} {...props}>
        {children}
      </a>
    )
  }

  return (
    <NextLink href={href}>
      <a className={classList} {...props}>
        {children}
      </a>
    </NextLink>
  )
}
