"use client";
import Link from 'next/link';
import Image from 'next/image';
import styles from './portfolio.module.css';
import { motion } from 'framer-motion';

// Contoh data proyek
const projects = [
  { 
    id: "smart-dashboard", 
    title: "Smart Dashboard", 
    category: "Web Development", 
    img: "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg" 
  },
  { 
    id: "trend-prediction", 
    title: "Trend Prediction", 
    category: "Data Science", 
    img: "https://images.pexels.com/photos/669615/pexels-photo-669615.jpeg" 
  },
];

const Portfolio = () => {
  return (
    <motion.div 
      className={styles.container}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <h1 className={styles.title}>Selected Works</h1>
      
      <div className={styles.grid}>
        {projects.map((item) => (
          /* PERBAIKAN: Menggunakan item.id agar sesuai dengan folder [id] */
          <Link href={`/portfolio/${item.id}`} key={item.id} className={styles.card}>
            <div className={styles.imageWrapper}>
              <Image 
                src={item.img} 
                fill 
                alt={item.title} 
                className={styles.img} 
                sizes="(max-width: 768px) 100vw, 33vw"
              />
            </div>
            <div className={styles.info}>
              <span className={styles.category}>{item.category}</span>
              <h3 className={styles.projectTitle}>{item.title}</h3>
            </div>
          </Link>
        ))}
      </div>
    </motion.div>
  );
};

export default Portfolio;