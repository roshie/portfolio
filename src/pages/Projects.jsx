import React from "react";
import Menu from "./Menu";
import { motion } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";

const projects = [
  {
    title: "stretch inc.",
    image: "stretch.gif",
    description:
      "A slot booking application built for a fitness company. Built logic to check slot availability, to book a slot, to schedule timings for the day and other APIs. Also developed few pages for the frontend.",
    tools: ["PHP", "Python-Flask", "MySQL", "Firebase"],
    githubLink: "",
  },
  {
    title: "PhotoBooks by Gravity",
    image: "album.gif",
    description:
      "An Online Album Viewer. Written UI and APIs using React and Express.",
    tools: ["ReactJS", "ExpressJS", "Firestore", "Azure BlobStorage"],
    githubLink: "https://github.com/roshie/PhotoBook",
  },
  {
    title: "xStack - Leave Management",
    image: null,
    description:
      "A module developed as a part of an Enterprise Resource Planning. Built for tracking attendance, requesting and granting leave and on-duty.",
    tools: ["Bootstrap", "PHP", "MySQL", "Javascript"],
    githubLink: "",
  },
  {
    title: "Syndeo",
    image: null,
    description:
      "A portal for connecting mentors and mentees. Developed for a mentorship programme.",
    tools: ["PHP", "Python-Flask", "MySQL", "Firebase", "Python"],
    githubLink: "",
  },
  {
    title: "Project Switcher",
    image: null,
    description: "A Mobile Application to implement Smart Home Automation",
    tools: ["Flutter", "Flask", "Micropython", "SocketIO"],
    githubLink: "https://github.com/roshie/switcher-flutter",
  },
  {
    title: "Gesture Based Cursor Controller",
    image: null,
    description:
      "Implementation of Cursor Control with Facial Gestures (Academic Project)",
    tools: ["Python", "OpenCV", "Dlib"],
    githubLink: "https://github.com/roshie/gesture-based-cursor-control",
  },
  {
    title: "Zue Technologies",
    description: "A minimal portfolio page for an organization.",
    image: null,
    tools: ["Bootstrap", "ReactJS", "Framer-Motion"],
    githubLink: "https://github.com/roshie/zue-technologies",
  },
  {
    title: "BotHub",
    description: "A Web-based shopping site.",
    image: null,
    tools: [
      "ReactJS",
      "Python-FastAPI",
      "Razorpay",
      "MySQL",
      "React-Bootstrap",
    ],
    githubLink: "",
  },
  {
    title: "Potato, the Bot",
    description:
      "A Discord bot that notifies the availability of Covid Vaccination Slots.",
    image: null,
    tools: ["Python", "discord.py", "CoWIN APIs"],
    githubLink: "https://github.com/roshie/Potato-the-Bot",
  },
  {
    title: "Prime-DocManager",
    description: "A Simple Application aims on Automating Document Generation.",
    image: null,
    tools: ["Python", "Flask", "SQLAlchemy", "Mailmerge"],
    githubLink: "",
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
                Here are some of the projects I've worked.
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
  return (
    <div
      className="portfolio-item"
      data-aos={props.type === "right" ? "fade-left" : "fade-right"}
    >
      {props.image !== null && (
        <div className="gif-holder">
          <img src={props.image} alt="" className="gif" />
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
      </div>
    </div>
  );
}
