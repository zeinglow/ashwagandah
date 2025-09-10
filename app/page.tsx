"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { MetaCAPI } from "@/lib/meta-capi-client";

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [timeLeft, setTimeLeft] = useState({
    hours: 7,
    minutes: 0,
    seconds: 0
  });

  const smoothScrollTo = (elementId: string) => {
    const element = document.getElementById(elementId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
    setIsMobileMenuOpen(false); // Close mobile menu after clicking
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    
    // Track ViewContent event with CAPI (includes Pixel with deduplication)
    MetaCAPI.trackViewContent({}, 'Ashwagandha Gummies', 'Health Supplements');
    
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Countdown timer effect
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prevTime) => {
        const totalSeconds = prevTime.hours * 3600 + prevTime.minutes * 60 + prevTime.seconds;
        
        if (totalSeconds <= 0) {
          // Reset to 7 hours when it reaches 0
          return { hours: 7, minutes: 0, seconds: 0 };
        }
        
        const newTotalSeconds = totalSeconds - 1;
        const hours = Math.floor(newTotalSeconds / 3600);
        const minutes = Math.floor((newTotalSeconds % 3600) / 60);
        const seconds = newTotalSeconds % 60;
        
        return { hours, minutes, seconds };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <>

      <div className="min-h-screen bg-gradient-to-b from-emerald-50 via-white to-emerald-50">
        {/* Optimized Header */}
        <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          isScrolled ? 'bg-white/95 backdrop-blur-lg shadow-lg' : 'bg-transparent'
        }`}>
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between h-16 md:h-20">
              {/* Logo */}
              <div className="flex-shrink-0">
                <Image
                  src="/logozeinglow.png"
                  alt="Zeinglow"
                  width={120}
                  height={36}
                  className="h-8 md:h-10 w-auto"
                  priority
                />
              </div>

              {/* Desktop Navigation */}
              <nav className="hidden md:flex items-center space-x-8">
                <button 
                  onClick={() => smoothScrollTo('benefits')} 
                  className="text-gray-700 hover:text-emerald-600 transition-colors font-medium cursor-pointer"
                >
                  Benefits
                </button>
                <button 
                  onClick={() => smoothScrollTo('ingredients')} 
                  className="text-gray-700 hover:text-emerald-600 transition-colors font-medium cursor-pointer"
                >
                  Ingredients
                </button>
                <button 
                  onClick={() => smoothScrollTo('reviews')} 
                  className="text-gray-700 hover:text-emerald-600 transition-colors font-medium cursor-pointer"
                >
                  Reviews
                </button>
                <button 
                  onClick={() => smoothScrollTo('faq')} 
                  className="text-gray-700 hover:text-emerald-600 transition-colors font-medium cursor-pointer"
                >
                  FAQ
                </button>
              </nav>

              {/* CTA Button */}
              <div className="flex items-center space-x-4">
                <a
                  href="/checkout"
                    onClick={() => {
                      MetaCAPI.trackAddToCart({}, 189, 'AED', 'Ashwagandha Gummies');
                    }}
                  className="bg-emerald-600 hover:bg-emerald-700 text-white px-4 md:px-6 py-2 md:py-3 rounded-full font-semibold text-sm md:text-base transition-all transform hover:scale-105 shadow-lg"
                >
                  Shop Now
                </a>
                
                {/* Mobile Menu Button */}
                <button
                  onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                  className="md:hidden p-2"
                  aria-label="Toggle menu"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                      d={isMobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
                  </svg>
                </button>
              </div>
            </div>

            {/* Mobile Menu */}
            {isMobileMenuOpen && (
              <div className="md:hidden bg-white border-t">
                <div className="px-4 py-4 space-y-3">
                  <button 
                    onClick={() => smoothScrollTo('benefits')} 
                    className="block py-2 text-gray-700 hover:text-emerald-600 w-full text-left"
                  >
                    Benefits
                  </button>
                  <button 
                    onClick={() => smoothScrollTo('ingredients')} 
                    className="block py-2 text-gray-700 hover:text-emerald-600 w-full text-left"
                  >
                    Ingredients
                  </button>
                  <button 
                    onClick={() => smoothScrollTo('reviews')} 
                    className="block py-2 text-gray-700 hover:text-emerald-600 w-full text-left"
                  >
                    Reviews
                  </button>
                  <button 
                    onClick={() => smoothScrollTo('faq')} 
                    className="block py-2 text-gray-700 hover:text-emerald-600 w-full text-left"
                  >
                    FAQ
                  </button>
                </div>
              </div>
            )}
          </div>
        </header>

        {/* Hero Section - Simplified and Optimized */}
        <section className="pt-24 md:pt-32 pb-16 md:pb-24 overflow-hidden relative">
          {/* Animated Cloud Background with Framer Motion */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {/* Real Cloud Images - Bigger and More */}
            {/* Cloud 1 - Top Left Large */}
            <motion.div
              className="absolute top-12 left-4 w-48 h-32 md:w-60 md:h-40"
              animate={{
                y: [0, -15, -8, -20, 0],
                x: [0, 8, -6, 12, 0],
                rotate: [0, 2, -1, 3, 0],
              }}
              transition={{
                duration: 12,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <Image
                src="/cloude1.png"
                alt=""
                width={240}
                height={160}
                className="w-full h-full object-contain opacity-65"
              />
            </motion.div>

            {/* Cloud 2 - Top Right Large */}
            <motion.div
              className="absolute top-8 right-6 w-44 h-28 md:w-56 md:h-36"
              animate={{
                y: [0, -18, -12, -22, 0],
                x: [0, -10, 6, -8, 0],
                rotate: [0, -2, 1, -3, 0],
              }}
              transition={{
                duration: 14,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 2
              }}
            >
              <Image
                src="/cloude2.png"
                alt=""
                width={224}
                height={144}
                className="w-full h-full object-contain opacity-55"
              />
            </motion.div>

            {/* Cloud 3 - Top Center */}
            <motion.div
              className="absolute top-4 left-1/3 w-40 h-26 md:w-48 md:h-32"
              animate={{
                y: [0, -12, -18, -10, 0],
                x: [0, 6, -8, 4, 0],
                rotate: [0, 1, -2, 2, 0],
              }}
              transition={{
                duration: 16,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 4
              }}
            >
              <Image
                src="/cloude1.png"
                alt=""
                width={192}
                height={128}
                className="w-full h-full object-contain opacity-45"
              />
            </motion.div>

            {/* Cloud 4 - Mid Right */}
            <motion.div
              className="absolute top-32 right-1/4 w-36 h-24 md:w-44 md:h-30"
              animate={{
                y: [0, -14, -20, -16, 0],
                x: [0, -6, 10, -4, 0],
                rotate: [0, -1, 2, -1, 0],
              }}
              transition={{
                duration: 10,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 6
              }}
            >
              <Image
                src="/cloude2.png"
                alt=""
                width={176}
                height={120}
                className="w-full h-full object-contain opacity-40"
              />
            </motion.div>

            {/* Cloud 5 - Mid Left */}
            <motion.div
              className="absolute top-48 left-16 w-32 h-22 md:w-40 md:h-28"
              animate={{
                y: [0, -16, -10, -18, 0],
                x: [0, 8, -4, 6, 0],
                rotate: [0, 2, -1, 1, 0],
              }}
              transition={{
                duration: 13,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 8
              }}
            >
              <Image
                src="/cloude1.png"
                alt=""
                width={160}
                height={112}
                className="w-full h-full object-contain opacity-50"
              />
            </motion.div>

            {/* Cloud 6 - Bottom Center */}
            <motion.div
              className="absolute top-56 left-1/2 transform -translate-x-1/2 w-28 h-20 md:w-36 md:h-26"
              animate={{
                y: [0, -12, -16, -8, 0],
                x: [0, -4, 8, -6, 0],
                rotate: [0, -1, 2, -2, 0],
              }}
              transition={{
                duration: 11,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 10
              }}
            >
              <Image
                src="/cloude2.png"
                alt=""
                width={144}
                height={104}
                className="w-full h-full object-contain opacity-35"
              />
            </motion.div>

            {/* Cloud 7 - Right Side Upper */}
            <motion.div
              className="absolute top-20 right-4 w-38 h-26 md:w-46 md:h-32"
              animate={{
                y: [0, -18, -14, -22, 0],
                x: [0, -8, 4, -12, 0],
                rotate: [0, -2, 1, -3, 0],
              }}
              transition={{
                duration: 15,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 3
              }}
            >
              <Image
                src="/cloude1.png"
                alt=""
                width={184}
                height={128}
                className="w-full h-full object-contain opacity-52"
              />
            </motion.div>

            {/* Cloud 8 - Right Side Lower */}
            <motion.div
              className="absolute top-44 right-8 w-34 h-24 md:w-42 md:h-30"
              animate={{
                y: [0, -15, -20, -12, 0],
                x: [0, -6, 8, -10, 0],
                rotate: [0, 1, -2, 2, 0],
              }}
              transition={{
                duration: 12,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 7
              }}
            >
              <Image
                src="/cloude2.png"
                alt=""
                width={168}
                height={120}
                className="w-full h-full object-contain opacity-48"
              />
            </motion.div>

            {/* Additional smaller CSS clouds for depth */}
            <motion.div 
              className="absolute top-32 left-20 w-16 h-8 bg-white/15 rounded-full blur-sm"
              animate={{
                y: [0, -8, -12, -6, 0],
                x: [0, -3, 5, -2, 0],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1
              }}
            />
            
            <motion.div 
              className="absolute top-52 right-16 w-20 h-10 bg-white/20 rounded-full blur-sm"
              animate={{
                y: [0, -10, -14, -8, 0],
                x: [0, 5, -7, 3, 0],
              }}
              transition={{
                duration: 9,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 3
              }}
            />
            
            {/* Cloud 3 */}
            <motion.div 
              className="absolute top-60 left-1/4 w-28 h-14 bg-white/15 rounded-full blur-sm"
              animate={{
                y: [0, -20, -12, -16, 0],
                x: [0, -6, 8, -4, 0],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1.5
              }}
            />
            <motion.div 
              className="absolute top-56 left-1/3 w-18 h-9 bg-white/10 rounded-full blur-sm"
              animate={{
                y: [0, -14, -18, -10, 0],
                x: [0, 7, -5, 9, 0],
              }}
              transition={{
                duration: 6.5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 3
              }}
            />
            
            {/* Cloud 4 */}
            <motion.div 
              className="absolute top-40 right-1/3 w-20 h-10 bg-white/20 rounded-full blur-sm"
              animate={{
                y: [0, -12, -16, -8, 0],
                x: [0, -4, 6, -8, 0],
              }}
              transition={{
                duration: 8.5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 4
              }}
            />
            
            {/* Cloud 5 - Mobile friendly */}
            <motion.div 
              className="absolute top-72 right-10 w-16 h-8 bg-white/15 rounded-full blur-sm"
              animate={{
                y: [0, -10, -14, -6, 0],
                x: [0, 4, -6, 2, 0],
              }}
              transition={{
                duration: 7.5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 2.5
              }}
            />
            
            {/* Floating particles with more complex animations */}
            <motion.div 
              className="absolute top-24 left-1/2 w-2 h-2 bg-emerald-200/30 rounded-full"
              animate={{
                y: [0, -35, -20, -40, 0],
                scale: [1, 1.2, 0.8, 1.1, 1],
                opacity: [0.3, 0.8, 0.5, 0.9, 0.3],
              }}
              transition={{
                duration: 12,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            <motion.div 
              className="absolute top-48 right-1/4 w-1.5 h-1.5 bg-emerald-100/40 rounded-full"
              animate={{
                y: [0, -25, -35, -15, 0],
                scale: [1, 0.9, 1.3, 1.05, 1],
                opacity: [0.4, 0.7, 0.9, 0.5, 0.4],
              }}
              transition={{
                duration: 10,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1.5
              }}
            />
            <motion.div 
              className="absolute top-36 left-1/5 w-2.5 h-2.5 bg-white/20 rounded-full"
              animate={{
                y: [0, -30, -45, -25, 0],
                scale: [1, 1.1, 0.9, 1.2, 1],
                opacity: [0.2, 0.6, 0.8, 0.4, 0.2],
              }}
              transition={{
                duration: 14,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 3.5
              }}
            />
          </div>
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
              {/* Content */}
              <motion.div 
                className="order-2 md:order-1"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              >
                {/* Trust Badges */}
                <motion.div 
                  className="flex flex-wrap gap-2 mb-6"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
                >
                  <motion.span 
                    className="inline-flex items-center px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-sm font-medium"
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.4, delay: 0.4 }}
                  >
                    ✓ 100% Sugar-Free
                  </motion.span>
                  <motion.span 
                    className="inline-flex items-center px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-sm font-medium"
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.4, delay: 0.6 }}
                  >
                    ✓ Vegan & Plant-Based
                  </motion.span>
                </motion.div>

                {/* Headline */}
                <motion.h1 
                  className="text-3xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6"
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
                >
                  Find Your Calm,
                  <motion.span 
                    className="text-emerald-600 block"
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
                  >
                    Sleep Deeply Tonight
                  </motion.span>
                </motion.h1>

                {/* Subheadline */}
                <motion.p 
                  className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.5, ease: "easeOut" }}
                >
                  Premium Ashwagandha gummies that naturally melt away stress and tension. 
                  <span className="font-semibold text-gray-800"> Wake up refreshed, not groggy.</span>
                </motion.p>

                {/* Benefits List */}
                <motion.ul 
                  className="space-y-3 mb-8"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.7, ease: "easeOut" }}
                >
                  <motion.li 
                    className="flex items-start"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: 0.8 }}
                  >
                    <svg className="w-6 h-6 text-emerald-500 mr-3 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700">Feel the difference in just 7 days or less</span>
                  </motion.li>
                  <motion.li 
                    className="flex items-start"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: 0.9 }}
                  >
                    <svg className="w-6 h-6 text-emerald-500 mr-3 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700">Sugar-free & gluten-free - guilt-free wellness</span>
                  </motion.li>
                  <motion.li 
                    className="flex items-start"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: 1.0 }}
                  >
                    <svg className="w-6 h-6 text-emerald-500 mr-3 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700">Risk-free with our 60-day happiness promise</span>
                  </motion.li>
                </motion.ul>

                {/* Single CTA Button */}
                <motion.div 
                  className="flex flex-col sm:flex-row gap-4"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 1.1, ease: "easeOut" }}
                >
                  <motion.a
                    href="/checkout"
                    onClick={() => {
                      MetaCAPI.trackAddToCart({}, 189, 'AED', 'Ashwagandha Gummies');
                    }}
                    className="inline-flex items-center justify-center bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all transform hover:scale-105 shadow-xl"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Order Now - AED 189
                  </motion.a>
                </motion.div>

                {/* Social Proof */}
                <motion.div 
                  className="mt-8 flex items-center space-x-6"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 1.3, ease: "easeOut" }}
                >
                  <div className="flex -space-x-2">
                    {[1,2,3,4,5].map((i) => (
                      <motion.div
                        key={i}
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.3, delay: 1.4 + (i * 0.1) }}
                      >
                        <Image
                        src={`/avatar/avatar${i}.png`}
                        alt={`Customer ${i}`}
                        width={40}
                        height={40}
                        className="w-10 h-10 rounded-full border-2 border-white object-cover"
                      />
                      </motion.div>
                    ))}
                  </div>
                  <p className="text-sm text-gray-600">
                    <span className="font-semibold text-gray-900">3,000+ happy customers</span> feeling calmer
                  </p>
                </motion.div>
              </motion.div>

              {/* Product Image */}
              <motion.div 
                className="order-1 md:order-2 relative"
                initial={{ opacity: 0, scale: 0.8, y: 50 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
              >
                <div className="relative mx-auto max-w-xs md:max-w-sm">
                  <motion.div 
                    className="absolute inset-0 bg-gradient-to-br from-emerald-200 to-emerald-400 rounded-full blur-3xl opacity-30"
                    animate={{
                      scale: [1, 1.05, 1],
                      opacity: [0.3, 0.4, 0.3],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  />
                  <motion.div
                    animate={{
                      y: [0, -8, 0],
                      rotate: [0, 2, -2, 0],
                    }}
                    transition={{
                      duration: 6,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  >
                  <Image
                      src="/beargummies.png"
                    alt="Zeinglow Ashwagandha Gummies"
                      width={400}
                      height={400}
                      className="relative z-10 w-full h-auto max-w-[280px] md:max-w-[350px] mx-auto"
                    priority
                  />
                  </motion.div>
                  <motion.div 
                    className="absolute -top-2 -right-2 md:-top-4 md:-right-4 bg-red-500 text-white px-2 py-1 md:px-4 md:py-2 rounded-full text-xs md:text-sm font-bold"
                    initial={{ scale: 0, rotate: -180 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ duration: 0.6, delay: 1.2, ease: "backOut" }}
                  >
                    <motion.span
                      animate={{
                        scale: [1, 1.1, 1],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    >
                    Limited Stock
                    </motion.span>
                  </motion.div>
                  </div>
              </motion.div>
                </div>
              </div>
        </section>

        {/* Mobile-Only Quick Order Section */}
        <section className="md:hidden py-12 bg-white border-t border-emerald-100">
          <div className="container mx-auto px-4">
            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Ready to Start Your Journey?</h3>
              <p className="text-gray-600">Choose your bundle and order now</p>
            </div>

            {/* Mobile Bundle Cards */}
            <div className="space-y-4 max-w-sm mx-auto">
              {/* Starter */}
              <motion.div 
                className="bg-white rounded-2xl p-4 border-2 border-gray-200 shadow-lg relative"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <div className="absolute -top-2 -right-2 bg-orange-500 text-white px-2 py-1 rounded-full text-xs font-bold">
                  10% OFF
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-bold text-lg">1 Bottle</h4>
                    <p className="text-sm text-gray-600">30-day supply</p>
                    <div className="flex items-center gap-2 mt-1">
                      <span className="text-sm text-gray-400 line-through">AED 210</span>
                      <span className="text-xl font-bold text-emerald-600">AED 189</span>
                    </div>
                  </div>
                  <a
                    href="/checkout"
                    onClick={() => {
                      MetaCAPI.trackAddToCart({}, 189, 'AED', 'Ashwagandha Gummies');
                    }}
                    className="bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-2 rounded-full font-semibold text-sm transition-colors"
                  >
                    Order Now
                  </a>
                </div>
              </motion.div>

              {/* Best Value */}
              <motion.div 
                className="bg-emerald-600 text-white rounded-2xl p-4 shadow-lg relative transform scale-105"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <div className="absolute -top-2 -right-2 bg-red-500 text-white px-2 py-1 rounded-full text-xs font-bold">
                  20% OFF
                </div>
                <div className="absolute -top-2 -left-2 bg-yellow-400 text-gray-900 text-xs font-bold px-2 py-1 rounded-full">
                  MOST POPULAR
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-bold text-lg">2 Bottles</h4>
                    <p className="text-sm text-emerald-100">60-day supply</p>
                    <div className="flex items-center gap-2 mt-1">
                      <span className="text-sm text-emerald-200 line-through">AED 424</span>
                      <span className="text-xl font-bold">AED 339</span>
                    </div>
                  </div>
                  <a
                    href="/checkout"
                    onClick={() => {
                      MetaCAPI.trackAddToCart({}, 339, 'AED', 'Ashwagandha Gummies');
                    }}
                    className="bg-white hover:bg-gray-100 text-emerald-600 px-4 py-2 rounded-full font-semibold text-sm transition-colors"
                  >
                    Order Now
                  </a>
                </div>
              </motion.div>

              {/* Premium */}
              <motion.div 
                className="bg-white rounded-2xl p-4 border-2 border-gray-200 shadow-lg relative"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <div className="absolute -top-2 -right-2 bg-red-500 text-white px-2 py-1 rounded-full text-xs font-bold">
                  30% OFF
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-bold text-lg">3 Bottles</h4>
                    <p className="text-sm text-gray-600">90-day supply</p>
                    <div className="flex items-center gap-2 mt-1">
                      <span className="text-sm text-gray-400 line-through">AED 684</span>
                      <span className="text-xl font-bold text-emerald-600">AED 479</span>
                    </div>
                  </div>
                  <a
                    href="/checkout"
                    onClick={() => {
                      MetaCAPI.trackAddToCart({}, 479, 'AED', 'Ashwagandha Gummies');
                    }}
                    className="bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-2 rounded-full font-semibold text-sm transition-colors"
                  >
                    Order Now
                  </a>
                </div>
              </motion.div>
            </div>

            {/* Mobile Trust Badges */}
            <div className="flex justify-center gap-4 mt-6 text-xs text-gray-600">
              <div className="flex items-center gap-1">
                <svg className="w-4 h-4 text-emerald-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>60-Day Guarantee</span>
              </div>
              <div className="flex items-center gap-1">
                <svg className="w-4 h-4 text-emerald-500" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M8 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM15 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
                  <path d="M3 4a1 1 0 00-1 1v10a1 1 0 001 1h1.05a2.5 2.5 0 014.9 0H10a1 1 0 001-1V5a1 1 0 00-1-1H3zM14 7a1 1 0 00-1 1v6.05A2.5 2.5 0 0115.95 16H17a1 1 0 001-1v-5a1 1 0 00-.293-.707l-2-2A1 1 0 0015 7h-1z" />
                </svg>
                <span>Free Shipping</span>
              </div>
            </div>

            {/* Mobile Timer */}
            <div className="mt-6 bg-gradient-to-r from-red-50 to-orange-50 border border-red-200 rounded-xl p-4 max-w-sm mx-auto">
              <div className="text-center">
                <div className="text-red-600 font-bold text-sm mb-2">⏰ LIMITED TIME OFFER</div>
                <div className="flex items-center justify-center space-x-2 text-lg font-mono font-bold text-red-600">
                  <div className="bg-red-600 text-white px-2 py-1 rounded">
                    {String(timeLeft.hours).padStart(2, '0')}
                  </div>
                  <span>:</span>
                  <div className="bg-red-600 text-white px-2 py-1 rounded">
                    {String(timeLeft.minutes).padStart(2, '0')}
                  </div>
                  <span>:</span>
                  <div className="bg-red-600 text-white px-2 py-1 rounded">
                    {String(timeLeft.seconds).padStart(2, '0')}
                  </div>
                </div>
                <div className="text-xs text-red-600 mt-1">UP TO 30% OFF ENDS SOON</div>
              </div>
            </div>
          </div>
        </section>

        {/* Elegant Problem-Solution Section */}
        <section className="py-16 md:py-24 bg-gradient-to-b from-white to-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  The Hidden Cost of Chronic Stress
                </h2>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                  Every day you wait, stress compounds—affecting your health, relationships, and success
                </p>
              </div>
              
              <div className="grid md:grid-cols-3 gap-8">
                {/* Current Reality */}
                <div className="relative group">
                  <div className="absolute inset-0 bg-gradient-to-br from-red-100 to-red-50 rounded-2xl transform rotate-1 group-hover:rotate-2 transition-transform"></div>
                  <div className="relative bg-white rounded-2xl p-8 shadow-lg border border-red-100">
                    <div className="w-14 h-14 bg-red-100 rounded-2xl flex items-center justify-center mb-6">
                      <svg className="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <h3 className="font-bold text-xl mb-3 text-gray-900">Your Current Reality</h3>
                    <ul className="space-y-2 text-gray-600 text-sm">
                      <li className="flex items-start">
                        <span className="text-red-500 mr-2">•</span>
                        Waking up already exhausted
                      </li>
                      <li className="flex items-start">
                        <span className="text-red-500 mr-2">•</span>
                        Snapping at loved ones
                      </li>
                      <li className="flex items-start">
                        <span className="text-red-500 mr-2">•</span>
                        Mind racing at 3 AM
                      </li>
                      <li className="flex items-start">
                        <span className="text-red-500 mr-2">•</span>
                        Constant physical tension
                      </li>
                    </ul>
                  </div>
                </div>

                {/* The Real Impact */}
                <div className="relative group">
                  <div className="absolute inset-0 bg-gradient-to-br from-orange-100 to-orange-50 rounded-2xl transform -rotate-1 group-hover:-rotate-2 transition-transform"></div>
                  <div className="relative bg-white rounded-2xl p-8 shadow-lg border border-orange-100">
                    <div className="w-14 h-14 bg-orange-100 rounded-2xl flex items-center justify-center mb-6">
                      <svg className="w-8 h-8 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                      </svg>
                    </div>
                    <h3 className="font-bold text-xl mb-3 text-gray-900">The Ripple Effect</h3>
                    <ul className="space-y-2 text-gray-600 text-sm">
                      <li className="flex items-start">
                        <span className="text-orange-500 mr-2">•</span>
                        Missed promotions at work
                      </li>
                      <li className="flex items-start">
                        <span className="text-orange-500 mr-2">•</span>
                        Strained relationships
                      </li>
                      <li className="flex items-start">
                        <span className="text-orange-500 mr-2">•</span>
                        Declining health markers
                      </li>
                      <li className="flex items-start">
                        <span className="text-orange-500 mr-2">•</span>
                        Lost years of quality life
                      </li>
                    </ul>
                  </div>
                </div>

                {/* Your New Life */}
                <div className="relative group">
                  <div className="absolute inset-0 bg-gradient-to-br from-emerald-100 to-emerald-50 rounded-2xl transform rotate-1 group-hover:rotate-2 transition-transform"></div>
                  <div className="relative bg-white rounded-2xl p-8 shadow-lg border-2 border-emerald-200">
                    <div className="w-14 h-14 bg-emerald-100 rounded-2xl flex items-center justify-center mb-6">
                      <svg className="w-8 h-8 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                      </svg>
                    </div>
                    <h3 className="font-bold text-xl mb-3 text-gray-900">Your Life with Zeinglow</h3>
                    <ul className="space-y-2 text-gray-600 text-sm">
                      <li className="flex items-start">
                        <span className="text-emerald-500 mr-2">✓</span>
                        <span className="font-medium">Wake up energized</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-emerald-500 mr-2">✓</span>
                        <span className="font-medium">Handle stress with ease</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-emerald-500 mr-2">✓</span>
                        <span className="font-medium">Deep, restorative sleep</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-emerald-500 mr-2">✓</span>
                        <span className="font-medium">Present with loved ones</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Urgency Message */}
              <div className="mt-12 text-center bg-gradient-to-r from-emerald-50 to-green-50 rounded-2xl p-8 border border-emerald-200">
                <p className="text-lg font-semibold text-gray-900 mb-2">
                  Every day without proper stress management costs you
                </p>
                <p className="text-gray-600 mb-6">
                  Your health, relationships, and peace of mind can&apos;t wait another day
                </p>
                <a
                  href="/checkout"
                    onClick={() => {
                      MetaCAPI.trackAddToCart({}, 189, 'AED', 'Ashwagandha Gummies');
                    }}
                  className="inline-flex items-center justify-center bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all transform hover:scale-105 shadow-xl"
                >
                  Start Your Transformation Today
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Section - Fixed Equal Images */}
        <section id="pricing" className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Choose Your Bundle</h2>
              <p className="text-lg text-gray-600">Save more with larger bundles • Free shipping on all orders</p>
              
              {/* Urgency Timer */}
              <div className="mt-6 bg-gradient-to-r from-red-50 to-orange-50 border-2 border-red-200 rounded-2xl p-6 max-w-md mx-auto">
                <div className="flex items-center justify-center mb-3">
                  <svg className="w-6 h-6 text-red-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-red-600 font-bold text-lg">LIMITED TIME OFFER</span>
                </div>
                <div className="text-3xl font-bold text-red-700 mb-2">
                  UP TO 30% OFF
                </div>
                <div className="flex items-center justify-center space-x-4 text-2xl font-mono font-bold text-red-600">
                  <div className="bg-red-600 text-white px-3 py-2 rounded-lg">
                    {String(timeLeft.hours).padStart(2, '0')}
                  </div>
                  <span>:</span>
                  <div className="bg-red-600 text-white px-3 py-2 rounded-lg">
                    {String(timeLeft.minutes).padStart(2, '0')}
                  </div>
                  <span>:</span>
                  <div className="bg-red-600 text-white px-3 py-2 rounded-lg">
                    {String(timeLeft.seconds).padStart(2, '0')}
                  </div>
                </div>
                <div className="text-sm text-red-600 mt-2 font-medium">
                  Hours : Minutes : Seconds
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {/* Starter */}
              <div className="bg-white rounded-2xl p-6 border border-gray-200 hover:shadow-xl transition-shadow relative">
                <div className="absolute -top-3 -right-3 bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                  10% OFF
                </div>
                <div className="text-center">
                  <h3 className="text-xl font-bold mb-2">Starter</h3>
                  <p className="text-gray-600 mb-4">Try it out</p>
                  <div className="h-32 flex items-center justify-center mb-6">
                    <Image 
                      src="/beargummies.png" 
                      alt="1 Bottle" 
                      width={100} 
                      height={100} 
                      className="object-contain"
                    />
                  </div>
                  <div className="mb-2">
                    <span className="text-lg text-gray-400 line-through mr-2">AED 210</span>
                    <div className="text-3xl font-bold text-emerald-600">AED 189</div>
                  </div>
                  <p className="text-sm text-gray-500 mb-2">1 bottle • 30-day supply</p>
                  <p className="text-xs text-orange-600 font-semibold mb-4">Save AED 21</p>
                  <a href="/checkout" className="block w-full bg-emerald-600 hover:bg-emerald-700 text-white py-3 rounded-full font-semibold transition-colors">
                    Order Now
                  </a>
                </div>
              </div>

              {/* Most Popular */}
              <div className="bg-emerald-600 text-white rounded-2xl p-6 transform scale-105 shadow-2xl relative">
                <div className="absolute -top-3 -right-3 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                  20% OFF
                </div>
                <div className="bg-yellow-400 text-gray-900 text-xs font-bold px-3 py-1 rounded-full inline-block mb-4">
                  MOST POPULAR
                </div>
                <div className="text-center">
                  <h3 className="text-xl font-bold mb-2">Best Value</h3>
                  <p className="text-emerald-100 mb-4">Recommended</p>
                  <div className="h-32 flex items-center justify-center mb-6">
                    <div className="flex -space-x-4">
                      <Image 
                        src="/beargummies.png" 
                        alt="2 Bottles" 
                        width={100} 
                        height={100} 
                        className="object-contain"
                      />
                      <Image 
                        src="/beargummies.png" 
                        alt="2 Bottles" 
                        width={100} 
                        height={100} 
                        className="object-contain"
                      />
                    </div>
                  </div>
                  <div className="mb-2">
                    <span className="text-lg text-emerald-200 line-through mr-2">AED 424</span>
                    <div className="text-3xl font-bold">AED 339</div>
                  </div>
                  <p className="text-sm text-emerald-100 mb-2">2 bottles • 60-day supply</p>
                  <p className="text-xs mb-4 font-semibold text-yellow-300">Save AED 85</p>
                  <a href="/checkout" className="block w-full bg-white hover:bg-gray-100 text-emerald-600 py-3 rounded-full font-semibold transition-colors">
                    Order Best Deal
                  </a>
                </div>
              </div>

              {/* Premium */}
              <div className="bg-white rounded-2xl p-6 border border-gray-200 hover:shadow-xl transition-shadow relative">
                <div className="absolute -top-3 -right-3 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                  30% OFF
                </div>
                <div className="text-center">
                  <h3 className="text-xl font-bold mb-2">Premium</h3>
                  <p className="text-gray-600 mb-4">Maximum savings</p>
                  <div className="h-32 flex items-center justify-center mb-6">
                    <div className="flex -space-x-6">
                      <Image 
                        src="/beargummies.png" 
                        alt="3 Bottles" 
                        width={80} 
                        height={80} 
                        className="object-contain"
                      />
                      <Image 
                        src="/beargummies.png" 
                        alt="3 Bottles" 
                        width={80} 
                        height={80} 
                        className="object-contain z-10"
                      />
                      <Image 
                        src="/beargummies.png" 
                        alt="3 Bottles" 
                        width={80} 
                        height={80} 
                        className="object-contain"
                      />
                    </div>
                  </div>
                  <div className="mb-2">
                    <span className="text-lg text-gray-400 line-through mr-2">AED 684</span>
                    <div className="text-3xl font-bold text-emerald-600">AED 479</div>
                  </div>
                  <p className="text-sm text-gray-500 mb-2">3 bottles • 90-day supply</p>
                  <p className="text-xs text-red-600 font-semibold mb-4">Save AED 205</p>
                  <a href="/checkout" className="block w-full bg-emerald-600 hover:bg-emerald-700 text-white py-3 rounded-full font-semibold transition-colors">
                    Order Now
                  </a>
                </div>
              </div>
            </div>

            {/* Trust Badges */}
            <div className="flex flex-wrap justify-center gap-6 mt-12">
              <div className="flex items-center gap-2 text-gray-600">
                <svg className="w-5 h-5 text-emerald-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-sm font-medium">60-Day Guarantee</span>
              </div>
              <div className="flex items-center gap-2 text-gray-600">
                <svg className="w-5 h-5 text-emerald-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-sm font-medium">Secure Checkout</span>
              </div>
              <div className="flex items-center gap-2 text-gray-600">
                <svg className="w-5 h-5 text-emerald-500" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M8 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM15 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
                  <path d="M3 4a1 1 0 00-1 1v10a1 1 0 001 1h1.05a2.5 2.5 0 014.9 0H10a1 1 0 001-1V5a1 1 0 00-1-1H3zM14 7a1 1 0 00-1 1v6.05A2.5 2.5 0 0115.95 16H17a1 1 0 001-1v-5a1 1 0 00-.293-.707l-2-2A1 1 0 0015 7h-1z" />
                </svg>
                <span className="text-sm font-medium">Fast Shipping</span>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section id="benefits" className="py-16 md:py-24 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Life-Changing Benefits</h2>
              <p className="text-lg text-gray-600">Experience the transformation thousands are raving about</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {[
                {
                  icon: (
                    <svg className="w-8 h-8 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                  ),
                  title: "Instant Calm",
                  description: "Feel tension melt away within 30-60 minutes"
                },
                {
                  icon: (
                    <svg className="w-8 h-8 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                    </svg>
                  ),
                  title: "Deep Sleep",
                  description: "Fall asleep faster, stay asleep longer"
                },
                {
                  icon: (
                    <svg className="w-8 h-8 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  ),
                  title: "Natural Energy",
                  description: "Wake up refreshed without grogginess"
                },
                {
                  icon: (
                    <svg className="w-8 h-8 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  ),
                  title: "Laser Focus",
                  description: "Clear mind and improved concentration"
                },
                {
                  icon: (
                    <svg className="w-8 h-8 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  ),
                  title: "Stress Resilience",
                  description: "Handle daily challenges with ease"
                },
                {
                  icon: (
                    <svg className="w-8 h-8 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  ),
                  title: "Better Mood",
                  description: "Feel positive and balanced throughout the day"
                }
              ].map((benefit, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-emerald-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    {benefit.icon}
                  </div>
                  <h3 className="font-bold text-lg mb-2">{benefit.title}</h3>
                  <p className="text-gray-600 text-sm">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Ingredients Section */}
        <section id="ingredients" className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Pure, Powerful Ingredients</h2>
                <p className="text-lg text-gray-600">Science-backed formula for real results</p>
              </div>

              <div className="bg-gray-50 rounded-2xl p-8 shadow-lg">
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="font-bold text-xl mb-4 text-emerald-600">KSM-66® Ashwagandha (600mg)</h3>
                    <p className="text-gray-700 mb-4">
                      The gold standard of Ashwagandha extracts. Clinically proven to:
                    </p>
                    <ul className="space-y-2 text-gray-600">
                      <li className="flex items-start">
                        <span className="text-emerald-500 mr-2">✓</span>
                        Reduce cortisol levels by up to 30%
                      </li>
                      <li className="flex items-start">
                        <span className="text-emerald-500 mr-2">✓</span>
                        Improve sleep quality in 8 weeks
                      </li>
                      <li className="flex items-start">
                        <span className="text-emerald-500 mr-2">✓</span>
                        Enhance focus and mental clarity
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="font-bold text-xl mb-4 text-emerald-600">What Makes Us Different</h3>
                    <div className="space-y-3">
                      <div className="flex items-start">
                        <div className="w-8 h-8 bg-emerald-100 rounded-full flex items-center justify-center flex-shrink-0 mr-3">
                          <span className="text-emerald-600 font-bold text-sm">1</span>
                        </div>
                        <div>
                          <p className="font-semibold">100% Sugar-Free</p>
                          <p className="text-sm text-gray-600">No crashes, no cavities</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <div className="w-8 h-8 bg-emerald-100 rounded-full flex items-center justify-center flex-shrink-0 mr-3">
                          <span className="text-emerald-600 font-bold text-sm">2</span>
                        </div>
                        <div>
                          <p className="font-semibold">Vegan & Plant-Based</p>
                          <p className="text-sm text-gray-600">No gelatin or animal products</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <div className="w-8 h-8 bg-emerald-100 rounded-full flex items-center justify-center flex-shrink-0 mr-3">
                          <span className="text-emerald-600 font-bold text-sm">3</span>
                        </div>
                        <div>
                          <p className="font-semibold">3rd Party Tested</p>
                          <p className="text-sm text-gray-600">Verified purity and potency</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Reviews Section */}
        <section id="reviews" className="py-16 md:py-24 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Customers Are Saying</h2>
              <div className="flex items-center justify-center gap-2 text-lg">
                <div className="flex text-yellow-400">
                  {"★★★★★".split("").map((star, i) => (
                    <span key={i}>{star}</span>
                  ))}
                </div>
                <span className="font-semibold">4.8/5</span>
                <span className="text-gray-600">from 3,000+ reviews</span>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {[
                {
                  name: "Sarah M.",
                  role: "Verified Buyer",
                  review: "I was skeptical, but these actually work! I feel calmer during the day and sleep so much better.",
                  rating: 5,
                  avatar: "/avatar/avatar1.png",
                  experienceImage: "/ash1.jpg"
                },
                {
                  name: "Ahmed K.",
                  role: "Verified Buyer",
                  review: "No more afternoon crashes. I have steady energy all day and my stress levels are way down.",
                  rating: 5,
                  avatar: "/avatar/avatar2.png",
                  experienceImage: "/ash2.jpg"
                },
                {
                  name: "Priya R.",
                  role: "Verified Buyer",
                  review: "Finally something that helps with anxiety without making me drowsy. Game changer!",
                  rating: 5,
                  avatar: "/avatar/avatar3.png",
                  experienceImage: "/ash3.jpg"
                }
              ].map((review, index) => (
                <div key={index} className="bg-white rounded-xl p-6 shadow-lg">
                  <div className="flex items-center mb-4">
                    <Image
                      src={review.avatar}
                      alt={review.name}
                      width={50}
                      height={50}
                      className="w-12 h-12 rounded-full object-cover mr-3"
                    />
                    <div>
                      <p className="font-semibold">{review.name}</p>
                      <p className="text-sm text-gray-500">{review.role}</p>
                    </div>
                  </div>
                  <div className="flex text-yellow-400 mb-3">
                    {Array(review.rating).fill("★").map((star, i) => (
                      <span key={i}>{star}</span>
                    ))}
                  </div>
                  <p className="text-gray-700 mb-4">&ldquo;{review.review}&rdquo;</p>
                  <div className="mt-4">
                    <Image
                      src={review.experienceImage}
                      alt={`${review.name}'s experience with Zeinglow`}
                      width={300}
                      height={200}
                      className="w-full h-48 object-cover rounded-lg"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section id="faq" className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
                Frequently Asked Questions
              </h2>

              <div className="space-y-4">
                {[
                  {
                    question: "How quickly will I see results?",
                    answer: "Most customers report feeling calmer within the first week. For best results, we recommend consistent use for at least 30 days."
                  },
                  {
                    question: "Is this safe to take daily?",
                    answer: "Yes! Ashwagandha is a natural adaptogen that's been used safely for thousands of years. Our formula is non-habit forming and safe for daily use."
                  },
                  {
                    question: "What if it doesn't work for me?",
                    answer: "We offer a 60-day money-back guarantee. If you're not completely satisfied, we'll refund your purchase - no questions asked."
                  },
                  {
                    question: "Can I take this with other supplements?",
                    answer: "Generally yes, but we recommend consulting with your healthcare provider if you're taking medications or have health conditions."
                  },
                  {
                    question: "How many gummies should I take?",
                    answer: "Take 2 gummies daily. You can take them any time, but many prefer taking them in the evening for better sleep."
                  }
                ].map((faq, index) => (
                  <details key={index} className="bg-gray-50 rounded-xl p-6 cursor-pointer group">
                    <summary className="font-semibold flex items-center justify-between">
                      {faq.question}
                      <span className="text-gray-400 group-open:rotate-180 transition-transform">▼</span>
                    </summary>
                    <p className="mt-4 text-gray-600">{faq.answer}</p>
                  </details>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="py-16 md:py-24 bg-gradient-to-br from-emerald-600 to-emerald-700 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Transform Your Life?
            </h2>
            <p className="text-xl mb-8 text-emerald-100 max-w-2xl mx-auto">
              Join thousands who&apos;ve discovered the power of natural stress relief. 
              60-day guarantee means you have nothing to lose.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/checkout"
                    onClick={() => {
                      MetaCAPI.trackAddToCart({}, 189, 'AED', 'Ashwagandha Gummies');
                    }}
                className="inline-flex items-center justify-center bg-white hover:bg-gray-100 text-emerald-600 px-8 py-4 rounded-full font-bold text-lg transition-all transform hover:scale-105 shadow-xl"
              >
                Get Your Zeinglow Today
              </a>
              <button
                onClick={() => smoothScrollTo('pricing')}
                className="inline-flex items-center justify-center border-2 border-white text-white hover:bg-white hover:text-emerald-600 px-8 py-4 rounded-full font-bold text-lg transition-all"
              >
                View Bundles & Save
              </button>
            </div>
            <p className="mt-8 text-emerald-100">
              🔒 Secure checkout • 📦 Fast shipping • ✅ 60-day guarantee
            </p>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-8 bg-gray-900 text-white">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <p className="text-sm text-gray-400">
                © {new Date().getFullYear()} Zeinglow. All rights reserved.
              </p>
              <div className="flex gap-6 mt-4 md:mt-0">
                <a href="/privacy" className="text-sm text-gray-400 hover:text-white">Privacy Policy</a>
                <a href="/terms" className="text-sm text-gray-400 hover:text-white">Terms of Service</a>
                <a href="/contact" className="text-sm text-gray-400 hover:text-white">Contact</a>
              </div>
            </div>
          </div>
        </footer>

        {/* Mobile Sticky CTA */}
        <div className="fixed bottom-0 left-0 right-0 p-4 bg-white border-t md:hidden z-40">
          <a
            href="/checkout"
                    onClick={() => {
                      MetaCAPI.trackAddToCart({}, 189, 'AED', 'Ashwagandha Gummies');
                    }}
            className="block w-full bg-emerald-600 hover:bg-emerald-700 text-white text-center py-3 rounded-full font-semibold"
          >
            Get Zeinglow Now - AED 189
          </a>
        </div>
      </div>
    </>
  );
}
