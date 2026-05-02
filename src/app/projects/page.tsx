import { getProjects } from "../../lib/content";
import { getAbout } from "../../lib/content";
import ProjectsClient from "./ProjectsClient";

export default async function Projects() {
  const [projects, about] = await Promise.all([
    getProjects(),
    Promise.resolve(getAbout()),
  ]);
  return <ProjectsClient projects={projects} openSource={about.openSource} />;
}
