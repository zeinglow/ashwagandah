"use client";

import Image from "next/image";
import Link from "next/link";

export default function PrivacyPolicyPage() {
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
                Privacy <span className="gradient-text">Policy</span>
              </h1>
              <p className="text-gray-500">Last updated: November 29, 2025</p>
            </div>

            {/* Policy Content */}
            <div className="bg-white rounded-3xl p-8 md:p-12 shadow-lg space-y-8">
              <section>
                <h2 className="font-playfair text-2xl text-[#4a3c5a] mb-4">1. Introduction</h2>
                <p className="text-gray-600 leading-relaxed">
                  ZeinGlow (&ldquo;we,&rdquo; &ldquo;our,&rdquo; or &ldquo;us&rdquo;) is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website and purchase our products, including Ashwagandha Sleep &amp; Relax Gummies.
                </p>
              </section>

              <section>
                <h2 className="font-playfair text-2xl text-[#4a3c5a] mb-4">2. Information We Collect</h2>
                <p className="text-gray-600 leading-relaxed mb-4">We may collect the following types of information:</p>
                <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
                  <li><strong>Personal Information:</strong> Name, email address, phone number, shipping address, and billing information when you place an order.</li>
                  <li><strong>Payment Information:</strong> For Cash on Delivery (COD) orders, we collect delivery details. We do not store credit card information.</li>
                  <li><strong>Usage Data:</strong> Information about how you interact with our website, including IP address, browser type, pages visited, and time spent on pages.</li>
                  <li><strong>Communication Data:</strong> Any messages or inquiries you send to us via email, WhatsApp, or other channels.</li>
                </ul>
              </section>

              <section>
                <h2 className="font-playfair text-2xl text-[#4a3c5a] mb-4">3. How We Use Your Information</h2>
                <p className="text-gray-600 leading-relaxed mb-4">We use your information to:</p>
                <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
                  <li>Process and fulfill your orders</li>
                  <li>Send order confirmations and shipping updates</li>
                  <li>Respond to your inquiries and provide customer support</li>
                  <li>Improve our website and products</li>
                  <li>Send promotional offers and marketing communications (with your consent)</li>
                  <li>Comply with legal obligations</li>
                </ul>
              </section>

              <section>
                <h2 className="font-playfair text-2xl text-[#4a3c5a] mb-4">4. Information Sharing</h2>
                <p className="text-gray-600 leading-relaxed mb-4">We may share your information with:</p>
                <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
                  <li><strong>Delivery Partners:</strong> To fulfill and deliver your orders within the UAE.</li>
                  <li><strong>Analytics Providers:</strong> To help us understand website usage and improve our services.</li>
                  <li><strong>Legal Authorities:</strong> When required by law or to protect our rights.</li>
                </ul>
                <p className="text-gray-600 leading-relaxed mt-4">
                  We do not sell, rent, or trade your personal information to third parties for marketing purposes.
                </p>
              </section>

              <section>
                <h2 className="font-playfair text-2xl text-[#4a3c5a] mb-4">5. Data Security</h2>
                <p className="text-gray-600 leading-relaxed">
                  We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the Internet is 100% secure, and we cannot guarantee absolute security.
                </p>
              </section>

              <section>
                <h2 className="font-playfair text-2xl text-[#4a3c5a] mb-4">6. Cookies</h2>
                <p className="text-gray-600 leading-relaxed">
                  Our website uses cookies to enhance your browsing experience, analyze website traffic, and personalize content. You can control cookie preferences through your browser settings. By continuing to use our website, you consent to our use of cookies.
                </p>
              </section>

              <section>
                <h2 className="font-playfair text-2xl text-[#4a3c5a] mb-4">7. Your Rights</h2>
                <p className="text-gray-600 leading-relaxed mb-4">You have the right to:</p>
                <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
                  <li>Access the personal information we hold about you</li>
                  <li>Request correction of inaccurate information</li>
                  <li>Request deletion of your personal information</li>
                  <li>Opt-out of marketing communications</li>
                  <li>Lodge a complaint with a data protection authority</li>
                </ul>
              </section>

              <section>
                <h2 className="font-playfair text-2xl text-[#4a3c5a] mb-4">8. Children&apos;s Privacy</h2>
                <p className="text-gray-600 leading-relaxed">
                  Our products and services are not intended for individuals under the age of 18. We do not knowingly collect personal information from children. If you believe we have collected information from a minor, please contact us immediately.
                </p>
              </section>

              <section>
                <h2 className="font-playfair text-2xl text-[#4a3c5a] mb-4">9. Changes to This Policy</h2>
                <p className="text-gray-600 leading-relaxed">
                  We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated &ldquo;Last updated&rdquo; date. We encourage you to review this policy periodically.
                </p>
              </section>

              <section>
                <h2 className="font-playfair text-2xl text-[#4a3c5a] mb-4">10. Contact Us</h2>
                <p className="text-gray-600 leading-relaxed">
                  If you have any questions about this Privacy Policy, please contact us:
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

