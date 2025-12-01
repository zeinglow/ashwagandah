"use client";

import Image from "next/image";
import Link from "next/link";

export default function RefundPolicyPage() {
  return (
    <>
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
        .gradient-gold { background: linear-gradient(135deg, #d4af37 0%, #f4e4bc 50%, #d4af37 100%); }
        .gradient-primary { background: linear-gradient(165deg, #4a3c5a 0%, #362c44 40%, #2a2035 100%); }
        .bg-cream { background-color: #faf8f5; }
      `}</style>

      <div dir="ltr" className="font-raleway text-left min-h-screen bg-cream">
        {/* Header */}
        <header className="bg-[#2a2035] py-6">
          <div className="max-w-7xl mx-auto px-6">
            <Link href="/ahswagandha" className="inline-block">
              <Image
                src="/logo-zeinglow-white.png"
                alt="ZeinGlow"
                width={150}
                height={45}
                className="h-10 w-auto"
              />
            </Link>
          </div>
        </header>

        {/* Content */}
        <main className="py-16">
          <div className="max-w-4xl mx-auto px-6">
            {/* Page Header */}
            <div className="text-center mb-12">
              <h1 className="font-playfair text-4xl md:text-5xl text-[#4a3c5a] mb-4">
                Refund <span className="gradient-text">Policy</span>
              </h1>
              <p className="text-gray-500">Last updated: November 29, 2025</p>
            </div>

            {/* Important Notice */}
            <div className="bg-gradient-to-r from-[#4a3c5a] to-[#2a2035] rounded-3xl p-8 mb-8 text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#d4af37]/20 mb-4">
                <i className="fas fa-shield-alt text-[#d4af37] text-2xl" />
              </div>
              <h2 className="font-playfair text-2xl text-white mb-2">30-Day Satisfaction Guarantee</h2>
              <p className="text-white/70">We stand behind our products with a clear and fair refund policy.</p>
            </div>

            {/* Policy Content */}
            <div className="bg-white rounded-3xl p-8 md:p-12 shadow-lg space-y-8">
              <section>
                <h2 className="font-playfair text-2xl text-[#4a3c5a] mb-4">1. Refund Eligibility</h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  We want you to be completely satisfied with your ZeinGlow purchase. Refunds are available under the following conditions:
                </p>
                
                {/* Eligible for Refund */}
                <div className="bg-green-50 border border-green-200 rounded-2xl p-6 mb-4">
                  <h3 className="font-semibold text-green-800 mb-3 flex items-center gap-2">
                    <i className="fas fa-check-circle" />
                    Eligible for Full Refund
                  </h3>
                  <ul className="list-disc list-inside text-green-700 space-y-2 ml-4">
                    <li>Product received damaged or defective</li>
                    <li>Wrong product delivered</li>
                    <li>Unopened and sealed bottles returned within 30 days</li>
                    <li>Product quality issues (with photo evidence)</li>
                  </ul>
                </div>

                {/* Not Eligible for Refund */}
                <div className="bg-red-50 border border-red-200 rounded-2xl p-6">
                  <h3 className="font-semibold text-red-800 mb-3 flex items-center gap-2">
                    <i className="fas fa-times-circle" />
                    NOT Eligible for Refund
                  </h3>
                  <ul className="list-disc list-inside text-red-700 space-y-2 ml-4">
                    <li><strong>Opened bottles</strong> - Once the seal is broken, the product cannot be returned for hygiene and safety reasons</li>
                    <li>Products returned after 30 days from delivery</li>
                    <li>Products not purchased directly from ZeinGlow</li>
                    <li>Damage caused by misuse or improper storage</li>
                    <li>Change of mind after product use</li>
                  </ul>
                </div>
              </section>

              <section>
                <h2 className="font-playfair text-2xl text-[#4a3c5a] mb-4">2. Cash on Delivery (COD) Refund Policy</h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  For orders paid via Cash on Delivery:
                </p>
                
                <div className="bg-[#faf8f5] rounded-2xl p-6 space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-[#4a3c5a] flex items-center justify-center flex-shrink-0">
                      <span className="text-white font-bold">1</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-[#4a3c5a]">Order Rejection at Delivery</h4>
                      <p className="text-gray-600 text-sm">If you refuse to accept the order without valid reason, you may be blacklisted from future COD orders. Shipping costs may be charged for repeated rejections.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-[#4a3c5a] flex items-center justify-center flex-shrink-0">
                      <span className="text-white font-bold">2</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-[#4a3c5a]">Legitimate Refund for COD</h4>
                      <p className="text-gray-600 text-sm">If you qualify for a refund (damaged/wrong product), refunds will be processed via bank transfer within 7-14 business days. You will need to provide your bank details.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-[#4a3c5a] flex items-center justify-center flex-shrink-0">
                      <span className="text-white font-bold">3</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-[#4a3c5a]">No-Show Policy</h4>
                      <p className="text-gray-600 text-sm">If you are unavailable for 3 delivery attempts, the order will be cancelled. Future orders may require prepayment.</p>
                    </div>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="font-playfair text-2xl text-[#4a3c5a] mb-4">3. How to Request a Refund</h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  To initiate a refund request, please follow these steps:
                </p>
                <ol className="list-decimal list-inside text-gray-600 space-y-3 ml-4">
                  <li><strong>Contact Us:</strong> Email us at hello@zeinglow.ae or call +971 50 341 21 74 within 30 days of receiving your order.</li>
                  <li><strong>Provide Details:</strong> Include your order number, reason for refund, and photos if applicable (damaged product, wrong item, etc.).</li>
                  <li><strong>Await Approval:</strong> Our team will review your request within 2-3 business days.</li>
                  <li><strong>Return Product:</strong> If approved, you may be asked to return the unopened product. We will provide return instructions.</li>
                  <li><strong>Receive Refund:</strong> Once we receive and inspect the returned item, your refund will be processed within 7-14 business days.</li>
                </ol>
              </section>

              <section>
                <h2 className="font-playfair text-2xl text-[#4a3c5a] mb-4">4. Exchanges</h2>
                <p className="text-gray-600 leading-relaxed">
                  If you received a damaged or defective product, we will gladly exchange it for a new one at no additional cost. Please contact us within 7 days of delivery to arrange an exchange.
                </p>
              </section>

              <section>
                <h2 className="font-playfair text-2xl text-[#4a3c5a] mb-4">5. Refund Processing Time</h2>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-gray-200">
                        <th className="text-left py-3 px-4 text-[#4a3c5a]">Payment Method</th>
                        <th className="text-left py-3 px-4 text-[#4a3c5a]">Processing Time</th>
                      </tr>
                    </thead>
                    <tbody className="text-gray-600">
                      <tr className="border-b border-gray-100">
                        <td className="py-3 px-4">Cash on Delivery</td>
                        <td className="py-3 px-4">7-14 business days (bank transfer)</td>
                      </tr>
                      <tr className="border-b border-gray-100">
                        <td className="py-3 px-4">Credit/Debit Card</td>
                        <td className="py-3 px-4">5-10 business days</td>
                      </tr>
                      <tr>
                        <td className="py-3 px-4">Bank Transfer</td>
                        <td className="py-3 px-4">7-14 business days</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </section>

              <section>
                <h2 className="font-playfair text-2xl text-[#4a3c5a] mb-4">6. Return Shipping</h2>
                <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
                  <li>For defective or wrong products: ZeinGlow will cover return shipping costs</li>
                  <li>For change of mind (unopened products only): Customer is responsible for return shipping</li>
                  <li>Products must be returned in original packaging</li>
                </ul>
              </section>

              <section>
                <h2 className="font-playfair text-2xl text-[#4a3c5a] mb-4">7. Partial Refunds</h2>
                <p className="text-gray-600 leading-relaxed">
                  Partial refunds may be granted in the following cases:
                </p>
                <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4 mt-4">
                  <li>Only some items in a bundle order are eligible for refund</li>
                  <li>Product returned with signs of use but still sealed</li>
                  <li>Product returned outside the 30-day window (at our discretion)</li>
                </ul>
              </section>

              <section>
                <h2 className="font-playfair text-2xl text-[#4a3c5a] mb-4">8. Contact Us</h2>
                <p className="text-gray-600 leading-relaxed">
                  For any questions about our refund policy or to initiate a refund request:
                </p>
                <div className="mt-4 p-6 bg-[#faf8f5] rounded-2xl">
                  <p className="text-gray-600"><strong>Email:</strong> hello@zeinglow.ae</p>
                  <p className="text-gray-600"><strong>Phone:</strong> +971 50 341 21 74</p>
                  <p className="text-gray-600"><strong>Hours:</strong> Sunday - Thursday, 9:00 AM - 6:00 PM (GST)</p>
                </div>
              </section>
            </div>

            {/* Summary Box */}
            <div className="mt-8 bg-white rounded-3xl p-8 shadow-lg border-l-4 border-[#d4af37]">
              <h3 className="font-playfair text-xl text-[#4a3c5a] mb-4">Quick Summary</h3>
              <div className="grid md:grid-cols-2 gap-4 text-sm">
                <div className="flex items-center gap-2 text-green-600">
                  <i className="fas fa-check" />
                  <span>Unopened products: Full refund within 30 days</span>
                </div>
                <div className="flex items-center gap-2 text-red-600">
                  <i className="fas fa-times" />
                  <span>Opened bottles: Not eligible for refund</span>
                </div>
                <div className="flex items-center gap-2 text-green-600">
                  <i className="fas fa-check" />
                  <span>Damaged/wrong products: Free exchange</span>
                </div>
                <div className="flex items-center gap-2 text-gray-600">
                  <i className="fas fa-clock" />
                  <span>COD refunds: 7-14 days via bank transfer</span>
                </div>
              </div>
            </div>

            {/* Back Link */}
            <div className="text-center mt-8">
              <Link href="/ahswagandha" className="inline-flex items-center gap-2 text-[#4a3c5a] hover:text-[#d4af37] transition-colors font-medium">
                <i className="fas fa-arrow-left" />
                <span>Back to Home</span>
              </Link>
            </div>
          </div>
        </main>

        {/* Footer */}
        <footer className="bg-[#2a2035] py-8">
          <div className="max-w-7xl mx-auto px-6 text-center">
            <p className="text-white/40 text-sm">© 2025 ZeinGlow. All rights reserved.</p>
          </div>
        </footer>
      </div>

      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />
    </>
  );
}



