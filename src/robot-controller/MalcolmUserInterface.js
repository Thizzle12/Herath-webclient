import React, {  Component } from 'react';
import ServerCalls from '../ServerCalls'
import './MalcolmController.css';
class MalcolmUserInterface extends Component{

  state={
    ip : "0.0.0.0",
  }

  componentWillMount(){

  }

    sendCommand = (command) =>{
    ServerCalls.sendDrivingCommand(command, this.success);
  }

  changeIp = (e, changeIdx) =>{
    var tempIp;
    var res;
    res = this.state.ip.split('.');
    switch (changeIdx) {
      case 1:
        tempIp = e.target.value + "." + res[1] + "." + res[2] + "." + res[3];
        break;
      case 2:
        tempIp =  res[0] + "." + e.target.value + "." + res[2] + "." + res[3];
        break;
      case 3:
        tempIp =  res[0] + "." + res[1] + "." + e.target.value + "." + res[3];
        break;
      case 4:
        tempIp =  res[0] + "." + res[1] + "." + res[2] + "." + e.target.value;
        break;
      default:
        break;
    }

    this.setState({
      ip : tempIp,
    });
  }

  connect = () =>{
    ServerCalls.connectToMalcolm(this.state.ip, this.success);
  }

  disconnect = () =>{
    ServerCalls.disconnectFromMalcolm(this.success);
  }

  success(response){

  }

  render(){

    return(

      <div>

        <div className="ip-connection">
        <div className="wrapper">
          <label>Ip: </label>
          <br/>
          <div className="form-group ip-input">
            <input type="text" maxLength="3" className="form-control" onChange={(e) => this.changeIp(e,1)}/>
          </div>
          <div className="form-group ip-input">
            <input type="text" maxLength="3" className="form-control" onChange={(e) => this.changeIp(e, 2)}/>
          </div>
          <div className="form-group ip-input">
            <input type="text" maxLength="3" className="form-control" onChange={(e) => this.changeIp(e, 3)}/>
          </div>
          <div className="form-group ip-input">
            <input type="text" maxLength="3" className="form-control" onChange={(e) => this.changeIp(e, 4)}/>
          </div>
          <div className="form-group">
            <button className="btn btn-success" onClick={this.connect}>Connect</button>
          </div>
        </div>
        </div>
        <div className="control-buttons">

          <div className="form-group col-md-2 button-div">
            <button className="btn btn-success control-btn" onClick={() => this.sendCommand('forward')}>Go Forward</button>
          </div>
          <div className="form-group button-div">
            <button className="btn btn-success control-btn" onClick={() => this.sendCommand('left')}>Turn Left</button>

            <button className="btn btn-success control-btn" onClick={() => this.sendCommand('stop')}>Stop</button>

            <button className="btn btn-success control-btn" onClick={() => this.sendCommand('right')}>Turn Right</button>
          </div>
          <div className="form-group col-md-2 button-div">
            <button className="btn btn-success control-btn" onClick={() => this.sendCommand('backward')}>Go Backward</button>
          </div>

        </div>
        <div className="form-group disconnect-btn">
          <button className="btn btn-danger " onClick={() => this.sendCommand('quit')}>Disconnect</button>
        </div>
      </div>
    );
  }

}

export default MalcolmUserInterface;
