import { PublicImages } from "@/assets/images";
import { cn } from "@/lib/utils";
import Image from "next/image";

type FooterSectionProps = React.ComponentPropsWithoutRef<"footer">;

export const FooterSection = ({ className, ...props }: FooterSectionProps) => {
  return (
    <footer
      className={cn(
        "w-full flex items-center justify-center bg-primary px-4 md:px-6 py-8 md:py-12",
        className
      )}
      {...props}
    >
      <div className="w-full max-w-content-section flex flex-col justify-around items-center gap-6">
        <section className="flex flex-col items-center text-center text-white gap-1 italic mx-auto">
          <h3 className="max-w-[500px] text-xl font-semibold">
            “Fiz tudo quanto soube e pude pelos jovens, que são o amor de toda
            minha vida”.
          </h3>
          <span className="text-lg">São João Bosco</span>
        </section>

        <section className="w-full max-w-[720px] grid grid-cols-3 text-center text-white">
          <span className="my-auto">
            <strong>CNPJ:</strong> 52.657.516/0001-07
          </span>

          <Image
            src={PublicImages.logo.white.src}
            alt={PublicImages.logo.white.alt}
            height={120}
            className="mx-auto"
          />

          <strong className="my-auto">
            Copyright 2023 © Todos os direitos reservados.
          </strong>
        </section>
      </div>
    </footer>
  );
};
