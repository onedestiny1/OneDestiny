import { useEffect, useId, useRef, useState } from 'react'
import { ChevronDown } from 'lucide-react'

// Links for the vendor app: Android → Play Store, iOS → vendor web app
const ANDROID_URL = 'https://play.google.com/store/apps/details?id=com.Onedestiny.vendor'
const IOS_URL = 'https://vendor.onedestiny.org/'

function AndroidIcon({ size = 18 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M17.523 15.341a1 1 0 1 1 0-2 1 1 0 0 1 0 2m-11.046 0a1 1 0 1 1 0-2 1 1 0 0 1 0 2m11.405-6.02 1.997-3.459a.416.416 0 0 0-.72-.415l-2.023 3.503C15.59 8.244 13.853 7.851 12 7.851s-3.59.393-5.137 1.099L4.841 5.447a.416.416 0 0 0-.72.415l1.997 3.459C2.689 11.187.343 14.659 0 18.761h24c-.344-4.102-2.69-7.574-6.118-9.44" />
    </svg>
  )
}

function AppleIcon({ size = 18 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12.152 6.896c-.948 0-2.415-1.078-3.96-1.04-2.04.027-3.91 1.183-4.961 3.014-2.117 3.675-.546 9.103 1.519 12.09 1.013 1.454 2.208 3.09 3.792 3.039 1.52-.065 2.09-.987 3.935-.987 1.831 0 2.35.987 3.96.948 1.637-.026 2.676-1.48 3.676-2.948 1.156-1.688 1.636-3.325 1.662-3.415-.039-.013-3.182-1.221-3.22-4.857-.026-3.04 2.48-4.494 2.597-4.559-1.429-2.09-3.623-2.324-4.39-2.376-2-.156-3.675 1.09-4.61 1.09zM15.53 3.83c.843-1.012 1.4-2.427 1.245-3.83-1.207.052-2.662.805-3.532 1.818-.78.896-1.454 2.338-1.273 3.714 1.338.104 2.715-.688 3.559-1.701" />
    </svg>
  )
}

// Phone with a download arrow: "tap to install the app"
function InstallAppIcon({ size = 14 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="5" y="2" width="14" height="20" rx="2.5" />
      <path d="M12 7v7" />
      <path d="m9 11.5 3 3 3-3" />
      <path d="M10.5 18.5h3" />
    </svg>
  )
}

const stores = [
  { key: 'android', label: 'Android', sub: 'Get it on Google Play', href: ANDROID_URL, icon: AndroidIcon },
  { key: 'ios', label: 'iOS', sub: IOS_URL ? 'Open the vendor web app' : 'Coming soon', href: IOS_URL, icon: AppleIcon },
]

function StoreOption({ store, onSelect }) {
  const { label, sub, href, icon: Icon } = store
  const base =
    'flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-left transition-colors duration-200'
  const content = (
    <>
      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-gold/10 text-gold">
        <Icon size={18} />
      </span>
      <span className="min-w-0">
        <span className="block font-cinzel text-[12px] uppercase tracking-[0.1em] text-text-primary">
          {label}
        </span>
        <span className="block truncate font-dmsans text-[11px] text-muted">{sub}</span>
      </span>
    </>
  )

  if (!href) {
    return (
      <span role="menuitem" aria-disabled="true" className={`${base} cursor-not-allowed opacity-55`}>
        {content}
      </span>
    )
  }

  return (
    <a
      role="menuitem"
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      onClick={onSelect}
      className={`${base} hover:bg-gold/10 focus-visible:bg-gold/10 focus-visible:outline-none`}
    >
      {content}
    </a>
  )
}

/**
 * "Join as Vendor" button that opens a menu with Android and iOS options.
 * variant="desktop" shows a floating dropdown; variant="mobile" expands inline.
 */
export default function VendorJoinMenu({ variant = 'desktop', onNavigate }) {
  const [open, setOpen] = useState(false)
  const rootRef = useRef(null)
  const menuId = useId()
  const isMobile = variant === 'mobile'

  useEffect(() => {
    if (!open) return
    const onPointer = (e) => {
      if (rootRef.current && !rootRef.current.contains(e.target)) setOpen(false)
    }
    const onKey = (e) => {
      if (e.key === 'Escape') setOpen(false)
    }
    document.addEventListener('mousedown', onPointer)
    document.addEventListener('touchstart', onPointer)
    document.addEventListener('keydown', onKey)
    return () => {
      document.removeEventListener('mousedown', onPointer)
      document.removeEventListener('touchstart', onPointer)
      document.removeEventListener('keydown', onKey)
    }
  }, [open])

  const handleSelect = () => {
    setOpen(false)
    onNavigate?.()
  }

  return (
    <div ref={rootRef} className={`relative ${isMobile ? 'flex flex-col items-center' : ''}`}>
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-haspopup="menu"
        aria-expanded={open}
        aria-controls={menuId}
        className={`group inline-flex items-center font-cinzel uppercase text-gold border rounded-full whitespace-nowrap transition-all duration-300 hover:bg-gold/10 hover:border-gold/60 ${
          open ? 'border-gold/60 bg-gold/10' : 'border-gold/30'
        } ${
          isMobile
            ? 'gap-2 text-sm tracking-[0.12em] py-1.5 pl-1.5 pr-3'
            : 'gap-1.5 text-[13px] tracking-[0.1em] py-1 pl-1 pr-2.5 hover:shadow-[0_6px_20px_-6px_rgba(201,168,76,0.45)]'
        }`}
      >
        <span
          className={`flex items-center justify-center rounded-full bg-linear-to-br from-gold to-gold-light text-surface shadow-[0_0_10px_rgba(232,201,106,0.35)] transition-transform duration-300 group-hover:scale-110 ${
            isMobile ? 'h-6 w-6' : 'h-5 w-5'
          }`}
        >
          <InstallAppIcon size={isMobile ? 13 : 11} />
        </span>
        <span className={`font-cinzel uppercase ${isMobile ? 'text-sm' : 'text-[13px]'}`}>Join as Vendor</span>
        <ChevronDown
          size={isMobile ? 13 : 12}
          className={`transition-transform duration-300 ${open ? 'rotate-180' : ''}`}
        />
      </button>

      <div
        id={menuId}
        role="menu"
        aria-label="Choose your device"
        className={`${
          isMobile
            ? open ? 'vendor-menu-enter mt-3 w-64' : 'hidden'
            : `vendor-menu ${open ? 'vendor-menu-open' : ''} absolute right-0 top-full z-50 mt-3 w-64 origin-top-right`
        } rounded-2xl border border-gold/25 bg-surface/95 p-2 shadow-[0_20px_50px_-12px_rgba(0,0,0,0.8)] backdrop-blur-xl`}
      >
        <p className="px-3 pb-1.5 pt-1 font-cinzel text-[10px] uppercase tracking-[0.2em] text-gold/70">
          Download the vendor app
        </p>
        {stores.map((store) => (
          <StoreOption key={store.key} store={store} onSelect={handleSelect} />
        ))}
      </div>
    </div>
  )
}
