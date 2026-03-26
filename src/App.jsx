import React, { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import {
  CalendarDays,
  ChevronRight,
  Clock3,
  Crown,
  HeartHandshake,
  MapPin,
  ScrollText,
  Sparkles,
} from 'lucide-react'

const weddingDate = new Date('2026-11-26T10:00:00+05:30')

const schedule = [
  {
    title: 'Haldi',
    dateLabel: '23 November 2026',
    venue: 'Randhawa Niwas',
    location: 'Batala, Punjab',
    details:
      'A radiant pre-wedding ritual celebrating blessings, warmth, and the glow of a new beginning.',
  },
  {
    title: 'Shagun',
    dateLabel: '24 November 2026',
    venue: 'Randhawa Niwas',
    location: 'Batala, Punjab',
    details:
      'A heartfelt ceremony marking blessings, goodwill, and the formal exchange of auspicious wishes.',
    mapUrl: 'https://www.google.com/maps/dir//31.8442962,75.229882/@31.8442463,75.2298203,58m/data=!3m2!1e3!4b1!4m5!4m4!1m0!1m1!4e1!3e0?entry=ttu&g_ep=EgoyMDI2MDMyNC4wIKXMDSoASAFQAw%3D%3D',
  },
  {
    title: 'Jaago',
    dateLabel: 'Night of 24 November 2026',
    venue: 'Randhawa Niwas',
    location: 'Batala, Punjab',
    details:
      'An energetic evening celebration filled with music, movement, and Punjabi festive spirit.',
  },
  {
    title: 'Wedding Day',
    dateLabel: '26 November 2026',
    venue: 'Festyn Palais',
    location: 'Amritsar, Punjab',
    details:
      'The central celebration of the wedding, honouring family, faith, and the union of two lives.',
    mapUrl: 'https://maps.app.goo.gl/hn67pyMvw38ZMZ6FA',
  },
  {
    title: 'Reception',
    dateLabel: '28 November 2026',
    venue: 'G Western Villa',
    location: 'Amritsar, Punjab',
    details:
      'An elegant closing celebration to share joy, gratitude, and warm wishes with loved ones.',
    mapUrl: 'https://maps.app.goo.gl/BYJ97fEmKv8piFDf9',
  },
]

const traditions = [
  {
    title: 'Haldi',
    summary:
      'A blessing ritual in which turmeric paste is lovingly applied to the bride and groom before the wedding.',
    body:
      'The Haldi ceremony is associated with blessing, cleansing, protection, and auspicious beginnings. Family members apply haldi paste to the bride or groom as part of a warm and intimate gathering. It is one of the most visually radiant events of the wedding celebrations and reflects affection, laughter, and the blessings of loved ones before marriage.',
    expect:
      'A cheerful and intimate gathering with a warm family atmosphere, playful moments, bright colours, and meaningful ritual participation.',
    attire:
      'Yellow, pastel, or light-coloured outfits are especially popular. Since turmeric can stain, guests may prefer clothing suited to a playful setting.',
    etiquette:
      '',
  },
  {
    title: 'Shagun',
    summary:
      'An auspicious exchange of blessings, goodwill, and family honour.',
    body:
      'Shagun represents a gesture of good fortune, blessing, acceptance, and joyful intention. Depending on the family’s customs, it may include symbolic gifts, sweets, tokens of affection, and formal expressions of goodwill between both families. Its meaning is rooted in respect, prosperity, and the strengthening of family bonds as the wedding approaches.',
    expect:
      'A meaningful and family-centred gathering focused on blessings, symbolic gestures, and honouring the union of two families.',
    attire:
      'Elegant traditional or modest formal attire is well suited to the tone of this event.',
    etiquette:
      '',
  },
  {
    title: 'Jaago',
    summary:
      'A spirited Punjabi celebration of music, movement, and festive energy held in the lead-up to the wedding.',
    body:
      'Jaago is one of the most expressive and lively Punjabi pre-wedding traditions. It is associated with singing, dancing, celebration at night, and the joyful announcement that a wedding is being celebrated in full spirit. The event reflects family pride, community excitement, and the vibrant social energy that surrounds Punjabi wedding festivities.',
    expect:
      'A high-energy evening celebration with lots of dancing, music, laughter, and festive atmosphere.',
    attire:
      'Bright, celebratory, and energetic looks work beautifully here, including traditional Punjabi outfits or elegant festive wear.',
    etiquette:
      '',
  },
  {
    title: 'Wedding Day',
    summary:
      'The central and sacred celebration of marriage, family, and spiritual union.',
    body:
      'For Sikh weddings, the marriage ceremony is known as Anand Karaj, meaning a blissful union. It takes place in the presence of the Guru Granth Sahib and centres on the spiritual bond of marriage. During the ceremony, the couple circles the Guru Granth Sahib as the Laavan hymns are recited, representing the spiritual journey of marriage. The day may also include family customs such as welcoming rituals and other meaningful traditions shared between both families.',
    expect:
      'A beautiful and reverent ceremony centred on faith, family, blessing, and the sacred union of marriage, followed by joyful celebration with loved ones.',
    attire:
      'Formal traditional attire or elegant formalwear is most appropriate for the main wedding ceremony.',
    etiquette:
      'For Sikh ceremonies, guests may be asked to remove their shoes and cover their heads before entering the ceremony space. Respectful and modest behaviour is appreciated throughout.',
  },
  {
    title: 'Reception',
    summary:
      'A graceful and elegant celebration shared with family, friends, and loved ones after the wedding ceremony.',
    body:
      'The reception is a time to gather after the sacred wedding rites and celebrate the newly married couple in a more social and expansive setting. It is often a moment of joy, gratitude, photographs, shared meals, warm wishes, and the company of extended family and friends. While the ceremony carries spiritual significance, the reception offers a refined and celebratory close to the wedding festivities.',
    expect:
      'An elegant event with celebration, dining, photographs, conversation, and a warm shared atmosphere with family and friends.',
    attire:
      'Formal, polished, and evening-appropriate attire is ideal for the reception.',
    etiquette:
      '',
  },
]

const familyLines = [
  'With the blessings of our grandparents and parents, the families of',
  'Sehej Bal & Harkaran Randhawa',
  'request the honour of your presence',
  'at our wedding festivities.',
]

function useCountdown(targetDate) {
  const [countdown, setCountdown] = useState(getCountdown(targetDate))

  useEffect(() => {
    const interval = setInterval(() => {
      setCountdown(getCountdown(targetDate))
    }, 1000)

    return () => clearInterval(interval)
  }, [targetDate])

  return countdown
}

function getCountdown(targetDate) {
  const now = new Date()
  const diff = targetDate.getTime() - now.getTime()
  const safeDiff = Math.max(diff, 0)

  return {
    days: Math.floor(safeDiff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((safeDiff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((safeDiff / (1000 * 60)) % 60),
    seconds: Math.floor((safeDiff / 1000) % 60),
  }
}

function FloralDivider() {
  return (
    <div className="flex items-center justify-center gap-3 py-4 text-amber-700/80">
      <div className="h-px w-16 bg-gradient-to-r from-transparent via-amber-500/60 to-transparent" />
      <Sparkles className="h-4 w-4" />
      <div className="h-px w-16 bg-gradient-to-r from-transparent via-amber-500/60 to-transparent" />
    </div>
  )
}

function CountdownCard({ value, label }) {
  return (
    <div className="rounded-3xl border border-amber-200/70 bg-white/70 px-5 py-4 text-center shadow-sm backdrop-blur">
      <div className="text-3xl font-semibold tracking-tight text-stone-900">{value}</div>
      <div className="mt-1 text-xs uppercase tracking-[0.28em] text-stone-500">{label}</div>
    </div>
  )
}

function DetailRow({ label, value }) {
  if (!value) return null

  return (
    <div className="mt-4 rounded-2xl bg-amber-50/70 px-4 py-3">
      <p className="text-[11px] uppercase tracking-[0.28em] text-amber-800/75">{label}</p>
      <p className="mt-2 leading-7 text-stone-600">{value}</p>
    </div>
  )
}

function InviteView({ onOpenTraditions }) {
  const countdown = useCountdown(weddingDate)

  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.9),_rgba(251,243,233,0.95),_rgba(246,236,226,1))] text-stone-800">
      <section className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0">
          <motion.div
            initial={{ x: 0 }}
            animate={{ x: '-92%' }}
            transition={{ duration: 2, ease: [0.7, 0, 0.2, 1] }}
            className="absolute left-0 top-0 h-full w-1/2 origin-left bg-gradient-to-r from-rose-950 via-rose-900 to-rose-800 shadow-[20px_0_50px_rgba(0,0,0,0.25)]"
          />
          <motion.div
            initial={{ x: 0 }}
            animate={{ x: '92%' }}
            transition={{ duration: 2, ease: [0.7, 0, 0.2, 1] }}
            className="absolute right-0 top-0 h-full w-1/2 origin-right bg-gradient-to-l from-rose-950 via-rose-900 to-rose-800 shadow-[-20px_0_50px_rgba(0,0,0,0.25)]"
          />
        </div>

        <div className="absolute inset-0 opacity-50 [background-image:radial-gradient(circle_at_center,rgba(180,83,9,0.14)_1px,transparent_1px)] [background-size:24px_24px]" />

        <div className="relative mx-auto flex min-h-screen max-w-6xl flex-col px-6 pb-16 pt-10 md:px-10 lg:px-16">
          <div className="flex items-center justify-between text-sm uppercase tracking-[0.35em] text-amber-900/70">
            <div className="flex items-center gap-2"><Crown className="h-4 w-4" /> Randhawa × Bal</div>
          </div>

          <div className="mx-auto mt-16 max-w-4xl text-center md:mt-24">
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
              className="font-serif mt-5 text-5xl leading-tight text-stone-900 sm:text-6xl md:text-7xl"
            >
              <span className="block">Sehej Bal</span>
              <span className="block gold-text my-2">&</span>
              <span className="block">Harkaran Randhawa</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.6, duration: 0.9 }}
              className="font-serif mx-auto mt-6 max-w-2xl text-lg leading-8 text-stone-700 md:text-xl"
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
              <MapPin className="h-4 w-4 text-amber-700" /> Wedding Ceremony in Amritsar, Punjab
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
            <a
              href="#details"
              className="rounded-full bg-amber-700 px-7 py-3 text-sm font-medium uppercase tracking-[0.25em] text-white shadow-lg shadow-amber-900/15 transition hover:-translate-y-0.5 hover:bg-amber-800"
            >
              View Details Below
            </a>
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

      <section id="details" className="mx-auto max-w-5xl px-6 py-20 md:px-10 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.8 }}
          className="rounded-[2rem] border border-amber-200/80 bg-white/75 p-8 shadow-xl shadow-amber-900/5 backdrop-blur md:p-12"
        >
          <div className="text-center">
            <p className="text-sm uppercase tracking-[0.35em] text-amber-800/70">Invitation</p>
            <h2 className="font-serif mt-4 text-4xl text-stone-900 md:text-5xl">A Celebration of Family, Faith & Joy</h2>
            <FloralDivider />
          </div>

          <div className="font-serif mx-auto max-w-3xl space-y-3 text-center text-lg leading-8 text-stone-700">
            {familyLines.map((line) => (
              <p key={line}>{line}</p>
            ))}
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            <div className="rounded-3xl border border-amber-200 bg-gradient-to-b from-amber-50 to-white p-6">
              <CalendarDays className="h-5 w-5 text-amber-700" />
              <h3 className="font-serif mt-4 text-2xl text-stone-900">Main Ceremony</h3>
              <p className="mt-3 text-stone-600">Thursday, 26 November 2026</p>
            </div>
            <div className="rounded-3xl border border-amber-200 bg-gradient-to-b from-amber-50 to-white p-6">
              <MapPin className="h-5 w-5 text-amber-700" />
              <h3 className="font-serif mt-4 text-2xl text-stone-900">Location</h3>
              <p className="mt-3 text-stone-600">Festyn Palais, Amritsar</p>
            </div>
            <div className="rounded-3xl border border-amber-200 bg-gradient-to-b from-amber-50 to-white p-6">
              <HeartHandshake className="h-5 w-5 text-amber-700" />
              <h3 className="font-serif mt-4 text-2xl text-stone-900">Celebration Style</h3>
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
          <h2 className="font-serif mt-4 text-4xl text-stone-900 md:text-5xl">Celebration Schedule</h2>
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

              {item.mapUrl ? (
                <a
                  href={item.mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex items-center gap-2 rounded-full border border-amber-300 bg-white px-5 py-2.5 text-xs font-medium uppercase tracking-[0.24em] text-amber-900 shadow-sm transition hover:-translate-y-0.5 hover:bg-amber-50"
                >
                  <MapPin className="h-4 w-4" />
                  View on Map
                </a>
              ) : null}
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
          className="rounded-[2rem] border border-amber-200/80 bg-gradient-to-br from-white via-amber-50/60 to-rose-50/70 p-8 text-center shadow-xl shadow-amber-900/5 md:p-12"
        >
          <p className="text-sm uppercase tracking-[0.35em] text-amber-800/70">Customs & Traditions</p>
          <h2 className="font-serif mt-4 text-4xl text-stone-900 md:text-5xl">Discover the Meaning Behind Each Celebration</h2>
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
  )
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
          <h1 className="font-serif mt-4 text-4xl text-stone-900 md:text-6xl">The Meaning Behind the Celebrations</h1>
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
                <div className="rounded-2xl bg-amber-50 p-3 text-amber-700">
                  <ScrollText className="h-5 w-5" />
                </div>

                <div className="w-full">
                  <h2 className="font-serif text-3xl text-stone-900">{item.title}</h2>
                  <p className="mt-3 text-lg text-stone-700">{item.summary}</p>
                  <p className="mt-4 leading-8 text-stone-600">{item.body}</p>

                  <DetailRow label="What guests can expect" value={item.expect} />
                  <DetailRow label="Attire" value={item.attire} />
                  <DetailRow label="Etiquette note" value={item.etiquette} />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-10 rounded-[2rem] border border-amber-200/80 bg-gradient-to-br from-white to-rose-50/70 p-8 shadow-lg shadow-amber-900/5 md:p-10">
          <h3 className="font-serif text-3xl text-stone-900">A Note on Tradition</h3>
          <p className="mt-4 leading-8 text-stone-600">
            Punjabi and Sikh wedding customs can differ across families, regions, and personal preferences. This page presents elegant guest-friendly explanations intended to help loved ones understand the spirit of the celebrations without overwhelming them.
          </p>
        </div>
      </div>
    </div>
  )
}

export default function App() {
  const [page, setPage] = useState('invite')

  return (
    <div className="font-[Inter,system-ui,sans-serif]">
      <AnimatePresence mode="wait">
        {page === 'invite' ? (
          <motion.div key="invite" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <InviteView onOpenTraditions={() => setPage('traditions')} />
          </motion.div>
        ) : (
          <motion.div key="traditions" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <TraditionsView onBack={() => setPage('invite')} />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
