import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Personal Blog Landing Page - John Doe",
  description: "Curated musings on design systems, emerging technology, and the future of digital interaction.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className="text-slate-900 dark:text-slate-100 font-display antialiased overflow-x-hidden">
        <div className="relative flex h-auto min-h-screen w-full flex-col group/design-root">
          <Navbar />
          <main className="layout-container flex h-full grow flex-col">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
