import type { Metadata } from "next";

import "./globals.css";
import Navbar from "@/components/shared/Navbar";
import { getServerSession } from "next-auth";
import { authOptions } from "@/utils/authOptions";

export const metadata: Metadata = {
  title: "Driving Center",
  description: "Learn to ride safely and confidently",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await getServerSession(authOptions);
  return (
    <html lang="en" data-theme="light">
      <body>
        <Navbar session={session} />
        <div className="min-h-screen w-[90%] mx-auto">{children}</div>
      </body>
    </html>
  );
}
