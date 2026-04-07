"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, MessageSquare, LinkedinIcon as Linkedin, FacebookIcon as Facebook } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";

export default function Contact() {
  return (
    <section id="contact" className="py-24 px-6 bg-background overflow-hidden text-foreground">
      <div className="max-w-7xl mx-auto space-y-16 mt-11">
        {/* Header */}
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.6 }}
           viewport={{ once: true }}
           className="text-center space-y-4 max-w-3xl mx-auto"
        >
          <div className="inline-flex items-center gap-3 text-accent-brand font-bold uppercase tracking-widest text-sm mb-2">
            <span className="h-0.5 w-10 bg-accent-brand" />
            Get In Touch
            <span className="h-0.5 w-10 bg-accent-brand" />
          </div>
          <h2 className="text-4xl md:text-5xl font-heading font-extrabold text-foreground leading-none">
             Let's Create <span className="text-accent-brand">Something Great</span>
          </h2>

          <p className="text-lg text-text-body/80 max-w-xl mx-auto leading-relaxed">
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
          </p>

        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Details */}
          <motion.div
             initial={{ opacity: 0, x: -30 }}
             whileInView={{ opacity: 1, x: 0 }}
             transition={{ duration: 0.8 }}
             viewport={{ once: true }}
             className="space-y-10"
          >
            <div className="space-y-8">
                <div className="flex items-start gap-6 group">
                   <div className="p-4 bg-accent-brand/10 text-accent-brand rounded-2xl group-hover:scale-110 transition-transform">
                      <Mail className="w-6 h-6" />
                   </div>

                   <div className="space-y-1">
                      <p className="text-foreground font-heading font-bold text-lg uppercase tracking-wider">Email Me</p>
                      <p className="text-text-body/70">abubakar@example.com</p>
                   </div>

               </div>

               <div className="flex items-start gap-6 group">
                  <div className="p-4 bg-green-vibrant/10 text-green-vibrant rounded-2xl group-hover:scale-110 transition-transform">
                     <Phone className="w-6 h-6" />
                  </div>
                   <div className="space-y-1">
                      <p className="text-foreground font-heading font-bold text-lg uppercase tracking-wider">Call Me</p>
                      <p className="text-text-body/70">+880 1234 567 890</p>
                   </div>

               </div>

               <div className="flex items-start gap-6 group">
                  <div className="p-4 bg-amber-500/10 text-amber-500 rounded-2xl group-hover:scale-110 transition-transform">
                     <MapPin className="w-6 h-6" />
                  </div>
                   <div className="space-y-1">
                      <p className="text-foreground font-heading font-bold text-lg uppercase tracking-wider">Location</p>
                      <p className="text-text-body/70">Dhaka, Bangladesh</p>
                   </div>

               </div>
            </div>

            <div className="p-8 rounded-3xl bg-card border border-border shadow-lg space-y-6">
               <h4 className="text-xl font-heading font-bold text-foreground flex items-center gap-3">
                  Connect on Socials
                  <div className="h-0.5 flex-1 bg-border" />
               </h4>
                <div className="flex gap-4">
                   <Button variant="outline" className="flex-1 rounded-2xl h-14 border-border text-foreground hover:bg-card hover:text-accent-brand transition-all font-bold group shadow-sm">
                      <Linkedin className="w-5 h-5 mr-3 group-hover:scale-110 transition-transform" />
                      LinkedIn
                   </Button>
                   <Button variant="outline" className="flex-1 rounded-2xl h-14 border-border text-foreground hover:bg-card hover:text-accent-brand transition-all font-bold group shadow-sm">
                      <Facebook className="w-5 h-5 mr-3 group-hover:scale-110 transition-transform" />
                      Facebook
                   </Button>
                </div>

            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
             initial={{ opacity: 0, x: 30 }}
             whileInView={{ opacity: 1, x: 0 }}
             transition={{ duration: 0.8 }}
             viewport={{ once: true }}
          >
             <Card className="border-none shadow-2xl p-8 md:p-12 rounded-[2.5rem] bg-primary text-primary-foreground relative overflow-hidden">
                {/* Decorative glows for the card */}
                <div className="absolute -top-10 -right-10 w-40 h-40 bg-white/10 rounded-full blur-3xl" />
                <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-black/10 rounded-full blur-2xl" />

                <CardContent className="p-0 space-y-8 relative z-10">
                   <div className="space-y-2">
                      <h3 className="text-2xl font-heading font-extrabold flex items-center gap-3">
                         <MessageSquare className="w-6 h-6 text-primary-foreground/80" />
                         Send a Message
                      </h3>
                      <p className="text-primary-foreground/60 text-sm font-medium">Have a project in mind? Use the form below.</p>
                   </div>

                                      <form className="space-y-6">
                      <div className="space-y-2">
                         <Label htmlFor="name" className="text-primary-foreground/70 font-bold uppercase text-[10px] tracking-widest px-1">Your Full Name</Label>
                         <Input id="name" placeholder="John Doe" className="bg-primary-foreground/10 border-primary-foreground/10 h-14 rounded-xl text-primary-foreground placeholder:text-primary-foreground/30 focus:bg-primary-foreground/20 transition-colors border-none" />
                      </div>
                      
                      <div className="space-y-2">
                         <Label htmlFor="email" className="text-primary-foreground/70 font-bold uppercase text-[10px] tracking-widest px-1">Your Email Address</Label>
                         <Input id="email" type="email" placeholder="john@example.com" className="bg-primary-foreground/10 border-primary-foreground/10 h-14 rounded-xl text-primary-foreground placeholder:text-primary-foreground/30 focus:bg-primary-foreground/20 transition-colors border-none" />
                      </div>

                      <div className="space-y-2">
                         <Label htmlFor="message" className="text-primary-foreground/70 font-bold uppercase text-[10px] tracking-widest px-1">Message Content</Label>
                         <textarea id="message" rows={5} placeholder="Tell me about your project..." className="w-full bg-primary-foreground/10 border-none rounded-xl p-4 text-primary-foreground placeholder:text-primary-foreground/30 focus:bg-primary-foreground/20 outline-none transition-colors" />
                      </div>

                      <Button className="w-full bg-secondary text-secondary-foreground hover:bg-secondary/90 h-14 rounded-xl text-base font-bold shadow-xl transition-all hover:-translate-y-1">
                         <Send className="w-5 h-5 mr-3" />
                         Send Message Now
                      </Button>
                   </form>

                </CardContent>
             </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
