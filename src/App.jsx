import { BrowserRouter, Navigate, Routes, Route, useLocation } from 'react-router-dom'
import { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import AppPreview from './pages/AppPreview'
import HowItWorks from './pages/HowItWorks'
import ForVendors from './pages/ForVendors'
import VendorRegister from './pages/VendorRegister'
import Contact from './pages/Contact'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])
  return null
}

function PageWrapper({ children }) {
  const [mounted, setMounted] = useState(false)
  useEffect(() => {
    setMounted(true)
    return () => setMounted(false)
  }, [])

  return (
    <div className={`${mounted ? 'page-transition-active' : 'page-transition-enter'}`}>
      {children}
    </div>
  )
}

function AppContent() {
  return (
    <div className="flex flex-col min-h-screen w-full min-w-0">
      <ScrollToTop />
      <Navbar />
      <main className="flex-1 w-full min-w-0">
        <Routes>
          <Route path="/" element={<PageWrapper><Home /></PageWrapper>} />
          <Route path="/app-preview" element={<PageWrapper><AppPreview /></PageWrapper>} />
          <Route path="/vendors" element={<Navigate to="/app-preview" replace />} />
          <Route path="/how-it-works" element={<PageWrapper><HowItWorks /></PageWrapper>} />
          <Route path="/for-vendors" element={<PageWrapper><ForVendors /></PageWrapper>} />
          <Route path="/vendor-registration" element={<PageWrapper><VendorRegister /></PageWrapper>} />
          <Route path="/contact" element={<PageWrapper><Contact /></PageWrapper>} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  )
}
