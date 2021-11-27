import React, { Component } from 'react';
import '../../App.css';
import { Container, Header, Form, Input, Image, Icon, Divider, Message, Grid, Button } from 'semantic-ui-react'
import { Link } from 'react-router-dom';
import axios from 'axios';

class InscriptionCoach extends Component {
    state = {
        
    }


    render() {
        const {
            
        } = this.state;
        return (
            <Container className="as-coach">
                <br/>
                <br/>
                <br/>
                <Header as='h1'>Aikoaching</Header>
                <Container>
                    <Grid columns='2'>
                        <Grid.Column>
                            <Header as="h5">Rejoins le rang des big boss</Header>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nunc sed orci sagittis, ultricies diam consectetur diam. Aliquet tempus placerat feugiat varius mauris congue cras maecenas elementum.</p>
                        </Grid.Column>
                        <Grid.Column>
                            <Form>
                                <Form.Input
                                    label="Expérience"
                                />
                                <Form.TextArea
                                    label="Décris-toi et tes motivations"
                                    style={{ height: 300 }}
                                />
                                <Container style={{ marginTop: 60 }} textAlign="center" ><Button type="submit" content='Je postule' /></Container>
                                
                            </Form>
                        </Grid.Column>
                    </Grid>
                </Container>
            </Container>
        );
    }
}

export default InscriptionCoach;
