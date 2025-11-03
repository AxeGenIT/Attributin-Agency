'use client'
import { SparklesCore } from '@/components/ui/sparkles';
import Title from '@/utils/Title';
import Image from 'next/image';
import React from 'react';
interface Logo {
  id: number;
  name: string;
  path: string;
}
const TrustedLogo = () => {
const logos: Logo[] = [
  { id: 1, name: "Certified Partner", path: "/brands/certified_partner.png" },
  { id: 2, name: "Cookie Partner", path: "/brands/cookie_partner.png" },
  { id: 3, name: "Level Partner", path: "/brands/level_partner.png" },
  { id: 4, name: "Meta Partner", path: "/brands/meta_partner.png" },
  { id: 5, name: "Shopify Partner", path: "/brands/shopify_partner.png" },
  { id: 6, name: "Stape Partner", path: "/brands/stape_partner.png" },
  { id: 7, name: "Wix Partner", path: "/brands/wix_partner.png" },
  { id: 8, name: "DMA Partner", path: "/brands/dma_client.webp" },
];
    return (
         <div className="h-screen w-screen overflow-hidden bg-[#121212]">
      <div className="mx-auto mt-32 w-screen max-w-2xl">
        <Title title='Our trusted' gradient='Partner' description='We’re proud to collaborate with industry-leading partners who help us deliver exceptional solutions and drive success for our clients.'/>
        <div className="mt-14 grid grid-cols-4 items-center justify-center place-content-center">
          {
            logos.map(logo=><Image key={logo.id} src={logo.path} alt={logo.name} height={30} width={150}/>)
          }
        </div>
      </div>
      <div className="relative -mt-32 h-96 w-screen overflow-hidden [mask-image:radial-gradient(50%_50%,white,transparent)] before:absolute before:inset-0 before:bg-[radial-gradient(circle_at_bottom_center,#e60a64,transparent_70%)] before:opacity-40 after:absolute after:top-1/2 after:-left-1/2 after:aspect-[1/0.7] after:w-[200%] after:rounded-[100%] after:border-t after:border-[#c5769066] after:bg-zinc-900">
        <SparklesCore
          id="tsparticles"
          background="transparent"
          particleDensity={300}
          className="absolute inset-x-0 bottom-0 h-full w-full [mask-image:radial-gradient(50%_50%,white,transparent_85%)]"
        />
      </div>
    </div>
    );
};

export default TrustedLogo;