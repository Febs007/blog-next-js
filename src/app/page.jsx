"use client";
import Image from "next/image";
import styles from "./page.module.css";
import Hero from "../../public/hero-new.png";
import { use } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import Snowfall from "react-snowfall";
import { div, section } from "framer-motion/client";
import Button from "@/components/button/button";

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
    <main>
      <section id="hero" className={styles.heroSection}>
        <div className={styles.container}>
          <Snowfall
            color="#059669"
            snowflakeCount={150}
            radius={[0.5, 2.0]} // Membuat partikel kecil seperti titik data
            speed={[0.5, 2.0]} // Gerakan lebih tenang
            style={{
              position: "fixed", // Agar mengikuti scroll
              width: "100vw",
              height: "100vh",
              zIndex: 0,
            }}
          />

          <div className={styles.item}>
            <h1 className={styles.title}>
              Building Smarter Webs with <br />
              <span className={styles.highlight}>Data-Driven Insights</span>
            </h1>
            <motion.p className={styles.description} variants={itemVariants}>
              Exploring the intersection of <strong>Web Development</strong> and{" "}
              <strong>Data Science</strong>.
            </motion.p>

            <div className={styles.buttonGroup}>
              <Button text="Hire Me" url="/about" type="primaryButton" />
              <Button text="Explore My Projects" url="/portfolio" type="secondaryButton" />
            </div>
          </div>

          <div className={styles.item}>
            <Image
              src={Hero}
              alt="Hero Image"
              className={styles.hero}
              priority={true}
            />
          </div>
        </div>
      </section>

      <section id="skills" className={styles.skillsSection}>
        <div className={styles.skillsContainer}>
          <div className={styles.skillsText}>Skills Section</div>
        </div>
      </section>

      <section id="portofolio" className={styles.portfolioSection}>
        <div className={styles.portfolioContainer}>
          <div className={styles.portfolioText}>Portfolio Section</div>
        </div>
      </section>

      <section id="about" className={styles.aboutSection}>
        <div className={styles.aboutContainer}>
          <div className={styles.aboutText}>About Section</div>
        </div>
      </section>

      <section id="contact" className={styles.contactSection}>
        <div className={styles.contactContainer}>
          <div className={styles.contactText}>Contact Section</div>
        </div>
      </section>
    </main>
  );
}
