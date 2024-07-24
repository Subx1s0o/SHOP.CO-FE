import "@/styles/globals.css";
import "modern-normalize/modern-normalize.css";
import type { Metadata } from "next";
import "resetcss/reset.min.css";
import Header from "./global/Header";
export const metadata: Metadata = {
  title: "SHOP.CO",
  description: "Find clothes that matches your style",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main>{children}</main>
        <footer></footer>
      </body>
    </html>
  );
}
