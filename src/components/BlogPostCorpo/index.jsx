import React from 'react';
import Head from "next/head";
import styles from './styles.module.css';
import { Image, StructuredText } from "react-datocms";
import Link from "next/link";
export function BlogPostCorpo(props){
  const { postData, link} = props
  
  return(
    <>
    <Head>
      <title>{postData.author.name} - {postData.title}</title>
    </Head>
    <div className={styles.container}>
      <div style={{ maxWidth: "600px", marginTop: "20px" }}>
        <Image data={postData.coverImage.responsiveImage} />
        <h1>{postData.title}</h1>
        <p>
          {postData.author.name} / {postData.publishDate}
        </p>
        <StructuredText
          data={postData.content}
          renderBlock={({ record }) => {
            switch (record.__typename) {
              case "ImageRecord":
                return <Image data={record.image.responsiveImage} />;
              default:
                return null;
            }
          }}
        />
        <div style={{ marginTop: "50px", marginBottom: "25px" }}>
          <Link href={link}>
            <a>⬅️&nbsp;&nbsp;Back to the frontpage</a>
          </Link>
        </div>
      </div>
    </div>
    </>
  )
}