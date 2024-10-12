import Image from "next/image";
import LogoPrimary from "@/assets/logo-primary.png";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Button } from "../ui/button";
import { HomeSection } from "@/app/page";

interface NavItem {
  label: string;
  section?: HomeSection;
}

export const Header = () => {
  const navItems: NavItem[] = [
    {
      label: "Instituto",
      section: "institute",
    },
    {
      label: "Colégio",
      section: "school",
    },
  ];

  return (
    <nav className="flex items-center justify-between bg-white shadow-sm px-8">
      <Image src={LogoPrimary} height={70} alt="logo" className="py-4" />

      <div className="h-full flex items-center gap-6">
        <div className="h-full flex items-center">
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
        </div>

        <Button variant="primary">Pré-matricula</Button>
      </div>
    </nav>
  );
};
