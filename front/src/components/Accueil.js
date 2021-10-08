import React, { Component } from 'react';
import { Container, Image } from 'semantic-ui-react'

class Accueil extends Component {

    render() {
        return (
            <div  className="accueil-body">
                <Container textAlign="center" >
                    <Image src="images/logo.png" size="large" />
                </Container >
            </div>
        );
    }
}

export default Accueil;
