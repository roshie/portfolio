import React, { useState, useEffect } from "react";
import Menu from "./Menu";
import { motion } from "framer-motion";
import AOS from "aos";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";
import "aos/dist/aos.css";

const gcpcourses = [
  {
    title: "Essential Google Cloud Infrastructure: Foundation",
    image: "courses/course-2.jpg",
    date: "Jun 25, 2022",
    topicsCovered: "An Intro to Google Cloud, GCP Console and Cloud Shell.",
    courseVerifyLink:
      "https://www.coursera.org/account/accomplishments/verify/55SC96KR9BGP",
  },
  {
    title: "Google Cloud Fundamentals: Core Infrastructure",
    date: "Jun 10, 2022",
    image: "courses/course-1.jpg",
    topicsCovered: "Access control to resources with IAM, Virtual Machines.",
    courseVerifyLink:
      "https://www.coursera.org/account/accomplishments/verify/29SC7D7B4CAP",
  },
  {
    title: "Essential Google Cloud Infrastructure: Core Services",
    date: "Jul 31, 2022",
    image: "courses/course-3.jpg",
    topicsCovered:
      "Levels of IAM, Storage Services, Resource management and Monitoring.",
    courseVerifyLink:
      "https://www.coursera.org/account/accomplishments/verify/GW7FQWBHBFBB",
  },
  {
    title: "Elastic Google Cloud Infrastructure: Scaling and Automation",
    date: "Jul 31, 2022",
    image: "courses/course-4.jpg",
    topicsCovered:
      "Interconnecting Networks, Load balancing and Autoscaling, Deployment Automation and Managed Services.",
    courseVerifyLink:
      "https://www.coursera.org/account/accomplishments/verify/FNJAZNTD2KVG",
  },
];

const courses = [
  {
    title: "Machine Learning for All",
    image: "courses/course-ml.jpg",
    offeredBy: "Coursera",
    date: "Jun 17, 2020",
    topicsCovered:
      "Basics of Machine Learning, Types of learning and Importance of Data in ML.",
    courseVerifyLink:
      "https://www.coursera.org/account/accomplishments/verify/Y6D9RE93DJZR",
  },
  {
    title: "Azure: Create a Virtual Machine and Deploy a Web Server",
    offeredBy: "Coursera",
    image: "courses/course-azure.jpg",
    date: "Oct 18, 2021",
    topicsCovered:
      "Azure basics, Creation of Virtual Machine and Deploying it.",
    courseVerifyLink:
      "https://www.coursera.org/account/accomplishments/verify/QG7GMMEPUHM2",
  },
  {
    title: "Responsive Website Basics: Code with HTML, CSS, and JavaScript",
    offeredBy: "Coursera",
    date: "Sept 06, 2020",
    image: "courses/webdev.jpg",
    topicsCovered: "Skills gained: HTML, CSS, Javascipt and JQuery.",
    courseVerifyLink:
      "https://www.coursera.org/account/accomplishments/verify/URBEPQD3SXMS",
  },
  // {
  //   title: "Get Started with Adobe Illustrator",
  //   offeredBy: "Coursera",
  //   date: "Jun 6, 2022",
  //   image: "courses/course-adobe.jpg",
  //   topicsCovered: "Basics of Adobe illustrator, tools in illustrator.",
  //   courseVerifyLink:
  //     "https://www.coursera.org/account/accomplishments/verify/2RBH5D4WTGBX",
  // },
  {
    title: "Data Science Math Skills",
    offeredBy: "Coursera",
    date: "May 21, 2020",
    image: "courses/ds-math.jpg",
    topicsCovered:
      "Probability Theory, Bayes' Theorem and Bayesian Probability.",
    courseVerifyLink:
      "https://www.coursera.org/account/accomplishments/verify/2SSWSS5QQD3V",
  },
  {
    title: "The Fundamentals of Digital Marketing",
    offeredBy: "Google Digital Garage",
    date: "May 26, 2020",
    image: "courses/course-digmark.jpg",
    topicsCovered: null,
    courseVerifyLink: null,
  },
  {
    title: "Learn to Build a User Login System using NodeJS",
    image: "courses/eduonix-nodejs.jpg",
    offeredBy: "Eduonix",
    date: "May 04, 2020",
    topicsCovered: null,
    courseVerifyLink: null,
  },
  // {
  //   title: "Step into Robotic Process Automation",
  //   offeredBy: "GUVI",
  //   image: "courses/RPA.png",
  //   date: "Apr 21, 2020",
  //   topicsCovered: null,
  //   courseVerifyLink: "https://www.guvi.in/certificate?id=n83R51A37B8aTx47h7",
  // },
];

// const workshops = [
//   {
//     title: "Flutter App Development Workshop",
//     heldBy: "Pattarai, LICET",
//     place: "Online",
//     image: "courses/workshop-flutter.jpg",
//     date: "Jul 15, 2020 - Aug 4, 2020",
//   },
//   {
//     title: "Mixed Reality Workshop",
//     heldBy: "CEG",
//     place: "Chennai",
//     image: "courses/workshop-mixedreality.jpg",
//     date: "Mar 14, 2020",
//   },
//   {
//     title: "Learning & Earning through Ethical Hacking",
//     heldBy: "Vault Infosec",
//     place: "Online",
//     image: "courses/workshop-vault.jpg",
//     date: "Sept 15, 2020",
//   },
//   {
//     title: "Building IT Skills",
//     heldBy: "SRM Ramapuram",
//     place: "Online",
//     image: "courses/workshop-it.jpg",
//     date: "May 3, 2021 - May 7, 2021",
//   },
//   {
//     title: "UML Modelling with Creately - Training",
//     heldBy: "LICET - Creately",
//     place: "Online",
//     image: "courses/workshop-uml.jpg",
//     date: "Apr 19, 2021 - Apr 20, 2021",
//   },
// ];

