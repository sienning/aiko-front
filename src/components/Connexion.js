import React, { Component } from 'react';
import '../App.css'
import { Container, Header, Form, Input, Image, Icon, Divider, Message, Button } from 'semantic-ui-react'
import { Link } from 'react-router-dom';
import axios from 'axios';

class Connexion extends Component {
    state = {
        isFormLoading: false,
        isFormError: false,
        errorMessage: "Connexion impossible.",
    }

    handleOnSubmit = (e) => {
        this.setState({ isFormLoading: false });
        this.setState({ isFormError: false });
        this.login(e.target.email.value, e.target.password.value)
    }

    login = async (email, password) => {
        this.setState({ isFormLoading: true });
        console.log(password);
        await axios.post(`/connexion/login`, {
            email: email,
            password: password
        })
            .then(response => {
                this.setState({ isFormLoading: false });
                const res = response.data;
                if (res.status === "error") {
                    this.setState({ isFormError: true, errorMessage: "L'adresse mail ou le mot de passe est inexistant." })
                } else {
                    let token = res.token, userId = res.userId, userInfos = res.userInfos;
                    localStorage.setItem("email", email);
                    localStorage.setItem("token", token);
                    localStorage.setItem("userId", userId);
                    this.props.getUserInfos(userInfos, userId, email);
                }
            })
            .catch(err => {
                this.setState({ isFormLoading: false, isFormError: true });
                console.log(err)
            })
    }
    handleLoginDiscord = async () => {
        await axios.get(`/connexion/`)
            .then(response => {
                console.log(response);
            })
            .catch(err => {
                console.log(err)
            })
    }



    render() {
        const {
            isFormLoading,
            isFormError,
            errorMessage,
        } = this.state;
        return (
            <div className="form-aiko connexion">
                <Container>
                    <div style={{ textAlign: "center", marginBottom: 20 }}>
                        <Image style={{ margin: "auto" }} alt="Logo-Aiko" src="images/logo.png" size="tiny" />
                        <Header as="h1">Se connecter</Header>
                        <p>Je n'ai pas de compte Aiko. <Link to="/sign-up">M'inscrire</Link></p>
                    </div>
                    <div style={{ textAlign: "center", marginBottom: 30 }}>
                        <a type="button" href={`${process.env.REACT_APP_SERVER}connexion/`} className="ui button discord-button"><Icon name='discord' />Se connecter avec Discord</a>
                        {/* <Button type="button" onClick={() => { this.handleLoginDiscord() }} className="ui button discord-button"><Icon name='discord' />Se connecter avec Discord</Button> */}
                    </div>
                    <Divider horizontal>Ou</Divider>
                    <Form loading={isFormLoading} error={isFormError} onSubmit={this.handleOnSubmit} size="large">
                        <Form.Field
                            name="email"
                            required
                            type="email"
                            control={Input}
                            label="Email"
                            placeholder="Email"
                        />
                        <Form.Field
                            name="password"
                            required
                            type="password"
                            control={Input}
                            label="Mot de passe"
                            placeholder="Mot de passe"
                        />
                        {/* <Link to="/forgot-my-password">Mot de passe oublié ?</Link> */}
                        <Message
                            error
                            header='Une erreur est survenue !'
                            content={errorMessage}
                        />
                        <div style={{ textAlign: "center", marginTop: 30, marginBottom: 30 }}>
                            <Form.Button type="submit">Je me connecte</Form.Button>
                        </div>

                    </Form>
                </Container>
                <div className='frise'> <Image alt="frise-aiko" src="/images/frise-mini.png" /></div>
            </div>
        );
    }
}

export default Connexion;
