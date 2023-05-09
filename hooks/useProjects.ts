import { useState } from "react";

interface Project {
  id: string;
  name: string;
}

const initialProjects: Project[] = [];

export default function useProjects(): [Project[], () => Promise<void>] {
  const [projects, setProjects] = useState<Project[]>(initialProjects);

  async function fetchProjects(): Promise<void> {
    try {
      const res = await fetch("/api/projects");
      const data = await res.json();
      setProjects(data.data);
    } catch (error) {}
  }

  return [projects, fetchProjects];
}
