'use client';

import Image from 'next/image';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  FaFacebookMessenger,
  FaInstagram,
  FaLinkedin,
  FaPhone,
  FaViber,
  FaMapMarkerAlt,
  FaTimes,
  FaCommentDots,
  FaArrowRight,
  FaExternalLinkAlt,
  FaBars,
} from 'react-icons/fa';
import {
  Building2,
  MapPin,
  Calendar,
  Square,
  ChevronLeft,
  ChevronRight,
  HardHat,
  Clock,
  Users,
} from 'lucide-react';

const projects = [
  {
    id: 1,
    title: 'High-Rise Commercial Tower',
    image: '/projects/project1.jpg',
    category: 'Commercial',
    location: 'Makati City',
    year: '2023',
    size: '45,000 sqm',
    duration: '18 months',
    client: 'Prime Properties Inc.',
  },
  {
    id: 2,
    title: 'Modern Residential Estate',
    image: '/projects/project2.jpg',
    category: 'Residential',
    location: 'Quezon City',
    year: '2022',
    size: '25,000 sqm',
    duration: '12 months',
    client: 'Urban Living Developers',
  },
  {
    id: 3,
    title: 'Bridge Infrastructure Build',
    image: '/projects/project3.jpg',
    category: 'Infrastructure',
    location: 'Cebu City',
    year: '2023',
    size: '1.2 km',
    duration: '24 months',
    client: 'DPWH Regional Office',
  },
  {
    id: 4,
    title: 'Industrial Plant Facility',
    image: '/projects/project4.jpg',
    category: 'Industrial',
    location: 'Laguna',
    year: '2022',
    size: '30,000 sqm',
    duration: '15 months',
    client: 'Global Manufacturing Corp',
  },
  {
    id: 5,
    title: 'Luxury Condominium Complex',
    image: '/projects/project5.jpg',
    category: 'Residential',
    location: 'Taguig City',
    year: '2024',
    size: '35,000 sqm',
    duration: '20 months',
    client: 'Elite Residences Inc.',
  },
  {
    id: 6,
    title: 'Shopping Mall Expansion',
    image: '/projects/project6.jpg',
    category: 'Commercial',
    location: 'Pasig City',
    year: '2023',
    size: '50,000 sqm',
    duration: '16 months',
    client: 'Retail Spaces Development',
  },
];

const categories = ['All', 'Commercial', 'Residential', 'Infrastructure', 'Industrial'];

