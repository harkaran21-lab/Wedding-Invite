import React, { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CalendarDays, MapPin, Sparkles, ChevronRight, HeartHandshake, Crown, ScrollText, Clock3 } from "lucide-react";

const weddingDate = new Date("2026-11-26T10:00:00+05:30");

const schedule = [
  {
    title: "Sangeet",
    dateLabel: "23 November 2026",
    venue: "Randhawa Niwas",
    location: "Batala, Amritsar",
    details: "A joyful musical gathering to begin the celebrations with family, rhythm, and dancing.",
    accent: "music",
  },
  {
    title: "Haldi",
    dateLabel: "24 November 2026",
    venue: "Randhawa Niwas",
    location: "Batala, Amritsar",
    details: "A radiant pre-wedding ritual celebrating blessings, warmth, and the glow of a new beginning.",
    accent: "haldi",
  },
  {
    title: "Shagun",
    dateLabel: "24 November 2026",
    venue: "Randhawa Niwas",
    location: "Batala, Amritsar",
    details: "A heartfelt ceremony marking blessings, goodwill, and the formal exchange of auspicious wishes.",
    accent: "gold",
  },
  {
    title: "Jaago",
    dateLabel: "Night of 24 November 2026",
    venue: "Randhawa Niwas",
    location: "Batala, Amritsar",
    details: "An energetic evening celebration filled with music, movement, and Punjabi festive spirit.",
    accent: "night",
  },
  {
    title: "Wedding Day",
    dateLabel: "26 November 2026",
    venue: "Festyn Palais",
    location: "Amritsar, Punjab",
    details: "The central celebration of the wedding, honouring family, faith, and the union of two lives.",
    accent: "wedding",
  },
  {
    title: "Reception",
    dateLabel: "28 November 2026",
    venue: "G Western Villa",
    location: "Amritsar, Punjab",
    details: "An elegant closing celebration to share joy, gratitude, and warm wishes with loved ones.",
    accent: "reception",
  },
];

const traditions = [
  {
    title: "Sangeet",
    summary:
      "A lively family celebration of song and dance that sets a joyful tone for the days ahead.",
    body:
      "In many Punjabi wedding celebrations, the Sangeet brings both families together through music, dance performances, playful teasing, and shared excitement. While modern Sangeets can be grand and choreographed, their heart remains the same: joy, togetherness, and celebration before the wedding ceremony.",
  },
  {
    title: "Haldi",
    summary:
      "A blessing ritual in which turmeric paste is applied to the bride and groom before the wedding.",
    body:
      "The Haldi ceremony is associated with purification, blessing, and auspicious beginnings. Family members lovingly apply haldi paste as part of a warm and intimate gathering. It is one of the most visually vibrant pre-wedding traditions and symbolizes affection, protection, and celebration.",
  },
  {
    title: "Shagun",
    summary:
      "An auspicious exchange of blessings, gifts, and goodwill between families.",
    body:
      "Shagun is often understood as a gesture of blessing and good fortune. Depending on family traditions, it may include gifts, sweets, symbolic offerings, and expressions of acceptance and joy. Its meaning is rooted in honour, prosperity, and the strengthening of familial bonds.",
  },
  {
    title: "Jaago",
    summary:
      "A spirited Punjabi celebration traditionally associated with music, dancing, and festive energy at night.",
    body:
      "Jaago is one of the most vibrant Punjabi pre-wedding events. Family and friends gather in high energy, often singing and dancing with celebratory flair. It reflects communal joy and announces that a wedding is being celebrated with full spirit and enthusiasm.",
  },
  {
    title: "Wedding Day",
    summary:
      "The central day of union, family gathering, and sacred celebration.",
    body:
      "For Sikh weddings, the sacred marriage ceremony is known as Anand Karaj, meaning a blissful union. It takes place in the presence of the Guru Granth Sahib, and the couple circles the Guru Granth Sahib during the four Laavan hymns, which describe the spiritual journey of marriage. Some wedding days may also include family customs such as the milni and other welcoming traditions depending on family practice.",
  },
  {
    title: "Reception",
    summary:
      "A graceful post-wedding celebration shared with family and guests.",
    body:
      "The reception is a time to gather after the formal wedding rites, celebrate the newly married couple, and enjoy the company of friends and extended family. It is often the most polished and socially expansive event of the wedding week, combining elegance with gratitude.",
  },
];

const familyLines = [
  "With the blessings of our parents and grandparents",
  "the families of",
  "Harkaran Singh Randhawa & Sehej Bal",
  "request the honour of your presence",
  "at our wedding celebrations",
];

