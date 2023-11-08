import NammaSociety from "@/public/NammaSociety.png";
import Fitnessplanner from "@/public/Fitnessplanner.png";
import BrainBlitz from "@/public/BrainBlitz.png";

export const links = [
  {
    name: "Home",
    hash: "#home", 
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const projectsData = [
  {
    title: "Fitness Planner",
    description:
      "Fitness Planner is a web application offering users workout and diet plans. Additionally, users purchase a variety of supplements.",
    tags: ["HTML", "CSS", "JavaScript","React", "Nodejs", "Expressjs","MongoDB"],
    imageUrl: Fitnessplanner,
    link: "https://drive.google.com/file/d/1kl6k-nM8nfwtlUwm5veWZCkzbuYtYFpn/view?usp=drive_link"
  },
  {
    title: "Society Management",
    description:
      "Society Management Portal is a web application designed to enhance convenience for apartment residents.",
    tags: ["HTML", "CSS", "JavaScript","React", "Nodejs", "Expressjs","MongoDB"],
    imageUrl: NammaSociety,
    link: "https://drive.google.com/file/d/1VCcUHWKrzcj8CAfrmL4Dzp6SalGvHQA_/view?usp=drive_link"
  },
  {
    title: "Brain Blitz",
    description:
      "Brain Blitz is an engaging and interactive web application designed for individuals of all ages who have a passion for both playing and creating quizzes.",
    tags: ["React", "Next.js", "TypeScript", "MySQL", "Prisma","Tailwind"],
    imageUrl: BrainBlitz,
    link: "https://drive.google.com/file/d/1PPiNcSCVB_41fPX7kPHO1t3m1LcY77Qx/view?usp=drive_link"
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "Prisma",
  "MongoDB",
  "MySQL",
  "Redux",
  "Express",
  "Python",
  "Java",
  "Framer Motion",
] as const;
