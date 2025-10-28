import Title from "@/utils/Title";
import ServicesContainer from "../Serviecs/ServicesContainer";
import LightRays from "@/components/LightRays";

const Services = () => {
  return (
    <div className="relative">
<div style={{ width: '100%', height: '600px', position: 'absolute' }}>
  <LightRays
    raysOrigin="top-center"
    raysColor="#00ffff"
    raysSpeed={1.5}
    lightSpread={0.8}
    rayLength={1.2}
    followMouse={true}
    mouseInfluence={0.1}
    noiseAmount={0.1}
    distortion={0.05}
    className="custom-rays"
  />
</div>
      <div className=" py-16">
        <Title
          title="Our Dedicated"
          gradient="Services"
          description="Attribution is a one-stop digital service company offering web, app, and AI development, design, marketing, and analytics — everything your business needs to grow online"
        />
        <ServicesContainer />
      </div>
    </div>
  );
};

export default Services;
