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
        <div className={`container p-5 ${poppins.className}`}>
                {children}
                {/* children = page.tsx */}
        </div>
    );
}
