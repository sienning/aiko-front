import React, { Component } from 'react';
import '../App.css';
import { Container, Header, Form, Input, Image } from 'semantic-ui-react'

class MdpOublie extends Component {

    handleSubmit = e => {
        e.preventDefault();
    }

    render() {
        return (
            <Container style={{ marginTop: 20 }} className="form-aiko">
                <div style={{ textAlign: "center", marginBottom: 20 }}>
                    <Image style={{ margin: "auto" }} alt="Logo-Aiko" src="images/aiko-leviathan.png" size="small" />
                    <Header as="h1">Mot de passe oublié ?</Header>
                    <p>Un mail te sera envoyé afin que tu puisses réinitialiser ton mot de passe.</p>
                </div>
                <Form onSubmit={e => {this.handleSubmit(e)}} style={{ margin: "auto", width: "600px" }}>
                    <Form.Field
                        name="email"
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
