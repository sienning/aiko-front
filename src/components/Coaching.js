import React, { Component } from 'react';
import { Grid, Container, Header, Image, Segment } from 'semantic-ui-react'
import { Link } from 'react-router-dom';

class Coaching extends Component {
    render() {
        return (
            <div className='coaching'>
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <Container className='bloc1'>
                    <Grid stackable columns={2}>
                        <Grid.Column>
                            <Header as='h1'>Le coaching Aiko</Header>
                            <p style={{ fontSize: "20px" }}>
                                Plus qu’un coaching, c’est permettre aux coachs et aux joueurs de se dépasser ensemble, dans leur apprentissage et dans l’expérience de coaching. Vous voulez vous dépasser ?
                            </p>
                            <Container textAlign="center">
                                <Link to="/find-a-coach" className="ui button" style={{ fontSize: "20px" }}>J'adopte un coach</Link>
                            </Container>
                        </Grid.Column>
                        <Grid.Column >
                            <Segment style={{ borderRadius: '30px', padding: "30px" }}>
                                <Header>Nos meilleurs coachs</Header>
                                <div style={{ display: "flex" }}>
                                    <Image style={{ margin: 0, marginRight: 30 }} size="tiny" src="images/avatar-default.png" />
                                    <div style={{ marginTop: 10 }}>
                                        <Header as='h5' content="Julien 'Kroris' Duprès" />
                                        <p>★ ★ ★ ★</p>
                                    </div>
                                </div>
                                <div>
                                    <blockquote>
                                        "Top Master 300 lp, je suis là pour partager toute mes connaissances de jeu pour que tu puisses t'améliorer et gagner pleins de parties!"
                                    </blockquote>
                                </div>
                            </Segment>
                        </Grid.Column>
                    </Grid>

                </Container>

                <Container className='bloc2' style={{ marginTop: 200, marginBottom: 100 }} textAlign="center">
                    <Header as='h1'>Déjà coach ?</Header>
                    <Header.Subheader style={{ maxWidth: "500px", margin: "auto", fontSize: "20px" }}>Rejoins l’équipe AIKOACH pour une expérience encadrés et des outils personnalisés pour rendre tes coaching encore plus uniques !</Header.Subheader>
                </Container>

                <Grid style={{ marginBottom: 30 }} className='bloc3 centered' stackable columns={2}>
                    <Grid.Column>
                        <Container className='coaching-deja-coach' >
                            <p style={{ fontSize: "20px" }}>Grâce aux différentes fonctionnalités présentes sur le site AIKO, on transforme un simple COACH en un AIKOACH. Facilité de recherche de joueurs à coachés, prise en main rapide du site internet, visibilité accrue sur nos plateformes.</p>
                            <p style={{ fontSize: "20px" }}>Dépasse toi en aidant les joueurs à se dépasser, ne reste pas simple coach, deviens AIKOACH !</p>
                            <Container textAlign='center'>
                                <Link to="/sign-in-as-coach" className="ui button" style={{ fontSize: "20px" }}>Je deviens coach Aiko</Link>
                            </Container>
                        </Container>
                    </Grid.Column>
                    <Grid.Column>
                        <Container className='coaching-deja-coach-img'>
                            <Image floated="right" size="large" src="images/dejacoach.png" />
                        </Container>
                    </Grid.Column>
                </Grid>

                <Container className='bloc4' style={{ marginTop: 30, marginBottom: 100 }} textAlign="center">
                    <Header as="h1">Faits d'armes</Header>
                    <Grid stackable columns={3}>
                        <Grid.Column>
                            <Container textAlign='center'>
                                <Image style={{ margin: 'auto' }} circular size="small" src="/images/icon.png" />
                                <p style={{ fontSize: "20px" }}>791 h de coaching</p>
                            </Container>
                        </Grid.Column>
                        <Grid.Column>
                            <Container textAlign='center'>
                                <Image style={{ margin: 'auto' }} circular size="small" src="/images/icon.png" />
                                <p style={{ fontSize: "20px" }}>Challenger depuis la saison 7</p>
                            </Container>
                        </Grid.Column>
                        <Grid.Column>
                            <Container textAlign='center'>
                                <Image style={{ margin: 'auto' }} circular size="small" src="/images/icon.png" />
                                <p style={{ fontSize: "20px" }}>96% des joueurs coachés ont voté 5 ★ de satisfaction</p>
                            </Container>
                        </Grid.Column>
                    </Grid>
                    <br />
                    <br />
                    <br />
                    <Link to="/find-a-coach" className="ui button" style={{ fontSize: "20px" }}>J'adopte un coach</Link>
                </Container>
            </div>
        );
    }
}

export default Coaching;
