'use client';

import Image from 'next/image';
import { useState, useEffect } from "react";
import { motion } from 'framer-motion';
import {
  HomeIcon,
  Building2,
  ClipboardList,
} from 'lucide-react';
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

const coreValues = [
  {
    title: 'INTEGRITY',
    desc: 'We operate with unwavering honesty and take full responsibility for our actions.',
    icon: <HomeIcon size={56} className="mb-4 mx-auto text-orange-400" />,
  },
  {
    title: 'EXCELLENCE',
    desc: 'We are committed to delivering unparalleled quality in every aspect of our work.',
    icon: <Building2 size={56} className="mb-4 mx-auto text-orange-400" />,
  },
  {
    title: 'INNOVATION',
    desc: 'We cultivate creativity and embrace forward-thinking solutions to lead the industry.',
    icon: <ClipboardList size={56} className="mb-4 mx-auto text-orange-400" />,
  },
];

export default function AboutUsSection() {

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
    <div className="bg-black text-white font-['Bricolage Grotesque'] text-[17px] sm:text-[18px] leading-relaxed">
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

    {/* === Hero Section – Cinematic & Bold === */}
<section
  id="Home"
  className="relative w-full h-screen flex items-center justify-center overflow-hidden"
>
  <div className="absolute inset-0 z-0">
    <Image
      src="/tiger.jpg"
      alt="Tiger's Mark – Engineering the Future"
      fill
      priority
      className="object-cover object-center scale-110 transition-transform duration-1000 hover:scale-105"
    />
    <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/90 z-10" />
  </div>

  <motion.div
    initial={{ opacity: 0, y: 30 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 1.2 }}
    className="relative z-20 text-center px-6 max-w-5xl mx-auto"
  >
    <h1 className="text-5xl sm:text-7xl md:text-8xl font-black text-white mb-6 leading-tight tracking-tighter drop-shadow-2xl">
      <span className="text-orange-400">Tiger’s Mark</span> <br />
      Builds Tomorrow
    </h1>
    <p className="text-xl sm:text-2xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
      Where engineering meets vision. Where structures become legacies.
    </p>
  </motion.div>

  {/* Scroll Indicator */}
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ delay: 1.5 }}
    className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-gray-400 text-sm animate-bounce"
  >
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
    </svg>
    Scroll to explore
  </motion.div>
</section>

{/* === Main Content – Creative Flow Layout === */}
<section className="relative px-6 md:px-12 lg:px-24 py-32 space-y-40">
  {/* About Us – Staggered Entry */}
  <motion.div
    id="about"
    initial={{ opacity: 0, x: -60 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.8 }}
    viewport={{ once: true }}
    className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
  >
    <div className="space-y-7 order-2 lg:order-1">
      <h2 className="text-5xl font-black text-white">About Us</h2>
      <p className="text-lg text-gray-200 leading-relaxed max-w-lg">
       Tiger’s Mark Corporation was founded to elevate construction standards and set a new benchmark for excellence. Led by experienced and driven professionals with a strong background in the industry, we deliver high-quality workmanship, innovative solutions, and reliable service. Beyond construction, we aim to be the preferred partner in the industry, supplying top-tier materials and equipment nationwide. With a commitment to professionalism and customer satisfaction, we strive to exceed expectations and help build a stronger, more sustainable future for the Philippines.
      </p>
      <div className="w-20 h-1 bg-orange-400 rounded-full"></div>
    </div>

    <div className="order-1 lg:order-2 relative group">
      <div className="aspect-video overflow-hidden rounded-2xl shadow-2xl border-4 border-white/10 transform transition-all duration-500 group-hover:scale-105">
        <Image
          src="/MLlogo.jpg"
          alt="About Us – Vision in Construction"
          width={640}
          height={480}
          className="object-cover w-full h-full"
        />
      </div>
      <div className="absolute -top-4 -right-4 w-20 h-20 bg-orange-500/20 rounded-full blur-xl"></div>
    </div>
  </motion.div>

  {/* Mission – Reversed Layout */}
  <motion.div
    initial={{ opacity: 0, x: 60 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.8 }}
    viewport={{ once: true }}
    className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
  >
    <div className="relative group">
      <div className="aspect-video overflow-hidden rounded-2xl shadow-2xl border-4 border-white/10 transform transition-all duration-500 group-hover:scale-105">
        <Image
          src="/Probg.jpg"
          alt="Our Mission"
          width={640}
          height={480}
          className="object-cover w-full h-full"
        />
      </div>
      <div className="absolute -bottom-6 -left-6 w-24 h-24 border-2 border-orange-500/30 rounded-full animate-pulse"></div>
    </div>

    <div className="space-y-6">
      <h3 className="text-4xl font-bold text-orange-400 leading-tight">
        Our Mission: <br />
        <span className="text-white">Building Excellence with Integrity</span>
      </h3>
      <p className="text-lg text-gray-200 leading-relaxed max-w-xl">
        Tiger’s Mark Corporation is resolute in providing value-added construction and procurement services to our customers by providing quality workmanship, customer service and maintaining the highest level of professionalism and fairness in our relationships with our customers, vendors and employees. We seek to become a valued supply partner of global brands to bridge the gap of construction materials and equipment locally.
      </p>
    </div>
  </motion.div>

    <motion.div
    id="about"
    initial={{ opacity: 0, x: -60 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.8 }}
    viewport={{ once: true }}
    className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
  >
    <div className="space-y-7 order-2 lg:order-1">
      <h2 className="text-5xl font-black text-white">VISION</h2>
      <p className="text-lg text-gray-200 leading-relaxed max-w-lg">
       Tiger’s Mark Corporation aims to become the preferred construction partner in the industry, and ultimately in building the future of the Philippines. We seek to be the premiere organization with the ability to supply in all kinds of construction materials and equipment with our own logistics nationwide.
      </p>
      <div className="w-20 h-1 bg-orange-400 rounded-full"></div>
    </div>

    <div className="order-1 lg:order-2 relative group">
      <div className="aspect-video overflow-hidden rounded-2xl shadow-2xl border-4 border-white/10 transform transition-all duration-500 group-hover:scale-105">
        <Image
          src="/missionpic.png"
          alt="About Us – Vision in Construction"
          width={640}
          height={480}
          className="object-cover w-full h-full"
        />
      </div>
      <div className="absolute -top-4 -right-4 w-20 h-20 bg-orange-500/20 rounded-full blur-xl"></div>
    </div>
  </motion.div>

  {/* === Our Story – Creative Manifesto Style === */}
