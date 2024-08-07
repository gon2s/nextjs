import type { Metadata } from "next";
import { ThemeProvider } from "@/providers/themeProvider";
import { Inter } from "next/font/google";
import "./globals.css";
import { Sidebar } from "@/components/layouts";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "YouTube Music",
  description: "YouTube Music",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <Sidebar>{children}</Sidebar>
        </ThemeProvider>
      </body>
    </html>
  );
}
