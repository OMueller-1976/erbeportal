import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "Erbeportal.de – Erbrecht, Testament & Nachlassabwicklung",
    template: "%s | Erbeportal.de",
  },
  description:
    "Alles zum Erbrecht: Testament, Erbschaftsteuer, Erbschein und Nachlassabwicklung. Kostenlose Ratgeber für Erben und Erblasser.",
  metadataBase: new URL("https://www.erbeportal.de"),
  alternates: {
    canonical: 'https://www.erbeportal.de',
  },
  verification: {
    google: "DKyeIvtmygsso2mCVkb0zjbRKlSF2h7qWw1YEASrJN0",
  },
  openGraph: {
    siteName: "erbeportal.de",
    locale: "de_DE",
    images: [{ url: "/images/og-default.png", width: 1200, height: 630 }],
  },
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "erbeportal.de",
  url: "https://www.erbeportal.de",
  description:
    "Ratgeber-Portal rund um Erbrecht, Erbschaftsteuer und Nachlassplanung",
  sameAs: ["https://eritaj.de"],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="de" className={inter.className}>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','GTM-N9VKHL9N');`,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
      </head>
      <body className="min-h-screen flex flex-col bg-bg text-ink">
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-N9VKHL9N"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
