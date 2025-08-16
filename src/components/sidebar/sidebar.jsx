import React from 'react'
import { motion } from 'framer-motion'
import "./sidebar.scss"
import Links from './links/links'
import Tooglebutton from './tooglebutton/tooglebutton'
import { clipPath } from 'framer-motion/client'
import { useState } from 'react'

function sidebar() {

    const [open, setOpen] = useState(false)

    const variants = {
        open:{
            clipPath:"circle(100% at 50% 50%) ",
            transition:{
                type:"spring",
                stiffness:20,
            },
        },
        closed:{
            clipPath:"circle(30px at 50px 50px)",
            transition:{
                delay:0.1,
                type:"spring",
                stiffness: 400,
                damping: 40,
            },
        }

    }
    
  return (
    <motion.div className='sidebar' animate={open ? "open" : "closed"}>
        <motion.div className="bg" variants={variants}>
            <Links setOpen={setOpen}/>
        </motion.div>
        <Tooglebutton setOpen={setOpen} variants={variants}/>
    </motion.div>
  )
}

export default sidebar