function useCountdown(targetDate) {
  return useMemo(() => {
    const now = new Date();
    const diff = targetDate.getTime() - now.getTime();
    const safeDiff = Math.max(diff, 0);
    const days = Math.floor(safeDiff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((safeDiff / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((safeDiff / (1000 * 60)) % 60);
    const seconds = Math.floor((safeDiff / 1000) % 60);
    return { days, hours, minutes, seconds, completed: diff <= 0 };
  }, [targetDate]);
}

function FloralDivider() {
  return (
    <div className="flex items-center justify-center gap-3 py-4 text-amber-700/80">
      <div className="h-px w-16 bg-gradient-to-r from-transparent via-amber-500/60 to-transparent" />
      <Sparkles className="h-4 w-4" />
      <div className="h-px w-16 bg-gradient-to-r from-transparent via-amber-500/60 to-transparent" />
    </div>
  );
}

function CountdownCard({ value, label }) {
  return (
    <div className="rounded-3xl border border-amber-200/70 bg-white/70 px-5 py-4 text-center shadow-sm backdrop-blur">
      <div className="text-3xl font-semibold tracking-tight text-stone-900">{value}</div>
      <div className="mt-1 text-xs uppercase tracking-[0.28em] text-stone-500">{label}</div>
    </div>
  );
}

function InviteView({ onOpenTraditions }) {
  const countdown = useCountdown(weddingDate);

  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.9),_rgba(251,243,233,0.95),_rgba(246,236,226,1))] text-stone-800">
      <section className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0">
          <motion.div
            initial={{ x: 0 }}
            animate={{ x: "-92%" }}
            transition={{ duration: 2, ease: [0.7, 0, 0.2, 1] }}
            className="absolute left-0 top-0 h-full w-1/2 origin-left bg-gradient-to-r from-amber-800 via-amber-600 to-yellow-400 shadow-[20px_0_50px_rgba(0,0,0,0.25)]"
          />
          <motion.div
            initial={{ x: 0 }}
            animate={{ x: "92%" }}
            transition={{ duration: 2, ease: [0.7, 0, 0.2, 1] }}
            className="absolute right-0 top-0 h-full w-1/2 origin-right bg-gradient-to-l from-amber-800 via-amber-600 to-yellow-400 shadow-[-20px_0_50px_rgba(0,0,0,0.25)]"
          />
        </div>

        <div className="absolute inset-0 opacity-50 [background-image:radial-gradient(circle_at_center,rgba(180,83,9,0.14)_1px,transparent_1px)] [background-size:24px_24px]" />

        <div className="relative mx-auto flex min-h-screen max-w-6xl flex-col px-6 pb-16 pt-10 md:px-10 lg:px-16">
          <div className="flex items-center justify-center text-sm uppercase tracking-[0.35em] text-amber-900/70">
            <div className="flex items-center gap-2"><Crown className="h-4 w-4" /> Randhawa × Bal</div>
          </div>
            <div>Amritsar, Punjab</div>
          </div>

          <div className="mx-auto mt-10 max-w-4xl text-center md:mt-16">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.3, duration: 0.9 }}
              className="font-serif text-sm uppercase tracking-[0.42em] text-amber-800/80"
            >
              The Wedding of
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.45, duration: 0.9 }}
              className="mt-5 font-serif text-5xl leading-tight text-amber-500 sm:text-6xl md:text-7xl"
            >
              Sehej Bal
              <br />
              <span className="text-amber-500 text-3xl md:text-4xl">&</span>
              <br />
              Harkaran Randhawa
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.6, duration: 0.9 }}
              className="mx-auto mt-6 max-w-2xl font-serif text-lg leading-8 text-stone-700 md:text-xl"
            >
              A traditional, elegant, and floral celebration unfolding across cherished Punjabi wedding festivities.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.75, duration: 0.8 }}
              className="mt-10 inline-flex items-center gap-3 rounded-full border border-amber-300/70 bg-white/70 px-6 py-3 text-sm uppercase tracking-[0.3em] text-amber-900 shadow-sm backdrop-blur"
            >
              <CalendarDays className="h-4 w-4" /> 26 November 2026 · Thursday
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2, duration: 0.8 }}
              className="mt-8 flex items-center justify-center gap-2 text-stone-600"
            >
              <MapPin className="h-4 w-4 text-amber-700" /> Wedding Festivities in Amritsar, Punjab
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.1, duration: 0.9 }}
            className="mx-auto mt-16 grid max-w-3xl grid-cols-2 gap-4 md:grid-cols-4"
          >
            <CountdownCard value={countdown.days} label="Days" />
            <CountdownCard value={countdown.hours} label="Hours" />
            <CountdownCard value={countdown.minutes} label="Minutes" />
            <CountdownCard value={countdown.seconds} label="Seconds" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.25, duration: 0.9 }}
            className="mx-auto mt-12 flex flex-wrap items-center justify-center gap-4"
          >
            <button className="rounded-full bg-white border border-amber-400 text-amber-700 px-7 py-3 text-sm font-medium uppercase tracking-[0.25em] text-white shadow-lg shadow-amber-900/15 transition hover:-translate-y-0.5 hover:bg-amber-50">
              View Details Below
            </button>
            <button
              onClick={onOpenTraditions}
              className="rounded-full border border-amber-300 bg-white/75 px-7 py-3 text-sm font-medium uppercase tracking-[0.25em] text-stone-800 shadow-sm backdrop-blur transition hover:-translate-y-0.5"
            >
              Wedding Customs
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2.4, duration: 1 }}
            className="mx-auto mt-auto pt-16 text-center text-xs uppercase tracking-[0.35em] text-stone-500"
          >
            Scroll to unveil the celebration
          </motion.div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-20 md:px-10 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.8 }}
          className="rounded-[2rem] border border-amber-200/80 bg-white/75 p-8 shadow-xl shadow-amber-900/5 backdrop-blur md:p-12"
        >
          <div className="text-center">
            <p className="text-sm uppercase tracking-[0.35em] text-amber-800/70">Invitation</p>
            <h2 className="mt-4 font-serif text-4xl text-stone-900 md:text-5xl">A Celebration of Family, Faith & Joy</h2>
            <FloralDivider />
          </div>

          <div className="mx-auto max-w-3xl space-y-3 text-center font-serif text-lg leading-8 text-stone-700">
            {familyLines.map((line) => (
              <p key={line}>{line}</p>
            ))}
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            <div className="rounded-3xl border border-amber-200 bg-gradient-to-b from-amber-50 to-white p-6">
              <CalendarDays className="h-5 w-5 text-amber-700" />
              <h3 className="mt-4 font-serif text-2xl text-stone-900">Main Ceremony</h3>
              <p className="mt-3 text-stone-600">Thursday, 26 November 2026</p>
            </div>
            <div className="rounded-3xl border border-amber-200 bg-gradient-to-b from-amber-50 to-white p-6">
              <MapPin className="h-5 w-5 text-amber-700" />
              <h3 className="mt-4 font-serif text-2xl text-stone-900">Location</h3>
              <p className="mt-3 text-stone-600">Festyn Palais, Amritsar</p>
            </div>
            <div className="rounded-3xl border border-amber-200 bg-gradient-to-b from-amber-50 to-white p-6">
              <HeartHandshake className="h-5 w-5 text-amber-700" />
              <h3 className="mt-4 font-serif text-2xl text-stone-900">Celebration Style</h3>
              <p className="mt-3 text-stone-600">Traditional · Elegant · Luxurious</p>
            </div>
          </div>
        </motion.div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-20 md:px-10 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <p className="text-sm uppercase tracking-[0.35em] text-amber-800/70">Wedding Week</p>
          <h2 className="mt-4 font-serif text-4xl text-stone-900 md:text-5xl">Celebration Schedule</h2>
          <FloralDivider />
        </motion.div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {schedule.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.7, delay: index * 0.05 }}
              className="group rounded-[2rem] border border-amber-200/80 bg-white/80 p-7 shadow-lg shadow-amber-900/5 transition hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="flex items-center justify-between gap-4">
                <h3 className="font-serif text-3xl text-stone-900">{item.title}</h3>
                <span className="rounded-full bg-amber-50 p-2 text-amber-700"><Sparkles className="h-4 w-4" /></span>
              </div>
              <div className="mt-5 space-y-3 text-stone-600">
                <p className="flex items-center gap-2"><CalendarDays className="h-4 w-4 text-amber-700" /> {item.dateLabel}</p>
                <p className="flex items-center gap-2"><MapPin className="h-4 w-4 text-amber-700" /> {item.venue}, {item.location}</p>
                <p className="flex items-start gap-2"><Clock3 className="mt-0.5 h-4 w-4 text-amber-700" /> {item.details}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 pb-24 md:px-10 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8 }}
          className="rounded-[2rem] border border-amber-200/80 bg-gradient-to-br from-white via-amber-50/60 to-amber-50/80 p-8 text-center shadow-xl shadow-amber-900/5 md:p-12"
        >
          <p className="text-sm uppercase tracking-[0.35em] text-amber-800/70">Customs & Traditions</p>
          <h2 className="mt-4 font-serif text-4xl text-stone-900 md:text-5xl">Discover the Meaning Behind Each Celebration</h2>
          <p className="mx-auto mt-5 max-w-2xl text-stone-600">
            Explore a dedicated page explaining the cultural, traditional, and wedding-day customs that shape this celebration.
          </p>
          <button
            onClick={onOpenTraditions}
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-stone-900 px-7 py-3 text-sm font-medium uppercase tracking-[0.25em] text-white transition hover:-translate-y-0.5"
          >
            Open Customs Page <ChevronRight className="h-4 w-4" />
          </button>
        </motion.div>
      </section>
    </div>
  );
}

