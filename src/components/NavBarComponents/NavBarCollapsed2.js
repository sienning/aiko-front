import React from 'react';
import '../../App.css'
import { Image, Icon, Button } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

// MOYEN
const NavBarCollapsed2 = ({ isConnected, logout, userId }) => {

    const handleHamburgerClick = e => {
        let bg = document.getElementById('black-bg-2');
        if (bg.style.display === "flex") {
            bg.style.display = "none";
        } else
            bg.style.display = "flex";
    }

    const handleBgClick = e => {
        let bg = document.getElementById('black-bg-2');
        let input = document.getElementById('hamburger-input-2');
        if (input.checked) {
            bg.style.display = "none";
            input.checked = false;
        }
    }

    return (
        <div className='navbar-responsive-2'>
            <div onClick={handleBgClick} id='black-bg-2' style={{ display: 'none' }} className='black-bg'></div>
            <div className="container nav-container">
                <input onChange={handleHamburgerClick} className="checkbox" type="checkbox" name="" id="hamburger-input-2" />
                <div className="hamburger-lines">
                    <span className="line line1"></span>
                    <span className="line line2"></span>
                    <span className="line line3"></span>
                </div>
                <div className="logo">
                    <Image src="/images/logo.png" size="tiny" />
                </div>

                <div className="menu-items">
                    <ul>
                        <li><Link onClick={handleBgClick} to="/">Accueil</Link></li>
                        <li><Link onClick={handleBgClick} to="/coaching">Le coaching Aiko</Link></li>
                        <li><Link onClick={handleBgClick} to="/tournaments">Tournois</Link></li>
                        <li><Link onClick={handleBgClick} to="/my-team">Mon équipe</Link></li>
                    </ul>
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


                    </div>
                </div>
            </div>

            {
                isConnected ?
                    <div className='navbar-login-links'>
                        <div className="navbar-link">
                            <Link to={`/my-profile/${userId}`}>Mon compte</Link>
                        </div>
                        <div className="navbar-link">
                            <Button onClick={() => logout()}>Déconnexion</Button>
                        </div>
                    </div> :
                    <div className='navbar-login-links'>
                        <div className="navbar-link">
                            <Link to="/login">Connexion</Link>
                        </div>
                        <div className="navbar-link">
                            <Link to="/sign-up">Inscription</Link>
                        </div>
                    </div>
            }
        </div>
    )
}
export default NavBarCollapsed2;
