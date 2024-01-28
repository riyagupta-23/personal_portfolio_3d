import React from 'react'
import { Tilt } from 'react-tilt'
import { motion } from 'framer-motion';
import { styles } from '../styles';
import { services } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';
import { SectionWrapper } from '../hoc';

// const ServiceCard = ({ index, title, icon }) => {
//   return (
//     <Tilt className="xs:w-[150px] w-full">
//       <motion.div variants={fadeIn("right", "spring", 0.6 * index, 0.75)}
//       className="w-full maroon-gradient p-[1px] rounded-[30px] shadow-card"
//       >
//       <div 
//       options={{
//         max: 45,
//         scale: 1, 
//         speed: 450
//       }}
//       className="mulberry-gradient rounded-[30px] py-5 px-12 min-h-[280px] flex justify-evenly 
//       items-center flex-col"
//       >
//         <img src={icon} alt={title} className="w-16 h-16 object-contain"/>
//         <h3 className="text-white text-[20px] font-bold text-center">{title}</h3>

//       </div>
//       </motion.div>
//     </Tilt>
//   )
// }

const About = () => {
  return (
    <>
    <motion.div variants={textVariant()}>
      <p className={styles.sectionSubText}>Introduction</p>
      <h2 className={styles.sectionHeadText}>Overview.</h2>
    </motion.div>

    <motion.p variants={fadeIn("", "", 0.1, 1)}
    className="mt-4 text-secondary text-[17px] max-w-3xl
    leading-[30px]">
     As a determined student at Northeastern University, 
      I pride myself on being a fast learner and an effective team player. My academic
      journey has equipped me with a robust skill set in various programming languages,
      including Java, Python, and JavaScript. Additionally, I have spent time learning
      and utilizing frameworks such as React, Node.js, and Three.js. 
      I am enthusiastic about leveraging my skills in collaborative environments
      and am always open to connecting with like-minded individuals. 
       Let's connect!

    </motion.p>

    {/* <div className="mt-20 flex flex-wrap gap-10">
      {services.map((service, index) => (
      <ServiceCard key={service.title} index={index} {...service}/>
      ))}


    </div> */}
    </>
  )
}

export default SectionWrapper(About, "about")

