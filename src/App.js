import React, { Component } from 'react';
import Accueil from './components/Accueil';
import 'semantic-ui-css/semantic.min.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import './App.css';
import axios from 'axios';
import NavigationBar from './components/NavBarComponents/NavigationBar';
import Footer from './components/Footer';
import Connexion from './components/Connexion';
import Inscription from './components/Inscription';
import InscriptionCoach from './components/isConnected/InscriptionCoach';
// import MdpOublie from './components/MdpOublie';
import Profil from './components/isConnected/Profil';
import Joueurs from './components/isConnected/Joueurs';
import Equipes from './components/isConnected/Equipes/Equipes';
import Coaching from './components/Coaching';
import FAQ from './components/FAQ';
import NotFound from './components/NotFound';
import Tournois from './components/Tournois/Tournois';
import SeeEvent from './components/Tournois/SeeEvent';
import ProfilEdit from './components/isConnected/ProfilEdit';
import ReservationCoach from './components/isConnected/Coach/ReservationCoach';
import EditEquipe from './components/isConnected/Equipes/EditEquipe';
import ProfilCoach from './components/isConnected/ProfilCoach';
import CoachEdit from './components/isConnected/CoachEdit';

class App extends Component {
  state = {
    isLoadingForProfile: true,
    isLoading: true,
    isConnected: false,
    userInfos: {},
    email: "",
    userId: "",
  }

  componentDidMount() {
    console.log("APP");
    if (window.localStorage.getItem('email') !== null) {
      this.getProfil();

      this.setState({
        isLoading: false,
        isConnected: true,
        email: window.localStorage.getItem('email'),
        userId: window.localStorage.getItem('userId')
      });
    } else {
      this.setState({
        isConnected: false,
        isLoading: false,
        email: "",
        userInfo: {}
      });
      this.getProfil();
    }
  }

  getProfil = async () => {
    console.log("getProfil");
    this.setState({ isLoadingForProfile: true })
    console.log("getProfil");
    await axios.get(`/profil/get-profile`)
      .then(response => {
        const res = response.data;
        console.log("user", res);
        localStorage.setItem("email", res.userInfos.email);
        localStorage.setItem("token", res.token);
        localStorage.setItem("userId", res.userId);
        this.setState({
          isConnected: true,
          userInfos: res.userInfos,
          email: res.userInfos.email,
          userId: res.userId,
          isLoadingForProfile: false
        })
      })
      .catch(err => { console.log(err) })
      this.setState({ isLoadingForProfile: false })
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
      })
      .catch(err => { console.log(err) })
    window.location.replace("/");
  }

  render() {
    const {
      userInfos,
      isLoading,
      isLoadingForProfile,
      isConnected,
      userId,
    } = this.state;
    return (
      <Router>
        <div className="App">
          {
            isLoadingForProfile ? <></> :
              <NavigationBar
                userInfos={userInfos}
                logout={this.logout}
                isConnected={isConnected}
                userId={userId}
              />
          }

          <Routes>
            <Route
              path="/"
            >
              <Route
                index
                element={<Accueil isConnected={isConnected} />}
              />
              <Route
                path="coaching"
                element={<Coaching />}
              />

              <Route
                path="sign-in-as-coach"
                element={<InscriptionCoach isConnected={isConnected} />}
              />

              <Route
                path="find-a-coach"
                element={<ReservationCoach isConnected={isConnected} />}
              />

              <Route
                path="faq"
                element={<FAQ />}
              />

              <Route
                path="tournaments"
                element={<Tournois />}
              />

              <Route
                path="event"
                element={<SeeEvent />}
              >
                <Route path=":id" element={<SeeEvent />} />
              </Route>

              {
                isLoading ?
                  null :
                  <Route
                    path="teams"
                    element={<Equipes userId={userId} logout={this.logout} isConnected={isConnected} />}
                  />
              }

              {/* IL FAUT NE PAS ÊTRE CONNECTÉ */}
              {
                isConnected ? null :
                  <Route
                    path="login"
                    element={<Connexion getUserInfos={this.getUserInfosLogin} />}
                  />
              }
              {
                isConnected ? null :
                  <Route
                    path="sign-up"
                    element={<Inscription login={this.login} />}
                  />
              }

              {/* IL FAUT ÊTRE CONNECTÉ */}
              {
                isConnected ?
                  <Route
                    path="my-profile"
                    element={<Profil userId={userId} />}
                  >
                    <Route path=":id" element={<Profil userId={userId} />} />
                  </Route>
                  : null
              }
              {
                isConnected ?
                  <Route
                    path="players"
                    element={<Joueurs />}
                  />
                  : null
              }
              {
                isConnected ?
                  <Route
                    path="faq"
                    element={<FAQ />}
                  />
                  : null
              }
              {
                isConnected ?
                  <Route
                    path="edit-team"
                    element={<EditEquipe logout={this.logout} userId={userId} />}
                  >
                    <Route path=":id" element={<EditEquipe logout={this.logout} userId={userId} />} />
                    <Route path="new" element={<EditEquipe logout={this.logout} userId={userId} />} />
                  </Route>
                  : null
              }
              {
                isConnected ?
                  <Route path="edit-profile" element={<ProfilEdit userId={userId} />} >
                    <Route
                      path=":id"
                      element={<ProfilEdit userId={userId} />}
                    />
                  </Route> : null
              }
              {
                isConnected ?
                  <Route
                    path="my-coach" element={<ProfilCoach userId={userId} />} >
                    <Route
                      path=":id"
                      element={
                        <ProfilCoach
                          userId={userId}
                        />
                      }
                    />
                  </Route>
                  : null
              }
              {
                isConnected ?
                  <Route path="edit-coach" element={<CoachEdit userId={userId} />} >
                    <Route
                      path=':id'
                      element={
                        <CoachEdit
                          userId={userId}
                        />
                      }
                    />
                  </Route>
                  : null
              }
              <Route path="*" element={<NotFound />} />
            </Route>
          </Routes>
        </div>
        <Footer />
      </Router>
    );
  }
}

export default App;
