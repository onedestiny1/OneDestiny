import { useEffect, useRef, useState } from 'react'
import {
  AlertCircle,
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  Loader2,
  ShieldCheck,
} from 'lucide-react'
import AnimatedSection from '../components/AnimatedSection'
import GoldButton from '../components/GoldButton'
import MediaUploader from '../components/vendor/MediaUploader'
import {
  createRegistration,
  fetchCategories,
  getRegistration,
  submitRegistration,
} from '../lib/vendorApi'

const STEP_TITLES = [
  'Basic Information',
  'Business Category',
  'Pricing',
  'Availability',
  'Verification Details',
  'Business Profile',
  'Reviews & Declaration',
]

const emptyMedia = {
  ProfilePhoto: [],
  CoverImage: [],
  PortfolioPhoto: [],
  PortfolioVideo: [],
  IdProofDocument: [],
  BusinessRegistrationDocument: [],
}

const initialFormData = {
  businessName: '',
  ownerName: '',
  mobileNumber: '',
  whatsAppNumber: '',
  email: '',
  businessAddress: '',
  city: '',
  state: '',
  googleMapsLocation: '',
  gstNumber: '',
  categoryId: '',
  servicesOffered: '',
  yearsOfExperience: '',
  teamSize: '',
  instagramUrl: '',
  facebookUrl: '',
  websiteUrl: '',
  startingPrice: '',
  packageDetails: '',
  travelCharges: '',
  serviceAreas: '',
  outstationServices: false,
  minimumBookingNoticeDays: '',
  aadhaarOrPanNumber: '',
  bankAccountHolderName: '',
  bankAccountNumber: '',
  bankIfscCode: '',
  bankName: '',
  businessDescription: '',
  languagesSpoken: '',
  workingHours: '',
  googleReviewLink: '',
  clientTestimonials: '',
  infoAccurateConfirmed: false,
  displayPermissionGranted: false,
  termsAccepted: false,
}

const DUMMY_DATA = {
  businessName: 'Sunrise Photography Studio',
  ownerName: 'Ravi Kumar',
  mobileNumber: '+919876543210',
  whatsAppNumber: '+919876543210',
  email: 'ravi@sunrisephoto.in',
  businessAddress: '12 MG Road, Banjara Hills',
  city: 'Hyderabad',
  state: 'Telangana',
  googleMapsLocation: 'https://maps.app.goo.gl/xyz',
  gstNumber: '36ABCDE1234F1Z5',
  categoryId: '',
  servicesOffered: 'Candid Photography, Cinematic Video, Pre-wedding Shoots',
  yearsOfExperience: '8',
  teamSize: '6',
  instagramUrl: 'https://instagram.com/sunrisephoto',
  facebookUrl: 'https://facebook.com/sunrisephoto',
  websiteUrl: 'https://sunrisephoto.in',
  startingPrice: '25000',
  packageDetails: 'Basic: ₹25k (1 day) | Premium: ₹60k (3 days, album incl.)',
  travelCharges: 'Free within 50km, ₹10/km beyond',
  serviceAreas: 'Hyderabad, Secunderabad, Warangal',
  outstationServices: true,
  minimumBookingNoticeDays: '15',
  aadhaarOrPanNumber: 'ABCDE1234F',
  bankAccountHolderName: 'Ravi Kumar',
  bankAccountNumber: '1234567890',
  bankIfscCode: 'HDFC0001234',
  bankName: 'HDFC Bank',
  businessDescription: 'We are a team of passionate photographers based in Hyderabad with over 8 years of experience capturing weddings and events. Our cinematic approach blends candid moments with artistic storytelling.',
  languagesSpoken: 'English, Hindi, Telugu',
  workingHours: 'Mon-Sat, 10am-7pm',
  googleReviewLink: 'https://g.page/r/xyz',
  clientTestimonials: '"Amazing team, captured every moment perfectly!" - Priya & Arjun',
  infoAccurateConfirmed: true,
  displayPermissionGranted: true,
  termsAccepted: true,
}

