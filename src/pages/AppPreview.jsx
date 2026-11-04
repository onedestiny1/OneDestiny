import { useState } from 'react'
import {
  ArrowRight,
  BadgeCheck,
  Building2,
  Calculator,
  Camera,
  Car,
  Flower2,
  Heart,
  Images,
  LayoutGrid,
  MapPin,
  MessageCircle,
  Music,
  Navigation,
  Palette,
  Search,
  ShieldCheck,
  Smartphone,
  Sparkles,
  Star,
  Sun,
  UtensilsCrossed,
  Video,
  WalletCards,
  WandSparkles,
} from 'lucide-react'
import AnimatedSection from '../components/AnimatedSection'
import GoldButton from '../components/GoldButton'
import AppHeroMockup from '../components/AppHeroMockup'
import PhoneFrame from '../components/PhoneFrame'
import photography from '../assets/photography.jpeg'
import decoration from '../assets/decoration.png'
import venue from '../assets/venue.png'
import makeup from '../assets/makeup.png'
import mehendi from '../assets/mehendi.png'
import catering from '../assets/catering.png'

const heroStats = [
  { value: '1,600+', label: 'Verified Vendors' },
  { value: '10', label: 'Categories' },
  { value: '4.8★', label: 'Avg. Rating' },
]

const categories = [
  { icon: Camera, title: 'Photography' },
  { icon: Sparkles, title: 'Makeup Artists' },
  { icon: UtensilsCrossed, title: 'Catering' },
  { icon: Building2, title: 'Venues' },
  { icon: Flower2, title: 'Decoration' },
  { icon: Sun, title: 'Pandits' },
  { icon: Palette, title: 'Mehendi Artists' },
  { icon: Music, title: 'DJ & Music' },
  { icon: Video, title: 'Cinematography' },
  { icon: Car, title: 'Wedding Cars' },
]

const appScreens = [
  {
    key: 'home',
    icon: LayoutGrid,
    label: 'Home Screen',
    title: 'Start With Your City',
    copy: 'Browse categories, featured vendors, and local wedding services from one elegant dashboard.',
  },
  {
    key: 'profile',
    icon: BadgeCheck,
    label: 'Vendor Profile',
    title: 'Review Every Detail',
    copy: 'See portfolios, ratings, pricing signals, availability, and contact options inside the app.',
  },
  {
    key: 'booking',
    icon: WalletCards,
    label: 'Booking Screen',
    title: 'Book With Clarity',
    copy: 'Confirm dates, share requirements, and complete secure booking steps with fewer calls.',
  },
  {
    key: 'reviews',
    icon: Star,
    label: 'Reviews',
    title: 'Trust Real Feedback',
    copy: 'Read couple reviews and vendor ratings before shortlisting your wedding team.',
  },
]

const capabilities = [
  { icon: Search, title: 'Search by Need', copy: 'Filter vendors by category, city, style, and budget inside the app.' },
  { icon: Star, title: 'Compare Profiles', copy: 'Shortlist vendors, compare ratings, and check portfolio quality side by side.' },
  { icon: WalletCards, title: 'Book Securely', copy: 'Use a guided booking flow with payment support and clear vendor terms.' },
  { icon: ShieldCheck, title: 'Verified Choices', copy: 'Verified badges and reviews help couples make confident decisions.' },
]

const futureFeatures = [
  { icon: Images, title: 'Real Wedding Galleries', copy: 'Browse complete real weddings for inspiration.' },
  { icon: WandSparkles, title: 'AI Vendor Recommendations', copy: 'Smart suggestions matched to your style and budget.' },
  { icon: Calculator, title: 'Budget Calculator', copy: 'Plan and track every rupee across vendors.' },
  { icon: Navigation, title: 'Location-Based Discovery', copy: 'Find the best vendors closest to your venue.' },
  { icon: BadgeCheck, title: 'Trusted Vendor Badges', copy: 'Extra verification tiers for top-rated vendors.' },
]

/* ---------- Screen contents for the showcase ---------- */

