import React, { Component } from 'react';
// import '../../App.css';
import { Container, Header, Form, Grid, Button } from 'semantic-ui-react'
import RedirectionConnexion from '../RedirectionConnexion';

class InscriptionCoach extends Component {

    /**
     * Quand le bouton "Envoyer" est cliqué
     */
    handleSubmit = async (e) => {
        e.preventDefault();
        const experience = e.target.experience.value;
        const description = e.target.description.value;
        console.log(experience);
        console.log(description);
    }

    render() {
        return (
            <div className="signin-coach">
                { !this.props.isConnected && <RedirectionConnexion/> }
                <Container>
                    <br />
                    <br />
                    <br />
                    <Header as='h1' style={{ fontSize: "55px" }}>Aikoaching</Header>
                    <Container>
                        <Grid stackable columns='2'>
                            <Grid.Column >
                                <div>
                                    <Header as="h5">Rejoins les rangs des big boss</Header>
                                    <p className="desc-for-coach">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nunc sed orci sagittis, ultricies diam consectetur diam. Aliquet tempus placerat feugiat varius mauris congue cras maecenas elementum.</p>
                                </div>
                            </Grid.Column>
                            <Grid.Column>
                                <Form onSubmit={e => {this.handleSubmit(e)}}>
                                    <Form.Input
                                        name="experience"
                                        label="Expérience"
                                    />
                                    <Form.TextArea
                                        name="description"
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
