import type { Metadata } from "next";
import { Poppins, Raleway, Roboto, Playfair_Display, Montserrat } from "next/font/google";
import "./globals.css";
import Header from "@/Component/Share/Header/Header";
import Footer from "@/Component/Share/Footer/Footer";
import { Toaster } from "react-hot-toast";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
   style: ["normal", "italic"],
  variable: "--font-poppins", // 👈 optional but recommended
});

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-montserrat",
});

const raleway = Raleway({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-raleway",
});

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  style: ["normal", "italic"],
  variable: "--font-roboto",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-playfair",
});


export const metadata = {
  title: "Attributin Agency",
  description: "Modern Marketing & Creative Agency Website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={` ${poppins.variable} ${montserrat.variable} ${raleway.variable} ${roboto.variable} ${playfair.variable} antialiased`}
      >
        <Toaster
  position="top-right"
  toastOptions={{
    style: {
      borderRadius: '10px',
      padding: '16px',
      fontSize: '14px',
    },
    success: {
      style: {
        background: '#10b981',
        color: '#fff',
      },
      iconTheme: { primary: '#fff', secondary: '#10b981' },
    },
    error: {
      style: {
        background: '#ef4444',
        color: '#fff',
      },
      iconTheme: { primary: '#fff', secondary: '#ef4444' },
    },
  }}
/>

        <div className="bg-[#06101A] min-h-screen">
          <Header />

        {children}
        <Footer/>
        </div>
        
      </body>
    </html>
  );
}
