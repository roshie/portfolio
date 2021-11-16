import React from "react" 
import Menu from './Menu' 
import { motion } from "framer-motion";
import AOS from 'aos';
import 'aos/dist/aos.css';
 
export default function Projects () { 
    
    AOS.init({
        duration : 1500
    });

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
                            <p className="about-content">Here are some of the projects I've worked.</p> 
                        </div>
                    </motion.div>
                </motion.div>
                <div className="row portfolio-row"> 
                    <div className="col-12 col-md-5 m-3 p-0">
                        <PortfolioItem
                            title="stretch inc." 
                            type="left" 
                            image="stretch.gif"
                            description="A slot booking application built for a fitness company. Built logic to check slot availability, 
                            to book a slot, to schedule timings for the day and other APIs. Also developed few pages for the frontend."
                        >
                            <span>PHP</span> <span>Python</span> <span>Flask</span> <span>MySQL</span> <span>Firebase</span>
                        </PortfolioItem>
                    </div> 
                    <div className="col-12 col-md-5 m-3 p-0">
                        <PortfolioItem
                            title="Gravity Album Viewer" 
                            type="right" 
                            image="album.gif"
                            description="An Online Album Viewer built for a Photo Studio. Written UI and APIs using React and Express."
                        >
                            <span>ReactJS</span> <span>ExpressJS</span> <span>Firestore</span> <span>Drive API</span>
                        </PortfolioItem>
                    </div>
                </div>
                <div className="row portfolio-row"> 
                    <div className="col-12 col-md-5 m-3 p-0">
                        <PortfolioItem
                            title="xStack - Leave Management" 
                            type="left" 
                            description="A module developed as a part of an Enterprise Resource Planning. 
                            Built for tracking attendance, requesting and granting leave and on-duty."
                        >
                            <span>Bootstrap</span> <span>PHP</span> <span>MySQL</span> <span>javascript</span>
                        </PortfolioItem>
                    </div> 
                    <div className="col-12 col-md-5 m-3 p-0">
                        <PortfolioItem
                            title="Syndeo" 
                            type="right" 
                            description="A portal for connecting mentors and mentees. Developed for the purpose of a mentorship programme."
                        >
                            <span>PHP</span> <span>FLASK</span> <span>Firebase</span> <span>MySQL</span> <span>Python</span>
                        </PortfolioItem>
                    </div>
                </div> 
                <div className="row portfolio-row">
                    <div className="col-12 col-md-5 m-3 p-0">
                        <PortfolioItem
                            title="Zue Technologies" 
                            type="left" 
                            description="A minimal portfolio page for an organization."
                        >
                            <span>ReactJS</span> <span>Bootstrap</span> <span>Framer-motion</span> 
                        </PortfolioItem>
                    </div>
                    <div className="col-12 col-md-5 m-3 p-0">
                        <PortfolioItem
                            title="BotHub" 
                            type="right" 
                            description="A Web-based shopping site."
                        >
                            <span>React</span> <span>FastAPI</span> <span>Razorpay</span> <span>React-Bootstrap</span> 
                        </PortfolioItem>
                    </div>
                </div>
                <div className="row portfolio-row">
                    <div className="col-12 col-md-5 m-3 p-0">
                        <PortfolioItem
                            title="Prime-DocManager" 
                            type="left" 
                            description="A simple application to reduce time on Paperwork."
                        >
                            <span>Python</span> <span>Flask</span> <span>Jinja2</span> <span>SQLAlchemy</span> <span>Mailmerge</span>
                        </PortfolioItem>
                    </div>
                </div>
            </div> 
        </Menu>
    )
  
} 

function PortfolioItem(props) {
    return (
        <div className="portfolio-item"
            data-aos={(props.type === "right") ? "fade-left" : "fade-right"}> 
            {props.image && 
                <div className="gif-holder">
                    <img src={props.image} alt="" className="gif" />
                </div>
            }
            <div className="portfolio-content text-light font-mono">
                <h3 className="portfolio-title"> {props.title} </h3>
                <h6> {props.description} </h6>
                <div className="skills">
                    {props.children}
                </div>
            </div>
        </div>
    );
}
