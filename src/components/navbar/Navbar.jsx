"use client";
import Link from 'next/link';
import React from 'react';
import { usePathname } from 'next/navigation'; 
import { useState, useEffect, useCallback } from "react";
import styles from './navbar.module.css';

const links = [
  { id: 1, title: "Home", url: "/" },
  { id: 2, title: "Portfolio", url: "/portfolio" },
  { id: 3, title: "Blog", url: "/blog" },
  { id: 4, title: "About", url: "/about" },
  { id: 5, title: "Contact", url: "/contact" },
  { id: 6, title: "Dashboard", url: "/dashboard" },
];

const Navbar = () => {
  const pathname = usePathname(); // Definisi pathname agar 'active' link bekerja
  const [hidden, setHidden] = useState(false);

  const showNavbar = useCallback(() => setHidden(false), []);

  useEffect(() => {
    let timeout;

    const handleActivity = () => {
      showNavbar();
      clearTimeout(timeout);

      timeout = setTimeout(() => {
        // Hanya sembunyikan jika posisi scroll > 50px
        if (window.scrollY > 50) {
          setHidden(true);
        }
      }, 2500); 
    };

    window.addEventListener("scroll", handleActivity);
    
    // Munculkan navbar jika mouse mendekati area atas layar
    const handleMouseMove = (e) => {
      if (e.clientY < 80) handleActivity();
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("scroll", handleActivity);
      window.removeEventListener("mousemove", handleMouseMove);
      clearTimeout(timeout);
    };
  }, [showNavbar]);

  return (
    // Tambahkan class hidden secara dinamis di sini
    <nav 
      className={`${styles.container} ${hidden ? styles.hidden : ""}`}
      onMouseEnter={showNavbar}
    >
      <Link href="/" className={styles.logo}>
        Aji Setiawan
      </Link>

      <div className={styles.links}>
        {links.map((link) => (
          <Link 
            key={link.id} 
            href={link.url} 
            className={`${styles.link} ${pathname === link.url ? styles.active : ""}`}
          >
            {link.title}
          </Link>
        ))}

        <button className={styles.signin}>
          Sign In
        </button>

        <button className={styles.logout}>
          Logout
        </button>     
      </div>
    </nav>
  );
};

export default Navbar;