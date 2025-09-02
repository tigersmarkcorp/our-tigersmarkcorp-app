'use client';

import Image from 'next/image';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import {
  FaFacebookMessenger,
  FaInstagram,
  FaLinkedin,
  FaPhone,
  FaViber,
  FaMapMarkerAlt,
  FaTimes,
  FaCommentDots,
  FaBars,
} from 'react-icons/fa';

// FAQ Data
const faqs = [
  {
    question: "What services does Tiger's Mark Corporation provide?",
    answer:
      "We offer a comprehensive range of construction services, including general contracting, architectural and engineering design, materials supply, importation, project management, preventive maintenance, and fit-out construction for commercial and residential spaces.",
  },
  {
    question: "How can I request a project quotation?",
    answer:
      "You can contact us via our contact form, email, or phone number provided on our Contact page. Our team will reach out to gather project details and provide a detailed, transparent estimate tailored to your needs.",
  },
  {
    question: "Where is your company located?",
    answer:
      "Our main office is at 17, Road 10 Visayas Ave, Quezon City, 1128 Metro Manila, Philippines. We serve clients across the Philippines with nationwide logistics and project support.",
  },
  {
    question: "Do you offer wholesale materials and deliveries?",
    answer:
      "Yes, we specialize in wholesale and retail supply of premium construction materials—including UPVC, HDPE pipes, pumps, and tools—with efficient, timely delivery services nationwide.",
  },
  {
    question: "Are your engineers and specialists licensed?",
    answer:
      "Absolutely. Our team consists of licensed, experienced, and industry-certified engineers, architects, project managers, and construction specialists committed to excellence and safety.",
  },
  {
    question: "Do you accept government or institutional projects?",
    answer:
      "Yes, we handle private, commercial, and government-funded projects, ensuring full compliance with national building standards, permitting processes, and regulatory requirements.",
  },
];