const contests = [
  {
    title: "TCS Codevita Season 10",
    heldBy: "Tata Consultancy Services",
    place: "Online",
    description: "Secured a global rank of 526 in the Contest round.",
    image: "courses/codevita.jpg",
    date: "Apr 2022 - May 2022",
  },
  {
    title: "Python (Basic) at Hackerrank",
    heldBy: "Hackerrank",
    description: "Took this Skill test to assess my Knowledge in Python.",
    place: "Online",
    image: "courses/hackerrank-python.png",
    date: "14 Jul, 2021",
  },
  {
    title: "Theervu - Hackathon",
    heldBy: "LICET Pattarai",
    description: "A Hackathon conducted by Pattarai.",
    place: "Online",
    image: "courses/participation-theervu.jpg",
    date: "Oct 15, 2020 - Oct 18, 2020",
  },
  {
    title: "Ideathon",
    description: "An Idea Pitching Contest conducted by Pattarai.",
    heldBy: "LICET Pattarai",
    place: "Online",
    image: "courses/participation-ideathon.jpg",
    date: "Jun 30, 2020",
  },
  {
    title: "Intacto",
    description: "A Treasure Hunt conducted by Pattarai.",
    heldBy: "LICET Pattarai",
    place: "Online",
    image: "courses/participation-intacto.jpg",
    date: "Aug 21, 2020",
  },
];

export default function Certifications() {
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
    document.title = "Certifications | Roshitha - Portfolio";
  }, []);

  const Generator = function* (list) {
    for (var i = 0; i < list.length; i++) {
      yield list[i];
    }
  };
  const gcpcoursesIter = Generator(gcpcourses);

  return (
    <Menu>
      {/* {isViewerOpen && (
        <ImageViewer
          src={images}
          currentIndex={currentImage}
          disableScroll={false}
          closeOnClickOutside={true}
          onClose={closeImageViewer}
        />
      )} */}
      <div className="d-flex flex-column justify-content-center text-center p-5">
        <motion.div exit="exit" initial="initial" animate="animate">
          <motion.div variants={fadeIn1}>
            <div className="row text-light my-5 font-mono">
              <h1 className="my-4">Certifications</h1>
              <p className="about-content">
                Here is a bunch of Certifications I've done.
              </p>
            </div>
            <div className="text-light my-5 font-mono text-center font-weight-bold">
              <h5>
                Architecting with Google Compute Engine - Course Series By
                Coursera x Google Cloud
              </h5>
            </div>
          </motion.div>
        </motion.div>
        {range(gcpcourses.length / 2).map((i) => {
          const left = gcpcoursesIter.next().value;
          const right = gcpcoursesIter.next().value;
          return (
            <div className="row portfolio-row">
              <div className="col-12 col-md-4 m-3 p-0">
                <CourseItem
                  title={left.title}
                  type="left"
                  image={left.image}
                  description={left.topicsCovered}
                  offeredBy={null}
                  courseVerifyLink={left.courseVerifyLink}
                  date={left.date}
                />
              </div>
              <div className="col-12 col-md-4 m-3 p-0">
                <CourseItem
                  title={right.title}
                  type="right"
                  offeredBy={null}
                  image={right.image}
                  description={right.topicsCovered}
                  courseVerifyLink={right.courseVerifyLink}
                  date={right.date}
                />
              </div>
            </div>
          );
        })}
        <div className="text-light my-5 font-mono text-center font-weight-bold">
          <h5>Other Courses</h5>
        </div>
        <div className="row portfolio-row">
          {courses.map((course) => {
            return (
              <div className="col-12 col-md-4 col-lg-3 m-2 p-0">
                <CourseItem
                  title={course.title}
                  type="right"
                  image={course.image}
                  description={course.topicsCovered}
                  offeredBy={`Offered by: ${course.offeredBy}`}
                  courseVerifyLink={course.courseVerifyLink}
                  date={course.date}
                />
              </div>
            );
          })}
        </div>
        <div className="text-light my-5 font-mono text-center font-weight-bold">
          <h5>Contests Certificates</h5>
        </div>
        <div className="row portfolio-row">
          {contests.map((contest) => {
            return (
              <div className="col-12 col-md-4 col-lg-3 m-2 p-0">
                <CourseItem
                  title={contest.title}
                  type="right"
                  image={contest.image}
                  description={contest.description}
                  offeredBy={null}
                  courseVerifyLink={null}
                  date={contest.date}
                />
              </div>
            );
          })}
        </div>
      </div>
    </Menu>
  );
}

const range = (n) => [...Array(n).keys()];

function CourseItem(props) {
  const [loading, setLoading] = useState(true);
  return (
    <div
      className="portfolio-item"
      data-aos={props.type === "right" ? "fade-left" : "fade-right"}
    >
      {props.image !== null && (
        <div
          className={`gif-holder ${
            !loading
              ? "overflow-hidden"
              : "d-flex align-items-center justify-content-center"
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
            onClick={props.onClick}
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
        <h4 className="portfolio-title"> {props.title} </h4>
        {props.offeredBy !== null && <h6> {props.offeredBy} </h6>}
        <div className="my-3">
          <span className="course-date">{props.date}</span>
        </div>
        {props.description !== null && <h6> {props.description} </h6>}
        {props.courseVerifyLink !== "" && props.courseVerifyLink !== null && (
          <div className="mt-3">
            <a
              href={props.courseVerifyLink}
              target="_blank"
              rel="noreferrer"
              className="github"
              style={{ textDecoration: "none" }}
            >
              Verify Here <FontAwesomeIcon icon={faExternalLinkAlt} />
            </a>
          </div>
        )}
      </div>
    </div>
  );
}
