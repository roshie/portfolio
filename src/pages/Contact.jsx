import React, { useState, useEffect } from "react";
import Menu from "./Menu";
import { loadingTitle, title } from "../globalStrings";
import { motion } from "framer-motion";
import { firebaseApp } from "../firebase";
import { getFirestore, collection, addDoc } from "firebase/firestore";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faGithub,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [msg, setMsg] = useState({ display: "none" });

  useEffect(() => {
    document.title = `Contact | ${title}`;
  }, []);

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

  const HandleSubmit = (e) => {
    e.preventDefault();
    const db = getFirestore(firebaseApp);

    if (name !== "" && email !== "" && message !== "") {
      addDoc(collection(db, "messages"), {
        Email: email,
        Name: name,
        Message: message,
        date: (new Date()).toDateString()
      })
        .then(() => {
          setMsg({});
          setName("");
          setEmail("");
          setMessage("");
        })

      fetch(
        `https://portfolio-be-six.vercel.app/api/contact?name=${name}&email=${email}&message=${message}`
      )
        .then(() => {
          setMsg({});
          setName("");
          setEmail("");
          setMessage("");
        })
        .catch((e) => {
          console.log(e);
        });
    }
  };

  return (
    <Menu>
      <div className="d-flex flex-column justify-content-center text-center p-5 text-light font-mono">
        <motion.div exit="exit" initial="initial" animate="animate">
          <motion.div variants={fadeIn1}>
            <div className="row mt-4 mb-2">
              <h1 className="my-4">Contact</h1>
              <p className="about-content px-0 px-md-5">Please Drop a message below with your email and I'll reach out to you :)</p>
            </div>
            <div className="d-flex justify-content-center">
              <div className="col-12 col-md-7">
                <form onSubmit={HandleSubmit}>
                  <div className="row justify-content-center">
                    <div className="col-12 col-md-5 mr-1">
                      <div className="row mb-2">Name</div>
                      <div className="row">
                        <input
                          type="text"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          className="form-control bg-dark mb-4 text-white font-mono"
                        />
                      </div>
                    </div>
                    <div className="col-12 col-md-6">
                      <div className="row mb-2">Email</div>
                      <div className="row">
                        <input
                          type="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          className="form-control bg-dark mb-4 text-white font-mono"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="row mb-2 message-padding">Message</div>
                  <div className="row message-padding">
                    <textarea
                      rows="5"
                      type="text"
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      className="form-control bg-dark mb-4 text-white font-mono"
                    />
                  </div>
                  <div className="font-mono text-success my-2" style={msg}>
                    Message Sent!
                  </div>
                  <button type="submit" className="btn text-light btn-submit">
                    Send
                  </button>
                </form>
              </div>
            </div>
            <div className="row mt-4">
              <h1 className="my-2">Or, Please drop a message at</h1>
              <a className="about-content" href="mailto:mail.roshita@gmail.com">mail.roshita@gmail.com</a>
              <div className="text-light">
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
                  href="https://www.linkedin.com/in/roshitha-r"
                  className="socialIcons text-light mx-3 fs-14"
                >
                  <FontAwesomeIcon icon={faLinkedin} />
                </a>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </Menu>
  );
}
