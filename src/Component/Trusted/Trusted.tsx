'use client'
import LogoLoop from "@/components/LogoLoop";

 

const Trusted = () => {
const imageLogos = [
  { src: "/brands/avinell_client.png", alt: "Company 1", href: "https://company1.com" },
  { src: "/brands/avinell.png", alt: "Company 2", href: "https://company2.com" },
  { src: "/brands/cardo_client.png", alt: "Company 3", href: "https://company3.com" },
];
    return (
        <div className=" container py-6 space-y-5">
            <div>

            </div>
            <div style={{ height: '80px', position: 'relative', overflow: 'hidden'}}>
      <LogoLoop
        logos={imageLogos}
        speed={120}
        direction="left"
        logoHeight={48}
        gap={40}
        pauseOnHover
        scaleOnHover
        fadeOut
        fadeOutColor="#000"
        ariaLabel="Technology partners"
      />
    </div>
          <div style={{ height: '80px', position: 'relative', overflow: 'hidden'}}>
      <LogoLoop
        logos={imageLogos}
        speed={120}
        direction="right"
        logoHeight={48}
        gap={40}
        pauseOnHover
        scaleOnHover
        fadeOut
        fadeOutColor="#000"
        ariaLabel="Technology partners"
      />
    </div>
        </div>
    );
};

export default Trusted;