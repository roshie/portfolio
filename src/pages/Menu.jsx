import React from "react"
import { elastic as ElasticMenu } from 'react-burger-menu' 
import 'loaders.css'
 
export default class Menu extends React.Component {
  constructor(props) {
    super(props) 
    this.state = {
      isLoaded: false
    }
  } 
  componentDidMount() {
    this.setState({isLoaded : true})
  }
  render() {
    return (  
      <>  
          <div class="loader d-flex justify-content-center align-items-center" style={ !this.state.isLoaded ? {height: '100vh', backgroundColor: '#131313'} : {display: 'none'}}>
            <div class="loader-inner ball-clip-rotate-multiple" style={!this.state.isLoaded ? {} : {display: 'none'}}>
              <div></div>
              <div></div>
            </div>
          </div>
          <div id="outer-container" style={ this.state.isLoaded ? { height: '100%' } : {}}> 
              <div>
                  <ElasticMenu pageWrapId={'page-wrap'}  outerContainerId={'outer-container'}>
                    <div>
                      <img src="avatar.png" alt="" class="avatar"/>
                    </div>
                    <a id="home" className="menu-item" href="/">Home</a>
                    <a id="about" className="menu-item" href="/about">About</a>
                    <a id="projects" className="menu-item" href="/projects">Projects</a>
                    <a id="contact" className="menu-item" href="/contact">Contact</a>
                  </ElasticMenu>
              </div>
                <main id="page-wrap"> 
                    {this.props.children} 
                </main>
          </div> 
      </>
    )
  }
}