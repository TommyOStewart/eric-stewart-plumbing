import { Link } from 'react-router-dom'
import { Phone, Calendar, Shield, Clock, Award, CheckCircle, Star, MapPin, Wrench, Droplets, Flame, Search, AlertTriangle, Bath, Thermometer } from 'lucide-react'
import { PHONE_NUMBER, PHONE_LINK, PLUMBER_LICENSE, REFRIGERATION_LICENSE, YEARS_IN_BUSINESS, services, reviews, serviceAreas, IMAGES } from '../data/constants'

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  AlertTriangle,
  Droplets,
  Flame,
  Search,
  Wrench,
  Bath,
  Thermometer
}

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-navy text-white">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src={IMAGES.hero}
            alt="Professional plumbing work"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/95 to-navy/80" />
        </div>

        <div className="relative container-max section-padding">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 bg-white/10 text-white px-4 py-2 rounded text-sm font-medium mb-6 border border-white/20">
              <Shield className="w-4 h-4" />
              Licensed & Insured • {PLUMBER_LICENSE}
            </div>
            
            <h1 className="text-4xl md:text-5xl font-heading font-bold leading-tight mb-6">
              Cape Cod's Trusted Plumbing & Mechanical Contractor
            </h1>
            
            <p className="text-xl text-gray-300 mb-8">
              {YEARS_IN_BUSINESS}+ years serving Barnstable County. Fast response, honest pricing, and work that's guaranteed.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a href={PHONE_LINK} className="btn-primary text-lg px-8 py-4">
                <Phone className="w-5 h-5" />
                Call {PHONE_NUMBER}
              </a>
              <Link to="/contact" className="btn-outline border-white text-white hover:bg-white hover:text-navy text-lg px-8 py-4">
                <Calendar className="w-5 h-5" />
                Request a Quote
              </Link>
            </div>

            <div className="mt-10 flex flex-wrap gap-6 text-gray-300 text-sm">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-accent" />
                <span>24/7 Emergency Service</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-accent" />
                <span>Same-Day Appointments</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-accent" />
                <span>Upfront Pricing</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="bg-gray-100 py-8 border-b border-gray-200">
        <div className="container-max px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-navy rounded flex items-center justify-center flex-shrink-0">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <div>
                <div className="font-bold text-gray-900 text-sm">{PLUMBER_LICENSE}</div>
                <div className="text-xs text-gray-600">Master Plumber</div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-navy rounded flex items-center justify-center flex-shrink-0">
                <Thermometer className="w-6 h-6 text-white" />
              </div>
              <div>
                <div className="font-bold text-gray-900 text-sm">{REFRIGERATION_LICENSE}</div>
                <div className="text-xs text-gray-600">Universal Refrigeration</div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-navy rounded flex items-center justify-center flex-shrink-0">
                <Award className="w-6 h-6 text-white" />
              </div>
              <div>
                <div className="font-bold text-gray-900 text-sm">{YEARS_IN_BUSINESS}+ Years</div>
                <div className="text-xs text-gray-600">In Business</div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-navy rounded flex items-center justify-center flex-shrink-0">
                <Clock className="w-6 h-6 text-white" />
              </div>
              <div>
                <div className="font-bold text-gray-900 text-sm">24/7 Emergency</div>
                <div className="text-xs text-gray-600">Always Available</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-4">Our Services</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              From emergency repairs to planned installations, we handle all your plumbing and mechanical needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map(service => {
              const IconComponent = iconMap[service.icon]
              return (
                <Link
                  key={service.id}
                  to={`/services/${service.id}`}
                  className="card overflow-hidden group"
                >
                  <div className="aspect-video relative overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                    <div className="absolute bottom-3 left-3 w-10 h-10 bg-accent rounded flex items-center justify-center">
                      {IconComponent && <IconComponent className="w-5 h-5 text-white" />}
                    </div>
                  </div>
                  <div className="p-5">
                    <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-accent transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 text-sm">{service.shortDesc}</p>
                  </div>
                </Link>
              )
            })}
          </div>

          <div className="text-center mt-10">
            <Link to="/services" className="btn-secondary">
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* Watch Our Work */}
      <section className="section-padding bg-gray-900">
        <div className="container-max">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-4">Watch Our Work</h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Take a look behind the scenes at a recent project completed by our team.
            </p>
          </div>
          <div className="max-w-4xl mx-auto rounded-lg overflow-hidden shadow-2xl border border-white/10">
            <video
              src={IMAGES.buildVideo}
              controls
              className="w-full h-auto bg-black"
              preload="metadata"
            >
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}

      <section className="section-padding bg-gray-50">
        <div className="container-max">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-4">Why Choose EMS Enterprises?</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              When you need a plumber on Cape Cod, you need someone you can trust.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Shield,
                title: 'Licensed & Insured',
                desc: 'Fully licensed with comprehensive insurance for your peace of mind.'
              },
              {
                icon: CheckCircle,
                title: 'Upfront Pricing',
                desc: 'No surprises. Clear quotes before any work begins.'
              },
              {
                icon: Clock,
                title: 'Punctual & Reliable',
                desc: 'We show up on time, every time. Your schedule matters.'
              },
              {
                icon: Award,
                title: 'Work Guaranteed',
                desc: 'We stand behind our work with a satisfaction guarantee.'
              }
            ].map((item, index) => (
              <div key={index} className="bg-white rounded-lg p-6 border border-gray-200">
                <div className="w-12 h-12 bg-accent/10 rounded flex items-center justify-center mb-4">
                  <item.icon className="w-6 h-6 text-accent" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-4">What Our Customers Say</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Don't just take our word for it. Here's what your Cape Cod neighbors say.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {reviews.slice(0, 3).map(review => (
              <div key={review.id} className="bg-gray-50 rounded-lg p-6 border border-gray-200">
                <div className="flex gap-1 mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <blockquote className="text-gray-700 mb-4 text-sm leading-relaxed">
                  "{review.text}"
                </blockquote>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-navy rounded-full flex items-center justify-center">
                    <span className="font-bold text-white text-sm">{review.name[0]}</span>
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900 text-sm">{review.name}</div>
                    <div className="text-xs text-gray-500">{review.location}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link to="/reviews" className="btn-outline">
              Read More Reviews
            </Link>
          </div>
        </div>
      </section>

      {/* Service Area */}
      <section className="section-padding bg-navy text-white">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">Serving Cape Cod & Barnstable County</h2>
              <p className="text-gray-300 text-lg mb-8">
                EMS Enterprises provides reliable plumbing and mechanical services throughout Cape Cod. From Falmouth to Provincetown, we're ready to help.
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {serviceAreas.map(area => (
                  <div key={area} className="flex items-center gap-2 text-gray-300 text-sm">
                    <MapPin className="w-4 h-4 text-accent flex-shrink-0" />
                    <span>{area}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-navy-light rounded-lg p-8 border border-white/10">
              <h3 className="text-2xl font-heading font-bold mb-4">Need Service?</h3>
              <p className="text-gray-300 mb-6">
                Give us a call to discuss your plumbing or mechanical needs. We're always happy to help Cape Cod residents.
              </p>
              <a href={PHONE_LINK} className="btn-primary w-full justify-center text-lg">
                <Phone className="w-5 h-5" />
                Call {PHONE_NUMBER}
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
