import React, { Component } from 'react';
import '../App.css'
import { Grid, Header, Image, Icon } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

class Footer extends Component {

    render() {
        return (
            <footer>
                <span className="separator"></span>
                <Grid stackable textAlign="center" columns="3">
                    <Grid.Column>
                        <div>
                            <div><Link to="coaching">Le coaching Aiko</Link></div>
                            <div><Link to="evenements">Évènements</Link></div>
                            <div>Mon équipe</div>
                            <div><Link to="faq">F.A.Q</Link></div>
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
                        <div style={{ display: "inline-flex", margin: "auto" }}>
                            <div><a target="_blank" href="https://www.youtube.com/"><Icon name="youtube" /></a></div>
                            <div><a target="_blank" href="https://twitter.com/home"><Icon name="twitter" /></a></div>
                            <div><a target="_blank" target="_blank" href="https://discord.gg/SXhDhU6nNg"><Icon name="discord" /></a></div>
                        </div>
                    </Grid.Column>
                </Grid>
            </footer>
        );
    }
}

export default Footer;