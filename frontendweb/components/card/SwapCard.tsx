"use client";

import { useState } from "react";
import { ArrowDown, Wallet } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import ButtonSwap from "../button/ButtonSwap";

type Coin = {
  name: string;
  imgUrl: string;
};

type SwapState = {
  from: {
    coin: string;
    amount: string;
    options: Coin[];
  };
  to: {
    coin: string;
    amount: string;
    options: Coin[];
  };
};

const coinListDemo: Coin[] = [
  { name: "USDT", imgUrl: "#" },
  { name: "ETH", imgUrl: "#" },
  { name: "BTC", imgUrl: "#" },
];

const SelectCoin = ({
  options,
  value,
  onChange,
  disabled = false,
}: {
  options: Coin[];
  value: string;
  onChange: (value: string) => void;
  disabled?: boolean;
}) => (
  <Select value={value} onValueChange={onChange} disabled={disabled}>
    <SelectTrigger className="w-fit space-x-2 bg-card/30">
      <SelectValue>{value}</SelectValue>
    </SelectTrigger>
    <SelectContent>
      {options.map((option) => (
        <SelectItem key={option.name} value={option.name}>
          {option.name}
        </SelectItem>
      ))}
    </SelectContent>
  </Select>
);

const SwapInput = ({
  options,
  coin,
  amount,
  onCoinChange,
  onAmountChange,
}: {
  options: Coin[];
  coin: string;
  amount: string;
  onCoinChange: (value: string) => void;
  onAmountChange: (value: string) => void;
}) => (
  <div className="bg-card border border-border p-4 rounded-lg">
    <div className="flex justify-between gap-2">
      <Input
        type="number"
        value={amount}
        onChange={(e) => onAmountChange(e.target.value)}
        placeholder="0"
        className="w-full p-0 font-semibold text-2xl md:text-3xl border-none rounded-none focus-visible:ring-0 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
      />
      <SelectCoin
        options={options}
        value={coin}
        onChange={onCoinChange}
        disabled={options.length < 2}
      />
    </div>
    <div className="mt-5 flex justify-between">
      <span className="text-foreground/50 text-sm">$0</span>
      <div className="text-foreground/50 text-sm flex items-center gap-2">
        <Wallet className="w-5" />
        <span>0</span>
      </div>
    </div>
  </div>
);

function SwapCard() {
  const [swapState, setSwapState] = useState<SwapState>({
    from: {
      coin: "USDE",
      amount: "",
      options: [{ name: "USDE", imgUrl: "#" }],
    },
    to: { coin: "USDT", amount: "", options: coinListDemo },
  });

  const handleSwap = () => {
    setSwapState((prev) => ({
      from: { ...prev.to, options: prev.to.options },
      to: { ...prev.from, options: prev.from.options },
    }));
  };

  const updateSwapState = (
    field: "from" | "to",
    update: Partial<SwapState["from"]>
  ) => {
    setSwapState((prev) => ({
      ...prev,
      [field]: { ...prev[field], ...update },
    }));
  };

  return (
    <Card className="w-full lg:w-2/4">
      <CardHeader className="border-b rounded-t-lg">
        <CardTitle>Get USDe</CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col gap-4">
        <div className="relative">
          <SwapInput
            options={swapState.from.options}
            coin={swapState.from.coin}
            amount={swapState.from.amount}
            onCoinChange={(coin) => updateSwapState("from", { coin })}
            onAmountChange={(amount) => updateSwapState("from", { amount })}
          />
          <Button
            onClick={handleSwap}
            className="absolute group h-16 w-16 left-1/2 -translate-x-1/2 -bottom-9 z-10 rounded-full border-[7px] border-border "
          >
            <ArrowDown
              style={{ width: "24px", height: "24px" }}
              className="group-hover:-rotate-180 transition-all duration-300"
            />
          </Button>
        </div>

        <SwapInput
          options={swapState.to.options}
          coin={swapState.to.coin}
          amount={swapState.to.amount}
          onCoinChange={(coin) => updateSwapState("to", { coin })}
          onAmountChange={(amount) => updateSwapState("to", { amount })}
        />
      </CardContent>
      <CardFooter className="w-full flex flex-col justify-center">
        <ButtonSwap />
      </CardFooter>
    </Card>
  );
}

export default SwapCard;
