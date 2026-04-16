"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
  }),
};

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col justify-center px-8 md:px-12 pt-20 bg-[#060e20]"
    >
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center w-full py-20">
        {/* Left */}
        <div className="space-y-8">
          {/* Badge */}
          <motion.div
            custom={0}
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#0f1930] border border-[#40485d]/20 font-[family-name:var(--font-space-grotesk)] text-sm text-[#81ecff]"
          >
            <span className="w-2 h-2 rounded-full bg-[#81ecff] animate-pulse" />
            Available for new projects
          </motion.div>

          {/* Headline */}
          <motion.h1
            custom={1}
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="font-[family-name:var(--font-manrope)] text-6xl md:text-8xl font-extrabold tracking-tight leading-[0.9]"
          >
            <span className="text-[#dee5ff]">LUIS</span>
            <br />
            <span className="text-[#81ecff]">EDUARDO</span>
            <br />
            <span className="text-[#dee5ff]">CRUZ RUBIN</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            custom={2}
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="font-[family-name:var(--font-inter)] text-lg text-[#a3aac4] max-w-lg leading-relaxed"
          >
            Full-stack engineer specializing in building resilient,
            high-performance web systems. I treat every line of code as a
            structural foundation for excellence.
          </motion.p>

          {/* Buttons */}
          <motion.div
            custom={3}
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="flex items-center gap-4 flex-wrap"
          >
            <a
              href="#projects"
              className="btn-gradient text-[#003840] px-8 py-4 rounded-[4px] font-[family-name:var(--font-space-grotesk)] font-bold tracking-wide text-sm"
            >
              VIEW PROJECTS
            </a>
            <a
              href="#contact"
              className="btn-tertiary font-[family-name:var(--font-space-grotesk)] text-[#dee5ff] hover:text-[#81ecff] transition-colors text-sm pb-0.5"
            >
              GET IN TOUCH
            </a>
          </motion.div>
        </div>

        {/* Right — Image */}
        <motion.div
          custom={4}
          variants={fadeUp}
          initial="hidden"
          animate="show"
          className="relative hidden md:block"
        >
          <div className="aspect-square rounded-2xl bg-[#0f1930] overflow-hidden relative group">
            <div className="absolute inset-0 bg-gradient-to-tr from-[#81ecff]/20 to-transparent z-10" />
            <Image
              src="/img/yo.png"
              alt="Modern developer workspace"
              fill
              className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
              priority
            />
          </div>

          {/* Stats card */}
          <div className="absolute -bottom-6 -left-6 bg-[#141f38] p-6 rounded-xl border border-[#40485d]/10 shadow-2xl">
            <div className="font-[family-name:var(--font-space-grotesk)] text-[#81ecff] text-4xl font-bold">
              3+
            </div>
            <div className="font-[family-name:var(--font-inter)] text-xs text-[#a3aac4] uppercase tracking-widest mt-1">
              Years Experience
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
