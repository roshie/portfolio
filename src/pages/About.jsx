import React from "react" 
import Menu from './Menu' 
import { motion } from "framer-motion";
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSchool, faUniversity, faCertificate } from '@fortawesome/free-solid-svg-icons'
 
export default function About () {
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
                        <h1 className="my-4">About</h1> 
                        <p className="about-content">I'm a Budding Engineer who's fueled by coffee. I'm currently pursuing my Bachelor of 
                            Technology in Loyola-ICAM College of Engineering and Technology. Being a Minimalist, 
                            I always keen on keeping up things simple, organised and well-planned. PS: I'm a daydreamer too.</p> 
                    </div>
                    <div className="row text-light mb-5">
                        <h3 className="font-mono mb-4"> Skills </h3> 
                        <div className="my-2 skills">
                            <a>HTML</a> <a>CSS</a> <a>Javascript</a> <a>Python</a> 
                            <a>Dart</a> <a>PHP</a> <a>C / C++</a> <a>Java</a> <a>TypeScript</a>
                        </div> 
                        <div className="my-2 skills">
                            <a>Bootstrap</a> <a>Material UI</a> <a>Jquery</a> <a>Flask</a> 
                            <a>Django</a> <a>FastAPI</a> <a>Flutter</a> <a>Android</a> 
                        </div> 
                        <div className="my-2 skills">
                            <a>ReactJS</a> <a>Angular</a> <a>NodeJS</a> <a>ExpressJS</a> <a>NextJS</a> 
                            <a>MySQL</a> <a>MongoDB</a> <a>Firestore</a> <a>PostgreSQL</a><a>SQLAlchemy</a> 
                        </div>
                        <div className="my-2 skills">
                            <a>Git</a> <a>GitHub</a> <a>Firebase</a> <a>Supabase</a><a>Postman</a><a>Wordpress</a> <a>Figma</a> 
                            <a>Adobe XD</a> <a>Photoshop</a> <a>Premiere Pro</a> <a>Illustrator</a> <a>Unity</a> 
                        </div> 
                    </div>
                    <div className="row text-light">
                        <h3 className="font-mono"> Education </h3> 
                        <div className="timeline text-start">
                            <VerticalTimeline>
                                <VerticalTimelineElement
                                    className="font-mono"
                                    contentStyle={{ background: '#131313', color: '#fff', border: 'none' }}
                                    contentArrowStyle={{ borderRight: '7px solid  white' }}
                                    date="2019 - 2023"
                                    iconStyle={{ background: '#131313', color: '#fff' }}
                                    icon={<FontAwesomeIcon icon={faUniversity} />}
                                >
                                    <h3 className="font-weight-bold my-3">Bachelor of Technology</h3>
                                    <h5 className="vertical-timeline-element-subtitle">Information Technology</h5>
                                    <p>
                                    Loyola-ICAM College of Engineering and Technology, Chennai
                                    </p>
                                </VerticalTimelineElement>
                                <VerticalTimelineElement
                                    className="font-mono"
                                    date="2011 - 2012"
                                    contentStyle={{ background: '#131313', color: '#fff' }}
                                    iconStyle={{ background: '#131313', color: '#fff'}}
                                    icon={<FontAwesomeIcon icon={faCertificate} />}
                                >
                                    <h3 className="font-weight-bold my-3">Junior Animator</h3>
                                    <p>
                                    A Square Animation Academy
                                    </p>
                                </VerticalTimelineElement>
                                <VerticalTimelineElement
                                    className="font-mono"
                                    date="2007 - 2019"
                                    contentStyle={{ background: '#131313', color: '#fff' }}
                                    iconStyle={{ background: '#131313', color: '#fff' }}
                                    icon={<FontAwesomeIcon icon={faSchool}/>}
                                >
                                    <h3 className="font-weight-bold my-3">Higher Secondary and SSLC</h3>
                                    <h5 className="vertical-timeline-element-subtitle">Math, Physics and Chemistry</h5>
                                    <p>
                                    Ebenezer Marcus Matriculation Higher Secondary School, Chennai.
                                    </p>
                                </VerticalTimelineElement>
                            </VerticalTimeline> 
                        </div>
                    </div>
                    <div className="row text-light">
                        <h3 className="font-mono"> Experience </h3> 
                        <div className="timeline text-start">
                            <VerticalTimeline>
                                <VerticalTimelineElement
                                    className="font-mono"
                                    contentStyle={{ background: '#131313', color: '#fff', border: 'none' }}
                                    contentArrowStyle={{ borderRight: '7px solid  white' }}
                                    date="Jul 2021 - Aug 2021"
                                    iconStyle={{ background: '#131313', color: '#fff' }}
                                    icon={<FontAwesomeIcon icon={faUniversity} />}
                                >
                                    <h3 className="font-weight-bold my-3">Web Developer</h3>
                                    <h5 className="vertical-timeline-element-subtitle">LICET</h5>
                                    <p>
                                    Developed a portal for a mentorship program.
                                    </p>
                                </VerticalTimelineElement>
                                <VerticalTimelineElement
                                    className="font-mono"
                                    date="Feb 2021 - Jul 2021"
                                    contentStyle={{ background: '#131313', color: '#fff' }}
                                    iconStyle={{ background: '#131313', color: '#fff'}}
                                    icon={<FontAwesomeIcon icon={faCertificate} />}
                                >
                                    <h3 className="font-weight-bold my-3">Web Developer</h3>
                                    <h5 className="vertical-timeline-element-subtitle">Onfluence, UK</h5>
                                    <p>
                                    Played a role in the team as Backend developer.
                                    </p>
                                </VerticalTimelineElement>
                                <VerticalTimelineElement
                                    className="font-mono"
                                    date="Aug 2020 - Oct 2020"
                                    contentStyle={{ background: '#131313', color: '#fff' }}
                                    iconStyle={{ background: '#131313', color: '#fff' }}
                                    icon={<FontAwesomeIcon icon={faSchool}/>}
                                >
                                    <h3 className="font-weight-bold my-3">Web Developer</h3>
                                    <h5 className="vertical-timeline-element-subtitle">Pattarai</h5>
                                    <p>
                                    Developed a module in an ERP suite.
                                    </p>
                                </VerticalTimelineElement>
                            </VerticalTimeline> 
                        </div>
                    </div>
                </motion.div>
            </motion.div>
        </div> 
      </Menu>
    )
  
}