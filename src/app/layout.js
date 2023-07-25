import Nav from "@/components/Nav";
import "./globals.css";
import { Inter } from "next/font/google";
import Footer from "@/components/Footer";
import { CartProvider } from "@/components/CartContext";
import AuthProvider from "./AuthProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Commerce",
  description: "Commerce website",
};

export default function RootLayout({ children }) {
  return (
    <AuthProvider>
      <html lang="en">
        <body className={inter.className}>
          <CartProvider>
            <Nav />
            {children}
            <Footer />
          </CartProvider>
        </body>
      </html>
    </AuthProvider>
  );
}
