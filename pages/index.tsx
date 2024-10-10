import {
  Background,
  Contact,
  Experience,
  Projects,
  Skills,
  Welcome,
} from "@/components";
import { Inter } from "next/font/google";
import { PinnedRepos } from "./api/pinned-repos";
import { GetServerSidePropsContext } from "next";
import { RepoImage } from "@/models/project.model";

interface IndexProps { pinnedRepos: PinnedRepos[], imageUrls: RepoImage[] }

const inter = Inter({ subsets: ["latin"] });

export async function getServerSideProps({ res }: GetServerSidePropsContext) {
  res.setHeader(
    'Cache-Control',
    'public, s-maxage=10, stale-while-revalidate=59',
  );

  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/pinned-repos`);
    const pinnedRepos = (await res.json()) as { data: PinnedRepos[] };

    let imageUrls: RepoImage[] = [];
    pinnedRepos.data.forEach((repo) => {
      imageUrls.push({ url: `${repo.url}/blob/main/demo.gif?raw=true`, repo: repo.name })
    });

    return {
      props: { imageUrls, pinnedRepos: pinnedRepos.data }
    }
  } catch (error) {
    console.error(error);

    return {
      props: {}
    }
  }
}

export default function Home({ imageUrls, pinnedRepos }: IndexProps) {
  return (
    <main className={`${inter.className} p-4 max-w-5xl md:mx-auto`}>
      <Welcome />
      <Projects imageUrls={imageUrls} pinnedRepos={pinnedRepos}  />
      <Contact />
    </main>
  );
}
