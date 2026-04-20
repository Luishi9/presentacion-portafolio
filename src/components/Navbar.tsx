"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Globe } from "lucide-react";
import { cn } from "@/lib/utils";
import { useTranslations, useLocale } from "next-intl";

export default function Navbar() {
  const t = useTranslations("Navbar");
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const navLinks = [
    { label: t("home"), href: "#home" },
    { label: t("projects"), href: "#projects" },
    { label: t("experience"), href: "#experience" },
    { label: t("skills"), href: "#skills" },
    { label: t("contact"), href: "#contact" },
  ];

  const [active, setActive] = useState(navLinks[0].label);
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const switchLocale = (newLocale: string) => {
    // Reemplaza el segmento de locale en el pathname actual
    const segments = pathname.split("/");
    segments[1] = newLocale;
    router.push(segments.join("/") || "/");
  };

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

        {/* Right side: Lang switcher + CTA */}
        <div className="hidden md:flex items-center gap-3">
          {/* Language Switcher */}
          <div className="flex items-center gap-1 bg-[#0f1930] border border-[#40485d]/30 rounded-lg p-1">
            <Globe size={13} className="text-[#81ecff] ml-1" />
            {(["en", "es"] as const).map((lang) => (
              <button
                key={lang}
                onClick={() => switchLocale(lang)}
                className={cn(
                  "px-2.5 py-1 rounded-md text-xs font-bold font-[family-name:var(--font-space-grotesk)] uppercase tracking-wide transition-all",
                  locale === lang
                    ? "bg-[#81ecff] text-[#003840]"
                    : "text-[#dee5ff]/50 hover:text-[#dee5ff]"
                )}
              >
                {lang}
              </button>
            ))}
          </div>

          {/* CTA */}
          <a
            href="https://wa.me/13473761269"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-gradient text-[#003840] px-6 py-2 rounded-lg font-[family-name:var(--font-space-grotesk)] font-bold text-sm"
          >
            {t("cta")}
          </a>
        </div>

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

            {/* Mobile Lang Switcher */}
            <div className="flex items-center gap-2 pt-2 border-t border-[#40485d]/20">
              <Globe size={14} className="text-[#81ecff]" />
              {(["en", "es"] as const).map((lang) => (
                <button
                  key={lang}
                  onClick={() => {
                    switchLocale(lang);
                    setMenuOpen(false);
                  }}
                  className={cn(
                    "px-3 py-1.5 rounded-md text-xs font-bold font-[family-name:var(--font-space-grotesk)] uppercase tracking-wide transition-all",
                    locale === lang
                      ? "bg-[#81ecff] text-[#003840]"
                      : "text-[#dee5ff]/50 hover:text-[#dee5ff]"
                  )}
                >
                  {lang}
                </button>
              ))}
            </div>

            <a
              href="https://wa.me/13473761269"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gradient text-[#003840] px-5 py-2.5 rounded-lg font-[family-name:var(--font-space-grotesk)] font-bold text-sm text-center"
            >
              {t("cta")}
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
