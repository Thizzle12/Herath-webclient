import React, {  Component } from 'react';
import './Supernice.css'
import VideoPlayer from './video/VideoPlayer'
import {Router, Route, Switch} from 'react-router';
import createBrowserHistory from 'history/createBrowserHistory';
import Server from './Server';
import AppHeader from './appheader/AppHeader'
import NavigationBar from './appheader/NavigationBar'
import MalcolmUserInterface from './robot-controller/MalcolmUserInterface'
import './App.css';
const history = createBrowserHistory();


class App extends Component {

  componentWillMount(){
    sessionStorage.tabOpen = 1;
  }


  render() {


    return (
      <div >
        <AppHeader/>
        <NavigationBar history={history}/>
        <div>

          <div className="container-fluid">

            <Router history={history}>
              <Switch>
                <Route path="/controller" component={() => (<MalcolmUserInterface history={history}/>)}/>
                <Route path="/videoplayer" component={() => (<VideoPlayer history={history}/>)}/>
                <Route path="/server" component={() => (<Server history={history}/>)}/>
              </Switch>
            </Router>
          </div>
        </div>
        <footer>
          <span>&copy; Herath CO. Thizzle inc.</span>
        </footer>
      </div>
    );
  }
}


export default App;
