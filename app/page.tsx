"use client";

import Head from "next/head";
import Image from "next/image";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    const yearEl = document.getElementById("year");
    if (yearEl) yearEl.textContent = String(new Date().getFullYear());

    const sticky = document.getElementById("sticky-offer");
    if (!sticky) return;
    let shown = false;
    const onScroll = () => {
      if (shown) return;
      if (window.scrollY > 600) {
        sticky.classList.remove("hidden");
        shown = true;
      }
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <Head>
        <title>Zeinglow Ashwagandha Gummies – Find Your Calm, Sleep Deeply</title>
        <meta
          name="description"
          content="Premium sugar-free, vegan Ashwagandha gummies for stress relief and natural relaxation. Mixed berry flavor, plant-based formula. Thousands already feeling calmer."
        />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Product",
              name: "Zeinglow Ashwagandha Gummies",
              description:
                "Sugar-free, vegan mixed berry gummies with KSM‑66® Ashwagandha for stress relief and natural relaxation.",
              brand: { "@type": "Brand", name: "Zeinglow" },
              image: ["https://example.com/your-product-image.jpg"],
              sku: "CG-ASH-60",
              offers: {
                "@type": "AggregateOffer",
                lowPrice: "189",
                highPrice: "479",
                priceCurrency: "AED",
                offerCount: "3",
                availability: "https://schema.org/InStock",
              },
              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: "4.8",
                reviewCount: "3000",
              },
            }),
          }}
        />
      </Head>
      <div className="font-display text-slate-900 bg-gradient-to-br from-emerald-50 via-green-50 to-teal-50 min-h-screen">
        <header className="sticky top-0 z-50 backdrop-blur-xl bg-white/95 border-b border-emerald-100/50 shadow-lg">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-20">
              <div className="flex items-center">
                <Image
                  src="/logozeinglow.png"
                  alt="Zeinglow"
                  width={160}
                  height={48}
                  className="h-12 w-auto"
                />
              </div>
              <nav className="hidden md:flex items-center gap-8 text-sm font-semibold text-slate-700">
                <a href="#benefits" className="hover:text-emerald-700 transition-colors">Benefits</a>
                <a href="#science" className="hover:text-emerald-700 transition-colors">Ingredients</a>
                <a href="#bundles" className="hover:text-emerald-700 transition-colors">Bundles</a>
                <a href="#reviews" className="hover:text-emerald-700 transition-colors">Reviews</a>
                <a href="#faq" className="hover:text-emerald-700 transition-colors">FAQ</a>
              </nav>
              <a href="/checkout" className="btn-primary hidden md:inline-flex cta-pulse" data-cta="header-cta" aria-label="Shop bundles and save">
                <span>Shop Premium Quality</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" /></svg>
              </a>
            </div>
          </div>
        </header>
        <section className="relative overflow-hidden bg-gradient-to-br from-emerald-900/5 via-green-900/5 to-teal-900/5">
          <div className="absolute inset-0 -z-10">
            <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-emerald-400/20 to-green-400/20 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 right-0 w-[32rem] h-[32rem] bg-gradient-to-br from-green-400/15 to-teal-400/15 rounded-full blur-3xl"></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[40rem] h-[40rem] bg-gradient-to-br from-emerald-300/10 to-green-300/10 rounded-full blur-3xl"></div>
            <svg className="absolute -top-24 -right-16 w-[28rem] h-[28rem] opacity-25" viewBox="0 0 400 400" fill="none" aria-hidden="true">
              <defs>
                <linearGradient id="leafGrad1" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" stopColor="#10b981"/>
                  <stop offset="50%" stopColor="#059669"/>
                  <stop offset="100%" stopColor="#047857"/>
                </linearGradient>
              </defs>
              <g className="float-slow">
                <path className="sway" d="M200 40 C260 80 300 140 300 200 C300 260 260 320 200 360 C140 320 100 260 100 200 C100 140 140 80 200 40 Z" stroke="url(#leafGrad1)" strokeWidth="2" fill="none"/>
                <circle cx="220" cy="120" r="10" fill="#10b981" opacity=".4"/>
                <circle cx="260" cy="180" r="8" fill="#059669" opacity=".35"/>
                <circle cx="180" cy="240" r="6" fill="#047857" opacity=".3"/>
              </g>
            </svg>
            <svg className="absolute -bottom-24 -left-24 w-[38rem] h-[38rem] opacity-20" viewBox="0 0 400 400" fill="none" aria-hidden="true">
              <defs>
                <linearGradient id="leafGrad2" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" stopColor="#6ee7b7"/>
                  <stop offset="100%" stopColor="#10b981"/>
                </linearGradient>
              </defs>
              <g className="float-slow" style={{ animationDelay: ".8s" }}>
                <path className="sway" d="M200 60 C250 110 280 160 280 210 C280 260 250 310 200 340 C150 310 120 260 120 210 C120 160 150 110 200 60 Z" stroke="url(#leafGrad2)" strokeWidth="2" fill="none"/>
                <circle cx="170" cy="120" r="9" fill="#6ee7b7" opacity=".4"/>
                <circle cx="230" cy="260" r="7" fill="#10b981" opacity=".3"/>
              </g>
            </svg>
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-40">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="space-y-8">
                <div className="flex flex-wrap items-center gap-4 mb-8">
                  <span className="inline-flex items-center gap-2 px-6 py-3 rounded-full glass text-emerald-800 text-sm font-bold shadow-premium">
                    <span className="w-3 h-3 bg-emerald-500 rounded-full"></span>
                    Plant-Based & Vegan
                  </span>
                  <span className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-emerald-500 to-green-600 text-white text-sm font-bold shadow-premium cta-pulse">
                    <span className="w-3 h-3 bg-white rounded-full animate-pulse"></span>
                    Zero Sugar • Pure Relaxation
                  </span>
                </div>
                
                <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold leading-[1.1] tracking-tight text-slate-900">
                  Escape the stress.{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 via-green-600 to-emerald-800">
                    Unwind deeply.{" "}
                  </span>
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-teal-600">
                    Heal naturally.
                  </span>
                </h1>

                {/* Mobile Product Image */}
                <div className="lg:hidden relative flex items-center justify-center py-8">
                  <div className="absolute -inset-8 bg-gradient-to-tr from-emerald-200/40 via-green-200/40 to-teal-300/40 rounded-full blur-3xl opacity-80 -z-10"></div>
                  <div className="relative">
                    <Image 
                      src="/product.png" 
                      alt="Zeinglow Ashwagandha Gummies - Mixed Berry, Sugar-Free, Vegan" 
                      width={320}
                      height={320}
                      className="w-full max-w-xs h-auto object-contain drop-shadow-2xl filter brightness-110 float-slow"
                    />
                    <div className="absolute -top-3 -right-3 bg-gradient-to-r from-emerald-500 to-green-600 text-white text-xs font-bold px-3 py-1 rounded-full shadow-premium cta-pulse">
                      Premium Quality
                    </div>
                  </div>
                </div>
                
                <div className="space-y-6">
                  <p className="text-xl sm:text-2xl text-slate-700 leading-relaxed font-light">
                    Transform pain into peace. Turn tension into tranquility.
                  </p>
                  <p className="text-lg text-slate-600 leading-relaxed">
                    <span className="font-semibold text-slate-800">Zeinglow&apos;s sugar-free Ashwagandha gummies</span> naturally melt away daily stress, ease physical tension, and help you unwind completely—so you can finally relax and restore.
                  </p>
                </div>
                
                <div className="bg-gradient-to-r from-emerald-50 to-green-50 border border-emerald-200/50 rounded-2xl p-6 backdrop-blur shadow-lg ring-1 ring-emerald-300/40">
                  <div className="space-y-2">
                    <div className="flex items-center gap-3 text-slate-700">
                      <div className="w-3 h-3 bg-gradient-to-r from-emerald-500 to-green-500 rounded-full"></div>
                      <span className="font-bold text-emerald-800">100% Sugar-Free Formula</span>
                      <span className="text-emerald-400">•</span>
                      <span className="font-semibold text-emerald-700">Mixed Berry Delight</span>
                    </div>
                  <div className="flex items-center gap-3 text-slate-700">
                      <div className="w-3 h-3 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full"></div>
                      <span className="font-semibold text-slate-700">60 relaxation gummies per bottle</span>
                    <span className="text-slate-400">•</span>
                      <span className="font-semibold text-slate-700">Pure, natural ingredients</span>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-8 pt-12">
                  <a href="/checkout" className="btn-primary group" data-cta="hero-primary" aria-label="Get Zeinglow Ashwagandha Gummies now">
                    <span className="flex items-center gap-3">
                      <span>Start Your Relaxation Journey</span>
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" /></svg>
                    </span>
                    <span className="btn-subtext">Premium quality • 60‑day guarantee</span>
                  </a>
                  
                  <a href="#reviews" className="btn-outline group" data-cta="hero-proof" aria-label="Read customer reviews">
                    <span className="flex items-center gap-3">
                      <div className="flex items-center gap-2 text-emerald-600">
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
                        <span className="font-bold">4.8/5 stars</span>
                      </div>
                      <span>Join thousands feeling calmer</span>
                    </span>
          </a>
        </div>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-16">
                  <div className="glass rounded-3xl p-6 text-center shadow-card">
                    <div className="w-12 h-12 mx-auto mb-4 bg-gradient-to-br from-emerald-500 to-green-600 rounded-2xl flex items-center justify-center shadow-lg">
                      <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6-2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <p className="text-sm font-bold text-emerald-800">3rd‑party tested</p>
                    <p className="text-xs text-emerald-600 font-medium">Purity & potency verified</p>
                  </div>
                  <div className="glass rounded-3xl p-6 text-center shadow-card ring-2 ring-emerald-300/30">
                    <div className="w-12 h-12 mx-auto mb-4 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center shadow-lg">
                      <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                      </svg>
                    </div>
                    <p className="text-sm font-bold text-emerald-800">Zero Sugar</p>
                    <p className="text-xs text-emerald-600 font-medium">Natural sweetness only</p>
                  </div>
                  <div className="glass rounded-3xl p-6 text-center shadow-card">
                    <div className="w-12 h-12 mx-auto mb-4 bg-gradient-to-br from-teal-500 to-emerald-600 rounded-2xl flex items-center justify-center shadow-lg">
                      <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                    <p className="text-sm font-bold text-emerald-800">Fast shipping</p>
                    <p className="text-xs text-emerald-600 font-medium">Ships in 24–48h</p>
                  </div>
                  <div className="glass rounded-3xl p-6 text-center shadow-card">
                    <div className="w-12 h-12 mx-auto mb-4 bg-gradient-to-br from-emerald-600 to-green-700 rounded-2xl flex items-center justify-center shadow-lg">
                      <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                      </svg>
                    </div>
                    <p className="text-sm font-bold text-emerald-800">60‑day guarantee</p>
                    <p className="text-xs text-emerald-600 font-medium">100% risk‑free</p>
                  </div>
                </div>
              </div>

              {/* Desktop Product Image */}
              <div className="hidden lg:flex relative items-center justify-center">
                <div className="absolute -inset-12 bg-gradient-to-tr from-emerald-200/40 via-green-200/40 to-teal-300/40 rounded-full blur-3xl opacity-80 -z-10"></div>
                <div className="absolute -inset-6 bg-gradient-to-br from-emerald-300/20 via-green-300/20 to-emerald-400/20 rounded-full blur-2xl opacity-60 -z-10"></div>
                <div className="relative">
                  <Image 
                    src="/product.png" 
                    alt="Zeinglow Ashwagandha Gummies - Mixed Berry, Sugar-Free, Vegan" 
                    width={512}
                    height={512}
                    className="w-full max-w-lg h-auto object-contain drop-shadow-2xl filter brightness-110 float-slow"
                  />
                  <div className="absolute -top-4 -right-4 bg-gradient-to-r from-emerald-500 to-green-600 text-white text-sm font-bold px-4 py-2 rounded-full shadow-premium cta-pulse">
                    Premium Quality
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-20 grid lg:grid-cols-3 gap-6" id="pain">
              <div className="rounded-3xl p-8 bg-gradient-to-br from-red-50 to-rose-100 ring-1 ring-red-200/60 shadow-xl">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-red-500 to-rose-600 flex items-center justify-center mb-6 shadow-lg">
                  <span className="text-white text-2xl">😰</span>
                </div>
                <h3 className="font-bold text-red-900 text-2xl mb-4">The Daily Struggle</h3>
                <p className="text-red-800 leading-relaxed"><span className="font-bold">Physical tension, mental overwhelm, sleepless nights.</span> Your body holds stress like a vice grip. <span className="font-bold">Every muscle aches. Every thought races.</span> You&apos;re trapped in a cycle of exhaustion.</p>
              </div>
              <div className="rounded-3xl p-8 bg-gradient-to-br from-orange-50 to-amber-100 ring-1 ring-orange-200/60 shadow-xl">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-orange-500 to-amber-600 flex items-center justify-center mb-6 shadow-lg">
                  <span className="text-white text-2xl">⚠️</span>
                </div>
                <h3 className="font-bold text-orange-900 text-2xl mb-4">The Endless Loop</h3>
                <p className="text-orange-800 leading-relaxed"><span className="font-bold">Sugar highs → energy crashes → poor sleep → repeat.</span> Your nervous system is stuck in overdrive. <span className="font-bold">Pain compounds. Problems multiply.</span> Traditional fixes only mask the symptoms.</p>
              </div>
              <div className="rounded-3xl p-8 bg-gradient-to-br from-emerald-50 to-green-100 ring-1 ring-emerald-200/60 shadow-xl">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-emerald-500 to-green-600 flex items-center justify-center mb-6 shadow-lg">
                  <span className="text-white text-2xl">✨</span>
                </div>
                <h3 className="font-bold text-emerald-900 text-2xl mb-4">Your Path to Peace</h3>
                <p className="text-emerald-800 leading-relaxed"><span className="font-bold">Zeinglow sugar-free gummies</span> work at the root level. <span className="font-bold">Dissolve tension. Quiet the mind. Restore balance.</span> Feel your body finally let go and your spirit truly unwind.</p>
              </div>
            </div>
          </div>
        </section>

        <section id="bundles" className="py-16 sm:py-24 bg-gradient-to-b from-white to-emerald-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto">
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight bg-gradient-to-r from-emerald-600 to-green-600 bg-clip-text text-transparent">Premium Quality Bundles</h2>
              <p className="mt-3 text-lg text-slate-700"><span className="font-bold text-emerald-600">High demand</span>—choose the bundle that fits your relaxation journey.</p>
              <div className="mt-6 bg-gradient-to-r from-emerald-50 to-green-50 border border-emerald-200/50 rounded-3xl p-8 shadow-premium">
                <div className="flex items-center justify-center gap-3 text-emerald-800 font-semibold">
                  <div className="w-3 h-3 bg-emerald-500 rounded-full animate-pulse"></div>
                  <span className="font-bold">Premium quality formula</span> •
                  <span className="font-bold">100% sugar-free</span> •
                  60-day money-back guarantee on all bundles
                </div>
              </div>
            </div>

            <div className="mt-16 grid md:grid-cols-3 gap-8">
              <div className="relative glass rounded-3xl p-8 flex flex-col shadow-card">
                <span className="absolute -top-3 left-8 badge">Starter</span>
                <div className="text-center">
                  <div className="h-28 flex items-center justify-center">
                    <Image 
                      src="/product.png" 
                      alt="1 Bottle of Zeinglow Ashwagandha Gummies" 
                      width={96}
                      height={96}
                      className="h-24 w-auto object-contain"
                    />
                  </div>
                  <h3 className="text-xl font-bold">1 Bottle</h3>
                  <p className="text-slate-600 text-sm"><span className="font-bold text-emerald-700">100% Sugar-Free</span> • <span className="font-semibold">60 relaxation gummies</span> • <span className="font-semibold">Mixed Berry flavor</span></p>
                  <div className="mt-4">
                    <span className="text-3xl font-extrabold">AED 189</span>
                    <p className="text-xs text-emerald-600 font-semibold mt-1">Perfect to try • <span className="font-bold">Limited stock</span></p>
                  </div>
                </div>
                <div className="mt-6 space-y-2 text-sm text-slate-700">
                  <p className="flex items-center gap-2">
                    <span className="text-emerald-500">✓</span>
                    <span className="font-semibold">Vegan & plant-based formula</span>
                  </p>
                  <p className="flex items-center gap-2">
                    <span className="text-emerald-500">✓</span>
                    <span className="font-semibold">No artificial colors or flavors</span>
                  </p>
                </div>
                <a href="/checkout" className="btn-primary mt-6" data-cta="bundle-1" aria-label="Get Zeinglow Ashwagandha Gummies">
                  <span>Get 1 Bottle — AED 189</span>
                  <span className="btn-subtext">30 days • Great to try</span>
                </a>
                <p className="mt-3 text-xs text-center text-slate-500">60‑day money‑back guarantee</p>
              </div>

              <div className="relative glass rounded-3xl p-8 flex flex-col shadow-premium ring-2 ring-emerald-300/50 scale-[1.02]">
                <span className="absolute -top-4 left-8 bg-gradient-to-r from-emerald-600 to-green-600 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg">Best Seller</span>
                <div className="text-center">
                  <div className="h-28 flex items-center justify-center">
                    <Image 
                      src="/producttwo.png" 
                      alt="2 Bottles of Zeinglow Ashwagandha Gummies" 
                      width={96}
                      height={96}
                      className="h-24 w-auto object-contain"
                    />
                  </div>
                  <h3 className="text-xl font-bold">2 Bottles</h3>
                  <p className="text-slate-600 text-sm"><span className="font-bold text-emerald-700">60-day relaxation journey</span> • 120 sugar-free gummies</p>
                  <div className="mt-4">
                    <span className="text-3xl font-extrabold">AED 339</span>
                    <p className="text-xs text-emerald-600 font-semibold mt-1">Most popular choice</p>
                  </div>
                </div>
                <div className="mt-6 space-y-2 text-sm text-slate-700">
                  <p>✓ Most popular</p>
                  <p>✓ Consistent 60‑day journey</p>
                </div>
                <a href="/checkout" className="btn-primary mt-6" data-cta="bundle-2" aria-label="Get Zeinglow 2-bottle bundle">
                  <span>Get 2 Bottles — AED 339</span>
                  <span className="btn-subtext">60 days • Most popular</span>
                </a>
                <p className="mt-3 text-xs text-center text-slate-500">60‑day money‑back guarantee</p>
              </div>

              <div className="relative glass rounded-3xl p-8 flex flex-col shadow-card">
                <span className="absolute -top-3 left-8 badge">Best Value</span>
                <div className="text-center">
                  <div className="h-28 flex items-center justify-center">
                    <Image 
                      src="/productthree.png" 
                      alt="3 Bottles of Zeinglow Ashwagandha Gummies" 
                      width={96}
                      height={96}
                      className="h-24 w-auto object-contain"
                    />
                  </div>
                  <h3 className="text-xl font-bold">3 Bottles</h3>
                  <p className="text-slate-600 text-sm"><span className="font-bold text-emerald-700">90-day transformation</span> • 180 sugar-free gummies</p>
                  <div className="mt-4">
                    <span className="text-3xl font-extrabold">AED 479</span>
                    <p className="text-xs text-emerald-600 font-semibold mt-1">Best value • Complete journey</p>
                  </div>
                </div>
                <div className="mt-6 space-y-2 text-sm text-slate-700">
                  <p>✓ Best value</p>
                  <p>✓ Complete transformation</p>
                </div>
                <a href="/checkout" className="btn-primary mt-6" data-cta="bundle-3" aria-label="Get 3 bottles">
                  <span>Get 3 Bottles — AED 479</span>
                  <span className="btn-subtext">90 days • Best value</span>
                </a>
                <p className="mt-3 text-xs text-center text-slate-500">60‑day money‑back guarantee</p>
              </div>
            </div>

            <div className="mt-10 flex flex-col md:flex-row items-center justify-center gap-4 text-sm text-slate-600">
              <div className="flex items-center gap-2"><svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor"><path d="M12 1l3 7h7l-5.5 4.5L18 21l-6-4-6 4 1.5-8.5L2 8h7z"/></svg> 60‑Day Money‑Back Guarantee</div>
              <div className="flex items-center gap-2"><svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor"><path d="M12 1l3 7h7l-5.5 4.5L18 21l-6-4-6 4 1.5-8.5L2 8h7z"/></svg> Secure Checkout</div>
              <div className="flex items-center gap-2"><svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor"><path d="M12 1l3 7h7l-5.5 4.5L18 21l-6-4-6 4 1.5-8.5L2 8h7z"/></svg> Premium Quality Guaranteed</div>
            </div>
          </div>
        </section>

        <section id="benefits" className="py-20 sm:py-32 bg-gradient-to-b from-emerald-50 to-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl">
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight bg-gradient-to-r from-emerald-700 to-green-700 bg-clip-text text-transparent">Transform Your Daily Experience</h2>
              <p className="mt-3 text-lg text-slate-700"><span className="font-bold text-slate-800">Pure relaxation without drowsiness.</span> Discover what it feels like to truly unwind, release tension, and find your center again.</p>
            </div>

            <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="rounded-3xl bg-gradient-to-br from-white to-blue-50 p-8 ring-1 ring-blue-200/50 shadow-xl">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center mb-6 shadow-lg">
                  <span className="text-white text-3xl">🧘‍♀️</span>
                </div>
                <h3 className="mt-2 font-bold text-2xl text-blue-700">Deep Relaxation</h3>
                <p className="mt-4 text-slate-700 leading-relaxed"><span className="font-semibold">Melt away physical tension</span> and quiet the endless mental chatter. Feel your shoulders drop, your jaw unclench, and your <span className="font-semibold">whole being finally exhale</span>.</p>
              </div>
              <div className="rounded-3xl bg-gradient-to-br from-white to-emerald-50 p-8 ring-1 ring-emerald-200/50 shadow-xl">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-emerald-500 to-green-600 flex items-center justify-center mb-6 shadow-lg">
                  <span className="text-white text-3xl">🌿</span>
                </div>
                <h3 className="mt-2 font-bold text-2xl text-emerald-700">Pain Relief</h3>
                <p className="mt-4 text-slate-700 leading-relaxed"><span className="font-semibold">Address stress at its source</span> and watch how chronic pain patterns shift. When your nervous system calms, <span className="font-semibold">your body can finally heal</span>.</p>
              </div>
              <div className="rounded-3xl bg-gradient-to-br from-white to-purple-50 p-8 ring-1 ring-purple-200/50 shadow-xl">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-500 to-indigo-600 flex items-center justify-center mb-6 shadow-lg">
                  <span className="text-white text-3xl">🌙</span>
                </div>
                <h3 className="mt-2 font-bold text-2xl text-purple-700">Restorative Sleep</h3>
                <p className="mt-4 text-slate-700 leading-relaxed"><span className="font-semibold">Drift off naturally</span> without dependency. Wake up truly refreshed with <span className="font-semibold">clear thinking and sustained energy</span>—no morning fog.</p>
              </div>
            </div>
          </div>
        </section>

        <section id="science" className="py-16 sm:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-start">
                            <div>
                <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight bg-gradient-to-r from-emerald-700 to-indigo-700 bg-clip-text text-transparent">Why Zeinglow is different</h2>
                
                <div className="mt-6 bg-gradient-to-br from-green-50 to-emerald-50 border border-green-200/50 rounded-2xl p-6 shadow-lg">
                  <h3 className="font-bold text-green-800 text-lg mb-4 flex items-center gap-2">
                    <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                      <span className="text-white text-sm">✓</span>
                    </div>
                    Vegan & Plant-Based
                  </h3>
                  <p className="text-green-700">Gentle, botanical support your body understands.</p>
                </div>
                
                <div className="mt-4 bg-gradient-to-br from-emerald-50 to-green-50 border border-emerald-200/50 rounded-2xl p-6 shadow-lg ring-2 ring-emerald-300/30">
                  <h3 className="font-bold text-emerald-800 text-lg mb-4 flex items-center gap-2">
                    <div className="w-6 h-6 bg-emerald-500 rounded-full flex items-center justify-center">
                      <span className="text-white text-sm">✓</span>
                    </div>
                    100% Sugar-Free Formula
                  </h3>
                  <p className="text-emerald-700 font-medium">Natural sweetness that supports your body&apos;s healing. <span className="font-bold">No sugar crashes that trigger stress cycles.</span> Pure, clean relaxation.</p>
                </div>
                
                <div className="mt-4 bg-gradient-to-br from-purple-50 to-indigo-50 border border-purple-200/50 rounded-2xl p-6 shadow-lg">
                  <h3 className="font-bold text-purple-800 text-lg mb-4 flex items-center gap-2">
                    <div className="w-6 h-6 bg-purple-500 rounded-full flex items-center justify-center">
                      <span className="text-white text-sm">✓</span>
                    </div>
                    Clean Formula
                  </h3>
                  <p className="text-purple-700">No artificial colors or flavors. Just premium, effective ingredients.</p>
                </div>
                
                <div className="mt-8 bg-gradient-to-r from-indigo-50 to-purple-50 border border-indigo-200/50 rounded-2xl p-6 shadow-lg">
                  <div className="flex gap-4 items-start">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center shadow-lg">
                      <span className="font-black text-white text-lg">A</span>
                    </div>
                    <div>
                      <p className="font-bold text-indigo-800 text-lg">KSM‑66® Ashwagandha (600 mg)</p>
                      <p className="text-slate-700 mt-1">Clinically studied to reduce stress, support calm focus, and improve sleep quality.</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="rounded-3xl p-8 bg-gradient-to-br from-accent-100 to-primary-100 ring-1 ring-slate-200">
                <h3 className="text-xl font-bold">How to use</h3>
                <ol className="mt-4 space-y-3 text-slate-700 list-decimal list-inside">
                  <li>Take 2 gummies daily. Consistency is key.</li>
                  <li>For focus, take in the afternoon. For sleep, take 1–2 hours before bed.</li>
                  <li>Pair with light movement and hydration for best results.</li>
                </ol>
                <div className="mt-6 flex items-center gap-3 text-sm">
                  <div className="w-10 h-10 rounded-xl bg-white/70 backdrop-blur flex items-center justify-center ring-1 ring-slate-200">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary-700" viewBox="0 0 24 24" fill="currentColor"><path d="M9 12l2 2 4-4"/></svg>
                  </div>
                  <p className="text-slate-700">Most feel calmer within 1–2 weeks; best results by day 30.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="reviews" className="py-20 sm:py-32 bg-gradient-to-b from-emerald-50 to-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight bg-gradient-to-r from-emerald-600 to-green-600 bg-clip-text text-transparent">Loved by thousands</h2>
              <p className="mt-3 text-lg text-slate-700"><span className="font-bold text-emerald-600">4.8/5 stars</span> from 3,000+ verified customers • <span className="font-bold text-slate-800">92% feel calmer within 2 weeks</span></p>
              <div className="mt-6 bg-gradient-to-r from-emerald-50 to-green-50 border border-emerald-200/50 rounded-3xl p-8 shadow-premium">
                <p className="text-emerald-800 font-semibold flex items-center justify-center gap-3">
                  <div className="w-3 h-3 bg-emerald-500 rounded-full animate-pulse"></div>
                  <span className="font-bold">Join thousands</span> who made calm their new normal and rated Zeinglow highly for stress relief, better sleep, and day-to-day balance.
                </p>
              </div>
            </div>

            <div className="mt-16 grid md:grid-cols-3 gap-8">
              <div className="glass rounded-3xl p-8 shadow-card">
                <div className="flex items-center gap-2 text-emerald-500 text-xl mb-4">★★★★★</div>
                <p className="text-slate-800 font-medium text-lg leading-relaxed">&ldquo;<span className="font-bold text-emerald-700">I actually feel the tension melt away</span> in the evening—and I sleep deeper.&rdquo;</p>
                <p className="mt-4 text-sm font-semibold text-slate-600">— Sarah P., Project Manager</p>
              </div>
              <div className="glass rounded-3xl p-8 shadow-card ring-2 ring-emerald-200/30">
                <div className="flex items-center gap-2 text-emerald-500 text-xl mb-4">★★★★★</div>
                <p className="text-slate-800 font-medium text-lg leading-relaxed">&ldquo;<span className="font-bold text-emerald-700">Calm focus without the crash.</span> I&apos;m more present at work and at home.&rdquo;</p>
                <p className="mt-4 text-sm font-semibold text-slate-600">— James R., New Dad</p>
              </div>
              <div className="glass rounded-3xl p-8 shadow-card">
                <div className="flex items-center gap-2 text-emerald-500 text-xl mb-4">★★★★★</div>
                <p className="text-slate-800 font-medium text-lg leading-relaxed">&ldquo;<span className="font-bold text-emerald-700">The only nighttime routine I never skip</span>—finally, I wake up restored.&rdquo;</p>
                <p className="mt-4 text-sm font-semibold text-slate-600">— Priya K., Designer</p>
              </div>
            </div>

            <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-6 opacity-70">
              <div className="h-12 rounded-xl bg-slate-100"></div>
              <div className="h-12 rounded-xl bg-slate-100"></div>
              <div className="h-12 rounded-xl bg-slate-100"></div>
              <div className="h-12 rounded-xl bg-slate-100"></div>
            </div>
          </div>
        </section>

        <section id="faq" className="py-20 sm:py-32 bg-gradient-to-b from-white to-emerald-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12">
              <div>
                <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">Frequently asked</h2>
                <div className="mt-6 divide-y divide-slate-200">
                  <details className="py-4 group">
                    <summary className="flex items-center justify-between cursor-pointer font-semibold">Is it habit forming?
                      <span className="ml-4 text-slate-400 group-open:rotate-180 transition">▾</span></summary>
                    <p className="mt-3 text-slate-700">No. Ashwagandha is a botanical adaptogen with no known dependence potential.</p>
                  </details>
                  <details className="py-4 group">
                    <summary className="flex items-center justify-between cursor-pointer font-semibold">When will I feel it?
                      <span className="ml-4 text-slate-400 group-open:rotate-180 transition">▾</span></summary>
                    <p className="mt-3 text-slate-700">Many feel calmer in the first 1–2 weeks, with best results by day 30 of consistent use.</p>
                  </details>
                  <details className="py-4 group">
                    <summary className="flex items-center justify-between cursor-pointer font-semibold">Any side effects?
                      <span className="ml-4 text-slate-400 group-open:rotate-180 transition">▾</span></summary>
                    <p className="mt-3 text-slate-700">Most users tolerate it well. If pregnant, nursing, or on medication, consult your healthcare provider.</p>
                  </details>
                </div>
              </div>
              <div className="glass rounded-3xl p-10 shadow-premium">
                <h3 className="text-2xl font-extrabold text-emerald-800">60‑day calm‑or‑it&apos;s‑free promise</h3>
                <p className="mt-4 text-slate-700 text-lg leading-relaxed">Try Zeinglow for 60 days. If you don&apos;t feel less stress, better focus, or deeper sleep, we&apos;ll refund you—no questions asked.</p>
                <a href="/checkout" className="btn-primary mt-8" data-cta="faq-cta" aria-label="Start 60-day trial">Start My 60‑Day Trial — Risk‑Free</a>
              </div>
            </div>
          </div>
        </section>

        <footer className="py-12 bg-white border-t border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <p className="text-sm text-slate-600">© <span id="year"></span> Zeinglow. All rights reserved.</p>
              <div className="flex items-center gap-6 text-sm text-slate-600">
                <a href="#" className="hover:text-slate-900">Privacy</a>
                <a href="#" className="hover:text-slate-900">Terms</a>
                <a href="#" className="hover:text-slate-900">Contact</a>
              </div>
            </div>
          </div>
      </footer>

        <div className="fixed bottom-0 inset-x-0 z-40 p-2 md:hidden">
          <a href="/checkout" className="block w-full bg-gradient-to-r from-emerald-600 to-green-600 text-white text-center py-3 px-4 rounded-xl font-semibold text-sm shadow-lg hover:shadow-xl transition-all" data-cta="sticky-mobile" aria-label="Get Zeinglow Ashwagandha Gummies">
            Shop Now
          </a>
        </div>

        <div id="sticky-offer" className="hidden md:flex fixed bottom-4 inset-x-0 z-40 justify-center">
          <div className="glass backdrop-blur rounded-2xl px-4 py-3 shadow-lg ring-1 ring-white/40 flex items-center gap-4">
            <span className="text-sm font-semibold text-slate-800">Premium quality • Limited stock</span>
            <a href="/checkout" className="btn-primary" data-cta="sticky-desktop" aria-label="Open bundles from sticky bar">Shop Now</a>
          </div>
        </div>

        <style jsx global>{`
          body { background: transparent; }
          .glass { backdrop-filter: blur(20px); background: linear-gradient(180deg, rgba(255,255,255,.65), rgba(255,255,255,.35)); border: 1px solid rgba(255,255,255,.2); }
          
          /* Enhanced animations */
          @keyframes floatSlow { 0%{ transform:translateY(0) rotate(0deg) } 50%{ transform:translateY(-12px) rotate(1deg) } 100%{ transform:translateY(0) rotate(0deg) } }
          @keyframes sway { 0%{ transform:rotate(-3deg) scale(1) } 50%{ transform:rotate(3deg) scale(1.02) } 100%{ transform:rotate(-3deg) scale(1) } }
          @keyframes shimmer { 0% { background-position: -200% center; } 100% { background-position: 200% center; } }
          @keyframes ringPulse { 0% { box-shadow: 0 0 0 0 rgba(16,185,129,.4), 0 8px 32px -8px rgba(16,185,129,.3) } 70% { box-shadow: 0 0 0 20px rgba(16,185,129,0), 0 8px 32px -8px rgba(16,185,129,.3) } 100% { box-shadow: 0 0 0 0 rgba(16,185,129,0), 0 8px 32px -8px rgba(16,185,129,.3) } }
          
          .float-slow { animation: floatSlow 10s ease-in-out infinite; }
          .sway { animation: sway 12s ease-in-out infinite; transform-origin: center; }
          .cta-pulse { animation: ringPulse 3s infinite; }
          
          /* Modern button styles */
          .btn-primary { 
            position: relative; 
            display: inline-flex; 
            align-items: center; 
            justify-content: center; 
            width: 100%; 
            gap: .75rem; 
            border-radius: 1.5rem; 
            padding: 1.25rem 2rem; 
            font-size: 1.125rem; 
            font-weight: 700; 
            color: #fff; 
            background: linear-gradient(135deg, #10b981 0%, #059669 50%, #047857 100%);
            box-shadow: 0 20px 40px -12px rgba(16,185,129,.4), 0 8px 16px -8px rgba(0,0,0,.1);
            border: 1px solid rgba(255,255,255,.2);
            transition: all .3s cubic-bezier(.4,0,.2,1);
            overflow: hidden;
          }
          
          @media(min-width:640px){ .btn-primary{ width:auto; } }
          
          .btn-primary:hover{ 
            transform: translateY(-3px) scale(1.02); 
            box-shadow: 0 25px 50px -12px rgba(16,185,129,.5), 0 12px 24px -8px rgba(0,0,0,.15);
            background: linear-gradient(135deg, #059669 0%, #047857 50%, #065f46 100%);
          }
          
          .btn-primary:active{ 
            transform: translateY(-1px) scale(.98); 
            transition: all .1s ease;
          }
          
          .btn-primary::before{
            content:""; 
            position:absolute; 
            inset:0; 
            background: linear-gradient(90deg, transparent, rgba(255,255,255,.4), transparent);
            background-size: 200% 100%;
            animation: shimmer 2s infinite;
            border-radius: 1.5rem;
          }
          
          .btn-primary::after{ 
            content:""; 
            position:absolute; 
            inset:0; 
            border-radius: 1.5rem; 
            background: linear-gradient(135deg, rgba(255,255,255,.3), transparent, rgba(255,255,255,.1)); 
            opacity: 0;
            transition: opacity .3s ease;
          }
          
          .btn-primary:hover::after{ 
            opacity: 1; 
          }
          
          /* Secondary button */
          .btn-outline{ 
            position: relative; 
            display: inline-flex; 
            align-items: center; 
            justify-content: center; 
            width: 100%; 
            gap: .75rem; 
            border-radius: 1.5rem; 
            padding: 1.25rem 2rem; 
            font-size: 1.125rem; 
            font-weight: 700; 
            background: rgba(255,255,255,.9);
            backdrop-filter: blur(10px);
            border: 2px solid rgba(16,185,129,.3); 
            color: #047857; 
            box-shadow: 0 8px 32px -8px rgba(0,0,0,.1);
            transition: all .3s cubic-bezier(.4,0,.2,1); 
          }
          
          @media(min-width:640px){ .btn-outline{ width:auto; } }
          
          .btn-outline:hover{ 
            color: #fff; 
            border-color: #10b981; 
            background: linear-gradient(135deg, #10b981 0%, #059669 100%); 
            transform: translateY(-2px);
            box-shadow: 0 20px 40px -12px rgba(16,185,129,.4);
          }
          
          .btn-subtext{ 
            display: block; 
            font-size: .875rem; 
            font-weight: 600; 
            opacity: .9; 
            margin-top: .25rem;
          }
          
          /* Enhanced badges */
          .badge{ 
            display: inline-flex; 
            align-items: center; 
            gap: .5rem; 
            border-radius: 2rem; 
            padding: .5rem 1rem; 
            font-size: .875rem; 
            font-weight: 700; 
            background: linear-gradient(135deg, rgba(255,255,255,.9), rgba(255,255,255,.7)); 
            backdrop-filter: blur(10px);
            border: 1px solid rgba(255,255,255,.3);
            color: #047857; 
            box-shadow: 0 8px 32px -8px rgba(0,0,0,.1);
          }
          
          /* Premium gradient backgrounds */
          .gradient-premium { background: linear-gradient(135deg, #f0fdf4 0%, #dcfce7 25%, #bbf7d0 50%, #86efac 75%, #4ade80 100%); }
          .gradient-card { background: linear-gradient(135deg, rgba(255,255,255,.95) 0%, rgba(255,255,255,.85) 100%); }
          
          /* Enhanced shadows */
          .shadow-premium { box-shadow: 0 25px 50px -12px rgba(0,0,0,.15), 0 0 0 1px rgba(255,255,255,.5); }
          .shadow-card { box-shadow: 0 20px 40px -12px rgba(0,0,0,.1), 0 8px 16px -8px rgba(0,0,0,.05); }
        `}</style>
    </div>
    </>
  );
}
