import ImageReveal from "@/components/lightswind/image-reveal";
import Title from "@/utils/Title";


const Portfolio01 = () => {
    return (
        <div >
            <div className="container py-10">
                <Title title="Our Featured " gradient="Projects" description="Explore a collection of our finest work — where creativity meets functionality to deliver impactful digital experiences."/>
                <div className="my-6">
                    <ImageReveal/>
                </div>
            </div>
        </div>
    );
};

export default Portfolio01;