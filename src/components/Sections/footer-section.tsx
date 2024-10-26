import { cn } from "@/lib/utils";

type FooterSectionProps = React.ComponentPropsWithoutRef<"footer">;

export const FooterSection = ({ className, ...props }: FooterSectionProps) => {
  return (
    <footer
      className={cn(
        "w-full flex items-center justify-center bg-primary px-4 md:px-6 py-6 md:py-8",
        className
      )}
      {...props}
    >
      <div className="w-full max-w-content-section flex justify-around gap-4"></div>
    </footer>
  );
};
