'use client';

import Image from 'next/image';
import { useState } from 'react';
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
  FaCheckCircle,
  FaBars,
} from 'react-icons/fa';
import {
  Package,
  Shield,
  Truck,
  Award,
  Clock,
  Zap,
  ArrowRight,
} from 'lucide-react';

const products = [
  {
    id: 1,
    title: 'UPVC Roofing and Ceiling Panels',
    desc: 'Durable, lightweight, and corrosion-resistant, these panels are ideal for both residential and commercial structures, providing long-lasting protection against the elements.',
    image: '/bg1.jpg',
    features: ['Weather resistant', 'Lightweight', 'Low maintenance', 'Energy efficient'],
    applications: ['Residential roofing', 'Commercial buildings', 'Industrial facilities'],
    certifications: ['ISO 9001', 'ASTM Standards'],
  },
  {
    id: 2,
    title: 'HDPE Solid Pipes',
    desc: 'High-density polyethylene pipes offer excellent resistance to chemicals and abrasion. Suitable for underground and industrial piping systems.',
    image: '/bg3.jpg',
    features: ['Chemical resistance', 'High durability', 'Flexible installation', 'Long service life'],
    applications: ['Water supply', 'Industrial piping', 'Mining operations'],
    certifications: ['ISO 4427', 'NSF/ANSI 61'],
  },
  {
    id: 3,
    title: 'HDPE Structured Wall Pipes',
    desc: 'Lightweight yet strong, these structured wall pipes are designed for gravity drainage and sewer applications, ensuring structural integrity.',
    image: '/bg4.jpg',
    features: ['High stiffness', 'Lightweight', 'Corrosion resistant', 'Easy installation'],
    applications: ['Sewer systems', 'Drainage systems', 'Stormwater management'],
    certifications: ['EN 13476', 'ASTM F2648'],
  },
  {
    id: 4,
    title: 'Fire Pumps',
    desc: 'Engineered to meet emergency fire protection needs, our fire pumps provide reliable pressure and volume for sprinkler systems and fire hydrants.',
    image: '/bg5.jpg',
    features: ['NFPA compliant', 'High pressure', 'Reliable performance', 'Low maintenance'],
    applications: ['High-rise buildings', 'Industrial facilities', 'Shopping malls'],
    certifications: ['NFPA 20', 'UL/FM approved'],
  },
  {
    id: 5,
    title: 'Jockey Pumps',
    desc: 'A key component in fire systems, jockey pumps maintain system pressure to reduce wear on the main pump and ensure constant readiness.',
    image: '/products/jockey-pump.jpg',
    features: ['Pressure maintenance', 'Energy efficient', 'Compact design', 'Quiet operation'],
    applications: ['Fire protection systems', 'Pressure boosting', 'Water supply systems'],
    certifications: ['NFPA 20', 'UL listed'],
  },
  {
    id: 6,
    title: 'Water Pumps',
    desc: 'Our water pumps are built for performance and energy efficiency — supporting a wide range of applications from agriculture to commercial plumbing.',
    image: '/products/water-pump.jpg',
    features: ['High efficiency', 'Durable construction', 'Versatile applications', 'Easy maintenance'],
    applications: ['Irrigation systems', 'Building services', 'Water transfer'],
    certifications: ['ISO 9906', 'CE certified'],
  },
];

const categories = [
  { name: 'Piping Systems', icon: <Package size={20} /> },
  { name: 'Fire Protection', icon: <Shield size={20} /> },
  { name: 'Water Solutions', icon: <Truck size={20} /> },
  { name: 'Building Materials', icon: <Award size={20} /> },
];

