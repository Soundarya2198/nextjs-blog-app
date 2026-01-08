import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cookies } from "next/headers";
import Header from "./components/Header";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: process.env.NEXT_PUBLIC_APP_NAME,
  description: "Learning Next.js App Router",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const auth = (await cookies()).get("auth");

  return (
    <html lang="en">
      <body className={inter.className}>
        {auth && <Header />}
        <main className="app-main">{children}</main>
      </body>
    </html>
  );
}
