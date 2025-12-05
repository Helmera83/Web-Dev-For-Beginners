const About = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            About ModernMag
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            We're passionate about sharing knowledge and empowering developers to build better web experiences.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-xl shadow-sm p-8 md:p-12">
            <div className="prose prose-lg max-w-none">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Our Mission</h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                ModernMag was founded with a simple mission: to make web development knowledge accessible to everyone. 
                We believe that great content, clear explanations, and practical examples can help developers at any 
                level improve their skills and build amazing things on the web.
              </p>

              <h2 className="text-3xl font-bold text-gray-800 mb-6 mt-12">What We Cover</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">Frontend Development</h3>
                  <p className="text-gray-600">
                    React, Vue, Angular, vanilla JavaScript, CSS, HTML, and modern frontend frameworks.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">Design & UX</h3>
                  <p className="text-gray-600">
                    User experience design, accessibility, responsive design, and modern CSS techniques.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">Development Tools</h3>
                  <p className="text-gray-600">
                    Build tools, testing frameworks, deployment strategies, and development workflows.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">Industry Trends</h3>
                  <p className="text-gray-600">
                    Emerging technologies, best practices, and insights from industry experts.
                  </p>
                </div>
              </div>

              <h2 className="text-3xl font-bold text-gray-800 mb-6 mt-12">Our Team</h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Our team consists of experienced developers, designers, and technical writers who are passionate 
                about sharing their knowledge. We come from diverse backgrounds but share a common goal: helping 
                you succeed in your web development journey.
              </p>

              <div className="bg-gray-50 p-6 rounded-lg mt-8">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Join Our Community</h3>
                <p className="text-gray-600 mb-4">
                  Want to contribute to ModernMag? We're always looking for talented writers and developers 
                  to share their expertise with our community.
                </p>
                <a href="/contact" className="btn-primary">
                  Get in Touch
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;