function HomeScreen() {
  return (
    <>
      <div>
        <div className="flex items-center gap-1 font-dmsans text-[9px] text-muted">
          <MapPin size={9} className="text-gold" /> Karimnagar
        </div>
        <div className="font-cormorant text-lg text-text-primary">
          Discover <em className="text-gold">vendors</em>
        </div>
      </div>
      <div className="flex items-center gap-2 rounded-xl border border-border-custom bg-surface-2 px-3 py-2 font-dmsans text-[10px] text-muted">
        <Search size={11} className="text-gold" /> Search services…
      </div>
      <div className="grid grid-cols-4 gap-2">
        {categories.slice(0, 8).map(({ icon: Icon, title }) => (
          <div key={title} className="flex flex-col items-center gap-1">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl border border-border-custom bg-surface-2 text-gold/80">
              <Icon size={14} strokeWidth={1.6} />
            </div>
            <span className="w-full truncate text-center font-dmsans text-[7px] text-muted">{title.split(' ')[0]}</span>
          </div>
        ))}
      </div>
      <div className="font-cinzel text-[8px] uppercase tracking-[0.18em] text-gold">Featured Venues</div>
      <div className="relative h-[120px] overflow-hidden rounded-2xl">
        <img src={venue} alt="" className="h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-bg/90 to-transparent" />
        <div className="absolute bottom-2 left-3">
          <div className="font-cormorant text-sm text-text-primary">The Royal Gardens</div>
          <div className="flex items-center gap-1 font-dmsans text-[8px] text-gold-light">
            <Star size={8} className="fill-gold text-gold" /> 4.8 · 500 guests
          </div>
        </div>
      </div>
    </>
  )
}

function ProfileScreen() {
  return (
    <>
      <div className="relative -mx-4 -mt-5 h-[130px]">
        <img src={decoration} alt="" className="h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-bg to-transparent" />
      </div>
      <div className="-mt-6 flex items-end gap-3">
        <img src={makeup} alt="" className="relative h-12 w-12 rounded-full border-2 border-gold object-cover" />
        <div>
          <div className="flex items-center gap-1 font-cormorant text-base text-text-primary">
            Petals & Co. <BadgeCheck size={12} className="text-gold" />
          </div>
          <div className="flex items-center gap-1 font-dmsans text-[8px] text-muted">
            <Star size={8} className="fill-gold text-gold" /> 4.9 (214) · Decoration
          </div>
        </div>
      </div>
      <div className="flex gap-1 rounded-lg bg-surface-2 p-1 font-dmsans text-[8px]">
        {['Portfolio', 'Packages', 'Reviews'].map((t, i) => (
          <span key={t} className={`flex-1 rounded-md py-1 text-center ${i === 0 ? 'bg-gold text-bg' : 'text-muted'}`}>{t}</span>
        ))}
      </div>
      <div className="grid grid-cols-3 gap-1.5">
        {[decoration, venue, mehendi, catering, photography, makeup].map((src, i) => (
          <img key={i} src={src} alt="" className="aspect-square w-full rounded-md object-cover" />
        ))}
      </div>
      <div className="mt-auto flex gap-2">
        <span className="flex flex-1 items-center justify-center gap-1 rounded-lg border border-gold/50 py-2 font-dmsans text-[9px] text-gold">
          <MessageCircle size={10} /> Chat
        </span>
        <span className="flex-1 rounded-lg bg-gold py-2 text-center font-dmsans text-[9px] font-medium text-bg">Book Now</span>
      </div>
    </>
  )
}

