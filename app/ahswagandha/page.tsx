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
            <button onClick={() => smoothScrollTo('video-section')} className="text-white/50 hover:text-[#d4af37] transition-colors">
              <i className="fas fa-chevron-down text-2xl" />
            </button>
          </div>
        </section>

        {/* Video Section */}
        <section id="video-section" className="py-20 bg-cream relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1 gradient-gold" />
          <div className="max-w-5xl mx-auto px-6">
            <div className="text-center mb-12">
              <p className="text-[#d4af37] uppercase tracking-[0.3em] text-sm mb-4">🎬 See It In Action</p>
              <h2 className="font-playfair text-3xl md:text-4xl text-[#4a3c5a] mb-4">
                Watch How ZeinGlow <span className="gradient-text">Transforms</span> Your Sleep
              </h2>
            </div>
            
            {/* Video Container */}
            <div className="relative rounded-3xl overflow-hidden shadow-2xl bg-[#4a3c5a]">
              <div className="aspect-video relative">
                <iframe
                  className="absolute inset-0 w-full h-full"
                  src="https://www.youtube.com/embed/qwLOg3yMCvI?rel=0&modestbranding=1"
                  title="ZeinGlow Ashwagandha Product Video"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </div>

            {/* Video Trust Points */}
            <div className="grid grid-cols-3 gap-4 mt-8">
              <div className="text-center p-4 bg-white rounded-2xl shadow-lg">
                <i className="fas fa-clock text-2xl text-[#d4af37] mb-2" />
                <p className="text-[#4a3c5a] font-semibold text-sm">2 Min Watch</p>
              </div>
              <div className="text-center p-4 bg-white rounded-2xl shadow-lg">
                <i className="fas fa-eye text-2xl text-[#d4af37] mb-2" />
                <p className="text-[#4a3c5a] font-semibold text-sm">50K+ Views</p>
              </div>
              <div className="text-center p-4 bg-white rounded-2xl shadow-lg">
                <i className="fas fa-heart text-2xl text-[#d4af37] mb-2" />
                <p className="text-[#4a3c5a] font-semibold text-sm">Real Results</p>
              </div>
            </div>
          </div>
        </section>

        {/* Pain Points Section - Elegant Design */}
        <section id="pain-points" className="py-24 bg-cream relative overflow-hidden">
          {/* Decorative Elements */}
          <div className="absolute top-0 left-0 w-full h-1 gradient-gold" />
          <div className="absolute top-20 right-0 w-72 h-72 bg-[#4a3c5a]/5 rounded-full blur-3xl" />
          <div className="absolute bottom-20 left-0 w-96 h-96 bg-[#d4af37]/5 rounded-full blur-3xl" />

          <div className="max-w-7xl mx-auto px-6 relative z-10">
            {/* Section Header */}
            <div className="text-center mb-16">
              <p className="text-[#d4af37] uppercase tracking-[0.3em] text-sm mb-4">The Problem</p>
              <h2 className="font-playfair text-4xl md:text-5xl text-[#4a3c5a] mb-6">
                When Sleep Doesn&apos;t Feel Like <span className="gradient-text">Rest</span>
              </h2>
              <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                Millions struggle with these issues every night. You&apos;re not alone.
              </p>
              <div className="w-24 h-1 gradient-gold mx-auto rounded-full mt-6" />
            </div>

            {/* Problem Cards - Elegant Grid */}
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              {/* Card 1 - Can't Fall Asleep */}
              <div className="group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-[#4a3c5a]/10">
                <div className="relative h-64">
                  <Image
                    src="/cantsleep.png"
                    alt="Can't fall asleep"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#4a3c5a]/80 via-[#4a3c5a]/20 to-transparent" />
                  <div className="absolute bottom-4 left-6 right-6">
                    <h3 className="font-playfair text-2xl text-white mb-1">Can&apos;t Fall Asleep?</h3>
                    <p className="text-white/70 text-sm">Affects 35% of adults</p>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 leading-relaxed">
                    Lying awake for hours while your mind races with thoughts? Your body is exhausted but your brain won&apos;t shut off. The frustration builds as precious sleep hours slip away.
                  </p>
                  <div className="flex items-center gap-2 text-[#d4af37] text-sm font-medium mt-4">
                    <i className="fas fa-bed" />
                    <span>Restless nights, tired days</span>
                  </div>
                </div>
              </div>

              {/* Card 2 - Constant Stress */}
              <div className="group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-[#4a3c5a]/10">
                <div className="relative h-64">
                  <Image
                    src="/stress.png"
                    alt="Stress and anxiety"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#4a3c5a]/80 via-[#4a3c5a]/20 to-transparent" />
                  <div className="absolute bottom-4 left-6 right-6">
                    <h3 className="font-playfair text-2xl text-white mb-1">Constant Stress &amp; Anxiety?</h3>
                    <p className="text-white/70 text-sm">Elevated cortisol levels</p>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 leading-relaxed">
                    The weight of daily tension follows you to bed. Your mind replays worries on repeat, making rest impossible. Stress shouldn&apos;t follow you into your sanctuary.
                  </p>
                  <div className="flex items-center gap-2 text-[#d4af37] text-sm font-medium mt-4">
                    <i className="fas fa-brain" />
                    <span>Mind won&apos;t stop racing</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {/* Card 3 - Morning Stiffness */}
              <div className="group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-[#4a3c5a]/10">
                <div className="relative h-52">
                  <Image
                    src="/morningstifness.png"
                    alt="Morning stiffness"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#4a3c5a]/80 via-[#4a3c5a]/20 to-transparent" />
                  <div className="absolute bottom-4 left-6 right-6">
                    <h3 className="font-playfair text-xl text-white">Morning Stiffness?</h3>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 leading-relaxed text-sm">
                    Starting your day with aches and pains? Your body never truly recovered overnight.
                  </p>
                  <div className="flex items-center gap-2 text-[#d4af37] text-sm font-medium mt-3">
                    <i className="fas fa-user-injured" />
                    <span>Zaps your energy</span>
                  </div>
                </div>
              </div>

              {/* Card 4 - Waking Up */}
              <div className="group bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-[#4a3c5a]/10">
                <div className="w-16 h-16 rounded-2xl bg-[#4a3c5a]/10 flex items-center justify-center mb-6 group-hover:bg-[#4a3c5a] transition-all duration-300">
                  <i className="fas fa-moon text-2xl text-[#4a3c5a] group-hover:text-white transition-colors" />
                </div>
                <h3 className="font-playfair text-xl text-[#4a3c5a] mb-3">Waking Up at Night?</h3>
                <p className="text-gray-600 leading-relaxed text-sm mb-4">
                  Waking up multiple times, never reaching deep restorative sleep. Morning comes too soon.
                </p>
                <div className="flex items-center gap-2 text-[#d4af37] text-sm font-medium">
                  <i className="fas fa-clock" />
                  <span>3-5 times average</span>
                </div>
              </div>

              {/* Solution Card */}
              <div className="group bg-gradient-to-br from-[#4a3c5a] to-[#2a2035] rounded-3xl p-8 shadow-xl text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-40 h-40 bg-[#d4af37]/10 rounded-full blur-3xl" />
                <div className="absolute bottom-0 left-0 w-32 h-32 bg-[#d4af37]/5 rounded-full blur-2xl" />
                <div className="relative z-10">
                  <div className="w-16 h-16 rounded-2xl gradient-gold flex items-center justify-center mb-6 shadow-lg shadow-[#d4af37]/30">
                    <i className="fas fa-wand-magic-sparkles text-2xl text-[#2a2035]" />
                  </div>
                  <h3 className="font-playfair text-xl text-[#d4af37] mb-3">There&apos;s a Better Way</h3>
                  <p className="text-white/80 leading-relaxed mb-6 text-sm">
                    What if one natural solution could address ALL of these problems?
                  </p>
                  <button onClick={() => smoothScrollTo('benefits')} className="inline-flex items-center gap-2 gradient-gold text-[#2a2035] px-5 py-2.5 rounded-full font-bold hover:shadow-lg hover:shadow-[#d4af37]/30 transition-all text-sm">
                    <span>See Solution</span>
                    <i className="fas fa-arrow-right" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section - Redesigned with Product Images */}
        <section id="benefits" className="py-24 gradient-primary relative overflow-hidden">
          {/* Decorative Elements */}
          <div className="absolute inset-0">
            <div className="absolute top-1/4 left-0 w-96 h-96 bg-[#d4af37]/5 rounded-full blur-3xl" />
            <div className="absolute bottom-1/4 right-0 w-80 h-80 bg-[#4a3c5a]/10 rounded-full blur-3xl" />
          </div>

          <div className="max-w-7xl mx-auto px-6 relative z-10">
            {/* Section Header */}
            <div className="text-center mb-16">
              <p className="text-[#d4af37] uppercase tracking-[0.3em] text-sm mb-4">✨ The Natural Solution</p>
              <h2 className="font-playfair text-4xl md:text-5xl text-white mb-6">
                Introducing ZeinGlow <span className="gradient-text">Sleep &amp; Relax</span> Gummies
              </h2>
              <p className="text-white/70 text-lg max-w-2xl mx-auto">
                Harness the ancient wisdom of Ashwagandha, perfected for modern life.
              </p>
              <div className="w-24 h-1 gradient-gold mx-auto rounded-full mt-8" />
            </div>

            {/* Product Showcase */}
            <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
              {/* Product Image */}
              <div className="relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-80 h-80 bg-[#d4af37]/20 rounded-full blur-3xl animate-pulse-glow" />
                </div>
                <div className="relative z-10">
                  <Image
                    src="/beargummies.png"
                    alt="ZeinGlow Ashwagandha Gummies"
                    width={500}
                    height={500}
                    className="w-full max-w-md mx-auto drop-shadow-2xl animate-float"
                  />
                </div>
                {/* Ingredient Badge */}
                <div className="absolute top-4 right-4 bg-white rounded-2xl p-4 shadow-xl">
                  <p className="text-[#4a3c5a] font-bold text-sm">300mg</p>
                  <p className="text-gray-500 text-xs">Ashwagandha</p>
                </div>
              </div>

              {/* Benefits List */}
              <div className="space-y-6">
                {[
                  { icon: 'fa-moon', title: 'Deep Restorative Sleep', desc: "Fall asleep faster and stay asleep longer with our calming formula.", color: 'from-indigo-500 to-purple-500' },
                  { icon: 'fa-bolt', title: 'Wake Up Energized', desc: "No more groggy mornings. Feel refreshed and ready to conquer your day.", color: 'from-amber-500 to-orange-500' },
                  { icon: 'fa-spa', title: 'Pain & Tension Relief', desc: "Reduce morning stiffness and body aches naturally.", color: 'from-emerald-500 to-teal-500' },
                  { icon: 'fa-heart', title: 'Stress Meltdown', desc: "Lower cortisol levels and find your inner peace.", color: 'from-rose-500 to-pink-500' },
                ].map((benefit, index) => (
                  <div key={index} className="group flex items-start gap-5 bg-white/10 backdrop-blur-sm rounded-2xl p-5 hover:bg-white/20 transition-all duration-300">
                    <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${benefit.color} flex items-center justify-center flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                      <i className={`fas ${benefit.icon} text-xl text-white`} />
                    </div>
                    <div>
                      <h3 className="font-playfair text-xl text-white mb-1">{benefit.title}</h3>
                      <p className="text-white/70 text-sm">{benefit.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* How It Works */}
            <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 md:p-12">
              <h3 className="font-playfair text-2xl text-white text-center mb-10">How to Use</h3>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full gradient-gold flex items-center justify-center text-[#2a2035] font-bold text-2xl">1</div>
                  <h4 className="text-white font-semibold mb-2">Take 2 Gummies</h4>
                  <p className="text-white/60 text-sm">30 minutes before bedtime</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full gradient-gold flex items-center justify-center text-[#2a2035] font-bold text-2xl">2</div>
                  <h4 className="text-white font-semibold mb-2">Relax & Unwind</h4>
                  <p className="text-white/60 text-sm">Feel the calm wash over you</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full gradient-gold flex items-center justify-center text-[#2a2035] font-bold text-2xl">3</div>
                  <h4 className="text-white font-semibold mb-2">Sleep Deeply</h4>
                  <p className="text-white/60 text-sm">Wake up refreshed</p>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="text-center mt-12">
              <Link
                href="/ahswagandha/checkout"
                onClick={() => MetaCAPI.trackAddToCart({}, 249, 'AED', 'Ashwagandha Sleep Gummies')}
                className="inline-flex items-center gap-3 px-10 py-5 gradient-gold text-[#2a2035] font-bold text-lg rounded-full shadow-xl shadow-[#d4af37]/30 hover:shadow-2xl hover:shadow-[#d4af37]/40 hover:-translate-y-2 transition-all duration-300 group"
              >
                <span>Get Your ZeinGlow Now</span>
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
                <span className="text-red-700 font-medium">High Demand Alert: Over 2,000 bottles sold this month! Stock is limited.</span>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section - Enhanced with Images */}
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
                Real stories from real people who transformed their sleep.
              </p>
              <div className="w-24 h-1 gradient-gold mx-auto rounded-full mt-8" />
            </div>

            {/* Featured Testimonial */}
            <div className="bg-white rounded-3xl p-8 md:p-12 shadow-2xl mb-12">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="relative">
                  <Image
                    src="/ash1.jpg"
                    alt="Customer experience"
                    width={500}
                    height={400}
                    className="rounded-2xl w-full h-64 md:h-80 object-cover"
                  />
                  <div className="absolute -bottom-4 -right-4 bg-[#4a3c5a] text-white rounded-2xl p-4 shadow-xl">
                    <p className="text-[#d4af37] font-bold text-lg">Life Changed!</p>
                    <p className="text-xs text-white/70">After 2 weeks</p>
                  </div>
                </div>
                <div>
                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <i key={i} className="fas fa-star text-[#d4af37] text-xl" />
                    ))}
                  </div>
                  <p className="text-gray-700 text-lg leading-relaxed mb-6 italic">
                    &ldquo;I was skeptical at first, but ZeinGlow completely transformed my sleep. I used to toss and turn for hours, now I fall asleep within minutes. <span className="text-[#4a3c5a] font-bold not-italic">The best investment I&apos;ve made for my health!</span>&rdquo;
                  </p>
                  <div className="flex items-center gap-4">
                    <Image
                      src="/avatar/avatar1.png"
                      alt="Sara M."
                      width={60}
                      height={60}
                      className="w-14 h-14 rounded-full object-cover border-2 border-[#d4af37]"
                    />
                    <div>
                      <p className="font-bold text-[#4a3c5a]">Sara M.</p>
                      <p className="text-gray-500 text-sm">Dubai, UAE • Verified Buyer</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Testimonials Grid */}
            <div className="grid md:grid-cols-3 gap-6">
              {/* Testimonial 1 */}
              <div className="bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
                <div className="relative h-48">
                  <Image
                    src="/ash2.jpg"
                    alt="Customer transformation"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="flex gap-1 mb-1">
                      {[...Array(5)].map((_, i) => (
                        <i key={i} className="fas fa-star text-[#d4af37] text-sm" />
                      ))}
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 leading-relaxed mb-4 text-sm">
                    &ldquo;The anxiety before bed is GONE. I finally have energy for morning workouts. <span className="text-[#4a3c5a] font-semibold">Upgraded to the 2+1 bundle immediately!</span>&rdquo;
                  </p>
                  <div className="flex items-center gap-3">
                    <Image
                      src="/avatar/avatar2.png"
                      alt="Omar T."
                      width={44}
                      height={44}
                      className="w-11 h-11 rounded-full object-cover border-2 border-[#d4af37]"
                    />
                    <div className="flex-1">
                      <p className="font-bold text-[#4a3c5a] text-sm">Omar T.</p>
                      <p className="text-gray-400 text-xs">Abu Dhabi, UAE</p>
                    </div>
                    <span className="bg-green-100 text-green-700 text-xs font-semibold px-2 py-1 rounded-full">✓ Verified</span>
                  </div>
                </div>
              </div>

              {/* Testimonial 2 */}
              <div className="bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
                <div className="relative h-48">
                  <Image
                    src="/ash3.jpg"
                    alt="Customer experience"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="flex gap-1 mb-1">
                      {[...Array(5)].map((_, i) => (
                        <i key={i} className="fas fa-star text-[#d4af37] text-sm" />
                      ))}
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 leading-relaxed mb-4 text-sm">
                    &ldquo;Delicious and effective! It&apos;s like a little treat that guarantees deep rest. <span className="text-[#4a3c5a] font-semibold">My mood has improved so much!</span>&rdquo;
                  </p>
                  <div className="flex items-center gap-3">
                    <Image
                      src="/avatar/avatar3.png"
                      alt="Nadia K."
                      width={44}
                      height={44}
                      className="w-11 h-11 rounded-full object-cover border-2 border-[#d4af37]"
                    />
                    <div className="flex-1">
                      <p className="font-bold text-[#4a3c5a] text-sm">Nadia K.</p>
                      <p className="text-gray-400 text-xs">Sharjah, UAE</p>
                    </div>
                    <span className="bg-green-100 text-green-700 text-xs font-semibold px-2 py-1 rounded-full">✓ Verified</span>
                  </div>
                </div>
              </div>

            </div>

            {/* Social Proof Bar */}
            <div className="mt-12 flex flex-wrap items-center justify-center gap-8">
              <div className="flex items-center gap-3">
                <div className="flex -space-x-3">
                  {[1, 2, 3, 4, 5].map((num) => (
                    <Image
                      key={num}
                      src={`/avatar/avatar${num}.png`}
                      alt={`Customer ${num}`}
                      width={40}
                      height={40}
                      className="w-10 h-10 rounded-full border-2 border-white object-cover"
                    />
                  ))}
                </div>
                <div>
                  <p className="text-white font-bold">2,000+ Happy Customers</p>
                  <p className="text-white/60 text-sm">Join the ZeinGlow family</p>
                </div>
              </div>
            </div>

            {/* Trust Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12 bg-white/10 backdrop-blur-sm rounded-3xl p-8">
              <div className="text-center">
                <p className="font-playfair text-4xl text-[#d4af37] font-bold">2,000+</p>
                <p className="text-white/70 text-sm mt-1">Bottles Sold</p>
              </div>
              <div className="text-center">
                <p className="font-playfair text-4xl text-[#d4af37] font-bold">4.9/5</p>
                <p className="text-white/70 text-sm mt-1">Average Rating</p>
              </div>
              <div className="text-center">
                <p className="font-playfair text-4xl text-[#d4af37] font-bold">97%</p>
                <p className="text-white/70 text-sm mt-1">Satisfaction</p>
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
              Join 2,000+ happy customers sleeping better tonight
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

