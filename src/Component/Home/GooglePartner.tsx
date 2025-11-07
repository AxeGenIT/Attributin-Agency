 
 
 
import { ShineBorder } from "@/components/ui/shine-border";
import Image from "next/image";
 

const GooglePartner = () => {
    return (
        <div className="container px-4 py-16 ">
                              <div className="w-full bg-black   partner px-10 py-5 card flex md:justify-start justify-center  items-center   gap-5 h-full flex-wrap relative rounded-2xl ">
                                
            <Image src='/google.png' alt="Google Partner with Attribution Booster" className="shrink-0" width={150} height={96} />
            <div className="text-white">
                <h1 className="text-2xl">Trusted by Google to deliver top-tier advertising performance</h1>
                <p className="text-sm">As a certified <span className="text-[#0B969B]">Google Partner</span>, our strategies are not just creative, they're conversion-proven.</p>
                 <ShineBorder className="rounded-2xl" borderWidth={2} duration={10} shineColor={["#A07CFE", "#FE8FB5", "#FFBE7B"]} />
            </div>
 
        </div>
        </div>
    );
};

export default GooglePartner;