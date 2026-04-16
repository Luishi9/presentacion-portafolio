"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const navLinks = [
  { label: "Inicio", href: "#home" },
  { label: "Proyectos", href: "#projects" },
  { label: "Experiencia", href: "#experience" },
  { label: "Habilidades", href: "#skills" },
  { label: "Contacto", href: "#contact" },
];

export default function Navbar() {
  const [active, setActive] = useState("Inicio");
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300",
        scrolled
          ? "bg-[#060e20]/80 backdrop-blur-xl shadow-lg shadow-black/20"
          : "bg-[#060e20]/60 backdrop-blur-xl"
      )}
    >
      <div className="flex justify-between items-center px-8 md:px-12 h-20 max-w-screen-2xl mx-auto">
        {/* Logo */}
        <Link
          href="#home"
          className="text-xl font-extrabold tracking-tighter text-[#dee5ff] font-[family-name:var(--font-manrope)] hover:text-primary transition-colors"
        >
          PLPWEBS
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center space-x-8 font-[family-name:var(--font-manrope)] tracking-tight">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setActive(link.label)}
              className={cn(
                "text-sm transition-colors pb-1",
                active === link.label
                  ? "text-[#81ecff] font-bold border-b-2 border-[#81ecff]"
                  : "text-[#dee5ff]/70 hover:text-[#dee5ff]"
              )}
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* CTA */}
        <a
          href="#contact"
          className="hidden md:inline-flex btn-gradient text-[#003840] px-6 py-2 rounded-lg font-[family-name:var(--font-space-grotesk)] font-bold text-sm"
        >
          Contactame
        </a>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-[#dee5ff] p-2"
          onClick={() => setMenuOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            className="md:hidden bg-[#091328] border-t border-[#40485d]/20 px-8 py-6 flex flex-col gap-4"
          >
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => {
                  setActive(link.label);
                  setMenuOpen(false);
                }}
                className="text-[#dee5ff]/80 hover:text-[#81ecff] font-[family-name:var(--font-manrope)] transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              className="btn-gradient text-[#003840] px-5 py-2.5 rounded-lg font-[family-name:var(--font-space-grotesk)] font-bold text-sm text-center"
            >
              Contactame
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
