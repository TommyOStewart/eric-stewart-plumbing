import { Link } from 'react-router-dom'
import { Phone, Calendar, AlertTriangle, Droplets, Flame, Search, Wrench, Bath, ArrowRight, Thermometer } from 'lucide-react'
import { PHONE_NUMBER, PHONE_LINK, services } from '../data/constants'

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  AlertTriangle,
  Droplets,
  Flame,
  Search,
  Wrench,
  Bath,
  Thermometer
}

export default function Services() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-charcoal texture-grid text-white py-16 md:py-24">
        <div className="container-max px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl reveal">
            <span className="section-label">Full Service</span>
            <h1 className="text-4xl md:text-6xl font-heading font-bold mb-6">Our Services</h1>
            <p className="text-xl text-gray-300 mb-8">
              From emergency repairs to planned installations, EMS Enterprises handles all your plumbing and mechanical needs on Cape Cod.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href={PHONE_LINK} className="btn-primary">
                <Phone className="w-5 h-5" />
                Call {PHONE_NUMBER}
              </a>
              <Link to="/contact" className="btn-outline">
                <Calendar className="w-5 h-5" />
                Schedule Service
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding bg-charcoal-light texture-hatch clip-diagonal-both">
        <div className="container-max">
          <div className="space-y-8">
            {services.map((service, index) => {
              const IconComponent = iconMap[service.icon]
              const isEven = index % 2 === 0
              return (
                <div
                  key={service.id}
                  className="card overflow-hidden rivets"
                >
                  <div className={`grid grid-cols-1 md:grid-cols-2 ${!isEven ? 'md:flex-row-reverse' : ''}`}>
                    <div className={`aspect-video md:aspect-auto relative ${!isEven ? 'md:order-2' : ''}`}>
                      <img
                        src={service.image}
                        alt={service.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className={`p-6 md:p-8 flex flex-col justify-center ${!isEven ? 'md:order-1' : ''}`}>
                      <div className="w-12 h-12 bg-rust/15 border border-rust/40 rounded flex items-center justify-center mb-4">
                        {IconComponent && <IconComponent className="w-6 h-6 text-rust-light" />}
                      </div>
                      <h2 className="text-2xl font-heading font-bold text-white mb-3">{service.title}</h2>
                      <p className="text-gray-400 mb-6">{service.fullDesc}</p>
                      <Link
                        to={`/services/${service.id}`}
                        className="inline-flex items-center gap-2 text-rust-light font-semibold hover:gap-3 transition-all text-sm"
                      >
                        Learn More <ArrowRight className="w-4 h-4" />
                      </Link>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-charcoal texture-grid py-16">
        <div className="container-max px-4 sm:px-6 lg:px-8 text-center reveal">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-4">Need a Service Not Listed?</h2>
          <p className="text-lg text-gray-400 mb-8 max-w-2xl mx-auto">
            We handle a wide range of plumbing and mechanical work. Give us a call to discuss your specific needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href={PHONE_LINK} className="btn-primary text-lg">
              <Phone className="w-5 h-5" />
              Call {PHONE_NUMBER}
            </a>
            <Link to="/contact" className="btn-secondary text-lg">
              <Calendar className="w-5 h-5" />
              Request a Quote
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
