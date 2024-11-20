"use client";

import { useTheme } from "next-themes";
import { WagmiProvider } from "wagmi";
import { mainnet, polygon, optimism, arbitrum, base } from "wagmi/chains";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "@rainbow-me/rainbowkit/styles.css";
import {
  darkTheme,
  getDefaultConfig,
  lightTheme,
  RainbowKitProvider,
} from "@rainbow-me/rainbowkit";
import { useEffect, useState } from "react";

const queryClient = new QueryClient();
const config = getDefaultConfig({
  appName: "My RainbowKit App",
  projectId: "YOUR_PROJECT_ID",
  chains: [mainnet, polygon, optimism, arbitrum, base],
  ssr: true,
});

export default function WagmiWrapper({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { theme } = useTheme();
  const [rainbowKitTheme, setRainbowKitTheme] = useState(lightTheme());

  useEffect(() => {
    if (theme === "dark") {
      setRainbowKitTheme(darkTheme());
    } else {
      setRainbowKitTheme(lightTheme());
    }
  }, [theme]);

  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <RainbowKitProvider theme={rainbowKitTheme} modalSize="compact">
          {children}
        </RainbowKitProvider>
      </QueryClientProvider>
    </WagmiProvider>
  );
}
