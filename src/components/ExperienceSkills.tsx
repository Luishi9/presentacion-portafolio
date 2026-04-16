"use client";

import { motion } from "framer-motion";
import { Terminal } from "lucide-react";

const experience = [
  {
    period: "2017 — 2022",
    title: "Estudiante de Ingenieria en Tecnologias de la Informacion",
    company: "Benemerita Universidad Autonoma de Puebla",
    description:
      "Formación integral en fundamentos de programación, estructuras de datos, algoritmos y desarrollo de software.",
    highlight: true,
  },
  {
    period: "2023 — 2025",
    title: "Full Stack Developer",
    company: "DOCUPUEBLA • Puebla, Mexico",
    description:
      "Desarrollo y actualización de aplicaciones web para gestión y ventas de centros de impresión, optimizando procesos internos y mejorando la experiencia del usuario, capacitación continua a 4 centros de impresión en diferentes puntos de la republica mexicana.",
    highlight: true,
  },
];

const skills = [
  "TypeScript",
  "React / Next.js",
  "Node.js",
  "TailwindCSS",
  "Bootstrap"
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
  }),
};

export default function ExperienceSkills() {
  return (
    <section
      id="experience"
      className="py-32 px-8 md:px-12 bg-[#091328]"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          variants={fadeUp}
          custom={0}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="mb-20 space-y-4"
        >
          <span className="font-[family-name:var(--font-space-grotesk)] text-[#81ecff] uppercase tracking-[0.3em] text-xs">
            Capabilities
          </span>
          <h2 className="font-[family-name:var(--font-manrope)] text-5xl font-bold text-[#dee5ff]">
            Experience &amp; Stack
          </h2>
        </motion.div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {/* Experience Card */}
          <motion.div
            custom={0}
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            id="skills"
            className="bento-card md:col-span-8 bg-[#0f1930] p-8 rounded-xl overflow-hidden"
          >
            <h3 className="font-[family-name:var(--font-space-grotesk)] text-xs text-[#a3aac4] uppercase mb-8 tracking-widest">
              Selected Experience
            </h3>
            <div className="space-y-12">
              {experience.map((job, i) => (
                <div
                  key={i}
                  className="flex flex-col md:flex-row md:items-start gap-4"
                >
                  <span
                    className={`font-[family-name:var(--font-space-grotesk)] min-w-[120px] text-sm ${
                      job.highlight ? "text-[#81ecff]" : "text-[#a3aac4]/50"
                    }`}
                  >
                    {job.period}
                  </span>
                  <div>
                    <h4 className="text-xl font-bold text-[#dee5ff]">
                      {job.title}
                    </h4>
                    <p className="text-[#a3aac4] text-sm mb-3">{job.company}</p>
                    <p className="text-[#a3aac4] leading-relaxed text-sm">
                      {job.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Skills Card */}
          <motion.div
            custom={1}
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="bento-card md:col-span-4 bg-[#000000] p-8 rounded-xl border-l-2 border-[#81ecff] overflow-hidden"
          >
            <h3 className="font-[family-name:var(--font-space-grotesk)] text-xs text-[#a3aac4] uppercase mb-8 tracking-widest">
              Core Stack
            </h3>
            <div className="flex flex-wrap gap-2">
              {skills.map((skill) => (
                <span
                  key={skill}
                  className="px-4 py-2 bg-[#192540] text-[#dee5ff] rounded-full text-sm font-[family-name:var(--font-space-grotesk)]"
                >
                  {skill}
                </span>
              ))}
            </div>

            <div className="mt-12 p-5 bg-[#141f38] rounded-lg">
              <Terminal size={20} className="text-[#81ecff] mb-2" />
              <p className="text-xs font-[family-name:var(--font-space-grotesk)] text-[#a3aac4] leading-relaxed">
                Always learning. Currently exploring Rust for high-performance
                backend utility tools.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
