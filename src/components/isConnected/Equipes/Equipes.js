import axios from 'axios';
import React, { Component } from 'react';
import { Container, Grid, Loader, Segment } from 'semantic-ui-react'
import RedirectionConnexion from '../../RedirectionConnexion';
import EquipeCard from './EquipeCard';
import FiltreEquipe from './FiltreEquipe';

class Equipes extends Component {
    state = {
        isLoadingForCurrentUser: true,
        isLoadingForListeEquipes: true,
        listeEquipes: [],
        currentUser: {},
    }

    componentDidMount() {

        this.getCurrentUser();
        this.getListeEquipes();
    }

    getCurrentUser = async () => {
        this.setState({ isLoadingForCurrentUser: true })
        await axios.get(`/users/see-user/id_user=${window.localStorage.getItem('userId')}`, {
            headers: {
                Authorization: window.localStorage.getItem('token')
            }
        })
            .then(response => {
                console.log(response.data);
                this.setState({ currentUser: response.data, isLoadingForCurrentUser: false });
            })
            .catch(err => {
                if (err.response.status === 401) {
                    this.props.logout()
                }
                console.log(err)
            })
    }

    getListeEquipes = async () => {
        this.setState({ isLoadingForListeEquipes: true })
        await axios.get(`/teams`, {
            headers: {
                Authorization: window.localStorage.getItem('token')
            }
        })
            .then(response => {
                console.log(response.data);
                if (response.data.length > 0) {
                    this.setState({ listeEquipes: response.data });
                }
                this.setState({ isLoadingForListeEquipes: false });
            })
            .catch(err => {
                if (err.response.status === 401) {
                    this.props.logout()
                }
                console.log(err)
            })
    }

    render() {
        const {
            isLoadingForCurrentUser,
            isLoadingForListeEquipes,
            listeEquipes,
            currentUser
        } = this.state;
        return (
            <div style={{ marginTop: 60 }}>
                {
                    !this.props.isConnected && <RedirectionConnexion />
                }
                <Container>
                    <Grid stackable columns={2} >
                        <Grid.Column width={4}>
                            <FiltreEquipe />
                        </Grid.Column>
                        <Grid.Column width={12}>
                            <Grid stackable columns={2}>
                                {
                                    isLoadingForCurrentUser && isLoadingForListeEquipes ?
                                        <Segment>
                                            <Loader />
                                        </Segment> :
                                        listeEquipes.length > 0 ?
                                            listeEquipes.map((equipe, i) => (
                                                < Grid.Column key={i} >
                                                    <EquipeCard
                                                        currentUser={currentUser}
                                                        equipe={equipe}
                                                    />
                                                </Grid.Column>
                                            ))
                                            : <p>Pas d'équipe disponible ...</p>
                                }
                            </Grid>
                        </Grid.Column>
                    </Grid>
                </Container >
            </div >
        );
    }
}

export default Equipes;
