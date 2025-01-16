import type { Metadata } from "next";
import { Poppins } from 'next/font/google';

const poppins = Poppins({
    weight: ['500'],
    subsets: ['latin'],
});

export const metadata: Metadata = {
    title: "Jenjang",
    description: "We are Sekopling",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div className={`${poppins.className} h-screen w-full flex items-center justify-center bg-gradient-to-br from-red-500 to-red-600`}>
                {children}
                {/* children = page.tsx */}
        </div>
    );
}
