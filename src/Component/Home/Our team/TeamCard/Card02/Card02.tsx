import React from 'react';
import "./css/style.css"
import { TiSocialFacebook } from 'react-icons/ti';
import { FaLinkedinIn, FaTwitter } from 'react-icons/fa';
import { AiFillInstagram } from 'react-icons/ai';
import { TeamMember } from '@/types/members';
const Card02 = ({ data }: { data: TeamMember }) => {
    return (
        <div className='cards'>
      <div className="imgBx">
        <img src={data.img} alt={data.name} />
      </div>
      <div className="content">
        <div className="details">
          <h2>{data.name} <br /> <span>{data.position}</span></h2>
          <ul className='social_icons'>
            {data.social.map((item, index) => (
              <li key={index}>
                <a href={item.url} target="_blank" rel="noopener noreferrer">
                  <item.icon />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
    );
};

export default Card02;