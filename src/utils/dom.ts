export const scrollToSection = (id: string) => {
  const element = document.getElementById(id);

  if (element) {
    element.scrollIntoView({
      block: "start",
      behavior: "instant",
    });

    window.location.hash = `#${id}`;
  }
};
