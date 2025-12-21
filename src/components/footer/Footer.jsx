import React from 'react'
import styles from './footer.module.css'
import Image from 'next/image';

const Footer = () => {
  console.log("Footer component rendered");
    return (
    <div className={styles.container}>
        <div>© 2025 CodeFebs. All Rights Reserved</div>
        <div className={styles.socials}>
          <Image src="/1.png"  width={15} height={15} alt="CodeFebs-Facebook"/>
          <Image src="/2.png"  width={15} height={15} alt="CodeFebs-Instagram" />
          <Image src="/3.png"  width={15} height={15} alt="CodeFebs-Twitter / X"/>
          <Image src="/4.png"  width={15} height={15} alt="CodeFebs-Youtube"/>
        </div>
    </div>
  )
}

export default Footer
