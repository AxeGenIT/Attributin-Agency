"use client";
import LaserFlow from "@/components/LaserFlow";
import { useRef } from "react";

const Banner = () => {
  // ✅ Type the ref as an HTMLImageElement
  const revealImgRef = useRef<HTMLImageElement | null>(null);

  return (
    <div>
      <div className="container relative h-[850px] flex items-center justify-between">
        <div className="content absolute top-12 text-white z-99 space-y-5">
          <h1 className="text-white font-bold text-6xl">
            Built to Scale.<br /> Optimized for Growth.
          </h1>
          <p className="text-base leading-6 max-w-3/6">
            Attribution Booster helps you scale smarter with full-stack web
            development, precision analytics, performance-driven ads, and
            conversion-first design.
          </p>
          <div className="py-2 px-5 bg-white rounded-full w-[130px]">
            <span className="text-black">Get Start</span>
          </div>
        </div>

        <div className="absolute top-0">
          <div
            style={{
              height: "800px",
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
              horizontalBeamOffset={0.1}
              verticalBeamOffset={0.0}
              color="#3cd0d3"
            />

            <div
              style={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translateX(-50%)",
                width: "60%",
                height: "50%",
                backgroundColor: "#060010",
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
              <div className="rounded-3xl w-full h-full">
                <div className="aspect-video h-full w-full flex items-center justify-center z-30">
                  <iframe
                    width="560"
                    height="315"
                    src="https://www.youtube.com/embed/9RSUQk1ITYI?si=dLPYosTUXIjICDN2"
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                    className="w-full h-full rounded-3xl z-30"
                  ></iframe>
                </div>
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
