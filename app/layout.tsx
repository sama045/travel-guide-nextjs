import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.scss";
import Headers from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import BodyClass from "@/components/BodyClass";
import { siteConfig } from "@/config/site";


export const metadata = {
  metadataBase: new URL(siteConfig.url),

  title: {
    default: siteConfig.siteName,
    template: `%s | ${siteConfig.siteName}`,
  },

  description: siteConfig.description,

  keywords: siteConfig.keywords,
};

export default function RootLayout({
  
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">      
      <body>
         <BodyClass />
        <Headers />
        {children}
        <Footer />
      </body>
    </html>
  );
}
