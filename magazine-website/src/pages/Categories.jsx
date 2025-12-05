import { Link } from 'react-router-dom';
import articlesData from '../data/articles.json';

const Categories = () => {
  // Get all unique categories with article counts
  const categoryStats = articlesData.reduce((acc, article) => {
    if (!acc[article.category]) {
      acc[article.category] = {
        name: article.category,
        count: 0,
        latestDate: article.date,
        description: getCategoryDescription(article.category)
      };
    }
    acc[article.category].count++;
    if (new Date(article.date) > new Date(acc[article.category].latestDate)) {
      acc[article.category].latestDate = article.date;
    }
    return acc;
  }, {});

  const categories = Object.values(categoryStats);

  function getCategoryDescription(category) {
    const descriptions = {
      'Technology': 'Latest trends and innovations in web technology',
      'Design': 'User interface design, user experience, and visual design principles',
      'Development': 'Programming techniques, best practices, and development workflows',
      'Accessibility': 'Making the web inclusive and accessible for everyone',
      'Architecture': 'Software architecture patterns and system design',
      'Mobile': 'Mobile web development and progressive web apps'
    };
    return descriptions[category] || 'Articles and insights about web development';
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Explore Categories
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Browse our content by category to find exactly what you're looking for. 
            From cutting-edge technology to practical development tips.
          </p>
        </div>
      </section>

      {/* Categories Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categories.map((category) => (
              <Link
                key={category.name}
                to={`/category/${category.name.toLowerCase()}`}
                className="group bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden border border-gray-100 hover:border-red-600"
              >
                <div className="p-8">
                  <div className="flex items-center justify-between mb-4">
                    <h2 className="text-2xl font-bold text-gray-800 group-hover:text-red-600 transition-colors duration-300">
                      {category.name}
                    </h2>
                    <span className="bg-red-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                      {category.count}
                    </span>
                  </div>
                  
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {category.description}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">
                      Latest: {new Date(category.latestDate).toLocaleDateString()}
                    </span>
                    <div className="flex items-center text-red-600 group-hover:translate-x-2 transition-transform duration-300">
                      <span className="text-sm font-medium mr-2">Explore</span>
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Articles by Category */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-12 text-center">
            Popular Articles by Category
          </h2>
          
          <div className="space-y-12">
            {categories.slice(0, 3).map((category) => {
              const categoryArticles = articlesData
                .filter(article => article.category === category.name)
                .slice(0, 3);
              
              return (
                <div key={category.name}>
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="text-2xl font-bold text-gray-800">
                      {category.name}
                    </h3>
                    <Link
                      to={`/category/${category.name.toLowerCase()}`}
                      className="text-red-600 hover:underline font-medium"
                    >
                      View all →
                    </Link>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {categoryArticles.map((article) => (
                      <Link
                        key={article.id}
                        to={`/article/${article.id}`}
                        className="group"
                      >
                        <article className="bg-gray-50 rounded-lg overflow-hidden hover:shadow-md transition-shadow duration-300">
                          <img
                            src={article.heroImage}
                            alt={article.title}
                            className="w-full h-40 object-cover group-hover:scale-105 transition-transform duration-300"
                          />
                          <div className="p-4">
                            <h4 className="font-semibold text-gray-800 mb-2 group-hover:text-red-600 transition-colors duration-300">
                              {article.title}
                            </h4>
                            <div className="flex items-center justify-between text-sm text-gray-600">
                              <span>{article.author}</span>
                              <span>{article.readTime}</span>
                            </div>
                          </div>
                        </article>
                      </Link>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gray-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Can't find what you're looking for?
          </h2>
          <p className="text-gray-300 mb-8">
            Let us know what topics you'd like to see covered, or suggest a new category.
          </p>
          <Link to="/contact" className="btn-primary bg-red-600 hover:bg-red-700">
            Contact Us
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Categories;