import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import ArticleCard from '../components/ArticleCard';
import articlesData from '../data/articles.json';

const CategoryPage = () => {
  const { category } = useParams();
  const [articles, setArticles] = useState([]);
  const [sortBy, setSortBy] = useState('newest');

  useEffect(() => {
    // Filter articles by category
    const categoryArticles = articlesData.filter(
      article => article.category.toLowerCase() === category.toLowerCase()
    );

    // Sort articles based on selected option
    let sortedArticles = [...categoryArticles];
    switch (sortBy) {
      case 'newest':
        sortedArticles.sort((a, b) => new Date(b.date) - new Date(a.date));
        break;
      case 'oldest':
        sortedArticles.sort((a, b) => new Date(a.date) - new Date(b.date));
        break;
      case 'popular':
        // Sort by featured first, then by date
        sortedArticles.sort((a, b) => {
          if (a.featured && !b.featured) return -1;
          if (!a.featured && b.featured) return 1;
          return new Date(b.date) - new Date(a.date);
        });
        break;
      default:
        break;
    }

    setArticles(sortedArticles);
  }, [category, sortBy]);

  const capitalizeCategory = (cat) => {
    return cat.charAt(0).toUpperCase() + cat.slice(1);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              {capitalizeCategory(category)}
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Explore our latest articles in {capitalizeCategory(category)} category
            </p>
          </div>
        </div>
      </section>

      {/* Sort and Filter */}
      <section className="py-8 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-gray-600">
              {articles.length} article{articles.length !== 1 ? 's' : ''} found
            </p>
            <div className="flex items-center gap-2">
              <label htmlFor="sort" className="text-sm font-medium text-gray-800">
                Sort by:
              </label>
              <select
                id="sort"
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent"
              >
                <option value="newest">Newest</option>
                <option value="oldest">Oldest</option>
                <option value="popular">Popular</option>
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {articles.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {articles.map((article) => (
                <ArticleCard key={article.id} article={article} />
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                No articles found
              </h2>
              <p className="text-gray-600 mb-8">
                There are no articles in the {capitalizeCategory(category)} category yet.
              </p>
              <a href="/" className="btn-primary">
                Browse All Articles
              </a>
            </div>
          )}
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gray-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Want More Content?</h2>
          <p className="text-gray-300 mb-8">
            Subscribe to our newsletter to get notified about new articles in {capitalizeCategory(category)}.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent"
            />
            <button className="btn-primary bg-red-600 hover:bg-red-700">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CategoryPage;