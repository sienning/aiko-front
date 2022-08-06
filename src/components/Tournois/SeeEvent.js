import React from 'react';
import { Image, Container, Header, Grid, Button } from 'semantic-ui-react'
import { Link, useParams } from 'react-router-dom';
import events from './Events.json';

const SeeEvent = () => {

    const { id } = useParams();

    const event = events[id];

    return (
        <div className='see-event'>
            <div style={{ marginTop: 60 }} className='div-title'>
                <Image src={event.img} />
                <Container className='title'>
                    <Header as={'h2'}>{event.titleEvent}
                        <Header.Subheader style={{ color: "white" }}>{event.dateEvent}, à {event.timeEvent}</Header.Subheader>
                    </Header>
                </Container>
            </div>
            <Container style={{ marginTop: 60 }}>
                <Grid columns={2}>
                    <Grid.Column>
                        <p>
                            Format: {event.format} <br />
                            Map: {event.map}<br />
                            Serveur: {event.serveur}<br />
                            Cash prize: {event.cashPrize}
                        </p>
                    </Grid.Column>
                    <Grid.Column>
                        Eget amet, sit tempus malesuada pellentesque ornare sed interdum amet. Praesent pulvinar varius sed quis gravida eleifend urna.
                    </Grid.Column>
                </Grid>
                <Container style={{ marginTop: 60 }} textAlign='center'>
                    <a href="www.google.com" style={{ width: "200px", marginRight: 30 }} className='ui button'>Je participe</a>
                    <Button
                        className='join-discord'
                        onClick={() => window.open("https://discord.gg/SXhDhU6nNg", '_blank')}
                        icon="discord" content="Rejoignez-nous sur Discord"
                    />
                </Container>
                <div style={{ marginTop: 60, maxWidth: "600px" }}>
                    <p>
                        Eget nullam at egestas massa netus lobortis. Senectus adipiscing facilisi volutpat ac justo tellus. Morbi sagittis vestibulum feugiat cursus aliquet. Pretium quis augue sit nec. Commodo urna tempor, pretium egestas ornare. Risus faucibus mi et, faucibus sagittis amet risus rhoncus. Morbi rhoncus, mattis non at arcu non rhoncus mauris arcu. Pretium varius orci neque, eget.
                    </p>
                    <p>
                        Elementum, pretium in egestas purus sollicitudin elementum faucibus etiam. Dictumst tortor congue enim tortor. Tempus, purus hendrerit sed molestie risus amet. Lobortis sed morbi ridiculus magna feugiat urna. Mi, cursus mi, laoreet nunc accumsan mauris.
                    </p>
                </div>
            </Container >
        </div>
    );
}

export default SeeEvent;
