import type { Metadata } from "next";
import "@/styles/globals.css";
import { Inter } from "next/font/google";
import Navbar from "@/components/navbar";
import { ThemeProvider } from "next-themes";
import BgGradient from "@/components/bg-gradient";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Root.fi",
  description:
    "Root Finance addresses key challenges for beginner investors, including price volatility, market complexity, and limited time for monitoring. It combines Ethena's stable 13% APY on USDe with DeFi strategies, utilizing platforms like Pendle, Morpho, and Uniswap to optimize returns. This approach mimics traditional mutual funds with a focus on asset diversification and risk-adjusted yield.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} w-full`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          <BgGradient />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
