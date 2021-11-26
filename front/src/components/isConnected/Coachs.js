import React, { Component } from 'react';
import axios from 'axios';
import { Container, Card, Loader, Grid } from 'semantic-ui-react'
import CoachModal from './Coach/CoachModal';

class Coachs extends Component {
    state = {
        isLoading: false,
        coachesList: [],
    }

    componentDidMount() {
        this.getCoachesList();
    }

    getCoachesList = async () => {
        this.setState({ isLoading: true });
        console.log('userId', localStorage.getItem('userId'));
        await axios.get(`/users/see-coaches/id_user=${localStorage.getItem('userId')}`, {
            headers: {
                Authorization: window.localStorage.getItem('token')
            }
        })
            .then(response => {
                console.log(response.data);
                this.setState({ coachesList: response.data, isLoading: false });
            })
            .catch(err => {
                this.setState({ isLoading: false });
                console.log(err)
            })
    }

    render() {
        const {
            coachesList,
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
                                        coachesList.map((coach, i) => (
                                            <CoachModal key={i} coach={coach} />
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

export default Coachs;
