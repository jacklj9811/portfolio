
"use client";
import site from "@/content/site.json";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <div className="relative isolate overflow-hidden rounded-[2.5rem] border border-white/50 bg-white/70 p-10 shadow-[0_25px_80px_-40px_rgba(15,23,42,0.45)] sm:p-16">
      <div className="pointer-events-none absolute inset-y-0 right-[-10%] hidden w-1/2 rounded-full bg-gradient-to-l from-slate-200/70 via-white/60 to-transparent blur-3xl lg:block" />
      <div className="max-w-3xl">
        <motion.p
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-xs uppercase tracking-[0.4em] text-slate-500"
        >
          Portfolio
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.05 }}
          className="mt-4 text-4xl font-semibold leading-tight text-slate-900 sm:text-5xl"
        >
          {site.name}
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-6 max-w-xl text-lg text-slate-600"
        >
          {site.tagline}
        </motion.p>
      </div>
      <div className="mt-12 grid gap-4 sm:grid-cols-3">
        {site.highlights?.map((h: any, i: number) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.12 * i + 0.15, duration: 0.45 }}
            className="group relative overflow-hidden rounded-2xl border border-white/50 bg-white/80 p-6 shadow-[0_18px_40px_-28px_rgba(15,23,42,0.4)]"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-white/40 via-transparent to-white/20 opacity-0 transition group-hover:opacity-100" />
            <p className="text-xs uppercase tracking-[0.28em] text-slate-400">{h.kicker}</p>
            <p className="mt-3 text-base font-medium text-slate-900">{h.title}</p>
            <p className="mt-2 text-sm text-slate-500">{h.meta}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
