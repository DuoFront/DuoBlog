import { request } from "../../lib/datocms";
import Header from "../../src/components/Header";
import { BlogPostCorpo } from "../../src/components/BlogPostCorpo";
import Head from "next/head";
export default function BlogPost(props) {
  const { postData } = props;
  return (
    <>
    <Header/>
    <BlogPostCorpo postData={postData} link="/"/>
  </>
  );
}


const PATHS_QUERY = `
query MyQuery {
  allArticles {
    slug
  }
}
`;

export const getStaticPaths = async () => {
  const slugQuery = await request({
    query: PATHS_QUERY,
  });

  let paths = [];
  slugQuery.allArticles.map((p) => paths.push(`/blog/${p.slug}`));

  return {
    paths,
    fallback: false,
  };
};
const ARTICLE_QUERY = `
query MyQuery($slug: String) {
  article(filter: {slug: {eq: $slug}}) {
    author {
      name
    }
    content {
      value
      blocks {
        __typename
        ... on ImageRecord {
          id
          image { 
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
    id
    publishDate
    slug
    title
  }
}
`;
export const getStaticProps = async ({ params }) => {
  const post = await request({
    query: ARTICLE_QUERY,
    variables: { slug: params.slug },
  });
  return {
    props: {
      postData: post.article,
    },
  };
};
