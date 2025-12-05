import { Link } from 'react-router-dom';

const ArticleCard = ({ article, featured = false }) => {
  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  if (featured) {
    return (
      <article className="article-card col-span-2 lg:col-span-2">
        <Link to={`/article/${article.id}`} className="group">
          <div className="aspect-w-16 aspect-h-9 mb-4">
            <img
              src={article.heroImage}
              alt={article.title}
              className="w-full h-48 lg:h-64 object-cover rounded-lg group-hover:scale-105 transition-transform duration-300"
            />
          </div>
          <div className="p-6">
            <div className="flex items-center justify-between mb-3">
              <span className="category-tag">{article.category}</span>
              <span className="text-sm text-gray-600">{article.readTime}</span>
            </div>
            <h2 className="text-2xl lg:text-3xl font-bold text-gray-800 mb-3 group-hover:text-red-600 transition-colors duration-200">
              {article.title}
            </h2>
            <p className="text-gray-600 mb-4 line-clamp-3">
              {article.excerpt}
            </p>
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <span className="text-sm font-medium text-gray-800">{article.author}</span>
                <span className="mx-2 text-gray-600">•</span>
                <span className="text-sm text-gray-600">{formatDate(article.date)}</span>
              </div>
            </div>
          </div>
        </Link>
      </article>
    );
  }

  return (
    <article className="article-card">
      <Link to={`/article/${article.id}`} className="group">
        <div className="aspect-w-16 aspect-h-9 mb-4">
          <img
            src={article.heroImage}
            alt={article.title}
            className="w-full h-48 object-cover rounded-t-xl group-hover:scale-105 transition-transform duration-300"
          />
        </div>
        <div className="p-6">
          <div className="flex items-center justify-between mb-3">
            <span className="category-tag">{article.category}</span>
            <span className="text-sm text-gray-600">{article.readTime}</span>
          </div>
          <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-red-600 transition-colors duration-200">
            {article.title}
          </h3>
          <p className="text-gray-600 mb-4 line-clamp-2">
            {article.excerpt}
          </p>
          <div className="flex items-center">
            <span className="text-sm font-medium text-gray-800">{article.author}</span>
            <span className="mx-2 text-gray-600">•</span>
            <span className="text-sm text-gray-600">{formatDate(article.date)}</span>
          </div>
        </div>
      </Link>
    </article>
  );
};

export default ArticleCard;