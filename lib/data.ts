import NammaSociety from "@/public/NammaSociety.png";
import Fitnessplanner from "@/public/Fitnessplanner.png";
import BrainBlitz from "@/public/BrainBlitz.png";
import Meesho from "@/public/Meesho.png";
import Zepto from "@/public/Zepto.png";

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
    title: "Zepto: Case Study",
    description:
      "Case study on Zepto giving an overview of the app, comparing it with its competitors, stating the problems, metrics & solutions.",
    tags: ["Product Management", "Metrics", "UX", "Product Analysis", "Market Research"],
    imageUrl: Zepto,
    link: "https://drive.google.com/file/d/1Fr9U3USU8T-kasEMunkILPzCbKbBCqdp/view?usp=drive_link"
  },
  {
    title: "Meesho: Case Study",
    description:
      "Case study on Meesho giving an overview of the app, comparing it with its competitors, stating the problems, metrics & solutions.",
    tags: ["Product Analysis",  "Metrics", "Product Management", "UX", 
      "Market Research"],
    imageUrl: Meesho,
    link: "https://drive.google.com/file/d/1d6YPdPTtJSDuVbctSeusyUy6sAJbWZIl/view?usp=drive_link"
  },
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
  "Product Management",
  "Communication",
  "Analytical Skills",
  "Presentation",
  "KPIs and Metrics",
  "Problem Solving",
  "Teamwork",
  "User Experience",
  "Product Strategy",
  "Product Vision",
  "Product Road Mapping",
  "Leadership",
  "Front-end Development",
  "Back-end Development",
  "Databases",
] as const;
