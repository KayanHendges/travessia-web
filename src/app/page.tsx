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
          <HomeSection.Title>Sobre o Instituto Travessia</HomeSection.Title>
          <HomeSection.Paragraph>
            O Instituto Travessia é uma associação civil de direito privado, sem
            fins econômicos, de caráter filantrópico, assistencial, beneficente
            e educacional. Fundado em 13 de maio de 2023, tem como finalidade a
            promoção da educação e formação cultural humana, baseando-se em
            princípios cristãos. Somos leigos católicos, pais de família, das
            mais variadas profissões e dedicamo-nos a atividades educacionais,
            culturais e sociais, buscando o desenvolvimento integral das pessoas
            e da sociedade, sem distribuir lucros ou vantagens a dirigentes,
            associados ou mantenedores.
          </HomeSection.Paragraph>
        </HomeSection.TextContainer>
      </HomeSection.Content>
      <Image src={LogoPrimary} height={400} alt="logo" className="m-6" />
    </HomeSection.Container>
  ),
  education: <HomeSection.Container></HomeSection.Container>,
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
