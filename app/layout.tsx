import type { Metadata } from "next";
import { Urbanist } from "next/font/google";
import "./globals.css";
import { StoreSwitcher } from "@/components/store-switcher";
import getStores from "@/actions/get-stores";

const font = Urbanist({ subsets: ['latin']})

export const metadata: Metadata = {
  title: "Store",
  description: "Store",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={font.className}>
        {children}
      </body>
    </html>
  );
}