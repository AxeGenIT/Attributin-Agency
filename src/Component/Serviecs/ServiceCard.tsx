import { Meteors } from '@/components/ui/meteors';
import Image from 'next/image';
import React from 'react';

const ServiceCard = ({title,details,icon}:{title :string,details:string,icon:string,}) => {
    return (
 <div className="">
      <div className="relative w-full h-full max-w-xl">
        <div className="absolute inset-0 h-full w-full scale-[0.80] transform rounded-lg bg-red-500 bg-gradient-to-r from-blue-500 to-teal-500 blur-md" />
        <div className="relative flex h-full flex-col items-center justify-between overflow-hidden rounded-2xl border border-gray-800 bg-gray-900 px-4 py-8 shadow-xl">
          <div className="mb-4 flex  items-center justify-center z-50">
            <Image src={icon} alt='title' width={64} height={64}/>
          </div>
 
          <h1 className="relative z-50 mb-4 text-xl text-center font-bold text-white">
            {title}
          </h1>
 
          <p className="relative z-50 mb-4 text-base text-center font-normal text-slate-500">
             {details}
          </p>
 
          <button className="rounded-lg border border-gray-500 px-4 py-1 text-gray-300">
            Explore
          </button>
 
          {/* Meaty part - Meteor effect */}
          <Meteors number={30} />
        </div>
      </div>
    </div>
    );
};

export default ServiceCard;