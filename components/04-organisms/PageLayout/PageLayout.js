import classnames from 'classnames'
import { HtmlHead } from '@atoms'
import { GlobalFooter, GlobalHeader } from '@organisms'
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
        <GlobalHeader className={styles.header} />

        <main id='content' className={styles.content}>
          {children}
        </main>

        <GlobalFooter className={styles.footer} />
      </div>
    </React.Fragment>
  )
}
