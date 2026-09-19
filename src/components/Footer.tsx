import { Link } from 'react-router-dom'
import { Phone, Mail, MapPin, Clock } from 'lucide-react'
import { PHONE_NUMBER, PHONE_LINK, PLUMBER_LICENSE, BUSINESS_HOURS, IMAGES } from '../data/constants'
import PlumbingLogo from './PlumbingLogo'

export default function Footer() {
  return (
    <footer className="bg-charcoal-light text-white texture-hatch relative border-t-4 border-rust">
      <div className="container-max px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img 
                src={IMAGES.logo}
                alt="EMS Enterprises Logo" 
                className="h-16 w-auto rounded-md shadow-rugged border-2 border-rust/30"
              />
              <div>
                <div className="font-heading font-bold text-lg">EMS Enterprises</div>
                <PlumbingLogo size="sm" animated={false} className="text-gray-400 mt-1" />
              </div>
            </div>
            <p className="text-gray-400 text-sm mb-4">
              Licensed plumbing and mechanical contractor serving Cape Cod and Barnstable County for over 15 years.
            </p>
            <p className="text-sm text-gray-500">License: {PLUMBER_LICENSE}</p>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-heading font-bold text-lg mb-4 text-rust-light">Contact Us</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <a href={PHONE_LINK} className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors">
                  <Phone className="w-4 h-4 text-rust" />
                  {PHONE_NUMBER}
                </a>
              </li>
              <li>
                <a href="mailto:info@emsenterprises.com" className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors">
                  <Mail className="w-4 h-4 text-rust" />
                  info@emsenterprises.com
                </a>
              </li>
              <li className="flex items-start gap-2 text-gray-300">
                <MapPin className="w-4 h-4 text-rust mt-0.5" />
                <span>Falmouth, MA<br />Serving all of Cape Cod</span>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h3 className="font-heading font-bold text-lg mb-4 text-rust-light">Business Hours</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-rust" />
                {BUSINESS_HOURS.regular}
              </li>
              <li className="pl-6">{BUSINESS_HOURS.saturday}</li>
              <li className="pl-6">{BUSINESS_HOURS.sunday}</li>
              <li className="pt-2 text-rust-light font-medium">{BUSINESS_HOURS.emergency}</li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-heading font-bold text-lg mb-4 text-rust-light">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              {[
                { name: 'Services', href: '/services' },
                { name: 'About Us', href: '/about' },
                { name: 'Reviews', href: '/reviews' },
                { name: 'Contact', href: '/contact' },
              ].map((link) => (
                <li key={link.name}>
                  <Link to={link.href} className="text-gray-300 hover:text-white transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-charcoal-border mt-10 pt-8 text-center text-sm text-gray-500">
          <p>&copy; {new Date().getFullYear()} EMS Enterprises. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
