import Banner from "@/Component/Home/Banner";
import GooglePartner from "@/Component/Home/GooglePartner";
import ResultsSection from "@/Component/Home/Resut";
import Services from "@/Component/Home/Services";
import ProBanner from "@/Component/Share/ProBanner/ProBanner";
import Trusted from "@/Component/Trusted/Trusted";

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
      <ResultsSection/>
      <Trusted/>
    </div>
  );
}
