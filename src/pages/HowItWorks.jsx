import { useState } from 'react'
import {
  ArrowRight,
  BadgeCheck,
  CalendarCheck,
  Check,
  CheckCircle2,
  ChevronDown,
  ChevronLeft,
  Download,
  GitCompare,
  Headphones,
  Heart,
  ImagePlus,
  Layers,
  Lock,
  MapPin,
  MessageCircle,
  Phone,
  Search,
  Send,
  ShieldCheck,
  SlidersHorizontal,
  Star,
  Trophy,
} from 'lucide-react'
import AnimatedSection from '../components/AnimatedSection'
import GoldButton from '../components/GoldButton'
import PhoneFrame from '../components/PhoneFrame'
import logo from '../assets/logo-full.png'
import photography from '../assets/photography.jpeg'
import videography from '../assets/vediography.png'
import decoration from '../assets/decoration.png'
import venue from '../assets/venue.png'
import makeup from '../assets/makeup.png'
import mehendi from '../assets/mehendi.png'
import catering from '../assets/catering.png'

const timelineSteps = [
  {
    num: 1,
    title: 'Download the App',
    desc: 'Get OneDestiny from the App Store or Google Play. Create your profile in under a minute with your phone number or email.',
    icon: Download,
    highlights: ['Free for couples', 'Sign up with phone or email', 'Set your wedding date & city'],
    chip: { icon: CheckCircle2, title: 'Account created', sub: 'in under 60 seconds' },
  },
  {
    num: 2,
    title: 'Search & Discover',
    desc: 'Filter vendors by category, city, budget, and ratings. Smart search helps you find exactly what you need for your celebration.',
    icon: Search,
    highlights: ['10 vendor categories', 'Filter by city, budget & rating', 'Only verified vendors listed'],
    chip: { icon: Search, title: '126 vendors found', sub: 'Photographers · Karimnagar' },
  },
  {
    num: 3,
    title: 'Compare Vendors',
    desc: 'Read genuine reviews from real couples, compare portfolios, and review pricing side by side before you decide.',
    icon: GitCompare,
    highlights: ['Side-by-side pricing', 'Portfolios & real reviews', 'Shortlist your favourites'],
    chip: { icon: Trophy, title: 'Best match', sub: 'Lumière Studios · 4.9★' },
  },
  {
    num: 4,
    title: 'Book & Connect',
    desc: 'Contact vendors directly through in-app chat or book instantly with secure payments powered by Razorpay.',
    icon: CalendarCheck,
    highlights: ['Direct in-app chat', 'Pay a small advance securely', 'Instant booking confirmation'],
    chip: { icon: ShieldCheck, title: 'Booking confirmed', sub: 'Advance paid via Razorpay' },
  },
  {
    num: 5,
    title: 'Review & Rate',
    desc: 'After your event, share your experience and help other couples find their perfect vendors.',
    icon: Star,
    highlights: ['Rate in a few taps', 'Add photos from your day', 'Help other couples choose'],
    chip: { icon: Heart, title: 'Review published', sub: 'Thank you for sharing!' },
  },
]

const features = [
  { icon: ShieldCheck, title: 'Verified Vendors', desc: 'Every vendor goes through a strict verification process before being listed on the platform.' },
  { icon: Lock, title: 'Secure Payments', desc: 'All transactions are protected with bank-grade encryption and powered by Razorpay.' },
  { icon: MessageCircle, title: 'Direct Contact', desc: 'Chat directly with vendors to discuss requirements, negotiate pricing, and finalize details.' },
  { icon: Star, title: 'Reviews & Ratings', desc: 'Genuine reviews from verified couples who have used the vendor services.' },
  { icon: Layers, title: 'Multiple Categories', desc: 'Ten vendor categories cover every aspect of your wedding from photography to transport.' },
  { icon: Headphones, title: 'Fast Support', desc: 'A dedicated support team is available to help you with questions before and after booking.' },
]

