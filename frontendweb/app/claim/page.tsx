
import {} from "@/components/ui/card";
import CardDemo from "@/components/cardDemo";
import HeroClaim from "@/components/heroClaim";


export default function claim () {
  return (
    <>
    <div>
        <HeroClaim />
    </div>

    <hr className="my-4 border-b-2" />

      <div className="p-4  lg:mx-auto  sm:w-3/4 sm:mx-auto  md:mx-auto pt-20 pb-20">
        <CardDemo />
      </div>

      
    </>
  );
}

