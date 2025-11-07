 
import { testimonialType } from '@/types/testimonialType';
import Image from 'next/image';
 

const TestimonialCard = ({name,company,avatar,comment}:testimonialType) => {
    return (
 <div className="mx-4 inline-flex w-72 flex-col items-start  rounded-2xl bg-gray-100 p-4 border dark:bg-neutral-900 relative overflow-hidden">
    <div className="flex items-center gap-3">
      <Image src={avatar} alt={name} width={48} height={48} className="h-12  w-12 rounded-full object-cover"/>
      <div>
        <h4 className="text-sm font-semibold text-gray-900 dark:text-white">{name}</h4>
        <p className="text-xs text-gray-500 dark:text-gray-400">{company}</p>
      </div>
    </div>
    <div>
      <p className="mt-3 text-sm text-[#000000ef] text-wrap">{comment}</p>
    </div>
    
   </div>
    );
};

export default TestimonialCard;