import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Phone, Menu, X } from 'lucide-react'
import { PHONE_NUMBER, PHONE_LINK, IMAGES } from '../data/constants'
import PlumbingLogo from './PlumbingLogo'


const navigation = [
  { name: 'Home', href: '/' },
  { name: 'Services', href: '/services' },
  { name: 'About', href: '/about' },
  { name: 'Reviews', href: '/reviews' },
  { name: 'Contact', href: '/contact' },
]

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const location = useLocation()

  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
      {/* Top bar */}
      <div className="bg-navy text-white">
        <div className="container-max px-4 sm:px-6 lg:px-8 py-2 flex justify-between items-center text-sm">
          <span className="hidden sm:block">Serving Cape Cod & Barnstable County</span>
          <div className="flex items-center gap-4 mx-auto sm:mx-0">
            <span className="text-gray-300">24/7 Emergency Service</span>
            <a href={PHONE_LINK} className="flex items-center gap-1 font-bold text-white hover:text-accent-light transition-colors">
              <Phone className="w-4 h-4" />
              {PHONE_NUMBER}
            </a>
          </div>
        </div>
      </div>

      {/* Main header */}
      <div className="container-max px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-24 md:h-28">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-4 group">
            <div className="relative">
              <img
                src={IMAGES.logo}
                alt="EMS Enterprises Logo"
                className="h-20 md:h-24 w-auto rounded-md shadow-rugged group-hover:scale-105 transition-transform duration-300 border-2 border-navy/10"
              />
              <span className="absolute -bottom-1 -right-1 w-4 h-4 bg-rust rounded-full border-2 border-white shadow" />
            </div>
            <div className="hidden sm:flex flex-col justify-center">
              <div className="text-2xl font-heading font-bold text-navy leading-none">EMS Enterprises</div>
              <PlumbingLogo size="sm" className="text-navy mt-1" />
            </div>
          </Link>


          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`text-sm font-medium transition-colors ${
                  location.pathname === item.href
                    ? 'text-accent'
                    : 'text-gray-700 hover:text-accent'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Link to="/contact" className="btn-primary">
              Get a Quote
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            type="button"
            className="md:hidden p-2 text-gray-700"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <div className="px-4 py-4 space-y-2">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`block px-4 py-3 rounded-md text-base font-medium ${
                  location.pathname === item.href
                    ? 'bg-gray-100 text-accent'
                    : 'text-gray-700 hover:bg-gray-50'
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <div className="pt-4 border-t border-gray-200">
              <a href={PHONE_LINK} className="btn-primary w-full justify-center">
                <Phone className="w-5 h-5" />
                Call {PHONE_NUMBER}
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
