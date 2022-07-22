import React, { Component } from 'react';
import { Container, Header, Image, Accordion, Button, Divider, Grid } from 'semantic-ui-react'
import RedirectionConnexion from '../../RedirectionConnexion';

class ReservationCoach extends Component {
    render() {
        return (
            <div className='reservation-coach'>
                {!this.props.isConnected && <RedirectionConnexion />}
                <Container>
                    <div className='header'>
                        <Header as={'h1'}> Réserve ton coach
                            <Header.Subheader>
                                Sous titre
                            </Header.Subheader>
                        </Header>
                    </div>

                </Container>
                <div className='grid-coach'>
                    <Container>
                        <Grid columns={2}>
                            <Grid.Column>
                                Filtre
                            </Grid.Column>
                            <Grid.Column>
                                <Grid columns={4}>
                                    <Grid.Column>
                                        Coach
                                    </Grid.Column>
                                    <Grid.Column>
                                        Coach
                                    </Grid.Column>
                                    <Grid.Column>
                                        Coach
                                    </Grid.Column>
                                    <Grid.Column>
                                        Coach
                                    </Grid.Column>
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
