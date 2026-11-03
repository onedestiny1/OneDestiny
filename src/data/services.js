import {
  Building2,
  Camera,
  Flower2,
  Music,
  Palette,
  Sparkles,
  Sun,
  UtensilsCrossed,
  Video,
} from 'lucide-react'
import videography from '../assets/vediography.png'
import catering from '../assets/catering.png'
import venues from '../assets/venue.png'
import decoration from '../assets/decoration.png'
import pandits from '../assets/pandit.png'
import mehendi from '../assets/mehendi.png'
import makeup from '../assets/makeup.png'
import dj from '../assets/dj&music.png'
import photography from '../assets/photography.jpeg'

export const services = [
  {
    slug: 'photography',
    icon: Camera,
    name: 'Photography',
    tagline: 'Candid, Traditional & Pre-Wedding',
    count: '240+ Vendors',
    image: photography,
    startingPrice: '₹25,000',
    intro:
      'Every glance, every ritual, every tear of joy. Our photographers capture your celebration as timeless art, with the candid moments and the classic portraits your family will treasure for generations.',
    offerings: [
      { title: 'Candid Photography', desc: 'Unposed, emotional storytelling that captures moments as they unfold.' },
      { title: 'Traditional Coverage', desc: 'Complete ritual and family coverage with classic group portraits.' },
      { title: 'Pre-Wedding Shoots', desc: 'Destination and themed couple shoots before the big day.' },
      { title: 'Albums & Prints', desc: 'Premium handcrafted albums, canvas prints and digital galleries.' },
    ],
    faqs: [
      { q: 'How soon will we receive our photos?', a: 'Most photographers deliver a preview within a week and the full edited gallery within 4–6 weeks.' },
      { q: 'Can we meet the photographer before booking?', a: 'Yes. Chat in-app or schedule a call to review full wedding portfolios before confirming.' },
      { q: 'Do they travel for destination weddings?', a: 'Many vendors offer destination coverage. Travel and stay are quoted separately on request.' },
    ],
  },
  {
    slug: 'videography',
    icon: Video,
    name: 'Videography',
    tagline: 'Cinematic Films & Teasers',
    count: '180+ Vendors',
    image: videography,
    startingPrice: '₹35,000',
    intro:
      'Relive your wedding the way it felt. Cinematic filmmakers turn your celebration into a story, with teasers, highlight reels and full-length films.',
    offerings: [
      { title: 'Cinematic Highlights', desc: 'A 4–6 minute film set to music that tells your love story.' },
      { title: 'Full-Length Film', desc: 'Complete documentary-style coverage of every ceremony.' },
      { title: 'Teasers & Reels', desc: 'Short, social-ready edits delivered quickly after the event.' },
      { title: 'Drone Coverage', desc: 'Sweeping aerial shots of venues, baraat and grand entries.' },
    ],
    faqs: [
      { q: 'What is the difference between a highlight and a full film?', a: 'Highlights are short, music-driven edits. Full films document each ceremony in detail, often 1–2 hours long.' },
      { q: 'Is drone coverage allowed at every venue?', a: 'It depends on the venue and local regulations. Vendors confirm permissions before the event.' },
      { q: 'Can we choose the music?', a: 'Yes, most filmmakers welcome song preferences and use licensed tracks where needed.' },
    ],
  },
  {
    slug: 'makeup-artists',
    icon: Sparkles,
    name: 'Makeup Artists',
    tagline: 'Bridal Glamour & Hair Styling',
    count: '310+ Artists',
    image: makeup,
    startingPrice: '₹15,000',
    intro:
      'Look and feel radiant from the haldi to the reception. Our bridal artists bring HD and airbrush expertise, flawless hair styling and looks tailored to you.',
    offerings: [
      { title: 'Bridal Makeup', desc: 'HD and airbrush looks that stay flawless through every ritual.' },
      { title: 'Hair Styling', desc: 'Traditional buns, braids and modern styles with accessories.' },
      { title: 'Family & Guests', desc: 'Makeup for bridesmaids, mothers and family members.' },
      { title: 'Trial Sessions', desc: 'Pre-wedding trials to perfect your look before the day.' },
    ],
    faqs: [
      { q: 'Should we book a trial?', a: 'We strongly recommend it. A trial lets you fine-tune your look and builds trust with your artist.' },
      { q: 'Do artists travel to the venue?', a: 'Yes, most artists come to your home or venue. Travel charges may apply outside the city.' },
      { q: 'What products do they use?', a: 'Verified artists use premium international brands. You can request specifics in chat.' },
    ],
  },
  {
    slug: 'catering',
    icon: UtensilsCrossed,
    name: 'Catering',
    tagline: 'Royal Multi-Cuisine Feasts',
    count: '150+ Caterers',
    image: catering,
    startingPrice: '₹650 / plate',
    intro:
      'A wedding is remembered by its feast. From regional delicacies to global live counters, our caterers serve menus your guests will talk about for years.',
    offerings: [
      { title: 'Multi-Cuisine Menus', desc: 'North Indian, South Indian, Chinese, Continental and more.' },
      { title: 'Live Counters', desc: 'Chaat, dosa, pasta and tandoor stations cooked fresh.' },
      { title: 'Traditional Feasts', desc: 'Authentic regional thalis and banana-leaf meals.' },
      { title: 'Desserts & Mocktails', desc: 'Sweet counters, custom cakes and signature drinks.' },
    ],
    faqs: [
      { q: 'Is food tasting available?', a: 'Yes, most caterers arrange a tasting session once you shortlist a menu.' },
      { q: 'What is the minimum guest count?', a: 'Minimums vary by caterer, typically starting from 100 guests.' },
      { q: 'Can they handle dietary needs?', a: 'Jain, vegan, gluten-free and other dietary menus can be arranged on request.' },
    ],
  },
  {
    slug: 'venues',
    icon: Building2,
    name: 'Venues',
    tagline: 'Palaces, Lawns & Heritage Halls',
    count: '190+ Venues',
    image: venues,
    startingPrice: '₹1,00,000',
    intro:
      'Find the setting your story deserves, whether an intimate garden, a grand banquet or a royal heritage palace, with clear pricing and real availability.',
    offerings: [
      { title: 'Banquet Halls', desc: 'Air-conditioned halls for every guest count and budget.' },
      { title: 'Open Lawns', desc: 'Lush gardens for sunset ceremonies and grand receptions.' },
      { title: 'Heritage Palaces', desc: 'Regal forts and palaces for a truly royal celebration.' },
      { title: 'Resorts & Destinations', desc: 'Stay-and-celebrate venues for multi-day weddings.' },
    ],
    faqs: [
      { q: 'Can we visit the venue before booking?', a: 'Absolutely. Request a site visit in-app and the venue will confirm a slot.' },
      { q: 'Are catering and decor included?', a: 'Some venues include in-house services; others allow outside vendors. Each listing says which.' },
      { q: 'How far in advance should we book?', a: 'For peak wedding season, 6–12 months ahead is recommended for popular venues.' },
    ],
  },
  {
    slug: 'decoration',
    icon: Flower2,
    name: 'Decoration',
    tagline: 'Floral Mandaps & Grand Themes',
    count: '220+ Decorators',
    image: decoration,
    startingPrice: '₹50,000',
    intro:
      'Transform any space into a dream. Our decorators design floral mandaps, stage setups, lighting and themed decor that match your vision down to the last petal.',
    offerings: [
      { title: 'Mandap Design', desc: 'Floral and themed mandaps crafted for your ceremony.' },
      { title: 'Stage & Backdrops', desc: 'Statement reception stages and photo-booth backdrops.' },
      { title: 'Lighting Design', desc: 'Fairy lights, chandeliers and ambient mood lighting.' },
      { title: 'Theme Decor', desc: 'Haldi, mehendi and sangeet themes styled end to end.' },
    ],
    faqs: [
      { q: 'Can we customise a theme?', a: 'Yes. Share mood boards in chat and decorators will create a tailored proposal.' },
      { q: 'Are fresh or artificial flowers used?', a: 'Both are available. Fresh flowers cost more but give a richer look and fragrance.' },
      { q: 'Who handles setup and teardown?', a: 'The decorator team manages complete setup before and removal after the event.' },
    ],
  },
  {
    slug: 'pandits',
    icon: Sun,
    name: 'Pandits',
    tagline: 'Vedic Ceremonies & Rituals',
    count: '95+ Verified',
    image: pandits,
    startingPrice: '₹11,000',
    intro:
      'Begin your new journey with blessings. Our verified pandits perform authentic Vedic ceremonies in multiple languages and traditions, explaining each ritual with care.',
    offerings: [
      { title: 'Wedding Ceremonies', desc: 'Complete vivah rituals following your family tradition.' },
      { title: 'Pre-Wedding Pujas', desc: 'Ganesh puja, haldi, roka and engagement ceremonies.' },
      { title: 'Muhurat Consultation', desc: 'Auspicious date and time guidance for every event.' },
      { title: 'Multi-Lingual Rituals', desc: 'Hindi, Telugu, Tamil, Sanskrit and more.' },
    ],
    faqs: [
      { q: 'Can the pandit follow our regional tradition?', a: 'Yes. Filter by tradition and language to find a pandit who matches your customs.' },
      { q: 'Is puja samagri included?', a: 'Basic packages share a list; higher tiers include full samagri arrangement.' },
      { q: 'Can they explain the rituals to guests?', a: 'Many pandits narrate the meaning of each ritual in English or your preferred language.' },
    ],
  },
  {
    slug: 'mehendi-artists',
    icon: Palette,
    name: 'Mehendi Artists',
    tagline: 'Bridal Henna & Arabic Art',
    count: '160+ Artists',
    image: mehendi,
    startingPrice: '₹8,000',
    intro:
      'Intricate patterns, deep colour and hidden stories. Our mehendi artists create bridal designs and fun guest henna that make your mehendi night unforgettable.',
    offerings: [
      { title: 'Bridal Mehendi', desc: 'Full hands and feet with detailed portraits and motifs.' },
      { title: 'Arabic & Indo-Western', desc: 'Bold, flowing designs with modern elements.' },
      { title: 'Guest Mehendi', desc: 'Multiple artists for quick, beautiful guest designs.' },
      { title: 'Organic Henna', desc: 'Chemical-free henna for rich, natural colour.' },
    ],
    faqs: [
      { q: 'How long does bridal mehendi take?', a: 'Detailed bridal designs typically take 4–8 hours depending on coverage.' },
      { q: 'How do we get a darker colour?', a: 'Artists share aftercare tips. Keep the paste on overnight and avoid water for 12 hours.' },
      { q: 'Is the henna safe for sensitive skin?', a: 'Choose artists offering organic henna and mention allergies in advance.' },
    ],
  },
  {
    slug: 'dj-music',
    icon: Music,
    name: 'DJ & Music',
    tagline: 'Sangeet Beats & Live Bands',
    count: '130+ Artists',
    image: dj,
    startingPrice: '₹20,000',
    intro:
      'Set the rhythm for your celebration. DJs, live bands, dhol players and sufi singers keep the energy high from the sangeet to the last dance.',
    offerings: [
      { title: 'Wedding DJs', desc: 'Bollywood, Punjabi and international sets with pro sound.' },
      { title: 'Live Bands', desc: 'Acoustic, fusion and Bollywood bands for every mood.' },
      { title: 'Dhol & Baraat', desc: 'Dhol players and brass bands for a grand baraat.' },
      { title: 'Sound & Lights', desc: 'Concert-grade sound systems, LED walls and dance floors.' },
    ],
    faqs: [
      { q: 'Can we share our own playlist?', a: 'Yes. DJs welcome must-play and do-not-play lists shared via chat.' },
      { q: 'Do they provide sound equipment?', a: 'Packages include sound and lighting; larger setups can be added.' },
      { q: 'Are there noise restrictions?', a: 'Many cities restrict loud music after 10 PM. Vendors plan around local rules.' },
    ],
  },
]

export const getServiceBySlug = (slug) => services.find((s) => s.slug === slug)
