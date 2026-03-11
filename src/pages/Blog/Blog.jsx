import React from 'react';
import './Blog.css';

const Blog = () => {
  const blogPosts = [
    {
      title: "What is Cryptocurrency? A Beginner's Guide",
      excerpt: "Learn the basics of cryptocurrency, how it works, and why it matters...",
      date: "Mar 10, 2024",
      readTime: "5 min read",
      category: "Education"
    },
    {
      title: "Top 5 Cryptocurrencies to Watch in 2024",
      excerpt: "From Bitcoin to Ethereum, discover which cryptocurrencies are shaping the future...",
      date: "Mar 8, 2024",
      readTime: "7 min read",
      category: "Market Analysis"
    },
    {
      title: "Understanding Market Cap in Crypto",
      excerpt: "Market capitalization explained - what it means and why it's important for investors...",
      date: "Mar 5, 2024",
      readTime: "4 min read",
      category: "Education"
    },
    {
      title: "How to Read Crypto Charts",
      excerpt: "Master the basics of technical analysis and understand price movements...",
      date: "Mar 3, 2024",
      readTime: "6 min read",
      category: "Trading"
    },
    {
      title: "Crypto Security: Best Practices",
      excerpt: "Keep your investments safe with these essential security tips...",
      date: "Feb 28, 2024",
      readTime: "8 min read",
      category: "Security"
    },
    {
      title: "The Future of DeFi",
      excerpt: "Exploring decentralized finance and its potential to reshape banking...",
      date: "Feb 25, 2024",
      readTime: "6 min read",
      category: "Trends"
    }
  ];

  return (
    <div className="blog-page">
      <h1 className="gradient-text">Blog</h1>
      <p className="blog-subtitle">Latest news, guides, and crypto insights</p>
      
      <div className="blog-grid">
        {blogPosts.map((post, index) => (
          <div key={index} className="blog-card">
            <div className="blog-category">{post.category}</div>
            <h3>{post.title}</h3>
            <p className="blog-excerpt">{post.excerpt}</p>
            <div className="blog-meta">
              <span>{post.date}</span>
              <span>{post.readTime}</span>
            </div>
            <button className="read-more">Read More →</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;