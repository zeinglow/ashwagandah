"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { MetaCAPI } from "@/lib/meta-capi-client";

export default function AshwagandhaLandingPage() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [timeLeft, setTimeLeft] = useState({
    hours: 23,
    minutes: 59,
    seconds: 59,
  });

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);

    // Track ViewContent event
    MetaCAPI.trackViewContent({}, "Ashwagandha Sleep Gummies", "Health Supplements");

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Countdown timer
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        const totalSeconds = prev.hours * 3600 + prev.minutes * 60 + prev.seconds;
        if (totalSeconds <= 0) {
          return { hours: 23, minutes: 59, seconds: 59 };
        }
        const newTotal = totalSeconds - 1;
        return {
          hours: Math.floor(newTotal / 3600),
          minutes: Math.floor((newTotal % 3600) / 60),
          seconds: newTotal % 60,
        };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const smoothScrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      {/* Custom Styles */}
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700&family=Raleway:wght@300;400;500;600;700&display=swap');
        
        .font-playfair { font-family: 'Playfair Display', serif; }
        .font-raleway { font-family: 'Raleway', sans-serif; }
        
        .gradient-text {
          background: linear-gradient(135deg, #d4af37 0%, #f4e4bc 50%, #d4af37 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        
        .gradient-gold {
          background: linear-gradient(135deg, #d4af37 0%, #f4e4bc 50%, #d4af37 100%);
        }
        
        .gradient-primary {
          background: linear-gradient(165deg, #4a3c5a 0%, #362c44 40%, #2a2035 100%);
        }
        
        .glass-card {
          background: rgba(255, 255, 255, 0.9);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.5);
        }
        
        .bg-cream { background-color: #faf8f5; }
        .text-gold { color: #d4af37; }
        .text-primary { color: #4a3c5a; }
        .text-primary-dark { color: #2a2035; }
        .bg-primary { background-color: #4a3c5a; }
        .bg-primary-dark { background-color: #2a2035; }
        .border-primary { border-color: #4a3c5a; }
        
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        
        .animate-float-slow {
          animation: float 8s ease-in-out infinite;
        }
        
        .animate-pulse-glow {
          animation: pulse-glow 4s ease-in-out infinite;
        }
        
        .animate-spin-slow {
          animation: spin 20s linear infinite;
        }
        
        .animate-bounce-slow {
          animation: bounce 3s ease-in-out infinite;
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-20px); }
        }
        
        @keyframes pulse-glow {
          0%, 100% { opacity: 0.5; transform: scale(1); }
          50% { opacity: 0.8; transform: scale(1.05); }
        }
        
        @keyframes spin {
          from { transform: translate(-50%, -50%) rotate(0deg); }
          to { transform: translate(-50%, -50%) rotate(360deg); }
        }
        
        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        
        html { scroll-behavior: smooth; }
        
        ::-webkit-scrollbar { width: 10px; }
        ::-webkit-scrollbar-track { background: #faf8f5; }
        ::-webkit-scrollbar-thumb { background: #4a3c5a; border-radius: 5px; }
      `}</style>

      <div dir="ltr" className="font-raleway text-left">
        {/* Navigation */}
        <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled ? 'bg-[#2a2035]/95 backdrop-blur-lg shadow-lg' : ''}`}>
          <div className="max-w-7xl mx-auto px-6 py-4">
            <div className="flex items-center justify-between">
              {/* Logo */}
              <Link href="/ahswagandha" className="flex items-center group">
                <Image
                  src="/logo-zeinglow-white.png"
                  alt="ZeinGlow"
                  width={150}
                  height={45}
                  className="h-10 w-auto group-hover:scale-105 transition-transform duration-300"
                />
              </Link>

              {/* Desktop Menu */}
              <div className="hidden md:flex items-center gap-8">
                <button onClick={() => smoothScrollTo('benefits')} className="text-white/80 hover:text-[#d4af37] transition-colors duration-300 font-medium">Benefits</button>
                <button onClick={() => smoothScrollTo('pricing')} className="text-white/80 hover:text-[#d4af37] transition-colors duration-300 font-medium">Pricing</button>
                <button onClick={() => smoothScrollTo('testimonials')} className="text-white/80 hover:text-[#d4af37] transition-colors duration-300 font-medium">Reviews</button>
                <Link 
                  href="/ahswagandha/checkout"
                  onClick={() => MetaCAPI.trackAddToCart({}, 249, 'AED', 'Ashwagandha Sleep Gummies')}
                  className="px-6 py-3 gradient-gold text-[#2a2035] font-bold rounded-full hover:shadow-lg hover:shadow-[#d4af37]/30 hover:-translate-y-1 transition-all duration-300"
                >
                  Shop Now
                </Link>
              </div>

              {/* Mobile Menu Button */}
              <button 
                className="md:hidden text-white text-2xl"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              >
                <i className={`fas ${isMobileMenuOpen ? 'fa-times' : 'fa-bars'}`} />
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {isMobileMenuOpen && (
            <div className="md:hidden bg-[#2a2035]/95 backdrop-blur-lg">
              <div className="px-6 py-4 flex flex-col gap-4">
                <button onClick={() => smoothScrollTo('benefits')} className="text-white/80 hover:text-[#d4af37] transition-colors py-2 text-left">Benefits</button>
                <button onClick={() => smoothScrollTo('pricing')} className="text-white/80 hover:text-[#d4af37] transition-colors py-2 text-left">Pricing</button>
                <button onClick={() => smoothScrollTo('testimonials')} className="text-white/80 hover:text-[#d4af37] transition-colors py-2 text-left">Reviews</button>
                <Link href="/ahswagandha/checkout" className="px-6 py-3 gradient-gold text-[#2a2035] font-bold rounded-full text-center mt-2">Shop Now</Link>
              </div>
            </div>
          )}
        </nav>

        {/* Hero Section */}
        <section className="min-h-screen gradient-primary relative flex items-center overflow-hidden">
          {/* Animated Background Elements */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-20 left-10 w-72 h-72 bg-[#d4af37]/10 rounded-full blur-3xl animate-pulse-glow" />
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#4a3c5a]/20 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: '0.2s' }} />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-[#d4af37]/10 rounded-full animate-spin-slow" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-[#d4af37]/5 rounded-full animate-spin-slow" style={{ animationDirection: 'reverse' }} />
          </div>

          {/* Floating Particles */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-[#d4af37]/40 rounded-full animate-float" />
            <div className="absolute top-1/3 right-1/4 w-3 h-3 bg-[#d4af37]/30 rounded-full animate-float-slow" />
            <div className="absolute bottom-1/4 left-1/3 w-2 h-2 bg-[#d4af37]/50 rounded-full animate-float" style={{ animationDelay: '0.3s' }} />
            <div className="absolute top-2/3 right-1/3 w-4 h-4 bg-[#d4af37]/20 rounded-full animate-float-slow" style={{ animationDelay: '0.5s' }} />
          </div>

          <div className="max-w-7xl mx-auto px-6 py-32 grid lg:grid-cols-2 gap-12 lg:gap-20 items-center relative z-10">
            {/* Hero Content */}
            <div className="text-center lg:text-left">
              {/* Hook Question */}
              <p className="text-[#d4af37] text-sm md:text-base uppercase tracking-[0.3em] mb-6 animate-fade-in-up">
                Are You Tired of Tossing &amp; Turning?
              </p>

              {/* Main Headline */}
              <h1 className="font-playfair text-4xl md:text-5xl lg:text-6xl text-white leading-tight mb-6">
                Sleep Deeply, Wake Up <span className="gradient-text">Energized</span>, and Live <span className="gradient-text">Pain-Free</span>
              </h1>

              {/* Subtitle */}
              <p className="text-white/70 text-lg md:text-xl font-light mb-8 max-w-xl mx-auto lg:mx-0">
                Discover the ancient power of Ashwagandha in a delicious, modern gummy. Transform your nights and revolutionize your days.
              </p>

              {/* Trust Badges */}
              <div className="flex flex-wrap justify-center lg:justify-start gap-6 mb-10">
                <div className="flex items-center gap-2 text-white/80">
                  <i className="fas fa-leaf text-[#d4af37]" />
                  <span className="text-sm">100% Natural</span>
                </div>
                <div className="flex items-center gap-2 text-white/80">
                  <i className="fas fa-flask text-[#d4af37]" />
                  <span className="text-sm">Clinically Studied</span>
                </div>
                <div className="flex items-center gap-2 text-white/80">
                  <i className="fas fa-seedling text-[#d4af37]" />
                  <span className="text-sm">Non-GMO</span>
                </div>
              </div>

              {/* CTA Button */}
              <div>
                <Link
                  href="/ahswagandha/checkout"
                  onClick={() => MetaCAPI.trackAddToCart({}, 249, 'AED', 'Ashwagandha Sleep Gummies')}
                  className="inline-flex items-center gap-3 px-8 py-4 gradient-gold text-[#2a2035] font-bold text-lg rounded-full shadow-xl shadow-[#d4af37]/30 hover:shadow-2xl hover:shadow-[#d4af37]/40 hover:-translate-y-2 transition-all duration-300 group"
                >
                  <span>Secure Your Best Sleep Now</span>
                  <i className="fas fa-arrow-right group-hover:translate-x-1 transition-transform" />
                </Link>
                <p className="text-white/50 text-sm mt-4">
                  <i className="fas fa-bolt text-[#d4af37] mr-1" />
                  Limited-Time Offers Available
                </p>
              </div>
            </div>

            {/* Hero Image */}
            <div className="relative">
              {/* Glow Effect Behind Product */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-80 h-80 bg-[#d4af37]/20 rounded-full blur-3xl animate-pulse-glow" />
              </div>

              {/* Product Image */}
              <div className="relative z-10 animate-float">
                <Image
                  src="/ash.jpg"
                  alt="ZeinGlow Ashwagandha Gummies"
                  width={500}
                  height={600}
                  className="w-full max-w-md mx-auto drop-shadow-2xl rounded-3xl"
                  priority
                />
                
                {/* Floating Badge */}
                <div className="absolute -top-4 -right-4 bg-white rounded-2xl p-4 shadow-xl animate-bounce-slow">
                  <div className="flex items-center gap-2">
                    <div className="text-[#d4af37] text-2xl">
                      <i className="fas fa-star" />
                    </div>
                    <div>
                      <p className="font-bold text-[#4a3c5a]">4.9/5</p>
                      <p className="text-xs text-gray-500">2,000+ Reviews</p>
                    </div>
                  </div>
                </div>

                {/* Floating Badge 2 */}
                <div className="absolute -bottom-4 -left-4 bg-[#4a3c5a] text-white rounded-2xl p-4 shadow-xl">
                  <p className="text-[#d4af37] font-bold">Best Seller</p>
                  <p className="text-xs text-white/70">UAE 2024</p>
                </div>
              </div>
            </div>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
            <button onClick={() => smoothScrollTo('pain-points')} className="text-white/50 hover:text-[#d4af37] transition-colors">
              <i className="fas fa-chevron-down text-2xl" />
            </button>
          </div>
        </section>

        {/* Pain Points Section */}
        <section id="pain-points" className="py-24 bg-cream relative overflow-hidden">
          {/* Decorative Elements */}
          <div className="absolute top-0 left-0 w-full h-1 gradient-gold" />
          <div className="absolute top-20 right-0 w-72 h-72 bg-[#4a3c5a]/5 rounded-full blur-3xl" />
          <div className="absolute bottom-20 left-0 w-96 h-96 bg-[#d4af37]/5 rounded-full blur-3xl" />

          <div className="max-w-6xl mx-auto px-6 relative z-10">
            {/* Section Header */}
            <div className="text-center mb-16">
              <p className="text-[#d4af37] uppercase tracking-[0.3em] text-sm mb-4">The Problem</p>
              <h2 className="font-playfair text-4xl md:text-5xl text-[#4a3c5a] mb-6">
                When Sleep Doesn&apos;t Feel Like <span className="gradient-text">Rest</span>
              </h2>
              <div className="w-24 h-1 gradient-gold mx-auto rounded-full" />
            </div>

            {/* Pain Points Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { icon: 'fa-bed', title: "Can't Fall Asleep?", desc: "Struggling to fall asleep even when you feel completely exhausted? Your mind keeps racing while your body begs for rest." },
                { icon: 'fa-moon', title: "Waking Up at Night?", desc: "Waking up multiple times throughout the night, feeling anxious or stressed, never reaching deep restorative sleep." },
                { icon: 'fa-user-injured', title: "Morning Stiffness?", desc: "Starting your day with stiffness and unexplained body aches? Your mornings feel like a battle before they even begin." },
                { icon: 'fa-coffee', title: "Coffee Dependent?", desc: "Feeling like you need 5 cups of coffee just to feel awake? That's not energy—that's survival mode." },
                { icon: 'fa-brain', title: "Constant Stress?", desc: "Carrying the weight of daily tension into your bed? Stress shouldn't follow you into your sanctuary of rest." },
              ].map((item, index) => (
                <div key={index} className="group bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100">
                  <div className="w-16 h-16 rounded-2xl bg-[#4a3c5a]/10 flex items-center justify-center mb-6 group-hover:bg-[#4a3c5a] group-hover:scale-110 transition-all duration-300">
                    <i className={`fas ${item.icon} text-2xl text-[#4a3c5a] group-hover:text-white transition-colors`} />
                  </div>
                  <h3 className="font-playfair text-xl text-[#4a3c5a] mb-3">{item.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{item.desc}</p>
                </div>
              ))}

              {/* Solution Teaser */}
              <div className="group bg-gradient-to-br from-[#4a3c5a] to-[#2a2035] rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 text-white">
                <div className="w-16 h-16 rounded-2xl bg-[#d4af37]/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-all duration-300">
                  <i className="fas fa-sparkles text-2xl text-[#d4af37]" />
                </div>
                <h3 className="font-playfair text-xl text-[#d4af37] mb-3">There&apos;s a Better Way</h3>
                <p className="text-white/80 leading-relaxed">What if one natural solution could address all of these problems? Keep reading to discover the answer.</p>
                <button onClick={() => smoothScrollTo('benefits')} className="inline-flex items-center gap-2 text-[#d4af37] mt-4 hover:gap-4 transition-all">
                  <span>See Solution</span>
                  <i className="fas fa-arrow-right" />
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section id="benefits" className="py-24 gradient-primary relative overflow-hidden">
          {/* Decorative Elements */}
          <div className="absolute inset-0">
            <div className="absolute top-1/4 left-0 w-96 h-96 bg-[#d4af37]/5 rounded-full blur-3xl" />
            <div className="absolute bottom-1/4 right-0 w-80 h-80 bg-[#4a3c5a]/10 rounded-full blur-3xl" />
          </div>

          <div className="max-w-7xl mx-auto px-6 relative z-10">
            {/* Section Header */}
            <div className="text-center mb-20">
              <p className="text-[#d4af37] uppercase tracking-[0.3em] text-sm mb-4">✨ The Natural Solution</p>
              <h2 className="font-playfair text-4xl md:text-5xl text-white mb-6">
                Introducing ZeinGlow <span className="gradient-text">Sleep &amp; Relax</span> Gummies
              </h2>
              <p className="text-white/70 text-lg max-w-2xl mx-auto">
                Harness the ancient wisdom of Ashwagandha, perfected for modern life. Four powerful benefits in one delicious gummy.
              </p>
              <div className="w-24 h-1 gradient-gold mx-auto rounded-full mt-8" />
            </div>

            {/* Benefits Grid */}
            <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
              {[
                { icon: 'fa-moon', title: 'Deep Restorative Sleep', desc: "Our high-potency Ashwagandha calms the nervous system, helping you transition smoothly into a deep, uninterrupted sleep cycle. Wake up feeling like you actually rested." },
                { icon: 'fa-bolt', title: 'Wake Up Fully Charged', desc: "Support your natural circadian rhythm to ensure you wake up feeling revitalized, alert, and ready to conquer your day—no caffeine crash required." },
                { icon: 'fa-spa', title: 'Pain and Tension Relief', desc: "Ashwagandha's powerful adaptogenic and anti-inflammatory properties soothe the body, reducing morning stiffness and discomfort naturally." },
                { icon: 'fa-heart', title: 'Stress & Anxiety Meltdown', desc: "Naturally lower cortisol levels (the stress hormone) to foster a state of blissful relaxation and peace before bedtime. Let go of the day's worries." },
              ].map((benefit, index) => (
                <div key={index} className="group relative">
                  <div className="absolute inset-0 gradient-gold rounded-3xl blur-xl opacity-0 group-hover:opacity-20 transition-opacity duration-500" />
                  <div className="relative glass-card rounded-3xl p-8 lg:p-10 hover:bg-white transition-all duration-500">
                    <div className="flex items-start gap-6">
                      <div className="w-20 h-20 rounded-2xl gradient-gold flex items-center justify-center flex-shrink-0 shadow-lg shadow-[#d4af37]/30 group-hover:scale-110 transition-transform duration-300">
                        <i className={`fas ${benefit.icon} text-3xl text-[#2a2035]`} />
                      </div>
                      <div>
                        <h3 className="font-playfair text-2xl text-[#4a3c5a] mb-3">{benefit.title}</h3>
                        <p className="text-gray-600 leading-relaxed">{benefit.desc}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA in Benefits */}
            <div className="text-center mt-16">
              <Link
                href="/ahswagandha/checkout"
                onClick={() => MetaCAPI.trackAddToCart({}, 249, 'AED', 'Ashwagandha Sleep Gummies')}
                className="inline-flex items-center gap-3 px-10 py-5 gradient-gold text-[#2a2035] font-bold text-lg rounded-full shadow-xl shadow-[#d4af37]/30 hover:shadow-2xl hover:shadow-[#d4af37]/40 hover:-translate-y-2 transition-all duration-300 group"
              >
                <span>Experience the Difference</span>
                <i className="fas fa-arrow-right group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section id="pricing" className="py-24 bg-cream relative overflow-hidden">
          {/* Decorative Elements */}
          <div className="absolute top-0 left-0 w-full h-1 gradient-gold" />
          <div className="absolute top-40 left-0 w-80 h-80 bg-[#4a3c5a]/5 rounded-full blur-3xl" />
          <div className="absolute bottom-40 right-0 w-96 h-96 bg-[#d4af37]/5 rounded-full blur-3xl" />

          <div className="max-w-7xl mx-auto px-6 relative z-10">
            {/* Section Header */}
            <div className="text-center mb-16">
              <p className="text-[#d4af37] uppercase tracking-[0.3em] text-sm mb-4">💰 Exclusive Savings</p>
              <h2 className="font-playfair text-4xl md:text-5xl text-[#4a3c5a] mb-6">
                Unlock Better Sleep for <span className="gradient-text">Less</span>
              </h2>
              <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                Choose your perfect bundle and start your journey to restful nights and energized mornings.
              </p>
              <div className="w-24 h-1 gradient-gold mx-auto rounded-full mt-8" />
            </div>

            {/* Countdown Timer */}
            <div className="max-w-2xl mx-auto mb-12">
              <div className="bg-[#4a3c5a] rounded-2xl p-6 text-center">
                <p className="text-[#d4af37] text-sm uppercase tracking-wider mb-2">⏰ Limited Time Offer Ends In</p>
                <div className="flex justify-center gap-4">
                  <div className="bg-[#2a2035] rounded-xl p-4 min-w-[80px]">
                    <span className="text-3xl font-bold text-white">{String(timeLeft.hours).padStart(2, '0')}</span>
                    <p className="text-white/60 text-xs mt-1">Hours</p>
                  </div>
                  <div className="bg-[#2a2035] rounded-xl p-4 min-w-[80px]">
                    <span className="text-3xl font-bold text-white">{String(timeLeft.minutes).padStart(2, '0')}</span>
                    <p className="text-white/60 text-xs mt-1">Minutes</p>
                  </div>
                  <div className="bg-[#2a2035] rounded-xl p-4 min-w-[80px]">
                    <span className="text-3xl font-bold text-white">{String(timeLeft.seconds).padStart(2, '0')}</span>
                    <p className="text-white/60 text-xs mt-1">Seconds</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Pricing Cards */}
            <div className="grid md:grid-cols-3 gap-8 lg:gap-10">
              {/* Starter Kit */}
              <div className="group relative">
                <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100 h-full flex flex-col">
                  <div className="text-center mb-8">
                    <h3 className="font-playfair text-2xl text-[#4a3c5a] mb-2">The Starter Kit</h3>
                    <p className="text-gray-500">1 Bottle</p>
                  </div>
                  <div className="text-center mb-8">
                    <div className="flex items-baseline justify-center gap-2">
                      <span className="font-playfair text-5xl font-bold text-[#4a3c5a]">249</span>
                      <span className="text-gray-500">AED</span>
                    </div>
                    <p className="text-gray-400 text-sm mt-2">One-time purchase</p>
                  </div>
                  <ul className="space-y-4 mb-8 flex-grow">
                    <li className="flex items-center gap-3">
                      <i className="fas fa-check text-[#d4af37]" />
                      <span className="text-gray-600">30-day supply</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <i className="fas fa-check text-[#d4af37]" />
                      <span className="text-gray-600">Premium Ashwagandha</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <i className="fas fa-check text-[#d4af37]" />
                      <span className="text-gray-600">Test the difference</span>
                    </li>
                  </ul>
                  <Link
                    href="/ahswagandha/checkout?bundle=1-bottle"
                    onClick={() => MetaCAPI.trackAddToCart({}, 249, 'AED', 'Ashwagandha Sleep Gummies')}
                    className="block w-full py-4 text-center border-2 border-[#4a3c5a] text-[#4a3c5a] font-bold rounded-full hover:bg-[#4a3c5a] hover:text-white transition-all duration-300"
                  >
                    Order 1 Bottle
                  </Link>
                </div>
              </div>

              {/* Best Value - Sleep Hero */}
              <div className="group relative">
                {/* Best Value Badge */}
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-20">
                  <div className="gradient-gold px-6 py-2 rounded-full shadow-lg">
                    <span className="text-[#2a2035] font-bold text-sm">⭐ BEST VALUE</span>
                  </div>
                </div>
                <div className="bg-gradient-to-b from-[#4a3c5a] to-[#2a2035] rounded-3xl p-8 shadow-2xl hover:-translate-y-2 transition-all duration-500 h-full flex flex-col ring-4 ring-[#d4af37]/30">
                  <div className="text-center mb-8">
                    <h3 className="font-playfair text-2xl text-[#d4af37] mb-2">The Sleep Hero</h3>
                    <p className="text-white/70">2 + 1 FREE!</p>
                  </div>
                  <div className="text-center mb-8">
                    <div className="flex items-baseline justify-center gap-2">
                      <span className="font-playfair text-5xl font-bold text-white">498</span>
                      <span className="text-white/70">AED</span>
                    </div>
                    <p className="text-[#d4af37] text-sm mt-2">
                      <span className="line-through text-white/50">747 AED</span> Save 249 AED!
                    </p>
                  </div>
                  <ul className="space-y-4 mb-8 flex-grow">
                    <li className="flex items-center gap-3">
                      <i className="fas fa-check text-[#d4af37]" />
                      <span className="text-white/90">90-day supply</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <i className="fas fa-check text-[#d4af37]" />
                      <span className="text-white/90">3 bottles total</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <i className="fas fa-check text-[#d4af37]" />
                      <span className="text-white/90">FREE Shipping UAE</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <i className="fas fa-gift text-[#d4af37]" />
                      <span className="text-[#d4af37] font-semibold">1 Bottle FREE!</span>
                    </li>
                  </ul>
                  <Link
                    href="/ahswagandha/checkout?bundle=2-bottles"
                    onClick={() => MetaCAPI.trackAddToCart({}, 498, 'AED', 'Ashwagandha Sleep Gummies')}
                    className="block w-full py-4 text-center gradient-gold text-[#2a2035] font-bold rounded-full shadow-lg shadow-[#d4af37]/30 hover:shadow-xl hover:shadow-[#d4af37]/40 transition-all duration-300"
                  >
                    Yes, I Want 3 Bottles!
                  </Link>
                </div>
              </div>

              {/* Family Pack */}
              <div className="group relative">
                <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100 h-full flex flex-col">
                  <div className="text-center mb-8">
                    <h3 className="font-playfair text-2xl text-[#4a3c5a] mb-2">The Family Pack</h3>
                    <p className="text-gray-500">3 + 1 FREE!</p>
                  </div>
                  <div className="text-center mb-8">
                    <div className="flex items-baseline justify-center gap-2">
                      <span className="font-playfair text-5xl font-bold text-[#4a3c5a]">747</span>
                      <span className="text-gray-500">AED</span>
                    </div>
                    <p className="text-[#d4af37] text-sm mt-2">
                      <span className="line-through text-gray-400">996 AED</span> HUGE Savings!
                    </p>
                  </div>
                  <ul className="space-y-4 mb-8 flex-grow">
                    <li className="flex items-center gap-3">
                      <i className="fas fa-check text-[#d4af37]" />
                      <span className="text-gray-600">120-day supply</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <i className="fas fa-check text-[#d4af37]" />
                      <span className="text-gray-600">4 bottles total</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <i className="fas fa-check text-[#d4af37]" />
                      <span className="text-gray-600">FREE Shipping UAE</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <i className="fas fa-gift text-[#d4af37]" />
                      <span className="text-[#d4af37] font-semibold">1 Bottle FREE!</span>
                    </li>
                  </ul>
                  <Link
                    href="/ahswagandha/checkout?bundle=3-bottles"
                    onClick={() => MetaCAPI.trackAddToCart({}, 747, 'AED', 'Ashwagandha Sleep Gummies')}
                    className="block w-full py-4 text-center border-2 border-[#4a3c5a] text-[#4a3c5a] font-bold rounded-full hover:bg-[#4a3c5a] hover:text-white transition-all duration-300"
                  >
                    Grab the 4-Pack Deal!
                  </Link>
                </div>
              </div>
            </div>

            {/* Stock Warning */}
            <div className="text-center mt-12">
              <div className="inline-flex items-center gap-3 bg-red-50 border border-red-200 rounded-full px-6 py-3">
                <span className="w-3 h-3 bg-red-500 rounded-full animate-pulse" />
                <span className="text-red-700 font-medium">High Demand Alert: Over 8,000 bottles sold this month! Stock is limited.</span>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section id="testimonials" className="py-24 gradient-primary relative overflow-hidden">
          {/* Decorative Elements */}
          <div className="absolute inset-0">
            <div className="absolute top-20 right-0 w-80 h-80 bg-[#d4af37]/5 rounded-full blur-3xl" />
            <div className="absolute bottom-20 left-0 w-96 h-96 bg-[#4a3c5a]/10 rounded-full blur-3xl" />
          </div>

          <div className="max-w-7xl mx-auto px-6 relative z-10">
            {/* Section Header */}
            <div className="text-center mb-16">
              <p className="text-[#d4af37] uppercase tracking-[0.3em] text-sm mb-4">🌟 Real Results</p>
              <h2 className="font-playfair text-4xl md:text-5xl text-white mb-6">
                Hear From Happy <span className="gradient-text">ZeinGlow</span> Customers
              </h2>
              <p className="text-white/70 text-lg max-w-2xl mx-auto">
                Don&apos;t just take our word for it. See what real customers are saying about their transformation.
              </p>
              <div className="w-24 h-1 gradient-gold mx-auto rounded-full mt-8" />
            </div>

            {/* Testimonials Grid */}
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { name: 'Sara M.', location: 'Dubai, UAE', initial: 'S', quote: 'I used to wake up with neck pain every day. After a week of ZeinGlow, I sleep through the night and wake up feeling totally refreshed and pain-free.', highlight: 'A life-changer!' },
                { name: 'Omar T.', location: 'Abu Dhabi, UAE', initial: 'O', quote: 'Absolutely incredible! The anxiety before bed is gone, and I finally have the energy to hit the gym in the morning.', highlight: 'I immediately upgraded to the 2+1 bundle.' },
                { name: 'Nadia K.', location: 'Sharjah, UAE', initial: 'N', quote: "Delicious and effective! It's like a little treat that guarantees a full night of deep rest.", highlight: 'My mood has improved drastically since I started using these.' },
              ].map((testimonial, index) => (
                <div key={index} className="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
                  {/* Stars */}
                  <div className="flex gap-1 mb-6">
                    {[...Array(5)].map((_, i) => (
                      <i key={i} className="fas fa-star text-[#d4af37]" />
                    ))}
                  </div>

                  {/* Quote */}
                  <p className="text-gray-600 leading-relaxed mb-6 italic">
                    &ldquo;{testimonial.quote} <span className="text-[#4a3c5a] font-semibold">{testimonial.highlight}</span>&rdquo;
                  </p>

                  {/* Author */}
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-full gradient-gold flex items-center justify-center">
                      <span className="font-playfair font-bold text-[#4a3c5a] text-xl">{testimonial.initial}</span>
                    </div>
                    <div>
                      <p className="font-bold text-[#4a3c5a]">{testimonial.name}</p>
                      <p className="text-gray-500 text-sm">{testimonial.location}</p>
                    </div>
                    <div className="ml-auto">
                      <span className="bg-green-100 text-green-700 text-xs font-semibold px-3 py-1 rounded-full">Verified</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Trust Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 bg-white/10 backdrop-blur-sm rounded-3xl p-8">
              <div className="text-center">
                <p className="font-playfair text-4xl text-[#d4af37] font-bold">8,000+</p>
                <p className="text-white/70 text-sm mt-1">Bottles Sold</p>
              </div>
              <div className="text-center">
                <p className="font-playfair text-4xl text-[#d4af37] font-bold">4.9/5</p>
                <p className="text-white/70 text-sm mt-1">Average Rating</p>
              </div>
              <div className="text-center">
                <p className="font-playfair text-4xl text-[#d4af37] font-bold">97%</p>
                <p className="text-white/70 text-sm mt-1">Satisfaction Rate</p>
              </div>
              <div className="text-center">
                <p className="font-playfair text-4xl text-[#d4af37] font-bold">2,000+</p>
                <p className="text-white/70 text-sm mt-1">5-Star Reviews</p>
              </div>
            </div>
          </div>
        </section>

        {/* Guarantee Section */}
        <section className="py-24 bg-cream relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1 gradient-gold" />
          <div className="max-w-4xl mx-auto px-6 text-center">
            {/* Guarantee Badge */}
            <div className="w-32 h-32 mx-auto mb-8 relative">
              <div className="absolute inset-0 gradient-gold rounded-full animate-pulse-glow" />
              <div className="relative w-full h-full bg-white rounded-full flex items-center justify-center shadow-xl">
                <div className="text-center">
                  <i className="fas fa-shield-alt text-3xl text-[#4a3c5a] mb-1" />
                  <p className="text-xs font-bold text-[#4a3c5a]">30-DAY</p>
                </div>
              </div>
            </div>

            <h2 className="font-playfair text-4xl md:text-5xl text-[#4a3c5a] mb-6">
              The ZeinGlow <span className="gradient-text">Sleep Promise</span>
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-8 max-w-2xl mx-auto">
              We are so confident you will experience the difference that if you aren&apos;t completely satisfied with your improved sleep and energy after 30 days, simply contact us. Your satisfaction is our priority.
            </p>

            <div className="flex flex-wrap justify-center gap-6 mb-12">
              <div className="flex items-center gap-2">
                <i className="fas fa-check-circle text-[#d4af37] text-xl" />
                <span className="text-gray-700">No Questions Asked</span>
              </div>
              <div className="flex items-center gap-2">
                <i className="fas fa-check-circle text-[#d4af37] text-xl" />
                <span className="text-gray-700">Easy Returns</span>
              </div>
              <div className="flex items-center gap-2">
                <i className="fas fa-check-circle text-[#d4af37] text-xl" />
                <span className="text-gray-700">Full Support</span>
              </div>
            </div>

            <Link
              href="/ahswagandha/checkout"
              onClick={() => MetaCAPI.trackAddToCart({}, 249, 'AED', 'Ashwagandha Sleep Gummies')}
              className="inline-flex items-center gap-3 px-10 py-5 gradient-gold text-[#2a2035] font-bold text-lg rounded-full shadow-xl shadow-[#d4af37]/30 hover:shadow-2xl hover:shadow-[#d4af37]/40 hover:-translate-y-2 transition-all duration-300 group"
            >
              <span>Start Sleeping Better Tonight</span>
              <i className="fas fa-arrow-right group-hover:translate-x-1 transition-transform" />
            </Link>

            <p className="text-gray-500 text-sm mt-6">
              <i className="fas fa-lock mr-1" />
              Secure checkout • Fast shipping to UAE
            </p>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="py-20 gradient-primary relative overflow-hidden">
          {/* Animated Background */}
          <div className="absolute inset-0">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-[#d4af37]/10 rounded-full animate-spin-slow" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] border border-[#d4af37]/20 rounded-full animate-spin-slow" style={{ animationDirection: 'reverse' }} />
          </div>

          <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
            <h2 className="font-playfair text-4xl md:text-5xl text-white mb-6">
              Stop Procrastinating on Your <span className="gradient-text">Wellness</span>
            </h2>
            <p className="text-white/70 text-xl mb-10 max-w-2xl mx-auto">
              Every night of poor sleep is a day of lost potential. Take the first step toward transformation now.
            </p>
            <Link
              href="/ahswagandha/checkout"
              onClick={() => MetaCAPI.trackAddToCart({}, 249, 'AED', 'Ashwagandha Sleep Gummies')}
              className="inline-flex items-center gap-3 px-12 py-6 gradient-gold text-[#2a2035] font-bold text-xl rounded-full shadow-xl shadow-[#d4af37]/30 hover:shadow-2xl hover:shadow-[#d4af37]/40 hover:-translate-y-2 transition-all duration-300 group"
            >
              <span>Order Your Bundle Now</span>
              <i className="fas fa-arrow-right group-hover:translate-x-1 transition-transform" />
            </Link>
            <p className="text-white/50 text-sm mt-6">
              Join 8,000+ happy customers sleeping better tonight
            </p>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-[#2a2035] py-16">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid md:grid-cols-4 gap-10 mb-12">
              {/* Brand */}
              <div className="md:col-span-2">
                <div className="mb-6">
                  <Image
                    src="/logo-zeinglow-white.png"
                    alt="ZeinGlow"
                    width={150}
                    height={45}
                    className="h-10 w-auto"
                  />
                </div>
                <p className="text-white/60 leading-relaxed mb-6 max-w-md">
                  Premium Ashwagandha Sleep &amp; Relax Gummies. Natural wellness solutions for modern life. Sleep better, live better.
                </p>
                <div className="flex gap-4">
                  <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-[#d4af37] hover:text-[#2a2035] transition-all duration-300">
                    <i className="fab fa-instagram" />
                  </a>
                  <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-[#d4af37] hover:text-[#2a2035] transition-all duration-300">
                    <i className="fab fa-facebook-f" />
                  </a>
                  <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-[#d4af37] hover:text-[#2a2035] transition-all duration-300">
                    <i className="fab fa-tiktok" />
                  </a>
                </div>
              </div>

              {/* Quick Links */}
              <div>
                <h4 className="font-playfair text-lg text-white mb-6">Quick Links</h4>
                <ul className="space-y-3">
                  <li><button onClick={() => smoothScrollTo('benefits')} className="text-white/60 hover:text-[#d4af37] transition-colors">Benefits</button></li>
                  <li><button onClick={() => smoothScrollTo('pricing')} className="text-white/60 hover:text-[#d4af37] transition-colors">Pricing</button></li>
                  <li><button onClick={() => smoothScrollTo('testimonials')} className="text-white/60 hover:text-[#d4af37] transition-colors">Reviews</button></li>
                  <li><a href="#" className="text-white/60 hover:text-[#d4af37] transition-colors">FAQ</a></li>
                </ul>
              </div>

              {/* Contact */}
              <div>
                <h4 className="font-playfair text-lg text-white mb-6">Contact Us</h4>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3 text-white/60">
                    <i className="fas fa-envelope text-[#d4af37]" />
                    <span>hello@zeinglow.ae</span>
                  </li>
                  <li className="flex items-center gap-3 text-white/60">
                    <i className="fas fa-phone text-[#d4af37]" />
                    <span>+971 50 341 21 74</span>
                  </li>
                  <li className="flex items-center gap-3 text-white/60">
                    <i className="fas fa-map-marker-alt text-[#d4af37]" />
                    <span>Dubai, UAE</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-white/40 text-sm">© 2024 ZeinGlow. All rights reserved.</p>
              <div className="flex gap-6">
                <a href="#" className="text-white/40 text-sm hover:text-[#d4af37] transition-colors">Privacy Policy</a>
                <a href="#" className="text-white/40 text-sm hover:text-[#d4af37] transition-colors">Terms of Service</a>
                <a href="#" className="text-white/40 text-sm hover:text-[#d4af37] transition-colors">Refund Policy</a>
              </div>
            </div>
          </div>
        </footer>

        {/* Floating WhatsApp Button */}
        <a
          href="https://wa.me/971503412174"
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-6 right-6 w-14 h-14 bg-green-500 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300 z-50"
        >
          <i className="fab fa-whatsapp text-white text-2xl" />
        </a>

        {/* Mobile Sticky CTA */}
        <div className="fixed bottom-0 left-0 right-0 p-4 bg-white border-t md:hidden z-40">
          <Link
            href="/ahswagandha/checkout"
            onClick={() => MetaCAPI.trackAddToCart({}, 249, 'AED', 'Ashwagandha Sleep Gummies')}
            className="block w-full gradient-gold text-[#2a2035] text-center py-3 rounded-full font-bold"
          >
            Shop Now - 249 AED
          </Link>
        </div>
      </div>

      {/* Font Awesome */}
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
      />
    </>
  );
}

