import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Providers } from "~/libs/providers";
import "~/styles/globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Open Hub",
  description: "Open Hub",
};

export const viewport: Viewport = {
    colorScheme: "light",
};
 
export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className={`${geistSans.variable} ${geistMono.variable} scroll-smooth`}>
            <body className="bg-primary antialiased">
                <Providers>
                    {children}
                </Providers>
            </body>
        </html>
    );
}

