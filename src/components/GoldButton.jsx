import { Link } from 'react-router-dom'

export default function GoldButton({
  children,
  variant = 'filled',
  size = 'md',
  onClick,
  href,
  to,
  type = 'button',
  className = '',
  ariaLabel,
  disabled = false,
}) {
  const sizeClass = `gold-btn-${size}`
  const variantClass = `gold-btn-${variant}`
  const disabledClass = disabled ? 'opacity-50 pointer-events-none' : ''
  const classes = `gold-btn ${variantClass} ${sizeClass} rounded-lg ${disabledClass} ${className}`

  if (to) {
    return (
      <Link to={to} className={classes} aria-label={ariaLabel}>
        {children}
      </Link>
    )
  }

  if (href) {
    const external = /^https?:\/\//i.test(href)

    return (
      <a
        href={href}
        target={external ? '_blank' : undefined}
        rel={external ? 'noopener noreferrer' : undefined}
        className={classes}
        aria-label={ariaLabel}
      >
        {children}
      </a>
    )
  }

  return (
    <button type={type} onClick={onClick} disabled={disabled} className={classes} aria-label={ariaLabel}>
      {children}
    </button>
  )
}
