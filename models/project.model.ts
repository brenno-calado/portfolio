import { PinnedRepos } from "@/pages/api/pinned-repos";

export interface RepoImage {
    repo: string;
    url: string;
}

export interface ProjectProps {
    pinnedRepos: PinnedRepos[],
    imageUrls: RepoImage[]
}
