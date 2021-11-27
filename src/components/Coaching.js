import React, { Component } from 'react';
import { Grid, Container, Header, Image, Button, Segment } from 'semantic-ui-react'
import { Link } from 'react-router-dom';

class Coaching extends Component {
    render() {
        return (
            <>
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <Container>
                    <Grid stackable columns={2}>
                        <Grid.Column>
                            <Header as='h1'>Coaching</Header>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nunc sed orci sagittis, ultricies diam consectetur diam. Aliquet tempus placerat feugiat varius mauris congue cras maecenas elementum.</p>
                            <Container textAlign="center"><Button content="J'adopte un coach" /></Container>
                        </Grid.Column>
                        <Grid.Column >
                            <Segment>
                                <Header>Nos meilleurs coachs</Header>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nunc sed orci sagittis, ultricies diam consectetur diam. Aliquet tempus placerat feugiat varius mauris congue cras maecenas elementum.</p>
                            </Segment>
                        </Grid.Column>
                    </Grid>

                </Container>

                <Container style={{ marginTop: 200, marginBottom: 100 }} textAlign="center">
                    <Header as='h1'>Déja coach ?</Header>
                    <Header.Subheader>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Header.Subheader>
                </Container>

                <Grid stackable columns={2}>
                    <Grid.Column>
                        <Container >
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nunc sed orci sagittis, ultricies diam consectetur diam. Aliquet tempus placerat feugiat varius mauris congue cras maecenas elementum.</p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nunc sed orci sagittis, ultricies diam consectetur diam. Aliquet tempus placerat feugiat varius mauris congue cras maecenas elementum.</p>


                            <Container textAlign='center'>
                                <Link to="/sign-in-as-coach" className="ui button">Je deviens coach Aiko</Link>
                            </Container>
                        </Container>
                    </Grid.Column>
                    <Grid.Column>
                        <Container textAlign='right'>
                            <Image floated="right" size="large" src="https://react.semantic-ui.com/images/wireframe/image.png" />
                        </Container>
                    </Grid.Column>
                </Grid>
                <Container style={{ marginTop: 200, marginBottom: 100 }} textAlign="center">
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
            </>
        );
    }
}

export default Coaching;