const faqData = [
  {
    q: 'How do I book a vendor through OneDestiny?',
    a: 'Download the app, browse vendors by category or city, view their profile and portfolio, then choose Book Now or Contact to get started. You can pay securely through the in-app payment system powered by Razorpay.',
  },
  {
    q: 'Are the vendors verified?',
    a: 'Yes. Every vendor on OneDestiny goes through a verification process covering identity, business details, portfolio authenticity, and customer feedback before listing.',
  },
  {
    q: 'What payment methods are accepted?',
    a: 'OneDestiny supports UPI, credit and debit cards, net banking, and popular wallets through Razorpay. You receive confirmation after every successful payment.',
  },
  {
    q: 'Can I contact vendors directly?',
    a: 'Yes. You can use in-app chat to message vendors directly, discuss requirements, ask for custom quotes, and finalize details.',
  },
  {
    q: 'What if I need to cancel a booking?',
    a: 'Cancellation terms are shown before booking. You can request cancellation through the app, and the support team can help with eligible refunds based on the vendor policy.',
  },
]

/* ---------- App screens shown beside each step ---------- */

function WelcomeScreen() {
  return (
    <>
      <div className="grid h-[150px] grid-cols-3 grid-rows-2 gap-1.5">
        <img src={venue} alt="" className="col-span-2 row-span-2 h-full w-full rounded-xl object-cover" />
        <img src={mehendi} alt="" className="h-full w-full rounded-xl object-cover" />
        <img src={makeup} alt="" className="h-full w-full rounded-xl object-cover" />
      </div>
      <div className="text-center">
        <img src={logo} alt="" className="mx-auto mb-1 h-9 w-auto object-contain" />
        <div className="font-cormorant text-lg leading-tight text-text-primary">
          Your wedding, <em className="text-gold">simplified</em>
        </div>
        <div className="font-dmsans text-[8px] text-muted">Create your free account to get started</div>
      </div>
      <div className="space-y-2">
        <div className="flex items-center gap-2 rounded-xl border border-gold/40 bg-surface-2 px-3 py-2 font-dmsans text-[10px] text-text-primary">
          <Phone size={11} className="text-gold" />
          <span className="text-muted">+91</span> 98765 43210
        </div>
        <div className="grid grid-cols-2 gap-2 font-dmsans text-[8px]">
          <div className="rounded-lg border border-border-custom bg-surface-2 px-2 py-1.5">
            <div className="text-muted">Wedding date</div>
            <div className="text-text-primary">12 Dec 2026</div>
          </div>
          <div className="rounded-lg border border-border-custom bg-surface-2 px-2 py-1.5">
            <div className="text-muted">City</div>
            <div className="text-text-primary">Karimnagar</div>
          </div>
        </div>
      </div>
      <div className="mt-auto space-y-2">
        <div className="rounded-lg bg-gold py-2 text-center font-dmsans text-[10px] font-medium text-bg">Get OTP</div>
        <div className="text-center font-dmsans text-[7px] text-muted">
          By continuing you agree to our <span className="text-gold">Terms</span> & <span className="text-gold">Privacy</span>
        </div>
      </div>
    </>
  )
}

const searchResults = [
  { img: photography, name: 'Lumière Studios', rating: '4.9', reviews: 214, price: '₹65,000' },
  { img: videography, name: 'Reel Stories Films', rating: '4.8', reviews: 168, price: '₹55,000' },
  { img: decoration, name: 'Golden Frame Co.', rating: '4.7', reviews: 92, price: '₹40,000' },
]

