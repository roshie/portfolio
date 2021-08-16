import React from "react"
import RINGS from 'vanta/dist/vanta.rings.min'
import { bubble as Menu } from 'react-burger-menu'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faGithub, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faHamburger } from "@fortawesome/free-solid-svg-icons"
 
export default class Home extends React.Component {
  constructor() {
    super()
    this.vantaRef = React.createRef()
  }
  componentDidMount() {
    this.vantaEffect = RINGS({
        el: this.vantaRef.current,
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 50.00,
        minWidth: 50.00,
        maxHeight: 100.00,
        maxWidth: 100.00,
        scale: 1.00,
        scaleMobile: 1.00,
        backgroundColor: 0x131313,
        color: 0x7500ff
      })
  }
  componentWillUnmount() {
    if (this.vantaEffect) this.vantaEffect.destroy()
  }
  render() {
    return (
      <div>
          <Menu>
            <a id="home" className="menu-item" href="/">Home</a>
            <a id="about" className="menu-item" href="/about">About</a>
            <a id="contact" className="menu-item" href="/contact">Contact</a>
            <a className="menu-item" href="">Settings</a>
          </Menu>
          <div ref={this.vantaRef} className="d-flex flex-column align-items-md-start align-items-center" style={{height: '100vh'}}>
            <div className="text-light ml-md-5 font-mono" style={{marginTop: '5rem', fontSize: '5rem'}}>Roshita</div>
            <div className="text-light ml-md-5 font-mono fs-14">Developer. Coding enthusiast.</div>
            <div className="text-light ml-md-5 mt-2">
              <a href="" className="text-light fs-14"><FontAwesomeIcon icon={faFacebook} /></a>
              <a href="" className="text-light mx-3 fs-14"><FontAwesomeIcon icon={faInstagram} /></a>
              <a href="" className="text-light fs-14"><FontAwesomeIcon icon={faGithub} /></a>
              <a href="" className="text-light mx-3 fs-14"><FontAwesomeIcon icon={faLinkedin} /></a>
            </div>
          </div>
      </div>
    )
  }
}