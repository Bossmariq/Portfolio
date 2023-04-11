import drumKit from "@/public/drumkit.png";
import linkShortener from "@/public/link shortener.png";
import mealsSite from "@/public/meals app.png";
import mmaogo from "@/public/mmaogo.png";
import ritazbeauty from "@/public/ritazbeauty.png";
import santaFE from "@/public/santaFE.png";
// import smartech from "../../public/smartech.png";
// import allocationSite from "../../public/teammember allocation.png";
import { SiFramer, SiTailwindcss } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import {
  DiHtml5,
  DiCss3,
  DiMaterializecss,
  DiJavascript1,
} from "react-icons/di";

export const ProjectData = [
  {
    img: linkShortener,
    title: "Shortly Site",
    icons: [DiHtml5, DiCss3, SiTailwindcss, DiJavascript1],
    info: "A website built for shortening links/URLs, A challenge from Frontend mentor built to sharpen my styling skills",
    sitelink: "https://bossmariq.github.io/shortly-website/",
    direction: ["column", "column", "row-reverse"],
  },
  {
    img: drumKit,
    title: "DrumKit",
    icons: [DiHtml5, DiCss3, DiJavascript1],
    info: "Have fun with this DrumKit website that produces specific sounds when specific images are clicked on. I built this project as a ways to test my JavaScript skills",
    sitelink: "https://bossmariq.github.io/drum-kit/",
    direction: ["column", "column", "row"],
  },
  {
    img: mealsSite,
    title: "Recipe Site",
    icons: [DiHtml5, DiCss3, DiJavascript1, FaReact],
    info: "Get to see different meals, its recipe and further cooking instructions on this website. Built with React and fetched the displayed data from an API",
    sitelink: "https://bossmariq.github.io/meals-recipe-site/",
    direction: ["column", "column", "row-reverse"],
  },
  {
    img: mmaogo,
    title: "Mmaogo Furniture",
    icons: [DiHtml5, DiCss3, SiTailwindcss, DiJavascript1],
    info: "A web app for furniture design, manufacturing, assembly, installation and maintenance to interior design and project management.",
    sitelink: "https://bossmariq.github.io/project/",
    direction: ["column", "column", "row"],
  },
  {
    img: ritazbeauty,
    title: "RitazBeauty Store",
    icons: [
      DiHtml5,
      DiCss3,
      DiMaterializecss,
      DiJavascript1,
      FaReact,
      SiFramer,
    ],
    info: "A multi page e-commerce website built to master my react skills to aid me in implementing functionalities in websites",
    sitelink: "https://ritazbeautystores.netlify.app/",
    direction: ["column", "column", "row-reverse"],
  },
  {
    img: santaFE,
    title: "SantaFE Agencies",
    icons: [DiHtml5, DiCss3, SiTailwindcss, DiJavascript1],
    info: "SantaFE is a website I developed for a service provider within the real estate space. The site features a completely responsive design",
    sitelink: "https://www.santafe-homes.net/",
    direction: ["column", "column", "row"],
  },
];
