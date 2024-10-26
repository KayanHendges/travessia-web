import { cn } from "@/lib/utils";
import React from "react";

interface SectionContainerProps
  extends React.ComponentPropsWithoutRef<"section"> {
  variant?: "white" | "gray";
}

const SectionContainer = ({
  className,
  variant = "white",
  ...props
}: SectionContainerProps) => {
  return (
    <section
      className={cn(
        "w-full flex flex-col md:flex-row items-center justify-center gap-6 px-4 md:px-6 py-6 md:py-8",
        variant ? "bg-white" : "bg-zinc-300",
        className
      )}
      {...props}
    />
  );
};

type SectionContent = React.ComponentPropsWithoutRef<"div">;

export const SectionContent = ({ className, ...props }: SectionContent) => {
  return (
    <div className={cn("w-full max-w-content-section", className)} {...props} />
  );
};

type SectionTitleContainerProps = React.ComponentPropsWithoutRef<"h3">;

const SectionTitleContainer = ({
  className,
  ...props
}: SectionTitleContainerProps) => {
  return <h3 className={cn("flex flex-col", className)} {...props} />;
};

type SectionTitleProps = React.ComponentPropsWithoutRef<"h3">;

const SectionTitle = ({ className, ...props }: SectionTitleProps) => {
  return (
    <h3
      className={cn("text-2xl text-zinc-900 font-semibold", className)}
      {...props}
    />
  );
};

type SectionSubtitleProps = React.ComponentPropsWithoutRef<"h4">;

const SectionSubtitle = ({ className, ...props }: SectionSubtitleProps) => {
  return (
    <h4
      className={cn("text-lg text-zinc-700 font-semibold", className)}
      {...props}
    />
  );
};

type SectionParagraphProps = React.ComponentPropsWithoutRef<"p">;

const SectionParagraph = ({ className, ...props }: SectionParagraphProps) => {
  return <p className={cn("text-lg text-zinc-800", className)} {...props} />;
};

type SectionStrongProps = React.ComponentPropsWithoutRef<"strong">;

const SectionStrong = ({ className, ...props }: SectionStrongProps) => {
  return (
    <strong
      className={cn("text-primary font-semibold", className)}
      {...props}
    />
  );
};

type SectionTextContainerProps = React.ComponentPropsWithoutRef<"div">;

export const SectionTextContainer = ({
  className,
  ...props
}: SectionTextContainerProps) => {
  return <div className={cn("flex flex-col gap-3", className)} {...props} />;
};

export const HomeSection = {
  Container: SectionContainer,
  Content: SectionContent,
  TitleContainer: SectionTitleContainer,
  Title: SectionTitle,
  Subtitle: SectionSubtitle,
  Paragraph: SectionParagraph,
  Strong: SectionStrong,
  TextContainer: SectionTextContainer,
};
