'use client'
import Link from 'next/link';
import React, { useEffect } from 'react';
import styles from '@/app/styles/header.module.css';



const Header = () => {
  useEffect(() => {
        const menuToggle = document.querySelector('label input[type="checkbox"]');
        const menu = document.querySelector('.menu');
        const menuLinks = document.querySelectorAll('label ul li a');
        const menuButtons = document.querySelectorAll('label button');

        menuToggle.addEventListener('change', () => {
            if (menuToggle.checked) {
               
                menu.style.top = '10';
                
            } else {
                menu.style.right = '-100px';
                menu.style.top = '-100px';
            }
        });

        menuLinks.forEach((link) => {
            link.addEventListener('click', () => {
                menuToggle.checked = false;
                menu.style.right = '-100px';
                menu.style.top = '-100px';
            });
        });

        menuButtons.forEach((button) => {
            button.addEventListener('click', () => {
                menuToggle.checked = false;
                menu.style.right = '-100px';
                menu.style.top = '-100px';
            });
        });
    }, []);


    return (
        <>
            <div className={styles.header}>
                <Link href="/" className={styles.a}>
                    <h2 className={styles.name}>&lt;/&gt;CodeWithZaibi</h2>
                </Link>
                <label>
                    <input type="checkbox" />
                    <span className="menu"><span className="hamburger"></span></span>
                    <ul className={styles.navlist} >
                        <li className={styles.li}><Link className={styles.a} href="/">Home</Link></li>
                        <li className={styles.li}><Link className={styles.a} href="/courses">Course</Link></li>
                        <li className={styles.li}><Link className={styles.a} href="/tutorial">Tutorial</Link></li>
                        <li className={styles.li}><Link className={styles.a} href="/notes">Notes</Link></li>
                        <li className={styles.li}><Link className={styles.a} href="/contact">Contact</Link></li>
                        <li className={styles.li}><Link className={styles.a} href="/workwithus">Work With Us</Link></li>
                        <Link className="no-underline" href="/login"><button className={styles.button}>LogIn</button></Link>
                        <Link className="no-underline" href="/signup"><button className={styles.button}>SignUp</button></Link>
                    </ul>
                </label>


            </div>
        </>
    );
};

export default Header;
