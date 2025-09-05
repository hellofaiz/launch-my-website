import React from 'react';
import { motion } from 'framer-motion';
import Section from '../components/shared/Section';
import SectionTitle from '../components/shared/SectionTitle';
import CodeIcon from '../components/shared/icons/CodeIcon';
import MobileIcon from '../components/shared/icons/MobileIcon';
import DesignIcon from '../components/shared/icons/DesignIcon';

const skills = [
  'React', 'JavaScript', 'TypeScript', 'Node.js', 'Python',
  'TailwindCSS', 'MongoDB', 'PostgreSQL', 'Git', 'Docker'
];

const services = [
  {
    title: 'Full-Stack Development',
    description: 'Transform your business ideas into reality with custom web applications. Get scalable, secure, and high-performance solutions at competitive prices. Expertise in React, Node.js, and cloud architecture ensures your project\'s success.',
    icon: <CodeIcon />,
    benefits: [
      'Custom solutions tailored to your needs',
      'Scalable architecture for growth',
      'Competitive pricing with flexible options',
      'Ongoing support and maintenance'
    ]
  },
  {
    title: 'Mobile App Development',
    description: 'Reach your customers on any device with beautiful, native-feeling mobile applications. From concept to launch, we\'ll create an engaging mobile experience that users love. Affordable solutions for iOS and Android platforms.',
    icon: <MobileIcon />,
    benefits: [
      'Cross-platform development saves costs',
      'Intuitive user experience',
      'Fast development timeline',
      'Regular updates and support'
    ]
  },
  {
    title: 'UI/UX Design',
    description: 'Create memorable user experiences that convert visitors into customers. Our design process focuses on user behavior and modern aesthetics. Get a beautiful, functional design that sets you apart from competitors.',
    icon: <DesignIcon />,
    benefits: [
      'User-centered design approach',
      'Conversion-focused layouts',
      'Brand-aligned aesthetics',
      'Responsive design for all devices'
    ]
  },
  {
    title: 'Game Development',
    description: 'Create immersive gaming experiences with custom game development. From concept to launch, we\'ll develop a game that captivates and engages players. Affordable solutions for all platforms.',
    icon: <DesignIcon />,
    benefits: [
      'Custom game development',
      'Engaging gameplay',
      'Affordable solutions',
      'Cross-platform compatibility'
    ]
  },
  {
    title: 'Digital Marketing',
    description: 'Create digital marketing campaigns that reach your target audience. From social media to email marketing, we\'ll create a campaign that drives results and engages your audience.',
    icon: <DesignIcon />,
    benefits: [
      'Social media marketing',
      'Email marketing',
      'Affordable solutions',
      'Cross-platform compatibility'
    ]
  },
  {
    title: 'SEO Optimization',
    description: 'Optimize your website for search engines to increase traffic and visibility. From keyword research to content creation, we\'ll optimize your website for search engines to drive results.',
    icon: <DesignIcon />,
    benefits: [
      'Keyword research',
      'Content creation',
      'Link building',
      'Social media marketing'
    ]
  }
];

