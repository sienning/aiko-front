import React from 'react';
import '../../App.css'
import { Image, Icon, Button } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import NavBarCollapsed1 from './NavBarCollapsed1';
import NavBarCollapsed2 from './NavBarCollapsed2';

const NavigationBar = ({ isConnected, logout, userId, userInfos }) => {
  return (
    <div>
      <nav className="navbar">
        <div className="navbar-site-links">
          <div className="navbar-link navbar-logo">
            <Link to="/"><Image src="/images/icon.png" /></Link>
          </div>
          {
            isConnected ?
              <>
                {/* <div className="navbar-link">
                  <Link to="/players">Joueurs</Link>
                </div> */}
                <div className="navbar-link"> <Link to="/teams">Équipes</Link> </div>
                <div className="navbar-link"> <Link to="/coaching">Coaching</Link> </div>
                {/* <div className="navbar-link">
                  <Link to="/events">Évènements</Link>
                </div> */}
              </> :
              <>
                <div className="navbar-link"> <Link to="/coaching">Le coaching Aiko</Link></div>
                {/* <div className="navbar-link">
                  <Link to="/tournaments">Tournois</Link>
                </div> */}
                <div className="navbar-link"> <Link to="/teams">Équipes</Link> </div>
              </>
          }
        </div>

        <div className="navbar-right-links">
          <div className="navbar-social-links">
            <div className="navbar-social">
              <a rel="noreferrer" target="_blank" href="https://twitch.tv/"><Icon name="twitch" /></a>
            </div>
            <div className="navbar-social">
              <a rel="noreferrer" target="_blank" href="https://www.youtube.com/"><Icon name="youtube" /></a>
            </div>
            <div className="navbar-social">
              <a rel="noreferrer" target="_blank" href="https://twitter.com/home"><Icon name="twitter" /></a>
            </div>
            <div className="navbar-social">
              <a rel="noreferrer" target="_blank" href="https://discord.gg/SXhDhU6nNg"><Icon name="discord" /></a>
            </div>
          </div>

          {
            isConnected ?
              <div className='navbar-login-links'>
                {
                  console.log(userInfos.admin)
                }
                {
                  userInfos.admin === "admin" &&
                  <div className="navbar-link"><Icon name="bell outline" /></div>
                }
                <div className="navbar-link"> <Link to={`/my-profile/${userId}`}>Mon compte</Link></div>
                <div className="navbar-link"><Button onClick={() => logout()}>Déconnexion</Button></div>
              </div> :
              <div className='navbar-login-links'>
                <div className="navbar-link"><Link to="/login">Connexion</Link></div>
                <div className="navbar-link"><Link to="/sign-up">Inscription</Link></div>
              </div>
          }
        </div>
      </nav>

      {/* PETIT */}
      <NavBarCollapsed1 isConnected={isConnected} logout={logout} userId={userId} />

      {/* MOYEN */}
      <NavBarCollapsed2 isConnected={isConnected} logout={logout} userId={userId} />


    </div >
  );
}

export default NavigationBar;
