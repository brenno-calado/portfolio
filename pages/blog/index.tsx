import BlogLink from "@/components/shared/BlogLink";
import { PostData } from "@/types/post";
import { getSortedPostsData } from "@/utils/posts";
import Head from "next/head";
import Link from "next/link";

type BlogIndexProps = {
  allPostsData: PostData[];
};

export default function BlogIndex({ allPostsData }: Readonly<BlogIndexProps>) {
  return (
    <>
      <Head>
        <title>Blog</title>
      </Head>
      <section className="container mx-8">
        <h2 className="font-bold text-2xl mt-4 mb-2 uppercase">Blog</h2>
        <Link href="/">Home</Link>
        <ul className="flex gap-8">
          {allPostsData.map((postData) => (
            <BlogLink key={postData.id} {...postData} />
          ))}
        </ul>
      </section>
    </>
  );
}

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}
