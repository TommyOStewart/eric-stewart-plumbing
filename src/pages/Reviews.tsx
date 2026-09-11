import { Link } from 'react-router-dom'
import { Phone, Star } from 'lucide-react'
import { PHONE_NUMBER, PHONE_LINK, reviews } from '../data/constants'

export default function Reviews() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-navy text-white py-16 md:py-20">
        <div className="container-max px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6">Customer Reviews</h1>
            <p className="text-xl text-gray-300">
              See what your Cape Cod neighbors have to say about our plumbing and mechanical services.
            </p>
          </div>
        </div>
      </section>

      {/* Reviews Grid */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {reviews.map(review => (
              <div key={review.id} className="bg-gray-50 rounded-lg p-6 border border-gray-200">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-navy rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="font-bold text-white">{review.name[0]}</span>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <div>
                        <div className="font-semibold text-gray-900">{review.name}</div>
                        <div className="text-sm text-gray-500">{review.location}</div>
                      </div>
                      <div className="flex gap-0.5">
                        {[...Array(review.rating)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                        ))}
                      </div>
                    </div>
                    <blockquote className="text-gray-700 text-sm leading-relaxed">
                      "{review.text}"
                    </blockquote>
                    <div className="text-xs text-gray-400 mt-3">{review.date}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gray-50 py-16">
        <div className="container-max px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-heading font-bold text-gray-900 mb-4">Ready to Experience the Difference?</h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Join our satisfied customers throughout Cape Cod. Call us today for reliable plumbing and mechanical services.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href={PHONE_LINK} className="btn-primary text-lg">
              <Phone className="w-5 h-5" />
              Call {PHONE_NUMBER}
            </a>
            <Link to="/contact" className="btn-secondary text-lg">
              Request a Quote
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
