import { motion } from "framer-motion";
import { Search } from "lucide-react";
import { SiApple, SiGoogleplay, SiX, SiFacebook, SiInstagram, SiWhatsapp } from "react-icons/si";

export default function Footer() {
  const quickLinks = [
    "How It Works",
    "Features", 
    "Success Stories",
    "Community",
    "Support"
  ];

  const connectLinks = [
    "Contact Us",
    "Privacy Policy",
    "Terms of Service"
  ];

  const socialLinks = [
    { icon: SiX, color: "hover:bg-blue-400", label: "Twitter" },
    { icon: SiFacebook, color: "hover:bg-blue-600", label: "Facebook" },
    { icon: SiInstagram, color: "hover:bg-pink-600", label: "Instagram" },
    { icon: SiWhatsapp, color: "hover:bg-green-600", label: "WhatsApp" }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <footer className="bg-gray-900 text-white py-20">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <motion.div 
          className="grid md:grid-cols-4 gap-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Brand */}
          <motion.div 
            className="md:col-span-2"
            variants={itemVariants}
          >
            <motion.div 
              className="flex items-center space-x-2 mb-6"
              whileHover={{ scale: 1.05 }}
              data-testid="footer-brand"
            >
              <div className="w-10 h-10 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl flex items-center justify-center">
                <Search className="text-white" size={20} />
              </div>
              <span className="text-2xl font-bold">Findit</span>
            </motion.div>
            <p className="text-gray-400 mb-8 max-w-md leading-relaxed">
              Connecting communities to reunite lost items with their owners. 
              Because every lost thing deserves to find its way home.
            </p>
            
            {/* App Store Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <motion.button 
                className="flex items-center space-x-3 bg-gray-800 hover:bg-gray-700 px-6 py-3 rounded-2xl transition-colors"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                data-testid="footer-app-store"
              >
                <SiApple size={24} />
                <div className="text-left">
                  <div className="text-xs text-gray-400">Download on the</div>
                  <div className="font-semibold">App Store</div>
                </div>
              </motion.button>
              <motion.button 
                className="flex items-center space-x-3 bg-gray-800 hover:bg-gray-700 px-6 py-3 rounded-2xl transition-colors"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                data-testid="footer-play-store"
              >
                <SiGoogleplay size={24} />
                <div className="text-left">
                  <div className="text-xs text-gray-400">Get it on</div>
                  <div className="font-semibold">Google Play</div>
                </div>
              </motion.button>
            </div>
          </motion.div>
          
          {/* Quick Links */}
          <motion.div variants={itemVariants}>
            <h4 className="font-bold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <motion.button 
                    className="text-gray-400 hover:text-white transition-colors text-left"
                    whileHover={{ x: 5 }}
                    data-testid={`footer-link-${index}`}
                  >
                    {link}
                  </motion.button>
                </li>
              ))}
            </ul>
          </motion.div>
          
          {/* Contact & Social */}
          <motion.div variants={itemVariants}>
            <h4 className="font-bold mb-6">Connect</h4>
            <ul className="space-y-3 mb-8">
              {connectLinks.map((link, index) => (
                <li key={index}>
                  <motion.button 
                    className="text-gray-400 hover:text-white transition-colors text-left"
                    whileHover={{ x: 5 }}
                    data-testid={`footer-connect-${index}`}
                  >
                    {link}
                  </motion.button>
                </li>
              ))}
            </ul>
            
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => {
                const IconComponent = social.icon;
                return (
                  <motion.button
                    key={index}
                    className={`w-10 h-10 bg-gray-800 ${social.color} rounded-xl flex items-center justify-center transition-colors`}
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.9 }}
                    data-testid={`social-${social.label.toLowerCase()}`}
                  >
                    <IconComponent size={18} />
                  </motion.button>
                );
              })}
            </div>
          </motion.div>
        </motion.div>
        
        <motion.div 
          className="border-t border-gray-800 mt-12 pt-8 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          viewport={{ once: true }}
        >
          <p className="text-gray-400">
            &copy; 2024 LostFound. All rights reserved. Made with ❤️ for the community.
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
