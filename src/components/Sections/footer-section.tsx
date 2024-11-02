import { PublicImages } from "@/assets/images";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { Separator } from "../ui/separator";
import { InstagramLogoIcon } from "@radix-ui/react-icons";

type FooterLinkProps = React.ComponentPropsWithoutRef<"a">;

const FooterLink = ({ className, ...props }: FooterLinkProps) => {
  return (
    <a
      target="_blank"
      className={cn(
        "text-white text-sm transition-colors hover:text-primary-100",
        className
      )}
      {...props}
    />
  );
};

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
      <div className="w-full max-w-content-section flex flex-col justify-around items-center gap-10">
        <section className="flex flex-col items-center text-center text-white gap-1 italic mx-auto ">
          <h3 className="max-w-[500px] text-xl font-semibold">
            “Fiz tudo quanto soube e pude pelos jovens, que são o amor de toda
            minha vida”.
          </h3>
          <span className="text-lg">São João Bosco</span>
        </section>

        <Separator className="w-full" />

        <div className="w-full flex flex-col md:flex-row justify-evenly items-center gap-y-12">
          <section className="flex flex-col items-center text-white text-sm gap-2">
            <FooterLink
              href="https://www.instagram.com/itravessia"
              className="flex items-center gap-2"
            >
              <InstagramLogoIcon className="w-6 h-6" />
              @itravessia
            </FooterLink>

            <span>
              <strong>telefone: </strong>
              <FooterLink href="https://wa.me/5547999910956">
                (47) 99991-0956
              </FooterLink>
            </span>

            <span>
              <strong>email: </strong>
              <FooterLink href="mailto:sc.travessia@gmail.com">
                sc.travessia@gmail.com
              </FooterLink>
            </span>

            <p className="text-center">
              <strong>endereço: </strong>
              <FooterLink
                href="https://maps.app.goo.gl/XBK9in2u8gXfStvT8"
                className="underline"
              >
                R. Domingos Rosa, 97 - Ilha da Figueira,
                <br />
                Jaraguá do Sul - SC, 89258-000
              </FooterLink>
            </p>
          </section>

          <section className="w-fit flex flex-col text-center text-white">
            <Image
              src={PublicImages.logo.white.src}
              alt={PublicImages.logo.white.alt}
              height={120}
              className="mx-auto mb-4"
            />
            <strong className="text-sm">CNPJ: 52.657.516/0001-07</strong>
            <strong className="text-xs font-light my-auto">
              Copyright 2023 © Todos os direitos reservados.
            </strong>
          </section>
        </div>
      </div>
    </footer>
  );
};