export default function ProductPage() {
  const [open, setOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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
      <section className="relative py-28 px-6 overflow-hidden bg-gradient-to-b from-gray-900 to-gray-800">
        <div className="absolute inset-0 z-0 opacity-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-orange-500 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-indigo-600 rounded-full blur-3xl"></div>
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
            Premium Construction Solutions
          </motion.div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-yellow-300">Quality</span>
            <br />
            <span className="text-white">Construction Products</span>
          </h1>

          <p className="text-lg sm:text-xl text-gray-300 mb-10 leading-relaxed max-w-3xl mx-auto">
            Discover our premium range of construction materials and systems engineered for durability,
            performance, and reliability in the most demanding environments.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="#products"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-500 to-yellow-500 hover:from-orange-600 hover:to-yellow-600 text-black font-semibold px-6 py-3 rounded-full transition-all shadow-lg hover:shadow-orange-500/30"
            >
              Explore Products
              <FaArrowRight />
            </a>
            <a
              href="/contact"
              className="inline-flex items-center gap-2 bg-transparent border border-orange-500 text-orange-400 hover:bg-orange-500/10 font-semibold px-6 py-3 rounded-full transition-all"
            >
              Request Catalog
            </a>
          </div>
        </div>
      </section>

      {/* === Product Categories === */}
      <section className="py-16 px-6 bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our <span className="text-orange-500">Product</span> Categories
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Explore our comprehensive range of construction products designed for various applications and industries.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700 hover:border-orange-500/30 transition-all group text-center"
              >
                <div className="w-14 h-14 bg-orange-500/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-orange-500/20 transition-colors">
                  <div className="text-orange-500 group-hover:scale-110 transition-transform">
                    {category.icon}
                  </div>
                </div>
                <h3 className="text-xl font-bold group-hover:text-orange-400 transition-colors">
                  {category.name}
                </h3>
                <p className="text-gray-400 mt-2 text-sm">
                  Premium quality products for professional applications
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* === Featured Products === */}
      <section id="products" className="py-20 px-6 bg-gray-800/30 relative overflow-hidden">
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
              Featured <span className="text-orange-500">Products</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Discover our premium selection of construction products engineered for excellence and durability.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-800/50 backdrop-blur-sm rounded-xl overflow-hidden border border-gray-700 hover:border-orange-500/30 transition-all group"
              >
                <div className="relative h-56 bg-gradient-to-br from-gray-700 to-gray-900 flex items-center justify-center overflow-hidden">
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-orange-500/10 transition-colors"></div>
                  <div className="relative z-10 p-4 text-center">
                    <Package size={48} className="mx-auto text-orange-500 mb-4 group-hover:scale-110 transition-transform" />
                    <div className="text-sm text-orange-400 font-medium bg-orange-500/10 px-3 py-1 rounded-full inline-block">
                      Featured Product
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3 group-hover:text-orange-400 transition-colors">
                    {product.title}
                  </h3>
                  <p className="text-gray-400 mb-4">{product.desc}</p>

                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-gray-300 mb-2">Key Features:</h4>
                    <ul className="space-y-1">
                      {product.features.slice(0, 3).map((feature, i) => (
                        <li key={i} className="flex items-center text-sm text-gray-400">
                          <FaCheckCircle className="text-orange-500 mr-2" size={12} />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <button className="w-full flex items-center justify-center gap-2 bg-gray-700 hover:bg-orange-500 text-white py-2 rounded-lg transition-colors">
                    Product Details
                    <ArrowRight size={14} />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* === Product Benefits === */}
      <section className="py-20 px-6 bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Why Choose <span className="text-orange-500">Our Products</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              We deliver construction products that meet the highest standards of quality, durability, and performance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-orange-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="text-orange-500" size={32} />
              </div>
              <h3 className="text-xl font-bold mb-2">Quality Certified</h3>
              <p className="text-gray-400">All products meet international quality standards and certifications</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-orange-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="text-orange-500" size={32} />
              </div>
              <h3 className="text-xl font-bold mb-2">Long Lifespan</h3>
              <p className="text-gray-400">Engineered for durability and long-term performance</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-orange-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="text-orange-500" size={32} />
              </div>
              <h3 className="text-xl font-bold mb-2">Energy Efficient</h3>
              <p className="text-gray-400">Designed to reduce energy consumption and operational costs</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-orange-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Truck className="text-orange-500" size={32} />
              </div>
              <h3 className="text-xl font-bold mb-2">Nationwide Delivery</h3>
              <p className="text-gray-400">Reliable logistics and delivery across the Philippines</p>
            </motion.div>
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
            Ready to <span className="text-orange-500">Source Quality Products</span>?
          </h2>
          <p className="text-gray-300 mb-10 max-w-2xl mx-auto">
            Contact us today for product specifications, pricing, and delivery information.
          </p>

          <div className="flex flex-wrap justify-center gap-6">
            <a
              href="/contact"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-500 to-yellow-500 hover:from-orange-600 hover:to-yellow-600 text-black font-semibold px-8 py-4 rounded-full transition-all shadow-lg hover:shadow-orange-500/30 text-lg"
            >
              Request Quote
              <FaArrowRight />
            </a>
            <a
              href="tel:+1234567890"
              className="inline-flex items-center gap-2 bg-transparent border border-orange-500 text-orange-400 hover:bg-orange-500/10 font-semibold px-8 py-4 rounded-full transition-all text-lg"
            >
              Call Our Sales Team
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
              <li><a href="/product" className="hover:underline text-orange-400">Products</a></li>
              <li><a href="/project" className="hover:underline">Projects</a></li>
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
            <h4 className="text-white font-semibold">Product Support</h4>
            <p>Technical assistance and product guidance available for all our construction solutions.</p>
          </div>
        </div>

        <div className="mt-12 border-t border-gray-700 pt-6 text-center text-xs text-gray-400">
          © {new Date().getFullYear()} Tiger's Mark Corporation. All rights reserved.
        </div>
      </motion.footer>

      {/* Custom Pulse Animation */}
      <style jsx>{`
        .animate-pulse-custom {
          animation: pulse 2s infinite;
        }
        @keyframes pulse {
          0% {
            transform: scale(1);
            box-shadow: 0 0 0 0 rgba(249, 115, 22, 0.7);
          }
          70% {
            transform: scale(1.05);
            box-shadow: 0 0 0 10px rgba(249, 115, 22, 0);
          }
          100% {
            transform: scale(1);
            box-shadow: 0 0 0 0 rgba(249, 115, 22, 0);
          }
        }
      `}</style>
    </div>
  );
}