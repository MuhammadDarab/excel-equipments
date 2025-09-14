"use client";
import { motion } from "framer-motion";
import { useState, useEffect, useRef } from "react";

const WhatsAppButton = ({ phoneNumber }) => {
  const whatsappUrl = `https://wa.me/${phoneNumber}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-5 right-5 z-50 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition-transform transform hover:scale-110"
    >
      <img src="/whatsapp-icon.png" alt="WhatsApp" width={28} height={28} />
    </a>
  );
};

const videos = [
  "1.mp4",
  "2.mp4",
  "3.mp4",
  "4.mp4",
  "5.mp4",
  "6.mp4",
  "7.mp4",
  // "8.mp4",
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
  const videoRef = useRef(null);

  const handleEnded = () => {
    setCurrentVideo((prev) => (prev + 1) % videos.length);
  };

  useEffect(() => {
    const onScroll = () => {
      setInvertNavBar(window.scrollY > 720 ? true : false); // or set state here
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
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100">
      <WhatsAppButton phoneNumber="+923154007818" />
      
      {/* Acrylic glass navbar */}
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 80, damping: 12 }}
        className={`fixed top-4 left-1/2 -translate-x-1/2 max-w-7xl w-full bg-opacity-20 backdrop-blur-sm ${
          invertNavBar ? "backdrop-invert" : ""
        } rounded-3xl shadow-lg px-10 py-4 flex justify-between items-center z-50 transition-all`}
      >
        <div className="text-xl text-white">Excel Equipments</div>
        <ul className="flex space-x-10 text-slate-900/90 font-semibold">
          {["Home", "About Us", "Contact Us"].map((item) => (
            <li
              key={item}
              className="cursor-pointer text-white hover:text-orange-500 transition-colors"
            >
              {item}
            </li>
          ))}
        </ul>
      </motion.nav>

      {/* Hero Section with videos */}
      <div className="relative flex flex-col items-center justify-center min-h-screen px-8 py-20 pt-32 text-white text-center bg-black">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="relative text-7xl font-extrabold drop-shadow-lg max-w-4xl z-10"
        >
          Excel Equipments
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="relative mt-6 max-w-2xl text-xl drop-shadow-md z-10"
        >
          Premium machinery rental solutions tailored for your business —
          flexible, reliable, and transparent.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="relative mt-10 flex gap-6 z-10"
        >
          <button className="px-8 py-3 rounded-full bg-orange-500 font-semibold shadow-lg hover:scale-105 transition-transform">
            Get Started
          </button>
          <button className="px-8 py-3 rounded-full border-2 border-white font-semibold hover:bg-white hover:text-orange-500 transition-colors">
            Learn More
          </button>
        </motion.div>
        <div className="absolute inset-0 bg-black z-5 opacity-[0.6]" />
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

      {/* Why Choose Us - full modal-view background with overlay text and shadow */}
      <section className="relative w-full h-screen bg-gradient-to-r from-indigo-100 to-cyan-100">
        <model-viewer
          src="forklift.glb"
          alt="Forklifter 3D Model"
          auto-rotate
          camera-controls
          camera-orbit="150deg 75deg 2.5m"
          camera-target="0.3m 0m 0m"
          style={{ width: "100%", height: "100%", pointerEvents: "none" }}
        ></model-viewer>

        {/* Text overlay */}
        <div className="absolute inset-0 z-10 flex flex-col justify-center items-start px-12 max-w-xl text-white bg-transparent">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-4xl font-bold mb-6 text-slate-600 backdrop-invert text-white p-2"
          >
            Why Choose Us
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.7 }}
            className="mb-8 text-slate-600"
          >
            We prioritize quality, transparency, and customer satisfaction to
            bring you the best machinery rental experience.
          </motion.p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-10 py-3 bg-indigo-600 rounded-full font-semibold shadow-lg hover:bg-indigo-700 transition"
          >
            Contact Us
          </motion.button>
        </div>
      </section>

      {/* Services */}
      <section className="w-full">
        <div className="flex flex-row">
          {[
            {
              image: "1.jpg",
              title: "Forklift & Reach Truck Rentals",
              desc: "Battery-operated fleet from 1 to 5.5 tons with customizable attachments for any job.",
            },
            {
              image: "2.jpg",
              title: "Maintenance & Refurbishment",
              desc: "Expert care ensuring your equipment runs smoothly and efficiently.",
            },
            {
              image: "3.jpg",
              title: "Spare Parts Supply",
              desc: "Genuine parts from top brands for maximum durability and performance.",
            },
          ].map(({ title, desc }, i) => (
            <div
              key={i}
              className={`w-1/3 h-[29rem] p-16 flex items-center justify-center ${
                i % 2 === 0 ? "bg-white text-slate-800" : "bg-black text-white"
              }`}
            >
              <div className="text-left h-full flex flex-col justify-center">
                <h3 className="text-5xl font-semibold mb-2">{title}</h3>
                <p className={`text-base text-xs ${i % 2 === 0 ? 'text-slate-600' : 'text-slate-300'}`}>{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Our Clients */}
      <section className="py-16 overflow-hidden">
        <div className="w-screen px-4 text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-12">
            Our Clients
          </h2>

          {/* React JSX: render 2 rows (duplicate clients already used for continuous scroll) */}
          <div className="marquee-container">
            {[0, 1, 2].map((row) => (
              <div className="marquee-row" key={row}>
                <div
                  className={`marquee-track 
                    ${row % 2 ? 'reverse' : ''} 
                    ${row === 2 ? 'delayed' : ''}`}
                >
                  {[...clients, ...clients].map((client, i) => (
                    <div key={`${client.name}-${i}`} className="marquee-item">
                      <img src={'clients/' + client.logo} alt={client.name} className="marquee-img" />
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white text-center py-8">
        <p>© 2025 Excel Equipments. All rights reserved.</p>
      </footer>
    </div>
  );
}
