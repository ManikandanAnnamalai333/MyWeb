import { motion } from 'framer-motion';
import { Award, Users, Clock, Heart, Wheat, CheckCircle } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export default function About() {
  const features = [
    {
      icon: Clock,
      title: "Ground Fresh Daily",
      description: "Our flour is stone-ground fresh every morning to ensure maximum nutritional value and flavor."
    },
    {
      icon: Award,
      title: "Premium Quality",
      description: "We source only the finest grains from local organic farms and trusted suppliers."
    },
    {
      icon: Heart,
      title: "Made with Love",
      description: "Every batch is carefully crafted with attention to detail and passion for baking."
    },
    {
      icon: Users,
      title: "Family Tradition",
      description: "Three generations of flour milling expertise passed down through our family."
    }
  ];

  const stats = [
    { number: "50+", label: "Years of Experience" },
    { number: "10,000+", label: "Happy Customers" },
    { number: "15", label: "Flour Varieties" },
    { number: "100%", label: "Organic Options" }
  ];

  const processes = [
    "Carefully select premium grains",
    "Stone-grind at optimal temperature",
    "Test for quality and consistency",
    "Package in eco-friendly materials",
    "Deliver fresh to your doorstep"
  ];

  return (
    <section id="about" className="py-12 sm:py-16 md:py-20 bg-gradient-to-b from-amber-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16"
        >
          <div className="flex items-center justify-center space-x-2 mb-3 sm:mb-4">
            <Wheat className="h-6 w-6 sm:h-8 sm:w-8 text-amber-600" />
            <span className="text-amber-600 font-semibold text-base sm:text-lg">Our Story</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6 px-4">
            Crafting Quality Since 1973
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto px-4">
            What started as a small family mill has grown into a trusted source for premium flour, 
            maintaining our commitment to quality and traditional milling methods.
          </p>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center mb-12 sm:mb-16 md:mb-20">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative order-1 lg:order-1"
          >
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
              alt="Traditional flour milling process"
              className="w-full h-64 sm:h-80 md:h-96 object-cover rounded-2xl shadow-2xl"
            />
            <motion.div
              animate={{ rotate: [0, 8, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-4 sm:-bottom-6 -right-4 sm:-right-6 bg-white p-4 sm:p-6 rounded-2xl shadow-xl"
            >
              <Award className="h-8 w-8 sm:h-12 sm:w-12 text-amber-600 mb-2" />
              <p className="font-semibold text-gray-900 text-sm sm:text-base">Award Winning Quality</p>
            </motion.div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6 sm:space-y-8 order-2 lg:order-2"
          >
            <div>
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-3 sm:mb-4">
                Traditional Methods, Modern Standards
              </h3>
              <p className="text-base sm:text-lg text-gray-600 mb-4 sm:mb-6">
                We combine time-honored stone-grinding techniques with modern quality control 
                to produce flour that meets the highest standards while preserving the 
                nutritional integrity and natural flavors of the grain.
              </p>
            </div>

            <div className="space-y-3 sm:space-y-4">
              <h4 className="text-lg sm:text-xl font-semibold text-gray-900">Our Process:</h4>
              {processes.map((process, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center space-x-3"
                >
                  <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5 text-green-600 flex-shrink-0" />
                  <span className="text-gray-700 text-sm sm:text-base">{process}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Features Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 mb-12 sm:mb-16 md:mb-20"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="text-center p-4 sm:p-6 bg-white rounded-2xl shadow-lg border border-gray-100"
            >
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.5 }}
                className="inline-flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 bg-amber-100 rounded-full mb-3 sm:mb-4"
              >
                <feature.icon className="h-6 w-6 sm:h-8 sm:w-8 text-amber-600" />
              </motion.div>
              <h3 className="font-bold text-base sm:text-lg text-gray-900 mb-2">{feature.title}</h3>
              <p className="text-gray-600 text-sm sm:text-base">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 text-center"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="p-4 sm:p-6"
            >
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-amber-600 mb-2"
              >
                {stat.number}
              </motion.div>
              <p className="text-gray-600 font-semibold text-sm sm:text-base">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}