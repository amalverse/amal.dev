import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/layout/SmoothScroll";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Loader from "@/components/layout/Loader";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://amal.dev"),
  title: "Amal Kishor | Senior Software Engineer",
  description:
    "Experienced Full Stack Developer crafting scalable architectures, resilient microservices, and exceptionally performant web platforms. Specialized in React, Next.js, Node.js, and AI integrations.",
  keywords: [
    "Amal Kishor",
    "Senior Software Engineer",
    "Full Stack Developer",
    "Frontend Engineer",
    "System Architecture",
    "React",
    "Next.js",
    "TypeScript",
    "Node.js",
    "Cloud Architecture",
    "TypeScript Developer",
  ],
  authors: [{ name: "Amal Kishor" }],
  openGraph: {
    title: "Amal Kishor | Senior Software Engineer",
    description:
      "A software engineering portfolio specializing in building hyper-scalable web architectures, complex frontend state management, and modern scalable application design.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Amal Kishor | Senior Software Engineer",
    description:
      "A software engineering portfolio specializing in building hyper-scalable web architectures, complex frontend state management, and modern scalable application design.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" data-scroll-behavior="smooth" suppressHydrationWarning>
      <body className={inter.className}>
        <SmoothScroll>
          <Loader />
          <Navbar />
          <main>{children}</main>
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}
