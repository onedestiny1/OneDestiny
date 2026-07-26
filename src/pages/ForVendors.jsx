import { ArrowRight, Store } from 'lucide-react'
import AnimatedSection from '../components/AnimatedSection'
import GoldButton from '../components/GoldButton'

export default function ForVendors() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden">
      <div className="absolute inset-0 bg-bg">
        <div
          className="absolute inset-0"
          style={{
            background:
              'radial-gradient(ellipse at 40% 50%, rgba(139,26,47,0.12) 0%, transparent 60%), radial-gradient(ellipse at 80% 30%, rgba(201,168,76,0.06) 0%, transparent 50%)',
          }}
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-bg via-transparent to-transparent" />

      <div className="container relative z-10 py-32 text-center">
        <AnimatedSection>
          <div className="mx-auto mb-8 flex h-20 w-20 items-center justify-center rounded-full border border-gold/30 bg-surface-2">
            <Store size={36} className="text-gold" />
          </div>
          <span className="mb-4 block font-cinzel text-[11px] uppercase tracking-[0.2em] text-gold">
            For Vendors
          </span>
          <h1 className="mb-6 font-cormorant text-[44px] font-light leading-[1.1] md:text-[56px] lg:text-[64px]">
            Grow Your Business
            <br />
            <em className="text-gold">with OneDestiny</em>
          </h1>
          <p className="mx-auto mb-8 max-w-xl font-dmsans text-lg text-muted">
            Join India's premium event management platform. Register your business today and connect with thousands of customers.
          </p>

          <div className="mx-auto mb-10 grid max-w-2xl grid-cols-1 gap-4 sm:grid-cols-3">
            {[
              { num: '01', text: 'Fill your business details' },
              { num: '02', text: 'Upload your portfolio' },
              { num: '03', text: 'Get reviewed & go live' },
            ].map((s) => (
              <div key={s.num} className="rounded-lg border border-gold/20 bg-surface-2/60 px-5 py-4">
                <p className="mb-1 font-cormorant text-2xl text-gold">{s.num}</p>
                <p className="font-dmsans text-sm text-muted">{s.text}</p>
              </div>
            ))}
          </div>

          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <GoldButton variant="filled" size="lg" to="/vendor-registration">
              Register as Vendor <ArrowRight size={14} />
            </GoldButton>
            <GoldButton variant="outlined" size="lg" to="/contact">
              Have Questions?
            </GoldButton>
          </div>


        </AnimatedSection>
      </div>
    </section>
  )
}
