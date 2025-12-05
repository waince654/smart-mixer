import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";


export const metadata = {
  title: "Smart Mixer",
  description: "A privacy-focused Bitcoin mixer leveraging cutting-edge technologies.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
       <head>
       
        <link rel="icon" href="/step-1.svg" />
      </head>
      <body
        // className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
