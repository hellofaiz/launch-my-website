import { useState } from 'react';
import { motion } from 'framer-motion';
import Section from '../components/shared/Section';
import SectionTitle from '../components/shared/SectionTitle';

const contactInfo = [
  {
    title: 'Email',
    value: 'launchyourwebsite63@gmail.com', // Replace with your actual email
    icon: '📧'
  },
  {
    title: 'Phone',
    value: '+91 931-028-5692',
    alternateNumber: '+91 639-446-1703',
    icon: '📱'
  },
  {
    title: 'Location',
    value: 'Noida, India',
    icon: '📍'
  }
];

const socialLinks = [
  { name: 'Instagram', url: 'https://www.instagram.com/launchmy_website' },
  // { name: 'LinkedIn', url: 'https://www.linkedin.com/in/pintu-singh-4444444444/' },
  // { name: 'Twitter', url: 'https://x.com/sahil_kumar_x' },
];

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const formData = new FormData(e.target);
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData
      });

      const data = await response.json();

      if (data.success) {
        setSubmitStatus({ type: 'success', message: 'Message sent successfully!' });
        e.target.reset();
      } else {
        setSubmitStatus({ type: 'error', message: 'Failed to send message. Please try again.' });
      }
    } catch (error) {
      setSubmitStatus({ type: 'error', message: 'Network error. Please try again.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div>
      {/* Contact Hero Section */}
      <Section className="text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="relative mb-6">
            {/* Decorative SVG elements */}
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3 }}
              className="absolute -top-6 -left-8 text-accent/20"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" fill="none"/>
                <circle cx="12" cy="12" r="4" fill="currentColor"/>
              </svg>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5 }}
              className="absolute -top-4 -right-6 text-primary/20"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2L13.09 5.26L16 4L14.74 7.09L18 8L14.74 8.91L16 12L13.09 10.74L12 14L10.91 10.74L8 12L9.26 8.91L6 8L9.26 7.09L8 4L10.91 5.26L12 2Z"/>
              </svg>
            </motion.div>

            <h1 className="text-4xl md:text-5xl font-heading font-bold relative">
              <span className="gradient-text">Get in Touch</span>
            </h1>

            {/* Bottom decorative line */}
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 0.6, duration: 0.5 }}
              className="mt-4 flex justify-center"
            >
              <svg width="150" height="3" viewBox="0 0 150 3" className="text-accent">
                <rect width="150" height="3" rx="1.5" fill="currentColor"/>
              </svg>
            </motion.div>
          </div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Have a question or want to work together? Drop me a message!
          </p>
        </motion.div>
      </Section>

      {/* Contact Form Section */}
      <Section className="bg-background-light">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-heading font-bold mb-6">
                <span className="gradient-text">Let's Connect</span>
              </h3>
              <p className="text-gray-600 mb-8 leading-relaxed">
                I'm always interested in hearing about new projects and opportunities.
                Feel free to reach out through any of the following methods.
              </p>
            </div>

            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={info.title}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center space-x-4 p-6 bg-white border border-secondary-lighter rounded-xl hover:border-primary/30 transition-all duration-300 shadow-sm"
                >
                  <div className="text-3xl p-3 bg-accent/10 rounded-lg">
                    {info.icon}
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-secondary uppercase tracking-wider">{info.title}</h4>
                    <p className="text-gray-900 font-medium">{info.value}</p>
                    {info.alternateNumber && <p className="text-gray-900 font-medium">{info.alternateNumber}</p>}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Social Links */}
            <div>
              <h3 className="text-xl font-semibold mb-4 text-gray-600">Follow Me</h3>
              <div className="flex flex-wrap gap-3">
                {socialLinks.map((platform, index) => (
                  <motion.a
                    key={platform.name}
                    href={platform.url}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="btn-outline px-6 py-3 text-sm font-medium"
                  >
                    {platform.name}
                  </motion.a>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <motion.form
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            onSubmit={handleSubmit}
            action="https://api.web3forms.com/submit"
            method="POST"
            className="space-y-6 p-8 bg-white rounded-xl border border-secondary-lighter shadow-sm"
          >
            {/* Web3Forms Access Key */}
            <input type="hidden" name="access_key" value="f6d5bf98-ccf9-4ffd-ba2b-5dbc1747408e" />

            {/* Honeypot Spam Protection */}
            <input type="checkbox" name="botcheck" className="hidden" style={{ display: 'none' }} />
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-600 mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full px-4 py-3 bg-background-light rounded-lg border border-secondary-lighter focus:outline-none focus:border-primary focus:bg-white transition-all duration-300 placeholder-gray-500 text-gray-900"
                placeholder="Your full name"
                required
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-600 mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full px-4 py-3 bg-background-light rounded-lg border border-secondary-lighter focus:outline-none focus:border-primary focus:bg-white transition-all duration-300 placeholder-gray-500 text-gray-900"
                placeholder="your.email@example.com"
                required
              />
            </div>

            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-gray-600 mb-2">
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                className="w-full px-4 py-3 bg-background-light rounded-lg border border-secondary-lighter focus:outline-none focus:border-primary focus:bg-white transition-all duration-300 placeholder-gray-500 text-gray-900"
                placeholder="What's this about?"
                required
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-600 mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows="6"
                className="w-full px-4 py-3 bg-background-light rounded-lg border border-secondary-lighter focus:outline-none focus:border-primary focus:bg-white transition-all duration-300 resize-none placeholder-gray-500 text-gray-900"
                placeholder="Tell me about your project or just say hello..."
                required
              ></textarea>
            </div>

            {/* Status Message */}
            {submitStatus && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className={`p-4 rounded-lg border ${submitStatus.type === 'success'
                    ? 'bg-green-500/10 border-green-500/20 text-green-400'
                    : 'bg-red-500/10 border-red-500/20 text-red-400'
                  }`}
              >
                {submitStatus.message}
              </motion.div>
            )}

            <motion.button
              type="submit"
              disabled={isSubmitting}
              whileHover={!isSubmitting ? { scale: 1.02, y: -1 } : {}}
              whileTap={!isSubmitting ? { scale: 0.98 } : {}}
              className={`w-full btn-primary glow hover:shadow-lg hover:shadow-primary/30 ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''
                }`}
            >
              {isSubmitting ? (
                <div className="flex items-center justify-center space-x-2">
                  <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                  <span>Sending...</span>
                </div>
              ) : (
                'Send Message'
              )}
            </motion.button>
          </motion.form>
        </div>
      </Section>

      {/* Map Section */}
      {/* <Section>
        <div className="h-96 w-full rounded-xl overflow-hidden gradient-border">
          <img
            src="https://placehold.co/1200x400"
            alt="Map"
            className="w-full h-full object-cover"
          />
        </div>
      </Section> */}
    </div>
  );
};

export default Contact; 