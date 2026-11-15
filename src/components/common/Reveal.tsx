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
  width = "100%", // ডিফল্ট ১০০% করা হলো যাতে কার্ডগুলো গ্রিডে ঠিকমতো বসে
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
            y: horizontal ? 0 : 30, 
            x: horizontal ? 30 : 0 
          },
          visible: { 
            opacity: 1, 
            y: 0, 
            x: 0 
          },
        }}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }} // অ্যানিমেশন একটু আগে শুরু হবে
        transition={{ duration: 0.6, delay, ease: [0.21, 0.47, 0.32, 0.98] }} // আরও স্মুথ ইজিং
        className="h-full"
      >
        {children}
      </motion.div>
    </div>
  );
}