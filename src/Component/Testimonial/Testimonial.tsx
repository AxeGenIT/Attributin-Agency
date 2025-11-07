import { ThreeDScrollTriggerContainer, ThreeDScrollTriggerRow } from "@/components/lightswind/3d-scroll-trigger";
import Title from "@/utils/Title";
import TestimonialCard from "./Component/TestimonialCard";
import { testimonials } from "@/data/testimonials";
 

 


const Testimonial = () => {
    return (
      <section className="">
                <div className="container py-10 space-y-10 ">
          <div>
            <Title title="Trusted by" gradient="Thousands" description="Don't just take our word for it - hear what our clients say"/>
          </div>
          <div className="relative">
                        <ThreeDScrollTriggerContainer>
  <ThreeDScrollTriggerRow baseVelocity={5} direction={1} className="my-5">
  
   {
    testimonials.map(testimonial => {
      const {id,name,company,avatar,comment} = testimonial;
      return(
        <TestimonialCard key={id} name={name} company={company} comment={comment} avatar={avatar}/>
      )
    })
   }
    
  </ThreeDScrollTriggerRow>
  <ThreeDScrollTriggerRow baseVelocity={5} direction={-1} className="mb-5">
{
    testimonials.map(testimonial => {
      const {id,name,company,avatar,comment} = testimonial;
      return(
        <TestimonialCard key={id} name={name} company={company} comment={comment} avatar={avatar}/>
      )
    })
   }
  </ThreeDScrollTriggerRow>
  <ThreeDScrollTriggerRow baseVelocity={5} direction={1}>
{
    testimonials.map(testimonial => {
      const {id,name,company,avatar,comment} = testimonial;
      return(
        <TestimonialCard key={id} name={name} company={company} comment={comment} avatar={avatar}/>
      )
    })
   }
  </ThreeDScrollTriggerRow>
</ThreeDScrollTriggerContainer>
          </div>
        </div>
      </section>
    );
};

export default Testimonial;