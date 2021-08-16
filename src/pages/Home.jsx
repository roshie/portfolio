import React from "react"
import RINGS from 'vanta/dist/vanta.rings.min'
// Make sure window.THREE is defined, e.g. by including three.min.js in the document head using a <script> tag
 
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
        minHeight: 200.00,
        minWidth: 200.00,
        scale: 1.00,
        scaleMobile: 1.00,
        backgroundColor: 0x181818,
        color: 0xfffc1c
      })
  }
  componentWillUnmount() {
    if (this.vantaEffect) this.vantaEffect.destroy()
  }
  render() {
    return <div ref={this.vantaRef} style={{height: '100vh'}}>
      Foreground content goes here
    </div>
  }
}