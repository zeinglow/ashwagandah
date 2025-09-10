import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";
import Script from "next/script";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Ashwagandha Gummies – Calm, Focus & Better Sleep",
  description:
    "Conversion‑optimized landing page for a single-product Ashwagandha gummy with bundles, social proof, persuasive sales content, and animated botanical SVG background.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Preload critical images */}
        <link rel="preload" as="image" href="/beargummies.png" />
        <link rel="preload" as="image" href="/logozeinglow.png" />
        <link rel="preload" as="image" href="/cloude1.png" />
        <link rel="preload" as="image" href="/cloude2.png" />
        
        {/* Meta Pixel Code */}
        <Script id="facebook-pixel" strategy="afterInteractive">
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '2277468989325103');
            fbq('track', 'PageView');
          `}
        </Script>
        <noscript>
          <img
            src="https://www.facebook.com/tr?id=2277468989325103&ev=PageView&noscript=1"
            alt=""
            width="1"
            height="1"
            style={{display:'none'}}
          />
        </noscript>
      </head>
      <body
        className={`${inter.variable} font-sans antialiased`}
      >
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
