import { motion } from "framer-motion";
import { AlertTriangle, Heart } from "lucide-react";

export default function HeroSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  const floatAnimation = {
    y: [0, -20, 0],
    rotate: [-5, -3, -5],
    transition: {
      duration: 6,
      repeat: Infinity,
      ease: "easeInOut"
    }
  };

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500">
      <div className="absolute inset-0 bg-black/10"></div>
      <div className="absolute inset-0 bg-grid-pattern opacity-30"></div>
      
      <motion.div 
        className="relative max-w-7xl mx-auto px-6 sm:px-8 py-20"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            className="text-white space-y-8"
            variants={itemVariants}
          >
            <div className="space-y-6">
              <motion.h1 
                className="text-5xl lg:text-7xl font-bold leading-tight"
                variants={itemVariants}
              >
                Find What's{" "}
                <span className="bg-gradient-to-r from-yellow-300 to-orange-400 bg-clip-text text-transparent">
                  Lost
                </span>
                ,<br />
                Return What's{" "}
                <span className="bg-gradient-to-r from-green-300 to-blue-400 bg-clip-text text-transparent">
                  Found
                </span>
              </motion.h1>
              <motion.p 
                className="text-xl lg:text-2xl text-white/80 font-light leading-relaxed max-w-xl"
                variants={itemVariants}
              >
                Connect with your community to reunite lost items with their owners. 
                Every lost thing has a story—help write the happy ending.
              </motion.p>
            </div>
            
            <motion.div 
              className="flex flex-col sm:flex-row gap-4"
              variants={itemVariants}
            >
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-indigo-600 px-8 py-4 rounded-2xl font-bold text-lg hover:bg-gray-50 transition-all duration-300 shadow-2xl flex items-center justify-center"
                data-testid="button-report-lost"
              >
                <AlertTriangle className="mr-2" size={20} />
                Report Lost Item
              </motion.button>
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="glassmorphism text-white px-8 py-4 rounded-2xl font-bold text-lg hover:bg-white/20 transition-all duration-300 flex items-center justify-center"
                data-testid="button-report-found"
              >
                <Heart className="mr-2" size={20} />
                Report Found Item
              </motion.button>
            </motion.div>
            
            <motion.div 
              className="flex items-center space-x-8 pt-8"
              variants={itemVariants}
            >
              <div className="text-center">
                <motion.div 
                  className="text-3xl font-bold"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 1, duration: 0.5 }}
                  data-testid="stat-items-reunited"
                >
                  50K+
                </motion.div>
                <div className="text-white/70">Items Reunited</div>
              </div>
              <div className="text-center">
                <motion.div 
                  className="text-3xl font-bold"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 1.2, duration: 0.5 }}
                  data-testid="stat-happy-users"
                >
                  25K+
                </motion.div>
                <div className="text-white/70">Happy Users</div>
              </div>
              <div className="text-center">
                <motion.div 
                  className="text-3xl font-bold"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 1.4, duration: 0.5 }}
                  data-testid="stat-success-rate"
                >
                  98%
                </motion.div>
                <div className="text-white/70">Success Rate</div>
              </div>
            </motion.div>
          </motion.div>
          
          <motion.div 
            className="flex justify-center lg:justify-end"
            variants={itemVariants}
          >
            <motion.div 
              className="relative"
              animate={floatAnimation}
            >
              <motion.img 
                src="https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=800" 
                alt="Mobile app interface showing lost and found items" 
                className="rounded-3xl shadow-2xl w-80 h-auto transform rotate-3 hover:rotate-0 transition-transform duration-500"
                whileHover={{ scale: 1.05 }}
                data-testid="img-hero-mobile-mockup"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-3xl"></div>
              
              <motion.div 
                className="absolute -top-4 -left-4 bg-green-500 text-white px-4 py-2 rounded-2xl shadow-lg"
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                data-testid="badge-item-found"
              >
                <span className="text-sm font-semibold">✓ Item Found!</span>
              </motion.div>
              <motion.div 
                className="absolute -bottom-4 -right-4 bg-blue-500 text-white px-4 py-2 rounded-2xl shadow-lg"
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 2, repeat: Infinity, delay: 1 }}
                data-testid="badge-thank-you"
              >
                <span className="text-sm font-semibold">♥ Thank You!</span>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
