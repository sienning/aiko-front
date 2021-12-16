import React from 'react';
import '../App.css'
import { Image, Icon, Button } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

const NavigationBar = ({ isConnected, logout, userId }) => {
  return (
    <nav className="navbar">
      <div className="navbar-site-links">
        <div className="navbar-link navbar-logo" style={{ marginLeft: 100 }}>
          <Link to="/"><Image src="/images/icon.png" size="mini" /></Link>
        </div>
        {
          isConnected ?
            <>
              <div className="navbar-link">
                <Link to="/players">Joueurs</Link>
              </div>
              <div className="navbar-link">
                <Link to="/teams">Équipes</Link>
              </div>
              <div className="navbar-link">
                <Link to="/coaches">Coaching</Link>
              </div>
              <div className="navbar-link">
                <Link to="/events">Évènements</Link>
              </div>
              <div className="navbar-link">
                <Link to="/faq">F.A.Q.</Link>
              </div>
            </> :
            <>
              <div className="navbar-link">
                <Link to="/coaching">Le coaching Aiko</Link>
              </div>
              <div className="navbar-link">
                <Link to="/evenements">Évènements</Link>
              </div>
              <div className="navbar-link">
                <Link to="/faq">F.A.Q.</Link>
              </div>
            </>
        }
      </div>

      <div className="navbar-social-links" style={{ marginRight: 100 }}>
        {
          isConnected ?
            <>
              <div className="navbar-link">
                <Link to={`/my-profile/${userId}`}>Mon compte</Link>
              </div>
              <div className="navbar-link">
                <Button onClick={() => logout()}>Déconnexion</Button>
              </div>
            </> :
            <>
              <div className="navbar-link">
                <Link to="/login">Connexion</Link>
              </div>
              <div className="navbar-link">
                <Link to="/sign-up">Inscription</Link>
              </div>
            </>
        }

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
    </nav >
  );
}

export default NavigationBar;
