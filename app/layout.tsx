import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { GoogleTagManager } from '@next/third-parties/google'
import TriggerAnalytics from './TriggerAnalytics'
import { Analytics } from "@vercel/analytics/react"
import { Toaster } from "@/components/ui/toaster"
import { SpeedInsights } from "@vercel/speed-insights/next"
import { NextThemeProvider } from '@/components/theme-provider';
import { Footer } from "@/app/ui/footer/footer";
import { SessionProvider } from "next-auth/react";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

const DESCRIPTION = "Tracking the progress of my learning journey with topics such as Vim and Pandas 10-minute guide. / 🍴 forked from dMario24/flag123";

export const metadata: Metadata = {
  generator: 'Next.js',
  applicationName: '순십샵 학습 기록장',
  referrer: 'origin-when-cross-origin',
  keywords: ['martial law',
    '2024 South Korean martial law crisis',
    '계엄',
    '순십샵 학습 기록장',
    '@빠밤',
    '나만깃발없엉',
    '재기발랄',
    '탄핵',
    '윤석열',
    '윤건희',
    '순십샵 학습 기록장',
    '순십샵',
    '나만 깃발 없엉 총연맹',

  ],
  authors: [{ name: 'TomSawyer' }, { name: 'Josh', url: 'https://vim.sunsin.shop/' }],
  creator: '순십샵',
  publisher: '@빠밤',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  title: "순십샵 학습 기록장 by @빠밤",
  description: DESCRIPTION,
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "순십샵 학습 기록장",
    siteName: "순십샵 학습 기록장",
    description: DESCRIPTION,
    locale: 'ko_KR',
    type: 'website',
    url: "https://flag123.diginori.com",
    images: {
      url: "https://flag123.diginori.com/og.png",
      alt: DESCRIPTION,
    }
  },
  twitter: {
    card: 'summary_large_image',
    title: '순십샵 학습 기록장',
    description: DESCRIPTION,
    siteId: 'samdulshop',
    creator: '순십샵',
    creatorId: 'samdulshop',
    images: ['https://flag123.diginori.com/twitter-image.png'], // Must be an absolute URL
  },
};

// export const fetchCache = 'force-no-store';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" >
      <GoogleTagManager gtmId="GTM-KNF3TMFJ" />
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <SessionProvider>
          <NextThemeProvider>
            {children}
            <Toaster />
            <Footer />

            <TriggerAnalytics />
            <Analytics />
            <SpeedInsights />
          </NextThemeProvider>
        </SessionProvider>
      </body>
    </html>
  );
}
