import React, { Component } from 'react';
import '../App.css';
import { Container, Header, Image } from 'semantic-ui-react'
import { Link } from 'react-router-dom';

class RedirectionConnexion extends Component {
    render() {
        return (
            <div className='redirection-connexion'>
                <Container className='content' textAlign='center'>
                    <Image size="small" src="images/aiko-leviathan.png" />
                    <Header>Il faut se connecter ...</Header>
                    <p>Pour accéder à cette page, connectez-vous !</p>
                    <Link className="ui button" to="/login">Je me connecte</Link>
                    
                    <p><br/>Pas encore inscrit ? <Link to="/sign-up" >Inscrivez-vous</Link></p>
                </Container>
            </div>
        );
    }
}

export default RedirectionConnexion;
