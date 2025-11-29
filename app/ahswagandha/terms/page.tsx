"use client";

import Image from "next/image";
import Link from "next/link";

export default function TermsPage() {
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
                Terms &amp; <span className="gradient-text">Conditions</span>
              </h1>
              <p className="text-gray-500">Last updated: November 29, 2025</p>
            </div>

            {/* Terms Content */}
            <div className="bg-white rounded-3xl p-8 md:p-12 shadow-lg space-y-8">
              <section>
                <h2 className="font-playfair text-2xl text-[#4a3c5a] mb-4">1. Agreement to Terms</h2>
                <p className="text-gray-600 leading-relaxed">
                  By accessing or using the ZeinGlow website and purchasing our products, including Ashwagandha Sleep &amp; Relax Gummies, you agree to be bound by these Terms and Conditions. If you do not agree with any part of these terms, please do not use our website or purchase our products.
                </p>
              </section>

              <section>
                <h2 className="font-playfair text-2xl text-[#4a3c5a] mb-4">2. Products &amp; Descriptions</h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  We strive to provide accurate product descriptions and images. However:
                </p>
                <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
                  <li>Colors and appearance may vary slightly due to screen settings</li>
                  <li>Product packaging may be updated from time to time</li>
                  <li>Our products are dietary supplements and are not intended to diagnose, treat, cure, or prevent any disease</li>
                  <li>Results may vary from person to person</li>
                </ul>
              </section>

              <section>
                <h2 className="font-playfair text-2xl text-[#4a3c5a] mb-4">3. Ordering &amp; Payment</h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  <strong>Cash on Delivery (COD):</strong>
                </p>
                <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
                  <li>We offer Cash on Delivery for all orders within the UAE</li>
                  <li>Payment is due upon delivery of your order</li>
                  <li>Please have the exact amount ready for our delivery partner</li>
                  <li>By placing an order, you confirm that you intend to receive and pay for the products</li>
                </ul>
                <p className="text-gray-600 leading-relaxed mt-4">
                  <strong>Order Confirmation:</strong> Once you place an order, you will receive a confirmation via SMS or call from our team to verify your details.
                </p>
              </section>

              <section>
                <h2 className="font-playfair text-2xl text-[#4a3c5a] mb-4">4. Shipping &amp; Delivery</h2>
                <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
                  <li>We deliver to all Emirates within the UAE</li>
                  <li>Estimated delivery time is 1-3 business days for Dubai and 2-5 business days for other Emirates</li>
                  <li>Delivery times may vary due to unforeseen circumstances</li>
                  <li>You must provide accurate delivery information</li>
                  <li>Someone must be available to receive the package at the delivery address</li>
                </ul>
              </section>

              <section>
                <h2 className="font-playfair text-2xl text-[#4a3c5a] mb-4">5. Product Usage</h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  By purchasing our Ashwagandha Gummies, you acknowledge:
                </p>
                <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
                  <li>You are at least 18 years of age</li>
                  <li>You will follow the recommended dosage (2 gummies per day)</li>
                  <li>You will consult a healthcare professional before use if you are pregnant, nursing, taking medication, or have a medical condition</li>
                  <li>The product should be kept out of reach of children</li>
                  <li>Store in a cool, dry place away from direct sunlight</li>
                </ul>
              </section>

              <section>
                <h2 className="font-playfair text-2xl text-[#4a3c5a] mb-4">6. Intellectual Property</h2>
                <p className="text-gray-600 leading-relaxed">
                  All content on our website, including text, images, logos, and design elements, is the property of ZeinGlow and is protected by intellectual property laws. You may not reproduce, distribute, or use our content without written permission.
                </p>
              </section>

              <section>
                <h2 className="font-playfair text-2xl text-[#4a3c5a] mb-4">7. Limitation of Liability</h2>
                <p className="text-gray-600 leading-relaxed">
                  To the fullest extent permitted by law, ZeinGlow shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of our products or website. Our total liability shall not exceed the amount you paid for the product.
                </p>
              </section>

              <section>
                <h2 className="font-playfair text-2xl text-[#4a3c5a] mb-4">8. Order Cancellation</h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  You may cancel your order:
                </p>
                <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
                  <li>Before the order is dispatched by contacting our customer service</li>
                  <li>Repeated order cancellations may result in account restrictions</li>
                  <li>We reserve the right to cancel orders due to pricing errors, stock unavailability, or suspected fraud</li>
                </ul>
              </section>

              <section>
                <h2 className="font-playfair text-2xl text-[#4a3c5a] mb-4">9. Governing Law</h2>
                <p className="text-gray-600 leading-relaxed">
                  These Terms and Conditions shall be governed by and construed in accordance with the laws of the United Arab Emirates. Any disputes arising from these terms shall be subject to the exclusive jurisdiction of the courts of Dubai, UAE.
                </p>
              </section>

              <section>
                <h2 className="font-playfair text-2xl text-[#4a3c5a] mb-4">10. Changes to Terms</h2>
                <p className="text-gray-600 leading-relaxed">
                  We reserve the right to modify these Terms and Conditions at any time. Changes will be effective immediately upon posting to our website. Your continued use of our website constitutes acceptance of the modified terms.
                </p>
              </section>

              <section>
                <h2 className="font-playfair text-2xl text-[#4a3c5a] mb-4">11. Contact Information</h2>
                <p className="text-gray-600 leading-relaxed">
                  For questions about these Terms and Conditions, please contact us:
                </p>
                <div className="mt-4 p-6 bg-[#faf8f5] rounded-2xl">
                  <p className="text-gray-600"><strong>Email:</strong> hello@zeinglow.ae</p>
                  <p className="text-gray-600"><strong>Phone:</strong> +971 50 341 21 74</p>
                  <p className="text-gray-600"><strong>Address:</strong> Dubai, United Arab Emirates</p>
                </div>
              </section>
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

