"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Link2, Code2 } from "lucide-react";

const projects = [
  {
    title: "EL OVNI",
    tags: ["Next.js", "Web3"],
    description:
      "A decentralized finance dashboard for tracking real-time asset performance with custom alerting systems.",
    image:"/img/proyectos/elovni.png",
    href: "https://elovni.netlify.app/login",
    code: "#",
  },
  {
    title: "RIFAS LA COSA",
    tags: ["React", "Node.js"],
    description:
      "High-performance automation platform for creative agencies to manage complex project timelines.",
    image:
      "/img/proyectos/rifaslacosa.png",
    href: "https://rifaslacosa.com",
    code: "#",
  },
  {
    title: "AZUL JOYERIA",
    tags: ["React", "Node.js"],
    description:
      "High-performance automation platform for creative agencies to manage complex project timelines.",
    image:
      "/img/proyectos/azuljoyeria.png",
    href: "https://rifaslacosa.com",
    code: "#",
  },
  {
    title: "LANDING PAGE, PLPWEBS",
    tags: ["React", "Node.js"],
    description:
      "High-performance automation platform for creative agencies to manage complex project timelines.",
    image:
      "/img/proyectos/plpwebs.png",
    href: "https://lading-pageplp.netlify.app",
    code: "#",
  },
  {
    title: "MY CV PAGE",
    tags: ["Astro", "Node.js"],
    description:
      "High-performance automation platform for creative agencies to manage complex project timelines.",
    image:"/img/proyectos/cv.png",
    href: "https://cvminimal.netlify.app",
    code: "#",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, delay: i * 0.15, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
  }),
};

export default function Projects() {
  return (
    <section id="projects" className="py-32 px-8 md:px-12 bg-[#060e20]">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          variants={fadeUp}
          custom={0}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6"
        >
          <div className="space-y-4">
            <span className="font-[family-name:var(--font-space-grotesk)] text-[#81ecff] uppercase tracking-[0.3em] text-xs">
              Portfolio
            </span>
            <h2 className="font-[family-name:var(--font-manrope)] text-5xl font-bold text-[#dee5ff]">
              Selected Works
            </h2>
          </div>
          <p className="text-[#a3aac4] max-w-sm font-[family-name:var(--font-inter)] leading-relaxed">
            A curated collection of digital products that combine clean code
            with exceptional user experience.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              custom={i}
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="group cursor-pointer"
            >
              {/* Image */}
              <div className="aspect-video bg-[#0f1930] rounded-xl overflow-hidden mb-6 relative">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-[#060e20]/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
                  <a
                    href={project.href}
                    className="bg-[#81ecff] text-[#003840] p-4 rounded-full hover:scale-110 transition-transform"
                    aria-label="Visit live project"
                  >
                    <Link2 size={20} />
                  </a>
                  <a
                    href={project.code}
                    className="bg-[#0f1930] text-[#dee5ff] p-4 rounded-full hover:scale-110 transition-transform"
                    aria-label="View source code"
                  >
                    <Code2 size={20} />
                  </a>
                </div>
              </div>

              {/* Info */}
              <h3 className="font-[family-name:var(--font-manrope)] text-2xl font-bold text-[#dee5ff] mb-2">
                {project.title}
              </h3>
              <div className="flex gap-4 mb-4">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs font-[family-name:var(--font-space-grotesk)] text-[#81ecff] uppercase tracking-widest"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <p className="text-[#a3aac4] leading-relaxed font-[family-name:var(--font-inter)]">
                {project.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
