import { motion } from 'framer-motion';

const SectionTitle = ({ title, subtitle, centered = false }) => {
  return (
    <div className={`mb-16 ${centered ? 'text-center' : ''}`}>
      {/* Modern SVG decoration */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className={`flex items-center justify-center mb-6 ${centered ? '' : 'justify-start'}`}
      >
        <svg
          width="60"
          height="12"
          viewBox="0 0 60 12"
          className="text-primary"
          fill="none"
        >
          <path
            d="M1 6C1 8.76142 3.23858 11 6 11H54C56.7614 11 59 8.76142 59 6C59 3.23858 56.7614 1 54 1H6C3.23858 1 1 3.23858 1 6Z"
            stroke="currentColor"
            strokeWidth="2"
            fill="currentColor"
            fillOpacity="0.1"
          />
        </svg>
      </motion.div>

      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold mb-6 relative"
      >
        {title}
        <span className="gradient-text text-4xl md:text-5xl lg:text-6xl">.</span>

        {/* Decorative SVG elements around the heading */}
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="absolute -top-4 -left-8 text-accent/20"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2L13.09 5.26L16 4L14.74 7.09L18 8L14.74 8.91L16 12L13.09 10.74L12 14L10.91 10.74L8 12L9.26 8.91L6 8L9.26 7.09L8 4L10.91 5.26L12 2Z"/>
          </svg>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="absolute -top-2 -right-6 text-primary/20"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
            <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" fill="none"/>
            <circle cx="12" cy="12" r="4" fill="currentColor"/>
          </svg>
        </motion.div>
      </motion.h2>

      {subtitle && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className={`flex items-center ${centered ? 'justify-center' : 'justify-start'}`}
        >
          <div className="flex items-center space-x-3">
            <svg
              width="20"
              height="2"
              viewBox="0 0 20 2"
              className="text-accent flex-shrink-0"
              fill="currentColor"
            >
              <rect width="20" height="2" rx="1"/>
            </svg>
            <p className="text-gray-600 text-lg max-w-2xl leading-relaxed">
              {subtitle}
            </p>
            <svg
              width="20"
              height="2"
              viewBox="0 0 20 2"
              className="text-accent flex-shrink-0"
              fill="currentColor"
            >
              <rect width="20" height="2" rx="1"/>
            </svg>
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default SectionTitle; 