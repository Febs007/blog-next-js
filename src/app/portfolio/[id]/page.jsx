"use client";
import React from 'react';
import Image from 'next/image';
import styles from './detail.module.css';

// Simulasi Database Proyek
const projectData = {
  "smart-dashboard": {
    title: "Smart Enterprise Dashboard",
    role: "Fullstack Developer & Data Analyst",
    stack: "Next.js, Tailwind, Python, PostgreSQL",
    image: "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg",
    overview: "Sebuah platform analitik tingkat tinggi yang mengintegrasikan data penjualan real-time dengan prediksi trend menggunakan Machine Learning.",
  },
  "trend-prediction": {
    title: "Market Trend Prediction AI",
    role: "Data Scientist",
    stack: "Python, Scikit-Learn, Flask, React",
    image: "https://images.pexels.com/photos/669615/pexels-photo-669615.jpeg",
    overview: "Proyek ini berfokus pada pengolahan big data untuk memprediksi pergerakan pasar saham dengan akurasi tinggi.",
  }
};

const ProjectDetail = ({ params }) => {
  const { id } = React.use(params);
  
  // Ambil data berdasarkan ID, jika tidak ada tampilkan data default
  const project = projectData[id] || {
    title: "Project Not Found",
    role: "-",
    stack: "-",
    image: "https://images.pexels.com/photos/4439425/pexels-photo-4439425.jpeg",
    overview: "Detail proyek belum tersedia."
  };

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1 className={styles.title}>{project.title}</h1>
        <div className={styles.meta}>
          <span><strong>Role:</strong> {project.role}</span>
          <span><strong>Stack:</strong> {project.stack}</span>
        </div>
      </header>

      <div className={styles.imageMain}>
        <Image 
          src={project.image} 
          fill 
          alt={project.title} 
          className={styles.img}
          priority 
        />
      </div>

      <section className={styles.content}>
        <h2>Overview</h2>
        <p>{project.overview}</p>
        
        {/* Tambahkan section tech stack agar lebih berwibawa */}
        <div className={styles.techList}>
            {project.stack.split(',').map((tech, index) => (
                <span key={index} className={styles.techItem}>{tech.trim()}</span>
            ))}
        </div>
      </section>
    </div>
  );
};

export default ProjectDetail;