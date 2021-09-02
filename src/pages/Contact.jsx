import React from "react" 
import Menu from './Menu' 
import { motion } from "framer-motion";
 
export default function Contact () {
    const easing = [0.6, -0.05, 0.1, 0.99 ];
    const fadeIn1 = {
        initial: {
            opacity: 0, 
            y: 20
        },
        animate: { 
            y: 0,
            opacity: 1,
            transition: {
                duration: 1.5,
                ease: easing,
            },
        },
    };
    return ( 
      <Menu>
        <div className="d-flex flex-column justify-content-center text-center p-5">   
            <motion.div exit="exit" initial="initial" animate="animate">
                <motion.div variants={fadeIn1}>
                    
                </motion.div>
            </motion.div>
        </div> 
      </Menu>
    )
  
}