import { ImageUrl } from "@/pages/api/demo-image";
import { PinnedRepos } from "@/pages/api/pinned-repos";

export interface ProjectProps {
    pinnedRepos: PinnedRepos[],
    imageUrls: ImageUrl[]
}
