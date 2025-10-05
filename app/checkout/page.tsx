"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
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

export default function Checkout() {
  const router = useRouter();
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
  const [stockLeft] = useState(Math.floor(Math.random() * 7) + 6); // Random between 6-12

  // Track InitiateCheckout event when checkout page loads
  useEffect(() => {
    // Send both Pixel and CAPI events
    MetaCAPI.trackInitiateCheckout({}, 189);
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

  const bundles: Record<string, { name: string; price: number; originalPrice: number; gummies: number; days: number; discount: string; savings: number }> = {
    "1-bottle": { name: "1 عبوة", price: 189, originalPrice: 210, gummies: 60, days: 30, discount: "10%", savings: 21 },
    "2-bottles": { name: "2 عبوة", price: 339, originalPrice: 424, gummies: 120, days: 60, discount: "20%", savings: 85 },
    "3-bottles": { name: "3 عبوات", price: 479, originalPrice: 684, gummies: 180, days: 90, discount: "30%", savings: 205 },
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
      
      // Track Purchase event with CAPI (includes Pixel with deduplication)
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
      localStorage.setItem('orderData', JSON.stringify({
        ...formData,
        bundle: selectedBundle,
        orderNumber: result.order.orderNumber,
        orderDate: new Date().toLocaleDateString()
      }));
      
      router.push('/thank-you');
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
    
    // Clear error when user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({
        ...prev,
        [name]: ""
      }));
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-green-50 to-teal-50">
      {/* Header */}
      <header className="sticky top-0 z-50 backdrop-blur-xl bg-white/95 border-b border-emerald-100/50 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <Image
                src="/logozeinglow.png"
                alt="Zeinglow"
                width={120}
                height={36}
                className="h-9 w-auto"
              />
            </div>
            <div className="text-sm text-slate-600 font-medium">
              🔒 دفع آمن
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Urgency Banner with Timer */}
        <div className="mb-8 bg-gradient-to-r from-red-500 to-orange-500 text-white rounded-2xl p-6 shadow-xl">
          <div className="text-center mb-4">
            <div className="flex items-center justify-center gap-2 text-sm font-bold mb-2">
              <span className="w-2 h-2 bg-white rounded-full animate-pulse"></span>
              <span>⚡ وقت محدود: بقي {stockLeft} عبوات فقط في المخزون!</span>
              <span className="w-2 h-2 bg-white rounded-full animate-pulse"></span>
            </div>
            <div className="text-lg font-bold mb-3">حتى 30% خصم ينتهي في:</div>
            <div className="flex items-center justify-center space-x-4 text-2xl font-mono font-bold">
              <div className="bg-white text-red-600 px-3 py-2 rounded-lg">
                {String(timeLeft.hours).padStart(2, '0')}
              </div>
              <span>:</span>
              <div className="bg-white text-red-600 px-3 py-2 rounded-lg">
                {String(timeLeft.minutes).padStart(2, '0')}
              </div>
              <span>:</span>
              <div className="bg-white text-red-600 px-3 py-2 rounded-lg">
                {String(timeLeft.seconds).padStart(2, '0')}
              </div>
            </div>
            <div className="text-sm mt-2 opacity-90">
              ساعات : دقائق : ثواني
            </div>
          </div>
        </div>

        {/* Sales Headline */}
        <div className="text-center mb-8">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mb-4">
            أنت على بُعد <span className="text-emerald-600">خطوة واحدة</span> فقط من
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-green-600">
              راحة الجسم والتعافي الطبيعي
            </span>
          </h1>
          <p className="text-lg text-slate-700">
            انضم إلى 3000+ عميل يستمتعون بجسم مسترخٍ ونوم عميق
          </p>
        </div>

        {/* Two Column Layout for Desktop, Single Column for Mobile */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Column - Bundle Selection & Social Proof */}
          <div className="space-y-8">
            {/* Bundle Selection */}
            <div className="bg-white rounded-3xl p-6 shadow-xl border border-emerald-100">
              <h3 className="text-xl font-bold text-slate-900 mb-4">اختر رحلة الاسترخاء:</h3>
              <div className="space-y-3">
                {Object.entries(bundles).map(([key, bundle]) => (
                  <label key={key} className="flex items-center p-4 rounded-2xl border-2 cursor-pointer transition-all hover:bg-emerald-50 relative" 
                         style={{
                           borderColor: formData.bundle === key ? '#10b981' : '#e5e7eb',
                           backgroundColor: formData.bundle === key ? '#f0fdf4' : 'white'
                         }}>
                    {/* Discount Badge */}
                    <div className="absolute -top-2 -right-2 bg-red-500 text-white px-2 py-1 rounded-full text-xs font-bold">
                      {bundle.discount} OFF
                    </div>
                    
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
                        <div className="font-bold text-lg text-slate-900">{bundle.name}</div>
                        <div className="text-sm text-slate-600">{bundle.gummies} حبة • مخزون {bundle.days} يوم</div>
                        {key === "2-bottles" && (
                          <span className="inline-block bg-emerald-500 text-white text-xs font-bold px-2 py-1 rounded-full mt-1">
                            الأكثر شعبية
                          </span>
                        )}
                      </div>
                      <div className="text-right">
                        <div className="text-sm text-slate-400 line-through">AED {bundle.originalPrice}</div>
                        <div className="text-2xl font-extrabold text-emerald-600">AED {bundle.price}</div>
                        <div className="text-xs text-red-600 font-semibold">وفر {bundle.savings} درهم</div>
                      </div>
                    </div>
                  </label>
                ))}
              </div>
            </div>

            {/* Enhanced Social Proof - Desktop Only */}
            <div className="hidden lg:block bg-gradient-to-r from-emerald-50 to-green-50 rounded-3xl p-6 border border-emerald-200">
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
                  <div className="font-bold text-emerald-800">سارة و 2847 آخرين</div>
                  <div className="text-sm text-emerald-600">طلبوا في آخر 24 ساعة</div>
                </div>
              </div>
              <div className="flex items-center text-emerald-600 mb-3">
                <span className="text-xl">★★★★★</span>
                <span className="ml-2 font-semibold">4.8/5 من عملاء متحققين</span>
              </div>
              
              {/* Live Activity */}
              <div className="bg-white rounded-xl p-3 border border-emerald-200">
                <div className="flex items-center gap-2 text-sm">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="font-medium text-slate-700">
                    Someone in Dubai just ordered {stockLeft <= 8 ? '2 bottles' : '3 bottles'} • 2 min ago
                  </span>
                </div>
              </div>
            </div>

            {/* Trust Signals - Desktop Only */}
            <div className="hidden lg:grid grid-cols-2 gap-4">
              <div className="bg-white rounded-2xl p-4 shadow-lg text-center border border-emerald-100">
                <div className="w-12 h-12 mx-auto mb-2 bg-emerald-100 rounded-xl flex items-center justify-center">
                  <svg className="w-6 h-6 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6-2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div className="font-bold text-sm text-slate-900">60-Day Guarantee</div>
                <div className="text-xs text-slate-600">Risk-free promise</div>
              </div>
              <div className="bg-white rounded-2xl p-4 shadow-lg text-center border border-emerald-100">
                <div className="w-12 h-12 mx-auto mb-2 bg-emerald-100 rounded-xl flex items-center justify-center">
                  <svg className="w-6 h-6 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                  </svg>
                </div>
                <div className="font-bold text-sm text-slate-900">Free Delivery</div>
                <div className="text-xs text-slate-600">No hidden fees</div>
              </div>
            </div>
          </div>

          {/* Right Column - Order Form */}
          <div className="lg:sticky lg:top-8 lg:self-start">
            {/* Order Form Card */}
            <div className="bg-white rounded-3xl shadow-2xl border border-emerald-100 overflow-hidden">
              {/* Order Summary Header */}
              <div className="bg-gradient-to-r from-emerald-500 to-green-600 text-white p-6 text-center">
                <h2 className="text-2xl font-bold mb-2">أكمل طلبك</h2>
                <p className="text-emerald-100">دفع عند الاستلام • لا حاجة للدفع الآن</p>
              </div>

              <div className="p-6 space-y-6">
                {/* Order Summary */}
                <div className="bg-emerald-50 rounded-2xl p-4 border border-emerald-200">
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-semibold text-slate-900">{selectedBundle.name}</span>
                    <span className="font-bold text-emerald-600">AED {selectedBundle.price}</span>
                  </div>
                  <div className="text-sm text-slate-600 mb-3">
                    {selectedBundle.gummies} حبة • مخزون {selectedBundle.days} يوم
                  </div>
                  <div className="border-t border-emerald-200 pt-3 flex justify-between items-center">
                    <span className="font-bold text-lg text-slate-900">المجموع:</span>
                    <span className="font-extrabold text-2xl text-emerald-600">AED {selectedBundle.price}</span>
                  </div>
                  <div className="text-center text-sm text-emerald-600 font-medium mt-2">
                    ✓ شحن مجاني متضمن
                  </div>
                </div>

                {/* Form */}
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-slate-700 mb-2">
                      الاسم الكامل *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-3 rounded-xl border-2 transition-colors ${
                        errors.name ? 'border-red-300 bg-red-50' : 'border-slate-200 focus:border-emerald-500'
                      } focus:outline-none`}
                      placeholder="أدخل اسمك الكامل"
                    />
                    {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-slate-700 mb-2">
                      عنوان البريد الإلكتروني *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-3 rounded-xl border-2 transition-colors ${
                        errors.email ? 'border-red-300 bg-red-50' : 'border-slate-200 focus:border-emerald-500'
                      } focus:outline-none`}
                      placeholder="your@email.com"
                    />
                    {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-semibold text-slate-700 mb-2">
                      رقم الهاتف *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-3 rounded-xl border-2 transition-colors ${
                        errors.phone ? 'border-red-300 bg-red-50' : 'border-slate-200 focus:border-emerald-500'
                      } focus:outline-none`}
                      placeholder="+971 50 123 4567"
                    />
                    {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
                  </div>

                  {/* Payment Method */}
                  <div className="bg-amber-50 border border-amber-200 rounded-xl p-4">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-amber-500 rounded-lg flex items-center justify-center">
                        <span className="text-white font-bold text-sm">💰</span>
                      </div>
                      <div>
                        <div className="font-bold text-amber-800">دفع عنح الاستلام</div>
                        <div className="text-sm text-amber-700">ادفع عندما تستلم طلبك</div>
                      </div>
                    </div>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-emerald-500 to-green-600 hover:from-emerald-600 hover:to-green-700 text-white font-bold py-4 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <div className="flex items-center justify-center gap-2">
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                        معالجة...
                      </div>
                    ) : (
                      <div className="flex items-center justify-center gap-2">
                        <span>أكمل الطلب - {selectedBundle.price} درهم</span>
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                        </svg>
                      </div>
                    )}
                  </button>

                  <div className="text-center text-xs text-slate-500">
                    بإكمال هذا الطلب، أنت توافق على شروطنا وأحكامنا
                  </div>
                </form>

                {/* Final Push */}
                <div className="bg-green-50 border border-green-200 rounded-xl p-4 text-center">
                  <div className="font-bold text-green-800 mb-1">🎯 ابدأ في الشعور بالهدوء في أسبوع إلى أسبوعين فقط!</div>
                  <div className="text-sm text-green-700">انضم إلى الآلاف الذين اختاروا الاسترخاء بدلاً من التوتر</div>
                </div>
              </div>
            </div>

            {/* Mobile-Only Social Proof Section - Appears under form on mobile */}
            <div className="lg:hidden mt-8 space-y-6">
              {/* Enhanced Social Proof - Mobile Only */}
              <div className="bg-gradient-to-r from-emerald-50 to-green-50 rounded-3xl p-6 border border-emerald-200">
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
                    <div className="font-bold text-emerald-800">Sarah & 2,847 others</div>
                    <div className="text-sm text-emerald-600">ordered in the last 24 hours</div>
                  </div>
                </div>
                <div className="flex items-center text-emerald-600 mb-3">
                  <span className="text-xl">★★★★★</span>
                  <span className="ml-2 font-semibold">4.8/5 من عملاء متحققين</span>
                </div>
                
                {/* Live Activity */}
                <div className="bg-white rounded-xl p-3 border border-emerald-200">
                  <div className="flex items-center gap-2 text-sm">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                    <span className="font-medium text-slate-700">
                      Someone in Dubai just ordered {stockLeft <= 8 ? '2 bottles' : '3 bottles'} • 2 min ago
                    </span>
                  </div>
                </div>
              </div>

              {/* Trust Signals - Mobile Only */}
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white rounded-2xl p-4 shadow-lg text-center border border-emerald-100">
                  <div className="w-12 h-12 mx-auto mb-2 bg-emerald-100 rounded-xl flex items-center justify-center">
                    <svg className="w-6 h-6 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6-2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div className="font-bold text-sm text-slate-900">60-Day Guarantee</div>
                  <div className="text-xs text-slate-600">Risk-free promise</div>
                </div>
                <div className="bg-white rounded-2xl p-4 shadow-lg text-center border border-emerald-100">
                  <div className="w-12 h-12 mx-auto mb-2 bg-emerald-100 rounded-xl flex items-center justify-center">
                    <svg className="w-6 h-6 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                    </svg>
                  </div>
                  <div className="font-bold text-sm text-slate-900">Free Delivery</div>
                  <div className="text-xs text-slate-600">No hidden fees</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Testimonial */}
        <div className="mt-12 bg-white rounded-3xl p-8 shadow-xl text-center border border-emerald-100">
          <div className="text-emerald-500 text-xl mb-3">★★★★★</div>
          <blockquote className="text-lg font-medium text-slate-800 mb-4">
            &ldquo;كنت متشككة في البداية، لكن بعد أسبوعين فقط مع زينغلو، أنام مثل الطفل وأستيقظ منتعشة. أفضل استثمار في عافيتي!&rdquo;
          </blockquote>
          <cite className="text-sm font-semibold text-slate-600">— فاطمة الزهراء، دبي</cite>
        </div>
      </div>
    </div>
  );
}
