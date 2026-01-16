export default function HomePage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <section className="text-center space-y-6 max-w-3xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-bold text-balance">
          Transform Your Fitness Journey
        </h1>
        <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400">
          Personalized training programs for busy professionals in Windsor, Ontario
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
          <button className="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
            Get Started
          </button>
          <button className="px-8 py-3 border border-gray-300 dark:border-gray-700 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
            Learn More
          </button>
        </div>
      </section>
    </div>
  );
}
