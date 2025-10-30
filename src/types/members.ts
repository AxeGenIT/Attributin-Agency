import { IconType } from "react-icons";

export interface SocialLink {
  platform: string;
  icon: IconType;
  url: string;
}

// Interface for a team member
export interface TeamMember {
  name: string;
  position: string;
  img: string;         
  social: SocialLink[];
}