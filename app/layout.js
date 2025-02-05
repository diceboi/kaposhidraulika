import { Montserrat } from "next/font/google";
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import "./globals.css";
import { Toaster } from "sonner";
import Nav from "./components/UI/Nav";
import Footer from "./components/UI/Footer";
import { GoogleAnalytics } from '@next/third-parties/google'

const montserrat = Montserrat({
  subsets: ["latin"], // Specify language subsets
  variable: "--font-montserrat", // Define a CSS variable for the font
  weight: ["100","200","300","400","500","600","700","800","900",], // Optional: Specify font weights
});

export const metadata = {
  title: "Kaposhidraulika - Tehergépkocsi, Kamion és Munkagép Szerviz, Hidraulika Javítás",
  description: "Teherautó és kamion szerviz, hidraulika javítás, munkagép karbantartás és gumicsere Kaposváron és Somogy, Tolna, Baranya, Zala megyében. Helyszíni kiszállással is!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${montserrat.variable} ${GeistSans.variable} ${GeistMono.variable} antialiased -mt-[124px]`}>
        <Nav />
        {children}
        <Footer />
      <Toaster richColors position="bottom-center" />
      </body>
      <GoogleAnalytics gaId="G-V5DY47W2ME" />
    </html>
  );
}
