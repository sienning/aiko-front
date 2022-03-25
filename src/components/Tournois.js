import React, { Component } from 'react';
import { Image, Container, Header, Grid, Button } from 'semantic-ui-react'
import { Link } from 'react-router-dom';

class Tournois extends Component {
    render() {
        return (
            <div>
                <Container style={{ marginBottom: 60, marginTop: 60 }} textAlign='center'>
                    <Header as={"h1"} >Les tournois AIKO</Header>
                </Container>
                <Grid stackable columns={2}>
                    <Grid.Column width={8}>
                        <Image src="/images/event.png" />

                    </Grid.Column>
                    <Grid.Column>
                        <Container>
                            <Header>Open World Event
                                <Header.Subheader style={{ color: "white" }}>Lun. 9 octobre 20h</Header.Subheader>
                            </Header>
                            <p>Format: 1v1 <br />
                                Map: ARAM<br />
                                Serveur: EUW<br />
                                Cash prize: </p>
                            <p>
                                <Link to="/">En savoir plus</Link>
                            </p>
                        </Container>
                        <Container style={{ marginTop: 30 }} textAlign='center'>
                            <Link className="ui button" to="/">Je participe</Link>

                        </Container>
                    </Grid.Column>
                </Grid>
            </div>
        );
    }
}

export default Tournois;