function SearchScreen() {
  return (
    <>
      <div className="flex items-center gap-2">
        <div className="flex flex-1 items-center gap-2 rounded-xl border border-gold/40 bg-surface-2 px-3 py-2 font-dmsans text-[10px] text-text-primary">
          <Search size={11} className="text-gold" /> Photographers
        </div>
        <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-gold text-bg">
          <SlidersHorizontal size={12} />
        </span>
      </div>
      <div className="flex gap-1.5 font-dmsans text-[8px]">
        {[
          { t: 'Karimnagar', on: true },
          { t: '₹50k – 1L', on: true },
          { t: '4.5★ +', on: false },
        ].map(({ t, on }) => (
          <span
            key={t}
            className={`whitespace-nowrap rounded-full border px-2 py-0.5 ${
              on ? 'border-gold bg-gold/15 text-gold' : 'border-border-custom text-muted'
            }`}
          >
            {t}
          </span>
        ))}
      </div>
      <div className="flex items-center justify-between font-dmsans text-[8px]">
        <span className="text-muted">126 results</span>
        <span className="text-gold">Sort: Top rated</span>
      </div>
      <div className="space-y-2">
        {searchResults.map((v) => (
          <div key={v.name} className="flex gap-2.5 rounded-xl border border-border-custom bg-surface p-2">
            <img src={v.img} alt="" className="h-14 w-14 shrink-0 rounded-lg object-cover" />
            <div className="min-w-0 flex-1">
              <div className="flex items-center gap-1 truncate font-cormorant text-[13px] text-text-primary">
                {v.name} <BadgeCheck size={10} className="shrink-0 text-gold" />
              </div>
              <div className="flex items-center gap-1 font-dmsans text-[8px] text-muted">
                <Star size={8} className="fill-gold text-gold" /> {v.rating} ({v.reviews}) · <MapPin size={7} /> 2.4 km
              </div>
              <div className="mt-1 font-dmsans text-[9px] text-gold-light">{v.price} onwards</div>
            </div>
            <Heart size={11} className="shrink-0 text-muted" />
          </div>
        ))}
      </div>
    </>
  )
}

const compareRows = [
  { label: 'Rating', a: '4.9 ★', b: '4.8 ★', win: 'a' },
  { label: 'Starts at', a: '₹65,000', b: '₹55,000', win: 'b' },
  { label: 'Experience', a: '8 yrs', b: '5 yrs', win: 'a' },
  { label: 'Replies in', a: '~1 hr', b: '~3 hrs', win: 'a' },
  { label: 'Reviews', a: '214', b: '168', win: 'a' },
]

function CompareScreen() {
  return (
    <>
      <div className="flex items-center justify-between">
        <div className="font-cormorant text-lg text-text-primary">
          Compare <em className="text-gold">(2)</em>
        </div>
        <span className="font-dmsans text-[8px] text-gold">+ Add vendor</span>
      </div>
      <div className="grid grid-cols-2 gap-2">
        {[
          { img: photography, name: 'Lumière Studios', best: true },
          { img: videography, name: 'Reel Stories Films' },
        ].map((v) => (
          <div
            key={v.name}
            className={`overflow-hidden rounded-xl border bg-surface ${v.best ? 'border-gold/60' : 'border-border-custom'}`}
          >
            <div className="relative h-[72px]">
              <img src={v.img} alt="" className="h-full w-full object-cover" />
              {v.best && (
                <span className="absolute left-1.5 top-1.5 rounded-full bg-gold px-1.5 py-0.5 font-dmsans text-[6px] font-semibold uppercase text-bg">
                  Best match
                </span>
              )}
            </div>
            <div className="truncate px-2 py-1.5 font-cormorant text-[11px] text-text-primary">{v.name}</div>
          </div>
        ))}
      </div>
      <div className="overflow-hidden rounded-xl border border-border-custom">
        {compareRows.map((r, i) => (
          <div
            key={r.label}
            className={`grid grid-cols-3 px-2.5 py-1.5 font-dmsans text-[8px] ${i % 2 ? 'bg-surface' : 'bg-surface-2'}`}
          >
            <span className="text-muted">{r.label}</span>
            <span className={`text-center ${r.win === 'a' ? 'text-gold' : 'text-text-primary/80'}`}>{r.a}</span>
            <span className={`text-center ${r.win === 'b' ? 'text-gold' : 'text-text-primary/80'}`}>{r.b}</span>
          </div>
        ))}
      </div>
      <div className="mt-auto flex gap-2">
        <span className="flex flex-1 items-center justify-center gap-1 rounded-lg border border-gold/50 py-2 font-dmsans text-[9px] text-gold">
          <Heart size={10} /> Shortlist
        </span>
        <span className="flex-1 rounded-lg bg-gold py-2 text-center font-dmsans text-[9px] font-medium text-bg">
          Choose Lumière
        </span>
      </div>
    </>
  )
}

