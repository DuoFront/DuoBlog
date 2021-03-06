import Head from "next/head";
import styles from "../styles/Home.module.css";
import { request } from "../lib/datocms";
import Header from "../src/components/Header";
import { BlogPostPreview } from "../src/components/BlogPostPreview";
const HOMEPAGE_QUERY = `
query MyQuery {
  allProjetoalexes {
    title
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
    author {
      name
    }
    tecnology {
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

export default function Alex(props) {
  const { data } = props;
  const posts = data.allProjetoalexes;
  function ajustaData(dataa){
    const dataNova = dataa.split("-").join('')
    return dataNova;
  }
  posts.sort(function(a,b){
    return ajustaData(a.publishDate) > ajustaData(b.publishDate)? -1
    : ajustaData(a.publishDate) < ajustaData(b.publishDate)? 1: 0;
  })
  console.log(posts)
  return (
      <>
      <Head>
        <title>DuoBlog Alex</title>
      </Head>
      <Header />
      <main className={styles.main}>
      <div className={styles.container}>
      <div>
        <h1 className={styles.titulo}>Alex</h1>
      </div>
      <div className={styles.postContainer}>
        {posts.map((p) => (
          <BlogPostPreview key={p.id} data={p} link="/alex/"/>
          ))}
      </div>
    </div>
    </main>
    </>
  );
}
