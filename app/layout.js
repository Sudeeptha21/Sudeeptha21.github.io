import { Manrope, Playfair_Display } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-sans",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-display",
});

export const metadata = {
  title: "Sudeeptha Sivarajan | Business Analyst Portfolio",
  description:
    "Portfolio for Sudeeptha Sivarajan, a business and product analyst building data-driven systems, dashboards, and AI-powered workflows.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${manrope.variable} ${playfair.variable}`}>
        {children}
      </body>
    </html>
  );
}
