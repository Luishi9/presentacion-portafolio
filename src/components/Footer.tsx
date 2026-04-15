import Link from "next/link";
import { Code2, Briefcase, MessageCircle, Mail } from "lucide-react";

const socialLinks = [
  { label: "Github", href: "#", icon: Code2 },
  { label: "LinkedIn", href: "#", icon: Briefcase },
  { label: "Twitter", href: "#", icon: MessageCircle },
  { label: "Email", href: "mailto:hello@architect.io", icon: Mail },
];

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export default function Footer() {
  return (
    <footer className="bg-[#091328] w-full py-12 border-t border-[#40485d]/10">
      <div className="flex flex-col md:flex-row justify-between items-center gap-8 px-8 md:px-12 max-w-7xl mx-auto w-full">
        {/* Logo */}
        <Link
          href="#home"
          className="text-lg font-extrabold text-[#81ecff] font-[family-name:var(--font-manrope)] tracking-tighter hover:opacity-80 transition-opacity"
        >
          ARCHITECT.IO
        </Link>

        {/* Nav links */}
        <nav className="flex items-center gap-6 font-[family-name:var(--font-inter)] text-sm tracking-wide">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-[#dee5ff]/50 hover:text-[#81ecff] transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Social */}
        <div className="flex items-center gap-5">
          {socialLinks.map(({ label, href, icon: Icon }) => (
            <a
              key={label}
              href={href}
              aria-label={label}
              className="text-[#dee5ff]/40 hover:text-[#81ecff] transition-colors"
              target={href.startsWith("http") ? "_blank" : undefined}
              rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
            >
              <Icon size={18} />
            </a>
          ))}
        </div>
      </div>

      <div className="mt-8 text-center">
        <p className="font-[family-name:var(--font-inter)] text-xs tracking-wide text-[#dee5ff]/30">
          © {new Date().getFullYear()} ARCHITECT.IO — Built with Next.js &
          intentionality.
        </p>
      </div>
    </footer>
  );
}
