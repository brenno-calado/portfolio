import { ImageUrl } from "@/pages/api/demo-image";
import { PinnedRepos } from "@/pages/api/pinned-repos";
import Image from "next/image";
import { FormattedMessage } from "react-intl";

export function Projects({ pinnedRepos, imageUrls}: { pinnedRepos: PinnedRepos[], imageUrls: ImageUrl[] }) {
  return (
    <section>
      <h2>
        <FormattedMessage id="projects-title" />
      </h2>
      <ul>
        {pinnedRepos?.length
          ? pinnedRepos.map((repo, index) => (
              <li key={index}>
                <h2>{repo.name}</h2>
                <p>{repo.description}</p>
                <span>{repo.primaryLanguage}</span>
              </li>
            ))
          : null}
          {imageUrls?.length ? imageUrls.map((url, index) => <Image alt="" key={index} src={url.imageUrl} />) : null

          }
      </ul>
    </section>
  );
}
