import React, { Component } from 'react';
import { Container, Header, Form, Grid, Button, Loader, Message } from 'semantic-ui-react'
import RedirectionConnexion from '../RedirectionConnexion';
import axios from 'axios';

class InscriptionCoach extends Component {

    state = {
        isLoadingForCurrentUser: true,
        isLoadingForNotifications: true,
        isLoadingForSending: false,
        isAlreadySent: false,
        experience: "",
        description: "",
        currentUser: {},
        listeNotifications: [],
    }

    componentDidMount() {
        this.getCurrentUser();
    }

    /**
     * Quand le bouton "Envoyer" est cliqué
     */
    handleSubmit = (e) => {
        e.preventDefault();
        const experience = e.target.experience.value;
        const description = e.target.description.value;
        console.log(experience);
        console.log(description);
        console.log(this.state.currentUser);

        const notification = {
            auteur: this.state.currentUser,
            experience: experience,
            description: description,
        }
        this.sendNotification(notification);
    }

    handleChange = (e, { name, value }) => this.setState({ [name]: value })


    getCurrentUser = async () => {
        this.setState({ isLoadingForCurrentUser: true })
        await axios.get(`/users/see-user/id_user=${window.localStorage.getItem('userId')}`, {
            headers: {
                Authorization: window.localStorage.getItem('token')
            }
        })
            .then(response => {
                console.log("currentUser : ", response.data);
                this.setState({ currentUser: response.data, isLoadingForCurrentUser: false });
                this.getNotifications(response.data)
            })
            .catch(err => {
                if (err.response.status === 401) {
                    this.props.logout()
                }
                console.log(err)
            })
    }

    getNotifications = async (currentUser) => {
        this.setState({ isLoadingForNotifications: true })
        await axios.get(`/notification-admin/see-all-notifications`, {
            headers: {
                Authorization: window.localStorage.getItem('token')
            }
        })
            .then(response => {
                this.setState({ isLoadingForNotifications: false })
                console.log(response.data)
                this.verifyCurrentUser(currentUser, response.data)
            })
            .catch(err => {
                console.log(err);
            })
    }

    verifyCurrentUser = (currentUser, notifList) => {
        let res = false;
        notifList.forEach(notif => {
            if (notif.auteur.username === currentUser.username) {
                res = true;
            }
        })

        this.setState({ isAlreadySent: res });
    }

    sendNotification = async (notification) => {
        this.setState({ isLoadingForSending: true })
        await axios.post(`/notification-admin/send-notification`, {
            notification: notification
        }, {
            headers: {
                Authorization: window.localStorage.getItem('token')
            }
        })
            .then(response => {
                this.setState({ experience: "", description: "", isAlreadySent: true, isLoadingForSending: false })
            })
            .catch(err => {
                console.log(err);
            })
    }

    render() {
        const {
            isLoadingForCurrentUser,
            isLoadingForNotifications,
            isAlreadySent,
            isLoadingForSending,
            experience,
            description
        } = this.state;
        return (
            <div className="signin-coach">
                {!this.props.isConnected && <RedirectionConnexion />}
                {
                    isLoadingForCurrentUser && isLoadingForNotifications ?
                        <Loader active inverted /> :
                        <Container>
                            <br />
                            <br />
                            <br />
                            <Header as='h1' style={{ fontSize: "55px" }}>Aikoaching</Header>
                            <Container>
                                <Grid stackable columns='2'>
                                    <Grid.Column >
                                        <div>
                                            <Header as="h5">Rejoins les rangs des big boss</Header>
                                            <p className="desc-for-coach">
                                                Vous avez déjà de l’expérience en tant que coach ?
                                                Décrivez-nous vos expériences et vos motivations
                                                pour être affilié Aikoach et bénéficier d’une visibilité
                                                et un pourcentage de rémunération plus élevé !
                                            </p>
                                        </div>
                                    </Grid.Column>
                                    <Grid.Column>
                                        <Form onSubmit={e => { this.handleSubmit(e) }}>
                                            <Form.Input
                                                value={experience}
                                                onChange={this.handleChange}
                                                required
                                                name="experience"
                                                label="Ton expérience"
                                            />
                                            <Form.TextArea
                                                value={description}
                                                onChange={this.handleChange}
                                                required
                                                name="description"
                                                label="Décris-toi et tes motivations"
                                                style={{ height: 300, borderRadius: "30px" }}
                                            />
                                            {
                                                isAlreadySent &&
                                                <Message
                                                    info
                                                    icon='send'
                                                    header='Patience !'
                                                    content='Votre demande est en cours de traitement ...'
                                                />
                                            }
                                            <Container style={{ marginTop: 60 }} textAlign="center" ><Button loading={isLoadingForSending} disabled={isAlreadySent} type="submit" content='Je postule' /></Container>
                                        </Form>
                                    </Grid.Column>
                                </Grid>
                            </Container>
                        </Container>
                }
            </div>
        );
    }
}

export default InscriptionCoach;
