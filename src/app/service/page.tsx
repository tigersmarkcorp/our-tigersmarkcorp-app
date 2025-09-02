'use client';

import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect, useRef } from 'react';
import {
  HomeIcon,
  Building2,
  ClipboardList,
  Paintbrush2,
  Ruler,
  ShieldCheck,
  HardHat,
  Hammer,
} from 'lucide-react';
import { FaCommentDots, FaArrowRight, FaCheckCircle, FaTimes } from 'react-icons/fa';
import {
  FaFacebookMessenger,
  FaInstagram,
  FaLinkedin,
  FaPhone,
  FaViber,
  FaMapMarkerAlt,
  FaBars,
} from 'react-icons/fa';

// Background images for hero
const backgrounds = ['/Probg.jpg', '/MLlogo.jpg', '/bg3.jpg'];

// Services data
const services = [
  {
    title: 'Residential Construction',
    desc: 'Building durable, elegant homes tailored to your family\'s needs and dreams.',
    icon: <HomeIcon size={48} className="text-orange-400" />,
    features: ['Custom Home Building', 'Home Additions', 'Kitchen & Bath Remodels', 'Quality Materials'],
    image: '/service-residential.jpg',
  },
  {
    title: 'Commercial Projects',
    desc: 'Creating commercial spaces that are both functional and impressive.',
    icon: <Building2 size={48} className="text-orange-400" />,
    features: ['Office Buildings', 'Retail Spaces', 'Restaurants', 'Commercial Renovations'],
    image: '/service-commercial.jpg',
  },
  {
    title: 'Project Management',
    desc: 'From planning to execution, we ensure your project stays on time and on budget.',
    icon: <ClipboardList size={48} className="text-orange-400" />,
    features: ['Budget Planning', 'Timeline Management', 'Quality Control', 'Vendor Coordination'],
    image: '/service-management.jpg',
  },
  {
    title: 'Interior Renovation',
    desc: 'Transforming your space with modern, efficient, and stylish upgrades.',
    icon: <Paintbrush2 size={48} className="text-orange-400" />,
    features: ['Interior Design', 'Space Planning', 'Material Selection', 'Finish Work'],
    image: '/service-renovation.jpg',
  },
  {
    title: 'Architectural Design',
    desc: 'Crafting innovative and sustainable designs to bring your vision to life.',
    icon: <Ruler size={48} className="text-orange-400" />,
    features: ['Custom Designs', '3D Visualization', 'Blueprint Creation', 'Permit Assistance'],
    image: '/service-design.jpg',
  },
  {
    title: 'Structural Engineering',
    desc: 'Ensuring safety, strength, and integrity across all our builds.',
    icon: <ShieldCheck size={48} className="text-orange-400" />,
    features: ['Structural Analysis', 'Foundation Design', 'Seismic Retrofitting', 'Code Compliance'],
    image: '/service-engineering.jpg',
  },
];

// Process steps
const processSteps = [
  {
    step: '01',
    title: 'Consultation',
    desc: 'We discuss your vision, requirements, and budget to understand your project needs.',
    icon: <FaCommentDots className="text-orange-500" />,
  },
  {
    step: '02',
    title: 'Planning & Design',
    desc: 'Our team creates detailed plans and 3D models to visualize your project.',
    icon: <Ruler className="text-orange-500" />,
  },
  {
    step: '03',
    title: 'Approval & Permits',
    desc: 'We handle all necessary permits and approvals to ensure compliance.',
    icon: <ClipboardList className="text-orange-500" />,
  },
  {
    step: '04',
    title: 'Construction',
    desc: 'Our skilled craftsmen bring your project to life with precision and care.',
    icon: <Hammer className="text-orange-500" />,
  },
  {
    step: '05',
    title: 'Final Inspection',
    desc: 'We conduct thorough quality checks to ensure everything meets our standards.',
    icon: <ShieldCheck className="text-orange-500" />,
  },
  {
    step: '06',
    title: 'Project Delivery',
    desc: 'We hand over the completed project and provide after-service support.',
    icon: <HardHat className="text-orange-500" />,
  },
];

// Client logos for auto-scroll
const logos = [
  '/clientslogo/AMlgo.png',
  '/clientslogo/blocklogo.png',
  '/clientslogo/Conlogo.png',
  '/clientslogo/ducatilogo.png',
  '/clientslogo/FurLogo.png',
  '/clientslogo/GoldSlogo.png',
  '/clientslogo/infilogo.png',
  '/clientslogo/KKlgo.png',
  '/clientslogo/LLlogo.png',
  '/clientslogo/MetalLogo.png',
  '/clientslogo/balailogo.png',
  '/clientslogo/dylanlogo.png',
  '/clientslogo/EOP.png',
  '/clientslogo/GGlogo.png',
  '/clientslogo/jamalogo.png',
  '/clientslogo/minilogo.png',
  '/clientslogo/shalogo.png',
  '/clientslogo/pnblogo.png',
];