function buildPayload(formData) {
  const num = (v) => (v !== '' && v !== null && v !== undefined ? Number(v) : undefined)
  const str = (v) => (v && v.trim() ? v.trim() : undefined)

  return {
    businessName: formData.businessName.trim(),
    ownerName: formData.ownerName.trim(),
    mobileNumber: formData.mobileNumber.trim(),
    whatsAppNumber: str(formData.whatsAppNumber),
    email: str(formData.email),
    businessAddress: str(formData.businessAddress),
    city: formData.city.trim(),
    state: str(formData.state),
    googleMapsLocation: str(formData.googleMapsLocation),
    gstNumber: str(formData.gstNumber),
    categoryId: num(formData.categoryId),
    servicesOffered: str(formData.servicesOffered),
    yearsOfExperience: num(formData.yearsOfExperience),
    teamSize: num(formData.teamSize),
    instagramUrl: str(formData.instagramUrl),
    facebookUrl: str(formData.facebookUrl),
    websiteUrl: str(formData.websiteUrl),
    startingPrice: num(formData.startingPrice),
    packageDetails: str(formData.packageDetails),
    travelCharges: str(formData.travelCharges),
    serviceAreas: str(formData.serviceAreas),
    outstationServices: !!formData.outstationServices,
    minimumBookingNoticeDays: num(formData.minimumBookingNoticeDays),
    aadhaarOrPanNumber: str(formData.aadhaarOrPanNumber),
    bankAccountHolderName: str(formData.bankAccountHolderName),
    bankAccountNumber: str(formData.bankAccountNumber),
    bankIfscCode: str(formData.bankIfscCode),
    bankName: str(formData.bankName),
    businessDescription: formData.businessDescription.trim(),
    languagesSpoken: str(formData.languagesSpoken),
    workingHours: str(formData.workingHours),
    googleReviewLink: str(formData.googleReviewLink),
    clientTestimonials: str(formData.clientTestimonials),
    infoAccurateConfirmed: !!formData.infoAccurateConfirmed,
    displayPermissionGranted: !!formData.displayPermissionGranted,
    termsAccepted: !!formData.termsAccepted,
  }
}

function validateStep(step, formData) {
  const errors = {}
  if (step === 0) {
    if (!formData.businessName.trim()) errors.businessName = 'Required'
    if (!formData.ownerName.trim()) errors.ownerName = 'Required'
    if (!formData.mobileNumber.trim()) {
      errors.mobileNumber = 'Required'
    } else if (!/^[+]?[0-9]{10,13}$/.test(formData.mobileNumber.replace(/\s/g, ''))) {
      errors.mobileNumber = 'Enter a valid mobile number'
    }
    if (!formData.city.trim()) errors.city = 'Required'
  } else if (step === 1) {
    if (!formData.categoryId) errors.categoryId = 'Please choose a category'
  } else if (step === 2) {
    if (!formData.startingPrice || Number(formData.startingPrice) <= 0) {
      errors.startingPrice = 'Enter a valid starting price'
    }
  } else if (step === 5) {
    if (!formData.businessDescription.trim()) errors.businessDescription = 'Required'
    else if (formData.businessDescription.trim().length < 30) errors.businessDescription = 'Must be at least 30 characters'
  } else if (step === 6) {
    if (!formData.infoAccurateConfirmed) errors.infoAccurateConfirmed = 'Required'
    if (!formData.displayPermissionGranted) errors.displayPermissionGranted = 'Required'
    if (!formData.termsAccepted) errors.termsAccepted = 'Required'
  }
  return errors
}

function mediaFromList(list) {
  const grouped = { ...emptyMedia }
  for (const key of Object.keys(grouped)) grouped[key] = []
  for (const item of list || []) {
    if (!grouped[item.mediaType]) grouped[item.mediaType] = []
    grouped[item.mediaType].push({ id: item.id, url: item.url })
  }
  return grouped
}

function TextField({ label, name, value, onChange, type = 'text', placeholder, required, hint, error }) {
  return (
    <div>
      <label className="form-label" htmlFor={name}>
        {label}
        {required && <span className="text-maroon-light"> *</span>}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={`form-input ${error ? 'error' : ''}`}
      />
      {hint && <p className="mt-1 font-dmsans text-[11px] text-muted">{hint}</p>}
      {error && <p className="mt-1 font-dmsans text-xs text-maroon-light">{error}</p>}
    </div>
  )
}

function TextAreaField({ label, name, value, onChange, placeholder, required, hint, error, rows = 4 }) {
  return (
    <div>
      <label className="form-label" htmlFor={name}>
        {label}
        {required && <span className="text-maroon-light"> *</span>}
      </label>
      <textarea
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        rows={rows}
        className={`form-input resize-none ${error ? 'error' : ''}`}
      />
      {hint && <p className="mt-1 font-dmsans text-[11px] text-muted">{hint}</p>}
      {error && <p className="mt-1 font-dmsans text-xs text-maroon-light">{error}</p>}
    </div>
  )
}

function CheckboxField({ label, name, checked, onChange, error }) {
  return (
    <div>
      <label className="flex cursor-pointer items-start gap-3">
        <input
          type="checkbox"
          name={name}
          checked={checked}
          onChange={onChange}
          className="mt-1 h-4 w-4 flex-shrink-0 accent-gold"
        />
        <span className="font-dmsans text-sm text-text-primary">{label}</span>
      </label>
      {error && <p className="mt-1 pl-7 font-dmsans text-xs text-maroon-light">{error}</p>}
    </div>
  )
}

