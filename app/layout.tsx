import Footer from "@/components/footer";
import Header from "@/components/header";
import { PostHogProvider } from "@/components/providers/posthog";
import { ThemeProvider } from "@/components/theme-provider";
import { Metadata } from "next";
import { Inter } from "next/font/google";
import type React from "react";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ikbal AZIMARI TOURE | Fullstack Developer",
  description:
    "Portfolio of Ikbal AZIMARI TOURE, a Fullstack Web & Mobile Developer specializing in modern web applications.",
  applicationName: "Ikbal AZIMARI TOURE | Portfolio",
  metadataBase: new URL("https://ikbal.info"),
  openGraph: {
    images: [],
    type: "website",
    url: "https://ikbal.info",
    title: "Ikbal AZIMARI TOURE | Fullstack Developer",
    description:
      "Portfolio of Ikbal AZIMARI TOURE, a Fullstack Web & Mobile Developer specializing in modern web applications.",
    siteName: "Ikbal AZIMARI TOURE | Fullstack Developer",
  },
  creator: "Ikbal AZIMARI TOURE",
  category: "Fullstack Developer",
  classification: "Portfolio",
  keywords: [
    "nextjs",
    "typescript",
    "tailwindcss",
    "shadcnui",
    "supabase",
    "zod",
    "hono",
    "trpc",
    "react query",
    "drizzle",
    "jotai",
    "paytech",
    "react",
    "portfolio",
    "portfolio website",
    "portfolio site",
    "portfolio page",
    "portfolio design",
    "portfolio template",
    "portfolio website template",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} antialiased`}>
        <PostHogProvider>
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem={false}
            disableTransitionOnChange
          >
            <div className="flex min-h-screen flex-col">
              <Header />
              <div className="flex-1">{children}</div>
              <Footer />
            </div>
          </ThemeProvider>
        </PostHogProvider>
      </body>
    </html>
  );
}
