import React from "react";
import Menu from "./Menu";
import RINGS from "vanta/dist/vanta.rings.min";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faGithub,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import Typewriter from "typewriter-effect";
import { motion } from "framer-motion";
import Loader from "./components/Loader";
import { loadingTitle, title } from "../globalStrings";

export default class Home extends React.Component {
  constructor() {
    super();
    document.title = loadingTitle;
    this.vantaRef = React.createRef();
    this.fadeIn1 = {
      initial: {
        opacity: 0,
        y: 20,
      },
      animate: {
        y: 0,
        opacity: 1,
        transition: {
          duration: 1.5,
          delay: 2.5,
          ease: [0.6, -0.05, 0.1, 0.99],
        },
      },
    };
    this.fadeIn2 = {
      initial: {
        opacity: 0,
      },
      animate: {
        opacity: 1,
        transition: {
          duration: 1.5,
          delay: 2.5,
          ease: [0.6, -0.05, 0.1, 0.99],
        },
      },
    };
    this.state = {
      isLoaded: false,
    };
  }
  componentDidMount() {
    setTimeout(() => {
      this.vantaEffect = RINGS({
        el: this.vantaRef.current,
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 50.0,
        minWidth: 50.0,
        maxHeight: 100.0,
        maxWidth: 100.0,
        scale: 1.0,
        scaleMobile: 1.0,
        backgroundColor: 0x131313,
        color: 0x7500ff,
      });
      document.title = title;
      this.setState({ isLoaded: true });
    }, 1750);
  }
  componentWillUnmount() {
    if (this.vantaEffect) this.vantaEffect.destroy();
  }
  render() {
    const { isLoaded } = this.state;
    return (
      <>
        <Loader className={`${!isLoaded ? "" : "d-none"}`} />
        <motion.div exit="exit" initial="initial" animate="animate">
          <motion.div variants={this.fadeIn2}>
            <Menu isLoaded={isLoaded}>
              <div
                ref={this.vantaRef}
                className={`d-flex flex-column align-items-md-start align-items-center ${
                  isLoaded ? "" : "d-none"
                }`}
                style={{ height: "100vh" }}
              >
                <motion.div exit="exit" initial="initial" animate="animate">
                  <motion.div variants={this.fadeIn1}>
                    <div
                      className="text-light ml-md-5 font-mono name text-center text-md-start"
                      style={{ marginTop: "8rem", fontSize: "4rem" }}
                    >
                      Roshita
                    </div>
                    <div className="text-light ml-md-5 font-mono fs-14 mb-2 typewriter text-center text-md-start">
                      <Typewriter
                        options={{
                          strings: ["Budding Engineer.","Continuously improving to excel in engineering and technology.",
                         "Passionate about cutting-edge tech and innovation."],
                          autoStart: true,
                          loop: true,
                        }}
                      />
                    </div>
                    <div className="text-light ml-md-5 mt-2 text-center text-md-start">
                      <a
                        href="https://twitter.com/roshie_ta"
                        className="socialIcons text-light fs-14"
                      >
                        <FontAwesomeIcon icon={faTwitter} />
                      </a>
                      <a
                        href="https://instagram.com/"
                        className="socialIcons text-light mx-3 fs-14"
                      >
                        <FontAwesomeIcon icon={faInstagram} />
                      </a>
                      <a
                        href="https://github.com/roshie"
                        className="socialIcons text-light fs-14"
                      >
                        <FontAwesomeIcon icon={faGithub} />
                      </a>
                      <a
                        href="https://linkedin.com/in/roshitha-rajesh"
                        className="socialIcons text-light mx-3 fs-14"
                      >
                        <FontAwesomeIcon icon={faLinkedin} />
                      </a>
                    </div>
                  </motion.div>
                </motion.div>
                {/* >>>>>>> d02684c... Add page loader */}
              </div>
            </Menu>
          </motion.div>
        </motion.div>
      </>
    );
  }
}
