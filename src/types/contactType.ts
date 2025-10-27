export interface ContactType {
  image: string;
  text: string;
  color: string;
  href?: string; // optional for flexibility
}
export interface SocialLink {
  icon: string;
  link: string;
  alt: string;
}