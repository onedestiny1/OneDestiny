import { Link } from 'react-router-dom'
import {
  ArrowRight,
  CalendarCheck,
  Check,
  GitCompare,
  Lock,
  MessageCircle,
  Search,
  ShieldCheck,
  Star,
} from 'lucide-react'
import AnimatedSection from '../components/AnimatedSection'
import GoldButton from '../components/GoldButton'
import { services } from '../data/services'
import heroImage from '../assets/Golden Wedding Venue Glow.png'

const stats = [
  { value: '1,600+', label: 'Verified Vendors' },
  { value: '9', label: 'Service Categories' },
  { value: '4.8★', label: 'Average Rating' },
  { value: '100%', label: 'Secure Payments' },
]

const promises = [
  { icon: ShieldCheck, title: 'Verified Vendors', desc: 'Every vendor is background-checked and quality-verified before listing.' },
  { icon: Star, title: 'Honest Reviews', desc: 'Real ratings from real couples help you choose with confidence.' },
  { icon: MessageCircle, title: 'Direct Chat', desc: 'Discuss requirements and negotiate directly with vendors.' },
  { icon: Lock, title: 'Secure Payments', desc: 'Protected payments via Razorpay with clear booking records.' },
]

const journey = [
  { icon: Search, title: 'Choose a Service', desc: 'Pick a category and filter by city, date and budget.' },
  { icon: GitCompare, title: 'Compare Vendors', desc: 'Review portfolios, packages and couple reviews side by side.' },
  { icon: CalendarCheck, title: 'Book with Confidence', desc: 'Confirm dates and pay securely, all in one place.' },
]

