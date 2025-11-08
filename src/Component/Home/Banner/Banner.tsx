"use client";
import LaserFlow from "@/components/LaserFlow";
import { MoveRight } from "lucide-react";
import { useRef } from "react";

const Banner = () => {
  // ✅ Type the ref as an HTMLImageElement
  const revealImgRef = useRef<HTMLImageElement | null>(null);

  return (
    <div>
      <div className="container relative h-[1200px] flex   justify-between px-4">
        <div className="content  text-white z-40 space-y-5 mt-28">
          <h1 className="text-white font-bold text-6xl ">
            Built to Scale.<br /> Optimized for Growth.
          </h1>
          <p className="text-base leading-6 max-w-3/6">
            Attribution Booster helps you scale smarter with full-stack web
            development, precision analytics, performance-driven ads, and
            conversion-first design.
          </p>
          <div className="py-2 px-5 bg-white rounded-full w-[150px] flex  items-center justify-center gap-2 transition-all duration-300 ease-in-out hover:shadow-[0_0_15px_#07F4FA] hover:-translate-y-1">
            <span className="text-black font-semibold text-lg  ">Get Start </span>
            <MoveRight  className="text-black  mt-1" />
          </div>
        </div>

       <div className="absolute top-0">
          <div
            style={{
              height: "1000px",
              position: "relative",
              overflow: "hidden",
              backgroundColor: "#06101A",
            }}
            onMouseMove={(e) => {
              const rect = e.currentTarget.getBoundingClientRect();
              const x = e.clientX - rect.left;
              const y = e.clientY - rect.top;
              const el = revealImgRef.current;
              if (el) {
                el.style.setProperty("--mx", `${x}px`);
                el.style.setProperty("--my", `${y + rect.height * 0.5}px`);
              }
            }}
            onMouseLeave={() => {
              const el = revealImgRef.current;
              if (el) {
                el.style.setProperty("--mx", "-9999px");
                el.style.setProperty("--my", "-9999px");
              }
            }}
          >
            <LaserFlow
              horizontalBeamOffset={0.13}
              verticalBeamOffset={0.0}
              horizontalSizing = {1.12}
  verticalSizing = {4.7}
  wispDensity = {1}
  wispSpeed = {15}
  wispIntensity = {5}
  flowSpeed = {0.35}
  flowStrength = {0.25}
  fogIntensity = {0.45}
  fogScale = {0.3}
  fogFallSpeed = {0.6}
  decay = {1.1}
  falloffStart = {1.2}
              color="#3cd0d3"
            />

            <div className="cardGolw"
              style={{
                position: "absolute",
                top: "50%",
                left: "60%",
                transform: "translateX(-50%)",
                width: "70%",
                height: "50%",
                background:"#fff",
                borderRadius: "20px",
                border: "2px solid #3cd0d3",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "white",
                fontSize: "2rem",
                zIndex: 6,
              }}
            >
              <div className="w-full h-full">
                <img className="w-full h-full" src="/HeroContent.jpg" alt="" />
              </div>
            </div>

            <img
              ref={revealImgRef}
              src="/laserBG.png"
              alt="Reveal effect"
              style={{
                position: "absolute",
                width: "100%",
                 
                top: "-50%",
                zIndex: 5,
                mixBlendMode: "lighten",
                opacity: 0.3,
                pointerEvents: "none",
                // custom CSS variables for mask position
                ["--mx" as any]: "-9999px",
                ["--my" as any]: "-9999px",
                WebkitMaskImage:
                  "radial-gradient(circle at var(--mx) var(--my), rgba(255,255,255,1) 0px, rgba(255,255,255,0.95) 60px, rgba(255,255,255,0.6) 120px, rgba(255,255,255,0.25) 180px, rgba(255,255,255,0) 240px)",
                maskImage:
                  "radial-gradient(circle at var(--mx) var(--my), rgba(255,255,255,1) 0px, rgba(255,255,255,0.95) 60px, rgba(255,255,255,0.6) 120px, rgba(255,255,255,0.25) 180px, rgba(255,255,255,0) 240px)",
                WebkitMaskRepeat: "no-repeat",
                maskRepeat: "no-repeat",
              }}
            />
          </div>
        </div> 
      </div>
    </div>
  );
};

export default Banner;
