import { Contact, Projects, Welcome } from "@/components";
import { LastBlogPosts } from "@/components/LastBlogPosts";
import Loading from "@/components/shared/Loading";
import { RepoImage } from "@/models/project.model";
import { PinnedRepos } from "@/pages/api/pinned-repos";
import type { PostData } from "@/types/post";
import { getSortedPostsData } from "@/utils/posts";
import { Inter } from "next/font/google";
import Head from "next/head";
import { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";

const inter = Inter({ subsets: ["latin"] });

interface HomeProps {
  allPostsData: PostData[];
}

export default function Home({ allPostsData }: Readonly<HomeProps>) {
  const [imageUrls, setImageUrls] = useState<RepoImage[]>();
  const [pinnedRepos, setPinnedRepos] = useState<PinnedRepos[]>();
  const [loadingPinnedRepos, setLoadingPinnedRepos] = useState<boolean>(true);

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_HOST}/api/pinned-repos`
        );
        const pinnedRepos = (await res.json()) as { data: PinnedRepos[] };

        const imageUrls: RepoImage[] = [];
        for (const repo of pinnedRepos.data) {
          imageUrls.push({
            url: `${repo.url}/blob/main/demo.gif?raw=true`,
            repo: repo.name,
          });
        }

        setImageUrls(imageUrls);
        setPinnedRepos(pinnedRepos.data);
      } catch (err) {
        toast(
          (err as Error)?.message ??
            "An error occurred while fetching pinned repos.",
          {
            icon: "❌",
            removeDelay: 2000,
          }
        );
      }
      setLoadingPinnedRepos(false);
    };

    fetchRepos();
  }, []);

  const renderProjects = () => {
    if (loadingPinnedRepos) {
      return <Loading />;
    }

    return (
      <Projects imageUrls={imageUrls ?? []} pinnedRepos={pinnedRepos ?? []} />
    );
  };

  return (
    <>
      <Head>
        <title>Brenno&apos;s Portfolio</title>
      </Head>
      <main className={`${inter.className}`}>
        <Toaster />
        <Welcome />
        <LastBlogPosts allPostsData={allPostsData} />
        {renderProjects()}
        <Contact />
      </main>
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
