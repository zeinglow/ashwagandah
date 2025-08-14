"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

interface OrderData {
  name: string;
  email: string;
  phone: string;
  bundle: {
    name: string;
    price: number;
    gummies: number;
    days: number;
  };
  orderNumber: string;
  orderDate: string;
}

export default function ThankYou() {
  const [orderData, setOrderData] = useState<OrderData | null>(null);
  const [timeLeft, setTimeLeft] = useState(24 * 60 * 60); // 24 hours in seconds

  useEffect(() => {
    // Get order data from localStorage
    const storedOrderData = localStorage.getItem('orderData');
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
      <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-green-50 to-teal-50 flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-emerald-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-slate-600">Loading your order confirmation...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-green-50 to-teal-50">
      {/* Header */}
      <header className="sticky top-0 z-50 backdrop-blur-xl bg-white/95 border-b border-emerald-100/50 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-500 to-green-600 shadow-xl flex items-center justify-center">
                <div className="w-5 h-5 rounded-lg bg-white/30"></div>
              </div>
              <span className="text-xl font-extrabold tracking-tight">
                <span className="text-emerald-700">Zein</span>
                <span className="text-green-700">glow</span>
              </span>
            </div>
            <div className="text-sm text-emerald-600 font-medium">
              ✅ Order Confirmed
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Success Animation & Header */}
        <div className="text-center mb-12">
          <div className="w-24 h-24 mx-auto mb-6 bg-gradient-to-br from-emerald-500 to-green-600 rounded-full flex items-center justify-center shadow-2xl">
            <svg className="w-12 h-12 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
            </svg>
          </div>
          
          <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 mb-4">
            🎉 Congratulations!
          </h1>
          <p className="text-xl text-slate-700 mb-6">
            Your journey to <span className="font-bold text-emerald-600">daily calm & deep sleep</span> starts now!
          </p>
          
          <div className="bg-gradient-to-r from-emerald-100 to-green-100 border border-emerald-200 rounded-3xl p-6 inline-block">
            <div className="text-sm text-emerald-700 font-semibold mb-1">Order Number</div>
            <div className="text-2xl font-extrabold text-emerald-800">{orderData.orderNumber}</div>
          </div>
        </div>

        {/* Order Details */}
        <div className="bg-white rounded-3xl shadow-2xl border border-emerald-100 overflow-hidden mb-8">
          <div className="bg-gradient-to-r from-emerald-500 to-green-600 text-white p-6 text-center">
            <h2 className="text-2xl font-bold">Order Confirmation</h2>
            <p className="text-emerald-100 mt-1">We&apos;ll call you within 24 hours to confirm delivery details</p>
          </div>
          
          <div className="p-6 space-y-6">
            {/* Customer Details */}
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-bold text-slate-900 mb-3">Customer Information</h3>
                <div className="space-y-2 text-sm">
                  <div><span className="text-slate-600">Name:</span> <span className="font-medium">{orderData.name}</span></div>
                  <div><span className="text-slate-600">Email:</span> <span className="font-medium">{orderData.email}</span></div>
                  <div><span className="text-slate-600">Phone:</span> <span className="font-medium">{orderData.phone}</span></div>
                  <div><span className="text-slate-600">Order Date:</span> <span className="font-medium">{orderData.orderDate}</span></div>
                </div>
              </div>
              
              <div>
                <h3 className="font-bold text-slate-900 mb-3">Order Summary</h3>
                <div className="bg-emerald-50 rounded-2xl p-4 border border-emerald-200">
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-semibold">{orderData.bundle.name}</span>
                    <span className="font-bold text-emerald-600">AED {orderData.bundle.price}</span>
                  </div>
                  <div className="text-sm text-slate-600 mb-3">
                    {orderData.bundle.gummies} gummies • {orderData.bundle.days} days supply
                  </div>
                  <div className="border-t border-emerald-200 pt-3 flex justify-between items-center">
                    <span className="font-bold text-lg">Total (COD):</span>
                    <span className="font-extrabold text-xl text-emerald-600">AED {orderData.bundle.price}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* What Happens Next */}
        <div className="bg-white rounded-3xl shadow-xl border border-emerald-100 p-8 mb-8">
          <h2 className="text-2xl font-bold text-center text-slate-900 mb-8">What Happens Next?</h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-xl">1</span>
              </div>
              <h3 className="font-bold text-slate-900 mb-2">We Call You</h3>
              <p className="text-sm text-slate-600">Our team will contact you within 24 hours to confirm your order and delivery address.</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-xl">2</span>
              </div>
              <h3 className="font-bold text-slate-900 mb-2">Fast Delivery</h3>
              <p className="text-sm text-slate-600">Your Zeinglow gummies will be delivered to your doorstep within 2-3 business days.</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-emerald-500 to-green-600 rounded-2xl flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-xl">3</span>
              </div>
              <h3 className="font-bold text-slate-900 mb-2">Start Your Journey</h3>
              <p className="text-sm text-slate-600">Take 2 gummies daily and feel the stress melt away. Results in 1-2 weeks!</p>
            </div>
          </div>
        </div>

        {/* Special Bonus Offer */}
        <div className="bg-gradient-to-r from-amber-500 to-orange-500 text-white rounded-3xl p-8 mb-8 text-center shadow-2xl">
          <div className="text-3xl mb-3">🎁</div>
          <h2 className="text-2xl font-bold mb-4">Exclusive Bonus: Save 25% on Your Next Order!</h2>
          <p className="text-amber-100 mb-6">
            Since you&apos;re now part of the Zeinglow family, we&apos;re giving you early access to reorder at a special price.
          </p>
          
          <div className="bg-white/20 backdrop-blur rounded-2xl p-4 mb-6">
            <div className="text-sm font-semibold mb-1">Use code:</div>
            <div className="text-3xl font-extrabold tracking-wider">CALM25</div>
            <div className="text-sm text-amber-100 mt-1">Valid for next 7 days only</div>
          </div>
          
          <Link href="/" className="inline-flex items-center gap-2 bg-white text-orange-600 font-bold px-8 py-3 rounded-xl hover:bg-amber-50 transition-colors">
            <span>Shop Again & Save</span>
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
            </svg>
          </Link>
        </div>

        {/* Timer for Urgency */}
        <div className="bg-red-50 border border-red-200 rounded-3xl p-6 text-center mb-8">
          <h3 className="font-bold text-red-800 mb-2">⏰ Your Order Confirmation Expires In:</h3>
          <div className="text-3xl font-extrabold text-red-600 font-mono">
            {formatTime(timeLeft)}
          </div>
          <p className="text-sm text-red-700 mt-2">
            Please keep your phone available for our confirmation call
          </p>
        </div>

        {/* Social Sharing */}
        <div className="bg-white rounded-3xl shadow-xl border border-emerald-100 p-8 text-center">
          <h2 className="text-xl font-bold text-slate-900 mb-4">Share Your Wellness Journey</h2>
          <p className="text-slate-600 mb-6">
            Help your friends and family discover the calm they deserve!
          </p>
          
          <div className="flex justify-center gap-4">
            <button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-xl font-semibold transition-colors">
              Share on Facebook
            </button>
            <button className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-xl font-semibold transition-colors">
              Share on WhatsApp
            </button>
          </div>
        </div>

        {/* Support Info */}
        <div className="mt-12 text-center bg-emerald-50 rounded-3xl p-6 border border-emerald-200">
          <h3 className="font-bold text-emerald-800 mb-3">Need Help?</h3>
          <p className="text-emerald-700 mb-4">
            Our customer support team is here to assist you every step of the way.
          </p>
          <div className="space-y-2 text-sm text-emerald-600">
            <div>📧 Email: support@zeinglow.com</div>
            <div>📱 WhatsApp: +971 50 123 4567</div>
            <div>🕒 Available: Sunday - Thursday, 9 AM - 6 PM</div>
          </div>
        </div>

        {/* Back to Home */}
        <div className="text-center mt-8">
          <Link href="/" className="inline-flex items-center gap-2 text-emerald-600 hover:text-emerald-700 font-semibold">
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            <span>Back to Home</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
