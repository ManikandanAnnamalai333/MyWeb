import { motion } from 'framer-motion';
import { ChefHat, Sparkles, Heart } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export default function Hero() {
  const floatingAnimation = {
    y: [0, -15, 0],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut"
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center relative overflow-hidden bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50 pt-14 sm:pt-16">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute top-16 sm:top-20 left-4 sm:left-10 w-3 h-3 sm:w-4 sm:h-4 bg-amber-200 rounded-full opacity-60"
        />
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute top-32 sm:top-40 right-8 sm:right-20 w-4 h-4 sm:w-6 sm:h-6 bg-orange-200 rounded-full opacity-40"
        />
        <motion.div
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-16 sm:bottom-20 left-8 sm:left-20 w-5 h-5 sm:w-8 sm:h-8 bg-yellow-200 rounded-full opacity-50"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Mobile Image First */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="relative lg:order-2 lg:col-span-1"
          >
            <motion.div
              animate={floatingAnimation}
              className="relative z-10"
            >
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                alt="Fresh flour and baking ingredients"
                className="w-full h-64 sm:h-80 md:h-96 lg:h-[400px] xl:h-[500px] object-cover rounded-2xl shadow-2xl"
              />
            </motion.div>
            
            {/* Floating elements */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-2 sm:-top-4 -right-2 sm:-right-4 bg-white p-2 sm:p-4 rounded-full shadow-lg"
            >
              <Sparkles className="h-4 w-4 sm:h-6 sm:w-6 text-yellow-500" />
            </motion.div>
            
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-2 sm:-bottom-4 -left-2 sm:-left-4 bg-amber-100 p-2 sm:p-4 rounded-full shadow-lg"
            >
              <ChefHat className="h-4 w-4 sm:h-6 sm:w-6 text-amber-600" />
            </motion.div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left lg:order-1 lg:col-span-1"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.6 }}
              className="flex items-center justify-center lg:justify-start space-x-2 mb-4 sm:mb-6"
            >
              <motion.div animate={floatingAnimation}>
                <ChefHat className="h-6 w-6 sm:h-8 sm:w-8 text-amber-600" />
              </motion.div>
              <span className="text-amber-600 font-semibold text-sm sm:text-base">Handcrafted with Love</span>
              <motion.div animate={floatingAnimation}>
                <Heart className="h-4 w-4 sm:h-5 sm:w-5 text-red-500" />
              </motion.div>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-900 mb-4 sm:mb-6 leading-tight"
            >
              Fresh
              <motion.span
                animate={{ color: ['#d97706', '#ea580c', '#dc2626', '#d97706'] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="block text-amber-600"
              >
                Homemade
              </motion.span>
              Flour
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="text-base sm:text-lg md:text-xl text-gray-600 mb-6 sm:mb-8 max-w-lg mx-auto lg:mx-0 px-2 sm:px-0"
            >
              Premium quality flour ground fresh daily from the finest grains. 
              Perfect for all your baking needs, from artisan breads to delicate pastries.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.6 }}
              className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start px-4 sm:px-0"
            >
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: "0 10px 25px rgba(0,0,0,0.2)" }}
                whileTap={{ scale: 0.95 }}
                className="bg-amber-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold text-base sm:text-lg shadow-lg hover:bg-amber-700 transition-colors duration-200 min-h-[48px]"
                onClick={() => document.querySelector('#products')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Shop Now
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-amber-600 text-amber-600 px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold text-base sm:text-lg hover:bg-amber-600 hover:text-white transition-all duration-200 min-h-[48px]"
                onClick={() => document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Learn More
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}