function BookingScreen() {
  const days = Array.from({ length: 28 }, (_, i) => i + 1)
  return (
    <>
      <div className="font-cormorant text-lg text-text-primary">
        Book <em className="text-gold">Lumière Studios</em>
      </div>
      <div className="rounded-xl border border-border-custom bg-surface-2 p-2.5">
        <div className="mb-2 flex justify-between font-dmsans text-[9px] text-text-primary">
          <span>December 2026</span>
          <span className="text-gold">Select date</span>
        </div>
        <div className="grid grid-cols-7 gap-1 text-center font-dmsans text-[8px]">
          {days.map((d) => (
            <span
              key={d}
              className={`rounded py-0.5 ${
                d === 12 ? 'bg-gold font-semibold text-bg' : [5, 6, 19, 20].includes(d) ? 'text-muted/30 line-through' : 'text-muted'
              }`}
            >
              {d}
            </span>
          ))}
        </div>
      </div>
      <div className="space-y-1.5">
        {[
          { n: 'Essential', p: '₹25,000' },
          { n: 'Signature', p: '₹65,000', on: true },
        ].map((pk) => (
          <div
            key={pk.n}
            className={`flex items-center justify-between rounded-lg border px-3 py-2 font-dmsans text-[9px] ${
              pk.on ? 'border-gold bg-gold/10 text-text-primary' : 'border-border-custom text-muted'
            }`}
          >
            <span className="flex items-center gap-2">
              <span className={`h-2.5 w-2.5 rounded-full border ${pk.on ? 'border-gold bg-gold' : 'border-muted'}`} />
              {pk.n}
            </span>
            <span>{pk.p}</span>
          </div>
        ))}
      </div>
      <div className="mt-auto rounded-xl border border-border-custom bg-surface p-3">
        <div className="mb-2 flex justify-between font-dmsans text-[9px] text-muted">
          <span>Advance (20%)</span>
          <span className="text-gold-light">₹13,000</span>
        </div>
        <div className="flex items-center justify-center gap-1 rounded-lg bg-gold py-2 font-dmsans text-[9px] font-medium text-bg">
          <ShieldCheck size={10} /> Pay Securely
        </div>
      </div>
    </>
  )
}

function ReviewsScreen() {
  return (
    <>
      <div className="font-cormorant text-lg text-text-primary">
        Couple <em className="text-gold">Reviews</em>
      </div>
      <div className="flex items-center gap-3 rounded-xl border border-border-custom bg-surface-2 p-3">
        <div className="text-center">
          <div className="font-cormorant text-3xl leading-none text-gold-light">4.9</div>
          <div className="mt-1 flex gap-0.5">
            {[1, 2, 3, 4, 5].map((i) => <Star key={i} size={7} className="fill-gold text-gold" />)}
          </div>
        </div>
        <div className="flex-1 space-y-1">
          {[92, 6, 2].map((w, i) => (
            <div key={i} className="flex items-center gap-1.5 font-dmsans text-[7px] text-muted">
              <span>{5 - i}</span>
              <div className="h-1 flex-1 rounded-full bg-bg">
                <div className="h-full rounded-full bg-gold" style={{ width: `${w}%` }} />
              </div>
            </div>
          ))}
        </div>
      </div>
      {[
        { img: mehendi, name: 'Ananya & Rohit', text: 'Every moment was captured beautifully. Truly professional team!' },
        { img: makeup, name: 'Sneha & Karthik', text: 'Booking was effortless and the team was on time for every event.' },
      ].map((r) => (
        <div key={r.name} className="rounded-xl border border-border-custom bg-surface p-3">
          <div className="mb-1.5 flex items-center gap-2">
            <img src={r.img} alt="" className="h-6 w-6 rounded-full object-cover" />
            <div>
              <div className="font-dmsans text-[9px] text-text-primary">{r.name}</div>
              <div className="flex gap-0.5">
                {[1, 2, 3, 4, 5].map((i) => <Star key={i} size={6} className="fill-gold text-gold" />)}
              </div>
            </div>
          </div>
          <p className="font-dmsans text-[8px] leading-relaxed text-muted">{r.text}</p>
        </div>
      ))}
      <div className="flex items-center gap-1 font-dmsans text-[8px] text-gold">
        <BadgeCheck size={10} /> All reviews from verified bookings
      </div>
    </>
  )
}

const screenComponents = {
  home: HomeScreen,
  profile: ProfileScreen,
  booking: BookingScreen,
  reviews: ReviewsScreen,
}

