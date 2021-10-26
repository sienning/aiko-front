import React, { Component } from 'react';
import Accueil from './components/Accueil';
import 'semantic-ui-css/semantic.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import './App.css';
import axios from 'axios';
import Connexion from './components/Connexion';
import Inscription from './components/Inscription';
import InscriptionCoach from './components/InscriptionCoach';
import MdpOublie from './components/MdpOublie';
import Footer from './components/Footer';
import NavigationBar from './components/NavigationBar';

class App extends Component {
  state = {
    url: "",
    code: "",
  }

  componentDidMount() {
    let url = window.location.href;
    let code = url.replace("http://localhost:3000", "");
    if (code.length > 0) {
      code = code.replace("/?code=", "");
    }
  }

  connexionDiscord = async (code) => {
    // const headers = {
    //   'Authorization': 
    //   'Content-Type': 'application/x-www-form-urlencoded'
    // };
    const data = {
      'client_id': "885505998972915724",
      'client_secret': "Kz44FQjQIhkA8GghyUJuL4U0cK5Qvd49",
      'grant_type': 'authorization_code',
      'code': code,
      'redirect_uri': "http://localhost:3000"
    }
    await axios.post("https://discord.com/api/v8/oauth2/token", data)
      .then(response => {
        console.log(response.data);
      })
      .catch(err => { console.log(err) })
  }

  render() {
    return (
      <Router>
        <div className="App">
          <NavigationBar />

          <Switch>
            <Route path="/sign-in-as-coach">
              <InscriptionCoach />
            </Route>
            <Route path="/login">
              <Connexion />
            </Route>
            <Route path="/sign-in">
              <Inscription />
            </Route>
            <Route path="/forgot-my-password">
              <MdpOublie />
            </Route>
            <Route exact path="/">
              <Accueil />
            </Route>
          </Switch>
        </div>
        <Footer />
      </Router>
    );
  }
}

export default App;
