import {
  Bell,
  CalendarCheck,
  Camera,
  CheckCircle2,
  Flower2,
  Heart,
  Home,
  MapPin,
  Search,
  ShieldCheck,
  Sparkles,
  Star,
  User,
  UtensilsCrossed,
} from 'lucide-react'
import photography from '../assets/photography.jpeg'
import makeup from '../assets/makeup.png'
import mehendi from '../assets/mehendi.png'
import decoration from '../assets/decoration.png'

const quickCategories = [
  { icon: Camera, label: 'Photo' },
  { icon: Sparkles, label: 'Makeup' },
  { icon: UtensilsCrossed, label: 'Catering' },
  { icon: Flower2, label: 'Decor' },
]

const navItems = [Home, Search, Heart, CalendarCheck, User]

function FloatingCard({ className = '', delay = '0s', children }) {
  return (
    <div
      className={`absolute z-20 hidden items-center gap-3 rounded-2xl border border-gold/25 bg-surface/90 px-4 py-3 shadow-[0_18px_40px_rgba(0,0,0,0.55)] backdrop-blur-md sm:flex ${className}`}
      style={{ animation: `float 7s ease-in-out ${delay} infinite` }}
    >
      {children}
    </div>
  )
}

export default function AppHeroMockup() {
  return (
    <div className="relative mx-auto flex w-full max-w-[520px] items-center justify-center py-6">
      {/* Ambient glow and decorative rings */}
      <div className="pointer-events-none absolute h-[420px] w-[420px] rounded-full bg-gradient-to-br from-maroon/35 via-gold/10 to-transparent blur-[90px]" />
      <div className="pointer-events-none absolute h-[460px] w-[460px] rounded-full border border-gold/10" />
      <div className="pointer-events-none absolute h-[560px] w-[560px] rounded-full border border-dashed border-gold/10" />

      {/* Phone */}
      <div className="relative z-10 h-[580px] w-[284px] rounded-[46px] border border-gold/40 bg-gradient-to-b from-[#2a1218] to-bg p-2.5 shadow-[0_40px_90px_rgba(0,0,0,0.75),0_0_60px_rgba(201,168,76,0.12)]">
        <div className="relative flex h-full flex-col overflow-hidden rounded-[38px] bg-bg">
          {/* Notch */}
          <div className="absolute left-1/2 top-2 z-10 h-5 w-24 -translate-x-1/2 rounded-full bg-black" />

          {/* Status bar */}
          <div className="flex items-center justify-between px-6 pt-2.5 font-dmsans text-[10px] font-medium text-text-primary/80">
            <span>9:41</span>
            <span className="flex gap-0.5">
              <span className="h-1.5 w-1.5 rounded-full bg-text-primary/70" />
              <span className="h-1.5 w-1.5 rounded-full bg-text-primary/70" />
              <span className="h-1.5 w-3 rounded-sm bg-text-primary/70" />
            </span>
          </div>

          <div className="flex flex-1 flex-col gap-3 px-4 pt-5">
            {/* Header */}
            <div className="flex items-center justify-between">
              <div>
                <div className="flex items-center gap-1 font-dmsans text-[9px] text-muted">
                  <MapPin size={9} className="text-gold" /> Hyderabad
                </div>
                <div className="font-cormorant text-lg leading-tight text-text-primary">
                  Plan your <em className="text-gold">big day</em>
                </div>
              </div>
              <div className="relative flex h-8 w-8 items-center justify-center rounded-full border border-gold/30 bg-surface-2 text-gold">
                <Bell size={13} />
                <span className="absolute right-1.5 top-1.5 h-1.5 w-1.5 rounded-full bg-maroon-light" />
              </div>
            </div>

            {/* Search */}
            <div className="flex items-center gap-2 rounded-xl border border-border-custom bg-surface-2 px-3 py-2 font-dmsans text-[10px] text-muted">
              <Search size={11} className="text-gold" /> Search photographers, venues…
            </div>

            {/* Wedding countdown */}
            <div className="relative overflow-hidden rounded-2xl border border-gold/25 bg-gradient-to-br from-maroon/70 to-surface-2 p-3">
              <div className="absolute -right-6 -top-6 h-20 w-20 rounded-full bg-gold/15 blur-xl" />
              <div className="flex items-end justify-between">
                <div>
                  <div className="font-cinzel text-[8px] uppercase tracking-[0.18em] text-gold-light">Your Wedding In</div>
                  <div className="font-cormorant text-3xl leading-none text-text-primary">
                    124 <span className="text-sm text-muted">days</span>
                  </div>
                </div>
                <span className="rounded-full bg-bg/60 px-2 py-0.5 font-dmsans text-[8px] text-gold">12 Dec 2026</span>
              </div>
              <div className="mt-2.5 h-1 overflow-hidden rounded-full bg-bg/60">
                <div className="h-full w-2/3 rounded-full bg-gradient-to-r from-gold to-gold-light" />
              </div>
              <div className="mt-1 font-dmsans text-[8px] text-muted">6 of 9 vendors booked</div>
            </div>

            {/* Categories */}
            <div className="grid grid-cols-4 gap-2">
              {quickCategories.map(({ icon: Icon, label }, i) => (
                <div key={label} className="flex flex-col items-center gap-1">
                  <div
                    className={`flex h-10 w-10 items-center justify-center rounded-xl border ${
                      i === 0 ? 'border-gold/60 bg-gold/15 text-gold' : 'border-border-custom bg-surface-2 text-gold/70'
                    }`}
                  >
                    <Icon size={15} strokeWidth={1.6} />
                  </div>
                  <span className="font-dmsans text-[8px] text-muted">{label}</span>
                </div>
              ))}
            </div>

            {/* Featured vendor */}
            <div className="overflow-hidden rounded-2xl border border-border-custom bg-surface">
              <div className="relative h-[92px]">
                <img src={photography} alt="" className="h-full w-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-surface to-transparent" />
                <span className="absolute left-2 top-2 flex items-center gap-1 rounded-full bg-bg/80 px-2 py-0.5 font-dmsans text-[8px] text-gold backdrop-blur">
                  <ShieldCheck size={9} /> Verified
                </span>
                <span className="absolute right-2 top-2 flex h-6 w-6 items-center justify-center rounded-full bg-bg/80 text-maroon-light">
                  <Heart size={11} fill="currentColor" />
                </span>
              </div>
              <div className="flex items-center justify-between px-3 pb-3 pt-1">
                <div>
                  <div className="font-cormorant text-[15px] leading-tight text-text-primary">Lumière Studios</div>
                  <div className="flex items-center gap-1 font-dmsans text-[8px] text-muted">
                    <Star size={8} className="fill-gold text-gold" /> 4.9 · Candid Photography
                  </div>
                  <div className="mt-0.5 font-dmsans text-[9px] text-gold-light">₹65,000 onwards</div>
                </div>
                <span className="rounded-lg bg-gold px-3 py-1.5 font-cinzel text-[8px] font-semibold uppercase tracking-wider text-bg">
                  Book
                </span>
              </div>
            </div>
          </div>

          {/* Bottom nav */}
          <div className="mt-auto flex items-center justify-around border-t border-border-custom bg-surface/90 px-3 pb-4 pt-2.5">
            {navItems.map((Icon, i) => (
              <span key={i} className={`flex flex-col items-center gap-1 ${i === 0 ? 'text-gold' : 'text-muted/60'}`}>
                <Icon size={15} strokeWidth={1.7} />
                {i === 0 && <span className="h-1 w-1 rounded-full bg-gold" />}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Floating cards */}
      <FloatingCard className="-left-2 top-16 lg:-left-6" delay="0s">
        <span className="flex h-9 w-9 items-center justify-center rounded-full bg-gold/15 text-gold">
          <CheckCircle2 size={18} />
        </span>
        <div>
          <div className="font-dmsans text-xs font-medium text-text-primary">Booking Confirmed</div>
          <div className="font-dmsans text-[10px] text-muted">Decoration · 12 Dec</div>
        </div>
      </FloatingCard>

      <FloatingCard className="-right-2 top-1/2 lg:-right-8" delay="1.5s">
        <div className="flex -space-x-2">
          {[makeup, mehendi, decoration].map((src) => (
            <img key={src} src={src} alt="" className="h-7 w-7 rounded-full border-2 border-surface object-cover" />
          ))}
        </div>
        <div>
          <div className="flex items-center gap-1 font-dmsans text-xs font-medium text-text-primary">
            <Star size={11} className="fill-gold text-gold" /> 4.9 Rating
          </div>
          <div className="font-dmsans text-[10px] text-muted">from 1.2k couples</div>
        </div>
      </FloatingCard>

      <FloatingCard className="bottom-16 left-0 lg:-left-4" delay="3s">
        <span className="flex h-9 w-9 items-center justify-center rounded-full bg-maroon/30 text-gold">
          <ShieldCheck size={18} />
        </span>
        <div>
          <div className="font-dmsans text-xs font-medium text-text-primary">Secure Payment</div>
          <div className="font-dmsans text-[10px] text-muted">Razorpay protected</div>
        </div>
      </FloatingCard>
    </div>
  )
}
