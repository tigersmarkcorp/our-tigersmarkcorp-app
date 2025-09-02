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
} from 'lucide-react';
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
import { Building, Package, Ship } from 'lucide-react';

// Background images for hero
const backgrounds = ['/Probg.jpg', '/MLlogo.jpg', '/bg3.jpg'];

// Services data
const services = [
  {
    title: 'Residential Construction',
    desc: 'Building durable, elegant homes tailored to your family\'s needs and dreams.',
    icon: <HomeIcon size={48} className="mb-6 mx-auto text-orange-400" />,
  },
  {
    title: 'Commercial Projects',
    desc: 'Creating commercial spaces that are both functional and impressive.',
    icon: <Building2 size={48} className="mb-6 mx-auto text-orange-400" />,
  },
  {
    title: 'Project Management',
    desc: 'From planning to execution, we ensure your project stays on time and on budget.',
    icon: <ClipboardList size={48} className="mb-6 mx-auto text-orange-400" />,
  },
  {
    title: 'Interior Renovation',
    desc: 'Transforming your space with modern, efficient, and stylish upgrades.',
    icon: <Paintbrush2 size={48} className="mb-6 mx-auto text-orange-400" />,
  },
  {
    title: 'Architectural Design',
    desc: 'Crafting innovative and sustainable designs to bring your vision to life.',
    icon: <Ruler size={48} className="mb-6 mx-auto text-orange-400" />,
  },
  {
    title: 'Structural Engineering',
    desc: 'Ensuring safety, strength, and integrity across all our builds.',
    icon: <ShieldCheck size={48} className="mb-6 mx-auto text-orange-400" />,
  },
];

// Contact links for floating widget (cleaned)
const links = [
  { icon: <FaPhone />, href: 'tel:+639176231675', bg: 'bg-green-500', label: 'Call' },
  { icon: <FaViber />, href: 'viber://chat?number=%2B639176231675', bg: 'bg-purple-600', label: 'Viber' },
  { icon: <FaFacebookMessenger />, href: 'https://m.me/tigersmarkcorp', bg: 'bg-blue-500', label: 'Messenger' },
  { icon: <FaInstagram />, href: 'https://instagram.com/tigersmarkcorp', bg: 'bg-gradient-to-tr from-pink-500 via-red-500 to-yellow-400', label: 'Instagram' },
  { icon: <FaLinkedin />, href: 'https://linkedin.com/company/tigersmarkcorp', bg: 'bg-sky-700', label: 'LinkedIn' },
  { icon: <FaMapMarkerAlt />, href: 'https://goo.gl/maps/tigersmarkcorp', bg: 'bg-emerald-700', label: 'Location' },
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

export default function Home() {
  const [index, setIndex] = useState(0);
  const [openWidget, setOpenWidget] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);
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
    }, 30);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col min-h-screen font-sans bg-black text-white overflow-x-hidden">
      {/* === Header with Responsive Nav === */}
      <motion.header
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="sticky top-0 z-50 w-full bg-white/10 backdrop-blur-lg shadow-md"
      >
        <div className="max-w-[1600px] mx-auto px-6 sm:px-8 lg:px-20 py-4 flex items-center justify-between relative">
          {/* Logo */}
          <Image src="/clientslogo/TMClog0s.png" alt="Logo" width={180} height={30} priority />

          {/* Desktop Nav */}
          <nav className="hidden sm:flex gap-8 lg:gap-10 text-white text-sm md:text-base font-medium">
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
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="sm:hidden text-white z-50 p-2"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>

        {/* Mobile Dropdown Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="sm:hidden bg-black/90 backdrop-blur-md border-t border-orange-500/20 overflow-hidden"
            >
              <div className="px-6 py-4 flex flex-col space-y-4 text-lg">
                {['Home', 'about', 'service', 'products', 'projects', 'contact', 'FAQ'].map((item) => (
                  <a
                    key={item}
                    href={`/${item.toLowerCase().replace(' ', '-')}`}
                    className="text-white hover:text-orange-400 transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item}
                  </a>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>
{/* === Floating Contact Widget – Right Side, Slightly Bigger, Professional === */}
<div className="fixed bottom-6 right-6 z-50 flex flex-col items-center gap-3 max-w-xs">
  {/* Expanded Icons */}
  {openWidget && (
    <div className="flex flex-col items-center gap-3 mb-3 w-16 sm:w-20">
      {links.map((link, i) => (
        <a
          key={i}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          className={`w-14 h-14 sm:w-16 sm:h-16 flex items-center justify-center rounded-full text-white shadow-lg transition-transform hover:scale-105 ${link.bg}`}
          title={link.label}
        >
          {link.icon}
        </a>
      ))}
    </div>
  )}

  {/* Toggle Button – Slightly Larger */}
  <button
    onClick={() => setOpenWidget(!openWidget)}
    className={`w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center rounded-full text-white shadow-xl transition-all ${
      openWidget ? 'bg-indigo-600' : 'bg-orange-500'
    } hover:scale-105 hover:shadow-[0_0_20px_rgba(245,158,11,0.6)]`}
    aria-label="Contact options"
  >
    {openWidget ? <FaTimes size={24} /> : <FaCommentDots size={24} />}
  </button>
