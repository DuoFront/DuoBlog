import Head from "next/head";
import styles from "../styles/Home.module.css";
import { request } from "../lib/datocms";
import Header from "../src/components/Header";
import { BlogPostPreview } from "../src/components/BlogPostPreview";
import { Hero } from "../src/components/Hero";
const HOMEPAGE_QUERY = `
query MyQuery {
  allArticles {
    title
    author {
      name
    }
    content {
      value
    }
    coverImage {
      responsiveImage {
        width
        webpSrcSet
        title
        srcSet
        src
        sizes
        height
        bgColor
        base64
        aspectRatio
        alt
      }
    }
    excerpet
    id
    publishDate
    slug
  }
}
`;

export async function getStaticProps() {
  const data = await request({
    query: HOMEPAGE_QUERY,
  });
  return {
    props: { data },
  };
}

export default function Home(props) {
  const { data } = props;
  const posts = data.allArticles;
  function ajustaData(dataa){
    const dataNova = dataa.split("-").join('')
    return dataNova;
  }
  posts.sort(function(a,b){
    return ajustaData(a.publishDate) > ajustaData(b.publishDate)? -1
    : ajustaData(a.publishDate) < ajustaData(b.publishDate)? 1: 0;
  })
  return (
      <>
      <Head>
        <title>Duofront</title>
      </Head>
      <Header />
      <main className={styles.main}>
      <div className={styles.container}>
      <div>
        <Hero/>
        <h1 className={styles.titulo}>DuoBlog melhores assuntos :P</h1>
      </div>
      <div className={styles.postContainer}>
        {posts.map((p) => (
          <BlogPostPreview key={p.id} data={p} link="/blog/"/>
          ))}
      </div>
    </div>
    </main>
    </>
  );
}

