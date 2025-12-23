import type { PostData } from "@/types/post";
import Link from "next/link";
import BlogLink from "./shared/BlogLink";

type BlogProps = {
  allPostsData: PostData[];
};

export function LastBlogPosts({ allPostsData = [] }: Readonly<BlogProps>) {
  if (!allPostsData.length) {
    return null;
  }

  return (
    <section className="container mx-8">
      <h2 className="font-bold text-2xl mt-4 mb-2 uppercase">Last Blog Posts</h2>
      <Link href="/blog">All Posts</Link>
      <ul className="flex gap-8 my-8">
        {allPostsData.slice(0, 2).map((postData) => (
          <BlogLink key={postData.id} {...postData} />
        ))}
      </ul>
    </section>
  );
}
