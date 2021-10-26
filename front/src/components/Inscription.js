import React, { Component } from 'react';
import '../App.css';
import { Container, Header, Form, Input, Image, Icon, Divider } from 'semantic-ui-react'
import { Link } from 'react-router-dom';

class Inscription extends Component {
    state = {
        tempPwrd: "",
        isWrongPassword: false,
        isRightPassword: false,
        isDiscordLoading: false,
    }

    handleVerifyPassword = (e, { value }) => {
        if (value !== this.state.tempPwrd) {
            this.setState({ isWrongPassword: true });
        } else {
            this.setState({ isWrongPassword: false });
        }
    }

    render() {
        const {
            isWrongPassword,
        } = this.state;
        return (
            <Container className="form-aiko inscription">
                <div style={{ textAlign: "center", marginBottom: 20 }}>
                    <Image style={{ margin: "auto" }} alt="Logo-Aiko" src="images/logo.png" size="tiny" />
                    <Header as="h1">S'inscrire</Header>
                    <p>J'ai déjà un compte Aiko. <Link to="/login">Me connecter</Link></p>
                    <p>En vous inscrivant, vous acceptez les CGV Aiko</p>
                </div>

                <div style={{ textAlign: "center", marginBottom: 30 }}>
                    <a type="button" href="http://localhost:3001/connexion" className="ui button discord-button"><Icon name='discord' />S'inscrire avec Discord</a>
                </div>
                <Divider horizontal>Ou</Divider>
                <Form size="large">
                    <Form.Group widths='equal'>
                        <Form.Field
                            control={Input}
                            label="Prénom"
                            placeholder="Prénom"
                        />
                        <Form.Field
                            control={Input}
                            label="Nom"
                            placeholder="Nom"
                        />
                    </Form.Group>
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
                        onChange={(e, { value }) => { this.setState({ isWrongPassword: false, tempPwrd: value }) }}
                    />
                    <Form.Field
                        required
                        type="password"
                        control={Input}
                        label="Confirmation du mot de passe"
                        placeholder="Confirmation du mot de passe"
                        onChange={this.handleVerifyPassword}
                        error={isWrongPassword}
                    />
                    <div style={{ textAlign: "center", marginTop: 30 }}>
                        <Form.Button>Let's go !</Form.Button>
                    </div>
                </Form>
            </Container>
        );
    }
}

export default Inscription;
