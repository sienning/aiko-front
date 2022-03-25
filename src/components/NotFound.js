import React, { Component } from 'react';
import '../App.css';
import { Container, Header, Button, Image } from 'semantic-ui-react'

class NotFound extends Component {
    render() {
        return (
            <Container textAlign='center' className="form-aiko">
                <Image style={{ margin: 'auto' }} size='large' src="/images/leviathan-cry.png" />
                <div>
                    <Header as="h1">La page demandée est introuvable !</Header>
                    <Button onClick={() => {window.history.back()}}>Retour à la page précédente</Button>
                </div> 
            </Container>
        );
    }
}

export default NotFound;
