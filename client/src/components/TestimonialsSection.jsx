import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { useState, useEffect } from "react";

export default function TestimonialsSection() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      name: "Sarah Chen",
      item: "Lost Wallet",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b2c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=100&h=100",
      quote: "I lost my wallet downtown and thought I'd never see it again. Posted on LostFound and had it back within 2 hours! The community here is amazing.",
      gradient: "from-blue-50 to-indigo-50"
    },
    {
      name: "Michael Torres", 
      item: "Car Keys",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=100&h=100",
      quote: "Found someone's car keys in the park. Posted them here and the owner contacted me the same day. Felt great to help someone out!",
      gradient: "from-green-50 to-emerald-50"
    },
    {
      name: "Emma Rodriguez",
      item: "iPhone",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=100&h=100",
      quote: "Left my phone at a coffee shop. The barista found it and posted here. Got it back with all my photos intact. This app is a lifesaver!",
      gradient: "from-purple-50 to-pink-50"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [testimonials.length]);

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
      id="testimonials"
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
            Success Stories
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Real stories from real people who found their way back to their precious belongings.
          </p>
        </motion.div>
        
        <motion.div 
          className="grid md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {testimonials.map((testimonial, index) => (
            <motion.div 
              key={index}
              className={`bg-gradient-to-br ${testimonial.gradient} rounded-3xl p-8 shadow-xl`}
              variants={itemVariants}
              whileHover={{ 
                scale: 1.02,
                y: -5
              }}
              animate={{
                scale: currentTestimonial === index ? 1.02 : 1,
                boxShadow: currentTestimonial === index 
                  ? "0 25px 50px -12px rgba(0, 0, 0, 0.25)" 
                  : "0 10px 25px -3px rgba(0, 0, 0, 0.1)"
              }}
              transition={{ duration: 0.3 }}
              data-testid={`testimonial-card-${index}`}
            >
              <div className="flex items-center mb-6">
                <motion.img 
                  src={testimonial.image}
                  alt={`${testimonial.name} testimonial`}
                  className="w-16 h-16 rounded-2xl object-cover mr-4"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                  data-testid={`img-testimonial-${index}`}
                />
                <div>
                  <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                  <p className="text-gray-600">{testimonial.item}</p>
                </div>
              </div>
              <motion.p 
                className="text-gray-700 italic leading-relaxed mb-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                "{testimonial.quote}"
              </motion.p>
              <div className="flex text-yellow-400">
                {[1, 2, 3, 4, 5].map((star) => (
                  <motion.div
                    key={star}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.1 * star }}
                  >
                    <Star className="w-5 h-5 fill-current" />
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          className="flex justify-center space-x-3 mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          viewport={{ once: true }}
        >
          {testimonials.map((_, index) => (
            <motion.button
              key={index}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                currentTestimonial === index ? 'bg-indigo-500' : 'bg-gray-300'
              }`}
              onClick={() => setCurrentTestimonial(index)}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              data-testid={`testimonial-indicator-${index}`}
            />
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}
