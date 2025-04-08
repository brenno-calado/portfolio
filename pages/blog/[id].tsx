import type { PostData } from "@/types/post";
import { getAllPostIds, getPostData } from "@/utils/posts";
import { GetStaticPropsContext } from "next";

interface PostProps {
  readonly postData: PostData;
}

export default function Post({ postData }: PostProps) {
  return (
    <article className="container mx-auto px-4 py-8">
      <style>
        {`
        h1 {
          font-size: 2.5rem;
          font-weight: bold;
          margin-bottom: 1rem;
        }

        h2 {
          font-size: 2rem;
          font-weight: bold;
          margin-bottom: 0.75rem;
        }

        h3 {
          font-size: 1.5rem;
          font-weight: bold;
          margin-bottom: 0.5rem;
        }

        p {
          font-size: 1rem;
          line-height: 1.6;
          margin-bottom: 1rem;
        }

        ul,
        ol {
          margin: 1rem 0;
          padding-left: 1.5rem;
        }

        ul {
          list-style-type: disc;
        }

        ol {
          list-style-type: auto;
        }

        li {
          margin-bottom: 0.5rem;
        }

        code {
          background-color: #f5f5f5;
          padding: 0.2rem 0.4rem;
          border-radius: 4px;
          color: #d63384;
        }
      `}
      </style>
      <h1 className="text-3xl font-bold mb-2">{postData.title}</h1>
      <time className="text-gray-500 mb-6">{postData.lastEditDate}</time>
      <section className="prose lg:prose-xl" dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
    </article>
  );
}

export async function getStaticPaths() {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }: GetStaticPropsContext) {
  const postData = await getPostData(String(params?.id));

  return {
    props: {
      postData,
    },
  };
}
