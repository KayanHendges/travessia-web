"use client";
import React from "react";
import { BannerHome } from "@/components/Banners/banner-home";
import { HomeSection } from "@/components/Sections/home-section";
import { useHash } from "@/hooks/use-hash";
import { scrollToSection } from "@/utils/dom";
import Image from "next/image";
import { PublicImages } from "@/assets/images";
import { ValuesCarousel } from "@/components/Carousels/values-carousel";

const sections = {
  "about-us": (
    <HomeSection.Container>
      <HomeSection.Content>
        <HomeSection.TextContainer className="basis-2/3">
          <HomeSection.Title>Quem Somos</HomeSection.Title>
          <HomeSection.Paragraph>
            O <HomeSection.Strong>Instituto Travessia</HomeSection.Strong> é uma
            instituição de ensino católica, fundada em maio de 2023 com o
            propósito de promover a educação integral e a formação cultural
            humana, inspirando-se nos valores e na tradição da Igreja. Como uma
            associação civil de direito privado e caráter filantrópico, não
            possui fins lucrativos, dedicando-se inteiramente ao desenvolvimento
            pessoal e social dos seus alunos e da comunidade.
          </HomeSection.Paragraph>
        </HomeSection.TextContainer>
        <div className="flex items-center justify-center bg-primary m-6 p-8 rounded-2xl shadow-md shadow-zinc-400">
          <Image
            src={PublicImages.logo.white.src}
            alt={PublicImages.logo.white.alt}
            className="w-full max-w-[300px] md:max-w-[350]"
          />
        </div>
      </HomeSection.Content>
    </HomeSection.Container>
  ),
  education: (
    <HomeSection.Container variant="gray">
      <HomeSection.Content mobileContentOrder="reverse">
        <div className="flex items-center justify-center bg-primary m-6 overflow-hidden rounded-2xl shadow-md shadow-zinc-400">
          <Image
            src={PublicImages.donBoscoTeaching.src}
            alt={PublicImages.donBoscoTeaching.alt}
            className="w-full max-w-[400px] object-contain"
          />
        </div>
        <HomeSection.TextContainer className="md:basis-2/3">
          <HomeSection.TitleContainer>
            <HomeSection.Title>Educação Integral Católica</HomeSection.Title>
            <HomeSection.Subtitle>
              Formando bem a alma, o corpo e o intelecto, buscando juntos o céu.
            </HomeSection.Subtitle>
          </HomeSection.TitleContainer>
          <HomeSection.Paragraph>
            O objetivo da nossa escola é promover a educação baseada na Tradição
            da Igreja, no seu Magistério e no ensino dos santos educadores. O
            olhar da instituição se voltará ao desenvolvimento humano integral
            dos alunos, o que implica uma compreensão do mundo fiel à doutrina
            católica.
            <br />
            <br />
            Esta compreensão pode trazer diversas vantagens para a educação das
            crianças e para a sociedade como um todo.
          </HomeSection.Paragraph>
        </HomeSection.TextContainer>
      </HomeSection.Content>
      <HomeSection.Content>
        <ValuesCarousel />
      </HomeSection.Content>
    </HomeSection.Container>
  ),
  events: (
    <HomeSection.Container>
      <HomeSection.Content>
        <HomeSection.TextContainer>
          <HomeSection.TitleContainer>
            <HomeSection.Title>Eventos e Comunidade</HomeSection.Title>
            <HomeSection.Subtitle>
              Promovendo eventos que fortalecem os laços comunitários.
            </HomeSection.Subtitle>
          </HomeSection.TitleContainer>
          <HomeSection.Paragraph>
            A educação vai além da sala de aula e que experiências vividas em
            comunidade fortalecem os valores e laços que cultivamos. Nossos
            eventos são momentos de celebração e aprendizado, que integram
            alunos, famílias e colaboradores, promovendo o convívio e o
            crescimento em um ambiente de fé e amizade.
          </HomeSection.Paragraph>
        </HomeSection.TextContainer>
      </HomeSection.Content>
    </HomeSection.Container>
  ),
  contact: <HomeSection.Container></HomeSection.Container>,
} as const;

export type HomeSection = keyof typeof sections;

const sectionIDs = Object.keys(sections) as HomeSection[];

export default function Home() {
  const hash = useHash();

  React.useEffect(() => {
    const section = hash.replace("#", "");
    if (section) scrollToSection(section);
  }, [hash]);

  return (
    <div className="w-full flex flex-col">
      <BannerHome />

      {sectionIDs.map((id) => (
        <div key={id} id={id}>
          {sections[id]}
        </div>
      ))}
    </div>
  );
}
