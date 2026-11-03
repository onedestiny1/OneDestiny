import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import logoIcon from '../assets/logo-full.png'

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/app-preview', label: 'App Preview' },
  { to: '/services', label: 'Services' },
  { to: '/how-it-works', label: 'How It Works' },
  { to: '/contact', label: 'Contact' },
]

// Phone with a download arrow: "tap to install the app"
function InstallAppIcon({ size = 14 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <rect x="5" y="2" width="14" height="20" rx="2.5" />
      <path d="M12 7v7" />
      <path d="m9 11.5 3 3 3-3" />
      <path d="M10.5 18.5h3" />
    </svg>
  )
}

// TODO: replace with the real store links once the apps are published
const appLinks = [
  { href: 'https://play.google.com/store/apps/details?id=com.Onedestiny.vendor', label: 'Join as Vendor', icon: InstallAppIcon },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const { pathname } = useLocation()
  const isActive = (to) => (to === '/' ? pathname === '/' : pathname === to || pathname.startsWith(`${to}/`))

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
  }, [pathname])

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [mobileOpen])

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? 'navbar-glass py-2' : 'py-4 navbar-glass'
        }`}
      >
        <div className="container flex items-center justify-between gap-4">
          <Link to="/" className="group flex-shrink-0">
            <img
              src={logoIcon}
              alt="OneDestiny"
              className="h-[64px] w-auto object-contain
               drop-shadow-[0_0_10px_rgba(201,168,76,0.5)]
               group-hover:drop-shadow-[0_0_16px_rgba(201,168,76,0.8)]
               transition-all duration-300 group-hover:scale-105"
            />
          </Link>

          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map(({ to, label }) => (
              <Link
                key={to}
                to={to}
                className={`font-cinzel text-[13px] tracking-[0.1em] uppercase transition-colors duration-300 relative ${
                  isActive(to)
                    ? 'text-gold after:absolute after:bottom-[-4px] after:left-0 after:w-full after:h-[1px] after:bg-gold'
                    : 'text-muted hover:text-gold-light'
                }`}
              >
                {label}
              </Link>
            ))}
          </div>

          <div className="hidden lg:flex items-center gap-3">
            {appLinks.map(({ href, label, icon: Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 font-cinzel text-[11px] tracking-[0.1em] uppercase text-gold border border-gold/30 rounded-full py-1.5 pl-1.5 pr-4 whitespace-nowrap transition-all duration-300 hover:bg-gold/10 hover:border-gold/60 hover:shadow-[0_6px_20px_-6px_rgba(201,168,76,0.45)]"
              >
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-linear-to-br from-gold to-gold-light text-surface shadow-[0_0_10px_rgba(232,201,106,0.35)] transition-transform duration-300 group-hover:scale-110 group-hover:animate-bounce">
                  <Icon size={13} />
                </span>
                {label}
              </a>
            ))}
          </div>

          <button
            onClick={() => setMobileOpen((open) => !open)}
            className="lg:hidden text-gold p-2"
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {mobileOpen && (
        <div className="mobile-menu-overlay">
          <button
            onClick={() => setMobileOpen(false)}
            className="absolute top-5 right-6 text-gold p-2"
            aria-label="Close menu"
          >
            <X size={28} />
          </button>

          <Link to="/" className="mb-8 group">
            <img
              src={logoIcon}
              alt="OneDestiny"
              className="h-[60px] w-auto object-contain
               drop-shadow-[0_0_10px_rgba(201,168,76,0.5)]"
            />
          </Link>

          {navLinks.map(({ to, label }) => (
            <Link
              key={to}
              to={to}
              onClick={() => setMobileOpen(false)}
              className={`font-cinzel text-xl tracking-[0.12em] uppercase transition-colors duration-300 ${
                isActive(to) ? 'text-gold' :'text-muted hover:text-gold-light'
              }`}
            >
              {label}
            </Link>
          ))}

          <div className="mt-8 flex flex-col items-center gap-3">
            {appLinks.map(({ href, label, icon: Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileOpen(false)}
                className="group inline-flex items-center gap-2.5 font-cinzel text-sm tracking-[0.1em] uppercase text-gold border border-gold/30 rounded-full py-2 pl-2 pr-5 transition-all duration-300 hover:bg-gold/10 hover:border-gold/60"
              >
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-linear-to-br from-gold to-gold-light text-surface shadow-[0_0_10px_rgba(232,201,106,0.35)] transition-transform duration-300 group-hover:scale-110">
                  <Icon size={15} />
                </span>
                {label}
              </a>
            ))}
          </div>
        </div>
      )}
    </>
  )
}
