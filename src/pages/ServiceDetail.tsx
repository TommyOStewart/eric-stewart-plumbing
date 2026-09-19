import { useParams, Link, Navigate } from 'react-router-dom'
import { Phone, Calendar, CheckCircle, ArrowLeft, AlertTriangle, Droplets, Flame, Search, Wrench, Bath, Thermometer } from 'lucide-react'
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

export default function ServiceDetail() {
  const { serviceId } = useParams()
  const service = services.find(s => s.id === serviceId)

  if (!service) {
    return <Navigate to="/services" replace />
  }

  const IconComponent = iconMap[service.icon]
  const otherServices = services.filter(s => s.id !== serviceId).slice(0, 3)

  return (
    <div>
      {/* Hero */}
      <section className="relative bg-charcoal text-white py-16 md:py-24 texture-grid">
        <div className="absolute inset-0">
          <img
            src={service.image}
            alt={service.title}
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-charcoal via-charcoal/95 to-charcoal/80" />
        </div>
        <div className="relative container-max px-4 sm:px-6 lg:px-8">
          <Link to="/services" className="inline-flex items-center gap-2 text-gray-400 hover:text-rust-light mb-6 transition-colors">
            <ArrowLeft className="w-4 h-4" />
            Back to Services
          </Link>
          <div className="flex items-center gap-4 mb-6">
            <div className="w-16 h-16 bg-rust rounded-xl flex items-center justify-center shadow-rugged">
              {IconComponent && <IconComponent className="w-8 h-8 text-white" />}
            </div>
            <h1 className="text-4xl md:text-5xl font-heading font-bold">{service.title}</h1>
          </div>
          <p className="text-xl text-gray-300 max-w-3xl mb-8">{service.fullDesc}</p>
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
      </section>

      {/* Content */}
      <section className="section-padding bg-charcoal-light texture-hatch clip-diagonal-both">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">What to Expect</h2>
              <div className="prose prose-invert prose-lg text-gray-300 max-w-none">
                <p className="mb-6">
                  When you call EMS Enterprises for {service.title.toLowerCase()}, you can expect professional, courteous service from start to finish. We understand that plumbing issues can be stressful, which is why we focus on clear communication and efficient work.
                </p>
                <h3 className="text-xl font-bold text-white mt-8 mb-4">Our Process</h3>
                <ul className="space-y-4">
                  {[
                    'Initial consultation and assessment of your plumbing issue',
                    'Clear, upfront pricing before any work begins',
                    'Professional repair or installation using quality materials',
                    'Thorough cleanup of the work area',
                    'Explanation of the work completed and maintenance tips'
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle className="w-6 h-6 text-rust-light flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-12 card p-8">
                <h3 className="text-xl font-bold text-white mb-4">Why Choose Us for {service.title}?</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    'Licensed & insured professionals',
                    'Upfront, honest pricing',
                    'Quality workmanship guaranteed',
                    'Fast response times',
                    'Clean, respectful service',
                    'Satisfaction guaranteed'
                  ].map((item, index) => (
                    <div key={index} className="flex items-center gap-2 text-gray-300">
                      <CheckCircle className="w-5 h-5 text-rust-light" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="lg:col-span-1">
              <div className="sticky top-36">
                <div className="bg-charcoal border border-charcoal-border text-white rounded-xl p-8 mb-8 shadow-rugged-lg">
                  <h3 className="text-xl font-bold mb-4">Ready to Get Started?</h3>
                  <p className="text-gray-400 mb-6">
                    Contact us today for fast, reliable {service.title.toLowerCase()} service on Cape Cod.
                  </p>
                  <a href={PHONE_LINK} className="btn-primary w-full justify-center mb-4">
                    <Phone className="w-5 h-5" />
                    {PHONE_NUMBER}
                  </a>
                  <Link to="/contact" className="btn-outline w-full justify-center">
                    <Calendar className="w-5 h-5" />
                    Book Online
                  </Link>
                </div>

                <div className="card p-6">
                  <h3 className="font-bold text-white mb-4">Other Services</h3>
                  <ul className="space-y-3">
                    {otherServices.map(s => {
                      const Icon = iconMap[s.icon]
                      return (
                        <li key={s.id}>
                          <Link
                            to={`/services/${s.id}`}
                            className="flex items-center gap-3 text-gray-300 hover:text-rust-light transition-colors"
                          >
                            {Icon && <Icon className="w-5 h-5" />}
                            <span>{s.title}</span>
                          </Link>
                        </li>
                      )
                    })}
                  </ul>
                  <Link
                    to="/services"
                    className="inline-block mt-4 text-rust-light font-semibold hover:underline"
                  >
                    View All Services →
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