function StepBasicInfo({ formData, handleChange, errors }) {
  return (
    <div className="space-y-5">
      <TextField label="Business Name" name="businessName" value={formData.businessName} onChange={handleChange} placeholder="Sunrise Photography Studio" required error={errors.businessName} />
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <TextField label="Owner Name" name="ownerName" value={formData.ownerName} onChange={handleChange} placeholder="Your full name" required error={errors.ownerName} />
        <TextField label="Mobile Number" name="mobileNumber" type="tel" value={formData.mobileNumber} onChange={handleChange} placeholder="+91 XXXXX XXXXX" required error={errors.mobileNumber} />
      </div>
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <TextField label="WhatsApp Number" name="whatsAppNumber" type="tel" value={formData.whatsAppNumber} onChange={handleChange} placeholder="Leave blank if same as mobile" hint="Optional — omit if same as mobile number" />
        <TextField label="Email" name="email" type="email" value={formData.email} onChange={handleChange} placeholder="you@example.com" />
      </div>
      <TextField label="Business Address" name="businessAddress" value={formData.businessAddress} onChange={handleChange} placeholder="12 MG Road" />
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <TextField label="City" name="city" value={formData.city} onChange={handleChange} placeholder="Pune" required error={errors.city} />
        <TextField label="State" name="state" value={formData.state} onChange={handleChange} placeholder="Maharashtra" />
      </div>
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <TextField label="Google Maps Location" name="googleMapsLocation" value={formData.googleMapsLocation} onChange={handleChange} placeholder="https://maps.app.goo.gl/..." />
        <TextField label="GST Number" name="gstNumber" value={formData.gstNumber} onChange={handleChange} placeholder="27ABCDE1234F1Z5" />
      </div>
    </div>
  )
}

function StepCategory({ formData, handleChange, errors, categories, categoriesError }) {
  return (
    <div className="space-y-5">
      <div>
        <label className="form-label" htmlFor="categoryId">
          Business Category<span className="text-maroon-light"> *</span>
        </label>
        {categoriesError ? (
          <>
            <input
              id="categoryId"
              name="categoryId"
              type="number"
              value={formData.categoryId}
              onChange={handleChange}
              placeholder="Enter Category ID"
              className={`form-input ${errors.categoryId ? 'error' : ''}`}
            />
            <p className="mt-1 font-dmsans text-[11px] text-maroon-light">
              Couldn't load the category list ({categoriesError}). Enter the numeric Category ID your OneDestiny contact gave you.
            </p>
          </>
        ) : (
          <select
            id="categoryId"
            name="categoryId"
            value={formData.categoryId}
            onChange={handleChange}
            className={`form-input ${errors.categoryId ? 'error' : ''}`}
          >
            <option value="">{categories.length ? 'Select a category' : 'Loading categories…'}</option>
            {categories.map((c) => (
              <option key={c.id} value={c.id}>
                {c.name}
              </option>
            ))}
          </select>
        )}
        {errors.categoryId && <p className="mt-1 font-dmsans text-xs text-maroon-light">{errors.categoryId}</p>}
      </div>
      <TextField
        label="Services Offered"
        name="servicesOffered"
        value={formData.servicesOffered}
        onChange={handleChange}
        placeholder="Candid Photography, Cinematic Video, Pre-wedding Shoots"
        hint="Comma-separated"
      />
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <TextField label="Years of Experience" name="yearsOfExperience" type="number" value={formData.yearsOfExperience} onChange={handleChange} placeholder="8" />
        <TextField label="Team Size" name="teamSize" type="number" value={formData.teamSize} onChange={handleChange} placeholder="6" />
      </div>
    </div>
  )
}

function StepPricing({ formData, handleChange, errors }) {
  return (
    <div className="space-y-5">
      <TextField
        label="Starting Price (₹)"
        name="startingPrice"
        type="number"
        value={formData.startingPrice}
        onChange={handleChange}
        placeholder="25000"
        required
        error={errors.startingPrice}
      />
      <TextAreaField
        label="Package Details"
        name="packageDetails"
        value={formData.packageDetails}
        onChange={handleChange}
        placeholder="Basic: 25k (1 day) | Premium: 60k (3 days, album incl.)"
        rows={3}
      />
      <TextField label="Travel Charges" name="travelCharges" value={formData.travelCharges} onChange={handleChange} placeholder="Free within 50km, ₹10/km beyond" />
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <TextField label="Instagram URL" name="instagramUrl" value={formData.instagramUrl} onChange={handleChange} placeholder="https://instagram.com/..." />
        <TextField label="Facebook URL" name="facebookUrl" value={formData.facebookUrl} onChange={handleChange} placeholder="https://facebook.com/..." />
      </div>
      <TextField label="Website URL" name="websiteUrl" value={formData.websiteUrl} onChange={handleChange} placeholder="https://yourbusiness.in" />
    </div>
  )
}

function StepAvailability({ formData, handleChange }) {
  return (
    <div className="space-y-5">
      <TextField
        label="Service Areas"
        name="serviceAreas"
        value={formData.serviceAreas}
        onChange={handleChange}
        placeholder="Pune, Mumbai, Nashik"
        hint="Comma-separated"
      />
      <CheckboxField
        label="We offer outstation services"
        name="outstationServices"
        checked={formData.outstationServices}
        onChange={handleChange}
      />
      <TextField
        label="Minimum Booking Notice (days)"
        name="minimumBookingNoticeDays"
        type="number"
        value={formData.minimumBookingNoticeDays}
        onChange={handleChange}
        placeholder="15"
      />
    </div>
  )
}

