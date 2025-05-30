"use client"
import React from "react";
import { BentoGrid, BentoGridItem } from "./ui/bento-grid";
import {
  IconBook,
  IconMusic,
  IconPuzzle,
  IconSettings,
} from "@tabler/icons-react";
import Image from "next/image";
import keysImage from "../../public/keys.webp";
import codeImage from "../../public/code.webp";
import odinImage from "../../public/odin.webp";
import scoreImage from "../../public/score.webp";
import { motion } from "framer-motion";

export function Projects() {
  return (
    <section className="flex flex-col items-center justify-center w-full py-10">
      <div className="flex flex-col items-center justify-center w-full max-w-4xl px-4">
        <h2 className="text-2xl font-semibold mb-6 text-center">Projects</h2>
      </div>
      <BentoGrid className="max-w-4xl mx-auto">
        {items.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className={`${i === 1 || i === 2 ? "md:col-span-2" : ""}`}
          >
            <BentoGridItem
              title={item.title}
              description={item.description}
              header={item.header}
              icon={item.icon}
            />
          </motion.div>
        ))}
      </BentoGrid>
    </section>
  );
}

const items = [
  {
    title: "Perpetuo",
    description:
      "Music student record-keeping tool. Cut admin time in a real studio setting.",
    header: (
      <div className="flex justify-center">
        <div className="overflow-hidden rounded-xl w-[410px] h-[175px] flex items-center justify-center">
          <Image
            src={scoreImage}
            alt="Perpetuo – Teaching Studio Management App"
            width={410}
            height={175}
            className="object-cover w-full h-full transition-transform duration-300 hover:scale-105 shadow-xl"
          />
        </div>
      </div>
    ),
    icon: <IconBook className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "MIDI Keyboard Tool",
    description:
      "Visualise played notes and identify chords in real-time. Accepts MIDI and audio input. Designed for music learning and teaching.",
    header: (
      <div className="flex justify-center">
        <div className="overflow-hidden rounded-xl w-[410px] h-[175px] flex items-center justify-center">
          <Image
            src={keysImage}
            alt="MIDI Keyboard Tool"
            width={410}
            height={175}
            className="object-cover w-full h-full transition-transform duration-300 hover:scale-105 shadow-xl"
          />
        </div>
      </div>
    ),
    icon: <IconMusic className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Odin Project Portfolio",
    description:
      "A suite of responsive apps built with JavaScript, DOM APIs, and CSS grid/flexbox. Showcases core front-end dev skills.",
    header: (
      <div className="flex justify-center">
        <div className="overflow-hidden rounded-xl w-[410px] h-[175px] flex items-center justify-center">
          <Image
            src={odinImage}
            alt="Odin Project Portfolio"
            width={410}
            height={175}
            className="object-cover w-full h-full transition-transform duration-300 hover:scale-105 shadow-xl"
          />
        </div>
      </div>
    ),
    icon: <IconPuzzle className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "More to Come...",
    description: "New tools, experiments, and ideas in progress. Stay tuned.",
    header: (
      <div className="flex justify-center">
        <div className="overflow-hidden rounded-xl w-[410px] h-[175px] flex items-center justify-center">
          <Image
            src={codeImage}
            alt="More to Come"
            width={410}
            height={175}
            className="object-cover w-full h-full transition-transform duration-300 hover:scale-105 shadow-xl"
          />
        </div>
      </div>
    ),
    icon: <IconSettings className="h-4 w-4 text-neutral-500" />,
  },
];
