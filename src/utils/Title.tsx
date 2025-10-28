 
interface TitleProps {
  title: string;
  gradient: string;
  description?: string;
}
 

const Title = ({title,gradient,description}:TitleProps) => {
    return (
        <div className="text-center flex flex-col gap-5 items-center">
            <h1 className="text-white text-center text-7xl font-semibold ">{title}<span className="text-transparent bg-clip-text bg-linear-to-l from-cyan-400 to-blue-500"> {gradient}</span></h1>
            <p className="text-[#e4e3e3] w-2xl text-center">{description}</p>
        </div>
    );
};

export default Title;