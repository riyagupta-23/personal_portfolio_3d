import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import { motion } from "framer-motion";
import 'react-vertical-timeline-component/style.min.css';

import { styles } from '../styles';
import { experiences } from "../constants";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";


const EducationCard = ({ education }) => (
  <VerticalTimelineElement
  contentStyle={{ background: '#620436', color: '#fff'}}
  contentArrowStyle={{ borderRight: '7px solid #620436'}}
  date={education.date} 
  iconStyle={{ background: education.iconBg }}
  icon= {
    <div className="flex justify-center items-center w-full h-full">
      <img 
      src={education.icon}
      alt={education.company_name}
      className="w-[60%] h-[60%] object-contain"
      />
    </div>
  }
  >
   <div>
    <h3 className="text-white text-[24px] font-bold">{education.title}</h3>
    <p className="text-seconday text-[16px] font-semibold" style={{ margin: 0 }}>{education.company_name}</p>
   </div>

   <ul className="mt-5 list-disc ml-5 space-y-2">
    {education.points.map((point, index) => (
      <li
        key={`education-point-${index}`}
        className="text-white-100 text-[14px] pl-1 tracking-wider" 
        >
          {point}
      </li>
    ))}

   </ul>

  </VerticalTimelineElement>
)


const Education = () => {
  return (
    <>
    <motion.div variants={textVariant()}>
    <p className={styles.sectionSubText}>KNOWLEDGE</p>
      <h2 className={styles.sectionHeadText}>Education.</h2>

    </motion.div>

    <div className="mt-20 flex flex-col">
      <VerticalTimeline>
        {experiences.map((education, index) => (
          <EducationCard key={index} education={education}/>

        ))}
      </VerticalTimeline>

    </div>
    </>
    )
}

export default SectionWrapper(Education, "education")