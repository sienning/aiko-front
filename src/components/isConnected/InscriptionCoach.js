import React, { Component } from 'react';
import '../../App.css';
import { Container, Header, Form, Grid, Button } from 'semantic-ui-react'

class InscriptionCoach extends Component {

    render() {
        return (
            <div className="signin-coach">
                <Container>
                    <br />
                    <br />
                    <br />
                    <Header as='h1' style={{ fontSize: "55px" }}>Aikoaching</Header>
                    <Container>
                        <Grid columns='2'>
                            <Grid.Column >
                                <div>
                                    <Header as="h5">Rejoins les rangs des big boss</Header>
                                    <p className="desc-for-coach">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nunc sed orci sagittis, ultricies diam consectetur diam. Aliquet tempus placerat feugiat varius mauris congue cras maecenas elementum.</p>
                                </div>
                            </Grid.Column>
                            <Grid.Column>
                                <Form>
                                    <Form.Input
                                        label="Expérience"
                                    />
                                    <Form.TextArea
                                        onChange={e => console.log(e.target.value)}
                                        label="Décris-toi et tes motivations"
                                        style={{ height: 300, borderRadius: "30px" }}
                                    />
                                    <Container style={{ marginTop: 60 }} textAlign="center" ><Button type="submit" content='Je postule' /></Container>

                                </Form>
                            </Grid.Column>
                        </Grid>
                    </Container>
                </Container>
            </div>
        );
    }
}

export default InscriptionCoach;