function StepVerification({ formData, handleChange }) {
  return (
    <div className="space-y-5">
      <p className="rounded-lg border border-gold/20 bg-surface-2/60 p-4 font-dmsans text-xs leading-relaxed text-muted">
        These details are kept private — they are never shown publicly, and this page never displays them back to you once saved.
      </p>
      <TextField label="Aadhaar / PAN Number" name="aadhaarOrPanNumber" value={formData.aadhaarOrPanNumber} onChange={handleChange} placeholder="ABCDE1234F" />
      <TextField label="Bank Account Holder Name" name="bankAccountHolderName" value={formData.bankAccountHolderName} onChange={handleChange} placeholder="Ravi Kumar" />
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <TextField label="Bank Account Number" name="bankAccountNumber" value={formData.bankAccountNumber} onChange={handleChange} placeholder="1234567890" />
        <TextField label="Bank IFSC Code" name="bankIfscCode" value={formData.bankIfscCode} onChange={handleChange} placeholder="HDFC0001234" />
      </div>
      <TextField label="Bank Name" name="bankName" value={formData.bankName} onChange={handleChange} placeholder="HDFC Bank" />
    </div>
  )
}

function StepProfile({ formData, handleChange, errors }) {
  return (
    <div className="space-y-5">
      <TextAreaField
        label="Business Description"
        name="businessDescription"
        value={formData.businessDescription}
        onChange={handleChange}
        placeholder="We are a team of passionate wedding photographers based in Pune with over 8 years of experience..."
        required
        error={errors.businessDescription}
        hint={`Minimum 30 characters${formData.businessDescription.trim().length > 0 ? ` (${formData.businessDescription.trim().length} typed)` : ''}`}
        rows={5}
      />
      <TextField label="Languages Spoken" name="languagesSpoken" value={formData.languagesSpoken} onChange={handleChange} placeholder="English, Hindi, Marathi" hint="Comma-separated" />
      <TextField label="Working Hours" name="workingHours" value={formData.workingHours} onChange={handleChange} placeholder="Mon-Sat, 10am-7pm" />
    </div>
  )
}

function StepSocialDeclaration({ formData, handleChange, errors }) {
  return (
    <div className="space-y-5">
      <TextField label="Google Review Link" name="googleReviewLink" value={formData.googleReviewLink} onChange={handleChange} placeholder="https://g.page/r/xyz" />
      <TextAreaField
        label="Client Testimonials"
        name="clientTestimonials"
        value={formData.clientTestimonials}
        onChange={handleChange}
        placeholder='"Amazing team, captured every moment perfectly!" - Priya & Arjun'
        rows={3}
      />
      <div className="space-y-4 rounded-lg border border-gold/20 bg-surface-2/60 p-5">
        <span className="form-label mb-0">Declaration</span>
        <CheckboxField
          label="I confirm the information provided is accurate."
          name="infoAccurateConfirmed"
          checked={formData.infoAccurateConfirmed}
          onChange={handleChange}
          error={errors.infoAccurateConfirmed}
        />
        <CheckboxField
          label="I grant OneDestiny permission to display this information publicly."
          name="displayPermissionGranted"
          checked={formData.displayPermissionGranted}
          onChange={handleChange}
          error={errors.displayPermissionGranted}
        />
        <CheckboxField
          label="I accept the OneDestiny terms & conditions."
          name="termsAccepted"
          checked={formData.termsAccepted}
          onChange={handleChange}
          error={errors.termsAccepted}
        />
      </div>
    </div>
  )
}

const stepComponents = [
  StepBasicInfo,
  StepCategory,
  StepPricing,
  StepAvailability,
  StepVerification,
  StepProfile,
  StepSocialDeclaration,
]

function Hero() {
  return (
    <section className="relative flex min-h-[42vh] items-center overflow-hidden">
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
            Become a Vendor
          </span>
          <h1 className="mb-6 font-cormorant text-[44px] font-light leading-[1.1] md:text-[56px] lg:text-[64px]">
            Vendor <em className="text-gold">Registration</em>
          </h1>
          <p className="mx-auto max-w-xl font-dmsans text-lg text-muted">
            Tell us about your business and we'll review your application before onboarding you onto the platform.
          </p>
        </AnimatedSection>
      </div>
    </section>
  )
}

