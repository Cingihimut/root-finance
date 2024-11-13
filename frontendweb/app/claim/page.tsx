import {} from "@/components/ui/card";
import CardDemo from "@/components/cardDemo";

export default function About() {
  return (
    <>
      <div className="h-[400px]  bg-gray-500">
        <div className="flex flex-col gap-4 justify-center items-center w-full h-full px-3 md:px-0">
            <img src="#" alt="logo cok dancok" />
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold ">
            Redeem
          </h1>
          <p className="text-xs">1:1 WETH redemptions via the Super OETH vault</p>
        </div>
      </div>

      <div className="p-4  lg:mx-auto  sm:w-3/4 sm:mx-auto  md:mx-auto pt-20 pb-20">
        <CardDemo />
      </div>
    </>
  );
}
