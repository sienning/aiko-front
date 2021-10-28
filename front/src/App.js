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
import Profil from './components/Profil';

class App extends Component {
  state = {
    isConnected: false,
    url: "",
    code: "",
    userInfos: {},
    email: "",
    userId: "",
  }

  componentDidMount() {
    console.log("APP");
    console.log(window.localStorage.getItem('email'));
    if (window.localStorage.getItem('email') !== null) {
      console.log("userId : ", window.localStorage.getItem('userId'));
      this.setState({
        isConnected: true,
        email: window.localStorage.getItem('email'),
        userId: window.localStorage.getItem('userId')
      });
    } else {
      this.setState({
        isConnected: false,
        email: "",
        userInfo: {}
      });
    }
  }

  getUserInfos = (userInfos) => {
    console.log("===== getUserInfos =====");
    console.log("userInfos", userInfos);
    this.setState({ userInfos: userInfos, isConnected: true });
  }

  getUserInfosLogin = (userInfos, id, email) => {
    console.log("===== getUserInfos =====");
    console.log("userInfos", userInfos);
    this.setState({ userId: id, email: email, userInfos: userInfos, isConnected: true });
  }

  login = async (email, password) => {
    await axios.post(`${process.env.REACT_APP_SERVER}/connexion/login`, {
      email: email,
      password: password
    })
      .then(response => {
        const res = response.data;
        let token = res.token, userId = res.userId, userInfos = res.userInfos;
        localStorage.setItem("email", email);
        localStorage.setItem("token", token);
        localStorage.setItem("userId", userId);
        this.getUserInfos(userInfos);
        window.location.replace("/");
      })
      .catch(err => {
        console.log(err)
      })
  }

  logout = () => {
    this.setState({ isConnected: false, userInfos: {}, email: "", userId: "" });
    localStorage.clear();
    window.location.replace("/");
  }

  connexionDiscord = async (code) => {

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
    const {
      isConnected,
      userInfos,
      userId,
    } = this.state;
    return (
      <Router>
        <div className="App">
          <NavigationBar
            logout={this.logout}
            isConnected={isConnected}
            userId={userId}
          />

          <Switch>
            <Route path="/sign-in-as-coach">
              <InscriptionCoach />
            </Route>
            {
              isConnected ? null :
                <Route path="/login">
                  <Connexion
                    getUserInfos={this.getUserInfosLogin}
                  />
                </Route>
            }
            {
              isConnected ? null :
                <Route path="/sign-in">
                  <Inscription
                    login={this.login}
                  />
                </Route>
            }
            {
              isConnected ?
                <Route path="/my-profile/:id">
                  <Profil
                    userId={userId}
                  />
                </Route> : null
            }
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
