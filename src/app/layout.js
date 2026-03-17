import { Syne, DM_Sans, Be_Vietnam_Pro } from "next/font/google";
import "./globals.css";
import Head from "next/head";
import 'bootstrap/dist/css/bootstrap.min.css';
import ImportBsJS from "./components/ImportBsJS";

const syne = Syne({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-syne",
});

const dmsans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-dmsans",
});

const bevietnampro = Be_Vietnam_Pro({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-bevietnampro",
});

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${syne.variable} ${dmsans.variable}`}>
      <Head>
        <title>AI Arbitrage - AI-Driven Crypto Arbitrage Platform</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <body>
        <ImportBsJS />
        {children}
      </body>
    </html>
  );
}
