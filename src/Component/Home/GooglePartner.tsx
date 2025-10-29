import Image from "next/image";

 

const GooglePartner = () => {
    return (
        <div className="container px-4 py-16">
                    <div className="w-full px-10 py-5 card flex md:justify-start justify-center  items-center rounded-2xl gap-5 
h-full  bg-white-600  bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-50 border border-gray-50  sm:flex-nowrap">
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