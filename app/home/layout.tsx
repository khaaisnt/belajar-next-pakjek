import type { Metadata } from "next";
import Header from "@/components/header";

export const metadata: Metadata = {
  title: "Homepage",
  description: "We are Sekopling",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
        <Header />
        {children}
        {/* children = page.tsx */}
    </div>
  );
}
