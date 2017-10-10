import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ReactDOM from 'react-dom';
import { Button } from 'react-bootstrap';
import { BrowserRouter } from 'react-router-dom';
import { Switch, Route } from 'react-router-dom';
import { Link } from 'react-router-dom'

const linkedIn = (
  <a href="https://www.linkedin.com/in/myrikay/" target="_blank" rel="noopener noreferrer"><span className="glyphicon glyphicon-user"></span> linkedIn</a>
);
const codePen = (
  <a href="https://codepen.io/kayleigh114/" target="_blank" rel="noopener noreferrer"><span className="glyphicon glyphicon-wrench"></span> CodePen</a>
);
const gitHub = (
  <a href="https://github.com/kayleigh114" target="_blank" rel="noopener noreferrer"><span className="glyphicon glyphicon-pencil"></span> GitHub</a>
);

const Main = () => (
  <main>
    <Switch>
      <Route path='/aboutme' component={AboutMe}/>
      <Route path='/' component={Home}/>
    </Switch>
  </main>
);

const Home = () => (
  <div className="home">
    <p className="madeBy">
      Made with Bootstrap and React<br></br>by Kayleigh
    </p>
  </div>
);

const AboutMe = () => (
  <div>
    <div>
      <figure>
        <img className="picture" src="kayleigh.jpg" alt="Kayleigh"></img>
      </figure>
    </div>
    <div>
        <p><u>E D U C A T I O N</u><br></br>
        <b>Texas State University</b> – San Marcos (Fall 2011 – 2015)<br></br>
        Biology Major<br></br>
        Math Minor <br></br>
        </p>

        <p><u>E X P E R I E N C E</u>
        <br></br><b>Goodshop</b> – Software Engineering Intern (February 2017 – May 2017)
        <br></br><b>Goodshop</b> – Customer Service (October 2016 – December 2016)
        <br></br><b>Manpower</b> – Temp Administrative Assistant (May 2016 – July 2016)</p>
    </div>
  </div>
);

class App extends Component {
  render() {
    return (
      <div className="App">
        <nav className="navbar navbar-inverse">
          <div className="container-fluid">
            <div className="navbar-header">
              <a className="navbar-brand"><Link to='/'>Kayleigh Nichols</Link></a>
            </div>
            <ul className="nav navbar-nav">
              <li><Link to='/aboutme'>About Me</Link></li>
            </ul>
            <ul className="nav navbar-nav navbar-right">
              <li>{gitHub}</li>
              <li>{linkedIn}</li>

            </ul>
          </div>
        </nav>
        <div className="container-fluid">
          <Main />
        </div>
      </div>
    );
  }
}

export default App;