function StoreBadge({ store }) {
  return (
    <div className="flex items-center gap-3 rounded-xl border border-gold/30 bg-bg/60 px-5 py-2.5 backdrop-blur">
      <Smartphone size={22} className="text-gold" strokeWidth={1.5} />
      <div className="text-left">
        <div className="font-dmsans text-[9px] uppercase tracking-wider text-muted">Coming soon on</div>
        <div className="font-dmsans text-sm font-medium text-text-primary">{store}</div>
      </div>
    </div>
  )
}

export default function AppPreview() {
  const [activeScreen, setActiveScreen] = useState(appScreens[0].key)
  const ActiveScreen = screenComponents[activeScreen]

  return (
    <>
      {/* Hero */}
      <section className="relative flex min-h-[60vh] items-center overflow-hidden">
        <div className="absolute inset-0 bg-bg">
          <div
            className="absolute inset-0"
            style={{
              background:
                'radial-gradient(ellipse at 25% 45%, rgba(139,26,47,0.18) 0%, transparent 58%), radial-gradient(ellipse at 78% 35%, rgba(201,168,76,0.08) 0%, transparent 52%)',
            }}
          />
        </div>
        <div className="mandala-watermark -left-48 top-1/3" />
        <div className="absolute inset-0 bg-gradient-to-t from-bg via-transparent to-transparent" />

        <div className="container relative z-10 grid grid-cols-1 items-center gap-12 pb-16 pt-32 lg:grid-cols-2 lg:pb-24">
          <AnimatedSection>
            <h1 className="mb-6 font-cormorant text-[44px] font-light leading-[1.1] md:text-[56px] lg:text-[64px]">
              Weddings, Birthdays, Corporate Events
              <br />
              <em className="text-gold">&amp; Many More</em>
            </h1>
            <p className="mb-10 max-w-xl font-dmsans text-lg leading-relaxed text-muted">
              This website introduces OneDestiny. The actual vendor discovery, profile comparison, booking,
              reviews, and payments happen inside the mobile app.
            </p>
            <div className="mb-10 flex flex-wrap gap-4">
              <GoldButton variant="outlined" size="lg" to="/how-it-works">
                How It Works
              </GoldButton>
            </div>
            <div className="flex max-w-md divide-x divide-gold/15 border-t border-gold/15 pt-6">
              {heroStats.map((s) => (
                <div key={s.label} className="flex-1 px-4 first:pl-0">
                  <div className="font-cormorant text-2xl text-gold-light sm:text-3xl">{s.value}</div>
                  <div className="font-cinzel text-[9px] uppercase tracking-[0.16em] text-muted">{s.label}</div>
                </div>
              ))}
            </div>
          </AnimatedSection>

          <AnimatedSection direction="right" delay={200}>
            <AppHeroMockup />
          </AnimatedSection>
        </div>
      </section>

      {/* Interactive app screens */}
      <section className="angled-section relative overflow-hidden bg-bg py-16 lg:py-24">
        <div className="pointer-events-none absolute right-0 top-1/3 h-[500px] w-[500px] rounded-full bg-maroon/15 blur-[140px]" />
        <div className="container relative z-10">
          <AnimatedSection className="mb-14 text-center">
            <span className="mb-3 block font-cinzel text-[11px] uppercase tracking-[0.2em] text-gold">App Screens</span>
            <h2 className="font-cormorant text-4xl font-light md:text-5xl">
              Built for Real <em className="text-gold">Wedding Planning</em>
            </h2>
            <p className="mx-auto mt-4 max-w-xl font-dmsans text-sm text-muted">
              Select a feature to preview how it looks inside the app.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-[1fr_auto] lg:gap-20">
            <AnimatedSection>
              <div className="space-y-3" role="tablist" aria-label="App screens">
                {appScreens.map((screen, index) => {
                  const active = screen.key === activeScreen
                  return (
                    <button
                      key={screen.key}
                      role="tab"
                      aria-selected={active}
                      onMouseEnter={() => setActiveScreen(screen.key)}
                      onFocus={() => setActiveScreen(screen.key)}
                      onClick={() => setActiveScreen(screen.key)}
                      className={`group relative flex w-full items-start gap-4 overflow-hidden rounded-2xl border px-5 py-3.5 text-left transition-all duration-300 sm:px-6 sm:py-4 ${
                        active
                          ? 'border-gold/50 bg-gradient-to-r from-maroon/25 to-surface shadow-[0_15px_40px_rgba(0,0,0,0.4)]'
                          : 'border-gold/10 bg-surface/50 hover:border-gold/30'
                      }`}
                    >
                      <span className={`absolute left-0 top-0 h-full w-[3px] transition-colors ${active ? 'bg-gold' : 'bg-transparent'}`} />
                      <span
                        className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border transition-colors ${
                          active ? 'border-gold bg-gold text-bg' : 'border-gold/25 bg-bg text-gold'
                        }`}
                      >
                        <screen.icon size={18} strokeWidth={1.6} />
                      </span>
                      <span className="flex-1">
                        <span className="mb-0.5 block font-cinzel text-[10px] uppercase tracking-[0.18em] text-gold/80">
                          0{index + 1} · {screen.label}
                        </span>
                        <span className="block font-cormorant text-xl leading-tight text-text-primary">{screen.title}</span>
                        <span
                          className={`mt-1 block font-dmsans text-sm leading-snug text-muted transition-opacity duration-300 ${
                            active ? 'opacity-100' : 'opacity-50'
                          }`}
                        >
                          {screen.copy}
                        </span>
                      </span>
                    </button>
                  )
                })}
              </div>
            </AnimatedSection>

            <AnimatedSection delay={150} className="relative flex justify-center">
              <div className="pointer-events-none absolute top-1/2 h-[420px] w-[420px] -translate-y-1/2 rounded-full border border-gold/10" />
              <div className="pointer-events-none absolute top-1/2 h-[340px] w-[340px] -translate-y-1/2 rounded-full bg-gradient-to-br from-maroon/30 to-gold/5 blur-3xl" />
              <div className="relative">
                <PhoneFrame>
                  <div key={activeScreen} className="flex h-full flex-col gap-3 animate-in">
                    <ActiveScreen />
                  </div>
                </PhoneFrame>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="angled-section bg-surface py-16 lg:py-24">
        <div className="container">
          <AnimatedSection className="mb-14 text-center">
            <span className="mb-3 block font-cinzel text-[11px] uppercase tracking-[0.2em] text-gold">
              Why Choose OneDestiny
            </span>
            <h2 className="font-cormorant text-4xl font-light md:text-5xl">
              A Better Way to Build Your <em className="text-gold">Wedding Team</em>
            </h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
            {capabilities.map((item, index) => (
              <AnimatedSection key={item.title} delay={index * 100} className="h-full">
                <div className="group relative h-full overflow-hidden rounded-2xl border border-gold/15 bg-gradient-to-br from-surface-2 to-bg p-7 transition-all duration-500 hover:-translate-y-2 hover:border-gold/45">
                  <span className="absolute right-5 top-4 font-cormorant text-5xl text-gold/10 transition-colors group-hover:text-gold/25">
                    0{index + 1}
                  </span>
                  <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl border border-gold/25 bg-gradient-to-br from-maroon/20 to-gold/10 text-gold">
                    <item.icon size={24} strokeWidth={1.5} />
                  </div>
                  <h3 className="mb-3 font-cormorant text-2xl text-text-primary transition-colors group-hover:text-gold">{item.title}</h3>
                  <p className="font-dmsans text-sm leading-relaxed text-muted">{item.copy}</p>
                  <div className="mt-6 h-px w-8 bg-gold/40 transition-all duration-500 group-hover:w-full" />
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Roadmap */}
      <section className="angled-section relative overflow-hidden bg-bg py-16 lg:py-24">
        <div className="mandala-watermark -right-48 top-0" />
        <div className="container relative z-10 grid grid-cols-1 gap-12 lg:grid-cols-[1fr_1.2fr] lg:gap-16">
          <AnimatedSection className="lg:self-start">
            <span className="mb-3 block font-cinzel text-[11px] uppercase tracking-[0.2em] text-gold">Future Features</span>
            <h2 className="mb-6 font-cormorant text-4xl font-light md:text-5xl">
              More Planning Tools <em className="text-gold">Are Coming</em>
            </h2>
            <p className="mb-8 font-dmsans leading-relaxed text-muted">
              OneDestiny can grow into a complete Indian wedding planning companion with recommendations,
              budgeting, galleries, and location-based discovery.
            </p>
            <div className="mb-8 rounded-2xl border border-gold/20 bg-surface p-5">
              <div className="mb-2 flex items-center gap-2 font-cinzel text-[10px] uppercase tracking-[0.14em] text-gold">
                <MapPin size={14} /> Local First
              </div>
              <p className="font-dmsans text-sm text-muted">
                Starting from Karimnagar and Telangana, built to support wedding services across India.
              </p>
            </div>
          </AnimatedSection>

          <div className="relative">
            <div className="absolute bottom-6 left-[23px] top-6 w-px bg-gradient-to-b from-gold/60 via-gold/25 to-transparent" />
            <div className="space-y-5">
              {futureFeatures.map((f, i) => (
                <AnimatedSection key={f.title} delay={i * 90}>
                  <div className="group relative flex gap-5">
                    <span className="relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-gold/40 bg-surface text-gold transition-all duration-300 group-hover:border-gold group-hover:shadow-[0_0_20px_rgba(201,168,76,0.35)]">
                      <f.icon size={18} strokeWidth={1.6} />
                    </span>
                    <div className="flex-1 rounded-2xl border border-gold/10 bg-surface/70 p-5 transition-all duration-300 group-hover:border-gold/35 group-hover:bg-surface">
                      <div className="mb-1 flex flex-wrap items-center justify-between gap-2">
                        <h3 className="font-cormorant text-xl text-text-primary sm:text-2xl">{f.title}</h3>
                        <span className="rounded-full border border-gold/30 px-2.5 py-0.5 font-cinzel text-[8px] uppercase tracking-[0.16em] text-gold/80">
                          Planned
                        </span>
                      </div>
                      <p className="font-dmsans text-sm text-muted">{f.copy}</p>
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Download CTA */}
      <section
        className="angled-section relative overflow-hidden py-16 lg:py-24"
        style={{ background: 'linear-gradient(135deg, var(--clr-maroon) 0%, var(--clr-surface) 100%)' }}
      >
        <div className="absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />
        <div className="container relative z-10 text-center">
          <AnimatedSection>
            <Heart size={28} className="mx-auto mb-5 text-gold" strokeWidth={1.4} />
            <h2 className="mb-5 font-cormorant text-3xl font-light sm:text-4xl md:text-5xl">
              Your Wedding, <em className="text-gold">In Your Pocket</em>
            </h2>
            <p className="mx-auto mb-10 max-w-lg font-dmsans text-muted">
              Discover, compare and book India's finest wedding vendors, all from one beautiful app.
            </p>
            <ul className="flex flex-wrap items-center justify-center gap-3 font-dmsans text-xs tracking-wide text-text-primary/90 sm:gap-4">
              {[
                { t: 'Verified vendors', Icon: BadgeCheck },
                { t: 'Secure payments', Icon: ShieldCheck },
              ].map(({ t, Icon }) => (
                <li
                  key={t}
                  className="group flex items-center gap-2 rounded-full border border-gold/30 bg-black/20 py-2 pl-2 pr-4 backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-gold/70 hover:bg-gold/10 hover:shadow-[0_6px_20px_-6px_rgba(201,168,76,0.45)]"
                >
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-linear-to-br from-gold to-gold-light text-surface shadow-[0_0_10px_rgba(232,201,106,0.35)] transition-transform duration-300 group-hover:scale-110">
                    <Icon size={13} strokeWidth={2.5} />
                  </span>
                  <span className="transition-colors duration-300 group-hover:text-gold-light">{t}</span>
                </li>
              ))}
            </ul>
          </AnimatedSection>
        </div>
      </section>
    </>
  )
}