export default function FAQPage() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [open, setOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleIndex = (index: number) => {
    setActiveIndex((prev) => (prev === index ? null : index));
  };

  const toggleWidget = () => setOpen(!open);
  const toggleMobileMenu = () => setMobileMenuOpen(!mobileMenuOpen);

  // Cleaned contact links
  const links = [
    { icon: <FaPhone />, href: 'tel:+639176231675', bg: 'bg-green-500', label: 'Call' },
    { icon: <FaViber />, href: 'viber://chat?number=%2B639176231675', bg: 'bg-purple-600', label: 'Viber' },
    { icon: <FaFacebookMessenger />, href: 'https://m.me/tigersmarkcorp', bg: 'bg-blue-500', label: 'Messenger' },
    { icon: <FaInstagram />, href: 'https://instagram.com/tigersmarkcorp', bg: 'bg-gradient-to-tr from-pink-500 via-red-500 to-yellow-400', label: 'Instagram' },
    { icon: <FaLinkedin />, href: 'https://linkedin.com/company/tigersmarkcorp', bg: 'bg-sky-700', label: 'LinkedIn' },
    { icon: <FaMapMarkerAlt />, href: 'https://goo.gl/maps/tigersmarkcorp', bg: 'bg-emerald-700', label: 'Location' },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-[#0f172a] text-white font-['Bricolage Grotesque'] text-[17px] sm:text-[18px] leading-relaxed">
      {/* === Header === */}
      <motion.header
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="sticky top-0 z-50 w-full bg-[#1e293b]/90 backdrop-blur-lg shadow-md border-b border-[#334155]"
      >
        <div className="max-w-[1600px] mx-auto px-6 sm:px-20 py-4 flex items-center justify-between relative">
          {/* Logo */}
          <Image src="/clientslogo/TMClog0s.png" alt="Logo" width={180} height={25} priority />

          {/* Desktop Nav */}
          <nav className="hidden sm:flex gap-10 text-[18px] font-medium">
            <a href="/" className="hover:text-[#f59e0b] transition-colors">Home</a>
            <a href="/about" className="hover:text-[#f59e0b] transition-colors">About Us</a>
            <a href="/service" className="hover:text-[#f59e0b] transition-colors">Services</a>
            <a href="/product" className="hover:text-[#f59e0b] transition-colors">Products</a>
            <a href="/project" className="hover:text-[#f59e0b] transition-colors">Projects</a>
            <a href="/contact" className="hover:text-[#f59e0b] transition-colors">Contact</a>
            <a href="/FAQ" className="hover:text-[#f59e0b] transition-colors">FAQ</a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMobileMenu}
            className="sm:hidden text-white z-50 p-2"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>

          {/* Floating Contact Button */}
          <div className="absolute right-6 bottom-full mb-4 z-50">
            <button
              onClick={toggleWidget}
              className={`w-14 h-14 sm:w-16 sm:h-16 flex items-center justify-center rounded-full text-white text-xl shadow-xl transition-all ${
                open ? 'bg-indigo-600' : 'bg-[#f59e0b]'
              } hover:scale-105`}
              aria-label="Contact options"
            >
              {open ? <FaTimes /> : <FaCommentDots />}
            </button>
          </div>

          {/* Floating Widget - Expanded */}
          <AnimatePresence>
            {open && (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ type: 'spring', stiffness: 300, damping: 25 }}
                className="absolute right-6 top-full mt-3 flex flex-col items-center gap-3"
              >
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
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Mobile Dropdown Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="sm:hidden bg-[#1e293b]/95 backdrop-blur-md border-t border-[#f59e0b]/20 overflow-hidden"
            >
              <nav className="flex flex-col px-6 py-4 space-y-4 text-lg">
                {[
                  { name: 'Home', href: '/' },
                  { name: 'About Us', href: '/about' },
                  { name: 'Services', href: '/service' },
                  { name: 'Products', href: '/product' },
                  { name: 'Projects', href: '/project' },
                  { name: 'Contact', href: '/contact' },
                  { name: 'FAQ', href: '/FAQ' },
                ].map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="text-white hover:text-[#f59e0b] transition-colors"
                    onClick={() => {
                      setMobileMenuOpen(false);
                      setOpen(false);
                    }}
                  >
                    {item.name}
                  </a>
                ))}
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>

      {/* === Hero Section === */}
      <section className="relative w-full h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/bg3.jpg"
            alt="FAQ Background"
            fill
            priority
            className="object-cover object-center scale-110 transition-transform duration-1000 hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black/90 z-10" />
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative z-20 text-center px-6"
        >
          <h1 className="text-5xl sm:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#f59e0b] to-[#fbbf24] mb-4 drop-shadow-xl">
            Frequently Asked Questions
          </h1>
          <p className="text-lg sm:text-xl text-gray-200 max-w-2xl mx-auto">
            Everything you need to know about Tiger's Mark Corporation.
          </p>
        </motion.div>
      </section>

      {/* === FAQ Section === */}
      <section className="px-6 lg:px-28 py-24 bg-[#0f172a] text-white">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-5xl mx-auto"
        >
          <h2 className="text-center text-4xl sm:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[#f59e0b] to-[#fbbf24] mb-12">
            Frequently Asked Questions
          </h2>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className={`border border-[#334155] backdrop-blur-sm rounded-xl overflow-hidden transition-all duration-300 ${
                  activeIndex === index
                    ? 'bg-white/5 shadow-[#f59e0b]/20 shadow-lg'
                    : 'bg-white/10 hover:bg-white/15'
                }`}
              >
                <button
                  onClick={() => toggleIndex(index)}
                  aria-expanded={activeIndex === index}
                  className="flex justify-between items-center w-full px-6 py-5 text-left hover:bg-white/10 transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <FaCommentDots className="text-[#f59e0b] text-lg" />
                    <h3 className="text-lg sm:text-xl font-semibold text-white">
                      {faq.question}
                    </h3>
                  </div>
                  <ChevronDown
                    className={`transition-transform duration-300 text-[#f59e0b] ${
                      activeIndex === index ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={
                    activeIndex === index
                      ? { height: 'auto', opacity: 1 }
                      : { height: 0, opacity: 0 }
                  }
                  transition={{ duration: 0.5, ease: 'easeInOut' }}
                  className="overflow-hidden px-6 pb-5 text-gray-300 text-[16px] leading-relaxed"
                >
                  {activeIndex === index && (
                    <p className="pt-2 border-t border-white/10">
                      {faq.answer}
                    </p>
                  )}
                </motion.div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* === Footer === */}
      <motion.footer
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="bg-[#0f172a] w-full py-12 px-6 sm:px-20 text-sm text-gray-300 z-10"
      >
        <div className="max-w-[1600px] mx-auto grid md:grid-cols-4 gap-12">
          <div className="space-y-4">
            <Image src="/clientslogo/TMClog0s.png" alt="Logo" width={130} height={30} />
            <p className="text-gray-400">Tiger's Mark Corporation — building excellence with passion and precision.</p>
            <div className="flex space-x-4 mt-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                <img src="/icons/faceboo.svg" alt="Facebook" className="w-6 h-6" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                <img src="/icons/instagram.svg" alt="Instagram" className="w-6 h-6" />
              </a>
              <a href="https://linkedin.com/company/tigersmarkcorp" target="_blank" rel="noopener noreferrer">
                <img src="/icons/linkedin.svg" alt="LinkedIn" className="w-6 h-6" />
              </a>
            </div>
          </div>

          <div className="space-y-3">
            <h4 className="text-white font-semibold">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="/" className="hover:text-[#f59e0b] transition-colors">Home</a></li>
              <li><a href="/about" className="hover:text-[#f59e0b] transition-colors">About Us</a></li>
              <li><a href="/service" className="hover:text-[#f59e0b] transition-colors">Services</a></li>
              <li><a href="/product" className="hover:text-[#f59e0b] transition-colors">Products</a></li>
              <li><a href="/project" className="hover:text-[#f59e0b] transition-colors">Projects</a></li>
              <li><a href="/contact" className="hover:text-[#f59e0b] transition-colors">Contact</a></li>
              <li><a href="/FAQ" className="text-[#f59e0b] font-semibold">FAQ</a></li>
            </ul>
          </div>

          <div className="space-y-3">
            <h4 className="text-white font-semibold">Contact Info</h4>
            <p className="text-gray-300">📱 Mobile: <a href="tel:+639176231675" className="hover:text-[#f59e0b] transition-colors">0917 623 1675</a></p>
            <p className="text-gray-300">📧 Email: <a href="mailto:sales@tigersmarkcorp.com" className="hover:text-[#f59e0b] transition-colors">sales@tigersmarkcorp.com</a></p>
            <p className="text-gray-300">📍 Address: 17, Road 10 Visayas Ave, Quezon City, 1128 Metro Manila</p>
          </div>

          <div className="space-y-3">
            <h4 className="text-white font-semibold">Our Commitment</h4>
            <p className="text-gray-300 text-sm">
              Delivering structural excellence, innovation, and integrity from foundation to finish.
            </p>
          </div>
        </div>

        <div className="mt-12 border-t border-gray-700 pt-6 text-center text-xs text-gray-400">
          © {new Date().getFullYear()} Tiger's Mark Corporation. All rights reserved.
        </div>
      </motion.footer>
    </div>
  );
}