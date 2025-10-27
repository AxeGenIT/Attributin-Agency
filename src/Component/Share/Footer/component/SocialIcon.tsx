"use client";

const SocialIcon = ({
  icon,
  link,
  alt,
}: {
  icon: string;
  link: string;
  alt: string;
}) => {
  return (
    <div
      onClick={() => window.open(link, "_blank")}
      className={`w-8 h-8  rounded-full flex items-center  justify-center cursor-pointer`}
    >
      <img src={icon} alt={alt} className="object-contain" />
    </div>
  );
};

export default SocialIcon;
