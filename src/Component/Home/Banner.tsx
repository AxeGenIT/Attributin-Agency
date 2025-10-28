'use client'
import LaserFlow from "@/components/LaserFlow";
 
import { useRef } from 'react';

const Banner = () => {
    const revealImgRef = useRef(null);
    return (
        <div>
            <div className="container relative h-[800px]">
                <div className="content text-white ">
                    <h1>Built to Scale.
Optimized for Growth.</h1>
<p>Attribution Booster helps you scale smarter with full-stack web development, precision analytics, performance-driven ads, and conversion-first design.</p>
<div className="absolute top-0">
    <LaserFlow/>
</div>
                </div>
            </div>
        </div>
    );
};

export default Banner;