import React, { Component } from 'react';
import { Grid, Container, Header, Image, Button, Segment } from 'semantic-ui-react'
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
                            <Header as='h1'>Coaching</Header>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nunc sed orci sagittis, ultricies diam consectetur diam. Aliquet tempus placerat feugiat varius mauris congue cras maecenas elementum.</p>
                            <Container textAlign="center"><Button content="J'adopte un coach" /></Container>
                        </Grid.Column>
                        <Grid.Column >
                            <Segment style={{ borderRadius: '30px', padding: "30px" }}>
                                <Header>Nos meilleurs coachs</Header>
                                <div style={{ display: "flex" }}>
                                    <Image style={{ margin: 0, marginRight: 30 }} size="tiny" src="images/avatar-default.png" />
                                    <div style={{ marginTop: 10 }}>
                                        <Header as='h5' content="Bananape" />
                                        <p>★ ★ ★ ★</p>
                                    </div>
                                </div>
                                <div>
                                    <blockquote>
                                        "Bananape est très professionnel blablablablablablablablabla blablablablabla blablablablablabla blablabla blablablablablablablablablablablablla"
                                    </blockquote>
                                </div>
                            </Segment>
                        </Grid.Column>
                    </Grid>

                </Container>

                <Container className='bloc2' style={{ marginTop: 200, marginBottom: 100 }} textAlign="center">
                    <Header as='h1'>Déjà coach ?</Header>
                    <Header.Subheader>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Header.Subheader>
                </Container>

                <Grid style={{ marginBottom: 30 }} className='bloc3' stackable columns={2}>
                    <Grid.Column>
                        <Container className='coaching-deja-coach' >
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nunc sed orci sagittis, ultricies diam consectetur diam. Aliquet tempus placerat feugiat varius mauris congue cras maecenas elementum.</p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nunc sed orci sagittis, ultricies diam consectetur diam. Aliquet tempus placerat feugiat varius mauris congue cras maecenas elementum.</p>
                            <Container textAlign='center'>
                                <Link to="/sign-in-as-coach" className="ui button">Je deviens coach Aiko</Link>
                            </Container>
                        </Container>
                    </Grid.Column>
                    <Grid.Column>
                        <Container className='coaching-deja-coach-img' textAlign='right'>
                            <Image style={{ margin: 0 }} floated="right" size="large" src="images/dejacoach.png" />
                        </Container>
                    </Grid.Column>
                </Grid>


                <Container className='bloc4' style={{ marginTop: 30, marginBottom: 100 }} textAlign="center">
                    <Header as="h1">Stats stylées</Header>
                    <Grid stackable columns={3}>
                        <Grid.Column>
                            <Container textAlign='center'>
                                <Image style={{ margin: 'auto' }} circular size="small" src="/images/icon.png" />
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            </Container>
                        </Grid.Column>
                        <Grid.Column>
                            <Container textAlign='center'>
                                <Image style={{ margin: 'auto' }} circular size="small" src="/images/icon.png" />
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            </Container>
                        </Grid.Column>
                        <Grid.Column>
                            <Container textAlign='center'>
                                <Image style={{ margin: 'auto' }} circular size="small" src="/images/icon.png" />
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            </Container>
                        </Grid.Column>
                    </Grid>
                    <br />
                    <br />
                    <br />
                    <Button content="J'adopte un coach" />
                </Container>
            </div>
        );
    }
}

export default Coaching;
