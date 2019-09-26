import classnames from 'classnames'
import styles from './Loader.css'
import LoaderIcon from '@static/loader.svg'

export default function Loader ({
  variant = Loader.dark,
  className,
  ...props
}) {
  const classList = classnames(styles.root, variant, className)

  return (
    <LoaderIcon className={classList} {...props} />
  )
}

Loader.light = styles.lightVariant
Loader.dark = styles.darkVariant
