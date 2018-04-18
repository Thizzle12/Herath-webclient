import React, {Component} from 'react'
import Logo from "../img/testlogo.PNG";
class AppHeader extends Component{

  render(){

    return(

      <div className="app-header">
        <div className="logo">
          <img  src={Logo}/>
        </div>
        <form action="" className="search-form search-bar">
            <div className="form-group">
            <input type="text" className="form-control" placeholder="search"/>

            </div>
        </form>

      </div>

    )
  }
}

export default AppHeader
