import { motion } from 'framer-motion';
import { Star, ShoppingCart, Award } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export default function Products() {
  const products = [
    {
      id: 1,
      name: "Organic Whole Wheat Flour",
      price: "$12.99",
      rating: 4.9,
      image: "https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      description: "Stone-ground from organic wheat berries",
      badge: "Best Seller"
    },
    {
      id: 2,
      name: "Artisan Bread Flour",
      price: "$15.99",
      rating: 4.8,
      image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      description: "High-protein flour perfect for artisan breads",
      badge: "Premium"
    },
    {
      id: 3,
      name: "Pastry Flour",
      price: "$10.99",
      rating: 4.7,
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      description: "Fine-milled flour ideal for delicate pastries",
      badge: "New"
    },
    {
      id: 4,
      name: "Ancient Grain Mix",
      price: "$18.99",
      rating: 4.9,
      image: "https://images.unsplash.com/photo-1621377430748-40d6f62d4bb5?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      description: "Blend of spelt, einkorn, and emmer",
      badge: "Specialty"
    },
    {
      id: 5,
      name: "Gluten-Free Blend",
      price: "$16.99",
      rating: 4.6,
      image: "https://images.unsplash.com/photo-1586444248902-2f64eddc13df?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      description: "Rice, almond, and tapioca flour blend",
      badge: "Gluten-Free"
    },
    {
      id: 6,
      name: "Self-Rising Flour",
      price: "$11.99",
      rating: 4.5,
      image: "https://images.unsplash.com/photo-1584464491033-06628f3a6b7b?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      description: "Pre-mixed with baking powder and salt",
      badge: "Convenient"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section id="products" className="py-12 sm:py-16 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-3 sm:mb-4 px-4">
            Our Premium Flour Collection
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto px-4">
            From traditional wheat flour to specialty blends, we offer the finest selection 
            for all your baking adventures.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8"
        >
          {products.map((product) => (
            <motion.div
              key={product.id}
              variants={itemVariants}
              whileHover={{ y: -5, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-2xl transition-all duration-300"
            >
              <div className="relative">
                <ImageWithFallback
                  src={product.image}
                  alt={product.name}
                  className="w-full h-40 sm:h-48 object-cover"
                />
                <div className="absolute top-3 left-3">
                  <span className={`px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-semibold ${
                    product.badge === 'Best Seller' ? 'bg-red-100 text-red-800' :
                    product.badge === 'Premium' ? 'bg-purple-100 text-purple-800' :
                    product.badge === 'New' ? 'bg-green-100 text-green-800' :
                    product.badge === 'Specialty' ? 'bg-blue-100 text-blue-800' :
                    product.badge === 'Gluten-Free' ? 'bg-yellow-100 text-yellow-800' :
                    'bg-gray-100 text-gray-800'
                  }`}>
                    {product.badge}
                  </span>
                </div>
                <motion.div
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  className="absolute inset-0 bg-black/20 flex items-center justify-center"
                >
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="bg-white text-gray-900 p-3 rounded-full shadow-lg min-h-[48px] min-w-[48px] flex items-center justify-center"
                  >
                    <ShoppingCart className="h-5 w-5 sm:h-6 sm:w-6" />
                  </motion.button>
                </motion.div>
              </div>

              <div className="p-4 sm:p-6">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="font-bold text-base sm:text-lg text-gray-900 pr-2 leading-tight">{product.name}</h3>
                  <div className="flex items-center space-x-1 flex-shrink-0">
                    <Star className="h-3 w-3 sm:h-4 sm:w-4 text-yellow-400 fill-current" />
                    <span className="text-xs sm:text-sm text-gray-600">{product.rating}</span>
                  </div>
                </div>
                
                <p className="text-gray-600 mb-4 text-sm sm:text-base">{product.description}</p>
                
                <div className="flex items-center justify-between">
                  <span className="text-xl sm:text-2xl font-bold text-amber-600">{product.price}</span>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-amber-600 text-white px-3 sm:px-4 py-2 rounded-lg font-semibold hover:bg-amber-700 transition-colors duration-200 text-sm sm:text-base min-h-[40px]"
                  >
                    Add to Cart
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-8 sm:mt-12 px-4"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gray-900 text-white px-6 sm:px-8 py-3 rounded-full font-semibold text-base sm:text-lg hover:bg-gray-800 transition-colors duration-200 min-h-[48px]"
          >
            View All Products
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}