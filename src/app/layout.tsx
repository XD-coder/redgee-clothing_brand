import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";
import ProjectInfoPopup from "@/components/ui/ProjectInfoPopup";
import ProjectInfoTrigger from "@/components/ui/ProjectInfoTrigger";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Stitches - Premium Clothing Brand",
  description: "Elevate your style with premium, sustainable clothing. Discover timeless designs and luxury fabrics at Stitches.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* Global Navbar */}
        <div className="min-h-screen flex flex-col">
          <div>
            <Navbar />
          </div>
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
        
        {/* Project Info Popup */}
        <ProjectInfoPopup />
        
        {/* Floating Project Info Button */}
        <ProjectInfoTrigger />
      </body>
    </html>
  );
}
