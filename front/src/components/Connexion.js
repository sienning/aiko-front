import React, { Component } from 'react';
import '../App.css'
import { Container, Header, Form, Input, Image, Icon, Divider } from 'semantic-ui-react'
import { Link } from 'react-router-dom';

class Connexion extends Component {
    render() {
        return (
            <Container className="form-aiko connexion">
                <div style={{ textAlign: "center", marginBottom: 20 }}>
                    <Image style={{ margin: "auto" }} alt="Logo-Aiko" src="images/logo.png" size="tiny" />
                    <Header as="h1">Se connecter</Header>
                    <p>Je n'ai pas de compte Aiko. <Link to="/sign-in">M'inscrire</Link></p>
                </div>
                <div style={{ textAlign: "center", marginBottom: 30 }}>
                    <a type="button" href="http://localhost:3001/connexion" className="ui button discord-button"><Icon name='discord' />Se connecter avec Discord</a>
                </div>
                <Divider horizontal>Ou</Divider>
                <Form size="large">
                    <Form.Field
                        required
                        type="email"
                        control={Input}
                        label="Email"
                        placeholder="Email"
                    />
                    <Form.Field
                        required
                        type="password"
                        control={Input}
                        label="Mot de passe"
                        placeholder="Mot de passe"
                    />
                    <Link to="/forgot-my-password">Mot de passe oublié ?</Link>
                    <div style={{ textAlign: "center", marginTop: 30 }}>
                        <Form.Button>Let's go !</Form.Button>
                    </div>
                </Form>
            </Container>
        );
    }
}

export default Connexion;
