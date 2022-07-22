import React, { Component } from 'react';
import { Container, Grid } from 'semantic-ui-react'
import RedirectionConnexion from '../../RedirectionConnexion';
import EquipeCard from './EquipeCard';
import FiltreEquipe from './FiltreEquipe';

class Equipes extends Component {
    render() {
        return (
            <div style={{ marginTop: 60 }}>
                {
                    // !this.props.isConnected && <RedirectionConnexion/>
                }
                <Container>
                    <Grid stackable columns={2} >
                        <Grid.Column width={4}>
                            <FiltreEquipe/>
                        </Grid.Column>
                        <Grid.Column width={12}>
                            <Grid stackable columns={2}>
                                <Grid.Column>
                                    <EquipeCard
                                        nom={"nom de l'équipe 1"}
                                        note={3}
                                    />
                                </Grid.Column>
                                <Grid.Column>
                                    <EquipeCard
                                        nom={"nom de l'équipe 2"}
                                        note={4.3}
                                    />
                                </Grid.Column>
                            </Grid>
                        </Grid.Column>
                    </Grid>
                </Container>
            </div>
        );
    }
}

export default Equipes;