// Contact links for floating widget (cleaned)
const links = [
  { icon: <FaPhone />, href: 'tel:+1234567890', bg: 'bg-green-500', label: 'Call' },
  { icon: <FaViber />, href: 'viber://chat?number=%2B1234567890', bg: 'bg-purple-600', label: 'Viber' },
  { icon: <FaFacebookMessenger />, href: 'https://m.me/yourpage', bg: 'bg-blue-500', label: 'Messenger' },
  { icon: <FaInstagram />, href: 'https://instagram.com/yourprofile', bg: 'bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600', label: 'Instagram' },
  { icon: <FaLinkedin />, href: 'https://linkedin.com/in/yourprofile', bg: 'bg-sky-700', label: 'LinkedIn' },
  { icon: <FaMapMarkerAlt />, href: 'https://goo.gl/maps/yourlocation', bg: 'bg-green-700', label: 'Location' },
];

export default function ServicesPage() {
  const [activeService, setActiveService] = useState(0);
  const [open, setOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [index, setIndex] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);
  const [offsetX, setOffsetX] = useState(0);
  const duplicatedLogos = [...logos, ...logos];

  // Background slider
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % backgrounds.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  // Auto-scroll client logos
  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    const interval = setInterval(() => {
      scrollContainer.scrollLeft += 1;
      if (scrollContainer.scrollLeft >= scrollContainer.scrollWidth / 2) {
        scrollContainer.scrollLeft = 0;
      }
    }, 20);

    return () => clearInterval(interval);
  }, []);

  const toggleWidget = () => setOpen(!open);
  const toggleMobileMenu = () => setMobileMenuOpen(!mobileMenuOpen);

  return (
    <div className="flex flex-col min-h-screen bg-gray-900 text-white overflow-x-hidden">
      {/* === Header === */}
      <motion.header
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="sticky top-0 z-50 w-full bg-white/10 backdrop-blur-lg shadow-md"
      >
        <div className="max-w-[1600px] mx-auto px-6 sm:px-20 py-4 flex items-center justify-between relative">
          {/* Logo */}
          <Image src="/clientslogo/TMClog0s.png" alt="Logo" width={180} height={25} priority />

          {/* Desktop Nav */}
          <nav className="hidden sm:flex gap-10 text-[18px] font-medium">
            <a href="/" className="hover:underline transition-all">Home</a>
            <a href="/about" className="hover:underline transition-all">About Us</a>
            <a href="/service" className="hover:underline transition-all">Services</a>
            <a href="/product" className="hover:underline transition-all">Products</a>
            <a href="/project" className="hover:underline transition-all">Projects</a>
            <a href="/contact" className="hover:underline transition-all">Contact</a>
            <a href="/FAQ" className="hover:underline transition-all">FAQ</a>
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
                open ? 'bg-indigo-600' : 'bg-orange-500'
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
              className="sm:hidden bg-gray-900/95 backdrop-blur-md border-t border-orange-500/20 overflow-hidden"
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
                    className="text-white hover:text-orange-400 transition-colors"
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
      <section className="relative py-20 lg:py-32 px-6 overflow-hidden bg-gradient-to-b from-gray-900 to-gray-800">
        <div className="absolute top-0 left-0 w-full h-full opacity-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-orange-500 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-indigo-600 rounded-full blur-3xl"></div>
        </div>

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

        <div className="relative z-10 max-w-6xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-orange-500/30 rounded-full px-5 py-2 mb-6 text-orange-400 font-semibold text-sm"
          >
            <div className="w-2 h-2 bg-orange-400 rounded-full animate-pulse"></div>
            Building Excellence Since 2002
          </motion.div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-yellow-300">Professional</span>
            <br />
            <span className="text-white">Construction Services</span>
          </h1>

          <p className="text-lg sm:text-xl text-gray-300 mb-10 leading-relaxed max-w-3xl mx-auto">
            From concept to completion, we deliver exceptional construction services with precision,
            quality craftsmanship, and unwavering attention to detail.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="#services"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-500 to-yellow-500 hover:from-orange-600 hover:to-yellow-600 text-black font-semibold px-6 py-3 rounded-full transition-all shadow-lg hover:shadow-orange-500/30"
            >
              Explore Services
              <FaArrowRight />
            </a>
            <a
              href="/contact"
              className="inline-flex items-center gap-2 bg-transparent border border-orange-500 text-orange-400 hover:bg-orange-500/10 font-semibold px-6 py-3 rounded-full transition-all"
            >
              Request Quote
            </a>
          </div>
        </div>
      </section>

      {/* === Services Grid Section === */}
      <section id="services" className="py-20 px-6 bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our <span className="text-orange-500">Comprehensive</span> Services
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              We offer a full spectrum of construction services tailored to meet your specific needs and exceed your expectations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-800/50 backdrop-blur-sm rounded-xl overflow-hidden border border-gray-700 hover:border-orange-500/30 transition-all group"
              >
                <div className="relative h-48 bg-gradient-to-br from-gray-700 to-gray-900 flex items-center justify-center">
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-orange-500/10 transition-colors"></div>
                  <div className="relative z-10 transform group-hover:scale-110 transition-transform">
                    {service.icon}
                  </div>
                  <div className="absolute bottom-4 right-4 w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center text-black font-bold">
                    {index + 1}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3 group-hover:text-orange-400 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-400 mb-4">{service.desc}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-center text-sm">
                        <FaCheckCircle className="text-orange-500 mr-2" size={14} />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <button className="mt-6 text-orange-500 flex items-center gap-2 text-sm font-semibold group-hover:gap-3 transition-all">
                    Learn More
                    <FaArrowRight />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* === Process Section === */}
      <section className="py-20 px-6 bg-gray-800/30 relative overflow-hidden">
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

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our <span className="text-orange-500">Process</span> of Excellence
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              We follow a meticulous process to ensure every project is completed to the highest standards.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {processSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700 hover:border-orange-500/30 transition-all group"
              >
                <div className="flex items-start justify-between mb-6">
                  <div className="text-4xl font-black text-gray-600">{step.step}</div>
                  <div className="w-12 h-12 bg-orange-500/10 rounded-full flex items-center justify-center text-2xl">
                    {step.icon}
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-3 group-hover:text-orange-400 transition-colors">
                  {step.title}
                </h3>
                <p className="text-gray-400">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* === CTA Section === */}
      <section className="py-20 px-6 bg-gradient-to-r from-gray-900 to-gray-800 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 left-0 w-72 h-72 bg-orange-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-indigo-600/10 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to <span className="text-orange-500">Build Your Vision</span>?
          </h2>
          <p className="text-gray-300 mb-10 max-w-2xl mx-auto">
            Contact us today to discuss your project and discover how our expertise can bring your ideas to life.
          </p>

          <div className="flex flex-wrap justify-center gap-6">
            <a
              href="/contact"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-500 to-yellow-500 hover:from-orange-600 hover:to-yellow-600 text-black font-semibold px-8 py-4 rounded-full transition-all shadow-lg hover:shadow-orange-500/30 text-lg"
            >
              Start Your Project
              <FaArrowRight />
            </a>
            <a
              href="tel:+1234567890"
              className="inline-flex items-center gap-2 bg-transparent border border-orange-500 text-orange-400 hover:bg-orange-500/10 font-semibold px-8 py-4 rounded-full transition-all text-lg"
            >
              Call Now
            </a>
          </div>
        </div>
      </section>

      {/* === Footer === */}
      <motion.footer
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="bg-gray-900 w-full py-12 px-6 sm:px-20 text-sm text-gray-300 z-10"
      >
        <div className="max-w-[1600px] mx-auto grid md:grid-cols-4 gap-12">
          <div className="space-y-4">
            <Image src="/bg6.png" alt="Logo" width={130} height={30} />
            <p className="text-gray-400">Tiger's Mark Corporation — building excellence with passion and precision.</p>
            <div className="flex space-x-4 mt-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                <img src="/icons/faceboo.svg" alt="Facebook" className="w-6 h-6" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                <img src="/icons/instagram.svg" alt="Instagram" className="w-6 h-6" />
              </a>
              <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer">
                <img src="/icons/linkedin.svg" alt="LinkedIn" className="w-6 h-6" />
              </a>
            </div>
          </div>

          <div className="space-y-3">
            <h4 className="text-white font-semibold">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#Home" className="hover:underline">Home</a></li>
              <li><a href="#aboutus" className="hover:underline">About Us</a></li>
              <li><a href="#services" className="hover:underline text-orange-400">Services</a></li>
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