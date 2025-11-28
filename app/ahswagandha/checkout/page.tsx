"use client";

import { useState, useEffect, Suspense } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { MetaCAPI } from "@/lib/meta-capi-client";

interface FormData {
  name: string;
  email: string;
  phone: string;
  bundle: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  phone?: string;
}

// Loading component for Suspense fallback
function CheckoutLoading() {
  return (
    <div className="min-h-screen bg-[#faf8f5] flex items-center justify-center">
      <div className="text-center">
        <div className="w-16 h-16 border-4 border-[#d4af37] border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
        <p className="text-gray-600">Loading checkout...</p>
      </div>
    </div>
  );
}

// Main checkout component
function AshwagandhaCheckoutContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    bundle: "2-bottles", // default to best seller
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState<FormErrors>({});
  const [timeLeft, setTimeLeft] = useState({
    hours: 7,
    minutes: 0,
    seconds: 0
  });
  const [stockLeft] = useState(Math.floor(Math.random() * 7) + 6);

  // Set bundle from URL params
  useEffect(() => {
    const bundleParam = searchParams.get('bundle');
    if (bundleParam && ['1-bottle', '2-bottles', '3-bottles'].includes(bundleParam)) {
      setFormData(prev => ({ ...prev, bundle: bundleParam }));
    }
  }, [searchParams]);

  // Track InitiateCheckout event
  useEffect(() => {
    MetaCAPI.trackInitiateCheckout({}, 249);
  }, []);

  // Countdown timer
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prevTime) => {
        const totalSeconds = prevTime.hours * 3600 + prevTime.minutes * 60 + prevTime.seconds;
        if (totalSeconds <= 0) {
          return { hours: 7, minutes: 0, seconds: 0 };
        }
        const newTotalSeconds = totalSeconds - 1;
        return {
          hours: Math.floor(newTotalSeconds / 3600),
          minutes: Math.floor((newTotalSeconds % 3600) / 60),
          seconds: newTotalSeconds % 60,
        };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const bundles: Record<string, { name: string; price: number; originalPrice: number; gummies: number; days: number; discount: string; savings: number; bottles: number }> = {
    "1-bottle": { name: "Starter Kit (1 Bottle)", price: 249, originalPrice: 279, gummies: 60, days: 30, discount: "10%", savings: 30, bottles: 1 },
    "2-bottles": { name: "Sleep Hero (2+1 FREE)", price: 498, originalPrice: 747, gummies: 180, days: 90, discount: "33%", savings: 249, bottles: 3 },
    "3-bottles": { name: "Family Pack (3+1 FREE)", price: 747, originalPrice: 996, gummies: 240, days: 120, discount: "25%", savings: 249, bottles: 4 },
  };

  const selectedBundle = bundles[formData.bundle];

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};
    
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Please enter a valid email";
    }
    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (!/^[\d\s\-\+\(\)]+$/.test(formData.phone)) {
      newErrors.phone = "Please enter a valid phone number";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;

    setIsSubmitting(true);
    
    try {
      // Save order to database
      const response = await fetch('/api/orders', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          bundle: formData.bundle,
          bundleName: selectedBundle.name,
          price: selectedBundle.price,
          gummies: selectedBundle.gummies,
          days: selectedBundle.days,
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to submit order');
      }

      const result = await response.json();
      
      // Track Purchase event with CAPI
      await MetaCAPI.trackPurchase(
        {
          email: formData.email,
          phone: formData.phone,
          firstName: formData.name.split(' ')[0],
          lastName: formData.name.split(' ').slice(1).join(' ') || undefined,
        },
        selectedBundle.price,
        'AED'
      );
      
      // Store order data in localStorage for thank-you page
      localStorage.setItem('ashwagandhaOrderData', JSON.stringify({
        ...formData,
        bundle: selectedBundle,
        orderNumber: result.order.orderNumber,
        orderDate: new Date().toLocaleDateString('en-US', { 
          year: 'numeric', 
          month: 'long', 
          day: 'numeric' 
        })
      }));
      
      router.push('/ahswagandha/thank-you');
    } catch (error) {
      console.error('Error submitting order:', error);
      alert('There was an error submitting your order. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({
        ...prev,
        [name]: ""
      }));
    }
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
        
        .bg-cream { background-color: #faf8f5; }
        .text-gold { color: #d4af37; }
        .text-primary { color: #4a3c5a; }
        .text-primary-dark { color: #2a2035; }
        .bg-primary { background-color: #4a3c5a; }
        .bg-primary-dark { background-color: #2a2035; }
        .border-primary { border-color: #4a3c5a; }
      `}</style>

      <div dir="ltr" className="min-h-screen bg-cream font-raleway text-left">
        {/* Header */}
        <header className="sticky top-0 z-50 backdrop-blur-xl bg-white/95 border-b border-[#d4af37]/20 shadow-lg">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
              <Link href="/ahswagandha" className="flex items-center">
                <Image
                  src="/logozeinglow.png"
                  alt="ZeinGlow"
                  width={140}
                  height={42}
                  className="h-9 w-auto"
                />
              </Link>
              <div className="text-sm text-[#4a3c5a] font-medium flex items-center gap-2">
                <i className="fas fa-lock text-[#d4af37]" />
                Secure Checkout
              </div>
            </div>
          </div>
        </header>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Urgency Banner with Timer */}
          <div className="mb-8 gradient-primary text-white rounded-2xl p-6 shadow-xl">
            <div className="text-center mb-4">
              <div className="flex items-center justify-center gap-2 text-sm font-bold mb-2">
                <span className="w-2 h-2 bg-[#d4af37] rounded-full animate-pulse"></span>
                <span>⚡ Limited Time: Only {stockLeft} bottles left in stock!</span>
                <span className="w-2 h-2 bg-[#d4af37] rounded-full animate-pulse"></span>
              </div>
              <div className="text-lg font-bold mb-3 text-[#d4af37]">Special Discount Ends In:</div>
              <div className="flex items-center justify-center space-x-4 text-2xl font-mono font-bold">
                <div className="gradient-gold text-[#2a2035] px-3 py-2 rounded-lg">
                  {String(timeLeft.hours).padStart(2, '0')}
                </div>
                <span>:</span>
                <div className="gradient-gold text-[#2a2035] px-3 py-2 rounded-lg">
                  {String(timeLeft.minutes).padStart(2, '0')}
                </div>
                <span>:</span>
                <div className="gradient-gold text-[#2a2035] px-3 py-2 rounded-lg">
                  {String(timeLeft.seconds).padStart(2, '0')}
                </div>
              </div>
              <div className="text-sm mt-2 opacity-90">
                Hours : Minutes : Seconds
              </div>
            </div>
          </div>

          {/* Sales Headline */}
          <div className="text-center mb-8">
            <h1 className="text-3xl sm:text-4xl font-playfair font-bold text-[#4a3c5a] mb-4">
              You&apos;re One Step Away From
              <br />
              <span className="gradient-text">
                Deep, Restful Sleep
              </span>
            </h1>
            <p className="text-lg text-gray-600">
              Join 8,000+ happy customers enjoying peaceful nights
            </p>
          </div>

          {/* Two Column Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Left Column - Bundle Selection & Social Proof */}
            <div className="space-y-8">
              {/* Bundle Selection */}
              <div className="bg-white rounded-3xl p-6 shadow-xl border border-[#d4af37]/20">
                <h3 className="text-xl font-bold text-[#4a3c5a] mb-4 font-playfair">Choose Your Bundle:</h3>
                <div className="space-y-3">
                  {Object.entries(bundles).map(([key, bundle]) => (
                    <label 
                      key={key} 
                      className={`flex items-center p-4 rounded-2xl border-2 cursor-pointer transition-all hover:bg-[#faf8f5] relative ${
                        formData.bundle === key 
                          ? 'border-[#d4af37] bg-[#faf8f5]' 
                          : 'border-gray-200 bg-white'
                      }`}
                    >
                      {/* Discount Badge */}
                      <div className="absolute -top-2 -right-2 gradient-gold text-[#2a2035] px-2 py-1 rounded-full text-xs font-bold">
                        {bundle.discount} OFF
                      </div>
                      
                      {key === '2-bottles' && (
                        <div className="absolute -top-2 -left-2 bg-[#4a3c5a] text-white px-2 py-1 rounded-full text-xs font-bold">
                          ⭐ BEST VALUE
                        </div>
                      )}
                      
                      <input
                        type="radio"
                        name="bundle"
                        value={key}
                        checked={formData.bundle === key}
                        onChange={handleInputChange}
                        className="sr-only"
                      />
                      <div className="flex-1 flex items-center justify-between">
                        <div>
                          <div className="font-bold text-lg text-[#4a3c5a]">{bundle.name}</div>
                          <div className="text-sm text-gray-600">{bundle.gummies} gummies • {bundle.days}-day supply</div>
                          <div className="text-xs text-[#d4af37] font-semibold mt-1">{bundle.bottles} bottle{bundle.bottles > 1 ? 's' : ''} total</div>
                        </div>
                        <div className="text-right">
                          <div className="text-sm text-gray-400 line-through">AED {bundle.originalPrice}</div>
                          <div className="text-2xl font-extrabold text-[#4a3c5a]">AED {bundle.price}</div>
                          <div className="text-xs text-green-600 font-semibold">Save {bundle.savings} AED</div>
                        </div>
                      </div>
                    </label>
                  ))}
                </div>
              </div>

              {/* Social Proof - Desktop Only */}
              <div className="hidden lg:block bg-gradient-to-r from-[#4a3c5a]/5 to-[#d4af37]/5 rounded-3xl p-6 border border-[#d4af37]/20">
                <div className="flex items-center gap-4 mb-4">
                  <div className="flex -space-x-2">
                    {[1,2,3,4,5].map(i => (
                      <Image
                        key={i}
                        src={`/avatar/avatar${i}.png`}
                        alt={`Customer ${i}`}
                        width={40}
                        height={40}
                        className="w-10 h-10 rounded-full border-2 border-white"
                      />
                    ))}
                  </div>
                  <div>
                    <div className="font-bold text-[#4a3c5a]">Sara & 2,847 others</div>
                    <div className="text-sm text-gray-600">ordered in the last 24 hours</div>
                  </div>
                </div>
                <div className="flex items-center text-[#d4af37] mb-3">
                  <span className="text-xl">★★★★★</span>
                  <span className="ml-2 font-semibold text-[#4a3c5a]">4.9/5 from verified customers</span>
                </div>
                
                {/* Live Activity */}
                <div className="bg-white rounded-xl p-3 border border-[#d4af37]/20">
                  <div className="flex items-center gap-2 text-sm">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                    <span className="font-medium text-gray-700">
                      Someone in Dubai just ordered the Sleep Hero bundle • 2 min ago
                    </span>
                  </div>
                </div>
              </div>

              {/* Trust Signals - Desktop Only */}
              <div className="hidden lg:grid grid-cols-2 gap-4">
                <div className="bg-white rounded-2xl p-4 shadow-lg text-center border border-[#d4af37]/20">
                  <div className="w-12 h-12 mx-auto mb-2 gradient-gold rounded-xl flex items-center justify-center">
                    <i className="fas fa-shield-alt text-[#2a2035]" />
                  </div>
                  <div className="font-bold text-sm text-[#4a3c5a]">30-Day Guarantee</div>
                  <div className="text-xs text-gray-600">Risk-free promise</div>
                </div>
                <div className="bg-white rounded-2xl p-4 shadow-lg text-center border border-[#d4af37]/20">
                  <div className="w-12 h-12 mx-auto mb-2 gradient-gold rounded-xl flex items-center justify-center">
                    <i className="fas fa-truck text-[#2a2035]" />
                  </div>
                  <div className="font-bold text-sm text-[#4a3c5a]">Free Delivery</div>
                  <div className="text-xs text-gray-600">No hidden fees</div>
                </div>
              </div>
            </div>

            {/* Right Column - Order Form */}
            <div className="lg:sticky lg:top-24 lg:self-start">
              {/* Order Form Card */}
              <div className="bg-white rounded-3xl shadow-2xl border border-[#d4af37]/20 overflow-hidden">
                {/* Order Summary Header */}
                <div className="gradient-primary text-white p-6 text-center">
                  <h2 className="text-2xl font-bold font-playfair mb-2">Complete Your Order</h2>
                  <p className="text-[#d4af37]">Cash on Delivery • No payment now</p>
                </div>

                <div className="p-6 space-y-6">
                  {/* Order Summary */}
                  <div className="bg-[#faf8f5] rounded-2xl p-4 border border-[#d4af37]/20">
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-semibold text-[#4a3c5a]">{selectedBundle.name}</span>
                      <span className="font-bold text-[#4a3c5a]">AED {selectedBundle.price}</span>
                    </div>
                    <div className="text-sm text-gray-600 mb-3">
                      {selectedBundle.gummies} gummies • {selectedBundle.days}-day supply
                    </div>
                    <div className="border-t border-[#d4af37]/20 pt-3 flex justify-between items-center">
                      <span className="font-bold text-lg text-[#4a3c5a]">Total:</span>
                      <span className="font-extrabold text-2xl text-[#4a3c5a]">AED {selectedBundle.price}</span>
                    </div>
                    <div className="text-center text-sm text-green-600 font-medium mt-2">
                      ✓ FREE shipping included
                    </div>
                  </div>

                  {/* Form */}
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-semibold text-[#4a3c5a] mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        className={`w-full px-4 py-3 rounded-xl border-2 transition-colors ${
                          errors.name ? 'border-red-300 bg-red-50' : 'border-gray-200 focus:border-[#d4af37]'
                        } focus:outline-none`}
                        placeholder="Enter your full name"
                      />
                      {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-semibold text-[#4a3c5a] mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className={`w-full px-4 py-3 rounded-xl border-2 transition-colors ${
                          errors.email ? 'border-red-300 bg-red-50' : 'border-gray-200 focus:border-[#d4af37]'
                        } focus:outline-none`}
                        placeholder="your@email.com"
                      />
                      {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                    </div>

                    <div>
                      <label htmlFor="phone" className="block text-sm font-semibold text-[#4a3c5a] mb-2">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className={`w-full px-4 py-3 rounded-xl border-2 transition-colors ${
                          errors.phone ? 'border-red-300 bg-red-50' : 'border-gray-200 focus:border-[#d4af37]'
                        } focus:outline-none`}
                        placeholder="+971 50 123 4567"
                      />
                      {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
                    </div>

                    {/* Payment Method */}
                    <div className="bg-[#d4af37]/10 border border-[#d4af37]/30 rounded-xl p-4">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 gradient-gold rounded-lg flex items-center justify-center">
                          <i className="fas fa-money-bill-wave text-[#2a2035]" />
                        </div>
                        <div>
                          <div className="font-bold text-[#4a3c5a]">Cash on Delivery</div>
                          <div className="text-sm text-gray-600">Pay when you receive your order</div>
                        </div>
                      </div>
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full gradient-gold hover:shadow-xl hover:shadow-[#d4af37]/30 text-[#2a2035] font-bold py-4 rounded-xl transition-all duration-300 transform hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? (
                        <div className="flex items-center justify-center gap-2">
                          <div className="w-5 h-5 border-2 border-[#2a2035] border-t-transparent rounded-full animate-spin"></div>
                          Processing...
                        </div>
                      ) : (
                        <div className="flex items-center justify-center gap-2">
                          <span>Complete Order - AED {selectedBundle.price}</span>
                          <i className="fas fa-arrow-right" />
                        </div>
                      )}
                    </button>

                    <div className="text-center text-xs text-gray-500">
                      By completing this order, you agree to our terms and conditions
                    </div>
                  </form>

                  {/* Final Push */}
                  <div className="bg-[#4a3c5a]/5 border border-[#4a3c5a]/20 rounded-xl p-4 text-center">
                    <div className="font-bold text-[#4a3c5a] mb-1">🎯 Start feeling the difference in just 1-2 weeks!</div>
                    <div className="text-sm text-gray-600">Join thousands who chose better sleep over restless nights</div>
                  </div>
                </div>
              </div>

              {/* Mobile-Only Social Proof Section */}
              <div className="lg:hidden mt-8 space-y-6">
                <div className="bg-gradient-to-r from-[#4a3c5a]/5 to-[#d4af37]/5 rounded-3xl p-6 border border-[#d4af37]/20">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="flex -space-x-2">
                      {[1,2,3,4,5].map(i => (
                        <Image
                          key={i}
                          src={`/avatar/avatar${i}.png`}
                          alt={`Customer ${i}`}
                          width={40}
                          height={40}
                          className="w-10 h-10 rounded-full border-2 border-white"
                        />
                      ))}
                    </div>
                    <div>
                      <div className="font-bold text-[#4a3c5a]">Sara & 2,847 others</div>
                      <div className="text-sm text-gray-600">ordered in the last 24 hours</div>
                    </div>
                  </div>
                  <div className="flex items-center text-[#d4af37] mb-3">
                    <span className="text-xl">★★★★★</span>
                    <span className="ml-2 font-semibold text-[#4a3c5a]">4.9/5 from verified customers</span>
                  </div>
                </div>

                {/* Trust Signals - Mobile Only */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white rounded-2xl p-4 shadow-lg text-center border border-[#d4af37]/20">
                    <div className="w-12 h-12 mx-auto mb-2 gradient-gold rounded-xl flex items-center justify-center">
                      <i className="fas fa-shield-alt text-[#2a2035]" />
                    </div>
                    <div className="font-bold text-sm text-[#4a3c5a]">30-Day Guarantee</div>
                    <div className="text-xs text-gray-600">Risk-free promise</div>
                  </div>
                  <div className="bg-white rounded-2xl p-4 shadow-lg text-center border border-[#d4af37]/20">
                    <div className="w-12 h-12 mx-auto mb-2 gradient-gold rounded-xl flex items-center justify-center">
                      <i className="fas fa-truck text-[#2a2035]" />
                    </div>
                    <div className="font-bold text-sm text-[#4a3c5a]">Free Delivery</div>
                    <div className="text-xs text-gray-600">No hidden fees</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Testimonial */}
          <div className="mt-12 bg-white rounded-3xl p-8 shadow-xl text-center border border-[#d4af37]/20">
            <div className="text-[#d4af37] text-xl mb-3">★★★★★</div>
            <blockquote className="text-lg font-medium text-[#4a3c5a] mb-4 font-playfair">
              &ldquo;I was skeptical at first, but after just two weeks with ZeinGlow, I sleep like a baby and wake up refreshed. Best investment in my wellness!&rdquo;
            </blockquote>
            <cite className="text-sm font-semibold text-gray-600">— Sara M., Dubai</cite>
          </div>
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

// Default export with Suspense boundary
export default function AshwagandhaCheckout() {
  return (
    <Suspense fallback={<CheckoutLoading />}>
      <AshwagandhaCheckoutContent />
    </Suspense>
  );
}

