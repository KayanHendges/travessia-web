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
        "w-full flex flex-col gap-4 justify-center items-center px-4 md:px-6 py-6 md:py-8",
        variant === "white" ? "bg-white" : "bg-zinc-100",
        className
      )}
      {...props}
    />
  );
};

interface SectionContent extends React.ComponentPropsWithoutRef<"div"> {
  mobileContentOrder?: "normal" | "reverse";
}

export const SectionContent = ({
  mobileContentOrder = "normal",
  className,
  ...props
}: SectionContent) => {
  return (
    <div
      className={cn(
        "w-full max-w-content-section flex md:flex-row items-center justify-center gap-6",
        mobileContentOrder === "normal" && "flex-col",
        mobileContentOrder === "reverse" && "flex-col-reverse",
        className
      )}
      {...props}
    />
  );
};

type SectionTitleContainerProps = React.ComponentPropsWithoutRef<"div">;

const SectionTitleContainer = ({
  className,
  ...props
}: SectionTitleContainerProps) => {
  return <div className={cn("flex flex-col", className)} {...props} />;
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
  return <h4 className={cn("text-md text-zinc-700", className)} {...props} />;
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
