"use client";
import { teamMembers } from "@/data/members";
import Title from "@/utils/Title";
import Card02 from "./TeamCard/Card02/Card02";
import Card01 from "./TeamCard/Card01/Card01";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
 

const TeamSection = () => {
  return (
    <section>
      <div className="container py-10">
        <div>
            <Title title="Our" gradient="Team" description="A passionate and skilled group of developers, designers, and innovators working together to create impactful digital experiences."/>
        </div>
        <div className="mt-8">
<Swiper
        modules={[Autoplay]}
        spaceBetween={20}
        slidesPerView={1}
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        breakpoints={{
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        speed={800}
        centeredSlides={true}
        grabCursor={true}
         
      >
        {teamMembers.map((data,index) => (
          <SwiperSlide
            key={index}
            className="w-full h-full"
            
          >
            <Card01 data={data}/>
          </SwiperSlide>
        ))}
      </Swiper>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
