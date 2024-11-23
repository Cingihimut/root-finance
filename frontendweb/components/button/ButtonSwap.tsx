import { useState } from "react";
import { useAccount } from "wagmi";
import { Button } from "@/components/ui/button";
import ButtonConnectWallet from "./ButtonConnectWallet";

export default function SwapButton() {
  const { isConnected } = useAccount();
  const [isSwapping, setIsSwapping] = useState(false);

  const handleSwap = async () => {
    if (!isConnected) return;

    setIsSwapping(true);
    try {
      // Implementasi logika swap
      console.log("Swapping...");
      // Simulasi
      await new Promise((resolve) => setTimeout(resolve, 2000));
      console.log("Swap berhasil!");
    } catch (error) {
      console.error("Swap gagal:", error);
    } finally {
      setIsSwapping(false);
    }
  };

  if (!isConnected) {
    return <ButtonConnectWallet />;
  }

  return (
    <Button onClick={handleSwap} disabled={isSwapping} className="w-full">
      {isSwapping ? "Swapping..." : "Swap"}
    </Button>
  );
}
