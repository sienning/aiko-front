import React, { Component } from 'react';
import { Container, Image } from 'semantic-ui-react'

class Equipes extends Component {
    render() {
        return (
            <div>
                <Container textAlign="center" >
                    <Image style={{ margin: "auto" }} src="images/logo.png" size="large" />
                </Container >
            </div>
        );
    }
}

export default Equipes;
