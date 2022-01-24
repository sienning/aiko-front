import React, { Component } from 'react';
import '../../App.css';
import { Container, Header, Image, Grid, Form, Input } from 'semantic-ui-react'
import axios from 'axios';

class Profil extends Component {
    state = {
        isLoading: false,
        userId: "",
        userInfos: {},
    }

    componentDidMount() {
        this.setState({ userInfos: this.props.userId });
        this.getUserInfos(this.props.userId);
    }

    getUserInfos = async (id) => {
        this.setState({ isLoading: true });
        await axios.get(`/users/see-user/id_user=${id}`, {
            headers: {
                Authorization: window.localStorage.getItem('token')
            }
        })
            .then(response => {
                this.setState({ userInfos: response.data, isLoading: false });
            })
            .catch(err => console.log(err))

    }
    render() {
        const {
            isLoading,
            userInfos,
        } = this.state;
        return (
            <Container>
                <div style={{ textAlign: "center", marginBottom: 20 }}>
                    <Image style={{ margin: "auto" }} alt="Logo-Aiko" src="/images/logo.png" size="tiny" />
                    <Header as="h1">Mon compte</Header>
                    <p>Bienvenu(e), {userInfos.username} !</p>
                </div>
                <Grid columns={2}>
                    <Grid.Column width={3}>
                        {
                            userInfos.discordId ?
                            <Image circular style={{ margin: "auto" }} alt="Logo-Aiko" src={`https://cdn.discordapp.com/avatars/${userInfos.discordId}/${userInfos.avatar}`} size="small" />
                            : <Image circular style={{ margin: "auto" }} alt="Logo-Aiko" src={`${process.env.REACT_APP_SERVER}images/${userInfos.avatar}`} size="small" />
                        }
                    </Grid.Column>
                    <Grid.Column width={11}>
                        <Form loading={isLoading}>
                            <Form.Group widths="equal">
                                <Form.Field>
                                    <label>Prénom</label>
                                    <Input
                                        defaultValue={userInfos.prenom}
                                    />
                                </Form.Field>
                                <Form.Field>
                                    <label>Nom</label>
                                    <Input
                                        defaultValue={userInfos.nom}
                                    />
                                </Form.Field>
                            </Form.Group>
                            <Form.Group widths="equal">
                                <Form.Field>
                                    <label>Login</label>
                                    <Input
                                        defaultValue={userInfos.username}
                                    />
                                </Form.Field>
                                <Form.Field>
                                    <label>Email</label>
                                    <Input
                                        defaultValue={userInfos.email}
                                    />
                                </Form.Field>
                            </Form.Group>
                        </Form>
                    </Grid.Column>
                </Grid>
            </Container>
        );
    }
}

export default Profil;
