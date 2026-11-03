import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import logoIcon from '../assets/logo-full.png'
import VendorJoinMenu from './VendorJoinMenu'

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/app-preview', label: 'App Preview' },
  { to: '/services', label: 'Services' },
  { to: '/how-it-works', label: 'How It Works' },
  { to: '/contact', label: 'Contact' },
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
            <VendorJoinMenu variant="desktop" />
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
            <VendorJoinMenu variant="mobile" onNavigate={() => setMobileOpen(false)} />
          </div>
        </div>
      )}
    </>
  )
}
