import { ProjectProps } from "@/models/project.model";
import { getLanguageIcon } from "@/utils/languageIcons";
import Image from "next/image";
import Link from "next/link";
import { FormattedMessage } from "react-intl";

export function Projects({ pinnedRepos, imageUrls }: ProjectProps) {
  if (!pinnedRepos?.length || !imageUrls.length) {
    return null;
  }

  return (
    <section>
      <h2 className="font-bold text-2xl mt-4 mb-2 mx-8 uppercase">
        <FormattedMessage id="projects-title" />
      </h2>
      <ul className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4 pb-8 px-8">
        {pinnedRepos?.length
          ? pinnedRepos.map((repo, index) => (
              <Link
                href={repo.url}
                key={index}
                className={`flex flex-col gap-2 rounded-lg justify-between break-inside-avoid mb-4 transition duration-100 group`}
              >
                <Image
                  width={300}
                  height={300}
                  className="w-full rounded-lg group-hover:brightness-75 transition duration-300"
                  alt=""
                  key={index}
                  src={imageUrls.find((repoImage) => repoImage.repo === repo.name)?.url ?? "/default-repo-image.png"}
                  style={{ objectFit: "cover" }}
                />
                <div className="p-4">
                  <h2 className="font-bold group-hover:underline">{repo.name}</h2>
                  <p className="text-sm">{repo.description}</p>
                  <span className="text-xs font-hack">
                    {repo.primaryLanguage}{" "}
                    <code
                      className="text-2xl"
                      style={{
                        color: getLanguageIcon(repo.primaryLanguage).color,
                      }}
                    >
                      {getLanguageIcon(repo.primaryLanguage).icon}
                    </code>
                  </span>
                </div>
              </Link>
            ))
          : null}
      </ul>
    </section>
  );
}
