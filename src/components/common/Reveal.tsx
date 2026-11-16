"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface RevealProps {
  children: ReactNode;
  delay?: number;
  width?: "fit-content" | "100%";
  className?: string;
  horizontal?: boolean;
}

export default function Reveal({
  children,
  delay = 0.1,
  width = "100%",
  className,
  horizontal = false,
}: RevealProps) {
  return (
    <div 
      className={className} 
      style={{ position: "relative", width, overflow: "visible", height: "100%" }}
    >
      <motion.div
        variants={{
          hidden: { 
            opacity: 0, 
            y: horizontal ? 0 : 20, // মোবাইলে কম নড়াচড়া করবে
            x: horizontal ? 20 : 0 
          },
          visible: { 
            opacity: 1, 
            y: 0, 
            x: 0 
          },
        }}
        initial="hidden"
        whileInView="visible"
        // margin: "-20px" করা হয়েছে যাতে আগেই ট্রিগার হয় এবং amount: 0.1 (১০% দেখা গেলেই অ্যানিমেশন হবে)
        viewport={{ once: true, margin: "0px 0px -50px 0px", amount: 0.1 }} 
        transition={{ duration: 0.5, delay, ease: "easeOut" }}
        className="h-full"
      >
        {children}
      </motion.div>
    </div>
  );
}