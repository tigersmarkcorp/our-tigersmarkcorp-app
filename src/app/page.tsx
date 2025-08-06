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



// Contact links for floating widget
const links = [
  { icon: <FaPhone />, href: 'tel:+1234567890', bg: 'bg-green-500', label: 'Call' },
  { icon: <FaViber />, href: 'viber://chat?number=%2B1234567890', bg: 'bg-purple-600', label: 'Viber' },
  { icon: <FaFacebookMessenger />, href: 'https://m.me/yourpage', bg: 'bg-blue-500', label: 'Messenger' },
  { icon: <FaInstagram />, href: 'https://instagram.com/yourprofile', bg: 'bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600', label: 'Instagram' },
  { icon: <FaLinkedin />, href: 'https://linkedin.com/in/yourprofile', bg: 'bg-sky-700', label: 'LinkedIn' },
  { icon: <FaMapMarkerAlt />, href: 'https://goo.gl/maps/yourlocation', bg: 'bg-green-700', label: 'Location' },
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
  const [open, setOpen] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null); // Explicitly typed as HTMLDivElement
  const [offsetX, setOffsetX] = useState(0);

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
      setOffsetX((prev) => {
        const newOffset = prev + 1;
        scrollContainer.scrollLeft = newOffset; // Set scrollLeft directly

        // Reset scroll to 0 when it reaches the end of the first set
        if (newOffset >= scrollContainer.scrollWidth / 2) {
          scrollContainer.scrollLeft = 0;
          return 0;
        }

        return newOffset;
      });
    }, 20); // Adjust speed: higher = slower

    return () => clearInterval(interval);
  }, [scrollRef]); // Add scrollRef as a dependency

  const toggleWidget = () => setOpen(!open);
  const duplicatedLogos = [...logos, ...logos]; // Duplicate for infinite scroll

  return (
    <div className="flex flex-col min-h-screen font-sans  bg-black text-white overflow-hidden">
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

        {/* === Header === */}
        <motion.header
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="sticky top-0 z-50 w-full bg-white/10 backdrop-blur-lg shadow-md transition-all"
        >
          <div className="w-full max-w-[1600px] mx-auto px-6 sm:px-20 py-4 flex items-center gap-16 text-white">
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

            {/* Floating Contact Widget */}
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
                  open ? 'bg-indigo-600' : 'bg-orange-500'
                } hover:scale-105`}
                title="Contact"
              >
                {open ? <FaTimes /> : <FaCommentDots />}
              </button>
            </div>
          </div>
        </motion.header>

        {/* === Hero Content === */}
        <main className="flex flex-col items-start justify-center px-6 sm:px-20 min-h-[90vh] z-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-left max-w-3xl my-20"
          >
            <h1 className="text-[56px] sm:text-[64px] font-bold mb-4 leading-tight">
              <span className="whitespace-nowrap">ENGINEERING <span className="text-orange-400">your dreams</span></span>
            </h1>
            <h1 className="text-5xl sm:text-6xl font-bold mb-6 leading-tight">
              BUILDING <span className="text-orange-400">the future</span>
            </h1>
            <p className="text-xl text-gray-200 mb-8">
              Trusted construction solutions for commercial, residential, and industrial projects. Quality that lasts.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#contact"
                className="bg-orange-500 text-white px-8 py-4 text-[18px] rounded-full hover:bg-orange-600 transition-all animate-pulse-custom"
              >
                Find Out What We Can Build for You
              </a>
            </div>
          </motion.div>
        </main>
      </div>

   {/* === Professional Services Section === */}
<section id="services" className="relative w-full px-4 sm:px-8 py-20 lg:py-28 bg-black overflow-hidden">
  {/* Background elements */}
  <div className="absolute inset-0 opacity-10 pointer-events-none">
    <div 
      className="absolute inset-0"
      style={{
        backgroundImage: "radial-gradient(circle at 50% 50%, rgba(255,165,0,0.1) 1px, transparent 1px)",
        backgroundSize: "20px 20px"
      }}
    ></div>
  </div>
  <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-orange-500/10 to-transparent pointer-events-none"></div>

  {/* Container */}
  <div className="relative max-w-7xl mx-auto">
    {/* Header */}
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      viewport={{ once: true, margin: "-100px" }}
      className="text-center mb-16 lg:mb-20"
    >
      <div className="inline-flex items-center justify-center px-6 py-2 mb-4 rounded-full bg-orange-500/10 border border-orange-500/20">
        <span className="text-sm font-semibold text-orange-400 tracking-wider">OUR EXPERTISE</span>
      </div>
      <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white tracking-tight">
        Comprehensive <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-300">Construction Solutions</span>
      </h2>
      <p className="text-lg text-gray-300 max-w-3xl mx-auto">
        Delivering end-to-end construction services with uncompromising quality and precision
      </p>
    </motion.div>

    {/* Services Grid */}
    <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
      {services.map((service, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ 
            duration: 0.6, 
            delay: i * 0.1,
            ease: [0.16, 1, 0.3, 1]
          }}
          viewport={{ once: true, margin: "-50px" }}
          className="group relative bg-gradient-to-b from-navy-800 to-navy-900 p-8 rounded-xl border border-navy-700 shadow-xl hover:shadow-orange-500/20 transition-all duration-500 overflow-hidden"
        >
          {/* Hover effect */}
          <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 via-orange-500/2 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          
          {/* Decorative corner */}
          <div className="absolute top-0 right-0 w-16 h-16 overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-orange-500/10 transform rotate-45 origin-bottom-left translate-x-1/2 -translate-y-1/2 transition-all duration-300 group-hover:bg-orange-500/20"></div>
          </div>
          
          {/* Icon */}
          <div className="relative z-10 w-16 h-16 mb-6 mx-auto rounded-lg bg-gradient-to-br to-orange-600 flex items-center justify-center shadow-lg group-hover:shadow-orange-500/30 transition-shadow duration-300">
            <div className="text-white group-hover:scale-110 transition-transform duration-300">
              {service.icon}
            </div>
          </div>
          
          {/* Content */}
          <div className="relative z-10">
            <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-orange-300 transition-colors duration-300">
              {service.title}
            </h3>
            <p className="text-gray-300 mb-4 group-hover:text-white/90 transition-colors duration-300">
              {service.desc}
            </p>
            <div className="text-sm text-orange-400 font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              Learn more →
            </div>
          </div>
        </motion.div>
      ))}
    </div>

    {/* CTA */}
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ delay: 0.4, duration: 0.6 }}
      viewport={{ once: true }}
      className="mt-16 text-center"
    >
     
    </motion.div>
  </div>
</section>
   {/* === About Us – Creative Studio Style === */}
<section id="aboutus" className="relative py-32 overflow-hidden bg-black">
  {/* Animated Background Elements */}
  <div className="absolute inset-0 z-0">
    <div 
      className="absolute inset-0 bg-no-repeat bg-center opacity-20"
      style={{
        backgroundImage: "url('/missionpic.png')",
        backgroundSize: 'cover',
        filter: 'brightness(0.6) sepia(0.2)',
      }}
    />
    {/* Grid Overlay (Design Accent) */}
    <div 
      className="absolute inset-0 opacity-10"
      style={{
        backgroundImage: `
          linear-gradient(rgba(255, 165, 0, 0.1) 1px, transparent 1px),
          linear-gradient(90deg, rgba(255, 165, 0, 0.1) 1px, transparent 1px)
        `,
        backgroundSize: '50px 50px',
        maskImage: 'radial-gradient(circle at center, black 30%, transparent 70%)',
        WebkitMaskImage: 'radial-gradient(circle at center, black 30%, transparent 70%)',
      }}
    ></div>
  </div>

  {/* Floating Shape Decorations */}
  <div className="absolute top-20 left-10 w-24 h-24 border-2 border-orange-500/40 rounded rotate-12 animate-pulse hidden md:block"></div>
  <div className="absolute bottom-32 right-16 w-16 h-16 bg-orange-600/20 rounded-full blur-xl"></div>

  <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-16">
    {/* Header */}
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="text-center mb-16"
    >
      <h2 className="text-5xl md:text-7xl font-black text-white tracking-tight leading-none mb-4">
        Building <span className="text-orange-400">Vision</span>
      </h2>
      <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
        Where construction meets creativity, and every structure tells a story.
      </p>
    </motion.div>

    {/* Main Content – Asymmetric Layout */}
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
      
      {/* Left: Narrative Text */}
      <motion.div
        initial={{ opacity: 0, x: -60 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.9 }}
        viewport={{ once: true }}
        className="flex flex-col space-y-8"
      >
        <div className="bg-white/5 backdrop-blur-md p-8 rounded-3xl border border-orange-500/20 shadow-2xl">
          <h3 className="text-2xl font-bold text-white mb-5 border-l-4 border-orange-400 pl-4">
            Our Origin
          </h3>
          <p className="text-lg text-gray-200 leading-relaxed">
            <span className="font-semibold text-white">Tiger’s Mark</span> was born from a simple idea: 
            <em className="text-orange-300"> What if construction wasn’t just about concrete and steel — but about legacy?</em>
            Founded by industry veterans, we blend decades of expertise with bold new thinking.
          </p>
        </div>

        <div className="bg-gradient-to-br from-orange-900/30 to-transparent p-8 rounded-3xl border border-orange-500/30 shadow-lg">
          <h3 className="text-2xl font-bold text-orange-400 mb-5">The Craft</h3>
          <p className="text-lg text-gray-200 leading-relaxed">
            We don’t follow blueprints — we create them. From high-rises to industrial hubs, every project is a collaboration of precision, innovation, and relentless attention to detail.
          </p>
        </div>

        <div className="bg-white/5 backdrop-blur-md p-8 rounded-3xl border border-white/10">
          <h3 className="text-2xl font-bold text-white mb-5">The Future</h3>
          <p className="text-lg text-gray-200 leading-relaxed">
            We’re building more than structures — we’re building a <strong>sustainable, stronger Philippines</strong>. Partnering with communities, sourcing ethically, and engineering for tomorrow.
          </p>
        </div>
      </motion.div>

      {/* Right: Visual Showcase */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.9, ease: "easeOut" }}
        viewport={{ once: true }}
        className="flex flex-col items-center lg:items-end space-y-8"
      >
        {/* Main Logo/Image */}
        <div className="relative w-full max-w-md aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl border-4 border-orange-500/30 group">
          <Image
            src="/clientslogo/TMClog0s.png"
            alt="Tiger’s Mark – Engineering the Future"
            fill
            className="object-contain object-center scale-110 group-hover:scale-115 transition-transform duration-700"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
          <div className="absolute bottom-4 left-4 text-white text-sm font-bold bg-black/50 px-3 py-1 rounded-full">
          
          </div>
        </div>

        {/* Mini Stats Cards */}
        <div className="grid grid-cols-3 gap-4 w-full max-w-md mt-6">
          {[
            { num: "100+", label: "Projects" },
            { num: "...", label: "Years" },
            { num: "PH-wide", label: "Reach" },
          ].map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="text-center bg-white/10 backdrop-blur-sm p-3 rounded-xl border border-gray-600"
            >
              <div className="text-orange-400 text-xl font-bold">{stat.num}</div>
              <div className="text-gray-300 text-xs">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>

    {/* Signature Line */}
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ delay: 0.5 }}
      className="text-center mt-16"
    >
      <p className="text-gray-400 italic text-lg">
        “We don’t just construct buildings — we shape the skyline of progress.”
      </p>
      <p className="text-orange-400 font-semibold mt-2">— The Tiger’s Mark Team</p>
    </motion.div>
  </div>
</section>
      {/* === Why Choose Us === */}
<section id="why-choose-us" className="relative w-full px-4 sm:px-8 py-20 lg:py-28 bg-navy-900  bg-black overflow-hidden">
  {/* Background elements */}
  <div className="absolute inset-0 opacity-10">
    <div className="absolute inset-0 bg-[url('/assets/grid-pattern.svg')] bg-[length:60px_60px]"></div>
  </div>
  <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-orange-500/5 to-transparent pointer-events-none"></div>

  {/* Container */}
  <div className="relative max-w-7xl mx-auto">
    {/* Header */}
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      viewport={{ once: true, margin: "-100px" }}
      className="text-center mb-16 lg:mb-20"
    >
      <h2 className="text-4xl md:text-5xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-300 tracking-tight">
        Why Choose Tiger's Mark
      </h2>
      <p className="text-lg text-gray-300 max-w-2xl mx-auto">
        Building excellence through comprehensive construction solutions and premium materials
      </p>
    </motion.div>

    {/* Cards Grid */}
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
          transition={{ 
            duration: 0.6, 
            delay: index * 0.1,
            ease: [0.16, 1, 0.3, 1]
          }}
          viewport={{ once: true, margin: "-50px" }}
          className="group relative bg-gradient-to-b from-navy-800 to-navy-900 p-8 rounded-xl border border-navy-700 shadow-xl hover:shadow-orange-500/10 transition-all duration-300 overflow-hidden"
        >
          {/* Hover effect */}
          <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          
          {/* Icon */}
          <div className="w-16 h-16 mb-6 mx-auto rounded-lg bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center shadow-md">
            {item.icon}
          </div>
          
          {/* Content */}
          <div className="relative z-10">
            <h3 className="text-xl font-semibold text-white mb-3">{item.title}</h3>
            <p className="text-gray-300 mb-4">{item.description}</p>
            <div className="text-sm text-orange-400 font-medium">
              {item.highlight}
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  </div>
</section>
 <section id="recent-projects" className="relative w-full  bg-black  to-gray-950 px-6 py-24 z-10 overflow-hidden">
  {/* Background Decoration */}
  <div className="absolute inset-0 overflow-hidden pointer-events-none">
   <div className="absolute Top-0 left-0 w-full h-2/3 bg-gradient-to-t from-orange-500/5 to-transparent pointer-events-none"></div>
     <div className="absolute bottom-0 left-0 w-full h-2/3 bg-gradient-to-t from-orange-500/5 to-transparent pointer-events-none"></div>
  </div>

  {/* Heading */}
  <motion.h2
    initial={{ opacity: 0, y: -30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
    viewport={{ once: true }}
    className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-10 text-orange-400 tracking-tight relative z-10 text-center"
  >
    Transforming Visions Into Reality
  </motion.h2>

  <p className="text-lg text-gray-300 max-w-3xl mx-auto mb-16 leading-relaxed px-4 relative z-10 text-center">
    From sleek urban high-rises to sustainable industrial hubs, each project reflects our commitment to innovation, quality, and timeless design. Explore our recent milestones.
  </p>

  {/* Projects Grid */}
  <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto relative z-10">
    {[
      {
        img: '/SO.jpg',
        title: 'SINGLE ORIGIN OPUS',
        desc: 'Single Origin is a new hangout spot where coffee and alcohol lovers can find common ground. Single Origin features a hefty breakfast & lunch menu, dinner menu, and beverage list including specialty coffee and alcohol-based drinks',
        category: 'FIT OUTS',
        size: ' Makati Metro Manila',
        status: 'Completed',
      },
      {
        img: '/FRONT.jpg',
        title: 'COCO ICHIBANYA BANAWE',
        desc: '"CURRY HOUSE CoCo ICHIBANYA", known as "CoCoICHI", is a chain restaurant specializing in Japanese-style curry rice. Many people enjoy making their very own CoCoICHI curry by customizing the rice portion, spice level, and optional toppings coming in nearly 40 varieties.',
        category: 'FIT OUTS',
        size: 'San Juan Metro Manila ·',
        status: 'Completed ',
      },
      {
        img: '/PANCO.jpg',
        title: 'PANCO ONE AYALA',
        desc: 'Panco Café at One Ayala is the influencer equivalent of a heavily-filtered selfie: high gloss, low substance. Come for the clout; stay for the eye-rolls. If youre expecting warmth, flair, or e…',
        category: 'FIT OUTS',
        size: ' Ayala Ave, Makati',
        status: 'Completed ',
      },
      {
        img: '/CAPITAL-COMMONS-SINGLE-ORIGIN-1.jpg',
        title: 'UCC ONE AYALA',
        desc: 'UCC Clockwork One Ayala is a cafe located at One Ayala, Makati, Philippines. They are known for their specialty coffee, waffles, and other comfort food items. The cafe is open from 7am to 11pm and offers a cozy atmosphere with a variety of menu options. ',
        category: 'FIT OUTS',
        size: 'One Ayala, Makati,',
        status: 'Completed',
      },
      {
        img: '/PANCO-2.jpg',
        title: 'SINGLE ORIGIN CAPITAL COMMONS',
        desc: 'Single Origins newest branch is located in Capitol Commons, Pasig City, Philippines. The store opened on March 1st and serves specialty coffee, craft cocktails, and comfort food from 7 AM to 12 MN. Its described as a cozy coffee corner and a go-to place for good food, good vibes, and great hospitality. ',
        category: 'FIT OUTS',
        size: 'Pasig City',
        status: 'Completed ',
      },
      {
        img: '/SHAKA-MAKATI.jpg',
        title: 'SHAKAS CAFE LEVISTE MAKATI',
        desc: 'Shaka Cafe is a beloved vegetarian and vegan restaurant in the Philippines, offering vibrant, nutritious, and eco-conscious dishes inspired by global flavors. Known for fresh smoothie bowls, plant-based plates, and ethical practices, Shaka Cafe brings healthy dining to locals and travelers alike.',
        category: 'FIT OUTS',
        size: 'Leviste Street, Makati City',
        status: 'Completed',
      },
       {
        img: '/Flood-Mitigation-BArrido-Ajuy-Iloilo-GEN-CON.jpg',
        title: 'Urban High-Rise Living',
        desc: 'Urban high-rise living in the Philippines, particularly in Metro Manila, is characterized by a surge in condominium developments, offering a blend of convenience, modern amenities, and strategic locations near business districts, shopping centers, and entertainment hubs.',
        category: 'GENERAL CONSTRUCTIONS',
        size: 'Metro Manila',
        status: 'Completed',
      },
      {
        img: '/Electrical-Works-Altura-Market-Gen-Con.jpg',
        title: 'Creative Workspaces',
        desc: 'Creative workspaces are designed to foster innovation and collaboration, offering a dynamic environment that goes beyond traditional office settings. They incorporate elements like vibrant decor, open layouts, and access to collaborative tools to inspire creativity and boost productivity. These spaces are beneficial for individuals and teams, ',
        category: 'GENERAL CONSTRUCTIONS',
        size: 'Metro Manila',
        status: 'Completed',
      },
      {
        img: '/UCC-Mentore-Ayala-Center-Renovation.jpg',
        title: 'Eco-Friendly Manufacturing Hub',
        desc: 'UCC Mentore is opening a new location at Ayala Center on July 18, 2025, at 3 PM, according to a post on their Instagram account. The Ayala Center is also undergoing renovations, with plans for enhancements to the interior, parks, and landscaping, according to Tatler Asia. The renovations are part of a larger effort to revitalize Ayala Malls. ',
        category: 'RENOVATION',
        size: 'Ayala Center',
        status: 'Completed ',
      },
      
      
    ].map((project, i) => (
      <motion.div
        key={i}
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: i * 0.1 }}
        viewport={{ once: true }}
        className="group rounded-3xl overflow-hidden shadow-2xl border border-gray-700 bg-white/5 backdrop-blur-md hover:shadow-orange-500/20 transition-all duration-500 transform hover:-translate-y-2 relative"
      >
        {/* Image */}
        <div className="relative h-64 sm:h-72 overflow-hidden">
          <Image
            src={project.img}
            alt={project.title}
            width={600}
            height={400}
            className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-110"
          />
          {/* Category Badge */}
          <span className="absolute top-4 left-4 bg-orange-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg">
            {project.category}
          </span>
        </div>

        {/* Content */}
        <div className="p-6 text-left">
          <h3 className="text-xl font-bold text-white mb-2 group-hover:text-orange-400 transition-colors">
            {project.title}
          </h3>

          <p className="text-sm text-gray-300 mb-4 leading-relaxed line-clamp-3">
            {project.desc}
          </p>

          {/* Stats */}
          <div className="flex flex-wrap gap-3 mb-4 text-xs text-gray-400">
            <span className="bg-gray-800 px-2 py-1 rounded">{project.size}</span>
            <span className="bg-green-900/50 text-green-200 px-2 py-1 rounded">{project.status}</span>
          </div>

          {/* CTA Button */}
          <a
            href="#projects"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white text-sm font-semibold px-5 py-2.5 rounded-full transition-all shadow-md hover:shadow-orange-500/30"
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

  {/* CTA Below Projects */}
  <div className="mt-20 text-center relative z-10">
    <a
      href="#contact"
      className="inline-block bg-transparent border-2 border-orange-500 text-orange-400 hover:bg-orange-500 hover:text-white font-semibold px-8 py-3 rounded-full transition-all duration-300 text-lg"
    >
      Start Your Project With Us
    </a>
  </div>
</section>
     {/* === Trusted By – The Pulse (Creative & Unique) === */}
<section className="relative py-28 overflow-hidden bg-black">
  {/* Ambient Glow */}
  <div className="absolute inset-0 overflow-hidden pointer-events-none">
    <div className="absolute -top-32 -right-32 w-80 h-80 bg-orange-500/8 rounded-full blur-2xl opacity-10"></div>
    <div className="absolute -bottom-32 -left-32 w-80 h-80 bg-blue-500/8 rounded-full blur-2xl opacity-10"></div>
  </div>

  {/* Heading */}
  <motion.div
    initial={{ opacity: 0, y: 15 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
    viewport={{ once: true }}
    className="text-center mb-16 px-6 relative z-10"
  >
    <h2 className="text-4xl sm:text-6xl font-black text-white mb-4">
      Trusted by
      <span className="block text-orange-400">Vision, Built on Trust</span>
    </h2>
    <p className="text-gray-300 text-lg max-w-2xl mx-auto">
      We power progress for innovators shaping the future of infrastructure.
    </p>
  </motion.div>

  {/* Top Row – Scroll Left */}
  <div className="relative mb-10">
    <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-black to-transparent z-10"></div>
    <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-black to-transparent z-10"></div>

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

  {/* Bottom Row – Scroll Right (Reverse) */}
  <div className="relative mt-6">
    <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-black to-transparent z-10"></div>
    <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-black to-transparent z-10"></div>

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

  {/* Pulse Indicator */}
  <div className="flex justify-center mt-16">
    <div className="w-2 h-2 bg-orange-400 rounded-full animate-pulse shadow-lg"></div>
  </div>
</section>
      

      {/* === Our Location === */}
      <section id="location" className="bg-navy-900 w-full py-16 text-center  bg-black z-10">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-4xl sm:text-5xl font-bold mb-10 text-orange-400"
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
        className="bg-navy-900 w-full py-12 px-6 sm:px-20 text-sm  bg-black text-gray-300 z-10"
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
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                <img src="/icons/linkedin.svg" alt="LinkedIn" className="w-6 h-6" />
              </a>
            </div>
          </div>
          <div className="space-y-3">
            <h4 className="text-white font-semibold">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#Home" className="hover:underline text-orange-400">Home</a></li>
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