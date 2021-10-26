import React, { Component } from 'react';
import '../App.css'
import { Grid, Header, Image } from 'semantic-ui-react'

class Navigation extends Component {

    render() {
        return (
            <footer>
                <Grid stackable textAlign="center" columns="3">
                    <Grid.Column>
                        <ul>
                            <li>Joueurs</li>
                            <li>Équipes</li>
                            <li>Évènements</li>
                            <li>Coaching</li>
                        </ul>
                    </Grid.Column>
                    <Grid.Column>
                        <ul>
                            <li>Mentions légales</li>
                            <li>CGV</li>
                            <li ><Image style={{ margin: "auto", marginTop: 30 }} size="small" src="images/logo.png" /></li>
                        </ul>
                    </Grid.Column>
                    <Grid.Column>
                        <Header>Rejoingnez-nous sur les réseaux</Header>
                        <ul>
                            <li>Youtube</li>
                            <li>Twitter</li>
                            <li>Discord</li>
                        </ul>
                    </Grid.Column>
                </Grid>
            </footer>
        );
    }
}

export default Navigation;
