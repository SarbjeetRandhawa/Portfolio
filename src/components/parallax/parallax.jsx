import React from "react";
import { useRef } from "react";
import "./parallax.scss";
import { motion , useScroll, useTransform } from "framer-motion";

function parallax({ type }) {

    const ref = useRef()

    const {scrollYProgress} = useScroll({
        target:ref,
        offset:["start end" , "end start"]
    })

    const ytext = useTransform(scrollYProgress, [0, 0.5, 1], ["100%", "0%", "100%"]);
const Ybg   = useTransform(scrollYProgress, [0, 0.5, 1], ["50%", "0%", "100%"]);

  return (
    <div
      className="parallax"
      ref={ref}
      style={{
        background:
          type === "Experience"
            ? "linear-gradient(180deg , #111132 , #0c0c1d)"
            : "linear-gradient(180deg , #111132 , #505064)",
      }}
    >
      <motion.h1 style={{y:ytext }}>{type === "Experience" ? "Experience" : "Projects"}</motion.h1>
      <motion.div className="stars" style={{x:Ybg}}></motion.div>
      <motion.div style={{y:Ybg ,backgroundImage: `url(${type==="Experience" ? "planets.png" : "sun.png"})` }} className="planets"></motion.div>
      <motion.div className="mountains"></motion.div>
    </div>
  );
}

export default parallax;
