import React, { useState, useEffect } from "react";
import Menu from "./Menu";
import { motion } from "framer-motion";
import AOS from "aos";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";
import "aos/dist/aos.css";

const projects = [
  {
    title: "stretch inc.",
    image: "thumbnails/stretch.gif",
    description:
      "A slot booking application built for a fitness company. Built logic to check slot availability, to book a slot, to schedule timings for the day and other APIs. Also developed few pages for the frontend.",
    tools: ["PHP", "Python-Flask", "MySQL", "Firebase"],
    githubLink: "",
    siteLink: "",
  },
  {
    title: "PhotoBooks by Gravity",
    image: "thumbnails/album.gif",
    description:
      "An Online Album Viewer. Written UI and APIs using React and Express.",
    tools: ["ReactJS", "ExpressJS", "Firestore", "Azure BlobStorage"],
    githubLink: "https://github.com/roshie/PhotoBook",
    siteLink: "",
  },
  {
    title: "Zue Technologies",
    description: "A minimal portfolio page for an organization.",
    image: "thumbnails/zuewebsite.gif",
    tools: ["Bootstrap", "ReactJS", "Framer-Motion"],
    githubLink: "https://github.com/roshie/zue-technologies",
    siteLink: "",
  },
  {
    title: "BotHub",
    description:
      "A shopping site for plug-n-play and customizable IoT automation solutions. Developed a MVP with complete functionalities.",
    image: "thumbnails/bothub2.gif",
    tools: [
      "ReactJS",
      "Python-FastAPI",
      "Razorpay",
      "MySQL",
      "React-Bootstrap",
    ],
    githubLink: "https://github.com/roshie/bothub-react-fe",
    siteLink: "https://bothub.vercel.app/",
  },
  {
    title: "Project Cortex",
    description:
      "An ERP for Pattarai - Tech Club. Developed a MVP, includes multiple modules such as Events management, Attendance etc.",
    image: null,
    tools: ["ReactJS", "ExpressJS", "Redux", "PostgreSQL", "MUI"],
    githubLink: "https://github.com/pattarai/ProjectCortex-fe-v1",
    siteLink: "",
  },
  {
    title: "xStack - Leave Management",
    image: null,
    description:
      "A module developed as a part of an Enterprise Resource Planning. Built for tracking attendance, requesting and granting leave and on-duty.",
    tools: ["Bootstrap", "PHP", "MySQL", "Javascript"],
    githubLink: "",
    siteLink: "",
  },
  {
    title: "Devfolio",
    description: "The Portfolio you're looking right now.",
    image: "thumbnails/portfolio.gif",
    tools: ["ReactJS", "Bootstrap", "VantaJS"],
    githubLink: "https://github.com/roshie/portfolio",
    siteLink: "https://roshie.tech/",
  },
  {
    title: "Graphique NFT",
    description:
      "A Fully-Responsive site translated from a Figma design, for NIT ConclaveX Designathon",
    image: "thumbnails/graphique.gif",
    tools: ["ReactJS", "Bootstrap"],
    githubLink: "https://github.com/roshie/graphique-nft",
    siteLink: "https://graphique-nft.vercel.app/",
  },
  {
    title: "Project Switcher",
    image: "thumbnails/switcher.gif",
    description:
      "A Mobile Application to control appliances from outside of home. Supports Synchronization between Multiple Mobile Clients using SocketIO.",
    tools: ["Flutter", "Flask", "Micropython", "SocketIO", "ESP8266"],
    githubLink: "https://github.com/roshie/switcher-flutter",
    siteLink: "",
  },
  {
    title: "Gesture Based Cursor Controller",
    image: "thumbnails/gesture.gif",
    description:
      "Implementation of Cursor Control with Facial Gestures (Academic Project)",
    tools: ["Python", "OpenCV", "Dlib"],
    githubLink: "https://github.com/roshie/gesture-based-cursor-control",
    siteLink: "",
  },
  {
    title: "Syndeo",
    image: "thumbnails/SYNDEO.jpg",
    description:
      "A portal for connecting mentors and mentees. Developed for a mentorship programme.",
    tools: ["PHP", "Python-Flask", "MySQL", "Firebase", "Python"],
    githubLink: "",
    siteLink: "",
  },
  {
    title: "Potato, the Bot",
    description:
      "A Discord bot that notifies the availability of Covid Vaccination Slots.",
    image: "thumbnails/potato.jpg",
    tools: ["Python", "discord.py", "CoWIN APIs"],
    githubLink: "https://github.com/roshie/Potato-the-Bot",
    siteLink: "",
  },
  {
    title: "Cal-c-way",
    description:
      "A Scientific calculator Application. Submitted @ Flutter Workshop",
    image: null,
    tools: ["Flutter", "Dart"],
    githubLink: "https://github.com/roshie/cal-c-way",
    siteLink: "",
  },
  {
    title: "Prime-DocManager",
    description: "A Simple Application aims on Automating Document Generation.",
    image: null,
    tools: ["Python", "Flask", "SQLAlchemy", "Mailmerge"],
    githubLink: "",
    siteLink: "",
  },
];