<motion.section
  initial={{ opacity: 0 }}
  whileInView={{ opacity: 1 }}
  transition={{ duration: 0.9 }}
  viewport={{ once: true }}
  className="relative py-40 px-8 md:px-16 lg:px-28 text-center overflow-hidden"
>

  {/* Subtle Animated Background Grid */}
  <div 
    className="absolute inset-0 z-0 opacity-5"
    style={{
      backgroundImage: `
        linear-gradient(rgba(255, 165, 0, 0.2) 1px, transparent 1px),
        linear-gradient(90deg, rgba(255, 165, 0, 0.2) 1px, transparent 1px)
      `,
      backgroundSize: '40px 40px',
    }}
  ></div>

  {/* Floating Orbs */}
  <div className="absolute top-20 left-10 w-20 h-20 bg-orange-500/10 rounded-full blur-xl animate-pulse"></div>
  <div className="absolute bottom-32 right-16 w-32 h-32 bg-blue-500/10 rounded-full blur-xl"></div>

  <div className="relative z-10 max-w-5xl mx-auto space-y-16">
    
    {/* Title – Typographic Drama */}
    <motion.div
      initial={{ y: 30, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.2 }}
      className="space-y-6"
    >
      <h3 className="text-6xl md:text-7xl font-black text-white leading-tight">
        How It
        <span className="block text-orange-400">Began</span>
      </h3>
      <div className="w-24 h-0.5 bg-orange-400 mx-auto"></div>
    </motion.div>

    {/* Poetic Narrative */}
    <div className="space-y-10 leading-relaxed">
      <motion.p
        initial={{ y: 30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="text-2xl md:text-3xl text-white font-light max-w-3xl mx-auto"
      >
        Not with a press release. <br />
        Not with a ribbon-cutting. <br />
        But with a sketch on a napkin, <br />
        and a dream too loud to ignore.
      </motion.p>

      <motion.p
        initial={{ y: 30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.6 }}
        className="text-lg text-gray-300 max-w-2xl mx-auto"
      >
        In a small office in Quezon City, 2010, four engineers looked at the skyline and saw not just buildings — but <em className="text-orange-300">possibility</em>. They believed construction shouldn’t just follow standards — it should <strong>set them</strong>.
      </motion.p>

      <motion.p
        initial={{ y: 30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.8 }}
        className="text-lg text-gray-300 italic max-w-2xl mx-auto"
      >
          “What if we built not just for strength… <br />
          but for soul?”
        </motion.p>

      <motion.p
        initial={{ y: 30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ delay: 1.0 }}
        className="text-lg text-gray-300 max-w-2xl mx-auto"
      >
        That question became <strong>Tiger’s Mark</strong>. A name born from courage. A brand built on craftsmanship, integrity, and the relentless pursuit of better.
      </motion.p>
    </div>

    {/* Signature Line */}
    <motion.div
      initial={{ y: 30, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ delay: 1.2 }}
      className="pt-6"
    >
      <p className="text-gray-500 text-sm tracking-wider uppercase">
        — A legacy in concrete, steel, and vision
      </p>
    </motion.div>
  </div>

  
</motion.section>

  {/* === Core Values – Creative Grid === */}
  <section id="services" className="mt-32 text-center">
    <motion.h2
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="text-5xl font-black text-white mb-10"
    >
      Core Values
    </motion.h2>

    <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-16 leading-relaxed">
      These aren’t just words. They’re the foundation of everything we build.
    </p>

    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10"
    >
      {coreValues.map((val, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
          className="group bg-white/10 backdrop-blur-md rounded-3xl p-10 shadow-xl border border-white/10 hover:border-orange-500/50 transition-all duration-500 min-h-[300px] flex flex-col items-center text-center"
        >
          <div className="text-orange-400 text-5xl mb-5 group-hover:scale-110 transition-transform duration-300">
            {val.icon}
          </div>
          <h4 className="text-2xl font-bold text-white mb-4">{val.title}</h4>
          <p className="text-gray-300 leading-relaxed flex-grow">{val.desc}</p>
        </motion.div>
      ))}
    </motion.div>
  </section>
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
                  <li><a href="#aboutus" className="hover:underline  text-orange-400">About Us</a></li>
                  <li><a href="#services" className="hover:underline">Services</a></li>
                    <li><a href="#product" className="hover:underline">Products</a></li>
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
