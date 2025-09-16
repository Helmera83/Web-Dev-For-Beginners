# ModernMag - Modern Magazine Website

A modern, responsive magazine-style website built with React, Vite, and Tailwind CSS. This project demonstrates modern web development practices with a clean, elegant design perfect for publishing articles, tutorials, and content.

## ✨ Features

- **🎨 Modern Design**: Clean, magazine-style layout with professional typography
- **📱 Fully Responsive**: Optimized for all devices from mobile to desktop
- **⚡ Fast Performance**: Built with Vite for lightning-fast development and builds
- **🧭 React Router**: Seamless navigation between pages
- **🎯 SEO Optimized**: Proper meta tags and semantic HTML structure
- **🔍 Category Filtering**: Browse articles by category with smart filtering
- **📖 Rich Content**: Support for featured articles, excerpts, and full content
- **🎪 Interactive UI**: Hover effects, transitions, and modern interactions
- **♿ Accessible**: Built with accessibility best practices in mind

## 🛠️ Tech Stack

- **React 18** - Modern React with hooks
- **Vite** - Next generation frontend tooling
- **React Router 6** - Declarative routing for React
- **Tailwind CSS** - Utility-first CSS framework
- **Modern JavaScript (ES6+)** - Latest JavaScript features

## 🚀 Getting Started

### Prerequisites

- Node.js (version 18 or higher)
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd magazine-website
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   
   Navigate to `http://localhost:5173` to see the application

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint for code quality

## 📄 Pages & Features

### Home Page (`/`)
- Hero section with call-to-action
- Category filtering buttons
- Featured articles grid
- Latest articles grid
- Newsletter signup section

### Features Page (`/features`)
- Showcases website capabilities
- Technology stack information
- Statistics and metrics
- Feature highlights with icons

### Categories Page (`/categories`)
- Overview of all article categories
- Article counts per category
- Popular articles by category
- Category descriptions

### Category Pages (`/category/:category`)
- Articles filtered by specific category
- Sorting options (newest, oldest, popular)
- Category-specific call-to-action

### Article Detail Page (`/article/:id`)
- Full article content with formatting
- Author information and publish date
- Hero image and tags
- Related articles suggestions
- Breadcrumb navigation

### About Page (`/about`)
- Information about the magazine
- Mission statement
- Team information
- Contribution guidelines

### Contact Page (`/contact`)
- Contact form with validation
- Contact information
- Social media links
- Multiple contact methods

## 🎨 Design Features

### Typography
- **Headings**: Playfair Display (serif) for elegant titles
- **Body**: Inter (sans-serif) for excellent readability
- Consistent font weights and spacing

### Color Scheme
- **Primary**: Dark gray (#1a1a1a) for text
- **Secondary**: Medium gray (#6b7280) for supporting text
- **Accent**: Red (#dc2626) for highlights and CTAs
- **Background**: Light gray (#f9fafb) for sections

## 📊 Sample Data

The project includes sample article data in `src/data/articles.json` with:
- 6 sample articles across different categories
- Realistic content including titles, excerpts, and full content
- Author information and publication dates
- Featured article flags and read time estimates
- Category tags and hero images (using Unsplash)

## 🌐 SEO Features

- Semantic HTML structure with proper heading hierarchy
- Meta tags for description, keywords, and author
- Open Graph tags for social media sharing
- Twitter Card meta tags
- Canonical URLs and robots meta tags
- Accessible navigation and content structure

## 📱 Responsive Design

The website is fully responsive with breakpoints at:
- **Mobile**: 320px - 768px
- **Tablet**: 768px - 1024px
- **Desktop**: 1024px and above

Key responsive features:
- Collapsible mobile navigation
- Responsive grid layouts
- Scalable typography
- Touch-friendly interactive elements

## 🚀 Deployment

### Build for Production
```bash
npm run build
```

The build output will be in the `dist/` directory, ready for deployment to:
- Netlify
- Vercel
- GitHub Pages
- Any static hosting service

---

**Built with ❤️ using modern web technologies**
