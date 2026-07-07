import { useState } from 'react'
import { Mail, Phone } from 'lucide-react'
import AnimatedSection from '../components/AnimatedSection'
import GoldButton from '../components/GoldButton'

function InstagramIcon({ size = 16, className = '' }) {
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

const contactInfo = [
  {
    icon: Phone,
    label: 'WhatsApp',
    value: '6302594826',
    href: 'https://wa.me/916302594826',
    external: true,
  },
  {
    icon: Mail,
    label: 'Email',
    value: 'onedestiny50@gmail.com',
    href: 'mailto:onedestiny50@gmail.com',
    external: false,
  },
  {
    icon: InstagramIcon,
    label: 'Instagram',
    value: '@1onedestiny',
    href: 'https://www.instagram.com/1onedestiny?igsh=ZjFwNWJkaDcwZWww',
    external: true,
  },
]

const messageTypes = ['Customer', 'Vendor', 'Partnership']

export default function Contact() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    messageType: 'Customer',
    message: '',
  })
  const [errors, setErrors] = useState({})
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: '' }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const newErrors = {}

    if (!formData.fullName.trim()) newErrors.fullName = 'Required'
    if (!formData.email.trim()) newErrors.email = 'Required'
    if (!formData.phone.trim()) newErrors.phone = 'Required'
    if (!formData.message.trim()) newErrors.message = 'Required'

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors)
      return
    }

    const text = `*New Enquiry from OneDestiny Website*%0A%0A*Name:* ${formData.fullName}%0A*Email:* ${formData.email}%0A*Phone:* ${formData.phone}%0A*Type:* ${formData.messageType}%0A*Message:* ${formData.message}`
    window.open(`https://wa.me/916302594826?text=${encodeURIComponent(text)}`, '_blank')

    setSubmitted(true)
    setFormData({ fullName: '', email: '', phone: '', messageType: 'Customer', message: '' })
  }

  return (
    <>
      <section className="relative flex min-h-[50vh] items-center overflow-hidden">
        <div className="absolute inset-0 bg-bg">
          <div
            className="absolute inset-0"
            style={{ background: 'radial-gradient(ellipse at 50% 50%, rgba(139,26,47,0.1) 0%, transparent 60%)' }}
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-bg via-transparent to-transparent" />

        <div className="container relative z-10 pb-12 pt-32 text-center sm:pb-16 lg:pb-20">
          <AnimatedSection>
            <span className="mb-4 block font-cinzel text-[11px] uppercase tracking-[0.2em] text-gold">
              Get In Touch
            </span>
            <h1 className="mb-6 font-cormorant text-[44px] font-light leading-[1.1] md:text-[56px] lg:text-[64px]">
              Get In Touch{' '}
              <em className="text-gold">With Us</em>
            </h1>
            <p className="mx-auto max-w-xl font-dmsans text-lg text-muted">
              Have a question about our platform or want to partner with us? We would love to hear from you.
            </p>
          </AnimatedSection>
        </div>
      </section>

      <section className="angled-section bg-surface py-16 lg:py-24">
        <div className="container">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
            <div>
              <AnimatedSection>
                <h2 className="mb-8 font-cormorant text-3xl">Contact Information</h2>
              </AnimatedSection>

              <div className="mb-10 space-y-4">
                {contactInfo.map((info, i) => (
                  <AnimatedSection key={info.label} delay={i * 100}>
                    <div className="rounded-lg border-l-2 border-gold/40 bg-surface-2 p-5 transition-colors hover:border-gold">
                      {info.href ? (
                        <a
                          href={info.href}
                          target={info.external ? '_blank' : undefined}
                          rel={info.external ? 'noopener noreferrer' : undefined}
                          className="group flex items-start gap-4"
                        >
                          <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-maroon/20">
                            <info.icon size={18} className="text-gold" />
                          </div>
                          <div className="min-w-0">
                            <span className="mb-1 block font-cinzel text-[10px] uppercase tracking-[0.1em] text-muted">
                              {info.label}
                            </span>
                            <span className="break-words font-dmsans text-sm text-text-primary transition-colors group-hover:text-gold">
                              {info.value}
                            </span>
                          </div>
                        </a>
                      ) : (
                        <div className="flex items-start gap-4">
                          <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-maroon/20">
                            <info.icon size={18} className="text-gold" />
                          </div>
                          <div>
                            <span className="mb-1 block font-cinzel text-[10px] uppercase tracking-[0.1em] text-muted">
                              {info.label}
                            </span>
                            <span className="font-dmsans text-sm text-text-primary">{info.value}</span>
                          </div>
                        </div>
                      )}
                    </div>
                  </AnimatedSection>
                ))}
              </div>

              <AnimatedSection delay={500}>
                <h3 className="mb-4 font-cinzel text-xs uppercase tracking-[0.1em] text-gold">
                  Follow Us
                </h3>
                <a
                  href="https://www.instagram.com/1onedestiny?igsh=ZjFwNWJkaDcwZWww"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block rounded-lg border border-gold/20 bg-surface-2 p-6 transition-colors hover:border-gold/50"
                >
                  <div className="flex items-center gap-4">
                    <div className="flex h-14 w-14 items-center justify-center rounded-lg bg-gradient-to-br from-maroon to-maroon-light">
                      <InstagramIcon size={24} className="text-text-primary" />
                    </div>
                    <div>
                      <p className="font-dmsans font-medium text-text-primary transition-colors group-hover:text-gold">
                        @1onedestiny
                      </p>
                      <p className="font-dmsans text-xs text-muted">
                        Follow for wedding inspiration
                      </p>
                    </div>
                  </div>
                </a>
              </AnimatedSection>
            </div>

            <div>
              <AnimatedSection delay={200}>
                <h2 className="mb-8 font-cormorant text-3xl">Send Us a Message</h2>
              </AnimatedSection>

              {submitted ? (
                <AnimatedSection>
                  <div className="rounded-lg border border-gold/20 bg-surface-2 p-12 text-center">
                    <div className="mb-4 text-5xl">&#127882;</div>
                    <h3 className="mb-3 font-cormorant text-3xl">Thank You</h3>
                    <p className="mb-6 font-dmsans text-muted">
                      We'll reach out within 24 hours.
                    </p>
                    <GoldButton variant="outlined" size="md" onClick={() => setSubmitted(false)}>
                      Send Another Message
                    </GoldButton>
                  </div>
                </AnimatedSection>
              ) : (
                <AnimatedSection delay={300}>
                  <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                    <div>
                      <label className="form-label" htmlFor="fullName">Full Name</label>
                      <input
                        id="fullName"
                        type="text"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleChange}
                        placeholder="Your full name"
                        className={`form-input ${errors.fullName ? 'error' : ''}`}
                      />
                    </div>

                    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                      <div>
                        <label className="form-label" htmlFor="email">Email</label>
                        <input
                          id="email"
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="you@example.com"
                          className={`form-input ${errors.email ? 'error' : ''}`}
                        />
                      </div>
                      <div>
                        <label className="form-label" htmlFor="phone">Phone Number</label>
                        <input
                          id="phone"
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="+91 XXXXX XXXXX"
                          className={`form-input ${errors.phone ? 'error' : ''}`}
                        />
                      </div>
                    </div>

                    <div>
                      <span className="form-label">Message Type</span>
                      <div className="flex flex-wrap gap-4">
                        {messageTypes.map((type) => (
                          <label key={type} className="group flex cursor-pointer items-center gap-2">
                            <span
                              className={`flex h-4 w-4 items-center justify-center rounded-full border-2 transition-colors ${
                                formData.messageType === type
                                  ? 'border-gold bg-gold'
                                  : 'border-muted group-hover:border-gold/50'
                              }`}
                            >
                              {formData.messageType === type && <span className="h-1.5 w-1.5 rounded-full bg-bg" />}
                            </span>
                            <input
                              type="radio"
                              name="messageType"
                              value={type}
                              checked={formData.messageType === type}
                              onChange={handleChange}
                              className="sr-only"
                            />
                            <span className="font-dmsans text-sm text-muted transition-colors group-hover:text-text-primary">
                              {type}
                            </span>
                          </label>
                        ))}
                      </div>
                    </div>

                    <div>
                      <label className="form-label" htmlFor="message">Message</label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Tell us how we can help you..."
                        rows={5}
                        className={`form-input resize-none ${errors.message ? 'error' : ''}`}
                      />
                    </div>

                    <GoldButton variant="filled" size="lg" type="submit" className="w-full">
                      Send Message
                    </GoldButton>
                  </form>
                </AnimatedSection>
              )}
            </div>
          </div>
        </div>
      </section>

      <section
        className="angled-section relative overflow-hidden py-16 lg:py-24"
        style={{ background: 'linear-gradient(135deg, var(--clr-maroon) 0%, var(--clr-surface) 100%)' }}
      >
        <div className="absolute left-0 right-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-gold/30 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-gold/30 to-transparent" />

        <div className="container relative z-10 max-w-[800px] text-center">
          <AnimatedSection>
            <span className="mb-4 block font-cinzel text-[11px] uppercase tracking-[0.2em] text-gold">
              About Us
            </span>
            <h2 className="mb-6 font-cormorant text-3xl font-light italic md:text-4xl">
              Our Mission
            </h2>
            <p className="mb-6 font-dmsans leading-relaxed text-text-primary/80">
              OneDestiny was founded with one mission: to make wedding planning effortless for every Indian couple.
              Every love story deserves the perfect celebration, and finding the right vendors should feel clear,
              curated, and joyful.
            </p>
            <p className="font-dmsans text-sm text-muted">
              Based in <span className="text-gold">Karimnagar, Telangana</span>.
            </p>
          </AnimatedSection>
        </div>
      </section>
    </>
  )
}
