import react from 'react';
import styles from './about.module.css';
import Image from 'next/image';


const About = () => {
  // Ganti URL ini dengan URL gambar langsung dari Pexels (Klik kanan pada gambar > Copy Image Address)
  const imageUrl = "https://images.pexels.com/photos/4709289/pexels-photo-4709289.jpeg";

  return (
    <div className={styles.container}>  
      {/* Bagian Hero About */}
      <div className={styles.imageContainer}>
        <div className={styles.imageWrapper}>
          <Image 
            src={imageUrl} 
            fill={true} 
            alt="Person working on a computer" 
            className={styles.img}
            style={{ objectFit: 'cover' }}
          />
        </div>
        <div className={styles.imageOverlay}>
          <h1 className={styles.imageTitle}>The Person Behind the Pixels</h1>
          <h2 className={styles.imageDesc}>Bridging the gap between Web Development and Data Science.</h2>
        </div>
      </div> 

      {/* Bagian Konten Deskripsi */}
      <div className={styles.contentContainer}>
        <div className={styles.textSection}>
          <h3>My Story</h3>
          <p>
            I am a [Your Name], a developer who doesn't just build websites, 
            but creates data-driven experiences. With a strong foundation in 
            <strong> Web Development</strong> and a passion for <strong>Data Science</strong>, 
            I focus on making the web more intelligent.
          </p>
        </div>

        <div className={styles.textSection}>
          <h3>Why Data & Web?</h3>
          <p>
            In today's world, data is everything. My goal is to transform complex datasets 
            into interactive, user-friendly web interfaces that help people make better decisions.
          </p>
        </div>
      </div> 
    </div>  
    );
}

export default About;