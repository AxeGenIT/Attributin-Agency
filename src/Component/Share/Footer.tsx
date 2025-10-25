import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Footer = () => {
    return (
        <div className='w-full'>
            <div className='container px-2 py-6'>
                <div>
                    <div>
                        <div>
                            <Image className='hover:scale-[1.05] duration-300' src='/logo.png' alt='attribution Booster' width={188} height={48}/>
                            <p className='text-white text-sm'>Welcome to our Best Digital Analytics Agency, where innovation meets results! Our team specializes in crafting bespoke advertising strategies tailored</p>
                            
                        </div>
                    </div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            </div>
        </div>
    );
};

export default Footer;