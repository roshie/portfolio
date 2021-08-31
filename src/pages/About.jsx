import React from "react" 
import Menu from './Menu'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faGithub, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons'
 
export default function About () {

    return ( 
      <Menu>
        <div ref={this.vantaRef} className="d-flex flex-column align-items-md-start align-items-center" style={{height: '100vh'}}> 
          <div className="text-light ml-md-5 font-mono name" style={{marginTop: '8rem', fontSize: '5rem'}}>Roshita</div>  
          <div className="text-light ml-md-5 font-mono fs-14 mb-2 typewriter">
            <Typewriter
                  options={{
                    strings: ['Developer. Coding enthusiast.'],
                    autoStart: true,
                    loop: true,
                  }} 
                />
          </div>
          <div className="text-light ml-md-5 mt-2">
            <a href="" className="socialIcons text-light fs-14"><FontAwesomeIcon icon={faFacebook} /></a>
            <a href="" className="socialIcons text-light mx-3 fs-14"><FontAwesomeIcon icon={faInstagram} /></a>
            <a href="" className="socialIcons text-light fs-14"><FontAwesomeIcon icon={faGithub} /></a>
            <a href="" className="socialIcons text-light mx-3 fs-14"><FontAwesomeIcon icon={faLinkedin} /></a>
          </div>
        </div> 
      </Menu>
    )
  
}