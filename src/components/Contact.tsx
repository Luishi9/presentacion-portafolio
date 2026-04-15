"use client";

import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, Send } from "lucide-react";

interface FormState {
  name: string;
  email: string;
  message: string;
}

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] },
  }),
};

export default function Contact() {
  const [form, setForm] = useState<FormState>({
    name: "",
    email: "",
    message: "",
  });
  const [sent, setSent] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // TODO: integrate with email service (Resend, EmailJS, etc.)
    setSent(true);
  };

  return (
    <section
      id="contact"
      className="py-32 px-8 md:px-12 bg-[#091328] border-t border-[#40485d]/10"
    >
      <div className="max-w-4xl mx-auto text-center space-y-12">
        {/* Header */}
        <motion.div
          custom={0}
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="space-y-4"
        >
          <span className="font-[family-name:var(--font-space-grotesk)] text-[#81ecff] uppercase tracking-[0.3em] text-xs">
            Get in touch
          </span>
          <h2 className="font-[family-name:var(--font-manrope)] text-5xl font-bold text-[#dee5ff]">
            Start a conversation.
          </h2>
        </motion.div>

        {/* Form */}
        <motion.div
          custom={1}
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="bg-[#060e20] p-1 rounded-xl shadow-2xl"
        >
          {sent ? (
            <div className="py-16 text-center">
              <Send size={32} className="text-[#81ecff] mx-auto mb-4" />
              <p className="text-[#dee5ff] font-[family-name:var(--font-manrope)] text-xl font-bold">
                Message sent!
              </p>
              <p className="text-[#a3aac4] text-sm mt-2">
                I&apos;ll get back to you as soon as possible.
              </p>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="grid grid-cols-1 md:grid-cols-2 gap-px bg-[#40485d]/20"
            >
              <div className="bg-[#060e20] p-8">
                <input
                  name="name"
                  type="text"
                  required
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  className="w-full bg-transparent border-none outline-none text-[#dee5ff] placeholder:text-[#a3aac4]/50 font-[family-name:var(--font-inter)]"
                />
              </div>
              <div className="bg-[#060e20] p-8">
                <input
                  name="email"
                  type="email"
                  required
                  value={form.email}
                  onChange={handleChange}
                  placeholder="Your Email"
                  className="w-full bg-transparent border-none outline-none text-[#dee5ff] placeholder:text-[#a3aac4]/50 font-[family-name:var(--font-inter)]"
                />
              </div>
              <div className="bg-[#060e20] p-8 md:col-span-2">
                <textarea
                  name="message"
                  required
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Describe your project..."
                  rows={4}
                  className="w-full bg-transparent border-none outline-none text-[#dee5ff] placeholder:text-[#a3aac4]/50 font-[family-name:var(--font-inter)] resize-none"
                />
              </div>
              <button
                type="submit"
                className="btn-gradient text-[#003840] md:col-span-2 py-6 font-[family-name:var(--font-space-grotesk)] font-bold tracking-widest uppercase flex items-center justify-center gap-2"
              >
                <Send size={16} />
                Send Request
              </button>
            </form>
          )}
        </motion.div>

        {/* Contact Info */}
        <motion.div
          custom={2}
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="pt-4 flex justify-center gap-12 flex-wrap"
        >
          <div className="flex flex-col items-center gap-2">
            <Mail size={20} className="text-[#81ecff]" />
            <span className="text-[#a3aac4] text-sm font-[family-name:var(--font-space-grotesk)]">
              hello@architect.io
            </span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <MapPin size={20} className="text-[#81ecff]" />
            <span className="text-[#a3aac4] text-sm font-[family-name:var(--font-space-grotesk)]">
              San Francisco, CA
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
