import React from 'react';
import '../../App.css'
import { Image, Icon, Button } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

const NavBarCollapsed1 = ({ isConnected, logout, userId }) => {

    const handleHamburgerClick = e => {
        let bg = document.getElementById('black-bg-1');
        if (bg.style.display === "flex") {
            bg.style.display = "none";
            document.getElementsByTagName('body')[0].style.overflow = "";
        } else {
            bg.style.display = "flex";
            console.log(document.getElementsByTagName('body')[0]);
            document.getElementsByTagName('body')[0].style.overflow = "hidden";
        }

    }

    const handleBgClick = e => {
        let bg = document.getElementById('black-bg-1');
        let input = document.getElementById('hamburger-input-1');
        if (input.checked) {
            bg.style.display = "none";
            input.checked = false;
            document.getElementsByTagName('body')[0].style.overflow = "";
        }
    }

    return (
        <div className='navbar-responsive-1'>
            <div onClick={handleBgClick} id='black-bg-1' style={{ display: 'none' }} className='black-bg'></div>

            <div className="container nav-container">
                <input onChange={handleHamburgerClick} className="checkbox" type="checkbox" name="" id="hamburger-input-1" />
                <div className="hamburger-lines">
                    <span className="line line1"></span>
                    <span className="line line2"></span>
                    <span className="line line3"></span>
                </div>
                <div className="logo">
                    <Link to="/"><Image src="/images/logo.png" size="tiny" /></Link>
                </div>
                <div className="menu-items">
                    <ul>
                        <li><Link onClick={handleBgClick} to="/">Accueil</Link></li>
                        <li><Link onClick={handleBgClick} to="/coaching">Le coaching Aiko</Link></li>
                        <li><Link onClick={handleBgClick} to="/tournaments">Tournois</Link></li>
                        <li><Link onClick={handleBgClick} to="/my-team">Mon équipe</Link></li>
                        {
                            isConnected ?
                                <>
                                    <li className='purple-link'>
                                        <Link onClick={handleBgClick} to={`/my-profile/${userId}`}>Mon compte</Link>
                                    </li>
                                    <li className='purple-link'>
                                        <Button onClick={() => logout()}>Déconnexion</Button>
                                    </li>
                                </>
                                :
                                <>
                                    <li className='purple-link'>
                                        <Link onClick={handleBgClick} to="/login">Connexion</Link>
                                    </li>
                                    <li className='purple-link'>
                                        <Link onClick={handleBgClick} to="/sign-up">Inscription</Link>
                                    </li>
                                </>
                        }
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
        </div>
    )
}
export default NavBarCollapsed1;
