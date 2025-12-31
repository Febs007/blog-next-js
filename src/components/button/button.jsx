import react from "react";
import styles from './button.module.css'
import Link from "next/link";

import React from 'react'

const Button = ({text,url,type = "primary"}) => {
    const ButtonClass = `${styles.Button} ${styles[type]}`
  return (
    <Link href={url}>
      <button className={ButtonClass}>{text}</button> 
    </Link>
  )
}

export default Button
