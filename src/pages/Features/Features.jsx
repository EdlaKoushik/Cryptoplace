import React from 'react';
import './Features.css';

const Features = () => {
  const features = [
    {
      title: "Real-Time Prices",
      description: "Live cryptocurrency prices updated every second from CoinGecko API",
      icon: "📊"
    },
    {
      title: "Multi-Currency Support",
      description: "View prices in USD, EUR, and INR with automatic conversion",
      icon: "💱"
    },
    {
      title: "Historical Charts",
      description: "10-day price history charts for every cryptocurrency",
      icon: "📈"
    },
    {
      title: "Market Rankings",
      description: "Top 100 cryptocurrencies ranked by market cap",
      icon: "🏆"
    }
  ];

  return (
    <div className="features-page">
      <h1 className="gradient-text">Features</h1>
      <p className="features-subtitle">Everything you need to track cryptocurrencies</p>
      
      <div className="features-grid">
        {features.map((feature, index) => (
          <div key={index} className="feature-card">
            <div className="feature-icon">{feature.icon}</div>
            <h3>{feature.title}</h3>
            <p>{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Features;