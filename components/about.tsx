"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me ✨</SectionHeading>
      <p className="mb-3">
        After earning my degree in{" "}
        <span className="font-medium">Computer Science</span>, I embarked on a
        journey fueled by my passion for programming. 🚀{" "}
        <span className="italic">Solving complex problems</span> is the
        heartbeat of my work, and the joy of finding solutions is my constant
        motivation. I stay at the forefront of technology, always eager to
        explore the latest frameworks and methodologies. My expertise spans a
        range of technologies, including{" "}
        <span className="font-medium">
          JavaScript, React, Next.js, Firebase, Tailwind CSS, and Rest APIs
        </span>
        . Additionally, I'm well-versed in TypeScript. My learning journey
        extends to the backend, where I'm currently diving into{" "}
        <span className="font-medium">MongoDB, Express, and Node.js</span>.
        {/* Open to new challenges and learning opportunities, I am */}
        {/* currently seeking ways to contribute as a{" "} */}
        {/* <span className="font-medium">full-time software developer</span>. */}
      </p>

      <p>
        <span className="italic">Away from the code editor</span>, I find joy in
        the rhythm of a badminton match, the magic of cinema 🎬, the melody of
        music 🎵, and the enchantment of a good book 📚. The pursuit of
        knowledge is a constant companion, and I cherish the thrill of learning
        new things. 🌱
      </p>
    </motion.section>
  );
}
