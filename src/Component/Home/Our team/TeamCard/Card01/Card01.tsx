import { TeamMember } from '@/types/members';
import './css/style.css'
import Image from 'next/image';
const Card01 = ({data}: { data: TeamMember }) => {
    return (
 <div className="box">
      <div className="imgBx">
        <Image
          src={data.img}
          alt={data.name}
          width={280}
          height={380}
          className="w-full h-full object-cover img"
        />
      </div>
      <div className="glass ">
        <h3>
          {data.name} <br />
          <span>{data.position}</span>
        </h3>
        <ul>
          {data.social.map((item, index) => (
            <li key={index} className='text-white'>
              <a
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                style={{ ['--i' as any]: index + 1 }} // for CSS var animation
              >
                <item.icon />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
    );
};

export default Card01;
