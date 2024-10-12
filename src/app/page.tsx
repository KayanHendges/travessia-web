"use client";
import { HomeSection } from "@/components/Sections/home-section";
import { useHash } from "@/hooks/use-hash";
import { scrollToSection } from "@/utils/dom";
import Image from "next/image";
import React from "react";

const sections = {
  institute: (
    <HomeSection.Container>
      <HomeSection.TextContainer>
        <HomeSection.Title>Instituto</HomeSection.Title>
        <HomeSection.Paragraph>
          O instituto Travessia é muito legal
        </HomeSection.Paragraph>
      </HomeSection.TextContainer>
    </HomeSection.Container>
  ),
  school: (
    <HomeSection.Container>
      <HomeSection.TextContainer>
        <HomeSection.Title>Colégio</HomeSection.Title>
        <HomeSection.Paragraph>
          O colégio Travessia é muito legal
        </HomeSection.Paragraph>
      </HomeSection.TextContainer>
    </HomeSection.Container>
  ),
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
      <div className="w-full h-screen bg-primary"></div>
      {sectionIDs.map((id) => (
        <div key={id} id={id}>
          {sections[id]}
        </div>
      ))}
    </div>
  );
}
