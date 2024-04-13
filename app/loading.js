import styles from "./loading.module.css"

function LoadingTasks() {
  return (
    <div className={styles.container}>
      <div className={styles.loader}></div>
    </div>
  )
}

export default LoadingTasks
