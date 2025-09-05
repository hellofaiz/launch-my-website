import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Section from '../components/shared/Section';
import SectionTitle from '../components/shared/SectionTitle';

const websitePlans = [
  {
    name: 'Starter Plan',
    description: 'Landing Page Design',
    price: '₹2,999/-',
    delivery: 'Get your website delivered in 1 Day',
    features: [
      'Lead Generation Form',
      'Free Web Hosting',
      'Admin Panel'
    ],
    isPopular: false
  },
  {
    name: 'Popular Plan',
    description: '5 Pages Website Design',
    price: '₹6,999/-',
    delivery: 'Get your website delivered in 3 Day',
    features: [
      'Lead Generation Form',
      'Free Web Hosting',
      'Admin Panel'
    ],
    isPopular: true
  },
  {
    name: 'Premium Plan',
    description: '10 Pages Website Design',
    price: '₹10,999/-',
    delivery: 'Get your website delivered in 5 Day',
    features: [
      'Lead Generation Form',
      'Free Web Hosting',
      'Admin Panel'
    ],
    isPopular: false
  },
  {
    name: 'Corporate Plan',
    description: '15+ Pages Website Design',
    price: '₹14,999/-',
    delivery: 'Get your website delivered in 7 Day',
    features: [
      'Lead Generation Form',
      'Free Web Hosting',
      'Admin Panel'
    ],
    isPopular: false
  }
];

const ecommercePlans = [
  {
    name: 'Basic Plan',
    description: 'Basic Ecommerce Website Design',
    price: '₹10,000/-',
    delivery: 'Get your website delivered in 4 Days',
    features: [
      'Lead Generation Form',
      'Free Web Hosting',
      'Admin Panel'
    ],
    isPopular: false
  },
  {
    name: 'Popular Plan',
    description: 'Popular Ecommerce Website Design',
    price: '₹18,000/-',
    delivery: 'Get your website delivered in 7 Days',
    features: [
      'Lead Generation Form',
      'Free Web Hosting',
      'Admin Panel'
    ],
    isPopular: true
  },
  {
    name: 'Standard Plan',
    description: 'Standard Ecommerce Website Design',
    price: '₹25,000/-',
    delivery: 'Get your website delivered in 10 Days',
    features: [
      'Lead Generation Form',
      'Free Web Hosting',
      'Admin Panel'
    ],
    isPopular: false
  },
  {
    name: 'Premium Plan',
    description: 'Shopify Ecommerce Website Design',
    price: '₹40,000/-',
    delivery: 'Get your website delivered in 15 Days',
    features: [
      'Lead Generation Form',
      'Free Web Hosting',
      'Admin Panel'
    ],
    isPopular: false
  }
];

// Reusable Pricing Card Component
const PricingCard = ({ plan, index, isEcommerce = false }) => (
  <motion.div
    key={plan.name}
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    className={`relative ${plan.isPopular ? 'md:-mt-4' : ''}`}
  >
    {/* Popular Badge */}
    {plan.isPopular && (
      <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
        <div className="flex flex-col items-center">
         
          <div className="bg-green-500 text-white px-4 py-1 rounded-full text-sm font-bold">
            POPULAR
          </div>
        </div>
      </div>
    )}
    
    <div className={`card h-full ${plan.isPopular ? 'border-green-500 border-2' : ''}`}>
      <div className="text-center mb-6">
        <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
        <p className="text-gray-400 mb-4">{plan.description}</p>
        <div className="text-3xl font-bold text-accent mb-2">{plan.price}</div>
        <div className="bg-green-100 text-black px-4 py-2 rounded-lg text-sm font-medium mb-4">
          {plan.delivery}
        </div>
      </div>
      
      <div className="mb-6">
        <h4 className="font-semibold mb-4 text-center">
          What's included in {plan.name.toLowerCase().replace(' plan', '')} plan
        </h4>
        <ul className="space-y-3">
          {plan.features.map((feature, idx) => (
            <li key={idx} className="flex items-center text-gray-400">
              <span className="text-black mr-3 text-lg">✔</span>
              {feature}
            </li>
          ))}
        </ul>
      </div>
      
      <Link to="/contact">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="w-full bg-black text-white py-3 px-6 rounded-lg font-semibold flex items-center justify-center gap-2 hover:bg-gray-800 transition-colors"
        >
          <span>←</span>
          Let's Start
        </motion.button>
      </Link>
    </div>
  </motion.div>
);

// Tab Component
const Tabs = ({ activeTab, setActiveTab }) => {
  const tabs = [
    { id: 'website', label: 'Website Design', subtitle: 'Professional websites for every business size' },
    { id: 'ecommerce', label: 'Ecommerce', subtitle: 'Complete ecommerce solutions for online businesses' }
  ];

  return (
    <div className="flex justify-center mb-8">
      <div className="bg-white border border-gray-200 rounded-lg p-1 flex shadow-sm">
        {tabs.map((tab, index) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`px-8 py-3 rounded-md font-semibold text-sm transition-all duration-200 relative ${
              activeTab === tab.id
                ? 'bg-black text-white shadow-lg transform scale-105'
                : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
            } ${index === 0 ? 'mr-1' : ''}`}
          >
            {tab.label}
            {activeTab === tab.id && (
              <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-black rounded-full"></div>
            )}
          </button>
        ))}
      </div>
    </div>
  );
};

const Pricing = () => {
  const [activeTab, setActiveTab] = useState('website');
  return (
    <>
      <head>
        <title>Website Design Plans & Pricing | Professional Web Development Services</title>
        <meta name="description" content="Choose from our affordable website design plans. Starter, Popular, Premium, and Corporate plans with competitive pricing and fast delivery. Get started today!" />
      </head>
      <div>
        {/* Hero Section */}
        <Section className="min-h-[30vh] flex items-center">
          <div className="text-center max-w-4xl mx-auto">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-4xl md:text-6xl font-heading font-bold"
            >
              Discover Our Design Plans
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-gray-400 text-lg mb-8"
            >
              Choose the perfect plan for your business needs. From stunning websites to complete ecommerce solutions,
              all plans include professional design, fast delivery, and comprehensive features.
            </motion.p>
          </div>
        </Section>

        {/* Pricing Plans Section with Tabs */}
        <Section className="mt-[-100px]">
          <Tabs activeTab={activeTab} setActiveTab={setActiveTab} />

          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            <SectionTitle
              title={activeTab === 'website' ? 'Website Design Plans' : 'Ecommerce Website Design Plans'}
              subtitle={activeTab === 'website' ? 'Professional websites for every business size' : 'Complete ecommerce solutions for online businesses'}
              centered
            />
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
              {(activeTab === 'website' ? websitePlans : ecommercePlans).map((plan, index) => (
                <PricingCard
                  key={plan.name}
                  plan={plan}
                  index={index}
                  isEcommerce={activeTab === 'ecommerce'}
                />
              ))}
            </div>
          </motion.div>
        </Section>

  

        {/* CTA Section */}
        <Section className="text-center">
          <div className="max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
              <p className="text-gray-400 mb-8">
                Choose your plan and let's create a stunning website that drives results for your business.
              </p>
              <Link to="/contact">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="btn-primary glow"
                >
                  Contact Us Today
                </motion.button>
              </Link>
            </motion.div>
          </div>
        </Section>
      </div>
    </>
  );
};

export default Pricing;
