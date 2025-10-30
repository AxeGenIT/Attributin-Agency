import {
  FaLinkedin,
  FaGithub,
  FaTwitter,
  FaFacebook,
  FaGlobe,
} from "react-icons/fa";
import type { IconType } from "react-icons";
import { TeamMember } from "@/types/members";
 
 
export const teamMembers: TeamMember[] = [
  {
    name: "Arif Hossain Aslam",
    position: "Full Stack Developer",
    img: "/member.jpg",
    social: [
      { platform: "LinkedIn", icon: FaLinkedin, url: "https://linkedin.com/in/arifaslam" },
      { platform: "GitHub", icon: FaGithub, url: "https://github.com/arifaslam" },
      { platform: "Portfolio", icon: FaGlobe, url: "https://arifaslam.dev" },
    ],
  },
  {
    name: "Sarah Johnson",
    position: "UI/UX Designer",
    img: '/member.jpg',
    social: [
      { platform: "LinkedIn", icon: FaLinkedin, url: "https://linkedin.com/in/sarahj" },
      { platform: "Twitter", icon: FaTwitter, url: "https://twitter.com/sarahux" },
      { platform: "Portfolio", icon: FaGlobe, url: "https://sarahjohnson.design" },
    ],
  },
  {
    name: "Mohammad Ali",
    position: "Backend Engineer",
    img: "/member.jpg",
    social: [
      { platform: "LinkedIn", icon: FaLinkedin, url: "https://linkedin.com/in/ali-backend" },
      { platform: "GitHub", icon: FaGithub, url: "https://github.com/mali" },
       { platform: "Portfolio", icon: FaGlobe, url: "https://sarahjohnson.design" },
    ],
  },
  {
    name: "Emily Chen",
    position: "MERN STACK",
    img: "/member.jpg",
    social: [
      { platform: "LinkedIn", icon: FaLinkedin, url: "https://linkedin.com/in/emchen" },
      { platform: "GitHub", icon: FaGithub, url: "https://github.com/emilyc" },
      { platform: "Facebook", icon: FaFacebook, url: "https://facebook.com/emilyc" },
    ],
  },
  {
    name: "Daniel Kofi",
    position: "DevOps Engineer",
    img: "/member.jpg",
    social: [
      { platform: "LinkedIn", icon: FaLinkedin, url: "https://linkedin.com/in/kofi-devops" },
      { platform: "GitHub", icon: FaGithub, url: "https://github.com/kofi-dev" },
      { platform: "Portfolio", icon: FaGlobe, url: "https://danielkofi.dev" },
    ],
  },
  {
    name: "Natalia Ruiz",
    position: "Product Manager",
    img: "/member.jpg",
    social: [
      { platform: "LinkedIn", icon: FaLinkedin, url: "https://linkedin.com/in/natalia-pm" },
      { platform: "Twitter", icon: FaTwitter, url: "https://twitter.com/nruiz_pm" },
       { platform: "Portfolio", icon: FaGlobe, url: "https://sarahjohnson.design" },
    ],
  },
];
