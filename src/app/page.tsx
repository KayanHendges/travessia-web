"use client";
import React from "react";
import { BannerHome } from "@/components/Banners/banner-home";
import { HomeSection } from "@/components/Sections/home-section";
import { useHash } from "@/hooks/use-hash";
import { scrollToSection } from "@/utils/dom";
import LogoPrimary from "@/assets/logo-primary.png";
import Image from "next/image";

const sections = {
  "about-us": (
    <HomeSection.Container>
      <HomeSection.Content>
        <HomeSection.TextContainer>
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
      </HomeSection.Content>
      <Image src={LogoPrimary} height={400} alt="logo" className="m-6" />
    </HomeSection.Container>
  ),
  education: (
    <HomeSection.Container variant="gray">
      <HomeSection.Content>
        <HomeSection.TextContainer>
          <HomeSection.TitleContainer>
            <HomeSection.Title>Educação Integral Católica</HomeSection.Title>
            <HomeSection.Subtitle>
              Preparando os líderes de amanhã com virtudes e sabedoria.
            </HomeSection.Subtitle>
          </HomeSection.TitleContainer>
          <HomeSection.Paragraph>
            No Instituto Travessia, acreditamos que a educação vai além do
            ensino acadêmico: ela é o alicerce para a formação integral do ser
            humano. Com base na pedagogia católica, nosso objetivo é desenvolver
            todos os aspectos dos nossos alunos – físico, emocional, intelectual
            e espiritual – preparando-os para uma vida plena e virtuosa.
          </HomeSection.Paragraph>
        </HomeSection.TextContainer>
      </HomeSection.Content>
    </HomeSection.Container>
  ),
  events: <HomeSection.Container></HomeSection.Container>,
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
