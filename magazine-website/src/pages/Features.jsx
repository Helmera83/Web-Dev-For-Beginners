const Features = () => {
  const features = [
    {
      title: "Expert Content",
      description: "All our articles are written by experienced developers and industry experts.",
      icon: "🎯"
    },
    {
      title: "Practical Examples",
      description: "Every tutorial includes real-world examples and working code samples.",
      icon: "💡"
    },
    {
      title: "Regular Updates",
      description: "We publish new content weekly, keeping you up-to-date with the latest trends.",
      icon: "🔄"
    },
    {
      title: "Responsive Design",
      description: "Our website works perfectly on all devices, from mobile to desktop.",
      icon: "📱"
    },
    {
      title: "Search & Filter",
      description: "Easily find content by category, tags, or using our powerful search feature.",
      icon: "🔍"
    },
    {
      title: "Community Driven",
      description: "Join our community of developers and share your knowledge and experiences.",
      icon: "👥"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Why Choose ModernMag?
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover what makes ModernMag the go-to platform for web development knowledge 
            and insights. Built by developers, for developers.
          </p>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-sm hover:shadow-lg transition-shadow duration-300 p-8 text-center"
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-800 text-center mb-12">
            Our Impact
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-red-600 mb-2">50+</div>
              <div className="text-gray-600">Articles Published</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-red-600 mb-2">10K+</div>
              <div className="text-gray-600">Monthly Readers</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-red-600 mb-2">6</div>
              <div className="text-gray-600">Categories Covered</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-red-600 mb-2">95%</div>
              <div className="text-gray-600">Reader Satisfaction</div>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-xl shadow-sm p-8 md:p-12">
            <h2 className="text-3xl font-bold text-gray-800 text-center mb-8">
              Built with Modern Technology
            </h2>
            <p className="text-gray-600 text-center mb-12 max-w-3xl mx-auto">
              ModernMag is built using the latest web technologies to ensure fast loading times, 
              excellent user experience, and seamless performance across all devices.
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mb-3">
                  <span className="text-2xl font-bold text-blue-600">⚛️</span>
                </div>
                <h4 className="font-semibold text-gray-800">React</h4>
                <p className="text-sm text-gray-600">Component-based UI</p>
              </div>
              
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 bg-purple-100 rounded-lg flex items-center justify-center mb-3">
                  <span className="text-2xl font-bold text-purple-600">⚡</span>
                </div>
                <h4 className="font-semibold text-gray-800">Vite</h4>
                <p className="text-sm text-gray-600">Fast build tool</p>
              </div>
              
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 bg-cyan-100 rounded-lg flex items-center justify-center mb-3">
                  <span className="text-2xl font-bold text-cyan-600">🎨</span>
                </div>
                <h4 className="font-semibold text-gray-800">Tailwind</h4>
                <p className="text-sm text-gray-600">Utility-first CSS</p>
              </div>
              
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 bg-green-100 rounded-lg flex items-center justify-center mb-3">
                  <span className="text-2xl font-bold text-green-600">🚀</span>
                </div>
                <h4 className="font-semibold text-gray-800">Performance</h4>
                <p className="text-sm text-gray-600">Optimized & Fast</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gray-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Get Started?</h2>
          <p className="text-gray-300 mb-8">
            Join thousands of developers who trust ModernMag for their learning journey.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/" className="btn-primary bg-red-600 hover:bg-red-700">
              Start Reading
            </a>
            <a href="/about" className="btn-secondary text-white border-white hover:bg-white hover:text-gray-800">
              Learn More
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Features;