import type { Metadata } from "next";
import { Noto_Sans } from "next/font/google";
import "./globals.css";

const notoSans = Noto_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-noto",
});

export const metadata: Metadata = {
  title: "Maheshwari Realcon Pvt. Ltd. | Real Estate in Bihar",
  description:
    "Maheshwari Realcon Pvt. Ltd. – Leading industrial & residential real estate agency in Bihar. Find your perfect property at Saguna More, Patna.",
  keywords: "real estate Bihar, property Patna, industrial property Bihar, Maheshwari Realcon, Saguna More property",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${notoSans.variable}`}>
      <body className="min-h-screen flex flex-col">{children}</body>
    </html>
  );
}
