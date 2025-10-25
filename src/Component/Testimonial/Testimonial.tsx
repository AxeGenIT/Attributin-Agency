import { ThreeDScrollTriggerContainer, ThreeDScrollTriggerRow } from "@/components/lightswind/3d-scroll-trigger";

 


const Testimonial = () => {
    return (
        <div>
            <ThreeDScrollTriggerContainer>
  <ThreeDScrollTriggerRow baseVelocity={5} direction={1}>
    <div className="px-4 py-2 bg-blue-500 text-white rounded-lg">
      Item 1
    </div>
    <div className="px-4 py-2 bg-green-500 text-white rounded-lg">
      Item 2
    </div>
    <div className="px-4 py-2 bg-red-500 text-white rounded-lg">
      Item 3
    </div>
  </ThreeDScrollTriggerRow>
  <ThreeDScrollTriggerRow baseVelocity={5} direction={-1}>
    <div className="px-4 py-2 bg-blue-500 text-white rounded-lg">
      Item 1
    </div>
    <div className="px-4 py-2 bg-green-500 text-white rounded-lg">
      Item 2
    </div>
    <div className="px-4 py-2 bg-red-500 text-white rounded-lg">
      Item 3
    </div>
  </ThreeDScrollTriggerRow>
  <ThreeDScrollTriggerRow baseVelocity={5} direction={1}>
    <div className="px-4 py-2 bg-blue-500 text-white rounded-lg">
      Item 1
    </div>
    <div className="px-4 py-2 bg-green-500 text-white rounded-lg">
      Item 2
    </div>
    <div className="px-4 py-2 bg-red-500 text-white rounded-lg">
      Item 3
    </div>
  </ThreeDScrollTriggerRow>
</ThreeDScrollTriggerContainer>
        </div>
    );
};

export default Testimonial;