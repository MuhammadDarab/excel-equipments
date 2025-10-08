"use client";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export default function ServicesPage() {
  const [invertNavBar, setInvertNavBar] = useState(false);
  const [isDark, setIsDark] = useState(() => {
    try { return localStorage.getItem('isDark') === 'true'; }
    catch { return false; }
  });

  useEffect(() => {
    const onScroll = () => {
      setInvertNavBar(window.scrollY > 720 ? true : false);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const services = [
    {
      title: "Forklift & Reach Truck Rentals",
      icon: "🚜",
      description: "Battery-operated fleet from 1 to 5.5 tons with customizable attachments for any job.",
      features: [
        "1 ton to 5.5 ton capacity",
        "Battery-operated eco-friendly options",
        "Customizable attachments",
        "Flexible rental periods",
        "24/7 support"
      ]
    },
    {
      title: "Maintenance & Refurbishment",
      icon: "🔧",
      description: "Expert care ensuring your equipment runs smoothly and efficiently.",
      features: [
        "Preventive maintenance programs",
        "Complete overhaul services",
        "Expert technicians",
        "Genuine parts only",
        "Quick turnaround time"
      ]
    },
    {
      title: "Spare Parts Supply",
      icon: "⚙️",
      description: "Genuine parts from top brands for maximum durability and performance.",
      features: [
        "OEM and genuine parts",
        "Wide inventory stock",
        "Fast delivery",
        "Competitive pricing",
        "Quality guarantee"
      ]
    },
    {
      title: "Equipment Sales",
      icon: "💼",
      description: "New and refurbished machinery available for purchase.",
      features: [
        "New equipment",
        "Certified refurbished units",
        "Warranty included",
        "Financing options",
        "Trade-in accepted"
      ]
    },
    {
      title: "Operator Training",
      icon: "👷",
      description: "Professional training programs for safe and efficient equipment operation.",
      features: [
        "Certified instructors",
        "Hands-on training",
        "Safety protocols",
        "Certification provided",
        "Customized programs"
      ]
    },
    {
      title: "24/7 Emergency Support",
      icon: "🆘",
      description: "Round-the-clock technical support and emergency services.",
      features: [
        "24/7 availability",
        "Rapid response team",
        "On-site repairs",
        "Remote diagnostics",
        "Priority service"
      ]
    }
  ];

  return (
    <div className={`min-h-screen transition-colors duration-500 ${isDark ? 'bg-black' : 'bg-gray-50'}`}>

      {/* Hero Section */}
      <section className={`relative w-full min-h-screen flex items-center justify-center pt-32 pb-20 px-8 overflow-hidden ${
        isDark ? 'bg-gradient-to-br from-slate-900 via-slate-800 to-black' : 'bg-gradient-to-br from-gray-100 via-gray-50 to-white'
      }`}>
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-20 w-96 h-96 bg-red-500/30 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-blue-500/30 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
        </div>

        <div className="max-w-4xl text-center relative z-10">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className={`text-8xl font-black mb-6 ${
              isDark 
                ? 'bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent'
                : 'bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent'
            }`}
          >
            Our Services
          </motion.h1>
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "120px" }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="h-1 bg-gradient-to-r from-red-500 to-red-600 mx-auto mt-8 rounded-full"
          />
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className={`mt-8 text-xl leading-relaxed ${isDark ? 'text-gray-300' : 'text-gray-700'}`}
          >
            Comprehensive solutions for all your machinery needs. From rentals to maintenance, 
            we provide expert services to keep your operations running smoothly.
          </motion.p>
          
          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
            {[
              { number: "500+", label: "Happy Clients" },
              { number: "50+", label: "Equipment Fleet" },
              { number: "24/7", label: "Support Available" }
            ].map((stat, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 + idx * 0.2, duration: 0.6 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className={`backdrop-blur-xl rounded-2xl p-6 shadow-xl ${
                  isDark 
                    ? 'bg-white/5 border border-white/10'
                    : 'bg-white/60 border border-gray-300/50'
                }`}
              >
                <div className={`text-4xl font-black mb-2 bg-gradient-to-r from-red-500 to-red-600 bg-clip-text text-transparent`}>
                  {stat.number}
                </div>
                <div className={`text-sm font-semibold ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className={`py-24 relative overflow-hidden ${
        isDark ? 'bg-gradient-to-b from-black via-slate-900 to-black' : 'bg-gradient-to-b from-white via-gray-50 to-white'
      }`}>
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-red-500/30 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/30 rounded-full blur-3xl" />
        </div>

        <div className="max-w-7xl mx-auto px-8 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                whileHover={{ y: -10 }}
                className={`backdrop-blur-xl rounded-3xl p-8 shadow-2xl transition-all duration-300 group ${
                  isDark 
                    ? 'bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-white/10 hover:border-red-500/50'
                    : 'bg-gradient-to-br from-white/80 to-gray-50/80 border border-gray-300/50 hover:border-gray-400'
                }`}
              >
                <div className="text-6xl mb-6 group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <h3 className={`text-3xl font-bold mb-4 transition-colors duration-300 ${
                  isDark ? 'text-white group-hover:text-red-500' : 'text-gray-900 group-hover:text-gray-700'
                }`}>
                  {service.title}
                </h3>
                <p className={`text-base leading-relaxed mb-6 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                  {service.description}
                </p>
                <ul className={`space-y-3 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <span className="text-red-500 mt-1">✓</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={`py-24 relative overflow-hidden ${
        isDark ? 'bg-gradient-to-br from-slate-900 to-black' : 'bg-gradient-to-br from-gray-100 to-white'
      }`}>
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-red-500/30 rounded-full blur-3xl" />
        </div>

        <div className="max-w-4xl mx-auto px-8 text-center relative z-10">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className={`text-5xl font-black mb-6 ${isDark ? 'text-white' : 'text-gray-900'}`}
          >
            Ready to Get Started?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className={`text-xl mb-10 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}
          >
            Contact us today to discuss your requirements and get a customized solution.
          </motion.p>
          <motion.button
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => window.location.href = "/contact"}
            className="px-12 py-5 bg-gradient-to-r from-red-500 to-red-600 text-white rounded-full font-bold shadow-xl hover:shadow-red-500/50 transition-all duration-300 text-lg"
          >
            Contact Us Now
          </motion.button>
        </div>
      </section>

      {/* Footer */}
      <footer className={`border-t py-16 relative overflow-hidden ${
        isDark ? 'bg-black border-white/10 text-white' : 'bg-gray-50 border-gray-200 text-gray-900'
      }`}>
        <div className="absolute inset-0 opacity-20">
          <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-red-500/20 rounded-full blur-3xl" />
        </div>
        
        <div className="max-w-7xl mx-auto px-8 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
            <div>
              <h3 className={`text-2xl font-bold mb-4 ${
                isDark 
                  ? 'bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent'
                  : 'bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent'
              }`}>Excel Equipments</h3>
              <p className={isDark ? 'text-gray-400' : 'text-gray-600'}>Premium machinery rental solutions for your business needs.</p>
            </div>
            <div>
              <h4 className="text-lg font-bold mb-4 text-red-500">Quick Links</h4>
              <ul className={`space-y-2 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                <li className="hover:text-red-500 cursor-pointer transition-colors">Home</li>
                <li className="hover:text-red-500 cursor-pointer transition-colors">Products</li>
                <li className="hover:text-red-500 cursor-pointer transition-colors">Services</li>
                <li className="hover:text-red-500 cursor-pointer transition-colors">Contact Us</li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-bold mb-4 text-red-500">Contact</h4>
              <p className={isDark ? 'text-gray-400' : 'text-gray-600'}>+92 309 4802833</p>
            </div>
          </div>
          
          <div className={`border-t pt-8 text-center ${isDark ? 'border-white/10 text-gray-500' : 'border-gray-200 text-gray-500'}`}>
            <p>© 2025 Excel Equipments. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}