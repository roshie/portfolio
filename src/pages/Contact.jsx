import React, { useState } from "react" 
import Menu from './Menu' 
import { motion } from "framer-motion"; 
import { firebaseApp } from "../firebase";
import { getFirestore, collection, addDoc } from "firebase/firestore";
 
export default function Contact () {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [msg, setMsg] = useState({ display: "none" });

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

    const HandleSubmit = (e) => {
        e.preventDefault(); 
        const db = getFirestore(firebaseApp);

        if (name !== "" && email !== "" && message !== "") {

            addDoc(collection(db, "messages"), {
                Email: email,
                Name: name,
                Message: message
            });

            const dataToSend = {
                "content": `A Message From ${name}`,
                "embeds": [
                    {
                        "author": {
                            "name": name,
                        },
                        "title": email,
                        "description": message,
                        "color": 11342935,
                        "footer": {
                            "text": "From https://roshie.tech/",
                        }
                    }
                ]
            }

            fetch("https://discord.com/api/webhooks/992257343716859965/0OgNO3N7F3P8B3DI45qHevEjb2PwkQn39b55laormD3DA7Z_quBwFM57EAEzVoODpLgT", {
                method: 'POST', 
                headers: {
                  'Content-Type': 'application/json'
                },
                body: JSON.stringify(dataToSend) 
              }).then(() => {
                
                setMsg({}) 
                setName("")
                setEmail("")
                setMessage("")
              })
           
        }   
    }

    return ( 
      <Menu>
        <div className="d-flex flex-column justify-content-center text-center p-5 text-light font-mono">   
            <motion.div exit="exit" initial="initial" animate="animate">
                <motion.div variants={fadeIn1}>
                    <div className="row mt-4 mb-2">
                        <h1 className="my-4">Contact</h1> 
                        <p className="about-content">Get in touch with me!</p> 
                    </div> 
                    <div className="d-flex justify-content-center"> 
                        <div className="col-12 col-md-7">
                            <form onSubmit={HandleSubmit}> 
                                <div className="row justify-content-center">
                                    <div className="col-12 col-md-5 mr-1">
                                        <div className="row mb-2">Name</div>
                                        <div className="row">
                                            <input type="text" value={name} onChange={(e) => setName(e.target.value)} className="form-control bg-dark mb-4 text-white font-mono" />
                                        </div>
                                    </div>
                                    <div className="col-12 col-md-6">
                                        <div className="row mb-2">Email</div>
                                        <div className="row">
                                            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="form-control bg-dark mb-4 text-white font-mono" />
                                        </div>
                                    </div>
                                </div>
                                
                                <div className="row mb-2 message-padding">Message</div>
                                <div className="row message-padding">
                                    <textarea rows="5" type="text" value={message} onChange={(e) => setMessage(e.target.value)} className="form-control bg-dark mb-4 text-white font-mono" />
                                </div> 
                                <div className="font-mono text-success my-2" style={msg}>
                                    Message Sent!
                                </div>
                                <button type="submit" className="btn text-light btn-submit">Submit</button>
                            </form>
                        </div>
                    </div>
                    <div className="row mt-4">
                        <h1 className="my-2">Or, Mail me at</h1> 
                        <p className="about-content">mail.roshita@gmail.com</p> 
                    </div>
                </motion.div>
            </motion.div>
        </div> 
      </Menu>
    )
  
}
