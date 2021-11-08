import React from 'react';
import image from '../../assets/images/hero.jpg'
import Image from 'next/image'
import Link from "next/link";
import styles from './styles.module.css'
export function Hero(){
  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
      <Image src={image} className={styles.image}/>
      </div>
      <div className={styles.texto}>
        <p className={styles.title}>Blog oficial da Duofront, onde serão postados atualizações de tecnologia, sei la</p>
        <p className={styles.criadores}>Saiba mais sobre os Criadores da Duo</p>
        <div className={styles.flex}>
        <Link href="/alex">Alex Sant'Anna</Link>
        <Link href="/">Paola Guedes</Link>
        </div>
      </div>
    </div>
  )
}