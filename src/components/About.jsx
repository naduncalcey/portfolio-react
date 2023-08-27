import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import PropTypes from "prop-types";

import { styles } from "../styles";
import { services } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

import { SectionWrapper } from "../hoc";

const ServiceCard = ({index, title, icon}) => {
  return (
    <Tilt className="xs:w-[250px] w-full">
      <motion.div
        variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
        className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
      >
        <div
          options={{max:45,scale:1,speed:450}}
          className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
        >
          <img src={icon} alt={title}
            className="w-16 h-16 object-contain"
          />
          <h3 className="text-white text-[20px] font-bold text-center">{title}</h3>
        </div>
      </motion.div>
    </Tilt>
  )
}

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview</h2>
      </motion.div>

      <motion.p 
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        Nadun Nissanka is a dedicated UI Engineer at Calcey, with a creative
        flair and a passion for adopting new technologies. With over 1 year of
        experience, Nadun excels in crafting impactful React-based applications,
        transforming UI designs into responsive code. Adept in CSS, React.js,
        HTML5, and JavaScript, Nadun is also an avid learner, currently
        exploring the Svelte JavaScript framework for upcoming projects.
      </motion.p>
      <div className="mt-20 flex flex-wrap gap-10 justify-center sm:justify-start">
        {services.map((service, index) =>(
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

// Define the prop types for the ServiceCard component
ServiceCard.propTypes = {
  index: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
};

export default SectionWrapper(About, "about");
