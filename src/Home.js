import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Hense from './img/hense1.jpg';
import Beer from './img/drinks.jpg'
import './Home.css';
class Home extends Component {


    render() {
        return (
          <div className="carousel slide">
          <section className="jumbotron">
            <div className="container">
              <div className="row text-center">
                <h2>DTU</h2>
                <h3>This Year is Now</h3>
                <a className="btn btn-primary">See all</a>
              </div>
            </div>
          </section>
          <section className="container">
             <div className="row">
               <div className="col-sm-6 subpage">
                 <h3>Parties</h3>
                 <img src={Beer}/>
               </div>
               <div className="col-sm-6 subpage">
                 <h3>Friends</h3>
                 <img src={Hense}/>
               </div>
            </div>
          </section>
          </div>
        );
    }
}

export default Home;
