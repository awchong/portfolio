import type { Metadata } from "next";
import { Instrument_Serif, Instrument_Sans } from "next/font/google";
import Nav from "./components/Nav";
import ContactFormModal from "./components/ContactFormModal";
import "./globals.css";

const instrumentSerif = Instrument_Serif({
  weight: "400",
  style: ["normal", "italic"],
  subsets: ["latin"],
  variable: "--font-serif",
});

const instrumentSans = Instrument_Sans({
  weight: ["400", "500"],
  style: ["normal"],
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Allen Chong",
  description: "UX and content designer. Instructive & impactful, by design.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${instrumentSerif.variable} ${instrumentSans.variable}`}
    >
      <body>
        <Nav />
        {children}
        <ContactFormModal />
      </body>
    </html>
  );
}