</div>

      {/* === Hero Section === */}
      <div className="relative z-0 min-h-[90vh]">
        <div className="absolute inset-0 -z-10">
          <AnimatePresence mode="wait">
            <motion.div
              key={backgrounds[index]}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.5 }}
              className="absolute inset-0"
              style={{
                backgroundImage: `url(${backgrounds[index]})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
              }}
            />
          </AnimatePresence>
          <div className="absolute inset-0 bg-black/60" />
        </div>

        <main className="flex flex-col items-start justify-center px-6 sm:px-20 min-h-[90vh] z-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-left max-w-3xl my-20"
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 leading-tight text-white">
              <span className="whitespace-nowrap">ENGINEERING <span className="text-orange-400">your dreams</span></span>
            </h1>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 leading-tight text-white">
              BUILDING <span className="text-orange-400">the future</span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-200 mb-8">
              Trusted construction solutions for commercial, residential, and industrial projects. Quality that lasts.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#contact"
                className="bg-orange-500 text-white px-6 py-3 sm:px-8 sm:py-4 text-base sm:text-lg rounded-full hover:bg-orange-600 transition-all animate-pulse-custom"
              >
                Find Out What We Can Build for You
              </a>
            </div>
          </motion.div>
        </main>
      </div>

      {/* === Professional Services Section === */}
      <section id="services" className="relative w-full px-4 sm:px-8 py-20 lg:py-28 bg-[#0f172a] overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div 
            className="absolute inset-0"
            style={{
              backgroundImage: "radial-gradient(circle at 50% 50%, rgba(245, 158, 11, 0.1) 1px, transparent 1px)",
              backgroundSize: "20px 20px"
            }}
          ></div>
        </div>
        <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-[#f59e0b]/10 to-transparent pointer-events-none"></div>

        <div className="relative max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-center mb-16 lg:mb-20"
          >
            <div className="inline-flex items-center justify-center px-6 py-2 mb-4 rounded-full bg-[#f59e0b]/10 border border-[#f59e0b]/20">
              <span className="text-sm font-semibold text-[#f59e0b] tracking-wider">OUR EXPERTISE</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white tracking-tight">
              Comprehensive <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#f59e0b] to-[#fbbf24]">Construction Solutions</span>
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Delivering end-to-end construction services with uncompromising quality and precision
            </p>
          </motion.div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                viewport={{ once: true, margin: "-50px" }}
                className="group relative bg-gradient-to-b from-[#1e293b] to-[#0f172a] p-8 rounded-xl border border-[#334155] shadow-xl hover:shadow-[#f59e0b]/20 transition-all duration-500 overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[#f59e0b]/5 via-[#f59e0b]/2 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute top-0 right-0 w-16 h-16 overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-[#f59e0b]/10 transform rotate-45 origin-bottom-left translate-x-1/2 -translate-y-1/2 transition-all duration-300 group-hover:bg-[#f59e0b]/20"></div>
                </div>
                <div className="relative z-10 w-16 h-16 mb-6 mx-auto rounded-lg bg-gradient-to-br to-[#f59e0b] flex items-center justify-center shadow-lg group-hover:shadow-[#f59e0b]/30 transition-shadow duration-300">
                  <div className="text-white group-hover:scale-110 transition-transform duration-300">
                    {service.icon}
                  </div>
                </div>
                <div className="relative z-10">
                  <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-[#f59e0b] transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-gray-300 mb-4 group-hover:text-white/90 transition-colors duration-300">
                    {service.desc}
                  </p>
                  <div className="text-sm text-[#f59e0b] font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    Learn more →
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* === About Us – Premium Creative Studio Style === */}
      <section id="aboutus" className="relative py-32 overflow-hidden bg-[#0f172a]">
        <div className="absolute inset-0 z-0">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
            style={{
              filter: "brightness(0.7) contrast(1.1) saturate(1.2)",
              opacity: 0.9,
            }}
          >
            <source src="/videos/tmc-background.mp4" type="video/mp4" />
          </video>
          <div
            className="absolute inset-0 opacity-15"
            style={{
              backgroundImage: `
                linear-gradient(rgba(245, 158, 11, 0.1) 1px, transparent 1px),
                linear-gradient(90deg, rgba(245, 158, 11, 0.1) 1px, transparent 1px)
              `,
              backgroundSize: "60px 60px",
              maskImage: "radial-gradient(circle at center, black 30%, transparent 70%)",
            }}
          ></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl md:text-7xl font-black text-white tracking-tight leading-none mb-4">
              Building{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#f59e0b] to-[#fbbf24]">
                Vision
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Where construction meets creativity, and every structure tells a story.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.9 }}
              viewport={{ once: true }}
              className="flex flex-col space-y-8"
            >
              <div className="bg-white/5 backdrop-blur-md p-8 rounded-3xl border border-[#f59e0b]/20 shadow-2xl">
                <h3 className="text-2xl font-bold text-white mb-5 border-l-4 border-[#f59e0b] pl-4">
                  Our Origin
                </h3>
                <p className="text-lg text-gray-200 leading-relaxed">
                  <span className="font-semibold text-white">Tiger’s Mark</span> was born from a simple idea:{" "}
                  <em className="text-[#f59e0b]">
                    What if construction wasn’t just about concrete and steel — but about legacy?
                  </em>{" "}
                  Founded by industry veterans, we blend decades of expertise with bold new thinking.
                </p>
              </div>
              <div className="bg-gradient-to-br from-[#f59e0b]/30 to-transparent p-8 rounded-3xl border border-[#f59e0b]/30 shadow-lg">
                <h3 className="text-2xl font-bold text-[#f59e0b] mb-5">The Craft</h3>
                <p className="text-lg text-gray-200 leading-relaxed">
                  We don’t follow blueprints — we create them. From high-rises to industrial hubs, every project is a collaboration of precision, innovation, and relentless attention to detail.
                </p>
              </div>
              <div className="bg-white/5 backdrop-blur-md p-8 rounded-3xl border border-white/10">
                <h3 className="text-2xl font-bold text-white mb-5">The Future</h3>
                <p className="text-lg text-gray-200 leading-relaxed">
                  We’re building more than structures — we’re building a{" "}
                  <strong>sustainable, stronger Philippines</strong>. Partnering with communities, sourcing ethically, and engineering for tomorrow.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.9, ease: "easeOut" }}
              viewport={{ once: true }}
              className="relative flex justify-center items-center"
            >
              <div className="relative w-full max-w-lg">
                <img
                  src="/mapph.png"
                  alt="Map of the Philippines"
                  className="w-full object-contain drop-shadow-[0_0_25px_rgba(245,158,11,0.6)]"
                />
                <div className="absolute bottom-6 right-6 bg-black/60 text-[#f59e0b] px-4 py-2 rounded-xl text-sm font-semibold shadow-lg">
                  Nationwide Presence
                </div>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-center mt-16"
          >
            <p className="text-gray-400 italic text-lg">
              “We don’t just construct buildings — we shape the skyline of progress.”
            </p>
            <p className="text-[#f59e0b] font-semibold mt-2">
              — The Tiger’s Mark Team
            </p>
          </motion.div>
        </div>
      </section>

      {/* === Why Choose Us === */}
      <section id="why-choose-us" className="relative w-full px-4 sm:px-8 py-20 lg:py-28 bg-[#0f172a] overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[url('/assets/grid-pattern.svg')] bg-[length:60px_60px]"></div>
        </div>
        <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-[#f59e0b]/5 to-transparent pointer-events-none"></div>

        <div className="relative max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-center mb-16 lg:mb-20"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-[#f59e0b] to-[#fbbf24] tracking-tight">
              Why Choose Tiger's Mark
            </h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Building excellence through comprehensive construction solutions and premium materials
            </p>
          </motion.div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                icon: <Building className="w-8 h-8 text-white" />,
                title: "Construction Services",
                description: "Full-service construction including civil, mechanical, electrical, and plumbing works with strict safety compliance",
                highlight: "500+ completed projects"
              },
              {
                icon: <Package className="w-8 h-8 text-white" />,
                title: "Materials Supply",
                description: "Wholesale & retail supply of UPVC, HDPE pipes, pumps and premium construction materials from global brands",
                highlight: "Trusted by 100+ contractors"
              },
              {
                icon: <Ship className="w-8 h-8 text-white" />,
                title: "Import & Trading",
                description: "Reliable sourcing of international construction materials with efficient logistics and flexible solutions",
                highlight: "Global supply network"
              },
              {
                icon: <ClipboardList className="w-8 h-8 text-white" />,
                title: "Specialized Services",
                description: "Architectural design, project management, surveying, and maintenance services for complete project support",
                highlight: "End-to-end solutions"
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
                viewport={{ once: true, margin: "-50px" }}
                className="group relative bg-gradient-to-b from-[#1e293b] to-[#0f172a] p-8 rounded-xl border border-[#334155] shadow-xl hover:shadow-[#f59e0b]/10 transition-all duration-300 overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[#f59e0b]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="w-16 h-16 mb-6 mx-auto rounded-lg bg-gradient-to-br from-[#f59e0b] to-[#f59e0b] flex items-center justify-center shadow-md">
                  {item.icon}
                </div>
                <div className="relative z-10">
                  <h3 className="text-xl font-semibold text-white mb-3">{item.title}</h3>
                  <p className="text-gray-300 mb-4">{item.description}</p>
                  <div className="text-sm text-[#f59e0b] font-medium">
                    {item.highlight}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* === Recent Projects === */}
      <section id="recent-projects" className="relative w-full bg-[#0f172a] px-6 py-24 z-10 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute Top-0 left-0 w-full h-2/3 bg-gradient-to-t from-[#f59e0b]/5 to-transparent pointer-events-none"></div>
          <div className="absolute bottom-0 left-0 w-full h-2/3 bg-gradient-to-t from-[#f59e0b]/5 to-transparent pointer-events-none"></div>
        </div>

        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-10 text-[#f59e0b] tracking-tight relative z-10 text-center"
        >
          Transforming Visions Into Reality
        </motion.h2>
        <p className="text-lg text-gray-300 max-w-3xl mx-auto mb-16 leading-relaxed px-4 relative z-10 text-center">
          From sleek urban high-rises to sustainable industrial hubs, each project reflects our commitment to innovation, quality, and timeless design. Explore our recent milestones.
        </p>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto relative z-10">
          {[
            {
              img: '/SO.jpg',
              title: 'SINGLE ORIGIN OPUS',
              desc: 'Single Origin is a new hangout spot where coffee and alcohol lovers can find common ground...',
              category: 'FIT OUTS',
              size: 'Makati Metro Manila',
              status: 'Completed',
            },
            {
              img: '/FRONT.jpg',
              title: 'COCO ICHIBANYA BANAWE',
              desc: '"CURRY HOUSE CoCo ICHIBANYA", known as "CoCoICHI", is a chain restaurant specializing in Japanese-style curry rice...',
              category: 'FIT OUTS',
              size: 'San Juan Metro Manila',
              status: 'Completed',
            },
            {
              img: '/PANCO.jpg',
              title: 'PANCO ONE AYALA',
              desc: 'Panco Café at One Ayala is the influencer equivalent of a heavily-filtered selfie...',
              category: 'FIT OUTS',
              size: 'Ayala Ave, Makati',
              status: 'Completed',
            },
            {
              img: '/CAPITAL-COMMONS-SINGLE-ORIGIN-1.jpg',
              title: 'UCC ONE AYALA',
              desc: 'UCC Clockwork One Ayala is a cafe located at One Ayala, Makati, Philippines...',
              category: 'FIT OUTS',
              size: 'One Ayala, Makati',
              status: 'Completed',
            },
            {
              img: '/PANCO-2.jpg',
              title: 'SINGLE ORIGIN CAPITAL COMMONS',
              desc: 'Single Origins newest branch is located in Capitol Commons, Pasig City, Philippines...',
              category: 'FIT OUTS',
              size: 'Pasig City',
              status: 'Completed',
            },
            {
              img: '/SHAKA-MAKATI.jpg',
              title: 'SHAKAS CAFE LEVISTE MAKATI',
              desc: 'Shaka Cafe is a beloved vegetarian and vegan restaurant in the Philippines...',
              category: 'FIT OUTS',
              size: 'Leviste Street, Makati City',
              status: 'Completed',
            },
            {
              img: '/Flood-Mitigation-BArrido-Ajuy-Iloilo-GEN-CON.jpg',
              title: 'Urban High-Rise Living',
              desc: 'Urban high-rise living in the Philippines, particularly in Metro Manila, is characterized by a surge in condominium developments...',
              category: 'GENERAL CONSTRUCTIONS',
              size: 'Metro Manila',
              status: 'Completed',
            },
            {
              img: '/Electrical-Works-Altura-Market-Gen-Con.jpg',
              title: 'Creative Workspaces',
              desc: 'Creative workspaces are designed to foster innovation and collaboration...',
              category: 'GENERAL CONSTRUCTIONS',
              size: 'Metro Manila',
              status: 'Completed',
            },
            {
              img: '/UCC-Mentore-Ayala-Center-Renovation.jpg',
              title: 'Eco-Friendly Manufacturing Hub',
              desc: 'UCC Mentore is opening a new location at Ayala Center on July 18, 2025...',
              category: 'RENOVATION',
              size: 'Ayala Center',
              status: 'Completed',
            },
          ].map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="group rounded-3xl overflow-hidden shadow-2xl border border-gray-700 bg-white/5 backdrop-blur-md hover:shadow-[#f59e0b]/20 transition-all duration-500 transform hover:-translate-y-2 relative"
            >
              <div className="relative h-64 sm:h-72 overflow-hidden">
                <Image
                  src={project.img}
                  alt={project.title}
                  width={600}
                  height={400}
                  className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-110"
                />
                <span className="absolute top-4 left-4 bg-[#f59e0b] text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg">
                  {project.category}
                </span>
              </div>
              <div className="p-6 text-left">
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-[#f59e0b] transition-colors">
                  {project.title}
                </h3>
                <p className="text-sm text-gray-300 mb-4 leading-relaxed line-clamp-3">
                  {project.desc}
                </p>
                <div className="flex flex-wrap gap-3 mb-4 text-xs text-gray-400">
                  <span className="bg-gray-800 px-2 py-1 rounded">{project.size}</span>
                  <span className="bg-green-900/50 text-green-200 px-2 py-1 rounded">{project.status}</span>
                </div>
                <a
                  href="/project"
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-[#f59e0b] to-[#fbbf24] hover:from-[#d97706] hover:to-[#fbbf24] text-white text-sm font-semibold px-5 py-2.5 rounded-full transition-all shadow-md hover:shadow-[#f59e0b]/30"
                >
                  View Project
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-20 text-center relative z-10">
          <a
            href="/contact"
            className="inline-block bg-transparent border-2 border-[#f59e0b] text-[#f59e0b] hover:bg-[#f59e0b] hover:text-white font-semibold px-8 py-3 rounded-full transition-all duration-300 text-lg"
          >
            Start Your Project With Us
          </a>
        </div>
      </section>

      {/* === Trusted By === */}
      <section className="relative py-28 overflow-hidden bg-[#0f172a]">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-32 -right-32 w-80 h-80 bg-[#f59e0b]/8 rounded-full blur-2xl opacity-10"></div>
          <div className="absolute -bottom-32 -left-32 w-80 h-80 bg-blue-500/8 rounded-full blur-2xl opacity-10"></div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16 px-6 relative z-10"
        >
          <h2 className="text-4xl sm:text-6xl font-black text-white mb-4">
            Trusted by
            <span className="block text-[#f59e0b]">Vision, Built on Trust</span>
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            We power progress for innovators shaping the future of infrastructure.
          </p>
        </motion.div>

        <div className="relative mb-10">
          <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-[#0f172a] to-transparent z-10"></div>
          <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-[#0f172a] to-transparent z-10"></div>
          <div ref={scrollRef} className="inline-flex gap-24 sm:gap-32 animate-scroll-left">
            {duplicatedLogos.map((src, index) => (
              <motion.div
                key={index}
                className="w-44 sm:w-52 h-24 flex-shrink-0 opacity-60 hover:opacity-100 transition-all duration-500 flex items-center justify-center"
                whileHover={{ scale: 1.08, y: -4 }}
                whileTap={{ scale: 1.02 }}
              >
                <div className="relative w-36 sm:w-40 h-16 grayscale hover:grayscale-0">
                  <Image
                    src={src}
                    alt={`Client ${index}`}
                    fill
                    className="object-contain brightness-75 hover:brightness-100 transition-all duration-500"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="relative mt-6">
          <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-[#0f172a] to-transparent z-10"></div>
          <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-[#0f172a] to-transparent z-10"></div>
          <div className="inline-flex gap-24 sm:gap-32 animate-scroll-right">
            {duplicatedLogos.map((src, index) => (
              <motion.div
                key={`bottom-${index}`}
                className="w-44 sm:w-52 h-24 flex-shrink-0 opacity-50 hover:opacity-100 transition-all duration-500 flex items-center justify-center"
                whileHover={{ scale: 1.08, y: -4 }}
              >
                <div className="relative w-36 sm:w-40 h-16 grayscale hover:grayscale-0">
                  <Image
                    src={src}
                    alt={`Client ${index}`}
                    fill
                    className="object-contain brightness-60 hover:brightness-90 transition-all duration-500"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="flex justify-center mt-16">
          <div className="w-2 h-2 bg-[#f59e0b] rounded-full animate-pulse shadow-lg"></div>
        </div>
      </section>

      {/* === Location === */}
      <section id="location" className="bg-[#0f172a] w-full py-16 text-center z-10">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-4xl sm:text-5xl font-bold mb-10 text-[#f59e0b]"
        >
          Our Location
        </motion.h2>
        <div className="w-full max-w-full mx-auto overflow-hidden rounded-xl shadow-2xl border border-gray-700">
          <div className="relative w-full h-[650px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3859.954261697035!2d121.04249591758715!3d14.658537144648264!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397b77b2a7d8a53%3A0x9580999bfa806830!2sTiger's%20Mark%20Corporation%20(New%20Office)!5e0!3m2!1sen!2sph!4v1751440543415!5m2!1sen!2sph"
              width="600"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="absolute inset-0 w-full h-full"
            ></iframe>
          </div>
        </div>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-8 text-gray-300 text-lg max-w-3xl mx-auto px-4"
        >
          Visit us at our office located at <strong>17, Road 10 Visayas Ave, Quezon City, 1128 Metro Manila</strong>. We're always ready to assist you with your construction needs.
        </motion.p>
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
              <li><a href="#Home" className="hover:underline text-[#f59e0b]">Home</a></li>
              <li><a href="#aboutus" className="hover:underline">About Us</a></li>
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