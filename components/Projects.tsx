import { ProjectProps } from "@/models/project.model";
import Image from "next/image";
import Link from "next/link";
import { FormattedMessage } from "react-intl";

export function Projects({ pinnedRepos, imageUrls }: ProjectProps) {
  return (
    <section>
      <h2 className="font-bold text-2xl mt-4 mb-2">
        <FormattedMessage id="projects-title" />
      </h2>
      <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 pb-8">
        {pinnedRepos?.length
          ? pinnedRepos.map((repo, index) => (
              <Link href={repo.url} key={index} className="flex flex-col gap-2 p-4 rounded-md border-2 justify-between">
                  <Image alt="" key={index} src={imageUrls.find((repoImage) => repoImage.repo === repo.name)?.url ?? '/default-repo-image.png'} width={120} height={120} />
                <div>
                  <h2 className="font-bold">{repo.name}</h2>
                  <p className="text-sm">{repo.description}</p>
                <span className="text-xs">{repo.primaryLanguage}</span>
                </div>
              </Link>
            ))
          : null}
      </ul>
    </section>
  );
}
