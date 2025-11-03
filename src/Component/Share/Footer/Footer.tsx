import { ContactType, SocialLink } from '@/types/contactType';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import Contact from './component/Contact';
import SocialIcon from './component/SocialIcon';
import { Star } from 'lucide-react';

const Footer = () => {
    const pages:string[] = ["About Us",
"Our Team",
"Blogs",
"Career",
"Services",
"Contact Us",
"Privacy Policy"]
const social:SocialLink[] = [
                { icon: "/icons/link.png", link: "https://www.linkedin.com/company/attribution-booster/about/", alt: "LinkedIn" },
                { icon: "/icons/fb.png", link: "https://www.facebook.com/attributioinbooster", alt: "Facebook" },
                { icon: "/icons/youtube.png", link: "https://www.youtube.com/@attributionbooster", alt: "YouTube" },
                { icon: "/icons/p.png", link: "https://www.pinterest.com/attributionbooster", alt: "Pinterest" },
                { icon: "/icons/ins.png", link: "https://www.instagram.com/attribution_booster/", alt: "Instagram" }
              ]
const services:string[] = [
  "Full Stack Web Development",
  "AI Automation & AI Agent Development",
  "CMS Web Development",
  "App Development",
  "UI/UX Design (Web and Mobile App)",
  "Analytics and Conversion Tracking",
  "Google Ads",
  "SEO",
  "Graphics Design",
  "Video Editing",
  "Cyber Security",
  "Social Media Marketing"
]

const contacts:ContactType[] = [
  { image: "/c1.png", text: "+8801812526073", color: "text-blue-400", href: "tel:+8801812526073" },
  { image: "/c2.png", text: "info@attributionbooster.com", color: "text-blue-400", href: "mailto:info@attributionbooster.com" },
  { image: "/c3.png", text: "Address: Raleigh 227 Fayetteville", color: "text-blue-400" }
];
    return (
        <div className='w-full px-4'>
            <div className='container px-4 md:px-4 lg:px-1 xl:px-0 py-6'>
                <div className='flex justify-between text-white flex-wrap gap-5 md:gap-0'>
                    <div>
                        <div className='max-w-[300px]'>
                            <Image className='hover:scale-[1.05] duration-300 mb-3' src='/logo.png' alt='attribution Booster' width={188} height={48}/>
                            <p className='text-white text-sm mb-5'>Welcome to our Best Digital Analytics Agency, where innovation meets results! Our team specializes in crafting bespoke advertising strategies tailored</p>
                            <div className='space-y-3 mb-5'>
                                {
                                    contacts.map((contact,index) => {
                                        const { image, text, color, href }= contact;
                                        return(
                                            <Contact key={index} image={image} text={text} color={color} href={href}/>
                                        )
                                    }
                                
                                )}
                            </div>
                            <div>
                             <h1 className='mb-3'>Social Media</h1>
                             <div className='flex gap-2 '>
                                {
                                social.map((socialLink,index)=>{
                                    const {icon,link,alt} = socialLink
                                    return(
                                        <SocialIcon key={index} icon={icon} link={link} alt={alt}/>
                                    )
                                })
                             }
                             </div>
                            </div>
                        </div>
                    </div>
                    <div className='max-w-[300px]'>
                        <h1 className='text-white font-semibold text-lg mb-6'>Services</h1>
                        <ul className='space-y-2'>
                            {
                                services.map((service,index)=>
                                
                                <li key={index} className='text-gray-300 text-sm hover:text-cyan-400 transition-colors duration-300'><a href="">{service}</a></li>
                                )

                            }
                        </ul>
                    </div>
                    <div className='max-w-[300px]'>
                        <h1 className='text-white font-semibold text-lg mb-6'>Company</h1>
                        <ul className='space-y-2'>
                            {
                                pages.map((page,index)=><li key={index} className='text-gray-300 text-sm hover:text-cyan-400 transition-colors duration-300'><a href="">{page}</a></li>)
                            }
                        </ul>
                    </div>
                    <div></div>
                </div>

                <div className='flex justify-between flex-wrap mt-5 gap-5'>
                    <a
            className="border-l-4 border-cyan-400 rounded-lg px-5"
             
            href={'https://www.google.com/partners/agency?id=6137804524'}
          >
            <div className="flex items-center space-x-2 rounded-lg w-fit mt-3 cursor-pointer">
              <div className="text-sm font-bold">
                <span className="text-blue-500">G</span>
                <span className="text-red-500">o</span>
                <span className="text-yellow-500">o</span>
                <span className="text-blue-500">g</span>
                <span className="text-green-500">l</span>
                <span className="text-red-500">e</span>
              </div>
            </div>
            <div className="text-white text-2xl font-medium mt-1">Partner</div>
          </a>
                    <div
            className="bg-gray-800/40 rounded-xl p-4 border border-gray-600/50 relative overflow-hidden"
            
          >
            {/* Shine Border Effect */}
            <div className="shine-border absolute inset-0 rounded-xl pointer-events-none"></div>

            <div className="flex justify-between items-start relative z-10">
              {/* Left side - Clutch logo and rating */}
              <div className="flex flex-col">
                <div className="flex items-center space-x-2 mb-3">
                  <div className="w-8 h-8 bg-gray-600 rounded-full flex items-center justify-center">
                    <span className="text-white text-sm font-bold">C</span>
                  </div>
                  <div className="flex text-cyan-400 text-sm">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star key={star} className="w-3 h-3 fill-current" />
                    ))}
                  </div>
                </div>
                <p className="text-gray-300 text-sm font-medium">50 review</p>
              </div>

              {/* Right side - Glassdoor */}
              <div className="flex flex-col items-end">
                <span className="text-green-400 font-bold text-lg mb-2">glassdoor</span>
                <div className="flex items-center space-x-1">
                  <span className="text-green-400 font-bold text-lg">4.9</span>
                  <div className="flex text-green-400">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star key={star} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
                </div>
                <div> 
                            <div
          className="border-t border-gray-700 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center"
           
        >
          <p
            className="text-gray-400 text-sm"
            
          >
            © {new Date().getFullYear()} Attribution Booster | All Rights Reserved | Serving clients since 2017
          </p>

          <div
            className="flex space-x-6 mt-5 md:mt-0"
            
          >
            {["Privacy Policy", "Cookies Policy", "Terms & Agreement"].map((policy, index) => (
              <Link
                key={policy}
                href={index === 0 ? "/privacy" : index === 1 ? "/" : "/"}
                className="text-gray-400 text-sm hover:text-cyan-400 hover:scale-105 transition-all duration-300"
             
              >
                {policy}
              </Link>
            ))}
          </div>
        </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;