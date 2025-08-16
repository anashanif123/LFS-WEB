import { motion } from "framer-motion";
import { Plus, Eye, Heart } from "lucide-react";

export default function TimelineSection() {
  const steps = [
    {
      icon: Plus,
      title: "Post Your Item",
      description: "Upload photos and describe your lost or found item with location details.",
      color: "indigo-500"
    },
    {
      icon: Eye,
      title: "Community Sees It",
      description: "Your local community gets notified and helps spread the word.",
      color: "purple-500"
    },
    {
      icon: Heart,
      title: "Reunited!",
      description: "We facilitate secure contact and help reunite you with your belongings.",
      color: "pink-500"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  const lineVariants = {
    hidden: { width: 0 },
    visible: {
      width: "100%",
      transition: { duration: 1.5, delay: 0.5 }
    }
  };

  return (
    <motion.section 
      id="how-it-works"
      className="py-32 bg-gradient-to-br from-gray-50 to-blue-50"
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
            Simple 3-Step Process
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From loss to reunion in three easy steps. Join thousands who've already found their way back to their belongings.
          </p>
        </motion.div>
        
        {/* Desktop Timeline */}
        <div className="hidden lg:block">
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute top-1/2 left-0 right-0 h-1 bg-gray-200 rounded-full transform -translate-y-1/2"></div>
            <motion.div 
              className="absolute top-1/2 left-0 h-1 timeline-line rounded-full transform -translate-y-1/2"
              variants={lineVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            ></motion.div>
            
            <motion.div 
              className="grid grid-cols-3 gap-8"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {steps.map((step, index) => {
                const IconComponent = step.icon;
                return (
                  <motion.div 
                    key={index}
                    className="relative text-center"
                    variants={itemVariants}
                  >
                    <motion.div 
                      className={`relative z-10 mx-auto w-24 h-24 bg-white rounded-3xl shadow-2xl flex items-center justify-center mb-8 border-4 border-${step.color}`}
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ duration: 0.3 }}
                      data-testid={`timeline-icon-${index}`}
                    >
                      <IconComponent className={`text-${step.color} text-2xl`} />
                    </motion.div>
                    <motion.div 
                      className="bg-white rounded-3xl p-8 shadow-xl"
                      whileHover={{ y: -5 }}
                      transition={{ duration: 0.3 }}
                    >
                      <h3 className="text-2xl font-bold text-gray-900 mb-4">
                        {step.title}
                      </h3>
                      <p className="text-gray-600">
                        {step.description}
                      </p>
                    </motion.div>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </div>
        
        {/* Mobile Timeline */}
        <motion.div 
          className="lg:hidden space-y-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {steps.map((step, index) => {
            const IconComponent = step.icon;
            return (
              <motion.div 
                key={index}
                className="flex items-start space-x-6"
                variants={itemVariants}
              >
                <motion.div 
                  className={`w-16 h-16 bg-${step.color} rounded-2xl flex items-center justify-center flex-shrink-0`}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ duration: 0.3 }}
                  data-testid={`mobile-timeline-icon-${index}`}
                >
                  <IconComponent className="text-white text-xl" />
                </motion.div>
                <motion.div 
                  className="bg-white rounded-2xl p-6 shadow-xl flex-1"
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.3 }}
                >
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {step.title}
                  </h3>
                  <p className="text-gray-600">
                    {step.description}
                  </p>
                </motion.div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </motion.section>
  );
}
