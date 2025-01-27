import { ProjectProps } from "@/models/project.model";
import Image from "next/image";
import Link from "next/link";
import { FormattedMessage } from "react-intl";

export function Projects({ pinnedRepos, imageUrls }: ProjectProps) {
  const colors = ['bg-blue-100', 'bg-slate-100', 'bg-indigo-100', 'bg-gray-100'];

  return (
    <section>
      <h2 className="font-bold text-2xl mt-4 mb-2 mx-8 uppercase">
        <FormattedMessage id="projects-title" />
      </h2>
      <ul className="columns-2 md:columns-3 lg:columns-4 gap-4 pb-8 px-8">
        {pinnedRepos?.length
          ? pinnedRepos.map((repo, index) => (
              <Link href={repo.url} key={index} className={`flex flex-col gap-2 rounded-lg justify-between break-inside-avoid ${colors[index % colors.length]} mb-4`}>
                <div className="p-4">
                  <h2 className="font-bold">{repo.name}</h2>
                  <p className="text-sm">{repo.description}</p>
                  <span className="text-xs">{repo.primaryLanguage}</span>
                </div>
                <Image width={300} height={300} className="w-full rounded-br-lg rounded-bl-lg" alt="" key={index} src={imageUrls.find((repoImage) => repoImage.repo === repo.name)?.url ?? '/default-repo-image.png'} style={{ objectFit: 'cover'}} />
              </Link>
            ))
          : null}
      </ul>
    </section>
  );
}
