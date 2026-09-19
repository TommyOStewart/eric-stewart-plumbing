import { Link } from 'react-router-dom'
import { Phone, Calendar, Shield, Clock, Award, CheckCircle, Star, MapPin, Wrench, Droplets, Flame, Search, AlertTriangle, Bath, Thermometer } from 'lucide-react'
import { PHONE_NUMBER, PHONE_LINK, PLUMBER_LICENSE, REFRIGERATION_LICENSE, YEARS_IN_BUSINESS, services, reviews, serviceAreas, IMAGES } from '../data/constants'
import PlumbingLogo from '../components/PlumbingLogo'

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
      <section className="relative bg-charcoal text-white texture-grid overflow-hidden pb-20 md:pb-28">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src={IMAGES.hero}
            alt="Professional plumbing work"
            className="w-full h-full object-cover opacity-25"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-charcoal via-charcoal/95 to-charcoal/70" />
          <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-transparent to-transparent" />
        </div>

        <div className="relative container-max section-padding pb-0">
          <div className="max-w-2xl reveal">
            <div className="inline-flex items-center gap-2 bg-rust/15 text-rust-light px-4 py-2 rounded text-sm font-bold mb-6 border border-rust/40 uppercase tracking-wider">
              <Shield className="w-4 h-4" />
              Licensed & Insured • {PLUMBER_LICENSE}
            </div>

            <h1 className="text-4xl md:text-6xl font-heading font-bold leading-[1.05] mb-6 tracking-tight">
              Cape Cod's <span className="text-rust">Trusted</span> Plumbing & Mechanical Contractor
            </h1>

            <p className="text-xl text-gray-300 mb-8">
              {YEARS_IN_BUSINESS}+ years serving Barnstable County. Fast response, honest pricing, and work that's guaranteed.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a href={PHONE_LINK} className="btn-primary text-lg px-8 py-4">
                <Phone className="w-5 h-5" />
                Call {PHONE_NUMBER}
              </a>
              <Link to="/contact" className="btn-outline text-lg px-8 py-4">
                <Calendar className="w-5 h-5" />
                Request a Quote
              </Link>
            </div>

            <div className="mt-10 flex flex-wrap gap-6 text-gray-300 text-sm">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-rust" />
                <span>24/7 Emergency Service</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-rust" />
                <span>Same-Day Appointments</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-rust" />
                <span>Upfront Pricing</span>
              </div>
            </div>
          </div>

          {/* Hero showcase of the animated wordmark */}
          <div className="mt-14 md:mt-20 flex flex-col items-start reveal reveal-delay-2">
            <span className="section-label">We Fix What Leaks</span>
            <div className="bg-charcoal-lighter/60 border border-charcoal-border rounded-xl p-6 md:p-10 shadow-rugged-lg texture-brushed">
              <PlumbingLogo size="xl" className="text-white" />
            </div>
          </div>
        </div>
      </section>

      {/* Trust Bar - diagonal cut into next section */}
      <section className="bg-charcoal-lighter py-10 border-y border-charcoal-border relative -mt-6 clip-diagonal-both">
        <div className="container-max px-4 sm:px-6 lg:px-8 pt-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { icon: Shield, title: PLUMBER_LICENSE, sub: 'Master Plumber' },
              { icon: Thermometer, title: REFRIGERATION_LICENSE, sub: 'Universal Refrigeration' },
              { icon: Award, title: `${YEARS_IN_BUSINESS}+ Years`, sub: 'In Business' },
              { icon: Clock, title: '24/7 Emergency', sub: 'Always Available' },
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-3">
                <div className="w-12 h-12 bg-rust rounded flex items-center justify-center flex-shrink-0 shadow-rugged icon-hover">
                  <item.icon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="font-bold text-white text-sm">{item.title}</div>
                  <div className="text-xs text-gray-400">{item.sub}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="section-padding bg-charcoal texture-hatch">
        <div className="container-max">
          <div className="text-center mb-12 reveal">
            <span className="section-label">What We Do</span>
            <h2 className="text-3xl md:text-5xl font-heading font-bold text-white mb-4">Our Services</h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              From emergency repairs to planned installations, we handle all your plumbing and mechanical needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, idx) => {
              const IconComponent = iconMap[service.icon]
              return (
                <Link
                  key={service.id}
                  to={`/services/${service.id}`}
                  className={`card overflow-hidden group rivets reveal reveal-delay-${(idx % 4) + 1}`}
                >
                  <div className="aspect-video relative overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 to-transparent" />
                    <div className="absolute bottom-3 left-3 w-10 h-10 bg-rust rounded flex items-center justify-center shadow-rugged">
                      {IconComponent && <IconComponent className="w-5 h-5 text-white" />}
                    </div>
                  </div>
                  <div className="p-5">
                    <h3 className="text-lg font-bold text-white mb-2 group-hover:text-rust-light transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-gray-400 text-sm">{service.shortDesc}</p>
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
      <section className="section-padding bg-charcoal-light texture-grid clip-diagonal-both">
        <div className="container-max">
          <div className="text-center mb-12 reveal">
            <span className="section-label">Behind The Scenes</span>
            <h2 className="text-3xl md:text-5xl font-heading font-bold text-white mb-4">Watch Our Work</h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              Take a look behind the scenes at a recent project completed by our team.
            </p>
          </div>
          <div className="max-w-4xl mx-auto rounded-lg overflow-hidden shadow-rugged-lg border border-charcoal-border">
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
      <section className="section-padding bg-charcoal">
        <div className="container-max">
          <div className="text-center mb-12 reveal">
            <span className="section-label">Why Us</span>
            <h2 className="text-3xl md:text-5xl font-heading font-bold text-white mb-4">Why Choose EMS Enterprises?</h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
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
              <div key={index} className={`card p-6 reveal reveal-delay-${index + 1}`}>
                <div className="w-12 h-12 bg-rust/15 border border-rust/40 rounded flex items-center justify-center mb-4 icon-hover">
                  <item.icon className="w-6 h-6 text-rust-light" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
                <p className="text-gray-400 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className="section-padding bg-charcoal-light texture-hatch clip-diagonal-both">
        <div className="container-max">
          <div className="text-center mb-12 reveal">
            <span className="section-label">Customer Love</span>
            <h2 className="text-3xl md:text-5xl font-heading font-bold text-white mb-4">What Our Customers Say</h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              Don't just take our word for it. Here's what your Cape Cod neighbors say.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {reviews.slice(0, 3).map((review, idx) => (
              <div key={review.id} className={`card p-6 reveal reveal-delay-${idx + 1}`}>
                <div className="flex gap-1 mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-rust text-rust" />
                  ))}
                </div>
                <blockquote className="text-gray-300 mb-4 text-sm leading-relaxed">
                  "{review.text}"
                </blockquote>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-rust rounded-full flex items-center justify-center">
                    <span className="font-bold text-white text-sm">{review.name[0]}</span>
                  </div>
                  <div>
                    <div className="font-semibold text-white text-sm">{review.name}</div>
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
      <section className="section-padding bg-charcoal texture-grid">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="reveal">
              <span className="section-label">Where We Work</span>
              <h2 className="text-3xl md:text-5xl font-heading font-bold text-white mb-6">Serving Cape Cod & Barnstable County</h2>
              <p className="text-gray-400 text-lg mb-8">
                EMS Enterprises provides reliable plumbing and mechanical services throughout Cape Cod. From Falmouth to Provincetown, we're ready to help.
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {serviceAreas.map(area => (
                  <div key={area} className="flex items-center gap-2 text-gray-300 text-sm">
                    <MapPin className="w-4 h-4 text-rust flex-shrink-0" />
                    <span>{area}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="card p-8 reveal reveal-delay-2">
              <h3 className="text-2xl font-heading font-bold mb-4 text-white">Need Service?</h3>
              <p className="text-gray-400 mb-6">
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
