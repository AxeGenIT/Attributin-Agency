 
interface TitleProps {
  title: string;
  gradient: string;
  description?: string;
}
 

const Title = ({title,gradient,description}:TitleProps) => {
    return (
        <div className="text-center flex flex-col gap-5 items-center px-4 md:px-2 lg:px-0 ">
            <h1 className="text-white text-center md:text-5xl text-3xl lg:text-5xl section-title italic">{title}<span className="text-transparent bg-clip-text bg-linear-to-l from-cyan-400 to-blue-500"> {gradient}</span></h1>
            <p className="text-[#e4e3e3] font-[var(--font-poppins)] lg:w-xl text-center md:text-[14px] text-sm">{description}</p>
        </div>
    );
};

export default Title;