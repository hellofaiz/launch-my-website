import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const socialLinks = [
  {name: 'Instagram', url: 'https://www.instagram.com/launchmy_website'},
];

const Footer = () => {
  return (
    <footer className="bg-background-light mt-20 border-t border-secondary-lighter">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex-shrink-0 flex items-center"
            >
              <Link to="/">
                <img src="../assets/logo.png" alt="Logo" style={{ height: '50px' }} />
              </Link>
              {/* launch my website heading */}
              <h1 className="text-2xl font-bold gradient-text">Launch My Website</h1>
            </motion.div>
            <p className="text-gray-600 max-w-xs">
              Crafting digital experiences with passion and precision.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-gray-900">Quick Links</h3>
            <ul className="space-y-2">
              {['Home', 'Projects', 'Contact'].map((item) => (
                <motion.li
                  key={item}
                  whileHover={{ x: 5 }}
                  className="text-gray-600 hover:text-accent transition-colors duration-300"
                >
                  <Link to={item === 'Home' ? '/' : `/${item.toLowerCase()}`}>
                    {item}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-gray-900">Connect</h3>
            <ul className="space-y-2">
              {socialLinks.map((link) => (
                <motion.li
                  key={link.name}
                  whileHover={{ x: 5 }}
                  className="text-gray-600 hover:text-accent transition-colors duration-300"
                >
                  <a href={link.url} target="_blank" rel="noopener noreferrer">
                    {link.name}
                  </a>
                </motion.li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-secondary-lighter">
          <p className="text-center text-gray-600">
            © {new Date().getFullYear()} Portfolio. All rights reserved. Designed and Developed by <a href="#" target="_blank" rel="noopener noreferrer" className="text-accent hover:text-primary transition-colors">Pintu Singh</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 