export default function Services() {
  return (
    <>
      {/* Hero */}
      <section
        className="relative isolate overflow-hidden bg-cover bg-center"
        style={{ backgroundImage: `url("${heroImage}")` }}
      >
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-bg via-bg/85 to-bg/40" />
        <div className="absolute inset-0 -z-10 bg-gradient-to-t from-bg via-transparent to-transparent" />

        <div className="container flex min-h-[78vh] items-center pb-20 pt-36">
          <div className="max-w-2xl">
            <AnimatedSection>
              <h1 className="mb-6 font-cormorant text-[42px] font-light leading-[1.08] sm:text-[56px] lg:text-[68px]">
                Every Detail of Your <em className="text-gold">Celebration</em>, Curated
              </h1>
              <p className="mb-10 max-w-xl font-dmsans text-base leading-relaxed text-muted sm:text-lg">
                From the first click of the camera to the last dance of the night, discover India's finest verified
                wedding professionals across nine essential services, all on one platform.
              </p>
              <div className="flex flex-wrap gap-4">
                <GoldButton variant="filled" size="lg" href="#all-services">
                  Explore Services <ArrowRight size={14} />
                </GoldButton>
                <GoldButton variant="outlined" size="lg" to="/contact">
                  Talk to Us
                </GoldButton>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Stats strip */}
      <section className="relative border-y border-gold/15 bg-surface">
        <div className="container grid grid-cols-2 divide-gold/10 py-8 md:grid-cols-4 md:divide-x">
          {stats.map((s, i) => (
            <AnimatedSection key={s.label} delay={i * 80} className="px-4 py-3 text-center">
              <div className="font-cormorant text-3xl text-gold-light sm:text-4xl">{s.value}</div>
              <div className="mt-1 font-cinzel text-[10px] uppercase tracking-[0.2em] text-muted">{s.label}</div>
            </AnimatedSection>
          ))}
        </div>
      </section>

      {/* All services */}
      <section id="all-services" className="relative scroll-mt-24 overflow-hidden bg-bg py-16 lg:py-24">
        <div className="mandala-watermark -left-48 top-10" />
        <div className="container relative z-10">
          <AnimatedSection className="mb-12 text-center sm:mb-16">
            <span className="mb-3 block font-cinzel text-[11px] uppercase tracking-[0.2em] text-gold">
              Explore Vendors
            </span>
            <h2 className="font-cormorant text-3xl font-light sm:text-4xl md:text-5xl">
              Every Service, One Platform
            </h2>
            <p className="mx-auto mt-3 max-w-lg font-dmsans text-sm text-muted">
              Hover over a service for a quick look, or select it to see everything that's included.
            </p>
            <hr className="gold-rule-wide mx-auto mt-6" />
          </AnimatedSection>

          <div className="explore-grid mx-auto grid w-full max-w-6xl grid-cols-2 gap-3 sm:gap-5 md:grid-cols-3 lg:gap-6">
            {services.map((s, i) => (
              <AnimatedSection key={s.slug} delay={(i % 3) * 90} className="h-full min-w-0">
                <Link
                  to={`/services/${s.slug}`}
                  className="group relative block aspect-3/4 overflow-hidden md:aspect-4/5 rounded-2xl border border-gold/15 bg-surface shadow-lg shadow-black/50 transition-all duration-500 hover:-translate-y-2 hover:border-gold/50 hover:shadow-[0_24px_55px_rgba(201,168,76,0.2)] focus-visible:outline-2 focus-visible:outline-gold"
                >
                  {/* Front: full, clearly visible image */}
                  <img
                    src={s.image}
                    alt={s.name}
                    loading="lazy"
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                  />
                  <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-bg/95 via-bg/50 to-transparent" />

                  <div className="absolute left-3 right-3 top-3 flex items-center justify-between gap-2 sm:left-4 sm:right-4 sm:top-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-gold/40 bg-bg/70 text-gold backdrop-blur-md sm:h-10 sm:w-10">
                      <s.icon size={16} strokeWidth={1.5} />
                    </span>
                    <span className="truncate rounded-full bg-bg/70 px-2 py-0.5 font-cinzel text-[8px] uppercase tracking-wider text-gold-light backdrop-blur-md sm:px-2.5 sm:py-1 sm:text-[9px]">
                      {s.count}
                    </span>
                  </div>

                  <div className="absolute inset-x-0 bottom-0 p-3 transition-all duration-500 sm:p-4 md:group-hover:translate-y-4 md:group-hover:opacity-0">
                    <h3 className="line-clamp-2 font-cormorant text-base font-normal leading-tight text-text-primary sm:text-xl lg:text-[22px]">{s.name}</h3>
                    <p className="mt-1 hidden font-cormorant text-sm italic text-gold-light/90 sm:line-clamp-1">{s.tagline}</p>
                    <div className="mt-2 flex items-center gap-2 font-cinzel text-[9px] uppercase tracking-[0.18em] text-gold/80 sm:mt-3">
                      <span className="h-px w-6 bg-gold/60" /> Explore
                    </div>
                  </div>

                  {/* Hover: details panel slides up */}
                  <div className="absolute inset-0 hidden translate-y-full flex-col justify-end bg-gradient-to-t from-bg via-bg/95 to-bg/75 p-4 backdrop-blur-[2px] transition-transform duration-500 ease-out group-hover:translate-y-0 group-focus-visible:translate-y-0 md:flex lg:p-5">
                    <span className="mb-1 font-cinzel text-[9px] uppercase tracking-[0.2em] text-gold">{s.count}</span>
                    <h3 className="font-cormorant text-xl leading-tight text-gold-light lg:text-[22px]">{s.name}</h3>
                    <div className="my-2 h-px w-10 bg-gold/60" />
                    <p className="mb-3 line-clamp-2 font-dmsans text-xs leading-relaxed text-text-primary/80">{s.intro}</p>
                    <ul className="mb-3 space-y-1.5">
                      {s.offerings.map((o) => (
                        <li key={o.title} className="flex items-center gap-2 font-dmsans text-xs text-text-primary/90">
                          <span className="flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-gold/20 text-gold">
                            <Check size={10} strokeWidth={2.5} />
                          </span>
                          {o.title}
                        </li>
                      ))}
                    </ul>
                    <span className="inline-flex w-fit items-center gap-2 rounded-lg border border-gold/60 px-3 py-1.5 font-cinzel text-[9px] uppercase tracking-[0.16em] text-gold transition-colors group-hover:bg-gold group-hover:text-bg">
                      View Details <ArrowRight size={13} />
                    </span>
                  </div>
                </Link>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>


      {/* Promises */}
      <section className="relative overflow-hidden bg-bg py-16 lg:py-24">
        <div className="mandala-watermark -right-48 top-0" />
        <div className="container relative z-10">
          <AnimatedSection className="mb-12 text-center">
            <span className="mb-3 block font-cinzel text-[11px] uppercase tracking-[0.2em] text-gold">
              The OneDestiny Promise
            </span>
            <h2 className="font-cormorant text-3xl font-light sm:text-4xl md:text-5xl">Why Book With Us</h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {promises.map((p, i) => (
              <AnimatedSection key={p.title} delay={i * 90} className="h-full">
                <div className="group h-full rounded-2xl border border-gold/15 bg-gradient-to-br from-surface to-maroon/[0.05] p-7 transition-all duration-500 hover:-translate-y-1.5 hover:border-gold/40">
                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl border border-gold/20 bg-gradient-to-br from-maroon/10 to-gold/10 text-gold">
                    <p.icon size={22} strokeWidth={1.5} />
                  </div>
                  <h3 className="mb-2 font-cormorant text-2xl text-text-primary transition-colors group-hover:text-gold">
                    {p.title}
                  </h3>
                  <p className="font-dmsans text-sm leading-relaxed text-muted">{p.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        className="angled-section relative overflow-hidden py-16 lg:py-24"
        style={{ background: 'linear-gradient(135deg, var(--clr-maroon) 0%, var(--clr-surface) 100%)' }}
      >
        <div className="absolute left-0 right-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-gold/30 to-transparent" />
        <div className="container relative z-10 text-center">
          <AnimatedSection>
            <h2 className="mb-6 font-cormorant text-3xl font-light sm:text-4xl md:text-5xl">
              Offer a Service? <em className="text-gold">Join Us</em>
            </h2>
            <p className="mx-auto mb-10 max-w-lg font-dmsans text-muted">
              Reach thousands of couples planning their dream wedding. List your business on OneDestiny today.
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
