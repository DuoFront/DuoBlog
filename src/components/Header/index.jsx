import React from 'react';
import styles from './styles.module.css'
import Link from 'next/link';
export default function Header(){
  return(
    <header className={styles.container}>
      <h1><Link href="/">Duofront</Link></h1>
      <h2>Menu</h2>
    </header>
  )
}