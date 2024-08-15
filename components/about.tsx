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
        I am a <span className="font-medium">Software Engineer </span>at{" "}
        <span className="font-medium">Volkswagen. </span>Working in the IT Infra
        department, I am responsible for the configuration of PKI cards and
        handle UAM tickets. My experience at Volkswagen has equipped me with the
        ability to collaborate effectively with cross-functional teams to
        deliver solutions. With a strong foundation in tech, I am now aspiring
        to transition into a{" "}
        <span className="font-medium">Product Management </span>
        role, where I can leverage my technical expertise and strategic thinking
        to bring impactful products to market.
      </p>
    </motion.section>
  );
}
