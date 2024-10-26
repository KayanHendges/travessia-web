"use client";
import Image from "next/image";
import LogoPrimary from "@/assets/logo-primary.png";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Button } from "../ui/button";
import { HomeSection } from "@/app/page";
import {
  Drawer,
  DrawerContent,
  DrawerTitle,
  DrawerTrigger,
} from "../ui/drawer";

import { Menu } from "lucide-react";
import React from "react";
import { usePathname } from "next/navigation";

interface NavItem {
  label: string;
  section?: HomeSection;
  link?: string;
  handler?: () => void;
}

export const Header = () => {
  const [isDrawerOpen, setIsDrawerOpen] = React.useState<boolean>(false);

  const pathname = usePathname();

  const navItems: NavItem[] = [
    {
      label: "Home",
      handler: () => {
        const main = document.getElementsByTagName("main");

        if (main) {
          main[0].scrollTo({ top: 0 });
        }
      },
    },
    {
      label: "Instituto",
      section: "about-us",
    },
    {
      label: "Educação",
      section: "education",
    },
    {
      label: "Eventos",
      section: "events",
    },
    {
      label: "Contato",
      section: "contact",
    },
  ];

  React.useEffect(() => {
    if (isDrawerOpen) setIsDrawerOpen(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  return (
    <header className="flex items-center justify-between gap-6 bg-white shadow-sm px-4 md:px-8 sticky top-0">
      <Image src={LogoPrimary} height={70} alt="logo" className="py-4" />

      <div className="h-full flex items-center gap-2 md:gap-6">
        <nav className="h-full hidden md:flex items-center">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.section ? `#${item.section}` : ""}
              className={cn(
                "h-full flex items-center text-zinc-900",
                "border-b-4 border-b-transparent px-4",
                "hover:border-primary hover:text-primary transition-colors"
              )}
            >
              <span className="font-semibold">{item.label}</span>
            </Link>
          ))}
        </nav>

        <Button variant="primary">Pré-matricula</Button>

        <Drawer open={isDrawerOpen} onOpenChange={setIsDrawerOpen}>
          <DrawerTrigger className="flex md:hidden text-primary hover:bg-zinc-100 transition-colors rounded-lg p-2">
            <Menu />
          </DrawerTrigger>
          <DrawerContent>
            <DrawerTitle hidden>Menu</DrawerTitle>
            <nav className="flex flex-col gap-1 p-4">
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.section ? `#${item.section}` : ""}
                  onClick={() => {
                    setIsDrawerOpen(false);
                  }}
                  className={cn(
                    "w-full px-3 py-2 text-primary-700 hover:text-primary-900 hover:bg-zinc-100 transition-colors rounded-lg"
                  )}
                >
                  <span className="font-semibold">{item.label}</span>
                </Link>
              ))}
            </nav>
          </DrawerContent>
        </Drawer>
      </div>
    </header>
  );
};
