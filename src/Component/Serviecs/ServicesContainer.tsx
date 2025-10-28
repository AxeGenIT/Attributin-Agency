 
import Services from'../../data/service.json'
import ServiceCard from './ServiceCard';

const ServicesContainer = () => {
    return (
        <div className='container mt-8'>
            <div className='grid grid-cols-1 xl:grid-cols-4 justify-center  lg:grid-cols-3 md:grid-cols-2 gap-5 px-4 lg:py-0 mt-12'>
                            {
                Services.services.map((service,index)=>{
                    const{title,details,icon} = service
                    return(
                         <ServiceCard key={index} title={title} details={details} icon={icon} />
                    )
                })
            }
            </div>
        </div>
    );
};

export default ServicesContainer;