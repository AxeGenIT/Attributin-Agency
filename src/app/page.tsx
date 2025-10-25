import Banner from "@/Component/Home/Banner";
import Testimonial from "@/Component/Testimonial/Testimonial";
import Trusted from "@/Component/Trusted/Trusted";
import TrustedLogo from "@/Component/Trusted/TrustedLogo";
import Testimonials, { TestimonialCard } from "@/components/mvpblocks/testimonials-marquee";

export default function Home() {
  return (
    <div>
      <Trusted/>
      <TrustedLogo/>
      <Testimonial/>

    </div>
  );
}