const Home = () => {
  // Countdown timer logic
  const [timeLeft, setTimeLeft] = React.useState({
    days: 10,
    hours: 14,
    minutes: 32,
    seconds: 45
  });

  React.useEffect(() => {
    const targetDate = new Date('2025-09-15T23:59:59').getTime();

    const timer = setInterval(() => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000)
        });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);
  return (
    <>
      <head>
        <title>Professional Web Development & Design Services | Affordable Solutions</title>
        <meta name="description" content="Expert web development, mobile app, and UI/UX design services. Create stunning digital experiences with our affordable, custom solutions. Get started today!" />
      </head>
      <div>
        {/* Hero Section */}
        <Section className="min-h-[70vh] md:min-h-[90vh] flex items-center">
          <div className="grid md:grid-cols-2 gap-6 md:gap-8 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="relative mb-6">
                {/* Decorative SVG elements */}
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.3 }}
                  className="absolute -top-4 -left-6 md:-top-8 md:-left-12 text-primary/20"
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="md:w-8 md:h-8">
                    <path d="M12 2L15.09 8.26L22 9L17 14L18.18 21L12 17.77L5.82 21L7 14L2 9L8.91 8.26L12 2Z" />
                  </svg>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.5 }}
                  className="absolute -top-2 -right-4 md:-top-4 md:-right-8 text-accent/20"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="md:w-6 md:h-6">
                    <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" fill="none" />
                    <circle cx="12" cy="12" r="4" fill="currentColor" />
                  </svg>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.7 }}
                  className="absolute top-8 -left-8 md:top-16 md:-left-16 text-highlight/20"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="md:w-5 md:h-5">
                    <polygon points="12,2 22,8.5 22,15.5 12,22 2,15.5 2,8.5" />
                  </svg>
                </motion.div>

                <h1 className="text-3xl md:text-6xl font-heading font-bold relative">
                  Bringing Your Digital Dreams to
                  <span className="gradient-text"> Life</span>
                </h1>

                {/* Bottom decorative line */}
                <motion.div
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ delay: 0.8, duration: 0.6 }}
                  className="mt-4 flex justify-center"
                >
                  <svg width="200" height="4" viewBox="0 0 200 4" className="text-primary">
                    <rect width="200" height="4" rx="2" fill="currentColor" />
                  </svg>
                </motion.div>
              </div>
              <p className="text-gray-600 text-base md:text-lg mb-6 md:mb-8 max-w-lg">
                Transform your vision into reality with affordable, professional web development
                and design services. Let's create something amazing together that drives results
                and delights your users.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 md:gap-4">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="btn-primary glow text-sm md:text-base px-4 md:px-6 py-2 md:py-3"
                  onClick={() => {
                    window.location.href = '/pricing';
                  }}
                >
                  Get Quote
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="btn-outline text-sm md:text-base px-4 md:px-6 py-2 md:py-3"
                  onClick={() => {
                    window.location.href = '/projects';
                  }}
                >
                  View Portfolio
                </motion.button>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="order-first md:order-last mt-8 md:mt-0"
            >
              <img
                src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1000"
                alt="Modern Development Setup with Dual Monitors and Clean Workspace"
                className="rounded-lg shadow-xl gradient-border hover-zoom w-full max-w-md mx-auto md:max-w-none"
              />
            </motion.div>
          </div>
        </Section>


        {/* About Section */}
        <Section id="about">
          <SectionTitle
            title="Why Choose Us"
            subtitle="Delivering Excellence with a Personal Touch"
            centered
          />
          <div className="grid md:grid-cols-2 gap-6 md:gap-8 items-center">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              <img
                // src="https://images.unsplash.com/photo-1547658719-da2b51169166?w=1000&h=700"
                src='/Tech_bg.jpg'
                alt="Professional Web Development Team Collaboration"
                className="rounded-lg shadow-xl gradient-border hover-zoom"
              />
            </motion.div>
            <div className="space-y-6">
              <p className="text-gray-600">
                With over 5 years of experience, we've helped businesses of all sizes achieve their
                digital goals. Our commitment to quality, transparent communication, and competitive
                pricing sets us apart. We believe in building long-term relationships with our
                clients through exceptional service and results.
              </p>
              <ul className="space-y-4">
                <li className="flex items-center text-gray-600">
                  <span className="text-accent mr-2">✓</span>
                  Affordable packages tailored to your budget
                </li>
                <li className="flex items-center text-gray-600">
                  <span className="text-accent mr-2">✓</span>
                  Clear communication and regular updates
                </li>
                <li className="flex items-center text-gray-600">
                  <span className="text-accent mr-2">✓</span>
                  Fast turnaround without compromising quality
                </li>
                <li className="flex items-center text-gray-600">
                  <span className="text-accent mr-2">✓</span>
                  Ongoing support and maintenance
                </li>
              </ul>
            </div>
          </div>
        </Section>

        {/* Skills Section */}
        <Section id="skills" className="bg-background-light">
          <SectionTitle
            title="Technical Expertise"
            subtitle="Modern Technologies for Modern Solutions"
            centered
          />
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3 md:gap-4"
          >
            {skills.map((skill, index) => (
              <motion.div
                key={skill}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="bg-secondary p-4 rounded-lg text-center gradient-border"
              >
                {skill}
              </motion.div>
            ))}
          </motion.div>
        </Section>

        {/* Services Section */}
        <Section id="services">
          <SectionTitle
            title="Services & Solutions"
            subtitle="Comprehensive Digital Services for Your Success"
            centered
          />
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="group"
              >
                <div className="card">
                  <div className="mb-4">{service.icon}</div>
                  <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <ul className="space-y-2">
                    {service.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-center text-gray-600 text-sm">
                        <span className="text-accent mr-2">•</span>
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </Section>

        {/* CTA Section */}
        <Section className="bg-background-light text-center">
          <div className="max-w-3xl mx-auto">
            <SectionTitle
              title="Let's Create Something Amazing"
              subtitle="Get a Free Consultation and Quote for Your Project"
              centered
            />
            <p className="text-gray-600 mb-8">
              Take the first step towards your digital success. Contact us today for a
              free consultation and discover how we can help bring your vision to life
              within your budget.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-primary glow"
            >
              Schedule Free Consultation
            </motion.button>
          </div>
        </Section>
      </div>
    </>
  );
};

export default Home; 