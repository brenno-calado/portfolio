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
import { ImageUrl } from "./api/demo-image";
import { GetServerSidePropsContext } from "next";

interface IndexProps { pinnedRepos: PinnedRepos[], imageUrls: ImageUrl[] }

const inter = Inter({ subsets: ["latin"] });

export async function getServerSideProps({ res }: GetServerSidePropsContext) {
  res.setHeader(
    'Cache-Control',
    'public, s-maxage=10, stale-while-revalidate=59',
  );

  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/pinned-repos`);
    const pinnedRepos = (await res.json()) as { data: PinnedRepos[] };

    const promises: Promise<Response>[] = [];
    pinnedRepos.data.forEach(({ name }) => {
      promises.push(fetch(`${process.env.NEXT_PUBLIC_HOST}/api/demo-image?repo=${name}`));
    });
    const settledPromises = await Promise.allSettled(promises);

    let settledImages: ImageUrl[] = [];
    settledPromises.forEach(async (promise) => {
      if (promise.status === 'fulfilled') {
        const data = await promise.value.json() as ImageUrl;
        settledImages.push(data);
      } else {
        settledImages.push({ imageUrl: '' })
      }
    })

    return {
      props: { imageUrls: settledImages, pinnedRepos: pinnedRepos.data }
    }
  } catch (error) {
    console.error(error);
  }
}

export default function Home({ imageUrls, pinnedRepos }: IndexProps) {
  return (
    <main className={`${inter.className}`}>
      <Welcome />
      <Background />
      <Skills />
      <Experience />
      <Projects imageUrls={imageUrls} pinnedRepos={pinnedRepos}  />
      <Contact />
    </main>
  );
}
