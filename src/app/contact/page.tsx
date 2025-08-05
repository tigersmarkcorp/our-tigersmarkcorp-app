'use client';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import {
  FaPhone,
  FaViber,
  FaFacebookMessenger,
  FaInstagram,
  FaLinkedin,
  FaMapMarkerAlt,
  FaTimes,
  FaCommentDots,
} from 'react-icons/fa';
import { Phone, Mail, MapPin } from 'lucide-react';

interface QuickAction {
  icon: React.ReactNode;
  label: string;
  href: string;
  color: string;
}

interface SocialLinks {
  fb: string;
  ig: string;
  linkedin: string;
}

interface ContactInfo {
  phone: string;
  altPhone: string;
  email: string;
  salesEmail: string;
  address: string;
  locationLink: string;
  social: SocialLinks;
}

export default function ContactUsPage() {
  const [open, setOpen] = useState(false);
  const { scrollY } = useScroll();
  // Parallax effect on hero
  const y = useTransform(scrollY, [0, 500], [0, 100]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0.7]);
  const toggleWidget = () => setOpen(!open);

  // Unified contact details
  const contact: ContactInfo = {
    phone: '+63 917 623 1675',
    altPhone: '+63 917 838 1829',
    email: 'info@tigersmarkcorp.com',
    salesEmail: 'sales@tigersmarkcorp.com',
    address: '17, Road 10 Visayas Ave, Quezon City, 1128 Metro Manila, Philippines',
    locationLink: 'https://goo.gl/maps/tigersmarkcorp',
    social: {
      fb: 'https://m.me/tigersmarkcorp',
      ig: 'https://instagram.com/tigersmarkcorp',
      linkedin: 'https://linkedin.com/company/tigersmarkcorp',
    },
  };

  const quickActions: QuickAction[] = [
    {
      icon: <FaPhone />,
      label: 'Call Us',
      href: `tel:${contact.phone.replace(/\s/g, '')}`,
      color: 'bg-green-500 hover:bg-green-600',
    },
    {
      icon: <FaViber />,
      label: 'Viber Chat',
      href: `viber://chat?number=%2B639176231675`,
      color: 'bg-purple-600 hover:bg-purple-700',
    },
    {
      icon: <FaFacebookMessenger />,
      label: 'Messenger',
      href: contact.social.fb,
      color: 'bg-blue-600 hover:bg-blue-700',
    },
    {
      icon: <FaInstagram />,
      label: 'Instagram',
      href: contact.social.ig,
      color: 'bg-gradient-to-tr from-pink-500 via-red-500 to-yellow-400',
    },
    {
      icon: <FaLinkedin />,
      label: 'LinkedIn',
      href: contact.social.linkedin,
      color: 'bg-sky-700 hover:bg-sky-800',
    },
    {
      icon: <FaMapMarkerAlt />,
      label: 'Location',
      href: contact.locationLink,
      color: 'bg-emerald-700 hover:bg-emerald-800',
    },
  ];

  // Close widget on outside click
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (open && !target.closest('.floating-widget')) {
        setOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [open]);

  const navItems = ['Home', 'About Us', 'Services', 'Projects', 'Contact'];
  const footerNavItems = ['Home', 'About Us', 'Services', 'Products', 'Projects', 'FAQ'];

  return (
    <div className="bg-black text-white font-['Bricolage Grotesque'] text-[17px] sm:text-[18px] leading-relaxed">
      {/* Sticky Header */}
      <motion.header
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="sticky top-0 z-50 w-full bg-white/10 backdrop-blur-lg shadow-md"
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

          {/* CTA Button */}
          <div className="fixed bottom-6 right-20 z-50">
            {open && (
              <div className="absolute top-full mt-3 flex flex-col items-center gap-3">
                {/* 🔥 Fixed: was `links`, now `quickActions` */}
                {quickActions.map((item, i) => (
                  <a
                    key={i}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-14 h-14 flex items-center justify-center rounded-full text-white shadow-lg transition-transform hover:scale-110 ${item.color}`}
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

      {/* === Hero Section === */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <motion.div
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,165,0,0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,165,0,0.1) 1px, transparent 1px)
            `,
            backgroundSize: '40px 40px',
            transform: `translateY(${y.get()}px)`,
            opacity: opacity,
          }}
          className="absolute inset-0 z-0 pointer-events-none"
        />
        <div className="absolute inset-0 opacity-10 z-10 pointer-events-none">
          <svg viewBox="0 0 800 600" xmlns="http://www.w3.org/2000/svg">
            <path d="M20 100 L780 100" stroke="#FFA500" strokeWidth="1" strokeDasharray="5,5" />
            <path d="M20 200 L780 200" stroke="#FFA500" strokeWidth="1" strokeDasharray="5,5" />
            <path d="M20 300 L780 300" stroke="#FFA500" strokeWidth="1" strokeDasharray="5,5" />
            <circle cx="400" cy="300" r="50" stroke="#FFA500" strokeWidth="1" fill="none" strokeDasharray="4,4" />
          </svg>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
          className="relative z-20 text-center px-4 sm:px-6 max-w-4xl"
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-yellow-300 mb-4 sm:mb-6">
            Let&apos;s Build
            <br />
            <span className="text-white drop-shadow-lg">Something Solid</span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-200 max-w-2xl mx-auto">
            Whether it&apos;s a project, partnership, or question — we&apos;re ready to connect.
          </p>
        </motion.div>
        <div className="absolute bottom-10 left-4 sm:left-10 text-orange-500 opacity-20 rotate-12">
          <svg width="40" height="40" viewBox="0 0 100 100" fill="none">
            <path d="M20 80 L20 20 L80 20" stroke="currentColor" strokeWidth="2" strokeDasharray="5,5" />
          </svg>
        </div>
      </section>

      {/* === Contact Info Section === */}
      <section className="px-4 sm:px-6 lg:px-8 py-20 md:py-32 relative">
        <div className="absolute inset-0 -skew-y-2 overflow-hidden z-0">
          <div className="bg-gradient-to-br from-gray-900/30 to-black h-full"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8 md:space-y-10"
          >
            <div>
              <span className="text-orange-400 font-bold uppercase tracking-wider text-sm">Get in Touch</span>
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white mt-2">
                We&apos;re Just a Call <span className="text-orange-400">Away</span>
              </h2>
            </div>
            <div className="space-y-6 md:space-y-8">
              <div className="flex items-start gap-4 group">
                <div className="mt-1 p-2 sm:p-3 bg-green-500/20 rounded-full text-green-400 group-hover:bg-green-500 transition">
                  <Phone size={20} className="sm:w-6 sm:h-6" />
                </div>
                <div>
                  <h4 className="text-lg sm:text-xl font-semibold text-white">Phone</h4>
                  <p className="text-gray-300">{contact.phone}</p>
                  <p className="text-gray-400 text-sm">or {contact.altPhone}</p>
                </div>
              </div>
              <div className="flex items-start gap-4 group">
                <div className="mt-1 p-2 sm:p-3 bg-blue-500/20 rounded-full text-blue-400 group-hover:bg-blue-500 transition">
                  <Mail size={20} className="sm:w-6 sm:h-6" />
                </div>
                <div>
                  <h4 className="text-lg sm:text-xl font-semibold text-white">Email</h4>
                  <a href={`mailto:${contact.email}`} className="text-gray-300 hover:text-blue-400 transition">
                    {contact.email}
                  </a>
                  <br />
                  <a href={`mailto:${contact.salesEmail}`} className="text-gray-400 text-sm hover:text-blue-400 transition">
                    {contact.salesEmail}
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-4 group">
                <div className="mt-1 p-2 sm:p-3 bg-emerald-500/20 rounded-full text-emerald-400 group-hover:bg-emerald-500 transition">
                  <MapPin size={20} className="sm:w-6 sm:h-6" />
                </div>
                <div>
                  <h4 className="text-lg sm:text-xl font-semibold text-white">Address</h4>
                  <a
                    href={contact.locationLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-300 hover:text-emerald-400 transition"
                  >
                    {contact.address}
                  </a>
                </div>
              </div>
            </div>
            <div className="pt-4 md:pt-6">
              <h4 className="text-lg sm:text-xl font-semibold text-white mb-3 sm:mb-4">Follow Us</h4>
              <div className="flex gap-4">
                {[
                  { icon: <FaFacebookMessenger size={18} className="sm:w-5 sm:h-5" />, href: contact.social.fb, label: 'Facebook Messenger' },
                  { icon: <FaInstagram size={18} className="sm:w-5 sm:h-5" />, href: contact.social.ig, label: 'Instagram' },
                  { icon: <FaLinkedin size={18} className="sm:w-5 sm:h-5" />, href: contact.social.linkedin, label: 'LinkedIn' },
                ].map((social, i) => (
                  <a
                    key={i}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-300 hover:text-orange-400 transition-transform hover:scale-110"
                    aria-label={social.label}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative mt-10 lg:mt-0"
          >
            <div className="absolute -top-4 -right-4 sm:-top-6 sm:-right-6 w-full h-full border-4 border-orange-500/40 rounded-2xl z-0"></div>
            <Image
              src="/MLlogo.jpg"
              alt="Modern Office Interior"
              width={600}
              height={450}
              className="rounded-xl shadow-2xl object-cover w-full relative z-10"
              priority
            />
            <div className="absolute inset-0 rounded-xl bg-gradient-to-t from-black/70 via-transparent to-transparent pointer-events-none"></div>
          </motion.div>
        </div>
      </section>

      {/* === Interactive Map Section === */}
      <section id="location" className="py-20 md:py-32 relative px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl md:text-5xl font-black text-center text-white mb-4 sm:mb-6"
        >
          Find Us on the <span className="text-orange-400">Ground</span>
        </motion.h2>
        <p className="text-center text-gray-300 max-w-2xl mx-auto mb-8 sm:mb-12 px-4">
          Located in the heart of Quezon City, our office is accessible and ready for your visit.
        </p>
        <div className="relative w-full max-w-6xl mx-auto rounded-xl md:rounded-3xl overflow-hidden shadow-3xl border-2 md:border-4 border-white/20">
          <div className="aspect-video">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3859.954261697035!2d121.04249591758715!3d14.658537144648264!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397b77b2a7d8a53%3A0x9580999bfa806830!2sTiger%27s%20Mark%20Corporation%20(New%20Office)!5e0!3m2!1sen!2sph!4v1751440543415!5m2!1sen!2sph"
              width="600"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="absolute inset-0 w-full h-full"
              title="Tiger's Mark Corporation Office Location"
            />
          </div>
        </div>
        <motion.div
          animate={{ y: [0, -8, 0] }}
          transition={{ repeat: Infinity, duration: 3 }}
          className="absolute -bottom-4 sm:-bottom-6 left-1/2 transform -translate-x-1/2 z-20"
        >
          <div className="bg-red-600 text-white px-3 py-1 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm font-medium shadow-lg flex items-center gap-1 sm:gap-2">
            <FaMapMarkerAlt className="text-xs sm:text-sm" /> QC Office
          </div>
        </motion.div>
      </section>

    

      {/* === Footer === */}
      <footer
        className="relative bg-black py-12 sm:py-20 px-4 sm:px-6 lg:px-8 text-sm text-gray-400"
        style={{
          backgroundImage: "url('/textures/concrete-dark.jpg')",
          backgroundSize: 'cover',
          backgroundBlendMode: 'overlay',
          backgroundColor: 'rgba(0,0,0,0.95)',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent pointer-events-none"></div>
        <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12">
          <div className="space-y-4 sm:space-y-5">
            <Image
              src="/clientslogo/TMClog0s.png"
              alt="Tiger's Mark Corporation"
              width={160}
              height={30}
              className="w-36 sm:w-40"
            />
            <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
              Building with integrity, precision, and passion — one structure at a time.
            </p>
            <div className="flex gap-3 sm:gap-4">
              <a href={contact.social.fb} target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition" aria-label="Facebook Messenger">
                <FaFacebookMessenger size={16} className="sm:w-5 sm:h-5" />
              </a>
              <a href={contact.social.ig} target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition" aria-label="Instagram">
                <FaInstagram size={16} className="sm:w-5 sm:h-5" />
              </a>
              <a href={contact.social.linkedin} target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition" aria-label="LinkedIn">
                <FaLinkedin size={16} className="sm:w-5 sm:h-5" />
              </a>
            </div>
          </div>
          <div>
            <h4 className="text-white font-bold mb-3 sm:mb-5">Navigate</h4>
            <ul className="space-y-2 sm:space-y-3">
              {footerNavItems.map((item) => (
                <li key={item}>
                  <a
                    href={`/${item.toLowerCase().replace(' ', '-')}`}
                    className="text-gray-300 hover:text-orange-400 transition-colors flex items-center gap-2 group text-sm sm:text-base"
                  >
                    <span className="w-1 h-1 bg-transparent group-hover:bg-orange-400 rounded-full transition"></span>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-white font-bold mb-3 sm:mb-5">Contact</h4>
            <ul className="space-y-1 sm:space-y-2 text-gray-300 text-sm sm:text-base">
              <li className="flex items-start gap-2">
                <span>📞</span>
                <span>{contact.phone}</span>
              </li>
              <li className="flex items-start gap-2">
                <span>✉️</span>
                <span>{contact.email}</span>
              </li>
              <li className="flex items-start gap-2">
                <span>📍</span>
                <span>Quezon City, Metro Manila</span>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-bold mb-3 sm:mb-5">Our Commitment</h4>
            <p className="text-gray-300 text-xs sm:text-sm">
              Delivering structural excellence from foundation to finish.
            </p>
          </div>
        </div>
        <div className="mt-12 sm:mt-16 text-center text-xs text-gray-500 relative z-10">
          &copy; {new Date().getFullYear()} Tiger&apos;s Mark Corporation. Engineered for excellence.
        </div>
      </footer>
    </div>
  );
}