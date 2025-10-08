"use client";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export default function ContactPage() {
  const [invertNavBar, setInvertNavBar] = useState(false);
  const [isDark, setIsDark] = useState(() => {
    try { return localStorage.getItem('isDark') === 'true'; }
    catch { return false; }
  });
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  useEffect(() => {
    const onScroll = () => {
      setInvertNavBar(window.scrollY > 100 ? true : false);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
    alert('Thank you! We will get back to you soon.');
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className={`min-h-screen transition-colors duration-500 ${isDark ? 'bg-black' : 'bg-gray-50'}`}>

      {/* Hero Section */}
      <section className={`relative w-full min-h-[50vh] flex items-center justify-center pt-32 pb-20 px-8 overflow-hidden ${
        isDark ? 'bg-gradient-to-br from-slate-900 via-slate-800 to-black' : 'bg-gradient-to-br from-gray-100 via-gray-50 to-white'
      }`}>
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-20 w-96 h-96 bg-red-500/30 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-blue-500/30 rounded-full blur-3xl" />
        </div>
        
        <div className="max-w-4xl text-center relative z-10">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className={`text-7xl font-black mb-6 ${
              isDark 
                ? 'bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent'
                : 'bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent'
            }`}
          >
            Get In Touch
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
            Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
          </motion.p>
        </div>
      </section>

      {/* Contact Section */}
      <section className={`py-24 relative overflow-hidden ${
        isDark ? 'bg-gradient-to-b from-black via-slate-900 to-black' : 'bg-gradient-to-b from-white via-gray-50 to-white'
      }`}>
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-red-500/30 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/30 rounded-full blur-3xl" />
        </div>

        <div className="max-w-7xl mx-auto px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className={`text-4xl font-black mb-8 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                Contact Information
              </h2>
              <p className={`text-lg mb-12 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                Reach out to us through any of the following channels. We're here to help!
              </p>

              <div className="space-y-8">
                {[
                  {
                    icon: "📞",
                    title: "Phone",
                    content: "+92 309 4802833",
                    link: "tel:+923094802833"
                  },
                  {
                    icon: "📧",
                    title: "Email",
                    content: "info@excelequipments.com",
                    link: "mailto:info@excelequipments.com"
                  },
                  {
                    icon: "📍",
                    title: "Address",
                    content: "Lahore, Punjab, Pakistan",
                    link: null
                  },
                  {
                    icon: "🕒",
                    title: "Business Hours",
                    content: "Mon - Sat: 9:00 AM - 6:00 PM",
                    link: null
                  }
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.6 }}
                    className={`backdrop-blur-xl rounded-2xl p-6 transition-all duration-300 hover:scale-105 ${
                      isDark 
                        ? 'bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-white/10'
                        : 'bg-gradient-to-br from-white/80 to-gray-50/80 border border-gray-300/50'
                    }`}
                  >
                    <div className="flex items-start gap-4">
                      <div className="text-4xl">{item.icon}</div>
                      <div>
                        <h3 className={`text-xl font-bold mb-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                          {item.title}
                        </h3>
                        {item.link ? (
                          <a 
                            href={item.link}
                            className={`text-lg hover:text-red-500 transition-colors ${isDark ? 'text-gray-300' : 'text-gray-700'}`}
                          >
                            {item.content}
                          </a>
                        ) : (
                          <p className={`text-lg ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                            {item.content}
                          </p>
                        )}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className={`backdrop-blur-xl rounded-3xl p-10 shadow-2xl ${
                isDark 
                  ? 'bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-white/10'
                  : 'bg-gradient-to-br from-white/80 to-gray-50/80 border border-gray-300/50'
              }`}
            >
              <h2 className={`text-4xl font-black mb-8 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                Send Us a Message
              </h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className={`block text-sm font-semibold mb-2 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                    Your Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 rounded-xl transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-red-500 ${
                      isDark 
                        ? 'bg-slate-700/50 border border-slate-600 text-white placeholder-gray-400'
                        : 'bg-white border border-gray-300 text-gray-900 placeholder-gray-500'
                    }`}
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label className={`block text-sm font-semibold mb-2 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 rounded-xl transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-red-500 ${
                      isDark 
                        ? 'bg-slate-700/50 border border-slate-600 text-white placeholder-gray-400'
                        : 'bg-white border border-gray-300 text-gray-900 placeholder-gray-500'
                    }`}
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label className={`block text-sm font-semibold mb-2 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 rounded-xl transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-red-500 ${
                      isDark 
                        ? 'bg-slate-700/50 border border-slate-600 text-white placeholder-gray-400'
                        : 'bg-white border border-gray-300 text-gray-900 placeholder-gray-500'
                    }`}
                    placeholder="+92 309 4802833"
                  />
                </div>

                <div>
                  <label className={`block text-sm font-semibold mb-2 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                    Subject *
                  </label>
                  <input
                    type="text"
                    name="subject"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 rounded-xl transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-red-500 ${
                      isDark 
                        ? 'bg-slate-700/50 border border-slate-600 text-white placeholder-gray-400'
                        : 'bg-white border border-gray-300 text-gray-900 placeholder-gray-500'
                    }`}
                    placeholder="How can we help?"
                  />
                </div>

                <div>
                  <label className={`block text-sm font-semibold mb-2 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                    Message *
                  </label>
                  <textarea
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    rows="5"
                    className={`w-full px-4 py-3 rounded-xl transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-red-500 resize-none ${
                      isDark 
                        ? 'bg-slate-700/50 border border-slate-600 text-white placeholder-gray-400'
                        : 'bg-white border border-gray-300 text-gray-900 placeholder-gray-500'
                    }`}
                    placeholder="Tell us more about your requirements..."
                  />
                </div>

                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full px-8 py-4 bg-gradient-to-r from-red-500 to-red-600 text-white rounded-xl font-bold shadow-xl hover:shadow-red-500/50 transition-all duration-300"
                >
                  Send Message
                </motion.button>
              </form>
            </motion.div>
          </div>
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