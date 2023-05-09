import useProjects from "@/hooks/useProjects";
import { useEffect } from "react";
import { FormattedMessage } from "react-intl";

export function Projects() {
  const [projects, fetchProjects] = useProjects();

  useEffect(() => {
    fetchProjects();
  }, [fetchProjects]);

  return (
    <section>
      <h2>
        <FormattedMessage id="projects-title" />
      </h2>
      <ul>
        {projects?.length &&
          projects.map((project) => <li key={project.id}>{project.name}</li>)}
      </ul>
    </section>
  );
}
