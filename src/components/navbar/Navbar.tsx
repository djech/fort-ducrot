"use client"
import React from 'react'
import Link from 'next/link'
import styles from './navbar.module.css'

const links = [
    {
        id: 1,
        title: "Accueil",
        url: "/"
    },
    {
        id: 2,
        title: "L'association",
        url: "/association"
    },
    {
        id: 3,
        title: "Le fort",
        url: "/fort"
    },
    {
        id: 4,
        title: "Galerie",
        url: "/gallery"
    },
    {
        id: 5,
        title: "Dernières nouvelles",
        url: "/gazette"
    },
    {
        id: 6,
        title: "Contact",
        url: "/contact"
    }
];

const Navbar = () => {
  return (
    <div className={styles.container}>
        <Link href="/" className={styles.logo}>Fort ducrot</Link>
        <div className={styles.links}>
            {links.map((link) => (
                <Link key={link.id} href={link.url}>
                    {link.title}
                </Link>
            ))}
        </div>
        <button 
            className={styles.logout}
            onClick={() => {
                console.log("logged out");
            }}
        >
            Se déconnecter
        </button>
    </div>
  )
}

export default Navbar;