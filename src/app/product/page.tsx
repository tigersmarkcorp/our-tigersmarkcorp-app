'use client';

import Image from 'next/image';
import { useState, useEffect } from "react";
import { motion } from 'framer-motion';

import {
  FaFacebookMessenger,
  FaInstagram,
  FaLinkedin,
  FaPhone,
  FaViber,
  FaMapMarkerAlt,
  FaTimes,
  FaCommentDots
} from "react-icons/fa";


const products = [
  {
    title: 'UPVC Roofing and Ceiling Panels',
    desc: 'Durable, lightweight, and corrosion-resistant, these panels are ideal for both residential and commercial structures, providing long-lasting protection against the elements.',
    image: '/bg1.jpg',
  },
  {
    title: 'HDPE Solid Pipes',
    desc: 'High-density polyethylene pipes offer excellent resistance to chemicals and abrasion. Suitable for underground and industrial piping systems.',
    image: '/bg3.jpg',
  },
  {
    title: 'HDPE Structured Wall Pipes',
    desc: 'Lightweight yet strong, these structured wall pipes are designed for gravity drainage and sewer applications, ensuring structural integrity.',
    image: '/bg4.jpg',
  },
  {
    title: 'Fire Pumps',
    desc: 'Engineered to meet emergency fire protection needs, our fire pumps provide reliable pressure and volume for sprinkler systems and fire hydrants.',
    image: '/bg5.jpg',
  },
  {
    title: 'Jockey Pumps',
    desc: 'A key component in fire systems, jockey pumps maintain system pressure to reduce wear on the main pump and ensure constant readiness.',
    image: '/products/jockey-pump.jpg',
  },
  {
    title: 'Water Pumps',
    desc: 'Our water pumps are built for performance and energy efficiency — supporting a wide range of applications from agriculture to commercial plumbing.',
    image: '/products/water-pump.jpg',
  },
];

export default function ProductPage() {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % products.length);
  };

  const prevSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + products.length) % products.length);
  };

   const [open, setOpen] = useState(false);
  
    const toggleWidget = () => setOpen(!open);
  
    const links = [
      {
        icon: <FaPhone />,
        href: "tel:+1234567890",
        bg: "bg-green-500",
        label: "Call"
      },
      {
        icon: <FaViber />,
        href: "viber://chat?number=%2B1234567890",
        bg: "bg-purple-600",
        label: "Viber"
      },
      {
        icon: <FaFacebookMessenger />,
        href: "https://m.me/yourpage",
        bg: "bg-blue-500",
        label: "Messenger"
      },
      {
        icon: <FaInstagram />,
        href: "https://instagram.com/yourprofile",
        bg: "bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600",
        label: "Instagram"
      },
      {
        icon: <FaLinkedin />,
        href: "https://linkedin.com/in/yourprofile",
        bg: "bg-sky-700",
        label: "LinkedIn"
      },
      {
        icon: <FaMapMarkerAlt />,
        href: "https://goo.gl/maps/yourlocation",
        bg: "bg-green-700",
        label: "Location"
      }
    ];

  return (

    
    <div className="bg-black text-white font-['Bricolage Grotesque'] text-[17px] sm:text-[18px]">
          {/* Sticky Header */}
              <motion.header
                initial={{ y: -50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8 }}
                className="sticky top-0 z-50 w-full bg-white/10 backdrop-blur-lg shadow-md"
              >
               <div className="w-full max-w-[1600px] mx-auto  px-6 sm:px-20 py-4 flex items-center gap-16 text-white">
            
                        <Image src="/clientslogo/TMClog0s.png" alt="Logo" width={210} height={25} />
            
                    {/* Desktop Nav */}
                    <nav className="hidden sm:flex gap-10 ml-50 text-[18px] font-medium">
                      <a href="/" className="hover:underline transition-all">Home</a>
                      <a href="/about" className="hover:underline transition-all">About Us</a>
                      <a href="/service" className="hover:underline transition-all">Services</a>
                      <a href="/product" className="hover:underline transition-all">Products</a>
                      <a href="/project" className="hover:underline transition-all">Projects</a>
                      <a href="/contact" className="hover:underline transition-all">Contact</a>
                      <a href="/FAQ" className="hover:underline transition-all">FAQ</a>
                    </nav>
            
                    {/* CTA Button */}
            <div className="fixed bottom-6 right-20 z-50">
              {open && (
                <div className="absolute top-full mt-3 flex flex-col items-center gap-3">
                  {links.map((item, i) => (
                    <a
                      key={i}
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`w-14 h-14 flex items-center justify-center rounded-full text-white shadow-lg transition-transform hover:scale-110 ${item.bg}`}
                      title={item.label}
                    >
                      {item.icon}
                    </a>
                  ))}
                </div>
              )}
            
              <button
                onClick={toggleWidget}
                className={`w-16 h-16 animate-pulse-custom flex items-center justify-center rounded-full text-white text-2xl shadow-xl transition-all ${
                  open ? "bg-indigo-600" : "bg-orange-500"
                } hover:scale-105`}
                title="Contact"
              >
                {open ? <FaTimes /> : <FaCommentDots />}
              </button>
            </div>
            
                </div>
              </motion.header>
         
    {/* === Products Page – In Development Notice === */}
