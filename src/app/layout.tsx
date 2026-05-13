import type { Metadata } from "next";
import { Geist, Geist_Mono, Playfair_Display } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://maram-ajmi-portfolio.local"),
  title: {
    default: "Maram Ajmi | Content Creator and Influencer Portfolio",
    template: "%s | Maram Ajmi",
  },
  description:
    "Premium influencer portfolio for Maram Ajmi, a Tunisia-based content creator available for sponsorships, UGC, modeling, brand collaborations and social campaigns.",
  keywords: [
    "Maram Ajmi",
    "content creator",
    "influencer portfolio",
    "UGC creator",
    "modeling",
    "sponsored posts",
    "Tunisia influencer",
    "lifestyle creator",
    "fitness creator",
    "beauty creator",
  ],
  authors: [{ name: "Maram Ajmi" }],
  creator: "Maram Ajmi",
  openGraph: {
    title: "Maram Ajmi | Premium Creator Portfolio",
    description:
      "Sponsorships, collaborations, UGC, modeling and cinematic lifestyle content.",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/media/maram-og.webp",
        width: 1200,
        height: 630,
        alt: "Maram Ajmi portfolio preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Maram Ajmi | Content Creator Portfolio",
    description:
      "Red and white creator portfolio for brand collaborations, UGC and sponsorships.",
    images: ["/media/maram-og.webp"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} ${playfair.variable} h-full scroll-smooth antialiased`}
    >
      <body suppressHydrationWarning className="min-h-full">
        {children}
      </body>
    </html>
  );
}
