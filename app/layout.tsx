import type { Metadata } from "next";
import { El_Messiri } from "next/font/google";
import LocalFont from "next/font/local";
import "./globals.css";
import ToastProvider from "@/components/ToastContainer";
import { CartProvider } from "@/context/CartProvider";
import { SearchProvider } from "@/context/SearchProvider";

const elmessiri = El_Messiri({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-elmessiri",
});

const aeonik = LocalFont({
  src: [
    {
      path: "../public/fonts/Aeonik/AeonikTRIAL-Bold.otf",
      weight: "700",
      style: "bold",
    },
    {
      path: "../public/fonts/Aeonik/Aeonik-Medium.otf",
      weight: "500",
      style: "medium",
    },
    {
      path: "../public/fonts/Aeonik/AeonikTRIAL-Regular.otf",
      weight: "400",
      style: "normal",
    },

    {
      path: "../public/fonts/Aeonik/AeonikTRIAL-Light.otf",
      weight: "300",
      style: "light",
    },
  ],
  variable: "--font-aeonik",
});

export const metadata: Metadata = {
  title: "Timbu Cloud Shop",
  description: "E-commerce store",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${elmessiri.variable} ${aeonik.className}`}>
        <ToastProvider>
          <CartProvider>
            <SearchProvider>{children}</SearchProvider>
          </CartProvider>
        </ToastProvider>
      </body>
    </html>
  );
}