function ChatScreen() {
  return (
    <>
      <div className="-mx-4 -mt-2 flex items-center gap-2 border-b border-border-custom px-4 pb-2.5">
        <ChevronLeft size={14} className="text-muted" />
        <img src={photography} alt="" className="h-8 w-8 rounded-full object-cover" />
        <div className="flex-1">
          <div className="flex items-center gap-1 font-dmsans text-[10px] text-text-primary">
            Lumière Studios <BadgeCheck size={10} className="text-gold" />
          </div>
          <div className="flex items-center gap-1 font-dmsans text-[7px] text-green-400">
            <span className="h-1 w-1 rounded-full bg-green-400" /> Online
          </div>
        </div>
        <Phone size={12} className="text-gold" />
      </div>
      <div className="flex flex-col gap-2 font-dmsans text-[8.5px] leading-relaxed">
        <div className="max-w-[78%] self-end rounded-2xl rounded-br-sm bg-gold px-3 py-1.5 text-bg">
          Hi! Are you available on 12 Dec for a full-day wedding?
        </div>
        <div className="max-w-[78%] self-start rounded-2xl rounded-bl-sm border border-border-custom bg-surface-2 px-3 py-1.5 text-text-primary/90">
          Yes, we are! Our Signature package covers haldi & the wedding.
        </div>
      </div>
      <div className="rounded-xl border border-gold/40 bg-gradient-to-br from-maroon/50 to-surface-2 p-2.5">
        <div className="mb-1.5 flex items-center justify-between">
          <span className="font-cinzel text-[7px] uppercase tracking-[0.16em] text-gold-light">Booking Request</span>
          <span className="flex items-center gap-1 rounded-full bg-green-500/15 px-1.5 py-0.5 font-dmsans text-[7px] text-green-400">
            <Check size={7} /> Confirmed
          </span>
        </div>
        <div className="space-y-0.5 font-dmsans text-[8px] text-muted">
          <div className="flex justify-between"><span>Date</span><span className="text-text-primary">12 Dec 2026</span></div>
          <div className="flex justify-between"><span>Package</span><span className="text-text-primary">Signature</span></div>
          <div className="flex justify-between"><span>Advance paid</span><span className="text-gold-light">₹13,000</span></div>
        </div>
      </div>
      <div className="max-w-[78%] self-start rounded-2xl rounded-bl-sm border border-border-custom bg-surface-2 px-3 py-1.5 font-dmsans text-[8.5px] text-text-primary/90">
        Thank you! See you on the big day ✨
      </div>
      <div className="mt-auto flex items-center gap-2 rounded-full border border-border-custom bg-surface-2 py-1.5 pl-3 pr-1.5 font-dmsans text-[9px] text-muted">
        <span className="flex-1">Type a message…</span>
        <span className="flex h-6 w-6 items-center justify-center rounded-full bg-gold text-bg">
          <Send size={10} />
        </span>
      </div>
    </>
  )
}

