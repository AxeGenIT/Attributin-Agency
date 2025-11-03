 
import Image from "next/image";
 

const GooglePartner = () => {
    return (
        <div className="container px-4 py-16 bg-transparent">
                              <div className="w-full   partner px-10 py-5 card flex md:justify-start justify-center  items-center   gap-5 h-full sm:flex-nowrap">
            <Image src='/google.png' alt="Google Partner with Attribution Booster" className="shrink-0" width={150} height={96} />
            <div className="text-white">
                <h1 className="text-2xl">Trusted by Google to deliver top-tier advertising performance</h1>
                <p className="text-sm">As a certified <span className="text-[#0B969B]">Google Partner</span>, our strategies are not just creative, they're conversion-proven.</p>
            </div>
        </div>
        </div>
    );
};

export default GooglePartner;