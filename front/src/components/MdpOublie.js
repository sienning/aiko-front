import React, { Component } from 'react';
import '../App.css';
import { Container, Header, Form, Input, Image, Button, Icon, Divider } from 'semantic-ui-react'
import { Link } from 'react-router-dom';

class MdpOublie extends Component {
    render() {
        return (
            <Container className="form-aiko">
                <div style={{ textAlign: "center", marginBottom: 20 }}>
                    <Image style={{ margin: "auto" }} alt="Logo-Aiko" src="images/logo.png" size="tiny" />
                    <Header as="h1">Mot de passe oublié ?</Header>
                    <p>Un mail te sera envoyé afin que tu puisses réinitialiser ton mot de passe</p>
                </div>
                <Form size="large">
                    <Form.Field
                        required
                        type="email"
                        control={Input}
                        label="Email"
                        placeholder="Email"
                    />
                    <div style={{ textAlign: "center", marginTop: 30 }}>
                        <Form.Button>Réinitialiser mon mot de passe</Form.Button>
                    </div>
                </Form>
            </Container>
        );
    }
}

export default MdpOublie;
