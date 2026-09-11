import { useState } from 'react'
import { Phone, Mail, MapPin, Clock, CheckCircle } from 'lucide-react'
import { PHONE_NUMBER, PHONE_LINK, BUSINESS_HOURS, serviceAreas } from '../data/constants'

export default function Contact() {
  const [submitted, setSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: '',
    message: ''
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In production, this would send to a backend
    console.log('Form submitted:', formData)
    setSubmitted(true)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  return (
    <div>
      {/* Hero */}
      <section className="bg-navy text-white py-16 md:py-20">
        <div className="container-max px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6">Contact Us</h1>
            <p className="text-xl text-gray-300">
              Ready to schedule service or have questions? We're here to help Cape Cod residents with all their plumbing and mechanical needs.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-2xl font-heading font-bold text-gray-900 mb-6">Request a Quote</h2>
              
              {submitted ? (
                <div className="bg-green-50 border border-green-200 rounded-lg p-8 text-center">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="w-8 h-8 text-green-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Thank You!</h3>
                  <p className="text-gray-600 mb-4">
                    We've received your request and will get back to you within 24 hours.
                  </p>
                  <p className="text-gray-600">
                    For immediate assistance, call us at{' '}
                    <a href={PHONE_LINK} className="text-accent font-semibold">{PHONE_NUMBER}</a>
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                      Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-accent focus:border-accent"
                    />
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                        Phone *
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-accent focus:border-accent"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-accent focus:border-accent"
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-1">
                      Service Needed
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-accent focus:border-accent"
                    >
                      <option value="">Select a service...</option>
                      <option value="emergency">Emergency Plumbing</option>
                      <option value="drain">Drain Cleaning</option>
                      <option value="water-heater">Water Heater</option>
                      <option value="leak">Leak Detection & Repair</option>
                      <option value="pipe">Pipe Repair/Replacement</option>
                      <option value="fixture">Fixture Installation</option>
                      <option value="hvac">Heating & Cooling</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                      Describe Your Issue
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-accent focus:border-accent"
                      placeholder="Tell us about your plumbing or mechanical needs..."
                    />
                  </div>
                  <button type="submit" className="btn-primary w-full text-lg">
                    Submit Request
                  </button>
                </form>
              )}
            </div>

            {/* Contact Info */}
            <div>
              <h2 className="text-2xl font-heading font-bold text-gray-900 mb-6">Get in Touch</h2>
              
              {/* Quick Contact */}
              <div className="bg-navy text-white rounded-lg p-6 mb-6">
                <h3 className="text-lg font-bold mb-4">Need Immediate Help?</h3>
                <a href={PHONE_LINK} className="flex items-center gap-3 text-2xl font-bold text-white hover:text-accent-light transition-colors">
                  <Phone className="w-6 h-6" />
                  {PHONE_NUMBER}
                </a>
                <p className="text-gray-300 mt-2 text-sm">24/7 Emergency Service Available</p>
              </div>

              {/* Contact Details */}
              <div className="space-y-4">
                <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg">
                  <Mail className="w-5 h-5 text-accent mt-0.5" />
                  <div>
                    <div className="font-semibold text-gray-900">Email</div>
                    <a href="mailto:info@emsenterprises.com" className="text-gray-600 hover:text-accent">
                      info@emsenterprises.com
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg">
                  <MapPin className="w-5 h-5 text-accent mt-0.5" />
                  <div>
                    <div className="font-semibold text-gray-900">Service Area</div>
                    <div className="text-gray-600">Falmouth, MA & all of Cape Cod</div>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg">
                  <Clock className="w-5 h-5 text-accent mt-0.5" />
                  <div>
                    <div className="font-semibold text-gray-900">Business Hours</div>
                    <div className="text-gray-600 text-sm">
                      <div>{BUSINESS_HOURS.regular}</div>
                      <div>{BUSINESS_HOURS.saturday}</div>
                      <div>{BUSINESS_HOURS.sunday}</div>
                      <div className="text-accent font-medium mt-1">{BUSINESS_HOURS.emergency}</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Service Areas */}
              <div className="mt-8">
                <h3 className="text-lg font-bold text-gray-900 mb-4">Towns We Serve</h3>
                <div className="flex flex-wrap gap-2">
                  {serviceAreas.map(area => (
                    <span key={area} className="px-3 py-1 bg-gray-100 text-gray-700 rounded text-sm">
                      {area}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
