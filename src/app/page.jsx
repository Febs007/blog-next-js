import Image from "next/image";
import styles from "./page.module.css";
import Hero from "../../public/man-white.png";

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.textSection}>
        <h1 className={styles.title}>
          Building Smarter Webs with <br /> 
          <span className={styles.highlight}>Data-Driven Insights</span>
        </h1>
        
        <p className={styles.description}>
          Exploring the intersection of <strong>Web Development</strong> and <strong>Data Science</strong>.
        </p>
        
        <div className={styles.buttonGroup}>
          <button className={styles.primaryBtn}>Explore My Projects</button>
          <button className={styles.secondaryBtn}>Hire Me</button>
        </div>
      </div>

      <div className={styles.imageSection}>
        <div className={styles.heroWrapper}>
          <Image 
            src={Hero} 
            alt="Data Visualization and Web Development Illustration"
            priority // Bagus untuk LCP/performance gambar utama
            layout="responsive"
          />
        </div>
      </div>
    </div>
  );
}

