"use client";
import { motion } from "framer-motion";

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

const ProductsSection = () => {
  const productsList = [
    { name: "Transmission Parts", image: "transmission.jpg", description: "High-quality transmission components for optimal performance" },
    { name: "Engine Parts", image: "engine.jpg", description: "Durable engine parts to keep your machinery running smoothly" },
    { name: "Hydraulic Parts", image: "hydraulic.jpg", description: "Reliable hydraulic components for efficient operation" },
    { name: "Electrical Parts", image: "electrical.jpg", description: "Advanced electrical parts for enhanced functionality" },
    { name: "Cooling System Parts", image: "cooling.jpg", description: "Efficient cooling system parts to prevent overheating" },
    { name: "Brake System Parts", image: "brake.jpg", description: "High-performance brake system parts for safety and reliability" },
    { name: "Suspension Parts", image: "suspension.jpg", description: "Durable suspension parts for improved vehicle handling" },
    { name: "Exhaust System Parts", image: "exhaust.jpg", description: "Efficient exhaust system parts for optimal engine performance" },
  ];

return (
  <section className="py-20 bg-gradient-to-br from-white via-gray-100 to-white min-h-screen">
    <div className="container mx-auto px-4">
      <h2 className="text-5xl font-extrabold text-center text-gray-800 mb-16">
        🌟 Our Products
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
        {productsList.map((product, index) => (
          <div
            key={index}
            className="backdrop-blur-md bg-white/70 border border-gray-200 rounded-2xl shadow-xl overflow-hidden transform transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl"
          >
            <div className="overflow-hidden">
              <img
                src={"products/transmission.jpg"}
                alt={product.name}
                className="w-full h-48 object-cover transition-transform duration-500 hover:scale-105"
              />
            </div>

            <div className="p-6">
              <h3 className="text-2xl font-bold text-gray-800 mb-2">
                {product.name}
              </h3>
              <p className="text-gray-600">{product.description}.</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);


};

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100">
      <WhatsAppButton phoneNumber="+923094802833" />
      
      {/* Acrylic glass navbar */}
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 80, damping: 12 }}
        className={`fixed top-4 left-1/2 -translate-x-1/2 max-w-7xl w-full bg-opacity-20 backdrop-blur-sm backdrop-invert rounded-3xl shadow-lg px-10 py-4 flex justify-between items-center z-50 transition-all`}
      >
        <div className="text-xl text-white">Excel Equipments</div>
        <ul className="flex space-x-10 text-slate-900/90 font-semibold">
          {["Home", "Products", "Contact Us"].map((item) => (
            <li
              key={item}
              className="cursor-pointer text-white hover:text-orange-500 transition-colors"
              onClick={() => {
                // route to /home
                if (item === "Home") window.location.href = "/";
                if (item === "Products") window.location.href = "/products";
                if (item === "Contact Us") window.location.href = "/#contact";
              }}
            >
              {item}
            </li>
          ))}
        </ul>
      </motion.nav>

      {/* Why Choose Us - full modal-view background with overlay text and shadow */}
      <section className="relative w-full h-screen bg-gradient-to-r from-indigo-100 to-cyan-100">
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

        {/* Text overlay */}
        <div className="absolute inset-0 z-10 flex flex-col justify-center items-start px-12 max-w-xl text-white bg-transparent">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-4xl font-bold mb-6 text-slate-600 backdrop-invert text-white p-2"
          >
            All things machine related
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.7 }}
            className="mb-8 text-slate-600"
          >
            We prioritize quality, transparency, and customer satisfaction to
            bring you the best parts available out there for sale.
          </motion.p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-10 py-3 bg-indigo-600 rounded-full font-semibold shadow-lg hover:bg-indigo-700 transition"
          >
            Check Products
          </motion.button>
        </div>
      </section>

      {/* Products Section */}
      <div className="mx-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <ProductsSection />
        </motion.div>
      </div>

      {/* Footer */}
      <footer className="bg-slate-900 text-white text-center py-8">
        <p>© 2025 Excel Equipments. All rights reserved.</p>
      </footer>
    </div>
  );
}