function ReviewScreen() {
  return (
    <>
      <div className="font-cormorant text-lg text-text-primary">
        Rate your <em className="text-gold">experience</em>
      </div>
      <div className="flex items-center gap-2.5 rounded-xl border border-border-custom bg-surface p-2">
        <img src={photography} alt="" className="h-10 w-10 rounded-lg object-cover" />
        <div>
          <div className="font-cormorant text-[13px] text-text-primary">Lumière Studios</div>
          <div className="font-dmsans text-[8px] text-muted">Photography · 12 Dec 2026</div>
        </div>
      </div>
      <div className="py-1 text-center">
        <div className="flex justify-center gap-1.5">
          {[1, 2, 3, 4, 5].map((i) => (
            <Star key={i} size={22} className="fill-gold text-gold drop-shadow-[0_0_6px_rgba(201,168,76,0.5)]" />
          ))}
        </div>
        <div className="mt-1 font-dmsans text-[9px] text-gold-light">Excellent!</div>
      </div>
      <div className="flex flex-wrap gap-1.5 font-dmsans text-[8px]">
        {[
          { t: 'Punctual', on: true },
          { t: 'Creative', on: true },
          { t: 'Professional', on: true },
          { t: 'Value for money', on: false },
        ].map(({ t, on }) => (
          <span
            key={t}
            className={`rounded-full border px-2 py-0.5 ${on ? 'border-gold bg-gold/15 text-gold' : 'border-border-custom text-muted'}`}
          >
            {t}
          </span>
        ))}
      </div>
      <div className="rounded-xl border border-border-custom bg-surface-2 p-2.5 font-dmsans text-[8.5px] leading-relaxed text-text-primary/90">
        Every moment was captured beautifully. The team was calm, on time and so creative!
      </div>
      <div className="flex gap-1.5">
        {[decoration, catering].map((src) => (
          <img key={src} src={src} alt="" className="h-11 w-11 rounded-lg object-cover" />
        ))}
        <span className="flex h-11 w-11 items-center justify-center rounded-lg border border-dashed border-gold/40 text-gold">
          <ImagePlus size={14} />
        </span>
      </div>
      <div className="mt-auto rounded-lg bg-gold py-2 text-center font-dmsans text-[10px] font-medium text-bg">
        Submit Review
      </div>
    </>
  )
}

const stepScreens = [WelcomeScreen, SearchScreen, CompareScreen, ChatScreen, ReviewScreen]

function StepPhone({ index, chip, chipSide }) {
  const Screen = stepScreens[index]
  return (
    <div className="relative mx-auto flex w-full max-w-[380px] justify-center py-4">
      <div className="pointer-events-none absolute top-1/2 h-[380px] w-[380px] -translate-y-1/2 rounded-full border border-gold/10" />
      <div className="pointer-events-none absolute top-1/2 h-[300px] w-[300px] -translate-y-1/2 rounded-full bg-gradient-to-br from-maroon/30 to-gold/5 blur-3xl" />
      <div className="relative">
        <PhoneFrame className="h-[500px] w-[250px]">
          <Screen />
        </PhoneFrame>
      </div>
      <div
        className={`absolute bottom-16 z-20 hidden items-center gap-3 rounded-2xl border border-gold/25 bg-surface/90 px-4 py-3 shadow-[0_18px_40px_rgba(0,0,0,0.55)] backdrop-blur-md sm:flex ${
          chipSide === 'left' ? '-left-4' : '-right-4'
        }`}
        style={{ animation: 'float 7s ease-in-out infinite' }}
      >
        <span className="flex h-9 w-9 items-center justify-center rounded-full bg-gold/15 text-gold">
          <chip.icon size={17} />
        </span>
        <div>
          <div className="font-dmsans text-xs font-medium text-text-primary">{chip.title}</div>
          <div className="font-dmsans text-[10px] text-muted">{chip.sub}</div>
        </div>
      </div>
    </div>
  )
}

