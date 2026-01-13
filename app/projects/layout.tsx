"use client";

import { usePathname } from "next/navigation";
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuLink,
} from "@/components/ui/navigation-menu";

export default function ProjectLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();

  return (
    <div>
      {/* Project Sub-Navbar */}
      <div className="w-full bg-stone-800 border-stone-700 py-3">
        <div className="flex justify-center">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuLink
                  href="/projects/soulbound"
                  className={`font-[family-name:var(--font-anta)] text-white text-lg font-bold hover:bg-stone-700 ${
                    pathname === "/projects/soulbound" ? "bg-stone-700" : ""
                  }`}
                >
                  SOULBOUND
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink
                  href="/projects/ethos"
                  className={`font-[family-name:var(--font-anta)] text-white text-lg font-bold hover:bg-stone-700 ${
                    pathname === "/projects/ethos" ? "bg-stone-700" : ""
                  }`}
                >
                  ETHOS
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>
      </div>
      {/* Project Content */}
      <>{children}</>
    </div>
  );
}
