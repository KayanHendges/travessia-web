import LogoWhite from "./logo-white.png";
import LogoPrimary from "./logo-primary.png";
import DonBoscoTeaching from "./don-bosco-teaching.jpg";

export const PublicImages = {
  logo: {
    white: {
      src: LogoWhite,
      alt: "logo",
    },
    primary: {
      src: LogoPrimary,
      alt: "logo",
    },
  },
  donBoscoTeaching: {
    src: DonBoscoTeaching,
    alt: "Dom Bosco ensinando",
  },
} as const;
