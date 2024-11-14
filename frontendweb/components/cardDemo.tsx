import { Clock4, Check } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

type CardProps = React.ComponentProps<typeof Card>;

export default function CardDemo({ className, ...props }: CardProps) {
  return (
    <Card className={cn(" ", className)} {...props}>
      <CardHeader>
        <CardTitle></CardTitle>
      </CardHeader>
      <CardContent className="grid gap-4 ">
        <CardDescription className="text-slate-500 grid justify-items-center border">
          <h1 className="p-2">Available to claim</h1>
          <p className="text-xl pb-6 text-black dark:text-white">
            <span className="font-bold text-3xl">0.0</span> WETH
          </p>
        </CardDescription>
        <span className="grid lg:grid-cols-2">
          <CardDescription className="grid justify-items-center border">
            <h1 className="p-2">Your Request</h1>
            <p className="flex items-center font-bold text-3xl pb-6 pr-4">
              <Check className="mr-2 text-green-800" />
              <span className="mr-3  text-black dark:text-white">0</span>
              <span className="border-l-2 h-6 mx-2"></span>
              <Clock4 className="mr-2 ml-3 text-yellow-500" />
              <span className="text-black dark:text-white">0</span>
            </p>
          </CardDescription>
          <CardDescription className="grid justify-items-center border ">
            <h1 className="p-2">Your pending amount</h1>
            <p className="text-xl text-black dark:text-white pb-6">
              <span className="font-bold text-3xl light:text-black dark:text-white">
                0
              </span>{" "}
              OETH
            </p>
          </CardDescription>
        </span>
        <h1 className=" text-xs">Your claim</h1>
        <CardDescription className=" grid justify-items-center border ">
          <span className="p-10 flex flex-wrap ">
            Your have withdrawal Request
          </span>
        </CardDescription>
      </CardContent>
      <CardFooter>
        <Button className="w-full text-xl p-8">Connact Wallet</Button>
      </CardFooter>
    </Card>
  );
}
