import { motion } from 'framer-motion';
import { Wheat, Heart, ArrowUp } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const footerLinks = {
    "Products": ["Whole Wheat Flour", "Bread Flour", "Pastry Flour", "Gluten-Free Options"],
    "Company": ["About Us", "Our Story", "Quality Promise", "Careers"],
    "Support": ["Contact Us", "FAQs", "Shipping Info", "Returns"]
  };

  return (
    <footer className="bg-gray-900 text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-1 sm:col-span-2 lg:col-span-1"
          >
            <div className="flex items-center space-x-2 mb-4">
              <motion.div
                animate={{ rotate: [0, 8, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              >
                <Wheat className="h-6 w-6 sm:h-8 sm:w-8 text-amber-500" />
              </motion.div>
              <span className="text-xl sm:text-2xl font-bold">Flour &amp; More</span>
            </div>
            <p className="text-gray-400 mb-4 sm:mb-6 text-sm sm:text-base max-w-sm">
              Crafting premium quality flour with traditional methods and modern standards 
              since 1973. Your trusted partner for all baking needs.
            </p>
            <div className="flex items-center space-x-2 text-amber-500 text-sm sm:text-base">
              <span>Made with</span>
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <Heart className="h-3 w-3 sm:h-4 sm:w-4 fill-current" />
              </motion.div>
              <span>for bakers everywhere</span>
            </div>
          </motion.div>

          {/* Links Sections */}
          {Object.entries(footerLinks).map(([title, links], index) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: (index + 1) * 0.1 }}
              className="space-y-3 sm:space-y-4"
            >
              <h3 className="text-base sm:text-lg font-semibold">{title}</h3>
              <ul className="space-y-2">
                {links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <motion.a
                      href="#"
                      whileHover={{ x: 5, color: '#f59e0b' }}
                      whileTap={{ scale: 0.98 }}
                      className="text-gray-400 hover:text-amber-500 transition-colors duration-200 text-sm sm:text-base block py-1"
                    >
                      {link}
                    </motion.a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Newsletter Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="border-t border-gray-800 pt-6 sm:pt-8 mt-8 sm:mt-12"
        >
          <div className="flex flex-col space-y-4 sm:space-y-6 lg:flex-row lg:justify-between lg:items-center lg:space-y-0">
            <div className="text-center lg:text-left">
              <h3 className="text-base sm:text-lg font-semibold mb-2">Stay Updated</h3>
              <p className="text-gray-400 text-sm sm:text-base">Get the latest news about new products and special offers.</p>
            </div>
            <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-2 max-w-md mx-auto lg:mx-0">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-amber-500 focus:border-transparent text-sm sm:text-base min-h-[48px] flex-1"
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-4 sm:px-6 py-3 bg-amber-600 text-white rounded-lg font-semibold hover:bg-amber-700 transition-colors duration-200 text-sm sm:text-base min-h-[48px] whitespace-nowrap"
              >
                Subscribe
              </motion.button>
            </div>
          </div>
        </motion.div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="border-t border-gray-800 pt-6 sm:pt-8 mt-6 sm:mt-8"
        >
          <div className="flex flex-col space-y-4 sm:flex-row sm:justify-between sm:items-center sm:space-y-0">
            <p className="text-gray-400 text-center sm:text-left text-xs sm:text-sm">
              © 2024 Flour &amp; More. All rights reserved. | Privacy Policy | Terms of Service
            </p>
            <motion.button
              onClick={scrollToTop}
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.9 }}
              className="p-2 sm:p-3 bg-amber-600 text-white rounded-full hover:bg-amber-700 transition-colors duration-200 mx-auto sm:mx-0 min-h-[44px] min-w-[44px] flex items-center justify-center"
            >
              <ArrowUp className="h-4 w-4 sm:h-5 sm:w-5" />
            </motion.button>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}