import React, {Component} from 'react'


class NavigationBar extends Component{

  state={
    tabSelected : 1,
  }

  componentWillMount(){
  }
  homeChoosen = () =>{
    sessionStorage.tabOpen = '1';
    this.props.history.push('/home')
    this.forceUpdate();
  }

  videoplayerChosen = () => {
    sessionStorage.tabOpen = '3';
    this.props.history.push('/videoplayer')
    this.forceUpdate();
  }

  speechChosen = () =>{
    sessionStorage.tabOpen = '4';
    this.props.history.push('/speech')
    this.forceUpdate();
  }

  controllerChosen = () =>{
    sessionStorage.tabOpen = '2';
    this.props.history.push('/controller')
    this.forceUpdate();
  }

  render(){
    return(

      <div className="header-navbar">
        <header className="container">
         <div className="row">
           <nav className="text-right">
            <p className={sessionStorage.tabOpen === '1' ? "active-nav" : ""} onClick={this.homeChoosen}>Home</p>
            <p className={sessionStorage.tabOpen === '2' ? "active-nav" : ""} onClick={this.controllerChosen}>Robot Controller</p>
        		<p className={sessionStorage.tabOpen === '3' ? "active-nav" : ""} onClick={this.videoplayerChosen}>Videoplayer</p>
            <p>contact</p>
         	</nav>
         </div>
       </header>
      </div>
    )
  }
}

export default NavigationBar;
