import { motion } from "framer-motion";
import { Smartphone } from "lucide-react";
import { SiApple, SiGoogleplay } from "react-icons/si";

export default function CTASection() {
  const stats = [
    { value: "50,000+", label: "Items Reunited" },
    { value: "25,000+", label: "Active Users" },
    { value: "150+", label: "Cities" },
    { value: "98%", label: "Success Rate" }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  const glowAnimation = {
    boxShadow: [
      "0 0 20px rgba(99, 102, 241, 0.5)",
      "0 0 30px rgba(99, 102, 241, 0.8)",
      "0 0 20px rgba(99, 102, 241, 0.5)"
    ],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: "easeInOut"
    }
  };

  return (
    <motion.section 
      className="py-32 bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 relative overflow-hidden"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <div className="absolute inset-0 bg-black/10"></div>
      <div className="absolute inset-0 bg-grid-pattern opacity-20"></div>
      
      <motion.div 
        className="relative max-w-7xl mx-auto px-6 sm:px-8 text-center"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <motion.h2 
          className="text-4xl lg:text-6xl font-bold text-white mb-6"
          variants={itemVariants}
        >
          Join Thousands Helping Each Other Every Day
        </motion.h2>
        <motion.p 
          className="text-xl lg:text-2xl text-white/80 mb-12 max-w-4xl mx-auto"
          variants={itemVariants}
        >
          Every lost item has a story. Be part of the community that writes happy endings.
        </motion.p>
        
        <motion.div 
          className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16"
          variants={itemVariants}
        >
          <motion.button 
            className="bg-white text-indigo-600 px-10 py-5 rounded-2xl font-bold text-xl hover:bg-gray-50 transition-all duration-300 shadow-2xl flex items-center"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            animate={glowAnimation}
            data-testid="button-get-started-cta"
          >
            <Smartphone className="mr-2" size={24} />
            Get Started Now
          </motion.button>
          
          <div className="flex items-center text-white/80">
            <span className="mr-4">Download on:</span>
            <div className="flex space-x-4">
              <motion.button 
                className="glassmorphism px-4 py-2 rounded-xl flex items-center space-x-2 hover:bg-white/20 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                data-testid="button-app-store"
              >
                <SiApple size={20} />
                <span>App Store</span>
              </motion.button>
              <motion.button 
                className="glassmorphism px-4 py-2 rounded-xl flex items-center space-x-2 hover:bg-white/20 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                data-testid="button-play-store"
              >
                <SiGoogleplay size={20} />
                <span>Play Store</span>
              </motion.button>
            </div>
          </div>
        </motion.div>
        
        {/* Statistics */}
        <motion.div 
          className="grid grid-cols-2 md:grid-cols-4 gap-8"
          variants={containerVariants}
        >
          {stats.map((stat, index) => (
            <motion.div 
              key={index}
              className="text-center"
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              data-testid={`stat-${index}`}
            >
              <motion.div 
                className="text-4xl font-bold text-white mb-2"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ delay: 0.1 * index, duration: 0.5 }}
                viewport={{ once: true }}
              >
                {stat.value}
              </motion.div>
              <div className="text-white/70">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </motion.section>
  );
}
