import React from "react";
import { CircleDollarSign } from "lucide-react";
function HeroClaim() {
  return (
    <>
      <div className="h-[400px]">
        <div className="flex flex-col gap-4 justify-center items-center w-full h-full px-3 md:px-0">
          <div className="w-12 h-12 md:w-16 md:h-16 lg:w-20 lg:h-20 flex justify-center items-center">
            <CircleDollarSign className="text-yellow-500 w-full h-full" />
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary via-indigo-400 to-foreground bg-300% animate-gradient">
            Redeem
          </h1>
          <p className=" text-secondary-foreground text-xs md:text-sm lg:text-base ">
            1:1 WETH redemptions via the Super OETH vault
          </p>
        </div>
      </div>
    </>
  );
}

export default HeroClaim;
