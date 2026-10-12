import { setServers } from "node:dns/promises";
setServers(["1.1.1.1","8.8.8.8"])
import type { Metadata } from "next";
import { Hind_Siliguri } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/sheard/Navbar";
import Marquee from "@/components/sheard/Marquee";
import Footer from "@/components/sheard/Footer";
import { Suspense } from "react";
import { Toaster } from "react-hot-toast";

const hindSiliguri = Hind_Siliguri({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin", "bengali"],
});

export const metadata: Metadata = {
  title: "বাজার দর",
  description: "আপনার নিত্য দিনের বাজার সদাইয়ের দাম দেখুন ঘরে বসেই",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      data-theme="light"
      className={`${hindSiliguri.className} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Toaster position="top-left" reverseOrder={true} />
        <Suspense fallback={null}>
          <Navbar />
        </Suspense>
        <Marquee />
        <main className="bg-[#F0F5F0]">
          <section className="container mx-auto lg:px-30 px-5">
            {children}
          </section>
        </main>
        <Footer />
      </body>
    </html>
  );
}
