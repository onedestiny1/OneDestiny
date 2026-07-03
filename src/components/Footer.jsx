import { Link } from 'react-router-dom'
import { Mail, Phone } from 'lucide-react'
import logoFull from '../assets/logo-full.png'

const quickLinks = [
  { to: '/', label: 'Home' },
  { to: '/app-preview', label: 'App Preview' },
  { to: '/how-it-works', label: 'How It Works' },
  { to: '/for-vendors', label: 'For Vendors' },
  { to: '/contact', label: 'Contact' },
]

const categories = [
  'Photography',
  'Videography',
  'Makeup Artists',
  'Catering',
  'Venues',
  'Decoration',
  'Pandits',
  'Mehendi Artists',
  'DJ & Music',
]

function Instagram({ size = 16, className = '' }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  )
}

export default function Footer() {
  return (
    <footer className="bg-bg border-t border-gold/20">
      <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-gold/30 to-transparent" />

      <div className="container py-16">
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="flex flex-col gap-5">
              {/* Logo */}
              <img
                src={logoFull}
                alt="OneDestiny"
                className="w-[140px] object-contain
               drop-shadow-[0_0_16px_rgba(201,168,76,0.3)]
               opacity-90 hover:opacity-100
               transition-opacity duration-300"
              />

              {/* Tagline */}
              <p className="font-dmsans text-[#9A8880] text-sm leading-relaxed max-w-[220px]">
                India's premium event management & wedding vendor booking platform.
                Your dream event starts with the right team.
              </p>

              {/* Instagram */}
              <a
                href="https://www.instagram.com/1onedestiny?igsh=ZjFwNWJkaDcwZWww"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-[#C9A84C] 
               hover:text-[#E8C96A] transition-colors duration-200 
               font-dmsans text-sm group w-fit"
              >
                <Instagram size={16} className="group-hover:scale-110 transition-transform" />
                @1onedestiny
              </a>

              {/* Coming Soon */}
              <div className="flex items-center gap-2 border border-[#C9A84C]/30 
                  rounded-lg px-4 py-3">
                <span className="font-cinzel text-[11px] text-[#C9A84C] tracking-[0.1em] uppercase">
                  App Launching 27 Jul 2026
                </span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="mb-6 font-cinzel text-xs uppercase tracking-[0.12em] text-gold">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map(({ to, label }) => (
                <li key={to}>
                  <Link to={to} className="font-dmsans text-sm text-muted transition-colors hover:text-gold-light">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-6 font-cinzel text-xs uppercase tracking-[0.12em] text-gold">
              Vendor Categories
            </h4>
            <ul className="space-y-3">
              {categories.map((cat) => (
                <li key={cat}>
                  <Link to="/app-preview" className="font-dmsans text-sm text-muted transition-colors hover:text-gold-light">
                    {cat}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-6 font-cinzel text-xs uppercase tracking-[0.12em] text-gold">
              Contact Us
            </h4>
            <ul className="space-y-4">
              <li>
                <a
                  href="https://wa.me/916302594826"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-2 font-dmsans text-sm text-muted transition-colors hover:text-gold-light"
                >
                  <Phone size={15} className="mt-0.5 text-gold" />
                  <span>6302594826</span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:onedestiny50@gmail.com"
                  className="flex items-start gap-2 font-dmsans text-sm text-muted transition-colors hover:text-gold-light"
                >
                  <Mail size={15} className="mt-0.5 text-gold" />
                  <span className="break-all">onedestiny50@gmail.com</span>
                </a>
              </li>

            </ul>
          </div>
        </div>
      </div>

      <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-gold/20 to-transparent" />

      {/* Founders Section */}
      <div className="container py-8 text-center">
        <p className="font-cinzel text-[11px] uppercase tracking-[0.2em] text-muted mb-3">Founded by</p>
        <div className="flex items-center justify-center gap-3">
          <span className="font-cormorant text-lg text-gold">Karnakanti Nithish</span>
          <span className="text-gold/40">&amp;</span>
          <span className="font-cormorant text-lg text-gold">Balla Dharmateja</span>
        </div>
      </div>

      <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-gold/20 to-transparent" />
      <div className="container flex flex-col items-center justify-between gap-4 py-6 sm:flex-row">
        <p className="font-dmsans text-xs text-muted">
          &copy; 2025 OneDestiny. All rights reserved.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-6">
          <a href="#" className="font-dmsans text-xs text-muted transition-colors hover:text-gold-light">
            Privacy Policy
          </a>
          <a href="#" className="font-dmsans text-xs text-muted transition-colors hover:text-gold-light">
            Terms
          </a>
          <a href="#" className="font-dmsans text-xs text-muted transition-colors hover:text-gold-light">
            Refund Policy
          </a>
        </div>
      </div>
    </footer>
  )
}
