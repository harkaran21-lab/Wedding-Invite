import React, { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CalendarDays, MapPin, Sparkles, ChevronRight, HeartHandshake, Crown, ScrollText, Clock3 } from "lucide-react";

const weddingDate = new Date("2026-11-26T10:00:00+05:30");

function useCountdown(targetDate) {
  return useMemo(() => {
    const now = new Date();
    const diff = targetDate.getTime() - now.getTime();
    const safeDiff = Math.max(diff, 0);
    return {
      days: Math.floor(safeDiff / (1000 * 60 * 60 * 24)),
      hours: Math.floor((safeDiff / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((safeDiff / (1000 * 60)) % 60),
      seconds: Math.floor((safeDiff / 1000) % 60),
    };
  }, [targetDate]);
}

function CountdownCard({ value, label }) {
  return (
    <div className="rounded-3xl border border-amber-200 bg-white/70 px-5 py-4 text-center shadow-sm">
      <div className="text-3xl font-semibold text-amber-700">{value}</div>
      <div className="text-xs uppercase tracking-widest text-stone-500">{label}</div>
    </div>
  );
}

function InviteView() {
  const countdown = useCountdown(weddingDate);

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-amber-50 to-yellow-50 text-stone-800">
      <section className="relative flex min-h-screen flex-col items-center justify-center px-6 text-center">

        {/* Top Header */}
        <div className="absolute top-6 text-sm uppercase tracking-widest text-amber-800 flex items-center gap-2">
          <Crown className="w-4 h-4" /> Randhawa × Bal
        </div>

        {/* Title */}
        <p className="text-xs uppercase tracking-[0.4em] text-amber-700 mb-6">
          The Wedding Of
        </p>

        <h1 className="font-serif text-5xl md:text-7xl leading-tight text-amber-500">
          Sehej Bal
          <br />
          <span className="text-3xl md:text-4xl">&</span>
          <br />
          Harkaran Randhawa
        </h1>

        {/* Subtitle */}
        <p className="mt-6 max-w-xl text-lg text-stone-600">
          A traditional, elegant, and floral celebration unfolding across cherished Punjabi wedding festivities.
        </p>

        {/* Date */}
        <div className="mt-8 flex items-center gap-2 rounded-full border border-amber-300 px-6 py-3 text-sm uppercase tracking-widest text-amber-800 bg-white">
          <CalendarDays className="w-4 h-4" />
          26 November 2026 · Thursday
        </div>

        {/* Location */}
        <div className="mt-6 flex items-center gap-2 text-stone-600">
          <MapPin className="w-4 h-4 text-amber-600" />
          Wedding Festivities in Amritsar, Punjab
        </div>

        {/* Countdown */}
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4">
          <CountdownCard value={countdown.days} label="Days" />
          <CountdownCard value={countdown.hours} label="Hours" />
          <CountdownCard value={countdown.minutes} label="Minutes" />
          <CountdownCard value={countdown.seconds} label="Seconds" />
        </div>

        {/* Buttons */}
        <div className="mt-10 flex gap-4 flex-wrap justify-center">
          <button className="px-6 py-3 rounded-full border border-amber-400 text-amber-700 bg-white hover:bg-amber-50 transition">
            View Details Below
          </button>
          <button className="px-6 py-3 rounded-full border border-amber-400 text-amber-700 bg-white hover:bg-amber-50 transition">
            Wedding Customs
          </button>
        </div>

      </section>
    </div>
  );
}

export default function App() {
  return <InviteView />;
}
