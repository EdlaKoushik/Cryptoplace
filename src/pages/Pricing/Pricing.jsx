import React from 'react';
import './Pricing.css';

const Pricing = () => {
  const plans = [
    {
      name: "Free",
      price: "$0",
      period: "forever",
      features: [
        "Real-time prices",
        "100+ cryptocurrencies",
        "24h price changes",
        "Market cap rankings"
      ],
      buttonText: "Current Plan",
      recommended: false
    },
    {
      name: "Pro",
      price: "$9.99",
      period: "per month",
      features: [
        "Everything in Free",
        "Price alerts",
        "Portfolio tracking",
        "Historical data export",
        "API access"
      ],
      buttonText: "Upgrade",
      recommended: true
    },
    {
      name: "Enterprise",
      price: "$49.99",
      period: "per month",
      features: [
        "Everything in Pro",
        "Multiple portfolios",
        "Team access",
        "Priority support",
        "Custom reports"
      ],
      buttonText: "Contact Sales",
      recommended: false
    }
  ];

  return (
    <div className="pricing-page">
      <h1 className="gradient-text">Pricing</h1>
      <p className="pricing-subtitle">Choose the plan that's right for you</p>
      
      <div className="pricing-grid">
        {plans.map((plan, index) => (
          <div key={index} className={`pricing-card ${plan.recommended ? 'recommended' : ''}`}>
            {plan.recommended && <div className="recommended-badge">Most Popular</div>}
            <h2>{plan.name}</h2>
            <div className="price">
              <span className="amount">{plan.price}</span>
              <span className="period">/{plan.period}</span>
            </div>
            <ul className="features-list">
              {plan.features.map((feature, i) => (
                <li key={i}>✓ {feature}</li>
              ))}
            </ul>
            <button className={`pricing-btn ${plan.recommended ? 'recommended-btn' : ''}`}>
              {plan.buttonText}
            </button>
          </div>
        ))}
      </div>
      
      <p className="free-note">* All plans include basic cryptocurrency tracking for free</p>
    </div>
  );
};

export default Pricing;