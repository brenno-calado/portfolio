import { Contact, Projects, Welcome } from "@/components";
import Loading from "@/components/shared/Loading";
import { RepoImage } from "@/models/project.model";
import { PinnedRepos } from "@/pages/api/pinned-repos";
import { Inter } from "next/font/google";
import { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [imageUrls, setImageUrls] = useState<RepoImage[]>();
  const [pinnedRepos, setPinnedRepos] = useState<PinnedRepos[]>();
  const [loadingPinnedRepos, setLoadingPinnedRepos] = useState<boolean>(true);

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/pinned-repos`);
        const pinnedRepos = (await res.json()) as { data: PinnedRepos[] };

        let imageUrls: RepoImage[] = [];
        pinnedRepos.data.forEach((repo) => {
          imageUrls.push({ url: `${repo.url}/blob/main/demo.gif?raw=true`, repo: repo.name });
        });

        setImageUrls(imageUrls);
        setPinnedRepos(pinnedRepos.data);
      } catch (err) {
        toast((err as Error)?.message ?? "An error occurred while fetching pinned repos.", {
          icon: "❌",
          removeDelay: 2000,
        });
      }
      setLoadingPinnedRepos(false);
    };

    fetchRepos();
  }, []);

  const renderProjects = () => {
    if (loadingPinnedRepos) {
      return <Loading />;
    }

    return <Projects imageUrls={imageUrls ?? []} pinnedRepos={pinnedRepos ?? []} />;
  };

  return (
    <main className={`${inter.className}`}>
      <Toaster />
      <Welcome />
      {renderProjects()}
      <Contact />
    </main>
  );
}
