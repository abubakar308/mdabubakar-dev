"use client";

import { useState } from "react";
import { Mail, MessageSquare, Send, Smartphone } from "lucide-react";
import Reveal from "@/components/common/Reveal";

const contactCards = [
  {
    label: "Email Me",
    value: "mdabubakar.dev@gmail.com",
    icon: Mail,
    href: "mailto:mdabubakar.dev@gmail.com",
  },
  {
    label: "WhatsApp",
    value: "+880 1773398308",
    icon: MessageSquare,
    href: "https://wa.me/8801773398308",
  },
  {
    label: "Call Me",
    value: "+880 1773398308",
    icon: Smartphone,
    href: "tel:+8801773398308",
  },
];

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Mailto fallback logic
    const mailtoLink = `mailto:mdabubakar.dev@gmail.com?subject=${encodeURIComponent(
      formData.subject || "Portfolio Contact"
    )}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    )}`;
    window.location.href = mailtoLink;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="py-16 md:py-24 bg-section relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-accent-brand/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-blue-500/5 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-start">
          
          {/* Left Column: Text & Info */}
          <div className="space-y-10">
            <Reveal>
              <div className="space-y-4">
                <div className="flex items-center gap-3 text-accent-brand font-bold uppercase tracking-widest text-[11px] sm:text-xs">
                  <span className="h-0.5 w-8 bg-accent-brand" />
                  Get In Touch
                </div>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-extrabold text-foreground leading-tight tracking-tight">
                  Let&apos;s Build Something <br className="hidden sm:block" />
                  <span className="text-accent-brand">Extraordinary</span>
                </h2>
                <p className="text-text-body text-sm sm:text-base max-w-lg leading-relaxed">
                  I&apos;m currently <span className="text-foreground font-bold">open to full-stack opportunities</span> and collaborations. If you have a project in mind or just want to say hi, feel free to reach out!
                </p>
              </div>
            </Reveal>

            {/* Contact Cards */}
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
              {contactCards.map((card, index) => (
                <Reveal key={card.label} delay={0.1 * index}>
                  <a
                    href={card.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block group"
                  >
                    <div className="p-5 bg-card border border-border/60 rounded-2xl flex items-center gap-4 transition-all duration-300 hover:border-accent-brand/40 hover:shadow-lg hover:-translate-y-1">
                      <div className="w-11 h-11 rounded-xl bg-background border border-border/50 flex items-center justify-center text-foreground group-hover:text-accent-brand group-hover:bg-accent-brand/5 transition-colors">
                        <card.icon className="w-5 h-5" />
                      </div>
                      <div>
                        <p className="text-[10px] font-extrabold uppercase tracking-widest text-foreground/40 mb-0.5">
                          {card.label}
                        </p>
                        <p className="text-sm font-bold text-foreground tracking-tight">
                          {card.value}
                        </p>
                      </div>
                    </div>
                  </a>
                </Reveal>
              ))}
            </div>
          </div>

          {/* Right Column: Form */}
          <Reveal delay={0.2}>
            <div className="bg-card border border-border/60 rounded-3xl p-6 sm:p-8 md:p-10 shadow-xl shadow-accent-brand/5 relative overflow-hidden">
              <div className="relative z-10 space-y-6">
                <div className="space-y-1.5">
                  <h3 className="text-xl md:text-2xl font-heading font-extrabold text-foreground">
                    Send a Message
                  </h3>
                  <p className="text-xs sm:text-sm text-text-body/70">
                    Fill out the form below and I will get back to you as soon as possible.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label htmlFor="name" className="text-[11px] font-bold uppercase tracking-wider text-foreground/60 ml-1">
                        Name
                      </label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        required
                        onChange={handleChange}
                        placeholder="John Doe"
                        className="w-full h-11 bg-background border border-border/60 rounded-xl px-4 text-sm font-medium text-foreground placeholder:text-text-body/40 focus:outline-none focus:border-accent-brand focus:ring-1 focus:ring-accent-brand transition-all"
                      />
                    </div>
                    <div className="space-y-1.5">
                      <label htmlFor="email" className="text-[11px] font-bold uppercase tracking-wider text-foreground/60 ml-1">
                        Email
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        onChange={handleChange}
                        placeholder="john@example.com"
                        className="w-full h-11 bg-background border border-border/60 rounded-xl px-4 text-sm font-medium text-foreground placeholder:text-text-body/40 focus:outline-none focus:border-accent-brand focus:ring-1 focus:ring-accent-brand transition-all"
                      />
                    </div>
                  </div>
                  <div className="space-y-1.5">
                    <label htmlFor="subject" className="text-[11px] font-bold uppercase tracking-wider text-foreground/60 ml-1">
                      Subject
                    </label>
                    <input
                      id="subject"
                      name="subject"
                      type="text"
                      required
                      onChange={handleChange}
                      placeholder="Project Inquiry"
                      className="w-full h-11 bg-background border border-border/60 rounded-xl px-4 text-sm font-medium text-foreground placeholder:text-text-body/40 focus:outline-none focus:border-accent-brand focus:ring-1 focus:ring-accent-brand transition-all"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label htmlFor="message" className="text-[11px] font-bold uppercase tracking-wider text-foreground/60 ml-1">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      onChange={handleChange}
                      placeholder="Tell me about your vision..."
                      rows={4}
                      className="w-full bg-background border border-border/60 rounded-xl p-4 text-sm font-medium text-foreground placeholder:text-text-body/40 focus:outline-none focus:border-accent-brand focus:ring-1 focus:ring-accent-brand transition-all resize-none"
                    />
                  </div>

                  <button 
                    type="submit"
                    className="w-full h-11 bg-accent-brand text-white hover:bg-accent-brand/90 rounded-xl text-sm font-bold shadow-lg shadow-accent-brand/20 transition-all hover:scale-[1.01] active:scale-[0.99] flex items-center justify-center"
                  >
                    <Send className="w-4 h-4 mr-2" />
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </Reveal>

        </div>
      </div>
    </section>
  );
}