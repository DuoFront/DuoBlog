import React from 'react';
import { Image } from "react-datocms";
import Link from "next/link";
import styles from './styles.module.css'
export const BlogPostPreview = (props) => {
  const { data, link } = props;
  return (
    <div className={styles.container}>
      <Link href={`${link}${data.slug}`}><a><Image data={data.coverImage.responsiveImage} className={styles.image}/> </a></Link>
      <div className={styles.data}>{data.publishDate}</div>
      <h2 className={styles.title}>
        <Link href={`${link}${data.slug}`}>
          <a>{data.title}</a>
        </Link>
      </h2>
      <p>{data.excerpet}</p>
    </div>
  );
};