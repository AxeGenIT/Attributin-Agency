"use client";
import { teamMembers } from "@/data/members";
import Title from "@/utils/Title";
import Card02 from "./TeamCard/Card02/Card02";
import Card01 from "./TeamCard/Card01/Card01";
import Swiper from "swiper";

const TeamSection = () => {
  return (
    <section>
      <div className="container py-10">
        <div>
            <Title title="Our" gradient="Team" description="A passionate and skilled group of developers, designers, and innovators working together to create impactful digital experiences."/>
        </div>
        <div></div>
      </div>
    </section>
  );
};

export default TeamSection;
