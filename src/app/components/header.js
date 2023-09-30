'use client'
import Link from 'next/link';
import React, { useState } from 'react';
import styles from '@/app/styles/header.module.css';



const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <div className={styles.header}>
        <Link href="/" className={styles.a}>
          <h2 className={styles.name}>&lt;/&gt;CodeWithZaibi</h2>
        </Link>
        <div className="navbar">
          <ul className={`${styles.navlist} ${isMenuOpen ? styles.active : ''}`} onClick={toggleMenu}>
            <li className={styles.li}><Link className={styles.a} href="/">Home</Link></li>
            <li className={styles.li}><Link className={styles.a} href="/courses">Course</Link></li>
            <li className={styles.li}><Link className={styles.a} href="/tutorial">Tutorial</Link></li>
            <li className={styles.li}><Link className={styles.a} href="/notes">Notes</Link></li>
            <li className={styles.li}><Link className={styles.a} href="/contact">Contact</Link></li>
            <li className={styles.li}><Link className={styles.a} href="/workwithus">Work With Us</Link></li>
            <Link className="no-underline" href="/login"><button className={styles.button}>LogIn</button></Link>
            <Link className="no-underline" href="/signup"><button className={styles.button}>SignUp</button></Link>
          </ul>
        </div>
        <div className={`${styles.hamburger} ${isMenuOpen ? styles.active : ''}`} onClick={toggleMenu}>
          <span className={`${styles.bar} ${isMenuOpen ? styles.active : ''}`}></span>
          <span className={`${styles.bar} ${isMenuOpen ? styles.active : ''}`}></span>
          <span className={`${styles.bar} ${isMenuOpen ? styles.active : ''}`}></span>
        </div>


      </div>
    </>
  );
};

export default Header;
