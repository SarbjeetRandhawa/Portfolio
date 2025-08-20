import React from "react";
import "./hero.scss";
import { stagger, motion } from "framer-motion";

const textVariants = {
  initial: {
    opacity: 0,
    x: -500,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
  scrollbtn: {
    opacity: 0,
    y: 10,
    transition: {
      duration: 2,
      repeat: Infinity,
    },
  },
};
const sliderVariants = {
  initial: {
    x: 0,
  },
  animate: {
    x: "-220%",

    transition: {
      duration: 20,
      repeatType: "mirror",
      repeat: Infinity,
    },
  },
};

function hero() {
  return (
    <div className="hero">
      
      <div className="wrapper">
        <motion.div
          className="text"
          variants={textVariants}
          initial="initial"
          animate="animate"
        >
          <motion.h2 variants={textVariants}>Sarbjeet Singh</motion.h2>
          <motion.h1 variants={textVariants}>
            Web Developer and UI designer
          </motion.h1>
          <motion.div variants={textVariants} className="btns">
            <motion.button variants={textVariants}>
              See the Lastest Works
            </motion.button>
            <motion.button variants={textVariants} id="btn2">
              Contact Me
            </motion.button>
            
          </motion.div>
          <motion.img
            variants={textVariants}
            src="./scroll.png"
            alt=""
            animate="scrollbtn"
          />
        </motion.div>
      </div>
      <motion.div
        className="slidingtext"
        variants={sliderVariants}
        initial="initial"
        animate="animate"
      >
        Web developer Designer Data Analyst Programmer
      </motion.div>
      <div className="imgcontainer">
        <img src="./hero.png" alt="" />
      </div>
    </div>
  );
}

export default hero;
