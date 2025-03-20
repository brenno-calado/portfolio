import type { PostData } from "@/types/post";
import { getAllPostIds, getPostData } from "@/utils/posts";
import { GetStaticPropsContext } from "next";

interface PostProps {
  postData: PostData;
}

export default function Post({ postData }: PostProps) {
  return (
    <article className="container mx-auto px-4 py-8">
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
