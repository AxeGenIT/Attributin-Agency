import { ShineBorder } from "@/components/ui/shine-border";
import Title from "@/utils/Title";

 

const PromoVideo = () => {
    return (
        <section className="relative z-10 w-full py-16 lg:py-24 overflow-hidden scroll-smooth">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <Title title="Meet Attribution Booster in" gradient="1 Minute" description="One minute is all it takes to see how we turn innovation and analytics into real, measurable growth."/>

                {/* Video Container */}
                <div
                    className=" mx-auto px-10 relative z-30"
                >
                    <div className=" rounded-3xl ">
                        <div className=" aspect-video flex items-center justify-center z-30">
                            <iframe
                                width="560"
                                height="315"
                                src="https://www.youtube.com/embed/9RSUQk1ITYI?si=dLPYosTUXIjICDN2"
                                title="YouTube video player"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                referrerPolicy="strict-origin-when-cross-origin"
                                allowFullScreen
                                className="w-full h-full rounded-3xl z-30"
                            ></iframe>
                        </div>
                    </div>
                </div>
            </div>
            <section className="relative z-1 px-4 sm:px-6 py-6 overflow-hidden -mt-96 hidden md:block ">
                <div className="container mx-auto relative z-20 bg-white/5 backdrop-blur-md  rounded-2xl shadow-2xl p-6 md:p-12 min-h-[570px]  ">
                <ShineBorder shineColor={["#07F4FA", "#00E1E7", "#00B3B8"]} borderWidth={3}/>
                    <div className="absolute inset-0">
                        {/* Hero1 on the left side */}
                        <img src="/video_left.png" alt="Background Element Left" className="absolute left-0 bottom-0 object-cover opacity-30 h-24 sm:h-32 md:h-48 lg:h-64 xl:h-72 w-auto" />
                        {/* Hero2 on the right side */}
                        <img src="/video_right.png" alt="Background Element Right" className="absolute right-0 bottom-0 object-cover opacity-30 h-24 sm:h-32 md:h-48 lg:h-64 xl:h-72 w-auto" />
                    </div>
                </div>
            </section>
        </section>
    );
};

export default PromoVideo;