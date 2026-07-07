import { useEffect, useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import {
  ArrowRight,
  Building2,
  CalendarCheck,
  Camera,
  Flower2,
  Lock,
  MessageCircle,
  Music,
  Palette,
  ShieldCheck,
  Sparkles,
  Star,
  Sun,
  UtensilsCrossed,
  Video,
} from 'lucide-react'
import AnimatedSection from '../components/AnimatedSection'
import GoldButton from '../components/GoldButton'
import logoFull from '../assets/logo-full.png'

const categories = [
  { icon: Camera, name: 'Photography' },
  { icon: Video, name: 'Videography' },
  { icon: Sparkles, name: 'Makeup Artists' },
  { icon: UtensilsCrossed, name: 'Catering' },
  { icon: Building2, name: 'Venues' },
  { icon: Flower2, name: 'Decoration' },
  { icon: Sun, name: 'Pandits' },
  { icon: Palette, name: 'Mehendi Artists' },
  { icon: Music, name: 'DJ & Music' },
]

const steps = [
  { num: '01', title: 'Search Vendors', desc: 'Browse a curated collection of premium wedding vendors across India.' },
  { num: '02', title: 'Compare & Review', desc: 'Read reviews, compare portfolios, pricing, and ratings side by side.' },
  { num: '03', title: 'Book Instantly', desc: 'Secure your favourite vendors with easy in-app booking and payments.' },
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

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <>
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-bg">
          <div
            className="absolute inset-0"
            style={{
              background:
                'radial-gradient(ellipse at 20% 50%, rgba(139,26,47,0.15) 0%, transparent 60%), radial-gradient(ellipse at 80% 20%, rgba(139,26,47,0.08) 0%, transparent 50%), radial-gradient(ellipse at 50% 80%, rgba(30,14,18,0.8) 0%, transparent 60%)',
            }}
          />
          <Particles />
          <div className="mandala-watermark -right-48 top-1/4" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-bg via-transparent to-transparent" />

        <div className="flex min-h-screen items-center pb-16 pt-24">
          <div className="container relative z-10 grid w-full grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-12">
            <div className="flex min-w-0 flex-col justify-center">
              <div className={`transition-all delay-200 duration-700 ${mounted ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'}`}>
                <div className="flex items-center gap-4 mb-8">
                  <img
                    src={logoFull}
                    alt="OneDestiny — book every celebration in one place"
                    className="w-[120px] object-contain
               drop-shadow-[0_0_20px_rgba(201,168,76,0.35)]
               hover:drop-shadow-[0_0_30px_rgba(201,168,76,0.6)]
               transition-all duration-500"
                  />
                  <div className="h-16 w-px bg-gradient-to-b 
                  from-transparent via-[#C9A84C]/40 to-transparent" />
                  <div className="flex flex-col gap-1">
                    <span className="font-cinzel text-[#C9A84C] text-[11px] 
                     tracking-[0.2em] uppercase">
                      Est. 2026
                    </span>
                    <span className="font-dmsans text-[#9A8880] text-[12px] leading-relaxed">
                      India's Premium<br/>Event Management Platform
                    </span>
                  </div>
                </div>
              </div>

              <h1 className={`mb-6 font-cormorant text-[44px] font-light leading-[1.1] transition-all delay-300 duration-700 sm:text-[52px] md:text-[64px] lg:text-[72px] ${mounted ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'}`}>
                Find Your <em className="text-gold">Perfect</em>
                <br />Event Vendors
              </h1>

              <p className={`mb-8 max-w-lg font-dmsans text-base leading-relaxed text-muted transition-all delay-500 duration-700 sm:mb-10 sm:text-lg ${mounted ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'}`}>
                OneDestiny connects you with India's finest event management vendors &mdash; photographers, decorators, caterers & more &mdash; all in one elegant app.
              </p>

              <div className={`mb-8 flex flex-wrap gap-3 transition-all delay-700 duration-700 sm:gap-4 ${mounted ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'}`}>
                <GoldButton variant="outlined" size="lg" to="/for-vendors">
                  Become a Vendor <ArrowRight size={14} />
                </GoldButton>
              </div>

              <div className={`flex flex-wrap items-center gap-3 font-dmsans text-[14px] text-gold transition-all delay-[850ms] duration-700 sm:gap-4 ${mounted ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'}`}>
                <span className="inline-flex items-center gap-2 rounded-lg border border-gold/30 bg-surface-2/60 px-4 py-2">
                  <CalendarCheck size={16} className="text-gold" />
                  Vendor Registration Opens on 27 July 2026
                </span>
              </div>
            </div>

            <div className={`hidden justify-end lg:flex ${mounted ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'} transition-all delay-500 duration-1000`}>
              <PhoneMockup />
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
            <hr className="gold-rule-wide mx-auto mt-6" />
          </AnimatedSection>

          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 lg:grid-cols-5 lg:gap-5">
            {categories.map((cat, i) => (
              <AnimatedSection key={cat.name} delay={i * 80}>
                <Link
                  to="/app-preview"
                  className="category-card flex h-full cursor-pointer flex-col items-center rounded-lg px-3 py-5 duration-300 hover:scale-[1.02] sm:px-4 sm:py-6"
                >
                  <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-surface-2 sm:h-14 sm:w-14">
                    <cat.icon size={28} strokeWidth={1.5} className="text-gold" />
                  </div>
                  <span className="mt-2 text-center font-cinzel text-[10px] uppercase tracking-[0.15em] text-gold sm:text-[11px]">
                    {cat.name}
                  </span>
                </Link>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section className="angled-section bg-bg py-16 lg:py-24 relative">
        <div className="container">
          <AnimatedSection className="mb-10 text-center sm:mb-16">
            <span className="mb-3 block font-cinzel text-[11px] uppercase tracking-[0.2em] text-gold">
              Simple Process
            </span>
            <h2 className="font-cormorant text-3xl font-light sm:text-4xl md:text-5xl">
              How It Works
            </h2>
          </AnimatedSection>

          <div className="mb-12 grid grid-cols-1 gap-8 md:grid-cols-3 lg:gap-10">
            {steps.map((step, i) => (
              <AnimatedSection key={step.num} delay={i * 150}>
                <div className="relative text-center">
                  <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full border border-gold/50 bg-gradient-to-br from-surface-2 to-surface shadow-lg shadow-gold/5 transition-all duration-300 hover:scale-105 hover:border-gold">
                    <span className="font-cormorant text-2xl font-light text-gold">{step.num}</span>
                  </div>
                  {i < steps.length - 1 && (
                    <ArrowRight className="absolute left-[calc(100%-24px)] top-5 hidden text-gold/35 md:block" size={30} strokeWidth={1} />
                  )}
                  <h3 className="mb-3 font-cormorant text-xl sm:text-2xl">{step.title}</h3>
                  <p className="font-dmsans text-sm leading-relaxed text-muted">{step.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection className="text-center" delay={500}>
            <GoldButton variant="outlined" size="md" to="/how-it-works">
              See Full Process <ArrowRight size={14} />
            </GoldButton>
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

          <div className="grid grid-cols-1 gap-4 sm:gap-6 md:grid-cols-2 lg:grid-cols-3">
            {features.map((f, i) => (
              <AnimatedSection key={f.title} delay={i * 100} className={f.className}>
                <div className="feature-card">
                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-maroon/30 to-gold/10 text-gold">
                    <f.icon size={24} />
                  </div>
                  <h3 className="mb-3 font-cormorant text-xl text-text-primary sm:text-2xl">{f.title}</h3>
                  <p className="font-dmsans text-sm leading-relaxed text-muted">{f.desc}</p>
                </div>
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
            <span className="mb-4 block font-cinzel text-[11px] uppercase tracking-[0.2em] text-gold">
              Coming Soon
            </span>
            <h2 className="mb-6 font-cormorant text-3xl font-light sm:text-4xl md:text-5xl">
              Coming <em className="text-gold">Soon</em>
            </h2>
            <p className="mx-auto mb-10 max-w-lg font-dmsans text-muted">
              We're building something special. OneDestiny will be available on App Store & Google Play soon.
            </p>
            <p className="mb-10 font-cormorant text-2xl text-gold md:text-3xl">
              Vendor Registration Opens on 27 July 2026
            </p>
            <GoldButton variant="outlined" size="lg" to="/contact">
              Get Notified <ArrowRight size={14} />
            </GoldButton>
          </AnimatedSection>
        </div>
      </section>
    </>
  )
}
