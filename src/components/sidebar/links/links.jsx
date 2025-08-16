import { motion, scale, stagger } from "framer-motion";

import React from "react";

const variants={
open:{
    transition:{
        staggerChildren : 0.1,
    },
},
closed:{
    transition:{
        staggerChildren: 0.05,
        staggerDirection: -1,
    },
},
};

const itemvariants={
open:{
    y:0,
    opacity:1,
},
closed:{
    y:50,
    opacity:0,
}
}

function links({setOpen}) {

const items = ["Homepage" , "Experience" , "Projects" , "Contact"];
  return (
    <motion.div className="links" variants={variants} >
      {items.map((item)=>(
         <motion.a href={`#${item}`} key={item} variants={itemvariants} whileHover={{scale:1.2}} whileTap={{scale:0.8}} onClick={()=>setOpen(prev=>!prev)}>{item}</motion.a>
      ))}
    </motion.div>
  );
}

export default links;
