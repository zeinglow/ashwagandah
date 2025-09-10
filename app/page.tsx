"use client";

import Head from "next/head";
import Image from "next/image";
import { useEffect, useState } from "react";
import { MetaCAPI } from "@/lib/meta-capi-client";

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    
    // Track ViewContent event with CAPI (includes Pixel with deduplication)
    MetaCAPI.trackViewContent({}, 'Ashwagandha Gummies', 'Health Supplements');
    
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <Head>
        <title>Zeinglow Ashwagandha Gummies - Natural Stress Relief & Better Sleep</title>
        <meta
          name="description"
          content="Premium sugar-free Ashwagandha gummies for natural stress relief, better sleep, and daily calm. Vegan, plant-based formula with KSM-66®. 60-day guarantee."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="https://zeinglow.com" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Zeinglow Ashwagandha Gummies - Natural Stress Relief" />
        <meta property="og:description" content="Transform stress into calm with premium sugar-free Ashwagandha gummies. 100% vegan, clinically studied ingredients." />
        <meta property="og:type" content="product" />
        
        {/* Preload critical images */}
        <link rel="preload" as="image" href="/product.png" />
        <link rel="preload" as="image" href="/logozeinglow.png" />
      </Head>

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
                <a href="#benefits" className="text-gray-700 hover:text-emerald-600 transition-colors font-medium">
                  Benefits
                </a>
                <a href="#ingredients" className="text-gray-700 hover:text-emerald-600 transition-colors font-medium">
                  Ingredients
                </a>
                <a href="#reviews" className="text-gray-700 hover:text-emerald-600 transition-colors font-medium">
                  Reviews
                </a>
                <a href="#faq" className="text-gray-700 hover:text-emerald-600 transition-colors font-medium">
                  FAQ
                </a>
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
                  <a href="#benefits" className="block py-2 text-gray-700 hover:text-emerald-600">Benefits</a>
                  <a href="#ingredients" className="block py-2 text-gray-700 hover:text-emerald-600">Ingredients</a>
                  <a href="#reviews" className="block py-2 text-gray-700 hover:text-emerald-600">Reviews</a>
                  <a href="#faq" className="block py-2 text-gray-700 hover:text-emerald-600">FAQ</a>
                </div>
              </div>
            )}
          </div>
        </header>

        {/* Hero Section - Simplified and Optimized */}
        <section className="pt-24 md:pt-32 pb-16 md:pb-24 overflow-hidden">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
              {/* Content */}
              <div className="order-2 md:order-1">
                {/* Trust Badges */}
                <div className="flex flex-wrap gap-2 mb-6">
                  <span className="inline-flex items-center px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-sm font-medium">
                    ✓ 100% Sugar-Free
                  </span>
                  <span className="inline-flex items-center px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-sm font-medium">
                    ✓ Vegan & Plant-Based
                  </span>
                </div>

                {/* Headline */}
                <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
                  Find Your Calm,
                  <span className="text-emerald-600 block">Sleep Deeply Tonight</span>
                </h1>

                {/* Subheadline */}
                <p className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed">
                  Premium Ashwagandha gummies that naturally melt away stress and tension. 
                  <span className="font-semibold text-gray-800"> Wake up refreshed, not groggy.</span>
                </p>

                {/* Benefits List */}
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-emerald-500 mr-3 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700">Feel the difference in just 7 days or less</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-emerald-500 mr-3 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700">Sugar-free & gluten-free - guilt-free wellness</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-emerald-500 mr-3 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700">Risk-free with our 60-day happiness promise</span>
                  </li>
                </ul>

                {/* Single CTA Button */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href="/checkout"
                    onClick={() => {
                      MetaCAPI.trackAddToCart({}, 189, 'AED', 'Ashwagandha Gummies');
                    }}
                    className="inline-flex items-center justify-center bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all transform hover:scale-105 shadow-xl"
                  >
                    Get Started - AED 189
                  </a>
                </div>

                {/* Social Proof */}
                <div className="mt-8 flex items-center space-x-6">
                  <div className="flex -space-x-2">
                    {[1,2,3,4,5].map((i) => (
                      <Image
                        key={i}
                        src={`/avatar/avatar${i}.png`}
                        alt={`Customer ${i}`}
                        width={40}
                        height={40}
                        className="w-10 h-10 rounded-full border-2 border-white object-cover"
                      />
                    ))}
                  </div>
                  <p className="text-sm text-gray-600">
                    <span className="font-semibold text-gray-900">3,000+ happy customers</span> feeling calmer
                  </p>
                </div>
              </div>

              {/* Product Image */}
              <div className="order-1 md:order-2 relative">
                <div className="relative mx-auto max-w-md">
                  <div className="absolute inset-0 bg-gradient-to-br from-emerald-200 to-emerald-400 rounded-full blur-3xl opacity-30" />
                  <Image
                    src="/product.png"
                    alt="Zeinglow Ashwagandha Gummies"
                    width={500}
                    height={500}
                    className="relative z-10 w-full h-auto"
                    priority
                  />
                  <div className="absolute -top-4 -right-4 bg-red-500 text-white px-4 py-2 rounded-full text-sm font-bold animate-pulse">
                    Limited Stock
                  </div>
                </div>
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
            </div>

            <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {/* Starter */}
              <div className="bg-white rounded-2xl p-6 border border-gray-200 hover:shadow-xl transition-shadow">
                <div className="text-center">
                  <h3 className="text-xl font-bold mb-2">Starter</h3>
                  <p className="text-gray-600 mb-4">Try it out</p>
                  <div className="h-32 flex items-center justify-center mb-6">
                    <Image 
                      src="/product.png" 
                      alt="1 Bottle" 
                      width={100} 
                      height={100} 
                      className="object-contain"
                    />
                  </div>
                  <div className="text-3xl font-bold mb-1">AED 189</div>
                  <p className="text-sm text-gray-500 mb-6">1 bottle • 30-day supply</p>
                  <a href="/checkout" className="block w-full bg-gray-800 hover:bg-gray-900 text-white py-3 rounded-full font-semibold transition-colors">
                    Select
                  </a>
                </div>
              </div>

              {/* Most Popular */}
              <div className="bg-emerald-600 text-white rounded-2xl p-6 transform scale-105 shadow-2xl">
                <div className="bg-yellow-400 text-gray-900 text-xs font-bold px-3 py-1 rounded-full inline-block mb-4">
                  MOST POPULAR
                </div>
                <div className="text-center">
                  <h3 className="text-xl font-bold mb-2">Best Value</h3>
                  <p className="text-emerald-100 mb-4">Recommended</p>
                  <div className="h-32 flex items-center justify-center mb-6">
                    <div className="flex -space-x-4">
                      <Image 
                        src="/product.png" 
                        alt="2 Bottles" 
                        width={100} 
                        height={100} 
                        className="object-contain"
                      />
                      <Image 
                        src="/product.png" 
                        alt="2 Bottles" 
                        width={100} 
                        height={100} 
                        className="object-contain"
                      />
                    </div>
                  </div>
                  <div className="text-3xl font-bold mb-1">AED 339</div>
                  <p className="text-sm text-emerald-100 mb-6">2 bottles • 60-day supply</p>
                  <p className="text-xs mb-4 font-semibold">Save AED 39</p>
                  <a href="/checkout" className="block w-full bg-white hover:bg-gray-100 text-emerald-600 py-3 rounded-full font-semibold transition-colors">
                    Select Best Deal
                  </a>
                </div>
              </div>

              {/* Premium */}
              <div className="bg-white rounded-2xl p-6 border border-gray-200 hover:shadow-xl transition-shadow">
                <div className="text-center">
                  <h3 className="text-xl font-bold mb-2">Premium</h3>
                  <p className="text-gray-600 mb-4">Maximum savings</p>
                  <div className="h-32 flex items-center justify-center mb-6">
                    <div className="flex -space-x-6">
                      <Image 
                        src="/product.png" 
                        alt="3 Bottles" 
                        width={80} 
                        height={80} 
                        className="object-contain"
                      />
                      <Image 
                        src="/product.png" 
                        alt="3 Bottles" 
                        width={80} 
                        height={80} 
                        className="object-contain z-10"
                      />
                      <Image 
                        src="/product.png" 
                        alt="3 Bottles" 
                        width={80} 
                        height={80} 
                        className="object-contain"
                      />
                    </div>
                  </div>
                  <div className="text-3xl font-bold mb-1">AED 479</div>
                  <p className="text-sm text-gray-500 mb-6">3 bottles • 90-day supply</p>
                  <p className="text-xs text-emerald-600 font-semibold mb-4">Save AED 88</p>
                  <a href="/checkout" className="block w-full bg-gray-800 hover:bg-gray-900 text-white py-3 rounded-full font-semibold transition-colors">
                    Select
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
                  image: "/ash1.jpg"
                },
                {
                  name: "Ahmed K.",
                  role: "Verified Buyer",
                  review: "No more afternoon crashes. I have steady energy all day and my stress levels are way down.",
                  rating: 5,
                  image: "/ash2.jpg"
                },
                {
                  name: "Priya R.",
                  role: "Verified Buyer",
                  review: "Finally something that helps with anxiety without making me drowsy. Game changer!",
                  rating: 5,
                  image: "/ash3.jpg"
                }
              ].map((review, index) => (
                <div key={index} className="bg-white rounded-xl p-6 shadow-lg">
                  <div className="flex items-center mb-4">
                    <Image
                      src={review.image}
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
                  <p className="text-gray-700">&ldquo;{review.review}&rdquo;</p>
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
              <a
                href="#pricing"
                className="inline-flex items-center justify-center border-2 border-white text-white hover:bg-white hover:text-emerald-600 px-8 py-4 rounded-full font-bold text-lg transition-all"
              >
                View Bundles & Save
              </a>
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
