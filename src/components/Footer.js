import React, { Component } from 'react';
import '../App.css'
import { Grid, Header, Image } from 'semantic-ui-react'

class Footer extends Component {

    render() {
        return (
            <footer>
                <Grid stackable textAlign="center" columns="3">
                    <Grid.Column>
                        <div>
                            <div>Joueurs</div>
                            <div>Équipes</div>
                            <div>Évènements</div>
                            <div>Coaching</div>
                        </div>
                    </Grid.Column>
                    <Grid.Column>
                        <div>
                            <div>Mentions légales</div>
                            <div>CGV</div>
                            <div ><Image style={{ margin: "auto", marginTop: 30 }} size="small" src="/images/logo.png" /></div>
                        </div>
                    </Grid.Column>
                    <Grid.Column>
                        <Header>Rejoignez-nous sur les réseaux</Header>
                        <div>
                            <div>Youtube</div>
                            <div>Twitter</div>
                            <div>Discord</div>
                        </div>
                    </Grid.Column>
                </Grid>
            </footer>
        );
    }
}

export default Footer;