<section className="min-h-screen flex items-center justify-center px-6 py-20 relative overflow-hidden">
  {/* Subtle Animated Grid Background */}
  <div 
    className="absolute inset-0 z-0 opacity-5"
    style={{
      backgroundImage: `
        linear-gradient(rgba(255,165,0,0.1) 1px, transparent 1px),
        linear-gradient(90deg, rgba(255,165,0,0.1) 1px, transparent 1px)
      `,
      backgroundSize: '40px 40px',
    }}
  ></div>

  {/* Floating Gradient Orbs */}
  <div className="absolute top-1/4 left-10 w-64 h-64 bg-orange-500/10 rounded-full blur-3xl z-0"></div>
  <div className="absolute bottom-20 right-10 w-80 h-80 bg-indigo-600/10 rounded-full blur-3xl z-0"></div>

  <motion.div
    initial={{ opacity: 0, y: 30 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
    className="relative z-10 text-center max-w-4xl mx-auto"
  >
    {/* Icon Badge */}
    <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-orange-500/30 rounded-full px-5 py-2 mb-6 text-orange-400 font-semibold text-sm">
      <div className="w-2 h-2 bg-orange-400 rounded-full animate-pulse"></div>
      Currently Curating
    </div>

    {/* Main Headline */}
    <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-yellow-300 mb-6">
      Our Product Portfolio <br />
      <span className="text-white">Is Under Engineering</span>
    </h1>

    {/* Subtitle */}
    <p className="text-lg sm:text-xl text-gray-300 mb-8 leading-relaxed max-w-2xl mx-auto">
      We're assembling a precision-crafted collection of premium construction materials and systems. 
      Excellence takes time — and we’re building this with the same integrity as our structures.
    </p>

    {/* Status Indicator */}
    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-sm text-gray-400 mb-10">
      <span className="flex items-center gap-1.5">
        🔧 <span>System Integration</span>
      </span>
      <span className="hidden sm:inline">|</span>
      <span className="flex items-center gap-1.5">
        📦 <span>Inventory Sync</span>
      </span>
      <span className="hidden sm:inline">|</span>
      <span className="flex items-center gap-1.5">
        ✅ <span>Quality Assurance</span>
      </span>
    </div>

    {/* CTA */}
    <a
      href="/contact"
      className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-500 to-yellow-500 hover:from-orange-600 hover:to-yellow-600 text-black font-semibold px-8 py-3 rounded-full transition-all shadow-lg hover:shadow-orange-500/30"
    >
      Stay Informed
      <FaCommentDots />
    </a>
  </motion.div>
</section>
      {/* Footer */}
  <motion.footer
             initial={{ opacity: 0, y: 40 }}
             whileInView={{ opacity: 1, y: 0 }}
             transition={{ duration: 1 }}
             viewport={{ once: true }}
             className="bg-navy-900 w-full py-12 px-6 sm:px-20 text-sm text-gray-300 z-10"
           >
             <div className="max-w-[1600px] mx-auto grid md:grid-cols-4 gap-12">
               <div className="space-y-4">
                 <Image src="/clientslogo/TMClog0s.png" alt="Logo" width={130} height={30} />
                 <p className="text-gray-400">Tiger's Mark Corporation — building excellence with passion and precision.</p>
                 <div className="flex space-x-4 mt-4">
                   <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><img src="/icons/faceboo.svg" alt="Facebook" className="w-6 h-6" /></a>
                   <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><img src="/icons/instagram.svg" alt="Instagram" className="w-6 h-6" /></a>
                   <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"><img src="/icons/linkedin.svg" alt="LinkedIn" className="w-6 h-6" /></a>
                 </div>
               </div>
     
               <div className="space-y-3">
                 <h4 className="text-white font-semibold">Quick Links</h4>
                 <ul className="space-y-2">
                   <li><a href="#Home" className="hover:underline">Home</a></li>
                   <li><a href="#aboutus" className="hover:underline  ">About Us</a></li>
                   <li><a href="#services" className="hover:underline">Services</a></li>
                  <li><a href="#product" className="hover:underline text-orange-400">Products</a></li>
                   <li><a href="#projects" className="hover:underline">Projects</a></li>
                   <li><a href="#contact" className="hover:underline">Contact</a></li>
                   <li><a href="#FAQ" className="hover:underline">FAQ</a></li>
                 </ul>
               </div>
     
               <div className="space-y-3">
                 <h4 className="text-white font-semibold">Contact Info</h4>
                 <p>Mobile: 0917 623 1675 | 0917 623 1675</p>
                 <p>Email: sales@tigersmarkcorp.com</p>
                 <p>17, Road 10 Visayas Ave, Quezon City, 1128 Metro Manila</p>
               </div>
     
               <div className="space-y-3">
                 <h4 className="text-white font-semibold">ElementInternals</h4>
                 <p>Innovating with structural integrity and efficiency at every phase of construction.</p>
               </div>
             </div>
     
             <div className="mt-12 border-t border-gray-700 pt-6 text-center text-xs text-gray-400">
               © {new Date().getFullYear()} Tiger's Mark Corporation. All rights reserved.
             </div>
           </motion.footer>
    </div>
  );
}
