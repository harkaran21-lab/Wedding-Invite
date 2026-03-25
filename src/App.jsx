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
    title: 'Sangeet',
    dateLabel: '23 November 2026',
    venue: 'Randhawa Niwas',
    location: 'Batala, Punjab',
    details:
      'A joyful musical gathering to begin the celebrations with family, rhythm, and dancing.',
  },
  {
    title: 'Haldi',
    dateLabel: '24 November 2026',
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
  },
  {
    title: 'Reception',
    dateLabel: '28 November 2026',
    venue: 'G Western Villa',
    location: 'Amritsar, Punjab',
    details:
      'An elegant closing celebration to share joy, gratitude, and warm wishes with loved ones.',
  },
]

const traditions = [
  {
    title: 'Sangeet',
    summary:
      'A lively family celebration of song and dance that sets a joyful tone for the days ahead.',
    body:
      'In many Punjabi wedding celebrations, the Sangeet brings both families together through music, dance performances, playful teasing, and shared excitement. While modern Sangeets can be grand and choreographed, their heart remains the same: joy, togetherness, and celebration before the wedding ceremony.',
  },
  {
    title: 'Haldi',
    summary:
      'A blessing ritual in which turmeric paste is applied to the bride and groom before the wedding.',
    body:
      'The Haldi ceremony is associated with purification, blessing, and auspicious beginnings. Family members lovingly apply haldi paste as part of a warm and intimate gathering. It is one of the most visually vibrant pre-wedding traditions and symbolizes affection, protection, and celebration.',
  },
  {
    title: 'Shagun',
    summary:
      'An auspicious exchange of blessings, gifts, and goodwill between families.',
    body:
      'Shagun is often understood as a gesture of blessing and good fortune. Depending on family traditions, it may include gifts, sweets, symbolic offerings, and expressions of acceptance and joy. Its meaning is rooted in honour, prosperity, and the strengthening of familial bonds.',
  },
  {
    title: 'Jaago',
    summary:
      'A spirited Punjabi celebration traditionally associated with music, dancing, and festive energy at night.',
    body:
      'Jaago is one of the most vibrant Punjabi pre-wedding events. Family and friends gather in high energy, often singing and dancing with celebratory flair. It reflects communal joy and announces that a wedding is being celebrated with full spirit and enthusiasm.',
  },
  {
    title: 'Wedding Day',
    summary:
      'The central day of union, family gathering, and sacred celebration.',
    body:
      'For Sikh weddings, the sacred marriage ceremony is known as Anand Karaj, meaning a blissful union. It takes place in the presence of the Guru Granth Sahib, and the couple circles the Guru Granth Sahib during the four Laavan hymns, which describe the spiritual journey of marriage. Some wedding days may also include family customs such as the milni and other welcoming traditions depending on family practice.',
  },
  {
    title: 'Reception',
    summary:
      'A graceful post-wedding celebration shared with family and guests.',
    body:
      'The reception is a time to gather after the formal wedding rites, celebrate the newly married couple, and enjoy the company of friends and extended family. It is often the most polished and socially expansive event of the wedding week, combining elegance with gratitude.',
  },
]

const familyLines = [
  'With the blessings of our parents and grandparents,',
  'the families of',
  'Harkaran Singh Randhawa & Sehej Bal',
  'request the honour of your presence',
  'at our wedding celebrations.',
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

function InviteView({ onOpenTraditions }) {
  const countdown = useCountdown(weddingDate)

  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.9),_rgba(251,243,233,0.95),_rgba(246,236,226,1))] text-stone-800">
      <section className="relative overflow-hidden">

        <div className="relative mx-auto flex min-h-screen max-w-6xl flex-col px-6 pb-16 pt-10 md:px-10 lg:px-16">

          <div className="mx-auto mt-16 max-w-4xl text-center md:mt-24">

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

          </div>

        </div>
      </section>
    </div>
  )
}

export default function App() {
  return <InviteView />
}
