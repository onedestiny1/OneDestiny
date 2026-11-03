import { useState } from 'react'
import { Link, Navigate, useParams } from 'react-router-dom'
import { ArrowLeft, ArrowRight, ChevronDown, ShieldCheck, Star, MessageCircle } from 'lucide-react'
import AnimatedSection from '../components/AnimatedSection'
import GoldButton from '../components/GoldButton'
import { getServiceBySlug, services } from '../data/services'

function FaqItem({ q, a }) {
  const [open, setOpen] = useState(false)

  return (
    <div className="border-b border-gold/15">
      <button
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
        className="flex w-full items-center justify-between gap-4 py-5 text-left"
      >
        <span className="font-cormorant text-xl text-text-primary sm:text-2xl">{q}</span>
        <ChevronDown
          size={18}
          className={`shrink-0 text-gold transition-transform duration-300 ${open ? 'rotate-180' : ''}`}
        />
      </button>
      <div className={`accordion-content ${open ? 'open' : ''}`}>
        <p className="font-dmsans text-sm leading-relaxed text-muted sm:text-[15px]">{a}</p>
      </div>
    </div>
  )
}

export default function ServiceDetail() {
  const { slug } = useParams()
  const service = getServiceBySlug(slug)

  if (!service) return <Navigate to="/services" replace />

  const Icon = service.icon
  const related = services.filter((s) => s.slug !== service.slug).slice(0, 3)

  return (
    <>
      {/* Hero */}
      <section className="relative isolate overflow-hidden">
        <img src={service.image} alt={service.name} className="absolute inset-0 -z-20 h-full w-full object-cover" />
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-bg via-bg/85 to-bg/30" />
        <div className="absolute inset-0 -z-10 bg-gradient-to-t from-bg via-transparent to-bg/40" />

        <div className="container flex min-h-[72vh] flex-col justify-end pb-16 pt-36">
          <nav className="mb-8 flex items-center gap-2 font-cinzel text-[10px] uppercase tracking-[0.18em] text-muted">
            <Link to="/" className="hover:text-gold-light">Home</Link>
            <span className="text-gold/40">/</span>
            <Link to="/services" className="hover:text-gold-light">Services</Link>
            <span className="text-gold/40">/</span>
            <span className="text-gold">{service.name}</span>
          </nav>

          <div className="max-w-2xl">
            <AnimatedSection>
              <div className="mb-5 flex items-center gap-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-full border border-gold/50 bg-surface/80 text-gold backdrop-blur-md">
                  <Icon size={26} strokeWidth={1.5} />
                </div>
                <span className="rounded-full border border-gold/30 bg-surface/70 px-3 py-1 font-cinzel text-[10px] uppercase tracking-wider text-gold-light backdrop-blur-md">
                  {service.count}
                </span>
              </div>
              <h1 className="mb-3 font-cormorant text-[44px] font-light leading-[1.05] sm:text-[60px] lg:text-[72px]">
                {service.name}
              </h1>
              <p className="mb-6 font-cormorant text-xl italic text-gold sm:text-2xl">{service.tagline}</p>
              <p className="mb-9 max-w-xl font-dmsans text-base leading-relaxed text-muted sm:text-lg">
                {service.intro}
              </p>
              <div className="flex flex-wrap gap-4">
                <GoldButton variant="filled" size="lg" to="/app-preview">
                  Browse Vendors <ArrowRight size={14} />
                </GoldButton>
                <GoldButton variant="outlined" size="lg" to="/contact">
                  Enquire Now
                </GoldButton>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Trust strip */}
      <section className="border-y border-gold/15 bg-surface">
        <div className="container flex flex-wrap items-center justify-center gap-x-10 gap-y-3 py-6 font-cinzel text-[10px] uppercase tracking-[0.2em] text-gold/80 sm:text-[11px]">
          <span className="flex items-center gap-2"><ShieldCheck size={14} className="text-gold" /> Verified Professionals</span>
          <span className="flex items-center gap-2"><Star size={14} className="text-gold" /> Rated by Real Couples</span>
          <span className="flex items-center gap-2"><MessageCircle size={14} className="text-gold" /> Chat Before You Book</span>
        </div>
      </section>

      {/* What's included */}
      <section className="relative overflow-hidden bg-bg py-16 lg:py-24">
        <div className="mandala-watermark -right-48 top-0" />
        <div className="container relative z-10">
          <AnimatedSection className="mb-12 text-center sm:mb-16">
            <span className="mb-3 block font-cinzel text-[11px] uppercase tracking-[0.2em] text-gold">
              What We Offer
            </span>
            <h2 className="font-cormorant text-3xl font-light sm:text-4xl md:text-5xl">
              {service.name} <em className="text-gold">Services</em>
            </h2>
            <hr className="gold-rule-wide mx-auto mt-6" />
          </AnimatedSection>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:gap-6">
            {service.offerings.map((o, i) => (
              <AnimatedSection key={o.title} delay={i * 90} className="h-full">
                <div className="group flex h-full gap-5 rounded-2xl border border-gold/15 bg-gradient-to-br from-surface to-maroon/[0.05] p-6 transition-all duration-500 hover:-translate-y-1 hover:border-gold/40 sm:p-7">
                  <span className="font-cormorant text-4xl leading-none text-gold/40 transition-colors group-hover:text-gold">
                    0{i + 1}
                  </span>
                  <div>
                    <h3 className="mb-2 font-cormorant text-2xl text-text-primary">{o.title}</h3>
                    <p className="font-dmsans text-sm leading-relaxed text-muted">{o.desc}</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="angled-section bg-surface py-16 lg:py-24">
        <div className="container grid grid-cols-1 gap-10 lg:grid-cols-[1fr_1.6fr] lg:gap-16">
          <AnimatedSection>
            <span className="mb-3 block font-cinzel text-[11px] uppercase tracking-[0.2em] text-gold">FAQs</span>
            <h2 className="mb-4 font-cormorant text-3xl font-light sm:text-4xl md:text-5xl">
              Questions About <em className="text-gold">{service.name}</em>
            </h2>
            <p className="mb-8 font-dmsans text-sm leading-relaxed text-muted">
              Can't find what you're looking for? Our team is happy to help you plan.
            </p>
            <GoldButton variant="outlined" size="md" to="/contact">
              Ask a Question <ArrowRight size={14} />
            </GoldButton>
          </AnimatedSection>
          <AnimatedSection delay={120}>
            {service.faqs.map((f) => (
              <FaqItem key={f.q} q={f.q} a={f.a} />
            ))}
          </AnimatedSection>
        </div>
      </section>

      {/* Related */}
      <section className="angled-section relative overflow-hidden bg-bg py-16 lg:py-24">
        <div className="container relative z-10">
          <AnimatedSection className="mb-10 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <span className="mb-3 block font-cinzel text-[11px] uppercase tracking-[0.2em] text-gold">
                Complete Your Celebration
              </span>
              <h2 className="font-cormorant text-3xl font-light sm:text-4xl">Explore More Services</h2>
            </div>
            <Link
              to="/services"
              className="flex items-center gap-2 font-cinzel text-[11px] uppercase tracking-[0.16em] text-gold hover:text-gold-light"
            >
              <ArrowLeft size={13} /> All Services
            </Link>
          </AnimatedSection>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
            {related.map((r, i) => (
              <AnimatedSection key={r.slug} delay={i * 90}>
                <Link
                  to={`/services/${r.slug}`}
                  className="group relative block aspect-[4/3] overflow-hidden rounded-2xl"
                >
                  <img
                    src={r.image}
                    alt={r.name}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-bg via-bg/50 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-5">
                    <h3 className="font-cormorant text-2xl text-text-primary group-hover:text-gold-light">{r.name}</h3>
                    <div className="mt-1 flex items-center justify-between font-cinzel text-[9px] uppercase tracking-[0.16em] text-gold">
                      <span>{r.tagline}</span>
                      <ArrowRight size={13} className="transition-transform group-hover:translate-x-1.5" />
                    </div>
                  </div>
                </Link>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
