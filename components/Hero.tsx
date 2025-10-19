
"use client";
import site from "@/content/site.json";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <div className="pt-16 pb-12">
      <div className="max-w-5xl mx-auto px-4">
        <motion.h1
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-semibold leading-tight"
        >
          {site.name}
        </motion.h1>
        <p className="text-lg text-gray-600 mt-3">{site.tagline}</p>
        <div className="mt-6 grid md:grid-cols-3 gap-4">
          {site.highlights?.map((h: any, i: number) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * i, duration: 0.5 }}
              className="rounded-2xl border p-4"
            >
              <p className="text-sm text-gray-500">{h.kicker}</p>
              <p className="font-medium">{h.title}</p>
              <p className="text-sm text-gray-500">{h.meta}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
