"use client";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const WhatsAppButton = ({ phoneNumber }) => {
  const whatsappUrl = `https://wa.me/${phoneNumber}`;

  return (
    <motion.a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1, type: "spring", stiffness: 200 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      className="fixed bottom-8 right-8 z-50 bg-gradient-to-br from-green-400 to-green-600 hover:from-green-500 hover:to-green-700 text-white p-5 rounded-full shadow-2xl transition-all duration-300"
    >
      <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
      </svg>
    </motion.a>
  );
};

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
      <WhatsAppButton phoneNumber="+923094802833" />
      
      {/* Modern glassmorphic navbar */}
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 80, damping: 12 }}
        className={`fixed top-4 left-1/2 -translate-x-1/2 max-w-7xl w-full rounded-3xl px-10 py-4 flex justify-between items-center z-50 transition-all duration-500 ${
          isDark
            ? invertNavBar 
              ? "bg-black/95 backdrop-blur-md shadow-2xl border border-slate-800" 
              : "bg-black/30 backdrop-blur-xl shadow-lg border border-white/10"
            : invertNavBar
              ? "bg-white/95 backdrop-blur-md shadow-2xl border border-gray-200"
              : "bg-white/30 backdrop-blur-xl shadow-lg border border-gray-300/50"
        }`}
      >
        <div className={`text-xl font-bold tracking-wide ${isDark ? 'text-white' : 'text-gray-900'}`}>Excel Equipments</div>
        
        <div className="flex items-center gap-8">
          <ul className="flex space-x-10 font-semibold">
            {["Home", "Products", "Contact Us"].map((item) => (
              <li
                key={item}
                className={`cursor-pointer transition-colors duration-300 relative group ${
                  isDark ? 'text-white hover:text-red-500' : 'text-gray-900 hover:text-red-500'
                }`}
                onClick={() => {
                  if (item === "Home") window.location.href = "/";
                  if (item === "Products") window.location.href = "/products";
                  if (item === "Contact Us") window.location.href = "/#contact";
                }}
              >
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-red-500 transition-all duration-300 group-hover:w-full"></span>
              </li>
            ))}
          </ul>
          
          {/* Theme Toggle Button inside navbar */}
          <motion.button
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.5, type: "spring", stiffness: 200 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => {
              setIsDark(!isDark);
              localStorage.setItem('isDark', !isDark);
            }}
            className={`p-2 rounded-full transition-all duration-300 ${
              isDark 
                ? 'bg-white/10 hover:bg-white/20 text-yellow-400' 
                : 'bg-gray-800/10 hover:bg-gray-800/20 text-gray-800'
            }`}
          >
            {isDark ? (
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"/>
              </svg>
            ) : (
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"/>
              </svg>
            )}
          </motion.button>
        </div>
      </motion.nav>

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