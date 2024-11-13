import { Clock4, Check  } from "lucide-react";

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
          <p className="text-xl pb-6">
            <span className="font-bold text-3xl ">0.0</span> WETH
          </p>
        </CardDescription >

        <span className="grid lg:grid-cols-2">
        <CardDescription className=" grid justify-items-center border ">
          <h1 className="p-2">Your Request</h1>
          <p className=" flex font-bold text-3xl pb-6 pr-4">
            <span className="flex font-bold text-3xl pr-4">
              {"  "}
              <Check className="mr-2 justify-items-center "></Check> {" 0 "}
            </span>{"  "}
            <Clock4 className="mr-2 justify-items-center "></Clock4> {"0"}
          </p>
        </CardDescription>
        
        <CardDescription className="grid justify-items-center border ">
          <h1 className="p-2">Your pending amount</h1>
          <p className="text-xl pb-6">
            <span className="font-bold text-3xl ">0</span> OETH 
          </p>
        </CardDescription>
        </span>

        <h1 className=" text-xs">Your claim</h1>
        <CardDescription className=" grid justify-items-center border ">
          <span className="p-10 ">Your have withdrawal Request</span>
        </CardDescription>
        
      </CardContent>
      <CardFooter>
        <Button className="w-full text-xl p-8">Connact Wallet</Button>
      </CardFooter>
    </Card>
  );
}
