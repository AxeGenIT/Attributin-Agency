import Banner from "@/Component/Home/Banner/Banner";
import Banner_logo from "@/Component/Home/Banner/Banner_logo";
import ChallengesSection from "@/Component/Home/Challenges";
import ContactSection from "@/Component/Home/Contact/Contact";
import DigitalGrow from "@/Component/Home/DigitalGrow";
import GooglePartner from "@/Component/Home/GooglePartner";
import Card03 from "@/Component/Home/Our team/TeamCard/Card03/Card03";
import TeamSection from "@/Component/Home/Our team/TeamSection";
import ProcessSection from "@/Component/Home/Process";
import PromoVideo from "@/Component/Home/PromoVideo";
import Portfolio01 from "@/Component/Home/Protfolio/Portfolio01";
import Portfolio02 from "@/Component/Home/Protfolio/Portfolio02";
 
import ResultsSection from "@/Component/Home/Resut";
import Services from "@/Component/Home/Services";
import ProBanner from "@/Component/Share/ProBanner/ProBanner";
import Testimonial from "@/Component/Testimonial/Testimonial";
import TestimonialsSection from "@/Component/TestimonialSection";
import Trusted from "@/Component/Trusted/Trusted";
import TrustedLogo from "@/Component/Trusted/TrustedLogo";
import { HeroParallax } from "@/components/ui/hero-parallax";

export default function Home() {
  return (
    <div>
      <Banner />
      <GooglePartner />
      <Services />
      <ProBanner
        headline="Enjoy 10% Off When You Choose Our Annual Package"
        description="Take advantage of a special 10% discount on your first annual subscription. This limited-time offer is exclusively available for new customers. Don't miss out—subscribe today and start enjoying premium features while saving money on your yearly plan."
        image="/promo1.svg"
        buttonText="Start Now"
      />
      <Trusted/>
      <Portfolio02/>
      <ResultsSection/>
      
      <PromoVideo/>
      <DigitalGrow/>
      <ProcessSection/>
      <TrustedLogo/>
      <ChallengesSection/>
      <ContactSection/>
      <TeamSection/>
      <Testimonial/>
      
    </div>
  );
}
