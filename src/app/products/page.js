"use client";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const ProductsSection = ({ isDark }) => {
  const productsList = [
    { name: "Transmission Parts", image: "transmission.jpg", description: "High-quality transmission components for optimal performance", icon: "⚙️" },
    { name: "Engine Parts", image: "engine.jpg", description: "Durable engine parts to keep your machinery running smoothly", icon: "🔧" },
    { name: "Hydraulic Parts", image: "hydraulic.jpg", description: "Reliable hydraulic components for efficient operation", icon: "💧" },
    { name: "Electrical Parts", image: "electrical.jpg", description: "Advanced electrical parts for enhanced functionality", icon: "⚡" },
    { name: "Cooling System Parts", image: "cooling.jpg", description: "Efficient cooling system parts to prevent overheating", icon: "❄️" },
    { name: "Brake System Parts", image: "brake.jpg", description: "High-performance brake system parts for safety and reliability", icon: "🛑" },
    { name: "Suspension Parts", image: "suspension.jpg", description: "Durable suspension parts for improved vehicle handling", icon: "🔩" },
    { name: "Exhaust System Parts", image: "exhaust.jpg", description: "Efficient exhaust system parts for optimal engine performance", icon: "💨" },
  ];

  return (
    <section className={`py-24 min-h-screen relative overflow-hidden ${
      isDark ? 'bg-gradient-to-b from-black via-slate-900 to-black' : 'bg-gradient-to-b from-white via-gray-50 to-white'
    }`}>
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-red-500/30 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/30 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-8 relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className={`text-6xl font-black text-center mb-20 ${
            isDark 
              ? 'bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent'
              : 'bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent'
          }`}
        >
          Our Products
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {productsList.map((product, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              whileHover={{ y: -10 }}
              className={`backdrop-blur-xl rounded-3xl overflow-hidden shadow-2xl transition-all duration-300 group ${
                isDark 
                  ? 'bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-white/10 hover:border-red-500/50'
                  : 'bg-gradient-to-br from-white/80 to-gray-50/80 border border-gray-300/50 hover:border-gray-400'
              }`}
            >
              <div className="relative overflow-hidden h-48">
                <div className={`absolute inset-0 flex items-center justify-center text-8xl transition-transform duration-500 group-hover:scale-110 ${
                  isDark ? 'bg-gradient-to-br from-slate-700/50 to-slate-800/50' : 'bg-gradient-to-br from-gray-100/50 to-gray-200/50'
                }`}>
                  {product.icon}
                </div>
              </div>

              <div className="p-6">
                <h3 className={`text-2xl font-bold mb-3 transition-colors duration-300 ${
                  isDark ? 'text-white group-hover:text-red-500' : 'text-gray-900 group-hover:text-gray-700'
                }`}>
                  {product.name}
                </h3>
                <p className={`text-base leading-relaxed ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                  {product.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default function ProductsPage() {
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

  return (
    <div className={`min-h-screen transition-colors duration-500 ${isDark ? 'bg-black' : 'bg-gray-50'}`}>
      {/* Hero Section with 3D Model */}
      <section className={`relative w-full h-screen overflow-hidden ${
        isDark ? 'bg-gradient-to-br from-slate-900 via-slate-800 to-black' : 'bg-gradient-to-br from-gray-100 via-gray-50 to-white'
      }`}>
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-20 left-20 w-96 h-96 bg-red-500/20 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl" />
        </div>
        
        <model-viewer
          src="gears.glb"
          auto-rotate
          camera-controls
          camera-orbit="150deg 75deg 5m"
          field-of-view="60deg"
          environment-image="neutral"
          shadow-intensity="1"
          shadow-softness="0.8"
          shadow-camera="0 0 0"
          light-position="2m 5m 2m"
          min-field-of-view="30deg"
          max-field-of-view="90deg"
          style={{ width: "100%", height: "100%", pointerEvents: "none" }}
        ></model-viewer>

        {/* Text overlay with glassmorphic card */}
        <div className="absolute inset-0 z-10 flex flex-col justify-center items-start px-12 max-w-2xl">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className={`backdrop-blur-xl rounded-3xl p-10 shadow-2xl ${
              isDark 
                ? 'bg-white/10 border border-white/20' 
                : 'bg-white/60 border border-gray-300/50'
            }`}
          >
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.7 }}
              className={`text-5xl font-black mb-6 ${isDark ? 'text-white' : 'text-gray-900'}`}
            >
              All Things Machine Related
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.7 }}
              className={`mb-8 text-lg leading-relaxed ${isDark ? 'text-gray-200' : 'text-gray-800'}`}
            >
              We prioritize quality, transparency, and customer satisfaction to
              bring you the best parts available out there for sale.
            </motion.p>
            <motion.button
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.7 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                document.getElementById('products-section')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="px-10 py-4 bg-gradient-to-r from-red-500 to-red-600 text-white rounded-full font-bold shadow-xl hover:shadow-red-500/50 transition-all duration-300"
            >
              Check Products
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Products Section */}
      <div id="products-section">
        <ProductsSection isDark={isDark} />
      </div>

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