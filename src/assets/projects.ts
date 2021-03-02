import desktop from "./a/desktop.png";

const projects = [
  // {
  //   description:
  //     "P.P.U.H MIZERA S.C. istnieje na rynku od 1979 roku. Firma od ponad 34 lat zajmuje się działalnością handlową z zakresu chemii budowlanej. Doświadczenie i indywidualne podejście do klienta wyróżnia hurtownie na tle sklepów masowych.",
  //   gridArea: "a",
  //   imageSrc: "https://webdev-exercise.netlify.com/assets/main-adventure-1.png",
  //   title: "Scandinavian Adventures",
  // },
  {
    description:
      "P.P.U.H MIZERA S.C. istnieje na rynku od 1979 roku. Firma od ponad 34 lat zajmuje się działalnością handlową z zakresu chemii budowlanej. Doświadczenie i indywidualne podejście do klienta wyróżnia hurtownie na tle sklepów masowych.",
    gridArea: "a",
    imageSrc: "https://webdev-exercise.netlify.com/assets/main-adventure-1.png",
    desktopScreenshotSrc: desktop,
    mobileScreenshots: [desktop, desktop, desktop],
    title: "Scandinavian Adventures",
  },
];

export type Project = typeof projects[number];

export default projects;
