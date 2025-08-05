"use client";

import Image from 'next/image';
import { useState, useEffect } from "react";
import { motion } from 'framer-motion';
import { ChevronDown } from "lucide-react";
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


// FAQ Data
const faqs = [
  {
    question: "What services does Tiger's Mark Corporation provide?",
    answer:
      "We offer a range of construction services, including general contracting, architectural and engineering design, materials supply, importation, project management, preventive maintenance, and more.",
  },
  {
    question: "How can I request a project quotation?",
    answer:
      "You can contact us via our contact form, email, or phone number provided on our Contact page. Our team will reach out to gather details and provide a detailed estimate.",
  },
  {
    question: "Where is your company located?",
    answer:
      "Our main office is at 123 Engineering Lane, Quezon City, Philippines. We serve clients nationwide.",
  },
  {
    question: "Do you offer wholesale materials and deliveries?",
    answer:
      "Yes, we specialize in wholesale and retail supply of construction materials with efficient and timely delivery services.",
  },
  {
    question: "Are your engineers and specialists licensed?",
    answer:
      "Absolutely. Our team consists of licensed, experienced, and industry-certified engineers, architects, and specialists.",
  },
  {
    question: "Do you accept government or institutional projects?",
    answer:
      "Yes, we handle private, commercial, and government-funded projects, ensuring compliance with national standards.",
  },
];

export default function FAQPage() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleIndex = (index: number) => {
    setActiveIndex((prev) => (prev === index ? null : index));

    
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
      {/* Hero Section */}
      <section className="relative w-full h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/bg3.jpg"
            alt="FAQ Background"
            fill
            priority
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/80 z-10" />
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative z-20 text-center px-6"
        >
          <h1 className="text-5xl sm:text-6xl font-bold text-orange-400 mb-4 drop-shadow-xl">
            Frequently Asked Questions
          </h1>
          <p className="text-lg sm:text-xl text-gray-200 max-w-2xl mx-auto">
            Everything you need to know about Tiger's Mark Corporation.
          </p>
        </motion.div>
      </section>

    {/* === Redesigned FAQ Section === */}
<section className="px-6 lg:px-28 py-24 bg-black text-white">
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6 }}
    className="max-w-5xl mx-auto"
  >
    <h2 className="text-center text-4xl sm:text-5xl font-bold text-orange-400 mb-12">
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
          className={`border border-white/10 backdrop-blur-sm rounded-xl overflow-hidden transition-all duration-300 ${
            activeIndex === index ? 'bg-white/5 shadow-orange-500/20 shadow-lg' : 'bg-white/10'
          }`}
        >
          <button
            onClick={() => toggleIndex(index)}
            aria-expanded={activeIndex === index}
            className="flex justify-between items-center w-full px-6 py-5 text-left hover:bg-white/10 transition-colors"
          >
            <div className="flex items-center gap-3">
              <FaCommentDots className="text-orange-300 text-lg" />
              <h3 className="text-lg sm:text-xl font-semibold text-orange-400">
                {faq.question}
              </h3>
            </div>
            <ChevronDown
              className={`transition-transform duration-300 text-orange-300 ${
                activeIndex === index ? "rotate-180" : ""
              }`}
            />
          </button>

          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={
              activeIndex === index
                ? { height: "auto", opacity: 1 }
                : { height: 0, opacity: 0 }
            }
            transition={{ duration: 0.5, ease: "easeInOut" }}
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
                     <li><a href="#product" className="hover:underline">Products</a></li>
                    <li><a href="#projects" className="hover:underline">Projects</a></li>
                    <li><a href="#contact" className="hover:underline">Contact</a></li>
                          <li><a href="#FAQ" className="hover:underline text-orange-400">FAQ</a></li>
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