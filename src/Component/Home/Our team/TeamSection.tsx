'use client'
import { teamMembers } from "@/data/members";
import Title from "@/utils/Title";
import Card02 from "./TeamCard/Card02/Card02";
import Card01 from "./TeamCard/Card01/Card01";

 
const TeamSection = () => {
 

 

    return (
        <div>
            <Title title="Our" gradient="Team" description="A passionate and skilled group of developers, designers, and innovators working together to create impactful digital experiences."/>
            <div className="container">
                 <div className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-4 py-14 px-2 justify-items-center items-center ">
          {teamMembers.map((member,index)=> <Card02 key={index} data={member}/>)}
        </div>
         <div className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-4 py-14 px-2 justify-items-center items-center ">
          {teamMembers.map((member,index)=> <Card01 key={index} data={member}/>)}
        </div>
         
            </div>
        </div>
    );
};

export default TeamSection;