import { cn } from "@/lib/utils";

type BannerHomeProps = React.ComponentPropsWithoutRef<"section">;

export const BannerHome = ({ className, ...props }: BannerHomeProps) => {
  return (
    <section
      className={cn(
        "w-full aspect-[3/4] md:aspect-[3/1] bg-primary",
        className
      )}
      {...props}
    />
  );
};
