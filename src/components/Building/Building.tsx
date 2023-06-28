import React from 'react'
import styles from './building.module.scss'

export function Building() {
  return (
    <div className={styles.building}>
      <div className={styles.aerial} />
      <div className={styles.circle} />
      <div className={styles.build}>
        <div className={styles.window}>
          <img src="/images/science.png" alt="React" width={'60%'} />
        </div>
        <div className={styles.window}></div>
        <div className={styles.window}></div>
        <div className={styles.window}>
          <img src="/images/science.png" alt="React Native" width={'60%'} />
        </div>
        <div className={styles.window}>
          <img src="/images/angular.png" alt="Angular" width={'60%'} />
        </div>
        <div className={styles.window}></div>
        <div className={styles.window}></div>
        <div className={styles.window}>
          <img src="/images/c-sharp.png" alt="c-sharp" width={'60%'} />
        </div>
        <div className={styles.window}>
          <img src="/images/sql-server.png" alt="c-sharp" width={'60%'} />
        </div>
        <div className={styles.window}></div>
      </div>
    </div>
  )
}

export default Building
