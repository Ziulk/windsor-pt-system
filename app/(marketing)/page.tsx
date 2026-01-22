export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16 md:py-24">
        <div className="text-center space-y-6 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold text-balance leading-tight">
            Get the Body You Want in Just 8 Weeks
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-400">
            Personal training designed for busy professionals in Windsor, Ontario
          </p>
          <p className="text-lg text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
            No guesswork. No wasted time. Just proven results with personalized
            1-on-1 coaching that fits your schedule.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
            <a
              href="#book-consultation"
              className="px-8 py-4 bg-blue-600 text-white text-lg font-semibold rounded-lg hover:bg-blue-700 transition-colors shadow-lg"
            >
              Book Free Consultation
            </a>
          </div>
        </div>
      </section>

      {/* Offer Section */}
      <section className="bg-gray-50 dark:bg-gray-900 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold">
              8-Week Transformation Program
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400">
              Everything you need to achieve real, lasting results
            </p>
            <div className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg space-y-4">
              <div className="text-5xl font-bold text-blue-600">$399 CAD</div>
              <p className="text-gray-600 dark:text-gray-400">
                Complete 8-week program
              </p>
              <ul className="text-left space-y-3 max-w-md mx-auto">
                <li className="flex items-start gap-3">
                  <span className="text-green-600 font-bold">✓</span>
                  <span>Personalized workout plans tailored to your goals</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-600 font-bold">✓</span>
                  <span>Custom nutrition guidance for real results</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-600 font-bold">✓</span>
                  <span>2x weekly 1-on-1 training sessions (45-60 min)</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-600 font-bold">✓</span>
                  <span>Progress tracking and accountability</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-600 font-bold">✓</span>
                  <span>Flexible scheduling for busy professionals</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Why Choose Personal Training?
          </h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="text-center space-y-3">
              <div className="text-4xl">🎯</div>
              <h3 className="text-xl font-semibold">Personalized Plans</h3>
              <p className="text-gray-600 dark:text-gray-400">
                No cookie-cutter programs. Every workout and meal plan is
                designed specifically for your body, goals, and lifestyle.
              </p>
            </div>
            <div className="text-center space-y-3">
              <div className="text-4xl">⚡</div>
              <h3 className="text-xl font-semibold">Fast Results</h3>
              <p className="text-gray-600 dark:text-gray-400">
                See visible changes in 8 weeks. Our proven system eliminates
                wasted effort and maximizes every session.
              </p>
            </div>
            <div className="text-center space-y-3">
              <div className="text-4xl">💪</div>
              <h3 className="text-xl font-semibold">Expert Guidance</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Professional coaching keeps you safe, motivated, and on track
                to crush your fitness goals.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Guarantee Section */}
      <section className="bg-blue-50 dark:bg-blue-950 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold">
              100% Satisfaction Guarantee
            </h2>
            <p className="text-lg text-gray-700 dark:text-gray-300">
              If you're not completely satisfied after your first two sessions,
              I'll refund your money—no questions asked. You have nothing to
              lose and everything to gain.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="book-consultation" className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold">
              Ready to Transform Your Body?
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              Book your free 15-minute consultation. We'll discuss your goals,
              answer your questions, and create a plan that works for you.
            </p>
            <div className="space-y-4">
              <a
                href="https://calendar.app.google/M1kTS9VLozU6zixN9"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-8 py-4 bg-blue-600 text-white text-lg font-semibold rounded-lg hover:bg-blue-700 transition-colors shadow-lg"
              >
                Schedule Free Consultation
              </a>
              <p className="text-sm text-gray-500">
                Limited spots available • Windsor, Ontario
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-400">
            © {new Date().getFullYear()} Windsor Personal Training. All rights
            reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
