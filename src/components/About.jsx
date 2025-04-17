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
     As a dedicated and driven student at Northeastern University, I have 
     cultivated a strong foundation in computer science through both academic 
     coursework and hands-on experience. I take pride in being a fast learner who 
     thrives in dynamic, team-oriented environments. My technical expertise spans a wide range of programming languages, including Java, Python, and JavaScript, and I have practical experience working with modern frameworks such as React, Node.js, and Three.js.

    Throughout my academic journey, I have consistently sought opportunities to apply my skills in real-world scenarios, contributing to collaborative projects that require creative problem-solving and effective communication. Whether it’s building interactive web applications or working on backend systems, I approach each challenge with curiosity and a commitment to excellence.

    I am enthusiastic about connecting with individuals who share a passion for technology and innovation, and I am always open to engaging in meaningful conversations or potential collaborations. If you’re interested in discussing ideas, projects, or opportunities, I’d love to connect.

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

