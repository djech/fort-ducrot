import React from 'react'
import styles from './footer.module.css'

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.section}>
        <div className={styles.categories}>
          <h2 className={styles.title}>Visites</h2>
          <div className={styles.description}></div>
        </div>
        <div className={styles.categories}>
          <h2 className={styles.title}>Besoins</h2>
          <div className={styles.description}></div>
        </div>
        <div className={styles.categories}>
          <h2 className={styles.title}>Partenaires</h2>
          <div className={styles.description}></div>
        </div>
        <div className={styles.categories}>
          <h2 className={styles.title}>Contact</h2>
          <div className={styles.description}></div>
        </div>
      </div>
        
        <div>©FortDucrot. Tout droit réservé.</div>
    </div>
  )
}

export default Footer