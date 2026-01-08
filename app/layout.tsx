import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { cookies } from "next/headers";
import Header from "./components/Header";

const geistSans = Geist({ subsets: ["latin"] });
const geistMono = Geist_Mono({ subsets: ["latin"] });

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
      <body className={`${geistSans.className} ${geistMono.className}`}>
        {auth && <Header />}
        <main className="app-main">{children}</main>
      </body>
    </html>
  );
}
