import { Link } from 'react-router-dom'
import { Phone, Calendar, Shield, Award, Clock, CheckCircle, Thermometer } from 'lucide-react'
import { PHONE_NUMBER, PHONE_LINK, PLUMBER_LICENSE, REFRIGERATION_LICENSE, YEARS_IN_BUSINESS, IMAGES } from '../data/constants'

export default function About() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-navy text-white py-16 md:py-20">
        <div className="container-max px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6">About EMS Enterprises</h1>
            <p className="text-xl text-gray-300">
              A licensed plumbing and mechanical contractor with over {YEARS_IN_BUSINESS} years of experience serving Cape Cod and Barnstable County.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src={IMAGES.about}
                alt="Our team at work"
                className="rounded-lg shadow-lg w-full"
              />
            </div>
            <div>
              <h2 className="text-3xl font-heading font-bold text-gray-900 mb-6">
                Cape Cod's Trusted Plumbing & Mechanical Contractor
              </h2>
              <div className="space-y-4 text-gray-700">
                <p>
                  EMS Enterprises was founded with a simple mission: provide honest, reliable plumbing and mechanical services that we'd want for our own homes.
                </p>
                <p>
                  As a licensed plumbing and mechanical contractor, we've seen just about every problem you can imagine. From emergency repairs at 2 AM to complete home repiping projects and HVAC installations, we bring the same level of care and expertise to every job.
                </p>
                <p>
                  When you call EMS Enterprises, you're not getting a faceless corporation—you're getting local professionals who take pride in their work and stand behind every repair.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Credentials */}
      <section className="section-padding bg-gray-50">
        <div className="container-max">
          <h2 className="text-3xl font-heading font-bold text-gray-900 text-center mb-12">
            Credentials & Qualifications
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Shield,
                title: 'Master Plumber',
                desc: PLUMBER_LICENSE
              },
              {
                icon: Thermometer,
                title: 'Universal Refrigeration',
                desc: REFRIGERATION_LICENSE
              },
              {
                icon: Award,
                title: `${YEARS_IN_BUSINESS}+ Years Experience`,
                desc: 'Residential & commercial'
              },
              {
                icon: CheckCircle,
                title: 'Fully Insured',
                desc: 'Complete liability coverage'
              }
            ].map((item, index) => (
              <div key={index} className="bg-white rounded-lg p-6 text-center border border-gray-200">
                <div className="w-14 h-14 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <item.icon className="w-7 h-7 text-accent" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="max-w-2xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-heading font-bold text-gray-900 mb-4">How We Work</h2>
            <p className="text-lg text-gray-600">
              Every job, big or small, gets the same commitment to quality and customer service.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Clock,
                title: 'Punctual',
                desc: 'We respect your time. When we say we\'ll be there, we\'ll be there—and we\'ll call if anything changes.'
              },
              {
                icon: CheckCircle,
                title: 'Honest',
                desc: 'You\'ll get a clear explanation of the problem and upfront pricing before any work begins.'
              },
              {
                icon: Award,
                title: 'Quality-Focused',
                desc: 'We use quality materials and proven techniques. Our work is guaranteed because we do it right.'
              }
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-14 h-14 bg-navy rounded flex items-center justify-center mx-auto mb-4">
                  <item.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-navy text-white py-16">
        <div className="container-max px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-heading font-bold mb-4">Ready to Work Together?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Whether you have an emergency or need to schedule routine service, we're here to help.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href={PHONE_LINK} className="btn-primary text-lg">
              <Phone className="w-5 h-5" />
              Call {PHONE_NUMBER}
            </a>
            <Link to="/contact" className="btn-outline border-white text-white hover:bg-white hover:text-navy text-lg">
              <Calendar className="w-5 h-5" />
              Request a Quote
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
