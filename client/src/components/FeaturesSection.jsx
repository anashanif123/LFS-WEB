import { motion } from "framer-motion";
import { AlertTriangle, Heart, Users, MapPin } from "lucide-react";

export default function FeaturesSection() {
  const features = [
    {
      icon: AlertTriangle,
      title: "Post Lost Item",
      description: "Quickly report your lost item with photos, description, and last known location. Our AI helps match similar items.",
      gradient: "from-red-500 to-pink-600"
    },
    {
      icon: Heart,
      title: "Post Found Item", 
      description: "Found something? Post it securely and help someone's day. We verify ownership before sharing contact details.",
      gradient: "from-green-500 to-emerald-600"
    },
    {
      icon: Users,
      title: "Community Help",
      description: "Engage with your local community. Get help from neighbors who might have seen your lost item.",
      gradient: "from-blue-500 to-cyan-600"
    },
    {
      icon: MapPin,
      title: "Smart Tracking",
      description: "Advanced location tracking and proximity alerts help you retrace your steps and find nearby matches.",
      gradient: "from-purple-500 to-indigo-600"
    }
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

  return (
    <motion.section 
      id="features"
      className="py-32 bg-white"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <motion.div 
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Everything You Need
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Powerful features designed to make finding and returning lost items as simple as possible.
          </p>
        </motion.div>
        
        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <motion.div 
                key={index}
                className="group p-8 bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 border border-gray-100"
                variants={itemVariants}
                whileHover={{ 
                  scale: 1.05,
                  y: -10
                }}
                data-testid={`feature-card-${index}`}
              >
                <motion.div 
                  className={`w-16 h-16 bg-gradient-to-br ${feature.gradient} rounded-2xl flex items-center justify-center mb-6`}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ duration: 0.3 }}
                >
                  <IconComponent className="text-white text-2xl" />
                </motion.div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </motion.section>
  );
}
