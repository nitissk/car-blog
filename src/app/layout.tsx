import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "../components/Header";
import Footer from "@/components/Footer";
import { Toaster } from "react-hot-toast";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "CarBlog - Your Ultimate Car Blog",
  description: "Discover the latest in car news, reviews, and trends",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <main className="w-full">{children}</main>
        <Toaster position="top-center" />
        <Footer/>
      </body>
    </html>
  );
}