import classnames from 'classnames'
import { HtmlHead } from '@atoms'
import styles from './PageLayout.css'

export default function PageLayout ({
  title,
  className,
  children,
  ...props
}) {
  const classList = classnames(
    styles.root,
    className
  )

  return (
    <React.Fragment>
      <HtmlHead title={title} />

      <div className={classList} {...props}>
        <main id='content' className={styles.content}>
          {children}
        </main>
      </div>
    </React.Fragment>
  )
}
