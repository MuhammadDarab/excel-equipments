"use client";
import { motion } from "framer-motion";
import { useState, useEffect, useRef } from "react";

const videos = [
  "1.mp4",
  "2.mp4",
  "3.mp4",
  "4.mp4",
  "5.mp4",
  "6.mp4",
  "7.mp4",
];

const clients = [
  { name: 'Client A', logo: '1.jpg' },
  { name: 'Client B', logo: '2.png' },
  { name: 'Client C', logo: '3.jpg' },
  { name: 'Client D', logo: '4.jpeg' },
  { name: 'Client E', logo: '5.png' },
  { name: 'Client F', logo: '6.png' },
  { name: 'Client G', logo: '7.png' },
  { name: 'Client H', logo: '8.png' },
];

export default function Home() {
  const [currentVideo, setCurrentVideo] = useState(0);
  const [invertNavBar, setInvertNavBar] = useState(false);
  const [isDark, setIsDark] = useState(() => {
    try { return localStorage.getItem('isDark') === 'true'; }
    catch { return false; }
  });
  const videoRef = useRef(null);

  const handleEnded = () => {
    setCurrentVideo((prev) => (prev + 1) % videos.length);
  };

  useEffect(() => {
    const onScroll = () => {
      setInvertNavBar(window.scrollY > 720 ? true : false);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.load();
      videoRef.current.play();
    }
  }, [currentVideo]);

  return (
    <div className={`min-h-screen transition-colors duration-500 ${isDark ? 'bg-black' : 'bg-gray-50'}`}>

      {/* Hero Section with videos */}
      <div className={`relative flex flex-col items-center justify-center min-h-screen px-8 py-20 pt-32 text-center overflow-hidden ${
        isDark ? 'bg-black' : 'bg-white'
      }`}>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 1 }}
          className="relative z-10"
        >
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-8xl font-black drop-shadow-2xl max-w-4xl text-white"
          >
            Excel Equipments
          </motion.h1>
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "120px" }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="h-1 bg-gradient-to-r from-red-500 to-red-600 mx-auto mt-8 rounded-full"
          />
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="mt-8 max-w-2xl text-xl drop-shadow-md text-white"
          >
            Premium machinery rental solutions tailored for your business —
            flexible, reliable, and transparent.
          </motion.p>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.8 }}
          className="relative mt-12 flex gap-6 z-10"
        >
          <motion.button
            whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(239, 68, 68, 0.4)" }}
            whileTap={{ scale: 0.95 }}
            className="px-10 py-4 rounded-full bg-gradient-to-r from-red-500 to-red-600 text-white font-bold shadow-2xl transition-all duration-300 hover:from-red-600 hover:to-red-700"
          >
            Get Started
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05, backgroundColor: "rgba(255, 255, 255, 0.1)" }}
            whileTap={{ scale: 0.95 }}
            className="px-10 py-4 rounded-full border-2 border-white/30 backdrop-blur-sm font-bold text-white hover:border-white hover:bg-white/10 transition-all duration-300"
          >
            Learn More
          </motion.button>
        </motion.div>
        
        
        <video
          key={currentVideo}
          ref={videoRef}
          onEnded={handleEnded}
          className="absolute inset-0 w-full h-full object-cover"
          muted
          autoPlay
          playsInline
          preload="auto"
        >
          <source src={"background/" + videos[currentVideo]} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      {/* Why Choose Us */}
      <section className={`relative w-full h-screen overflow-hidden ${
        isDark ? 'bg-gradient-to-br from-slate-900 via-slate-800 to-black' : 'bg-gradient-to-br from-gray-100 via-gray-50 to-white'
      }`}>
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-20 left-20 w-96 h-96 bg-red-500/20 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl" />
        </div>
        
        <model-viewer
          src="forklift.glb"
          alt="Forklifter 3D Model"
          auto-rotate
          camera-controls
          camera-orbit="150deg 75deg 2.5m"
          camera-target="0.3m 0m 0m"
          environment-image="neutral"
          shadow-intensity="1"
          shadow-softness="0.8"
          shadow-camera="0 0 0"
          light-position="2m 5m 2m"
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
              Why Choose Us
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.7 }}
              className={`mb-8 text-lg leading-relaxed ${isDark ? 'text-gray-200' : 'text-gray-800'}`}
            >
              We prioritize quality, transparency, and customer satisfaction to
              bring you the best machinery rental experience in the industry.
            </motion.p>
            <motion.button
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.7 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-10 py-4 bg-gradient-to-r from-red-500 to-red-600 text-white rounded-full font-bold shadow-xl hover:shadow-red-500/50 transition-all duration-300"
            >
              Contact Us
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Services - Modern card layout */}
      <section className={`w-full py-24 relative overflow-hidden ${
        isDark ? 'bg-gradient-to-b from-black via-slate-900 to-black' : 'bg-gradient-to-b from-white via-gray-50 to-white'
      }`}>
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-red-500/30 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/30 rounded-full blur-3xl" />
        </div>
        
        <div className="max-w-7xl mx-auto px-8 relative z-10">
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
            Our Services
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                image: "1.jpg",
                title: "Forklift & Reach Truck Rentals",
                desc: "Battery-operated fleet from 1 to 5.5 tons with customizable attachments for any job.",
                icon: "🚜"
              },
              {
                image: "2.jpg",
                title: "Maintenance & Refurbishment",
                desc: "Expert care ensuring your equipment runs smoothly and efficiently.",
                icon: "🔧"
              },
              {
                image: "3.jpg",
                title: "Spare Parts Supply",
                desc: "Genuine parts from top brands for maximum durability and performance.",
                icon: "⚙️"
              },
            ].map(({ title, desc, icon }, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2, duration: 0.6 }}
                whileHover={{ y: -10 }}
                className={`backdrop-blur-xl rounded-3xl p-8 shadow-2xl transition-all duration-300 group ${
                  isDark 
                    ? 'bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-white/10 hover:border-red-500/50'
                    : 'bg-gradient-to-br from-white/80 to-gray-50/80 border border-gray-300/50 hover:border-gray-400'
                }`}
              >
                <div className="text-5xl mb-6 group-hover:scale-110 transition-transform duration-300">{icon}</div>
                <h3 className={`text-3xl font-bold mb-4 transition-colors duration-300 ${
                  isDark ? 'text-white group-hover:text-red-500' : 'text-gray-900 group-hover:text-gray-700'
                }`}>{title}</h3>
                <p className={`text-base leading-relaxed ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>{desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Clients */}
      <section className={`py-24 overflow-hidden relative ${
        isDark ? 'bg-gradient-to-b from-black to-slate-900' : 'bg-gradient-to-b from-white to-gray-100'
      }`}>
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-red-500/30 rounded-full blur-3xl" />
        </div>
        
        <div className="w-screen px-4 text-center relative z-10">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className={`text-6xl font-black mb-16 ${isDark ? 'text-white' : 'text-gray-900'}`}
          >
            Our <span className="bg-gradient-to-r from-red-500 to-red-600 bg-clip-text text-transparent">Clients</span>
          </motion.h2>

          <div className="marquee-container">
            {[0, 1, 2].map((row) => (
              <div className="marquee-row" key={row}>
                <div
                  className={`marquee-track 
                    ${row % 2 ? 'reverse' : ''} 
                    ${row === 2 ? 'delayed' : ''}`}
                >
                  {[...clients, ...clients].map((client, i) => (
                    <div key={`${client.name}-${i}`} className="marquee-item group">
                      <div className="backdrop-blur-sm rounded-2xl p-6 transition-all duration-300 hover:scale-105">
                        <img src={'clients/' + client.logo} alt={client.name} className="marquee-img grayscale group-hover:grayscale-0 transition-all duration-300" />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
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

      <style jsx>{`
        .marquee-container {
          display: flex;
          flex-direction: column;
          gap: 2rem;
        }
        .marquee-row {
          width: 100%;
          overflow: hidden;
        }
        .marquee-track {
          display: flex;
          gap: 2rem;
          animation: scroll 30s linear infinite;
        }
        .marquee-track.reverse {
          animation-direction: reverse;
        }
        .marquee-track.delayed {
          animation-delay: -15s;
        }
        .marquee-item {
          flex-shrink: 0;
          width: 200px;
          height: 120px;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .marquee-img {
          max-width: 140px;
          max-height: 80px;
          object-fit: contain;
        }
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </div>
  );
}