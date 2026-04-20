"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Link2, Code2 } from "lucide-react";

import { useTranslations } from "next-intl";

const projects = [
  {
    title: "EL OVNI",
    tags: ["Vite", "Node.js", "TailwindCSS", "React"],
    description:
      "Sistema de gestion de inventario y ventas para un local de comida rapida, con panel de administracion para gestionar productos, categorias, ventas, ademas de una interfaz de punto de venta optimizada para tablets.",
    image:"/img/proyectos/elovni.png",
    href: "https://elovni.netlify.app/login",
    code: "#",
  },
  {
    title: "RIFAS LA COSA",
    tags: ["Vite", "React", "Node.js", "TailwindCSS"],
    description:
      "Plataforma de rifas en linea que permite a los usuarios comprar boletos para participar en sorteos de productos y servicios, panel administrativo para la gestion de las rifas y venta de boletos, con una interfaz atractiva y fácil de usar.",
    image:
      "/img/proyectos/rifaslacosa.png",
    href: "https://rifaslacosa.com",
    code: "#",
  },
  {
    title: "AZUL JOYERIA",
    tags: ["Bootstrap", "Firebase", "JavaScript"],
    description:
      "Sitio web de joyería en línea con catálogo de productos, ofreciendo una experiencia de usuario atractiva y hecha a la medida para el usuario.",
    image:
      "/img/proyectos/azuljoyeria.png",
    href: "https://azul-joyeria.netlify.app",
    code: "#",
  },
  {
    title: "LANDING PAGE, PLPWEBS",
    tags: ["Bootstrap", "JavaScript"],
    description:
      "Landing page para empresa de desarrollo web, con un diseño moderno y atractivo, destacando los servicios ofrecidos y facilitando la conversión de visitantes en clientes potenciales.",
    image:
      "/img/proyectos/plpwebs.png",
    href: "https://lading-pageplp.netlify.app",
    code: "#",
  },
  {
    title: "MY CV PAGE",
    tags: ["Astro", "Node.js", "TailwindCSS"],
    description:
      "Página web de CV minimalista, diseñada para mostrar la experiencia y habilidades de manera clara y atractiva.",
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

  const t = useTranslations("Projects");

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
              {t("section_title")}
            </span>
            <h2 className="font-[family-name:var(--font-manrope)] text-5xl font-bold text-[#dee5ff]">
              {t("section_h2")}
            </h2>
          </div>
          <p className="text-[#a3aac4] max-w-sm font-[family-name:var(--font-inter)] leading-relaxed text-justify">
            {t("p_descripction")}
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
                  alt={t(`items.${i}.title`)}
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
                {t(`items.${i}.description`)}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
