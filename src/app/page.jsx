"use client"
import Image from "next/image";
import styles from "./page.module.css";
import Hero from "../../public/aji-profile.png";
import { use } from "react";
import Link from "next/link";
import { motion } from "framer-motion"
import Snowfall from "react-snowfall";


// Definisi varian animasi
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2, // Efek muncul berurutan
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

export default function Home() {
  return (
    <div className={styles.container}>
      <Snowfall
       color="#059669"
          snowflakeCount={150}
          radius={[0.5, 2.0]} // Membuat partikel kecil seperti titik data
          speed={[0.5, 2.0]}  // Gerakan lebih tenang
          style={{
            position: 'fixed', // Agar mengikuti scroll
            width: '100vw',
            height: '100vh',
            zIndex: 0, 
          }}
        />
      <div className={styles.item}>
        <h1 className ={styles.title}>Building Secure Digital Experiences <br /> 
          <span className={styles.highlight}></span></h1>
          <motion.p className={styles.description} variants={itemVariants}>
           Exploring the intersection of <strong>Cybersecurity  </strong> and <strong>Server Infrastructure</strong>
          </motion.p>

        <div className={styles.buttonGroup}>
          <Link href="/contact" className={styles.primaryButton}>
            Hire Me
          </Link>
          <Link href="/portfolio" className={styles.secondaryButton}>
            Explore My Projects
          </Link>
        </div>
      </div>

      <div className={styles.item}>
        <Image src={Hero} alt="Hero Image" className={styles.hero} priority={true}/>
      </div>
    </div>

  );
}

