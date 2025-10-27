import React from 'react';

const Contact = ({
  image,
  text,
  href,
  color
}: {
  image: string;
  text: string;
  href?: string;
  color:string;
}) => {
    return (
        <div className='flex items-center space-x-3'>
            <img src={image} alt="icon" />
                    {
                      href ? (
                        <a href={href} className={`text-sm hover:underline transition-colors duration-300 text-white`}>{text}</a>
                      ) : (
                        <span className={`text-sm text-white`}>{text}</span>
                      )
                    }
        </div>
    );
};

export default Contact;