export default function ProjectPage() {
  const [previewImage, setPreviewImage] = useState<string | null>(null);
  const [activeFilter, setActiveFilter] = useState('All');
  const [open, setOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const toggleWidget = () => setOpen(!open);
  const toggleMobileMenu = () => setMobileMenuOpen(!mobileMenuOpen);

  // Cleaned contact links
  const links = [
    { icon: <FaPhone />, href: 'tel:+1234567890', bg: 'bg-green-500', label: 'Call' },
    { icon: <FaViber />, href: 'viber://chat?number=%2B1234567890', bg: 'bg-purple-600', label: 'Viber' },
    { icon: <FaFacebookMessenger />, href: 'https://m.me/yourpage', bg: 'bg-blue-500', label: 'Messenger' },
    { icon: <FaInstagram />, href: 'https://instagram.com/yourprofile', bg: 'bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600', label: 'Instagram' },
    { icon: <FaLinkedin />, href: 'https://linkedin.com/in/yourprofile', bg: 'bg-sky-700', label: 'LinkedIn' },
    { icon: <FaMapMarkerAlt />, href: 'https://goo.gl/maps/yourlocation', bg: 'bg-green-700', label: 'Location' },
  ];

  const filteredProjects = activeFilter === 'All'
    ? projects
    : projects.filter((project) => project.category === activeFilter);

  const openLightbox = (image: string, index: number) => {
    setPreviewImage(image);
    setCurrentIndex(index);
  };

  const closeLightbox = () => {
    setPreviewImage(null);
  };

  const navigateLightbox = (direction: 'prev' | 'next') => {
    if (direction === 'next') {
      setCurrentIndex((prev) => (prev + 1) % filteredProjects.length);
    } else {
      setCurrentIndex((prev) => (prev - 1 + filteredProjects.length) % filteredProjects.length);
    }
    setPreviewImage(filteredProjects[currentIndex]?.image || null);
  };

  useEffect(() => {
    if (previewImage) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [previewImage]);

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

      {/* === Hero Section – Cinematic Project Showcase === */}
      <section className="relative py-32 px-6 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="object-cover w-full h-full scale-110 transition-transform duration-1000"
            style={{ filter: 'brightness(0.6) contrast(1.1)' }}
          >
            <source src="/bgvid.mp4" type="video/mp4" />
            {/* Fallback */}
            <div
              className="w-full h-full bg-gradient-to-br from-gray-900 via-black to-indigo-900"
              style={{
                backgroundImage: "url('/Probg.jpg')",
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            ></div>
          </video>
        </div>

        <div className="absolute inset-0 z-0 opacity-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-[#f59e0b]/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-indigo-600/20 rounded-full blur-3xl animate-bounce"></div>
        </div>

        <div
          className="absolute inset-0 z-0 opacity-5"
          style={{
            backgroundImage: `
              linear-gradient(rgba(245, 158, 11, 0.2) 1px, transparent 1px),
              linear-gradient(90deg, rgba(245, 158, 11, 0.2) 1px, transparent 1px)
            `,
            backgroundSize: '40px 40px',
          }}
        ></div>

        <div className="absolute inset-0 z-0 bg-gradient-to-b from-black/70 via-black/50 to-black/90"></div>

        <div className="relative z-10 max-w-6xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-[#f59e0b]/30 rounded-full px-5 py-2 mb-6 text-[#f59e0b] font-semibold text-sm"
          >
            <div className="w-2 h-2 bg-[#f59e0b] rounded-full animate-pulse"></div>
            Portfolio Showcase
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-4xl sm:text-5xl md:text-7xl font-black mb-6 leading-tight"
          >
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#f59e0b] to-[#fbbf24]">
              Our Project
            </span>
            <br />
            <span className="text-white">Portfolio</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="text-lg sm:text-xl text-gray-300 mb-10 leading-relaxed max-w-3xl mx-auto"
          >
            From visionary concepts to structural reality — each project is a testament to precision, innovation, and unwavering commitment to excellence.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="flex justify-center"
          >
            <a
              href="#recent-projects"
              className="group bg-gradient-to-r from-[#f59e0b] to-[#fbbf24] hover:from-[#d97706] hover:to-[#f59e0b] text-white font-semibold px-8 py-4 rounded-full shadow-lg hover:shadow-[#f59e0b]/30 transition-all duration-300 inline-flex items-center gap-2"
            >
              Explore Our Work
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </motion.div>
        </div>

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

      {/* === Projects Gallery Section === */}
      <section className="py-20 px-6 bg-gray-900">
        <div className="max-w-7xl mx-auto">
          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-16">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveFilter(category)}
                className={`px-6 py-3 rounded-full font-medium transition-all ${
                  activeFilter === category
                    ? 'bg-orange-500 text-black'
                    : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-800/50 backdrop-blur-sm rounded-xl overflow-hidden border border-gray-700 hover:border-orange-500/30 transition-all group cursor-pointer"
                onClick={() => openLightbox(project.image, index)}
              >
                <div className="relative h-64 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent z-10"></div>
                  <div
                    className="w-full h-full bg-gray-700 bg-center bg-cover group-hover:scale-110 transition-transform duration-700"
                    style={{ backgroundImage: `url(${project.image})` }}
                  ></div>
                  <div className="absolute top-4 left-4 z-20">
                    <span className="px-3 py-1 bg-orange-500 text-black text-sm font-medium rounded-full">
                      {project.category}
                    </span>
                  </div>
                  <div className="absolute bottom-4 left-4 z-20">
                    <h3 className="text-xl font-bold text-white">{project.title}</h3>
                    <div className="flex items-center mt-1 text-gray-300">
                      <MapPin size={14} className="mr-1" />
                      <span className="text-sm">{project.location}</span>
                    </div>
                  </div>
                </div>

                <div className="p-5">
                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div className="flex items-center text-sm text-gray-400">
                      <Calendar size={16} className="mr-2 text-orange-500" />
                      {project.year}
                    </div>
                    <div className="flex items-center text-sm text-gray-400">
                      <Square size={16} className="mr-2 text-orange-500" />
                      {project.size}
                    </div>
                    <div className="flex items-center text-sm text-gray-400">
                      <Clock size={16} className="mr-2 text-orange-500" />
                      {project.duration}
                    </div>
                    <div className="flex items-center text-sm text-gray-400">
                      <Users size={16} className="mr-2 text-orange-500" />
                      {project.client}
                    </div>
                  </div>

                  <button className="w-full flex items-center justify-center gap-2 bg-gray-700 hover:bg-orange-500 text-white py-2 rounded-lg transition-colors">
                    View Project
                    <FaExternalLinkAlt size={14} />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <div className="text-center py-16">
              <HardHat size={64} className="mx-auto text-gray-600 mb-4" />
              <h3 className="text-xl font-medium text-gray-400">No projects found in this category</h3>
              <p className="text-gray-500 mt-2">Check back later for new projects</p>
            </div>
          )}
        </div>
      </section>

      {/* === Stats Section === */}
      <section className="py-20 px-6 bg-gradient-to-r from-gray-900 to-gray-800 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 left-0 w-72 h-72 bg-orange-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-indigo-600/10 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-6xl mx-auto relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="p-6 bg-gray-800/30 backdrop-blur-sm rounded-xl border border-gray-700"
            >
              <div className="text-4xl font-bold text-orange-500 mb-2">50+</div>
              <div className="text-gray-300">Projects Completed</div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="p-6 bg-gray-800/30 backdrop-blur-sm rounded-xl border border-gray-700"
            >
              <div className="text-4xl font-bold text-orange-500 mb-2">15</div>
              <div className="text-gray-300">Years Experience</div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="p-6 bg-gray-800/30 backdrop-blur-sm rounded-xl border border-gray-700"
            >
              <div className="text-4xl font-bold text-orange-500 mb-2">100+</div>
              <div className="text-gray-300">Happy Clients</div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="p-6 bg-gray-800/30 backdrop-blur-sm rounded-xl border border-gray-700"
            >
              <div className="text-4xl font-bold text-orange-500 mb-2">12</div>
              <div className="text-gray-300">Awards Won</div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* === CTA Section === */}
      <section className="py-20 px-6 bg-gray-900 relative overflow-hidden">
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

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to <span className="text-orange-500">Start Your Project</span>?
          </h2>
          <p className="text-gray-300 mb-10 max-w-2xl mx-auto">
            Let's discuss how we can bring your vision to life with our expertise and dedication to quality.
          </p>

          <div className="flex flex-wrap justify-center gap-6">
            <a
              href="/contact"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-500 to-yellow-500 hover:from-orange-600 hover:to-yellow-600 text-black font-semibold px-8 py-4 rounded-full transition-all shadow-lg hover:shadow-orange-500/30 text-lg"
            >
              Start a Project
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

      {/* === Lightbox Modal === */}
      <AnimatePresence>
        {previewImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
            onClick={closeLightbox}
          >
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 text-white text-4xl z-10 hover:text-orange-500 transition-colors"
            >
              <FaTimes />
            </button>

            <button
              onClick={(e) => {
                e.stopPropagation();
                navigateLightbox('prev');
              }}
              className="absolute left-4 text-white text-2xl p-2 bg-gray-800/50 rounded-full hover:bg-orange-500 transition-colors z-10"
            >
              <ChevronLeft size={24} />
            </button>

            <button
              onClick={(e) => {
                e.stopPropagation();
                navigateLightbox('next');
              }}
              className="absolute right-4 text-white text-2xl p-2 bg-gray-800/50 rounded-full hover:bg-orange-500 transition-colors z-10"
            >
              <ChevronRight size={24} />
            </button>

            <div className="relative max-w-4xl w-full h-full max-h-[80vh] flex items-center justify-center">
              <div
                className="w-full h-full bg-gray-700 rounded-lg overflow-hidden bg-center bg-cover"
                style={{ backgroundImage: `url(${filteredProjects[currentIndex]?.image})` }}
              ></div>
            </div>

            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white text-center">
              <p className="font-medium">{filteredProjects[currentIndex]?.title}</p>
              <p className="text-sm text-gray-300">
                {currentIndex + 1} of {filteredProjects.length}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

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
            <Image src="/clientslogo/TMClog0s.png" alt="Logo" width={130} height={30} />
            <p className="text-gray-400">Tiger's Mark Corporation — building excellence with passion and precision.</p>
            <div className="flex space-x-4 mt-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center hover:bg-orange-500 transition-colors">
                <FaFacebookMessenger size={16} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center hover:bg-orange-500 transition-colors">
                <FaInstagram size={16} />
              </a>
              <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer" className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center hover:bg-orange-500 transition-colors">
                <FaLinkedin size={16} />
              </a>
            </div>
          </div>

          <div className="space-y-3">
            <h4 className="text-white font-semibold">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="/" className="hover:underline">Home</a></li>
              <li><a href="/about" className="hover:underline">About Us</a></li>
              <li><a href="/service" className="hover:underline">Services</a></li>
              <li><a href="/product" className="hover:underline">Products</a></li>
              <li><a href="/project" className="hover:underline text-orange-400">Projects</a></li>
              <li><a href="/contact" className="hover:underline">Contact</a></li>
              <li><a href="/FAQ" className="hover:underline">FAQ</a></li>
            </ul>
          </div>

          <div className="space-y-3">
            <h4 className="text-white font-semibold">Contact Info</h4>
            <p>Mobile: 0917 623 1675 | 0917 623 1675</p>
            <p>Email: sales@tigersmarkcorp.com</p>
            <p>17, Road 10 Visayas Ave, Quezon City, 1128 Metro Manila</p>
          </div>

          <div className="space-y-3">
            <h4 className="text-white font-semibold">Our Expertise</h4>
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