function TraditionsView({ onBack }) {
  return (
    <div className="min-h-screen bg-[linear-gradient(180deg,#fffaf5_0%,#f8efe4_100%)] px-6 py-10 text-stone-800 md:px-10 lg:px-16">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <button
            onClick={onBack}
            className="rounded-full border border-amber-300 bg-white/80 px-5 py-2 text-sm uppercase tracking-[0.25em] text-stone-800 shadow-sm"
          >
            Back to Invite
          </button>
          <div className="text-sm uppercase tracking-[0.32em] text-amber-800/70">Wedding Customs Guide</div>
        </div>

        <div className="mt-10 rounded-[2rem] border border-amber-200/70 bg-white/75 p-8 shadow-xl shadow-amber-900/5 md:p-12">
          <p className="text-sm uppercase tracking-[0.35em] text-amber-800/70">Cultural Overview</p>
          <h1 className="mt-4 font-serif text-4xl text-stone-900 md:text-6xl">The Meaning Behind the Celebrations</h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-stone-600">
            This wedding week follows a sequence of Punjabi and Sikh wedding celebrations, each carrying its own atmosphere, symbolism, and family significance. Customs can vary from one family to another, but together these events honour joy, blessing, community, and the sacred bond of marriage.
          </p>
          <FloralDivider />
          <div className="grid gap-4 text-sm text-stone-600 md:grid-cols-3">
            <div className="rounded-3xl bg-amber-50/70 p-5"><strong className="text-stone-900">Pre-wedding joy</strong><br />Music, blessing, togetherness, and festive energy.</div>
            <div className="rounded-3xl bg-amber-50/70 p-5"><strong className="text-stone-900">Sacred union</strong><br />The wedding ceremony marks the spiritual and familial union of two lives.</div>
            <div className="rounded-3xl bg-amber-50/70 p-5"><strong className="text-stone-900">Celebratory close</strong><br />The reception offers a warm and elegant gathering after the wedding rites.</div>
          </div>
        </div>

        <div className="mt-10 space-y-6">
          {traditions.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.12 }}
              transition={{ duration: 0.7, delay: index * 0.05 }}
              className="rounded-[2rem] border border-amber-200/80 bg-white/80 p-7 shadow-lg shadow-amber-900/5 md:p-8"
            >
              <div className="flex items-start gap-4">
                <div className="rounded-2xl bg-amber-50 p-3 text-amber-700"><ScrollText className="h-5 w-5" /></div>
                <div>
                  <h2 className="font-serif text-3xl text-stone-900">{item.title}</h2>
                  <p className="mt-3 text-lg text-stone-700">{item.summary}</p>
                  <p className="mt-4 leading-8 text-stone-600">{item.body}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-10 rounded-[2rem] border border-amber-200/80 bg-gradient-to-br from-white to-amber-50/80 p-8 shadow-lg shadow-amber-900/5 md:p-10">
          <h3 className="font-serif text-3xl text-stone-900">A Note on Tradition</h3>
          <p className="mt-4 leading-8 text-stone-600">
            Punjabi and Sikh wedding customs can differ across families, regions, and personal preferences. This page presents elegant guest-friendly explanations intended to help loved ones understand the spirit of the celebrations without overwhelming them.
          </p>
        </div>
      </div>
    </div>
  );
}

export default function WeddingInviteSite() {
  const [page, setPage] = useState("invite");

  return (
    <div className="font-[ui-sans-serif,system-ui,sans-serif]">
      <AnimatePresence mode="wait">
        {page === "invite" ? (
          <motion.div key="invite" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <InviteView onOpenTraditions={() => setPage("traditions")} />
          </motion.div>
        ) : (
          <motion.div key="traditions" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <TraditionsView onBack={() => setPage("invite")} />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
