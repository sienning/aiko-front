import React, { Component } from 'react';
import '../App.css'
import { Image, Icon } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

class NavigationBar extends Component {
    render() {
        return (
            <nav className="navbar">
            <div className="navbar-site-links">
              <div className="navbar-link navbar-logo" style={{ marginLeft: 100 }}>
                <Link to="/">
                  <Image src="./images/icon.png" size="mini" />
                </Link>
              </div>
              <div className="navbar-link">
                <Link to="/coaching">Le coaching Aiko</Link>
              </div>
              <div className="navbar-link">
                <Link to="/evenements">Évènements</Link>
              </div>
            </div>

            <div className="navbar-social-links" style={{ marginRight: 100 }}>
              <div className="navbar-link">
                <Link to="/login">Connexion</Link>
              </div>
              <div className="navbar-link">
                <Link to="/sign-in">Inscription</Link>
              </div>
              <div className="navbar-social">
                <a rel="noreferrer" target="_blank" href="https://discord.com/"><Icon name="youtube play" /></a>
              </div>
              <div className="navbar-social">
                <a rel="noreferrer" target="_blank" href="https://twitter.com/home"><Icon name="twitter" /></a>
              </div>
              <div className="navbar-social">
                <a rel="noreferrer" target="_blank" href="https://discord.gg/SXhDhU6nNg"><Icon name="discord" /></a>
              </div>
            </div>
          </nav>
        );
    }
}

export default NavigationBar;
