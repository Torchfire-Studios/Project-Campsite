import { getProjects } from "@/lib/get-projects";
import { ProjectNav } from "./project-nav";

export default function ProjectLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const projects = getProjects();

  return (
    <div>
      {/* Project Sub-Navbar */}
      {/* <ProjectNav projects={projects} /> */}
      {/* Project Content */}
      <>{children}</>
    </div>
  );
}
