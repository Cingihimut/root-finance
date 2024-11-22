"use client";

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Input } from "../ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { Wallet } from "lucide-react";
import { useState } from "react";

const coinListDemo = [
  { name: "USDT", imgUrl: "#" },
  { name: "USDE", imgUrl: "#" },
  { name: "ETH", imgUrl: "#" },
];

const SelectCoin = () => {
  const [selectedValue, setSelectedValue] = useState("USDT");

  const handleSelected = (value: string) => {
    setSelectedValue(value);
  };

  return (
    <Select
      defaultValue="USDT"
      value={selectedValue}
      onValueChange={handleSelected}
    >
      <SelectTrigger className="w-fit space-x-2 bg-card/30">
        {/* <Image alt="?" src="@/assets/btc.png" width={100} height={100} /> */}
        <SelectValue />
      </SelectTrigger>
      <SelectContent>
        {coinListDemo.map((coin, index) => (
          <SelectItem value={coin.name} key={index}>
            {coin.name}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};

const CardContentSwap = () => {
  return (
    <div className="bg-background border border-border p-4 rounded-sm">
      {/* TOP */}
      <div className="flex justify-between gap-2">
        <Input
          type="number"
          placeholder="0"
          className="w-full p-0 font-semibold text-2xl md:text-3xl border-none rounded-none focus-visible:ring-0 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
        />
        <SelectCoin />
      </div>
      {/* BOTTOM */}
      <div className="mt-5 flex justify-between">
        <span className="text-foreground/50 text-sm">$0</span>
        <div className="text-foreground/50 text-sm flex items-center gap-2">
          <Wallet className="w-5" />
          <span>0</span>
        </div>
      </div>
    </div>
  );
};

function SwapCard() {
  return (
    <Card className="w-full lg:w-2/4">
      <CardHeader className="border-b">
        <CardTitle>Get USDe</CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col gap-2">
        <CardContentSwap />
        <CardContentSwap />
      </CardContent>
      <CardFooter>
        <p>Card Footer</p>
      </CardFooter>
    </Card>
  );
}

export default SwapCard;
