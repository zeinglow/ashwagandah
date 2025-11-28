"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

interface OrderData {
  name: string;
  email: string;
  phone: string;
  bundle: {
    name: string;
    price: number;
    gummies: number;
    days: number;
    bottles: number;
  };
  orderNumber: string;
  orderDate: string;
}

export default function AshwagandhaThankYou() {
  const [orderData, setOrderData] = useState<OrderData | null>(null);
  const [timeLeft, setTimeLeft] = useState(24 * 60 * 60); // 24 hours in seconds

  useEffect(() => {
    // Get order data from localStorage
    const storedOrderData = localStorage.getItem('ashwagandhaOrderData');
    if (storedOrderData) {
      setOrderData(JSON.parse(storedOrderData));
    }

    // Countdown timer
    const timer = setInterval(() => {
      setTimeLeft((prevTime) => {
        if (prevTime <= 0) {
          clearInterval(timer);
          return 0;
        }
        return prevTime - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (seconds: number): string => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  if (!orderData) {
    return (
      <>
        <style jsx global>{`
          @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700&family=Raleway:wght@300;400;500;600;700&display=swap');
          .font-playfair { font-family: 'Playfair Display', serif; }
          .font-raleway { font-family: 'Raleway', sans-serif; }
          .gradient-gold { background: linear-gradient(135deg, #d4af37 0%, #f4e4bc 50%, #d4af37 100%); }
          .bg-cream { background-color: #faf8f5; }
        `}</style>
        <div dir="ltr" className="min-h-screen bg-cream flex items-center justify-center font-raleway text-left">
          <div className="text-center">
            <div className="w-16 h-16 border-4 border-[#d4af37] border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
            <p className="text-gray-600">Loading your order confirmation...</p>
          </div>
        </div>
      </>
    );
  }

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
        .bg-primary { background-color: #4a3c5a; }
        .bg-primary-dark { background-color: #2a2035; }
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
              <div className="text-sm text-green-600 font-medium flex items-center gap-2">
                <i className="fas fa-check-circle" />
                Order Confirmed
              </div>
            </div>
          </div>
        </header>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Success Animation & Header */}
          <div className="text-center mb-12">
            <div className="w-24 h-24 mx-auto mb-6 gradient-gold rounded-full flex items-center justify-center shadow-2xl">
              <i className="fas fa-check text-4xl text-[#2a2035]" />
            </div>
            
            <h1 className="text-4xl sm:text-5xl font-playfair font-bold text-[#4a3c5a] mb-4">
              🎉 Congratulations!
            </h1>
            <p className="text-xl text-gray-700 mb-6">
              Your journey to <span className="font-bold text-[#4a3c5a]">deep, restful sleep</span> starts now!
            </p>
            
            <div className="gradient-gold border border-[#d4af37]/30 rounded-3xl p-6 inline-block">
              <div className="text-sm text-[#2a2035] font-semibold mb-1">Order Number</div>
              <div className="text-2xl font-extrabold text-[#2a2035]">{orderData.orderNumber}</div>
            </div>
          </div>

          {/* Order Details */}
          <div className="bg-white rounded-3xl shadow-2xl border border-[#d4af37]/20 overflow-hidden mb-8">
            <div className="gradient-primary text-white p-6 text-center">
              <h2 className="text-2xl font-bold font-playfair">Order Confirmation</h2>
              <p className="text-[#d4af37] mt-1">We&apos;ll call you within 24 hours to confirm delivery details</p>
            </div>
            
            <div className="p-6 space-y-6">
              {/* Customer Details */}
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-bold text-[#4a3c5a] mb-3 font-playfair">Customer Information</h3>
                  <div className="space-y-2 text-sm">
                    <div><span className="text-gray-600">Name:</span> <span className="font-medium">{orderData.name}</span></div>
                    <div><span className="text-gray-600">Email:</span> <span className="font-medium">{orderData.email}</span></div>
                    <div><span className="text-gray-600">Phone:</span> <span className="font-medium">{orderData.phone}</span></div>
                    <div><span className="text-gray-600">Order Date:</span> <span className="font-medium">{orderData.orderDate}</span></div>
                  </div>
                </div>
                
                <div>
                  <h3 className="font-bold text-[#4a3c5a] mb-3 font-playfair">Order Summary</h3>
                  <div className="bg-[#faf8f5] rounded-2xl p-4 border border-[#d4af37]/20">
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-semibold text-[#4a3c5a]">{orderData.bundle.name}</span>
                      <span className="font-bold text-[#4a3c5a]">AED {orderData.bundle.price}</span>
                    </div>
                    <div className="text-sm text-gray-600 mb-3">
                      {orderData.bundle.gummies} gummies • {orderData.bundle.days}-day supply
                    </div>
                    <div className="border-t border-[#d4af37]/20 pt-3 flex justify-between items-center">
                      <span className="font-bold text-lg text-[#4a3c5a]">Total (Cash on Delivery):</span>
                      <span className="font-extrabold text-xl text-[#4a3c5a]">AED {orderData.bundle.price}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* What Happens Next */}
          <div className="bg-white rounded-3xl shadow-xl border border-[#d4af37]/20 p-8 mb-8">
            <h2 className="text-2xl font-bold text-center text-[#4a3c5a] mb-8 font-playfair">What Happens Next?</h2>
            
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 gradient-primary rounded-2xl flex items-center justify-center shadow-lg">
                  <span className="text-[#d4af37] font-bold text-xl">1</span>
                </div>
                <h3 className="font-bold text-[#4a3c5a] mb-2">We&apos;ll Call You</h3>
                <p className="text-sm text-gray-600">Our team will call you within 24 hours to confirm your order and delivery address.</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 gradient-primary rounded-2xl flex items-center justify-center shadow-lg">
                  <span className="text-[#d4af37] font-bold text-xl">2</span>
                </div>
                <h3 className="font-bold text-[#4a3c5a] mb-2">Fast Delivery</h3>
                <p className="text-sm text-gray-600">Your ZeinGlow gummies will arrive at your doorstep within 2-3 business days.</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 gradient-primary rounded-2xl flex items-center justify-center shadow-lg">
                  <span className="text-[#d4af37] font-bold text-xl">3</span>
                </div>
                <h3 className="font-bold text-[#4a3c5a] mb-2">Start Your Journey</h3>
                <p className="text-sm text-gray-600">Take 2 gummies daily and feel the stress melt away. Results in 1-2 weeks!</p>
              </div>
            </div>
          </div>

          {/* Special Bonus Offer */}
          <div className="gradient-gold text-[#2a2035] rounded-3xl p-8 mb-8 text-center shadow-2xl">
            <div className="text-3xl mb-3">🎁</div>
            <h2 className="text-2xl font-bold mb-4 font-playfair">Exclusive Offer: Save 25% on Your Next Order!</h2>
            <p className="text-[#4a3c5a] mb-6">
              As a valued ZeinGlow customer, you get early access to reorder at a special price.
            </p>
            
            <div className="bg-[#2a2035] text-white rounded-2xl p-4 mb-6 inline-block">
              <div className="text-sm font-semibold mb-1 text-[#d4af37]">Use Code:</div>
              <div className="text-3xl font-extrabold tracking-wider">SLEEP25</div>
              <div className="text-sm text-[#d4af37] mt-1">Valid for next 7 days only</div>
            </div>
            
            <div>
              <Link href="/ahswagandha" className="inline-flex items-center gap-2 bg-[#2a2035] text-white font-bold px-8 py-3 rounded-xl hover:bg-[#4a3c5a] transition-colors">
                <span>Shop Again & Save</span>
                <i className="fas fa-arrow-right" />
              </Link>
            </div>
          </div>

          {/* Timer for Urgency */}
          <div className="bg-red-50 border border-red-200 rounded-3xl p-6 text-center mb-8">
            <h3 className="font-bold text-red-800 mb-2">⏰ Order Confirmation Expires In:</h3>
            <div className="text-3xl font-extrabold text-red-600 font-mono">
              {formatTime(timeLeft)}
            </div>
            <p className="text-sm text-red-700 mt-2">
              Please keep your phone available for the confirmation call
            </p>
          </div>

          {/* Social Sharing */}
          <div className="bg-white rounded-3xl shadow-xl border border-[#d4af37]/20 p-8 text-center">
            <h2 className="text-xl font-bold text-[#4a3c5a] mb-4 font-playfair">Share Your Wellness Journey</h2>
            <p className="text-gray-600 mb-6">
              Help your friends and family discover the rest they deserve!
            </p>
            
            <div className="flex justify-center gap-4">
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl font-semibold transition-colors flex items-center gap-2">
                <i className="fab fa-facebook-f" />
                Share on Facebook
              </button>
              <button className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-xl font-semibold transition-colors flex items-center gap-2">
                <i className="fab fa-whatsapp" />
                Share on WhatsApp
              </button>
            </div>
          </div>

          {/* Support Info */}
          <div className="mt-12 text-center bg-[#4a3c5a]/5 rounded-3xl p-6 border border-[#4a3c5a]/10">
            <h3 className="font-bold text-[#4a3c5a] mb-3 font-playfair">Need Help?</h3>
            <p className="text-gray-700 mb-4">
              Our support team is here to help you every step of the way.
            </p>
            <div className="space-y-2 text-sm text-gray-600">
              <div className="flex items-center justify-center gap-2">
                <i className="fas fa-envelope text-[#d4af37]" />
                Email: support@zeinglow.com
              </div>
              <div className="flex items-center justify-center gap-2">
                <i className="fab fa-whatsapp text-[#d4af37]" />
                WhatsApp: +971 50 341 21 74
              </div>
              <div className="flex items-center justify-center gap-2">
                <i className="fas fa-clock text-[#d4af37]" />
                Available: Sunday - Thursday, 9 AM - 6 PM
              </div>
            </div>
          </div>

          {/* Back to Home */}
          <div className="text-center mt-8">
            <Link href="/ahswagandha" className="inline-flex items-center gap-2 text-[#4a3c5a] hover:text-[#d4af37] font-semibold transition-colors">
              <i className="fas fa-arrow-left" />
              <span>Back to Homepage</span>
            </Link>
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