function AccordionItem({ question, answer, isOpen, onClick }) {
  return (
    <div className="mb-3 overflow-hidden rounded-lg border border-border-custom bg-surface-2">
      <button onClick={onClick} className="flex w-full cursor-pointer items-center justify-between p-5 text-left">
        <span className="pr-4 font-cormorant text-lg text-text-primary">{question}</span>
        <ChevronDown
          size={20}
          className={`flex-shrink-0 text-gold transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
        />
      </button>
      <div className={`accordion-content px-5 ${isOpen ? 'open' : ''}`}>
        <p className="pb-2 font-dmsans text-sm leading-relaxed text-muted">{answer}</p>
      </div>
    </div>
  )
}

export default function HowItWorks() {
  const [openFaq, setOpenFaq] = useState(null)

  return (
    <>
      <section className="relative flex min-h-[60vh] items-center overflow-hidden">
        <div className="absolute inset-0 bg-bg">
          <div
            className="absolute inset-0"
            style={{ background: 'radial-gradient(ellipse at 50% 30%, rgba(139,26,47,0.1) 0%, transparent 60%)' }}
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-bg via-transparent to-transparent" />

        <div className="container relative z-10 pb-12 pt-32 text-center sm:pb-16 lg:pb-20">
          <AnimatedSection>
            <span className="mb-4 block font-cinzel text-[11px] uppercase tracking-[0.2em] text-gold">
              The Process
            </span>
            <h1 className="mb-6 font-cormorant text-[44px] font-light leading-[1.1] md:text-[56px] lg:text-[64px]">
              Booking Your Dream Team
              <br />
              <em className="text-gold">Has Never Been Easier</em>
            </h1>
            <p className="mx-auto max-w-xl font-dmsans text-lg text-muted">
              From download to booking, the simple five-step process makes wedding planning focused and manageable.
            </p>
          </AnimatedSection>
        </div>
      </section>

      <section className="angled-section bg-surface py-16 lg:py-24 relative overflow-hidden">
        <div className="container relative">
          
          {/* High-Level 5-Step Process Arrow Pipeline (Cardless & Stylish) */}
          <AnimatedSection className="mb-16 lg:mb-20">
            <div className="hidden lg:flex items-center justify-between rounded-full border border-gold/25 bg-surface-2/80 px-8 py-4 backdrop-blur-md shadow-[0_0_25px_rgba(201,168,76,0.08)]">
              {timelineSteps.map((step, idx) => (
                <div key={step.num} className="flex items-center gap-3">
                  <div className="flex items-center gap-2.5">
                    <span className="flex h-7 w-7 items-center justify-center rounded-full border border-gold/50 bg-[#0D0608] font-cinzel text-xs font-semibold text-gold shadow-sm">
                      0{step.num}
                    </span>
                    <span className="font-cormorant text-base font-normal text-text-primary whitespace-nowrap">
                      {step.title}
                    </span>
                  </div>
                  {idx < timelineSteps.length - 1 && (
                    <div className="flex items-center px-2">
                      <div className="h-[1px] w-6 bg-gold/30" />
                      <ArrowRight size={13} className="text-gold/70 -ml-1 shrink-0" />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </AnimatedSection>

          <div className="timeline-line hidden md:block" />

          <div className="space-y-16 md:space-y-24">
            {timelineSteps.map((step, i) => {
              const isLeft = i % 2 === 0

              return (
                <div key={step.num} className="relative">
                  <div className="absolute left-1/2 z-10 hidden h-12 w-12 -translate-x-1/2 items-center justify-center rounded-full border-2 border-gold bg-surface-2 shadow-lg md:flex">
                    <span className="font-cormorant text-lg text-gold">{step.num}</span>
                  </div>

                  {/* Mid-timeline Downward Arrow (Showing Progression between Steps) */}
                  {i < timelineSteps.length - 1 && (
                    <div className="absolute left-1/2 -bottom-10 lg:-bottom-14 -translate-x-1/2 z-10 hidden md:flex h-6 w-6 items-center justify-center rounded-full border border-gold/40 bg-surface-2 text-gold shadow-sm">
                      <ChevronDown size={14} className="text-gold" />
                    </div>
                  )}

                  <div className={`items-center gap-12 md:flex ${isLeft ? '' : 'md:flex-row-reverse'}`}>
                    <AnimatedSection
                      className={`md:w-1/2 ${isLeft ? 'md:pr-16' : 'md:pl-16'}`}
                      direction={isLeft ? 'left' : 'right'}
                      delay={i * 100}
                    >
                      <div className="mb-4 flex items-center gap-3 md:hidden">
                        <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full border-2 border-gold bg-surface-2">
                          <span className="font-cormorant text-base text-gold">{step.num}</span>
                        </div>
                        <div className="h-[1px] flex-1 bg-gradient-to-r from-gold/30 to-transparent" />
                      </div>

                      <div className="relative">
                        <span className="pointer-events-none absolute -top-10 right-0 select-none font-cormorant text-[120px] leading-none text-gold/[0.06]">
                          0{step.num}
                        </span>
                        <div className="mb-5 flex items-center gap-4">
                          <span className="flex h-14 w-14 items-center justify-center rounded-xl border border-gold/25 bg-gradient-to-br from-maroon/25 to-gold/10 text-gold">
                            <step.icon size={24} strokeWidth={1.5} />
                          </span>
                          <span className="font-cinzel text-[11px] uppercase tracking-[0.2em] text-gold/80">
                            Step 0{step.num}
                          </span>
                        </div>
                        <h3 className="mb-3 font-cormorant text-3xl text-text-primary md:text-4xl">{step.title}</h3>
                        <p className="mb-6 font-dmsans text-sm leading-relaxed text-muted md:text-base">{step.desc}</p>
                        <ul className="space-y-2.5">
                          {step.highlights.map((h) => (
                            <li key={h} className="flex items-center gap-3 font-dmsans text-sm text-text-primary/85">
                              <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-gold/40 bg-gold/10 text-gold">
                                <Check size={11} />
                              </span>
                              {h}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </AnimatedSection>

                    <AnimatedSection
                      className="mt-10 md:mt-0 md:w-1/2"
                      direction={isLeft ? 'right' : 'left'}
                      delay={i * 100 + 200}
                    >
                      <StepPhone index={i} chip={step.chip} chipSide={isLeft ? 'right' : 'left'} />
                    </AnimatedSection>
                  </div>

                  {/* Mobile Downward Arrow between Steps */}
                  {i < timelineSteps.length - 1 && (
                    <div className="flex md:hidden items-center justify-center pt-8">
                      <div className="flex h-7 w-7 items-center justify-center rounded-full border border-gold/40 bg-surface-2 text-gold shadow-sm">
                        <ChevronDown size={14} className="text-gold animate-bounce" />
                      </div>
                    </div>
                  )}
                </div>
              )
            })}
          </div>
        </div>
      </section>

      <section className="angled-section bg-bg py-16 lg:py-24">
        <div className="container">
          <AnimatedSection className="mb-16 text-center">
            <span className="mb-3 block font-cinzel text-[11px] uppercase tracking-[0.2em] text-gold">
              Platform Features
            </span>
            <h2 className="font-cormorant text-4xl font-light md:text-5xl">
              Everything You Need
            </h2>
            <hr className="gold-rule-wide mx-auto mt-6" />
          </AnimatedSection>

          <div className="grid auto-rows-fr grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {features.map((f, i) => (
              <AnimatedSection key={f.title} delay={i * 100} className="h-full min-w-0">
                <div className="group flex h-full flex-col rounded-lg border border-border-custom bg-surface-2 p-6 transition-colors hover:border-gold/30">
                  <f.icon className="mb-4 text-gold transition-transform group-hover:scale-110" size={28} />
                  <h3 className="mb-2 font-cormorant text-xl">{f.title}</h3>
                  <p className="font-dmsans text-sm leading-relaxed text-muted">{f.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section className="angled-section bg-surface py-16 lg:py-24">
        <div className="container max-w-[800px]">
          <AnimatedSection className="mb-12 text-center">
            <span className="mb-3 block font-cinzel text-[11px] uppercase tracking-[0.2em] text-gold">
              Common Questions
            </span>
            <h2 className="font-cormorant text-4xl font-light md:text-5xl">
              Frequently Asked Questions
            </h2>
          </AnimatedSection>

          <AnimatedSection delay={200}>
            {faqData.map((item, i) => (
              <AccordionItem
                key={item.q}
                question={item.q}
                answer={item.a}
                isOpen={openFaq === i}
                onClick={() => setOpenFaq(openFaq === i ? null : i)}
              />
            ))}
          </AnimatedSection>

          <AnimatedSection className="mt-12 text-center" delay={400}>
            <p className="mb-4 font-dmsans text-sm text-muted">Still have questions?</p>
            <GoldButton variant="outlined" size="md" to="/contact">
              Contact Us
            </GoldButton>
          </AnimatedSection>
        </div>
      </section>
    </>
  )
}