export default function Projects() {
  AOS.init({
    duration: 1500,
  });

  const easing = [0.6, -0.05, 0.1, 0.99];
  const fadeIn1 = {
    initial: {
      opacity: 0,
      y: 20,
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
  useEffect(() => {
    document.title = "Projects | Roshitha - Portfolio";
  }, []);

  const projectGenerator = function* () {
    for (var i = 0; i < projects.length; i++) {
      yield projects[i];
    }
  };
  const projectIter = projectGenerator();

  return (
    <Menu>
      <div className="d-flex flex-column justify-content-center text-center p-5">
        <motion.div exit="exit" initial="initial" animate="animate">
          <motion.div variants={fadeIn1}>
            <div className="row text-light my-5 font-mono">
              <h1 className="my-4">Projects</h1>
              <p className="about-content">
                Here is a list of Projects I've worked.
              </p>
            </div>
          </motion.div>
        </motion.div>
        {range(projects.length / 2).map((i) => {
          const left = projectIter.next().value;
          const right = projectIter.next().value;
          return (
            <div className="row portfolio-row">
              <div className="col-12 col-md-5 m-3 p-0">
                <PortfolioItem
                  title={left.title}
                  type="left"
                  image={left.image}
                  description={left.description}
                  githubLink={left.githubLink}
                  siteLink={left.siteLink}
                >
                  {left.tools.map((tool) => (
                    <span>{tool}</span>
                  ))}
                </PortfolioItem>
              </div>
              <div className="col-12 col-md-5 m-3 p-0">
                <PortfolioItem
                  title={right.title}
                  type="right"
                  image={right.image}
                  description={right.description}
                  githubLink={right.githubLink}
                  siteLink={right.siteLink}
                >
                  {right.tools.map((tool) => (
                    <span>{tool}</span>
                  ))}
                </PortfolioItem>
              </div>
            </div>
          );
        })}
      </div>
    </Menu>
  );
}

const range = (n) => [...Array(n).keys()];

function PortfolioItem(props) {
  const [loading, setLoading] = useState(true);
  return (
    <div
      className="portfolio-item"
      data-aos={props.type === "right" ? "fade-left" : "fade-right"}
    >
      {props.image !== null && (
        <div
          className={`gif-holder ${
            !loading ? "" : "d-flex align-items-center justify-content-center"
          }`}
          style={!loading ? {} : { height: "200px" }}
        >
          <img
            src={props.image}
            alt=""
            className="gif"
            style={loading ? { display: "none" } : {}}
            onLoad={() => {
              setLoading(false);
            }}
          />
          <div
            class="spinner-border text-light my-auto"
            role="status"
            style={!loading ? { display: "none" } : {}}
          >
            <span class="sr-only">Loading...</span>
          </div>
        </div>
      )}
      <div className="portfolio-content text-light font-mono">
        <h3 className="portfolio-title"> {props.title} </h3>
        <h6> {props.description} </h6>
        <div className="skills">{props.children}</div>
        {props.githubLink !== "" && (
          <div className="mt-3">
            <a
              href={props.githubLink}
              target="_blank"
              rel="noreferrer"
              className="github"
              style={{ textDecoration: "none" }}
            >
              View On Github <img src="github.png" alt="G" height="15" />
            </a>
          </div>
        )}
        {props.siteLink !== "" && props.siteLink !== null && (
          <div className="mt-3">
            <a
              href={props.siteLink}
              target="_blank"
              rel="noreferrer"
              className="external-link"
              style={{ textDecoration: "none" }}
            >
              View Site <FontAwesomeIcon icon={faExternalLinkAlt} />
            </a>
          </div>
        )}
      </div>
    </div>
  );
}
