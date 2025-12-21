import React from 'react'
import styles from './footer.module.css'

const Footer = () => {
  console.log("Footer component rendered");
    return (
    <div className={styles.container}>
        <div>© 2025 CodeFebs. All Rights Reserved</div>
        <div></div>
    </div>
  )
}

export default Footer