export default function VendorRegister() {
  const [phase, setPhase] = useState('form')
  const [stepIndex, setStepIndex] = useState(0)
  const [formData, setFormData] = useState(initialFormData)
  const [errors, setErrors] = useState({})

  const [categories, setCategories] = useState([])
  const [categoriesError, setCategoriesError] = useState('')

  const [referenceCode, setReferenceCode] = useState(null)
  const [creating, setCreating] = useState(false)
  const [createError, setCreateError] = useState('')

  const [media, setMedia] = useState(emptyMedia)

  const [reviewLoading, setReviewLoading] = useState(false)
  const [reviewError, setReviewError] = useState('')

  const [submitting, setSubmitting] = useState(false)
  const [submitError, setSubmitError] = useState('')
  const [submitErrorList, setSubmitErrorList] = useState([])
  const [doneMessage, setDoneMessage] = useState('')

  const [showResume, setShowResume] = useState(false)
  const [resumeCodeInput, setResumeCodeInput] = useState('')
  const [resumeError, setResumeError] = useState('')
  const [resumeLoading, setResumeLoading] = useState(false)

  useEffect(() => {
    fetchCategories()
      .then(setCategories)
      .catch((err) => setCategoriesError(err.message))
  }, [])

  const topRef = useRef(null)
  const didMountRef = useRef(false)

  useEffect(() => {
    if (!didMountRef.current) {
      didMountRef.current = true
      return
    }
    const el = topRef.current
    if (!el) return
    const navbarOffset = 100
    const targetY = window.scrollY + el.getBoundingClientRect().top - navbarOffset
    window.scrollTo({ top: Math.max(targetY, 0), behavior: 'smooth' })
  }, [phase, stepIndex])

  async function hydrateFromServer(code) {
    const data = await getRegistration(code)
    setReferenceCode(code)
    setFormData((prev) => ({
      ...prev,
      businessName: data.businessName ?? '',
      ownerName: data.ownerName ?? '',
      mobileNumber: data.mobileNumber ?? '',
      whatsAppNumber: data.whatsAppNumber ?? '',
      email: data.email ?? '',
      businessAddress: data.businessAddress ?? '',
      city: data.city ?? '',
      state: data.state ?? '',
      googleMapsLocation: data.googleMapsLocation ?? '',
      gstNumber: data.gstNumber ?? '',
      categoryId: data.categoryId ? Number(data.categoryId) : '',
      servicesOffered: data.servicesOffered ?? '',
      yearsOfExperience: data.yearsOfExperience ?? '',
      teamSize: data.teamSize ?? '',
      instagramUrl: data.instagramUrl ?? '',
      facebookUrl: data.facebookUrl ?? '',
      websiteUrl: data.websiteUrl ?? '',
      startingPrice: data.startingPrice ?? '',
      packageDetails: data.packageDetails ?? '',
      travelCharges: data.travelCharges ?? '',
      serviceAreas: data.serviceAreas ?? '',
      outstationServices: !!data.outstationServices,
      minimumBookingNoticeDays: data.minimumBookingNoticeDays ?? '',
      businessDescription: data.businessDescription ?? '',
      languagesSpoken: data.languagesSpoken ?? '',
      workingHours: data.workingHours ?? '',
      googleReviewLink: data.googleReviewLink ?? '',
      clientTestimonials: data.clientTestimonials ?? '',
      infoAccurateConfirmed: !!data.infoAccurateConfirmed,
      displayPermissionGranted: !!data.displayPermissionGranted,
      termsAccepted: !!data.termsAccepted,
    }))
    setMedia(mediaFromList(data.media))

    if (data.status === 'Submitted') {
      setDoneMessage('This registration has already been submitted and is under review.')
      setPhase('submitted')
    } else {
      setPhase('media')
    }
    return data
  }

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    setFormData((prev) => ({ ...prev, [name]: type === 'checkbox' ? checked : value }))
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: '' }))
  }

  const goBack = () => {
    if (stepIndex > 0) setStepIndex((i) => i - 1)
  }

  const goNext = async (e) => {
    e.preventDefault()
    const stepErrors = validateStep(stepIndex, formData)
    if (Object.keys(stepErrors).length > 0) {
      setErrors(stepErrors)
      return
    }
    setErrors({})

    if (stepIndex < STEP_TITLES.length - 1) {
      setStepIndex((i) => i + 1)
      return
    }

    setCreating(true)
    setCreateError('')
    try {
      const payload = buildPayload(formData)
      const data = await createRegistration(payload)
      setReferenceCode(data.referenceCode)
      setPhase('media')
    } catch (err) {
      setCreateError([err.message, ...(err.errors || [])].filter(Boolean).join(' '))
    } finally {
      setCreating(false)
    }
  }

  const handleResume = async () => {
    if (!resumeCodeInput.trim()) return
    setResumeLoading(true)
    setResumeError('')
    try {
      await hydrateFromServer(resumeCodeInput.trim())
    } catch (err) {
      setResumeError(err.message || 'Could not find that reference code.')
    } finally {
      setResumeLoading(false)
    }
  }

  const addMedia = (mediaType) => (item) => {
    setMedia((prev) => {
      const single = ['ProfilePhoto', 'CoverImage', 'IdProofDocument', 'BusinessRegistrationDocument'].includes(mediaType)
      return { ...prev, [mediaType]: single ? [item] : [...prev[mediaType], item] }
    })
  }

  const removeMedia = (mediaType) => (id) => {
    setMedia((prev) => ({ ...prev, [mediaType]: prev[mediaType].filter((m) => m.id !== id) }))
  }

  const profileMet = media.ProfilePhoto.length >= 1
  const portfolioMet = media.PortfolioPhoto.length >= 5
  const mediaRequirementsMet = profileMet && portfolioMet

  const enterReview = async () => {
    setPhase('review')
    setReviewLoading(true)
    setReviewError('')
    try {
      const data = await getRegistration(referenceCode)
      setMedia(mediaFromList(data.media))
    } catch (err) {
      setReviewError(err.message)
    } finally {
      setReviewLoading(false)
    }
  }

  const handleSubmit = async () => {
    setSubmitting(true)
    setSubmitError('')
    setSubmitErrorList([])
    try {
      const res = await submitRegistration(referenceCode)
      setDoneMessage(res.message || 'Thank you! Your registration has been submitted and is now under review.')
      setPhase('done')
    } catch (err) {
      if (err.status === 409) {
        setDoneMessage('This registration has already been submitted and is now under review.')
        setPhase('done')
      } else {
        setSubmitError(err.message || 'Registration is incomplete.')
        setSubmitErrorList(err.errors || [])
      }
    } finally {
      setSubmitting(false)
    }
  }

  const startOver = () => {
    setFormData(initialFormData)
    setMedia(emptyMedia)
    setReferenceCode(null)
    setDoneMessage('')
    setStepIndex(0)
    setPhase('form')
  }

  const categoryName = categories.find((c) => String(c.id) === String(formData.categoryId))?.name

  return (
    <>
      <Hero />

      <section className="angled-section bg-surface py-16 lg:py-24">
        <div ref={topRef} className="container max-w-[720px]">
          {phase === 'form' && (
            <AnimatedSection>
              {stepIndex === 0 && (
                <div className="mb-8 text-center">
                  <button
                    type="button"
                    onClick={() => setShowResume((s) => !s)}
                    className="font-dmsans text-xs text-muted underline-offset-4 hover:text-gold hover:underline"
                  >
                    Already started your registration? Resume with your reference code
                  </button>
                  {showResume && (
                    <div className="mx-auto mt-4 flex max-w-md flex-col gap-3 sm:flex-row">
                      <input
                        type="text"
                        value={resumeCodeInput}
                        onChange={(e) => setResumeCodeInput(e.target.value)}
                        placeholder="Paste your reference code"
                        className="form-input"
                      />
                      <GoldButton variant="outlined" size="md" onClick={handleResume} disabled={resumeLoading}>
                        {resumeLoading ? <Loader2 size={14} className="animate-spin" /> : 'Resume'}
                      </GoldButton>
                    </div>
                  )}
                  {resumeError && <p className="mt-2 font-dmsans text-xs text-maroon-light">{resumeError}</p>}
                </div>
              )}

<div className="mb-8">
                <div className="mb-2 flex items-center justify-between">
                  <span className="font-cinzel text-[11px] uppercase tracking-[0.15em] text-gold">
                    Step {stepIndex + 1} of {STEP_TITLES.length}
                  </span>
                  <span className="font-dmsans text-xs text-muted">{STEP_TITLES[stepIndex]}</span>
                </div>
                <div className="h-1 w-full overflow-hidden rounded-full bg-surface-2">
                  <div
                    className="h-full rounded-full bg-gradient-to-r from-maroon to-gold transition-all duration-300"
                    style={{ width: `${((stepIndex + 1) / STEP_TITLES.length) * 100}%` }}
                  />
                </div>
              </div>

              <h2 className="mb-6 font-cormorant text-2xl">{STEP_TITLES[stepIndex]}</h2>

              <form onSubmit={goNext} noValidate>
                {(() => {
                  const StepComponent = stepComponents[stepIndex]
                  return (
                    <StepComponent
                      formData={formData}
                      handleChange={handleChange}
                      errors={errors}
                      categories={categories}
                      categoriesError={categoriesError}
                    />
                  )
                })()}

                {createError && (
                  <div className="mt-5 flex items-start gap-2 rounded-lg border border-maroon-light/40 bg-maroon/10 p-4">
                    <AlertCircle size={16} className="mt-0.5 flex-shrink-0 text-maroon-light" />
                    <p className="font-dmsans text-xs text-text-primary">{createError}</p>
                  </div>
                )}

                <div className="mt-8 flex items-center justify-between gap-4">
                  <GoldButton
                    type="button"
                    variant="outlined"
                    size="md"
                    onClick={goBack}
                    disabled={stepIndex === 0}
                    className={stepIndex === 0 ? 'invisible' : ''}
                  >
                    <ArrowLeft size={14} /> Back
                  </GoldButton>
                  <GoldButton type="submit" variant="filled" size="md" disabled={creating}>
                    {creating ? (
                      <>
                        <Loader2 size={14} className="animate-spin" /> Saving…
                      </>
                    ) : stepIndex === STEP_TITLES.length - 1 ? (
                      'Create Registration'
                    ) : (
                      <>
                        Next <ArrowRight size={14} />
                      </>
                    )}
                  </GoldButton>
                </div>
              </form>
            </AnimatedSection>
          )}

          {phase === 'media' && (
            <AnimatedSection>
              <h2 className="mb-2 font-cormorant text-2xl">Portfolio & Documents</h2>
              <p className="mb-8 font-dmsans text-sm text-muted">
                Reference code <span className="text-gold">{referenceCode}</span> — please save this code yourself (we don't store it on your device). You'll need it to resume if you leave this page.
              </p>

              <div className="space-y-8">
                <MediaUploader
                  referenceCode={referenceCode}
                  mediaType="ProfilePhoto"
                  label="Profile Photo / Logo"
                  hint="Your business's main display photo."
                  accept="image/jpeg,image/png,image/webp"
                  allowedTypesLabel="JPEG, PNG, WebP"
                  maxSizeMB={10}
                  kind="image"
                  min={1}
                  max={1}
                  required
                  items={media.ProfilePhoto}
                  onAdd={addMedia('ProfilePhoto')}
                  onRemove={removeMedia('ProfilePhoto')}
                />

                <MediaUploader
                  referenceCode={referenceCode}
                  mediaType="CoverImage"
                  label="Cover Image"
                  hint="Optional banner image for your profile."
                  accept="image/jpeg,image/png,image/webp"
                  allowedTypesLabel="JPEG, PNG, WebP"
                  maxSizeMB={10}
                  kind="image"
                  max={1}
                  items={media.CoverImage}
                  onAdd={addMedia('CoverImage')}
                  onRemove={removeMedia('CoverImage')}
                />

                <MediaUploader
                  referenceCode={referenceCode}
                  mediaType="PortfolioPhoto"
                  label="Portfolio Photos"
                  hint="Add 5–20 photos that showcase your best work."
                  accept="image/jpeg,image/png,image/webp"
                  allowedTypesLabel="JPEG, PNG, WebP"
                  maxSizeMB={10}
                  kind="image"
                  multiple
                  min={5}
                  max={20}
                  required
                  items={media.PortfolioPhoto}
                  onAdd={addMedia('PortfolioPhoto')}
                  onRemove={removeMedia('PortfolioPhoto')}
                />

                <MediaUploader
                  referenceCode={referenceCode}
                  mediaType="PortfolioVideo"
                  label="Portfolio Videos"
                  hint="Optional — up to 5 videos."
                  accept="video/mp4,video/quicktime,video/x-msvideo"
                  allowedTypesLabel="MP4, MOV, AVI"
                  maxSizeMB={200}
                  kind="video"
                  multiple
                  max={5}
                  items={media.PortfolioVideo}
                  onAdd={addMedia('PortfolioVideo')}
                  onRemove={removeMedia('PortfolioVideo')}
                />

                <MediaUploader
                  referenceCode={referenceCode}
                  mediaType="IdProofDocument"
                  label="ID Proof Document"
                  hint="Optional — Aadhaar or PAN scan."
                  accept="image/jpeg,image/png,image/webp,application/pdf"
                  allowedTypesLabel="JPEG, PNG, WebP, PDF"
                  maxSizeMB={15}
                  kind="document"
                  max={1}
                  items={media.IdProofDocument}
                  onAdd={addMedia('IdProofDocument')}
                  onRemove={removeMedia('IdProofDocument')}
                />

                <MediaUploader
                  referenceCode={referenceCode}
                  mediaType="BusinessRegistrationDocument"
                  label="Business Registration Document"
                  hint="Optional."
                  accept="image/jpeg,image/png,image/webp,application/pdf"
                  allowedTypesLabel="JPEG, PNG, WebP, PDF"
                  maxSizeMB={15}
                  kind="document"
                  max={1}
                  items={media.BusinessRegistrationDocument}
                  onAdd={addMedia('BusinessRegistrationDocument')}
                  onRemove={removeMedia('BusinessRegistrationDocument')}
                />
              </div>

              <div className="mt-8 rounded-lg border border-gold/20 bg-surface-2/60 p-4">
                <div className="flex items-center gap-2 font-dmsans text-xs">
                  <CheckCircle2 size={15} className={profileMet ? 'text-gold' : 'text-muted'} />
                  <span className={profileMet ? 'text-text-primary' : 'text-muted'}>Profile photo uploaded</span>
                </div>
                <div className="mt-2 flex items-center gap-2 font-dmsans text-xs">
                  <CheckCircle2 size={15} className={portfolioMet ? 'text-gold' : 'text-muted'} />
                  <span className={portfolioMet ? 'text-text-primary' : 'text-muted'}>
                    At least 5 portfolio photos ({media.PortfolioPhoto.length} uploaded)
                  </span>
                </div>
              </div>

              <div className="mt-8 flex justify-end">
                <GoldButton variant="filled" size="md" onClick={enterReview} disabled={!mediaRequirementsMet}>
                  Continue to Review <ArrowRight size={14} />
                </GoldButton>
              </div>
            </AnimatedSection>
          )}

          {phase === 'review' && (
            <AnimatedSection>
              <h2 className="mb-6 font-cormorant text-2xl">Review & Submit</h2>

              {reviewLoading ? (
                <div className="flex items-center gap-3 py-10 font-dmsans text-sm text-muted">
                  <Loader2 size={18} className="animate-spin text-gold" /> Loading your registration…
                </div>
              ) : (
                <>
                  {reviewError && (
                    <div className="mb-6 flex items-start gap-2 rounded-lg border border-maroon-light/40 bg-maroon/10 p-4">
                      <AlertCircle size={16} className="mt-0.5 flex-shrink-0 text-maroon-light" />
                      <p className="font-dmsans text-xs text-text-primary">{reviewError}</p>
                    </div>
                  )}

                  <div className="space-y-4">
                    <div className="rounded-lg border border-gold/20 bg-surface-2/60 p-5">
                      <span className="mb-3 block font-cinzel text-[10px] uppercase tracking-[0.1em] text-gold">
                        Business
                      </span>
                      <p className="font-cormorant text-xl">{formData.businessName}</p>
                      <p className="font-dmsans text-sm text-muted">
                        {formData.ownerName} &middot; {formData.city}
                        {formData.state ? `, ${formData.state}` : ''}
                      </p>
                      <p className="font-dmsans text-sm text-muted">{formData.mobileNumber}</p>
                      {categoryName && <p className="mt-2 font-dmsans text-sm text-text-primary">{categoryName}</p>}
                    </div>

                    <div className="rounded-lg border border-gold/20 bg-surface-2/60 p-5">
                      <span className="mb-3 block font-cinzel text-[10px] uppercase tracking-[0.1em] text-gold">
                        Pricing
                      </span>
                      <p className="font-dmsans text-sm text-text-primary">
                        Starting at ₹{Number(formData.startingPrice || 0).toLocaleString('en-IN')}
                      </p>
                    </div>

                    <div className="rounded-lg border border-gold/20 bg-surface-2/60 p-5">
                      <span className="mb-3 block font-cinzel text-[10px] uppercase tracking-[0.1em] text-gold">
                        Portfolio
                      </span>
                      <p className="font-dmsans text-sm text-text-primary">
                        {media.ProfilePhoto.length} profile photo, {media.PortfolioPhoto.length} portfolio photos,{' '}
                        {media.PortfolioVideo.length} videos
                      </p>
                    </div>
                  </div>

                  <p className="mt-6 font-dmsans text-xs leading-relaxed text-muted">
                    Need to fix something above? Text details can't be edited after this step — message us on{' '}
                    <a href="https://wa.me/916302594826" target="_blank" rel="noopener noreferrer" className="text-gold underline-offset-4 hover:underline">
                      WhatsApp
                    </a>{' '}
                    with your reference code and we'll help.
                  </p>

                  {submitError && (
                    <div className="mt-6 rounded-lg border border-maroon-light/40 bg-maroon/10 p-4">
                      <div className="flex items-start gap-2">
                        <AlertCircle size={16} className="mt-0.5 flex-shrink-0 text-maroon-light" />
                        <p className="font-dmsans text-xs text-text-primary">{submitError}</p>
                      </div>
                      {submitErrorList.length > 0 && (
                        <ul className="mt-2 list-disc space-y-1 pl-9 font-dmsans text-xs text-text-primary">
                          {submitErrorList.map((e, i) => (
                            <li key={i}>{e}</li>
                          ))}
                        </ul>
                      )}
                      <button
                        type="button"
                        onClick={() => setPhase('media')}
                        className="mt-3 pl-7 font-dmsans text-xs text-gold underline-offset-4 hover:underline"
                      >
                        Back to Portfolio & Documents
                      </button>
                    </div>
                  )}

                  <div className="mt-8 flex items-center justify-between gap-4">
                    <GoldButton variant="outlined" size="md" onClick={() => setPhase('media')}>
                      <ArrowLeft size={14} /> Back
                    </GoldButton>
                    <GoldButton variant="filled" size="md" onClick={handleSubmit} disabled={submitting}>
                      {submitting ? (
                        <>
                          <Loader2 size={14} className="animate-spin" /> Submitting…
                        </>
                      ) : (
                        'Submit Registration'
                      )}
                    </GoldButton>
                  </div>
                </>
              )}
            </AnimatedSection>
          )}

          {(phase === 'done' || phase === 'submitted') && (
            <AnimatedSection>
              <div className="rounded-lg border border-gold/20 bg-surface-2 p-12 text-center">
                <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full border border-gold/30 bg-surface">
                  <ShieldCheck size={28} className="text-gold" />
                </div>
                <h3 className="mb-3 font-cormorant text-3xl">Thank You</h3>
                <p className="mx-auto mb-6 max-w-md font-dmsans text-muted">{doneMessage}</p>
                {referenceCode && (
                  <p className="mb-8 font-dmsans text-xs text-muted">
                    Reference code: <span className="text-gold">{referenceCode}</span>
                  </p>
                )}
                <GoldButton variant="outlined" size="md" onClick={startOver}>
                  Register Another Vendor
                </GoldButton>
              </div>
            </AnimatedSection>
          )}
        </div>
      </section>
    </>
  )
}
