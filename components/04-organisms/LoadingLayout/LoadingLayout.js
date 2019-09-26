import { Loader } from '@atoms'
import styles from './LoadingLayout.css'

function LoadingLayout () {
  return (
    <div className={styles.root}>
      <Loader />
    </div>
  )
}

export default LoadingLayout
