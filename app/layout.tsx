import type { Metadata } from "next";
import { Raleway } from "next/font/google";
import "./globals.css";

const raleway = Raleway({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-raleway",
});

export const metadata: Metadata = {
  title: "Sai Teja Madha - Portfolio",
  description: "Software Engineering graduate with 4 years of experience working as a Full Stack Software Engineer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${raleway.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
