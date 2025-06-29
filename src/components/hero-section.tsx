"use client";

import { motion } from "motion/react";
import { FaDownload, FaGithub, FaLinkedin, FaPaperPlane } from "react-icons/fa";

export function HeroSection() {
  return (
    <div className="relative mx-auto my-10 flex max-w-7xl flex-col items-center justify-center">
      <div className="absolute inset-y-0 left-0 h-full w-px bg-neutral-800/80">
        <div className="absolute top-0 h-40 w-px bg-gradient-to-b from-transparent via-blue-500 to-transparent" />
      </div>
      <div className="absolute inset-y-0 right-0 h-full w-px bg-neutral-800/80">
        <div className="absolute h-40 w-px bg-gradient-to-b from-transparent via-blue-500 to-transparent" />
      </div>
      <div className="absolute inset-x-0 bottom-0 h-px w-full bg-neutral-800/80">
        <div className="absolute mx-auto h-px w-40 bg-gradient-to-r from-transparent via-blue-500 to-transparent" />
      </div>
      <div className="px-4 py-10 md:py-20">

        <h1 className="relative z-10 mx-auto max-w-4xl text-center text-2xl font-bold text-slate-300 text-3xl">
          {"Software Engineer | Educator | Musician"
            .split(" ")
            .map((word, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, filter: "blur(4px)", y: 10 }}
                animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
                transition={{
                  duration: 0.3,
                  delay: index * 0.1,
                  ease: "easeInOut",
                }}
                className="mr-2 inline-block"
              >
                {word}
              </motion.span>
            ))}
        </h1>

        <h2 className="relative z-10 mx-auto max-w-4xl text-center text-6xl font-medium text-slate-300 md:text-4xl lg:text-6xl mt-4">
          {"Crafting elegant, high-quality user experiences"
            .split(" ")
            .map((word, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, filter: "blur(4px)", y: 10 }}
                animate={{
                  opacity: 1,
                  filter: "blur(0px)",
                  y: 0,
                }}
                transition={{
                  duration: 1,
                  delay: index * 0.25,
                  ease: "easeInOut",
                }}
                className="mr-2 inline-block"
              >
                <motion.span
                  initial={{
                    color: "#bac"
                  }}
                  animate={
                    index >= 3
                      ? { color: "#a78bfa" }
                      : undefined
                  }
                  transition={
                    index >= 3
                      ? { delay: 1 + index * 0.25, duration: 1, ease: "easeInOut" }
                      : undefined
                  }
                >
                  {word}
                </motion.span>
              </motion.span>
            ))}
        </h2>

        <motion.p
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          transition={{
            duration: 0.3,
            delay: 0.8,
          }}
          className="relative z-10 mx-auto max-w-xl py-4 text-center text-lg font-normal text-neutral-400"
        >
          I&apos;m Yu Zhou. I build modern web apps using React and TypeScript.
        </motion.p>

        <motion.div
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          transition={{
            duration: 0.5,
            delay: 1.2,
          }}
          className="relative z-10 mt-8 flex flex-wrap items-center justify-center gap-4"
        >

          <a
            onClick={() => {
              const el = document.getElementById('contact');
              if (el) el.scrollIntoView({ behavior: 'smooth' });
            }}
            className="transform rounded-xl border border-gray-700 bg-black px-6 py-2 font-medium text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-gray-900">
            <span className="inline-flex items-center gap-2">
              Contact Me
              <FaPaperPlane className="inline-block text-s" />
            </span>
          </a>
          <a
            href="/yu_zhou_zhang_resume.pdf"
            download='yu_zhou_zhang_resume.pdf'
            className="transform rounded-xl border border-gray-700 bg-black px-6 py-2 font-medium text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-gray-900"
          >
            <span className="inline-flex items-center gap-2">
              My Resume
              <FaDownload className="inline-block text-s" />
            </span>
          </a>
          <a
            href="https://www.linkedin.com/in/yu-zhou-z-16907521a"
            target="_blank"
            rel="noopener noreferrer"
            className="transform rounded-full border border-gray-700 bg-black px-3 py-3 font-medium text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-gray-900">
            <div className="flex h-5 w-5 items-center justify-center">
              <FaLinkedin className="inline-block text-lg" />
            </div>
          </a>
          <a
            href="https://github.com/errantpianist"
            target="_blank"
            rel="noopener noreferrer"
            className="transform rounded-full border border-gray-700 bg-black px-3 py-3 font-medium text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-gray-900">
            <div className="flex h-5 w-5 items-center justify-center">
              <FaGithub className="inline-block text-lg" />
            </div>
          </a>
        </motion.div>

      </div>
    </div>
  );
}
