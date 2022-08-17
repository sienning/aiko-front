import axios from 'axios';
import React, { Component } from 'react';
import { Container, Header, Image, Loader, Segment, Grid } from 'semantic-ui-react'
import RedirectionConnexion from '../../RedirectionConnexion';
import CoachCard from './CoachCard';
import FiltreCoach from './FiltreCoach';

class ReservationCoach extends Component {
    state = {
        isLoadingForCoach: true,
        listeCoachs: [],
        displayListeCoachs: [],
        titleText: "Les coachs sur Aiko"
    }

    componentDidMount() {
        this.getListeCoachs();
    }

    getListeCoachs = async () => {
        this.setState({ isLoadingForCoach: true })
        await axios.get(`/users/see-all-coachs`, {
            headers: {
                Authorization: window.localStorage.getItem('token')
            }
        })
            .then(response => {
                console.log(response.data);
                if (response.data.length > 0) {
                    this.setState({ listeCoachs: response.data, displayListeCoachs: response.data });
                }
                this.setState({ isLoadingForCoach: false});
            })
            .catch(err => {
                if (err.response.status === 401) {
                    this.props.logout()
                }
                console.log(err)
            })
    }

    handleSearchBar = (filteredArray) => {
        if (filteredArray.length > 0) {
            let newArray = this.makeNewAvailableList(filteredArray)
            this.setState({ displayListeCoachs: newArray })
        } else {
            let newArray = this.state.mesEquipes
            if (this.state.buttonFilterText === "mes équipes") {
                newArray = this.state.listeCoachs
            }
            this.setState({ displayListeCoachs: newArray })
        }
    }

    makeNewAvailableList = (filteredArray) => {
        let res = this.state.listeCoachs.filter(elt => filteredArray.includes(elt.nom))
        return res;
    }

    render() {
        const {
            isLoadingForCoach,
            displayListeCoachs,
            listeCoachs,
            titleText,
        } = this.state;
        return (
            <div className='reservation-coach'>
                {!this.props.isConnected && <RedirectionConnexion />}
                <Container>
                    <div className='header'>
                        <Header as={'h1'}> Réserve ton coach
                            <Header.Subheader>
                                Trouve ton coach
                            </Header.Subheader>
                        </Header>
                    </div>

                </Container>
                <div className='grid-coach'>
                    <Container>
                        <Grid columns={2}>
                            <Grid.Column width={4}>
                                <FiltreCoach
                                    handleSearchBar={this.handleSearchBar}
                                    listeCoachs={listeCoachs}
                                    titleText={titleText}
                                    handleFilterButton={this.handleFilterButton}
                                />
                            </Grid.Column>
                            <Grid.Column width={12}>
                                <Grid stackable columns={2}>
                                    {
                                        isLoadingForCoach ?
                                            <Segment>
                                                <Loader />
                                            </Segment> :
                                            displayListeCoachs.length > 0 ?
                                                displayListeCoachs.map((user, i) => (
                                                    < Grid.Column key={i} >
                                                        <CoachCard
                                                            open={false}
                                                            user={user}
                                                        />
                                                    </Grid.Column>
                                                ))
                                                : <p>Pas d'équipe disponible ...</p>
                                    }
                                </Grid>
                            </Grid.Column>
                        </Grid>
                    </Container>
                </div>
            </div>
        );
    }
}

export default ReservationCoach;
