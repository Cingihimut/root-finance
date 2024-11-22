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

export default function CardDefi({ className, ...props }: CardProps) {
  return (
<>
<div className="pt-6 sm:flex sm:pt-10 lg:pt-16 sm:m-10">
  
  <div className="px-2 py-4 sm:size-1/2 ">
    <Card className={cn(" ", className)} {...props}>
      <CardHeader className="border-b">
        <CardTitle>Alocations</CardTitle>
      </CardHeader>
      <CardContent className="grid gap-2 pt-0 w-full ">
        
        <CardDescription className="flex justify-between border-b-2 ">
            <h1 className="p-2">coin</h1>
            <p className="p-2">+</p>
          </CardDescription>

          <CardDescription className="flex justify-between border-b-2 ">
            <h1 className="p-2">coin</h1>
            <p className="p-2">+</p>
          </CardDescription>

          <CardDescription className="flex justify-between border-b-2 ">
            <h1 className="p-2">coin</h1>
            <p className="p-2">+</p>
          </CardDescription>

          <CardDescription className="flex justify-between border-b-2 ">
            <h1 className="p-2">coin</h1>
            <p className="p-2">+</p>
          </CardDescription>

          <CardDescription className="flex justify-between border-b-2 ">
            <h1 className="p-2">coin</h1>
            <p className="p-2">+</p>
          </CardDescription>
          
        
      </CardContent>
    </Card>
  </div>

  <div className="px-2 py-4 sm:size-1/2 ">
    <Card>
      <CardHeader className="border-b">
        <CardTitle>Risk Profil</CardTitle>
      </CardHeader>
      <CardContent className="flex">
        <CardDescription className="w-full flex justify-between border-b-2 p-2 px-10 ">

            <span>Risk</span>
            <span>Detail</span>
            <span>Strategy</span>
            <span>Goals</span>
            
            
        </CardDescription>
        
      </CardContent>
      <CardFooter className="pt-0">
      </CardFooter>
    </Card>
  </div>
</div>

  

</>

    

  );
}
 