import { PostData } from "@/types/post";
import Link from "next/link";

export default function BlogLink({ id, title, description, lastEditDate }: Readonly<PostData>) {
  return (
    <Link key={id} href={`/blog/${id}`} aria-label={title} className="inline-block mt-2">
      <li className="border-b p-4 transition duration-300 ease-in-out transform hover:shadow-lg">
        <h3 className="text-xl font-semibold">{title}</h3>
        <time className="text-gray-500 text-sm block mt-1">{lastEditDate}</time>
        <p className="mt-2" style={{ color: "rgb(var(--foreground-rgb))" }}>
          {description}
        </p>
      </li>
    </Link>
  );
}
