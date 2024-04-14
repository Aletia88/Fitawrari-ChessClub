import { Inter } from "next/font/google";
import "./globals.css";
import Navigation from "./views/Header";
import Footer from "./views/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Fit awrari",
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <Navigation />
        {children}
      <Footer />
        </body>
    </html>
  );
}
