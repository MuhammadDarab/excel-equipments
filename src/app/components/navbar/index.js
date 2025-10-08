'use client'
import { motion } from "framer-motion";
import { useState } from "react";

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
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
            </svg>
        </motion.a>
    );
};


const Navbar = () => {
    const [invertNavBar, setInvertNavBar] = useState(false);
    const [isDark, setIsDark] = useState(() => {
        try { return localStorage.getItem('isDark') === 'true'; }
        catch { return false; }
    });

    return (
        <>
            <WhatsAppButton phoneNumber="+923094802833" />

            <motion.nav
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ type: "spring", stiffness: 80, damping: 12 }}
                className={`fixed top-4 left-1/2 -translate-x-1/2 max-w-7xl w-full rounded-3xl px-10 py-4 flex justify-between items-center z-50 transition-all duration-500 ${isDark
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
                        {["Home", "Products", "Services", "Contact Us"].map((item) => (
                            <li
                                key={item}
                                className={`cursor-pointer transition-colors duration-300 relative group ${isDark ? 'text-white hover:text-red-500' : 'text-gray-900 hover:text-red-500'
                                    }`}
                                onClick={() => {
                                    if (item === "Home") window.location.href = "/";
                                    if (item === "Products") window.location.href = "/products";
                                    if (item === "Services") window.location.href = "/services";
                                    if (item === "Contact Us") window.location.href = "/contact";
                                }}
                            >
                                {item}
                                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-red-500 transition-all duration-300 group-hover:w-full"></span>
                            </li>
                        ))}
                    </ul>

                    {/* Theme Toggle Button */}
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
                        className={`p-2 rounded-full transition-all duration-300 ${isDark
                            ? 'bg-white/10 hover:bg-white/20 text-yellow-400'
                            : 'bg-gray-800/10 hover:bg-gray-800/20 text-gray-800'
                            }`}
                    >
                        {isDark ? (
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" />
                            </svg>
                        ) : (
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                            </svg>
                        )}
                    </motion.button>
                </div>
            </motion.nav>
        </>
    );
};

export default Navbar;