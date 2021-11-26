import React, { Component } from 'react';
import axios from 'axios';
import { Container, Card, Loader, Grid } from 'semantic-ui-react'
import PlayerModal from './Player/PlayerModal';

class Joueurs extends Component {
    state = {
        isLoading: false,
        playersList: [],
    }

    componentDidMount() {
        this.getPlayersList();
    }

    getPlayersList = async () => {
        this.setState({ isLoading: true });
        console.log('userId', localStorage.getItem('userId'));
        await axios.get(`/users/see-players/id_user=${localStorage.getItem('userId')}`, {
            headers: {
                Authorization: window.localStorage.getItem('token')
            }
        })
            .then(response => {
                console.log(response.data);
                this.setState({ playersList: response.data, isLoading: false });
            })
            .catch(err => {
                this.setState({ isLoading: false });
                console.log(err)
            })
    }

    render() {
        const {
            playersList,
            isLoading,
        } = this.state;
        return (
            <div>
                <Container textAlign="center">
                    <Grid columns="2">
                        <Grid.Column width={2}>
                            Filtre
                        </Grid.Column>
                        <Grid.Column width={14}>
                            <Card.Group itemsPerRow={3}>
                                {
                                    isLoading ? <Loader /> :
                                        playersList.map((player, i) => (
                                            <PlayerModal key={i} player={player} />
                                        ))
                                }
                            </Card.Group>
                        </Grid.Column>
                    </Grid>

                </Container>
            </div>
        );
    }
}

export default Joueurs;
