"use client";

import React from "react";
import SectionHeading from "./sectionheading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-20 max-w-[45rem] text-center leading-8 sm:mb-16 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p>
        I completed my schooling at{" "}
        <span className="font-medium">Kendriya Vidyalaya No. 1.</span> After my
        schooling, I pursued a{" "}
        <span className="font-medium">Bachelor of Computer Applications</span>{" "}
        degree from
        <span className="font-medium">
          {" "}
          Acharya Bangalore Business School.
        </span>{" "}
        My journey in software development has equipped me with a solid
        foundation in full-stack development. My core stack is{" "}
        <span className="font-medium">
          React, Next.js, Node.js, and MongoDB
        </span>
        . I am also familiar with TypeScript, MySQL and Prisma. I am always
        looking to learn new technologies. I am currently looking for a{" "}
        <span className="font-medium">full-time position</span> as a software
        developer.
      </p>
    </motion.section>
  );
}
