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
import NavigationBar from './components/NavBarComponents/NavigationBar';
import Footer from './components/Footer';
import Connexion from './components/Connexion';
import Inscription from './components/Inscription';
import InscriptionCoach from './components/InscriptionCoach';
import MdpOublie from './components/MdpOublie';
import Profil from './components/isConnected/Profil';
import Joueurs from './components/isConnected/Joueurs';
import Equipes from './components/isConnected/Equipes';
import Coaching from './components/Coaching';
import FAQ from './components/FAQ';
import NotFound from './components/NotFound';
import Tournois from './components/Tournois';

class App extends Component {
  state = {
    isConnected: false,
    userInfos: {},
    email: "",
    userId: "",
  }

  componentDidMount() {
    if (window.localStorage.getItem('email') !== null) {
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
      this.getProfil();
    }
  }

  getProfil = async () => {
    await axios.get(`/profil/get-profile`)
      .then(response => {
        const res = response.data;
        console.log(res);
        localStorage.setItem("email", res.userInfos.email);
        localStorage.setItem("token", res.token);
        localStorage.setItem("userId", res.userId);
        this.setState({
          isConnected: true,
          userInfos: res.userInfos,
          email: res.userInfos.email,
          userId: res.userId,
        })
      })
      .catch(err => { console.log(err) })
  }

  getUserInfos = (userInfos) => {
    this.setState({ userInfos: userInfos, isConnected: true });
  }

  getUserInfosLogin = (userInfos, id, email) => {
    this.setState({ userId: id, email: email, userInfos: userInfos, isConnected: true });
  }

  login = async (email, password) => {
    await axios.post(`/connexion/login`, {
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
    this.logoutDiscord();
    this.setState({ isConnected: false, userInfos: {}, email: "", userId: "" });
    localStorage.clear();
  }

  logoutDiscord = async () => {
    console.log("logoutDiscord");
    await axios.get(`/profil/empty-profile`, {
      headers: {
        Authorization: window.localStorage.getItem('token')
      }
    })
      .then(response => {
        console.log(response.data);
        window.location.replace("/");
      })
      .catch(err => { console.log(err) })
  }

  render() {
    const {
      isConnected,
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
            <Route exact path="/">
              <Accueil />
            </Route>

            <Route path="/coaching">
              <Coaching />
            </Route>
            <Route path="/sign-in-as-coach">
              <InscriptionCoach />
            </Route>
            <Route path="/faq">
              <FAQ />
            </Route>
            <Route path="/team">
            </Route>
            <Route path="/forgot-my-password">
              <MdpOublie />
            </Route>

            <Route path="/tournaments">
              <Tournois
              />
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
                <Route path="/sign-up">
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
                </Route>
                : null
            }
            {
              isConnected ?
                <Route path="/players">
                  <Joueurs />
                </Route>
                : null
            }
            {
              isConnected ?
                <Route path="/teams">
                  <Equipes />
                </Route>
                : null
            }

            {
              isConnected ?
                <Route path="/faq">
                  <FAQ />
                </Route>
                : null
            }
            <Route>
              <NotFound />
            </Route>

          </Switch>
        </div>
        <Footer />
      </Router>
    );
  }
}

export default App;
