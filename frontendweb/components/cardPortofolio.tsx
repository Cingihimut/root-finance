import { cn } from "@/lib/utils";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button";

type CardProps = React.ComponentProps<typeof Card>;

export default function cardPortofolio({ className, ...props }: CardProps) {
  return (
<>
<div className="pt-6 sm:flex sm:pt-10 lg:pt-16 sm:m-10">
  
  <div className="px-2 py-4 sm:size-3/5 ">
    <Card className={cn(" ", className)} {...props}>
      <CardHeader>
        <CardContent className="flex justify-between pb-0">
          <CardDescription>Your Wallet Balance</CardDescription>
          <CardDescription>Conservative User</CardDescription>
        </CardContent>
      </CardHeader>
      <CardContent className="grid gap-2 pt-0 w-full ">
        
          <CardDescription className="flex justify-between border bg-card/60">
            <h1 className="p-2">coin</h1>
            <p className="p-2">40%</p>
          </CardDescription>

          <CardDescription className="flex justify-between border bg-card/60">
            <h1 className="p-2">coin</h1>
            <p className="p-2">30%</p>
          </CardDescription>

          <CardDescription className="flex justify-between border bg-card/60">
            <h1 className="p-2">coin</h1>
            <p className="p-2">20%</p>
          </CardDescription>

          <CardDescription className="flex justify-between border bg-card/60">
            <h1 className="p-2">coin</h1>
            <p className="p-2">10%</p>
          </CardDescription>

          <CardDescription className="flex justify-between border bg-card/60">
            <h1 className="p-2">coin</h1>
            <p className="p-2">+</p>
          </CardDescription>

          <CardDescription className="flex justify-between border bg-card/60">
            <h1 className="p-2">coin</h1>
            <p className="p-2">+</p>
          </CardDescription>

          <CardDescription className="flex justify-between border bg-card/60">
            <h1 className="p-2">coin</h1>
            <p className="p-2">+</p>
          </CardDescription>

          <CardDescription className="flex justify-between border bg-card/60">
            <h1 className="p-2">coin</h1>
            <p className="p-2">+</p>
          </CardDescription>
        
      </CardContent>
    </Card>
  </div>

  <div className="px-2 py-4 sm:size-2/5  ">
    <Card>
      <CardHeader>
        <CardTitle></CardTitle>
        <CardDescription className="flex justify-center">
          Your USDe
        </CardDescription>
      </CardHeader>
      <CardContent className="flex justify-center">
        <Avatar className="size-20">
          <AvatarImage src="" />
          <AvatarFallback>coin</AvatarFallback>
        </Avatar>
      </CardContent>
      <CardContent className="relative flex justify-between pb-2 px-8">
        <CardDescription>Staking Reword</CardDescription>
        <CardDescription>13%</CardDescription>
      </CardContent>
      <CardFooter className="pt-0">
        <Button className="w-full">Get more</Button>
      </CardFooter>
    </Card>
  </div>
</div>

  

</>

    

  );
}
 