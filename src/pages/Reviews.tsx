import { Link } from 'react-router-dom'
import { Phone, Star } from 'lucide-react'
import { PHONE_NUMBER, PHONE_LINK, reviews } from '../data/constants'

export default function Reviews() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-charcoal texture-grid text-white py-16 md:py-24">
        <div className="container-max px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl reveal">
            <span className="section-label">Real Feedback</span>
            <h1 className="text-4xl md:text-6xl font-heading font-bold mb-6">Customer Reviews</h1>
            <p className="text-xl text-gray-300">
              See what your Cape Cod neighbors have to say about our plumbing and mechanical services.
            </p>
          </div>
        </div>
      </section>

      {/* Reviews Grid */}
      <section className="section-padding bg-charcoal-light texture-hatch clip-diagonal-both">
        <div className="container-max">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {reviews.map((review, idx) => (
              <div key={review.id} className={`card p-6 reveal reveal-delay-${(idx % 4) + 1}`}>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-rust rounded-full flex items-center justify-center flex-shrink-0 shadow-rugged">
                    <span className="font-bold text-white">{review.name[0]}</span>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <div>
                        <div className="font-semibold text-white">{review.name}</div>
                        <div className="text-sm text-gray-500">{review.location}</div>
                      </div>
                      <div className="flex gap-0.5">
                        {[...Array(review.rating)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-rust text-rust" />
                        ))}
                      </div>
                    </div>
                    <blockquote className="text-gray-300 text-sm leading-relaxed">
                      "{review.text}"
                    </blockquote>
                    <div className="text-xs text-gray-500 mt-3">{review.date}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-charcoal texture-grid py-16">
        <div className="container-max px-4 sm:px-6 lg:px-8 text-center reveal">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-4">Ready to Experience the Difference?</h2>
          <p className="text-lg text-gray-400 mb-8 max-w-2xl mx-auto">
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
