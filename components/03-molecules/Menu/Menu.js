import React from 'react'
import classnames from 'classnames'
import { AppContext } from '@contexts'
import { Link } from '@atoms'
import styles from './Menu.css'

export function MenuItem ({
  slug,
  children
}) {
  return (
    <li className={styles.item}>
      <Link
        className={styles.link}
        href={`/${slug}`}
      >
        {children}
      </Link>
    </li>
  )
}

export default function Menu ({
  className,
  ...props
}) {
  const { menu } = React.useContext(AppContext)
  const classList = classnames(styles.root, className)

  return (
    <div className={classList} {...props}>
      <ul className={styles.list}>
        {
          menu.map(row => (
            <MenuItem
              key={row.slug}
              slug={row.slug}
            >
              {row.title}
            </MenuItem>
          ))
        }
      </ul>
    </div>
  )
}
