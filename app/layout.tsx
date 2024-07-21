import "@/styles/globals.css";
import type { Metadata } from "next";
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
        <Header user={false} />
        <main>{children}</main>
        <footer></footer>
      </body>
    </html>
  );
}
