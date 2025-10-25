'use client'
import LaserFlow from "@/components/LaserFlow";
import { useRef } from 'react';

const Banner = () => {
    const revealImgRef = useRef(null);
    return (
        <div>
            <div className="container">
 <div style={{ height: '500px', position: 'relative', overflow: 'hidden' }}>
  <LaserFlow />
</div>
 
            </div>
        </div>
    );
};

export default Banner;