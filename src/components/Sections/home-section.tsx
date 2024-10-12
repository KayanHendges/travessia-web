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
        "flex items-center justify-around gap-4",
        variant ? "bg-white" : "bg-gray-100"
      )}
      {...props}
    />
  );
};

interface SectionTitleProps extends React.ComponentPropsWithoutRef<"h3"> {}

const SectionTitle = ({ className, ...props }: SectionTitleProps) => {
  return (
    <h3
      className={cn("text-2xl text-zinc-900 font-semibold", className)}
      {...props}
    />
  );
};

interface SectionParagraphProps extends React.ComponentPropsWithoutRef<"p"> {}

const SectionParagraph = ({ className, ...props }: SectionParagraphProps) => {
  return <p className={cn("text-lg text-zinc-800", className)} {...props} />;
};

interface SectionTextContainerProps
  extends React.ComponentPropsWithoutRef<"div"> {}

export const SectionTextContainer = ({
  className,
  ...props
}: SectionTextContainerProps) => {
  return <div className={cn("flex flex-col gap-2", className)} {...props} />;
};

export const HomeSection = {
  Container: SectionContainer,
  Title: SectionTitle,
  Paragraph: SectionParagraph,
  TextContainer: SectionTextContainer,
};
