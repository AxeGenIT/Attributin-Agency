 
interface TitleProps {
  title: string;
  gradient: string;
  description?: string;
}
 

const Title = ({title,gradient,description}:TitleProps) => {
    return (
        <div className="text-center flex flex-col gap-5 items-center px-4 md:px-2 lg:px-0 ">
            <h1 className="text-white text-center md:text-5xl text-3xl lg:text-7xl font-semibold ">{title}<span className="text-transparent bg-clip-text bg-linear-to-l from-cyan-400 to-blue-500"> {gradient}</span></h1>
            <p className="text-[#e4e3e3] lg:w-2xl text-center text-base">{description}</p>
        </div>
    );
};

export default Title;