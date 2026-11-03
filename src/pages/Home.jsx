import { useEffect, useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import {
  ArrowRight,
  Lock,
  MessageCircle,
  ShieldCheck,
  Sparkles,
  Star,
  CalendarCheck,
  Check,
  GitCompare,
  Search,
  ArrowDown,
  ChevronLeft,
  ChevronRight,
} from 'lucide-react'
import AnimatedSection from '../components/AnimatedSection'
import GoldButton from '../components/GoldButton'
import mainImage from '../assets/Golden Garden Wedding at Sunset.png'
import venueGlowImage from '../assets/Golden Wedding Venue Glow.png'
import { services as categories } from '../data/services'

const heroSlides = [
  { label: 'Wedding', image: mainImage },
  { label: 'Venue', image: venueGlowImage },
  ...categories.filter((c) => c.image).map((c) => ({ label: c.name, image: c.image })),
]
const FADE_MS = 1200
const AUTOPLAY_MS = 2000

const steps = [
  {
    num: '01',
    step: 'Step 01',
    phase: 'Discovery',
    transition: 'Evaluate',
    icon: Search,
    title: 'Search & Discover',
    subtitle: 'Curated Wedding Artists',
    desc: 'Explore India’s finest verified photographers, heritage venues, makeup artists, and decorators tailored to your city, aesthetics, and budget.',
    highlights: ['100% Verified Portfolios', 'City, Date & Budget Filters', 'Direct Instant Contact'],
  },
  {
    num: '02',
    step: 'Step 02',
    phase: 'Comparison',
    transition: 'Reserve',
    icon: GitCompare,
    title: 'Compare & Review',
    subtitle: 'Transparent Pricing & Portfolios',
    desc: 'Browse authentic wedding galleries, read unedited reviews from real couples, and compare comprehensive package pricing side-by-side.',
    highlights: ['Authentic Couple Reviews', 'Upfront Package Pricing', 'Real Event Showcase'],
  },
  {
    num: '03',
    step: 'Step 03',
    phase: 'Confirmation',
    transition: null,
    icon: CalendarCheck,
    title: 'Book Instantly',
    subtitle: 'Protected & Guaranteed',
    desc: 'Chat directly with vendors, confirm your dates, and secure your bookings with bank-grade encrypted payment protection.',
    highlights: ['Direct In-App Chat', 'Razorpay Escrow Protection', 'Instant Booking Guarantee'],
  },
]

const features = [
  { icon: ShieldCheck, title: 'Verified Vendors', desc: 'Every vendor is background-checked and quality-verified before listing.', className: 'lg:min-h-[210px]' },
  { icon: CalendarCheck, title: 'Easy Booking', desc: 'Book and manage all your event vendors in one unified platform.', className: 'lg:min-h-[250px]' },
  { icon: Star, title: 'Reviews & Ratings', desc: 'Honest reviews from real customers help you make the right choice.', className: 'lg:min-h-[210px]' },
  { icon: MessageCircle, title: 'Direct Contact', desc: 'Chat directly with vendors to discuss requirements and negotiate.', className: 'lg:min-h-[230px]' },
  { icon: Lock, title: 'Secure Payments', desc: 'Protected payments via Razorpay with clear booking records.', className: 'lg:min-h-[230px] lg:col-start-2' },
]


function Particles() {
  const particles = useMemo(
    () =>
      Array.from({ length: 22 }, (_, i) => ({
        id: i,
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        size: Math.random() * 3 + 1,
        duration: Math.random() * 15 + 10,
        delay: Math.random() * 10,
        opacity: Math.random() * 0.3 + 0.1,
      })),
    []
  )

  return (
    <>
      {particles.map((p) => (
        <div
          key={p.id}
          className="particle"
          style={{
            left: p.left,
            top: p.top,
            width: p.size,
            height: p.size,
            animationDuration: `${p.duration}s`,
            animationDelay: `${p.delay}s`,
            opacity: p.opacity,
          }}
        />
      ))}
    </>
  )
}

function PhoneMockup() {
  return (
    <div className="phone-mockup">
      <div className="phone-mockup-corner tl" />
      <div className="phone-mockup-corner tr" />
      <div className="phone-mockup-corner bl" />
      <div className="phone-mockup-corner br" />
      <div className="flex h-full flex-col gap-3 p-4 pt-10">
        <div className="mb-2 flex items-center justify-between px-1">
          <div className="h-1 w-10 rounded bg-gold/30" />
          <div className="h-1 w-16 rounded bg-gold/20" />
        </div>
        <div className="rounded-xl border border-gold/15 bg-border-custom/80 px-4 py-3">
          <div className="h-1.5 w-2/3 rounded bg-muted/30" />
        </div>
        <div className="rounded-2xl border border-maroon/30 bg-gradient-to-br from-maroon/40 to-surface-2/80 p-4">
          <div className="mb-3 h-20 rounded-lg bg-gradient-to-br from-maroon/30 to-gold/10" />
          <div className="mb-2 h-1.5 w-3/4 rounded bg-gold/30" />
          <div className="h-1.5 w-1/2 rounded bg-muted/25" />
        </div>
        {[0.4, 0.25, 0.15].map((opacity, i) => (
          <div key={i} className="flex items-center gap-3 rounded-xl border border-border-custom bg-surface/60 p-3">
            <div
              className="h-11 w-11 flex-shrink-0 rounded-lg"
              style={{ background: `linear-gradient(135deg, rgba(139,26,47,${opacity}), rgba(201,168,76,${opacity * 0.5}))` }}
            />
            <div className="flex-1">
              <div
                className="mb-1.5 h-1.5 w-2/3 rounded"
                style={{ background: `rgba(201,168,76,${0.2 + opacity * 0.3})` }}
              />
              <div className="h-1 w-1/2 rounded bg-muted/20" />
            </div>
          </div>
        ))}
        <div className="mt-auto flex justify-around border-t border-border-custom py-3">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className={`h-6 w-6 rounded-md ${i === 1 ? 'bg-gold/30' : 'bg-border-custom/60'}`} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default function Home() {
  const [mounted, setMounted] = useState(false)
  const N = heroSlides.length
  const [slide, setSlide] = useState(0)
  const [prevSlide, setPrevSlide] = useState(null)
  const [tabHidden, setTabHidden] = useState(false)
  const [loaded, setLoaded] = useState(() => new Set([0, 1 % N]))
  const [touchX, setTouchX] = useState(null)
  const paused = tabHidden

  const goTo = (i) => {
    const target = (i + N) % N
    if (target === slide) return
    setPrevSlide(slide)
    setSlide(target)
  }
  const next = () => goTo(slide + 1)
  const prev = () => goTo(slide - 1)

  useEffect(() => {
    setMounted(true)
  }, [])

  // Preload the current, next and previous images only
  useEffect(() => {
    setLoaded((s) => {
      const want = [slide, (slide + 1) % N, (slide - 1 + N) % N]
      if (want.every((i) => s.has(i))) return s
      return new Set([...s, ...want])
    })
  }, [slide, N])

  // Autoplay: always advance on a timer; restarts after any manual click/swipe
  useEffect(() => {
    if (paused) return
    const id = setTimeout(() => {
      setPrevSlide(slide)
      setSlide((slide + 1) % N)
    }, AUTOPLAY_MS)
    return () => clearTimeout(id)
  }, [slide, paused, N])

  // Pause autoplay while the tab is in the background
  useEffect(() => {
    const onVis = () => setTabHidden(document.hidden)
    document.addEventListener('visibilitychange', onVis)
    return () => document.removeEventListener('visibilitychange', onVis)
  }, [])

  return (
    <>
      <section
  className="relative isolate overflow-hidden"
  aria-roledescription="carousel"
  aria-label="Featured wedding services"
  onKeyDown={(e) => {
    if (e.key === 'ArrowRight') next()
    if (e.key === 'ArrowLeft') prev()
  }}
  onTouchStart={(e) => setTouchX(e.touches[0].clientX)}
  onTouchEnd={(e) => {
    if (touchX === null) return
    const dx = e.changedTouches[0].clientX - touchX
    if (Math.abs(dx) > 50) (dx < 0 ? next : prev)()
    setTouchX(null)
  }}
>
  {/* Background image carousel — crossfade with slow zoom */}
  <div className="absolute inset-0 -z-20 overflow-hidden bg-bg">
    {heroSlides.map((s, i) => {
      const active = i === slide
      return (
        <div
          key={s.label}
          aria-hidden={!active}
          className="absolute inset-0 transition-opacity ease-in-out"
          style={{ opacity: active ? 1 : 0, zIndex: active ? 2 : i === prevSlide ? 1 : 0, transitionDuration: `${FADE_MS}ms` }}
        >
          {loaded.has(i) && (
            <img
              src={s.image}
              alt={s.label}
              className={`h-full w-full object-cover ${active || i === prevSlide ? 'hero-kenburns' : ''}`}
              style={{ animationDuration: `${AUTOPLAY_MS + FADE_MS * 2}ms`, animationPlayState: paused ? 'paused' : 'running' }}
            />
          )}
        </div>
      )
    })}
  </div>

  {/* Dark overlay — keeps text readable */}
  <div className="absolute inset-0 -z-10 bg-black/35" />

  {/* Left-side shade behind the headline & copy so text reads on any photo */}
  <div
    className="absolute inset-0 -z-10"
    style={{ background: 'linear-gradient(90deg, rgba(13,6,8,0.85) 0%, rgba(13,6,8,0.55) 40%, transparent 75%)' }}
  />

  {/* Gold gradient overlay */}
  <div
    className="absolute inset-0 -z-10"

  />

  {/* Bottom fade */}
  <div
    className="absolute inset-0 -z-10"
    style={{
      background:
        "linear-gradient(to top, #0a0a0a 0%, transparent 45%)",
    }}
  />

  {/* Decorative effects */}
  <div className="pointer-events-none absolute inset-0 -z-10">
    <Particles />
    <div className="mandala-watermark -right-48 top-1/4" />
  </div>

  {/* Existing hero content */}
  <div className="flex min-h-screen items-center pb-32 pt-24">
    <div className="container relative z-10 grid w-full grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-12 ">

      {/* Left content */}
      <div className="flex min-w-0 flex-col justify-center">

        <h1 className={`mb-6 mt-18 font-cormorant text-[44px] font-light leading-[1.1] transition-all delay-300 duration-700 sm:text-[52px] md:text-[64px] lg:text-[72px] ${mounted ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'}`}>
          Find Your <em className="text-gold">Perfect</em>
          <br />Event Vendors
        </h1>

        <p className={`mb-8 max-w-lg border-l-2 border-gold/70 pl-4 font-dmsans text-base leading-relaxed text-text-primary/95 [text-shadow:0_2px_12px_rgba(0,0,0,0.85)] transition-all delay-500 duration-700 sm:mb-10 sm:text-lg ${mounted ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'}`}>
          OneDestiny connects you with India's finest event management vendors &mdash; photographers, decorators, caterers & more &mdash; all in one elegant app.
        </p>

        <div className={`mb-8 flex flex-wrap gap-3 transition-all delay-700 duration-700 sm:gap-4 ${mounted ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'}`}>
          <GoldButton variant="outlined" size="lg" to="/for-vendors">
            Become a Vendor <ArrowRight size={14} />
          </GoldButton>
        </div>
      </div>

      {/* Right phone mockup */}
      <div
        className={`hidden justify-end transition-all delay-500 duration-1000 lg:flex ${
          mounted
            ? "translate-y-0 opacity-100"
            : "translate-y-12 opacity-0"
        }`}
      >
      </div>

    </div>
  </div>

  {/* Carousel controls */}
  <div className="absolute inset-x-0 bottom-6 z-20 sm:bottom-8">
    <div className="container">
      {/* Segmented progress — the active segment fills over the autoplay interval, then advances */}
      <div className="mb-4 flex items-center justify-center gap-2">
        {heroSlides.map((s, i) => (
          <button
            key={s.label}
            type="button"
            aria-label={`Show ${s.label}`}
            aria-current={i === slide}
            onClick={() => goTo(i)}
            className={`group relative h-4 shrink-0 cursor-pointer transition-[width] duration-500 ease-out ${
              i === slide ? 'w-10 sm:w-12' : 'w-4 sm:w-5'
            }`}
          >
            <span className="absolute inset-x-0 top-1/2 h-[2px] -translate-y-1/2 overflow-hidden rounded-full bg-white/20 transition-colors group-hover:bg-white/40">
              <span
                key={i === slide ? `active-${slide}` : 'idle'}
                className={`absolute inset-0 origin-left rounded-full bg-linear-to-r from-gold to-gold-light ${
                  i === slide ? 'hero-progress' : i < slide ? 'scale-x-100' : 'scale-x-0'
                }`}
                style={i === slide ? { animationDuration: `${AUTOPLAY_MS}ms`, animationPlayState: paused ? 'paused' : 'running' } : undefined}              />
            </span>
          </button>
        ))}
      </div>

      <div className="flex items-center justify-between gap-4">
        {/* Counter + caption */}
        <div className="flex min-w-0 items-baseline gap-3 sm:gap-4" aria-live={paused ? 'polite' : 'off'}>
          <span className="font-cormorant text-2xl leading-none text-gold-light sm:text-3xl">
            {String(slide + 1).padStart(2, '0')}
          </span>
          <span className="font-cinzel text-[10px] tracking-[0.2em] text-white/50">
            / {String(N).padStart(2, '0')}
          </span>
          <span className="hidden h-px w-8 self-center bg-gold/50 sm:block" />
          <span
            key={slide}
            className="hero-caption truncate font-cinzel text-[11px] uppercase tracking-[0.25em] text-text-primary/90 sm:text-xs"
          >
            {heroSlides[slide].label}
          </span>
        </div>

        {/* Arrows */}
        <div className="flex shrink-0 items-center gap-2">
          <button
            type="button"
            aria-label="Previous slide"
            onClick={prev}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-gold/40 bg-black/30 text-gold backdrop-blur-md transition-all duration-300 hover:border-gold hover:bg-gold hover:text-surface"
          >
            <ChevronLeft size={18} />
          </button>
          <button
            type="button"
            aria-label="Next slide"
            onClick={next}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-gold/40 bg-black/30 text-gold backdrop-blur-md transition-all duration-300 hover:border-gold hover:bg-gold hover:text-surface"
          >
            <ChevronRight size={18} />
          </button>
        </div>
      </div>
    </div>
  </div>
</section>
      <section className="angled-section bg-surface py-16 lg:py-24 relative overflow-hidden">
        <div className="mandala-watermark -left-48 top-0" />
        <div className="container relative z-10">
          <AnimatedSection className="mb-10 text-center sm:mb-16">
            <span className="mb-3 block font-cinzel text-[11px] uppercase tracking-[0.2em] text-gold">
              Explore Vendors
            </span>
            <h2 className="font-cormorant text-3xl font-light sm:text-4xl md:text-5xl">
              Every Service, One Platform
            </h2>
            <p className="mx-auto mt-3 max-w-lg font-dmsans text-sm text-muted">
              Curated luxury professionals dedicated to bringing your dream wedding to life.
            </p>
            <hr className="gold-rule-wide mx-auto mt-6" />
          </AnimatedSection>

          <div className="explore-grid mx-auto grid max-w-6xl grid-cols-2 gap-3 sm:gap-5 md:grid-cols-3 lg:gap-6">
            {categories.map((cat, i) => (
              <AnimatedSection key={cat.slug} delay={i * 70} className="min-w-0">
                <Link
                  to={`/services/${cat.slug}`}
                  className="group relative flex aspect-3/4 w-full flex-col justify-between overflow-hidden rounded-2xl bg-surface-2 shadow-lg shadow-black/60 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_22px_50px_rgba(201,168,76,0.22)] cursor-pointer md:aspect-4/5"
                >
                  {/* Full-bleed Photography Container with Cinematic Effects */}
                  <div className="absolute inset-0 overflow-hidden">
                    {cat.image ? (
                      <img
                        src={cat.image}
                        alt={cat.name}
                        className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                        loading="lazy"
                      />
                    ) : (
                      /* Royal wedding pattern fallback when image is not yet set */
                      <div className="relative h-full w-full bg-gradient-to-br from-surface-2 via-maroon/25 to-surface">
                        <div className="absolute inset-0 opacity-15 bg-[radial-gradient(circle_at_center,var(--clr-gold)_1.5px,transparent_1.5px)] bg-[size:18px_18px]" />
                        <div className="absolute -right-10 -top-10 h-36 w-36 rounded-full bg-gold/10 blur-2xl transition-all duration-700 group-hover:bg-gold/20" />
                        <div className="absolute -left-10 -bottom-10 h-36 w-36 rounded-full bg-maroon/30 blur-2xl" />
                      </div>
                    )}

                    {/* Rich multi-stage vignette & royal wedding gradients */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0D0608] via-[#160A0D]/75 to-transparent/20 opacity-95 transition-opacity duration-500 group-hover:opacity-85" />
                    <div className="absolute inset-0 bg-gradient-to-b from-maroon/20 via-transparent to-black/60 mix-blend-multiply" />
                    <div className="absolute inset-0 bg-gold/0 transition-colors duration-500 group-hover:bg-gold/[0.04]" />
                  </div>

                  {/* Top Bar: Floating Glass Icon Badge & Category Count Tag */}
                  <div className="relative z-10 flex items-center justify-between gap-2 p-3 sm:p-5">
                    <div className="flex h-9 w-9 shrink-0 sm:h-12 sm:w-12 items-center justify-center rounded-full bg-surface/85 text-gold shadow-xl shadow-black/60 backdrop-blur-md transition-all duration-300 group-hover:scale-110 group-hover:bg-gold group-hover:text-bg">
                      {cat.icon && (
                        <>
                          <cat.icon size={20} className="sm:hidden" strokeWidth={1.5} />
                          <cat.icon size={22} className="hidden sm:block" strokeWidth={1.5} />
                        </>
                      )}
                    </div>

                    {cat.count && (
                      <span className="truncate rounded-full bg-surface/80 px-2 sm:px-2.5 py-0.5 sm:py-1 font-cinzel text-[8px] sm:text-[9px] uppercase tracking-wider text-gold-light backdrop-blur-md shadow-md shadow-black/40">
                        {cat.count}
                      </span>
                    )}
                  </div>

                  {/* Bottom Content Area */}
                  <div className="relative z-10 mt-auto min-w-0 p-3 pt-0 sm:p-5 sm:pt-0">
                    <span className="hidden font-cinzel text-[9px] sm:block sm:text-[10px] uppercase tracking-[0.2em] text-gold/80 transition-colors duration-300 group-hover:text-gold">
                      Vendor Collection
                    </span>

                    <h3 className="mt-0.5 font-cormorant text-lg leading-tight sm:text-2xl lg:text-[26px] font-normal text-text-primary transition-colors duration-300 group-hover:text-gold-light line-clamp-2 sm:line-clamp-1">
                      {cat.name}
                    </h3>

                    {cat.tagline && (
                      <p className="mt-1 hidden sm:block font-dmsans text-xs text-muted/90 line-clamp-1">
                        {cat.tagline}
                      </p>
                    )}

                    {/* Expanding Gold Accent Line */}
                    <div className="my-2 sm:my-3 h-px w-6 bg-gold/40 transition-all duration-500 group-hover:w-full group-hover:bg-gold/80" />

                    {/* Explore Link Indicator */}
                    <div className="flex items-center justify-between gap-2 font-cinzel text-[9px] sm:text-[10px] uppercase tracking-[0.12em] sm:tracking-[0.16em] text-gold transition-colors">
                      <span className="truncate">
                        Explore<span className="hidden min-[400px]:inline"> Vendors</span>
                      </span>
                      <ArrowRight size={13} className="shrink-0 transition-transform duration-300 group-hover:translate-x-1.5" />
                    </div>
                  </div>
                </Link>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section className="angled-section bg-bg py-20 lg:py-28 relative overflow-hidden">
        {/* Subtle decorative background watermarks and gold ambient glow */}
        <div className="mandala-watermark -right-48 top-12 opacity-40 pointer-events-none" />
        <div className="pointer-events-none absolute left-1/2 top-1/3 -translate-x-1/2 h-[450px] w-[750px] rounded-full bg-gradient-to-b from-maroon/10 via-gold/5 to-transparent blur-[140px]" />

        <div className="container relative z-10">
          <AnimatedSection className="mb-16 sm:mb-20 text-center">
            <h2 className="font-cormorant text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light text-text-primary tracking-tight">
              How It Works &mdash; <em className="text-gold italic font-normal">Step by Step</em>
            </h2>
            <p className="mx-auto mt-4 max-w-xl font-dmsans text-sm sm:text-base text-muted/90 leading-relaxed">
              No endless calls or guesswork. Follow an effortless, transparent process from initial inspiration to your grand celebration.
            </p>
            <div className="flex items-center justify-center gap-3 mt-6">
              <div className="h-[1px] w-12 sm:w-20 bg-gradient-to-r from-transparent to-gold/50" />
              <div className="rotate-45 h-1.5 w-1.5 bg-gold shadow-[0_0_8px_rgba(201,168,76,0.8)]" />
              <div className="h-[1px] w-12 sm:w-20 bg-gradient-to-l from-transparent to-gold/50" />
            </div>
          </AnimatedSection>

          {/* DESKTOP LAYOUT (Clean Horizontal Flow with Directional Arrow Bridges) */}
          <div className="hidden md:flex items-start justify-between relative gap-2 lg:gap-4 mb-16">
            {steps.map((step, i) => (
              <div key={step.num} className="contents">
                {/* Step Item */}
                <AnimatedSection delay={i * 150} className="flex-1">
                  <div className="group relative flex flex-col items-center text-center px-3 lg:px-5">
                    
                    {/* Royal Medallion Emblem */}
                    <div className="relative mb-6">
                      <div className="pointer-events-none absolute -inset-3 rounded-full bg-gradient-to-r from-gold/15 via-maroon/20 to-gold/15 opacity-0 blur-xl transition-opacity duration-500 group-hover:opacity-100" />
                      
                      <div className="relative flex h-20 w-20 lg:h-22 lg:w-22 items-center justify-center rounded-full border border-gold/40 bg-gradient-to-b from-surface-2 via-surface to-[#0D0608] shadow-[0_10px_30px_rgba(0,0,0,0.7)] transition-all duration-500 group-hover:scale-105 group-hover:border-gold group-hover:shadow-[0_0_35px_rgba(201,168,76,0.35)]">
                        {/* Inner hairline border */}
                        <div className="absolute inset-1.5 rounded-full border border-gold/20" />
                        
                        <step.icon size={26} className="text-gold transition-transform duration-500 group-hover:scale-110" strokeWidth={1.5} />
                        
                        {/* Step Number Tag Pill */}
                        <div className="absolute -bottom-1 -right-1 flex h-7 w-7 items-center justify-center rounded-full border border-gold/70 bg-[#0D0608] font-cinzel text-[10px] font-bold text-gold shadow-md">
                          {step.num}
                        </div>
                      </div>
                    </div>

                    {/* Step Phase Label */}
                    <span className="mb-1.5 font-cinzel text-[10px] uppercase tracking-[0.25em] text-gold/80 font-semibold">
                      {step.step} &bull; {step.phase}
                    </span>

                    {/* Step Title */}
                    <h3 className="mb-1 font-cormorant text-2xl lg:text-[28px] font-normal text-text-primary transition-colors duration-300 group-hover:text-gold-light">
                      {step.title}
                    </h3>

                  </div>
                </AnimatedSection>

                {/* Directional Arrow Bridge between Steps */}
                {i < steps.length - 1 && (
                  <div className="w-16 lg:w-28 shrink-0 pt-7 flex flex-col items-center relative z-20">
                    <div className="relative w-full flex items-center justify-center">
                      {/* Horizontal Gradient Conduit Line */}
                      <div className="h-[2px] w-full bg-gradient-to-r from-gold/20 via-gold/70 to-gold/20" />
                      
                      {/* Glowing Arrow Badge */}
                      <div className="absolute flex h-9 w-9 lg:h-10 lg:w-10 items-center justify-center rounded-full border border-gold/60 bg-[#0D0608] text-gold shadow-[0_0_20px_rgba(201,168,76,0.35)] transition-all duration-300 hover:scale-115 hover:border-gold">
                        <ArrowRight size={15} strokeWidth={2.2} className="text-gold animate-pulse" />
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* MOBILE LAYOUT (Clean Vertical Flow with Downward Directional Arrows) */}
          <div className="md:hidden flex flex-col items-center mb-12">
            {steps.map((step, i) => (
              <div key={step.num} className="w-full max-w-sm flex flex-col items-center">
                <AnimatedSection delay={i * 120} className="w-full">
                  <div className="flex flex-col items-center text-center">
                    
                    {/* Royal Medallion */}
                    <div className="relative mb-5">
                      <div className="relative flex h-20 w-20 items-center justify-center rounded-full border border-gold/40 bg-gradient-to-b from-surface-2 via-surface to-[#0D0608] shadow-[0_10px_25px_rgba(0,0,0,0.6)]">
                        <div className="absolute inset-1.5 rounded-full border border-gold/20" />
                        <step.icon size={24} className="text-gold" strokeWidth={1.5} />
                        <div className="absolute -bottom-1 -right-1 flex h-6 w-6 items-center justify-center rounded-full border border-gold/70 bg-[#0D0608] font-cinzel text-[10px] font-bold text-gold">
                          {step.num}
                        </div>
                      </div>
                    </div>

                    {/* Step Phase */}
                    <span className="mb-1 font-cinzel text-[10px] uppercase tracking-[0.22em] text-gold/80 font-semibold">
                      {step.step} &bull; {step.phase}
                    </span>

                    {/* Title */}
                    <h3 className="mb-1 font-cormorant text-2xl font-normal text-text-primary">
                      {step.title}
                    </h3>

                    {/* Subtitle */}
                    <span className="mb-2 block font-cormorant text-sm italic text-gold/75">
                      {step.subtitle}
                    </span>

                    {/* Description */}
                    <p className="font-dmsans text-sm leading-relaxed text-muted/90 max-w-xs">
                      {step.desc}
                    </p>

                    {/* Highlights */}
                    <div className="mt-4 space-y-2 text-left max-w-xs w-full">
                      {step.highlights.map((item) => (
                        <div key={item} className="flex items-center gap-2 text-xs text-text-primary/85">
                          <span className="flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-gold/15 text-gold">
                            <Check size={10} strokeWidth={2.5} />
                          </span>
                          <span className="font-dmsans text-xs">{item}</span>
                        </div>
                      ))}
                    </div>

                  </div>
                </AnimatedSection>

                {/* Mobile Downward Arrow Conduit between Steps */}
                {i < steps.length - 1 && (
                  <div className="my-8 flex flex-col items-center">
                    <div className="h-7 w-[2px] bg-gradient-to-b from-gold/20 to-gold/70" />
                    <div className="my-1.5 flex items-center gap-2 rounded-full border border-gold/50 bg-[#0D0608] px-3.5 py-1 text-gold shadow-[0_0_15px_rgba(201,168,76,0.25)]">
                      <span className="font-cinzel text-[9px] uppercase tracking-[0.2em] text-gold/80 font-semibold">
                        {step.transition}
                      </span>
                      <ArrowDown size={13} strokeWidth={2.2} className="text-gold animate-bounce" />
                    </div>
                    <div className="h-7 w-[2px] bg-gradient-to-b from-gold/70 to-gold/20" />
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Bottom Trust & Action Banner */}
          <AnimatedSection className="mt-12 sm:mt-16 text-center" delay={400}>
            <div className="mx-auto mb-8 flex flex-wrap items-center justify-center gap-4 sm:gap-8 font-cinzel text-[10px] sm:text-[11px] uppercase tracking-[0.2em] text-gold/70">
              <span className="flex items-center gap-1.5"><Sparkles size={13} className="text-gold" /> Zero Hidden Charges</span>
              <span className="hidden sm:inline text-gold/30">&bull;</span>
              <span className="flex items-center gap-1.5"><ShieldCheck size={13} className="text-gold" /> Escrow Payment Protection</span>
              <span className="hidden sm:inline text-gold/30">&bull;</span>
              <span className="flex items-center gap-1.5"><Star size={13} className="text-gold" /> 100% Verified Vendors</span>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-4">
              <GoldButton variant="outlined" size="md" to="/how-it-works">
                See Detailed Process <ArrowRight size={14} />
              </GoldButton>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <section className="angled-section bg-surface py-16 lg:py-24 relative overflow-hidden">
        <div className="mandala-watermark right-[-200px] bottom-[-100px]" />
        <div className="container relative z-10">
          <AnimatedSection className="mb-10 text-center sm:mb-16">
            <span className="mb-3 block font-cinzel text-[11px] uppercase tracking-[0.2em] text-gold">
              App Features
            </span>
            <h2 className="font-cormorant text-3xl font-light sm:text-4xl md:text-5xl">
              Why Choose OneDestiny
            </h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-7">
  {features.map((f, i) => (
    <AnimatedSection
      key={f.title}
      delay={i * 100}
      className="h-full"
    >
      <article
        className="
          group relative flex h-full flex-col overflow-hidden
          rounded-2xl border border-gold/15
          bg-gradient-to-br from-surface via-surface to-maroon/[0.04]
          p-6 transition-all duration-500 ease-out
          hover:-translate-y-2
          hover:border-gold/40
          hover:shadow-[0_20px_55px_rgba(70,30,30,0.12)]
          sm:p-7 lg:p-8
        "
      >
        {/* Decorative background accent */}
        <div
          className="
            pointer-events-none absolute -right-16 -top-16
            h-40 w-40 rounded-full bg-gold/[0.06]
            blur-2xl transition-all duration-500
            group-hover:bg-gold/[0.12]
          "
        />

        {/* Top accent line */}
        <div
          className="
            absolute left-6 right-6 top-0 h-px
            bg-gradient-to-r from-transparent
            via-gold/60 to-transparent
            opacity-50 transition-opacity duration-300
            group-hover:opacity-100 sm:left-7 sm:right-7
            lg:left-8 lg:right-8
          "
        />

        {/* Icon */}
        <div
          className="
            relative mb-7 flex h-14 w-14 items-center
            justify-center rounded-xl
            border border-gold/20
            bg-gradient-to-br from-maroon/10 to-gold/10
            text-gold transition-all duration-500
            group-hover:scale-105 group-hover:border-gold/40
            group-hover:bg-maroon/10
          "
        >
          {f.icon && <f.icon size={26} strokeWidth={1.5} />}
        </div>

        {/* Content */}
        <div className="relative flex flex-1 flex-col">
          <h3
            className="
              mb-3 font-cormorant text-2xl font-medium
              leading-tight text-text-primary
              transition-colors duration-300
              group-hover:text-gold sm:text-3xl
            "
          >
            {f.title}
          </h3>

          <p
            className="
              flex-1 font-dmsans text-sm leading-7
              text-muted sm:text-[15px]
            "
          >
            {f.desc}
          </p>
        </div>
      </article>
    </AnimatedSection>
  ))}
         </div>
        </div>
      </section>

      <section
        id="app-download"
        className="angled-section relative overflow-hidden py-16 lg:py-24 scroll-mt-20"
        style={{ background: 'linear-gradient(135deg, var(--clr-maroon) 0%, var(--clr-surface) 100%)' }}
      >
        <div className="absolute left-0 right-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-gold/30 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-gold/30 to-transparent" />

        <div className="container relative z-10 text-center">
          <AnimatedSection>
            <h2 className="mb-6 font-cormorant text-3xl font-light sm:text-4xl md:text-5xl">
              Your Dream Event <em className="text-gold">Starts Here</em>
            </h2>
            <p className="mx-auto mb-10 max-w-lg font-dmsans text-muted">
              Download OneDestiny today and discover the easiest way to plan your perfect event.
            </p>
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <GoldButton variant="outlined" size="lg" to="/contact">
                Contact Us
              </GoldButton>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  )
}
