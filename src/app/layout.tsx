import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Umar - MERN Stack Developer",
  description:
    "I am Umar Khitab, a passionate MERN stack developer specializing in building dynamic, high-performance web applications. I have expertise in MongoDB, Express.js, React.js, and Node.js, creating full-stack solutions that are scalable, efficient, and user-friendly. My focus is on crafting clean code, optimizing performance, and delivering seamless user experiences through modern web technologies. With a strong foundation in front-end and back-end development, I transform ideas into fully functional web applications. Let's build something amazing together!",
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
        {children}
      </body>
    </html>
  );
}
