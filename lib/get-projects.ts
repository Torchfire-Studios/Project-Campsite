import fs from "fs";
import path from "path";

export interface Project {
  name: string;
  displayName: string;
  href: string;
}

/**
 * Reads the app/projects directory and returns an array of project objects
 * This function can only be used in Server Components
 */
export function getProjects(): Project[] {
  const projectsDir = path.join(process.cwd(), "app", "projects");

  try {
    const entries = fs.readdirSync(projectsDir, { withFileTypes: true });

    // Filter for directories only, excluding special Next.js files
    const projectFolders = entries
      .filter((entry) => entry.isDirectory())
      .map((entry) => entry.name);

    // Transform folder names into project objects
    const projects: Project[] = projectFolders.map((folderName) => {
      // Add space after "project" if it exists in the name
      const displayName = folderName
        .replace(/project/i, "project ")
        .toUpperCase();

      return {
        name: folderName,
        displayName: displayName,
        href: `/projects/${folderName}`,
      };
    });

    return projects;
  } catch (error) {
    console.error("Error reading projects directory:", error);
    return [];
  }
}
