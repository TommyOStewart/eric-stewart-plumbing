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
      <section className="relative bg-slate-900 text-white py-16 md:py-24">
        <div className="absolute inset-0">
          <img
            src={service.image}
            alt={service.title}
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/95 to-slate-900/80" />
        </div>
        <div className="relative container-max px-4 sm:px-6 lg:px-8">
          <Link to="/services" className="inline-flex items-center gap-2 text-slate-400 hover:text-white mb-6 transition-colors">
            <ArrowLeft className="w-4 h-4" />
            Back to Services
          </Link>
          <div className="flex items-center gap-4 mb-6">
            <div className="w-16 h-16 bg-accent rounded-xl flex items-center justify-center">
              {IconComponent && <IconComponent className="w-8 h-8 text-white" />}
            </div>
            <h1 className="text-4xl md:text-5xl font-bold">{service.title}</h1>
          </div>
          <p className="text-xl text-slate-300 max-w-3xl mb-8">{service.fullDesc}</p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href={PHONE_LINK} className="btn-primary">
              <Phone className="w-5 h-5" />
              Call {PHONE_NUMBER}
            </a>
            <Link to="/contact" className="btn-outline border-white text-white hover:bg-white hover:text-slate-900">
              <Calendar className="w-5 h-5" />
              Schedule Service
            </Link>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-6">What to Expect</h2>
              <div className="prose prose-lg text-slate-700 max-w-none">
                <p className="mb-6">
                  When you call EMS Enterprises for {service.title.toLowerCase()}, you can expect professional, courteous service from start to finish. We understand that plumbing issues can be stressful, which is why we focus on clear communication and efficient work.
                </p>
                <h3 className="text-xl font-bold text-slate-900 mt-8 mb-4">Our Process</h3>
                <ul className="space-y-4">
                  {[
                    'Initial consultation and assessment of your plumbing issue',
                    'Clear, upfront pricing before any work begins',
                    'Professional repair or installation using quality materials',
                    'Thorough cleanup of the work area',
                    'Explanation of the work completed and maintenance tips'
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle className="w-6 h-6 text-accent flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-12 bg-slate-100 rounded-xl p-8">
                <h3 className="text-xl font-bold text-slate-900 mb-4">Why Choose Us for {service.title}?</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    'Licensed & insured professionals',
                    'Upfront, honest pricing',
                    'Quality workmanship guaranteed',
                    'Fast response times',
                    'Clean, respectful service',
                    'Satisfaction guaranteed'
                  ].map((item, index) => (
                    <div key={index} className="flex items-center gap-2 text-slate-700">
                      <CheckCircle className="w-5 h-5 text-accent" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="lg:col-span-1">
              <div className="sticky top-36">
                <div className="bg-slate-900 text-white rounded-xl p-8 mb-8">
                  <h3 className="text-xl font-bold mb-4">Ready to Get Started?</h3>
                  <p className="text-slate-300 mb-6">
                    Contact us today for fast, reliable {service.title.toLowerCase()} service on Cape Cod.
                  </p>
                  <a href={PHONE_LINK} className="btn-primary w-full justify-center mb-4">
                    <Phone className="w-5 h-5" />
                    {PHONE_NUMBER}
                  </a>
                  <Link to="/contact" className="btn-outline border-white text-white hover:bg-white hover:text-slate-900 w-full justify-center">
                    <Calendar className="w-5 h-5" />
                    Book Online
                  </Link>
                </div>

                <div className="bg-white border border-slate-200 rounded-xl p-6">
                  <h3 className="font-bold text-slate-900 mb-4">Other Services</h3>
                  <ul className="space-y-3">
                    {otherServices.map(s => {
                      const Icon = iconMap[s.icon]
                      return (
                        <li key={s.id}>
                          <Link
                            to={`/services/${s.id}`}
                            className="flex items-center gap-3 text-slate-700 hover:text-accent transition-colors"
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
                    className="inline-block mt-4 text-accent font-semibold hover:underline"
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
