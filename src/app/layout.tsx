import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { inter } from "@/lib/fonts";
import { cn } from "@/lib/utils";
import "@/styles/globals.css";
import { Analytics } from "@vercel/analytics/react";
import { Metadata } from "next";

const title = "CSREP.no";
const description =
  "This is a Next.js starter kit that uses Next-Auth for simple email + password login and a Postgres database to persist the data.";

export const metadata: Metadata = {
  title,
  description,
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
  metadataBase: new URL("https://www.csrep.no/"),
  themeColor: "#000",
  icons: [
    {
      type: "image/png",
      rel: "icon",
      sizes: "32x32",
      url: "/favicon-32x32.png",
    },
    {
      type: "image/png",
      rel: "icon",
      sizes: "16x16",
      url: "/favicon-16x16.png",
    },
    {
      rel: "apple-touch-icon",
      sizes: "180x180",
      url: "/apple-touch-icon.png",
    },
    {
      rel: "mask-icon",
      url: "/safari-pinned-tab.svg",
    },
  ],
  manifest: "/site.webmanifest",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="no">
      <body className={cn("bg-primary", inter.className)}>
        <div className="h-[95vh] w-screen">
          <Header />
          {children}
          <Analytics />
        </div>
        <Footer />
        {/* ANALYTICS */}
        <Analytics />
      </body>
    </html>
  );
}
