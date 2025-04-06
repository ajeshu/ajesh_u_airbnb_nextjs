import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import SWRWrapper from "@/components/SWRWrapper";
import LayoutWrapper from "@/components/Layout/LayoutWrapper";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Airbnb Clone",
  description: "This is a clone of Airbnb",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <SWRWrapper>
          <LayoutWrapper>{children}</LayoutWrapper>
        </SWRWrapper>
      </body>
    </html>
  );
}
