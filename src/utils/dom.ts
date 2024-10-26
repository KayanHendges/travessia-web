export const scrollToSection = (id: string) => {
  if (typeof window === "undefined") return;

  const element = document.getElementById(id);

  if (element) {
    element.scrollIntoView({
      block: "start",
      behavior: "instant",
    });

    window.location.hash = `#${id}`;
  }
};
