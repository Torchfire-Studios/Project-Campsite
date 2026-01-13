"use client";

import { usePathname } from "next/navigation";
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuLink,
} from "@/components/ui/navigation-menu";
import type { Project } from "@/lib/get-projects";

interface ProjectNavProps {
  projects: Project[];
}

export function ProjectNav({ projects }: ProjectNavProps) {
  const pathname = usePathname();

  return (
    <div className="absolute top-0 z-50 w-full py-4 bg-stone-800/80 backdrop-blur-md border-b border-stone-700/50 mt-28 shadow-lg">
      <div className="flex justify-center">
        <NavigationMenu>
          <NavigationMenuList>
            {projects.map((project) => (
              <NavigationMenuItem key={project.name}>
                <NavigationMenuLink
                  href={project.href}
                  className={`font-[family-name:var(--font-anta)] text-white text-lg font-bold hover:bg-stone-700 ${
                    pathname === project.href ? "bg-stone-700" : ""
                  }`}
                >
                  {project.displayName}
                </NavigationMenuLink>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </div>
  );
}
