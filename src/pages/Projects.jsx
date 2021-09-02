import React, { useEffect } from "react" 
import Menu from './Menu' 
import { motion } from "framer-motion";
import AOS from 'aos';
 
export default function Projects () { 
    useEffect(() => {
        AOS.init({
          duration : 1500
        });
      }, []); 

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
                    <div className="row text-light my-5 font-mono">
                        <h1 className="my-4">Projects</h1> 
                        <p className="about-content">Here are some of my projects I did so far...</p> 
                    </div>
                    </motion.div>
            </motion.div>
            <div className="row portfolio-row">
                <div className="col-12 col-md-5 portfolio-item mr-1">
                    <div className="gif-holder"></div>
                    <div className="portfolio-content text-light font-mono">
                        <h3> Gravity Album Viewer </h3>
                        <h6> An Online Album Viewer built for the customers of Gravity Studio.</h6>
                        <div className="skills">
                            <a>ReactJS</a> <a>ExpressJS</a> <a>Firestore</a> <a>Drive API</a>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-md-5 portfolio-item ml-1">
                    <div className="gif-holder"></div>
                    <div className="portfolio-content text-light font-mono">
                        <h3> Gravity Album Viewer </h3>
                        <h6> An Online Album Viewer built for the customers of Gravity Studio.</h6>
                        <div className="skills">
                            <a>ReactJS</a> <a>ExpressJS</a> <a>Firestore</a> <a>Drive API</a>
                        </div>
                    </div>
                </div>
            </div>
        </div> 
      </Menu>
    )
  
}