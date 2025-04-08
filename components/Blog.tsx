import type { PostData } from "@/types/post";
import Link from "next/link";

export function Blog({ allPostsData = [] }: { allPostsData: PostData[] }) {
  if (!allPostsData.length) {
    return null;
  }

  return (
    <section className="container">
      <h2 className="font-bold text-2xl mt-4 mb-2 mx-8 uppercase">Blog</h2>
      <ul className="space-y-6">
        {allPostsData?.map(({ id, lastEditDate, title, description }) => (
          <Link
            key={id}
            href={`/blog/${id}`}
            aria-label={title}
            className="inline-block mt-2 text-blue-500 hover:text-blue-700"
          >
            <li className="border-b p-4 mx-8 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-lg">
              <h3 className="text-xl font-semibold">{title}</h3>
              <time className="text-gray-500 text-sm block mt-1">{lastEditDate}</time>
              <p className="mt-2" style={{ color: "rgb(var(--foreground-rgb))" }}>
                {description}
              </p>
            </li>
          </Link>
        ))}
      </ul>
    </section>
  );
}
