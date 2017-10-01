import React, {  Component } from 'react';
import ServerCalls from './ServerCalls'
import './Teams.css'
class Server extends Component {

  state={
    plTeams: [],
  }

  componentWillMount(){
    ServerCalls.getTeams(this.showData)
  }

  showData = (response) =>{
    this.setState({
      plTeams: response,
    })
    //console.dir(response)
  }



  render(){

    const teams = this.state.plTeams
        ? (this.state.plTeams.map((team, idx) => (
          <tr key={idx}>
            <td>{team.name}</td>
            <td><img src={team.logo} alt="logo" className="logos"/></td>
          </tr>
        )))
        : <tr></tr>

    return(

      <div className="container-fluid">
        <table className='table table-bordered table-striped table-hover table-inverse'>
          <thead>
            <tr>
              <th>Name</th>
              <th>Logo</th>
            </tr>
          </thead>
          <tbody>
            {teams}
          </tbody>
        </table>
      </div>

    )
  }


}

export default Server;
