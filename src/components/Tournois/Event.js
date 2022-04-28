import React from 'react';
import { Image, Container, Header, Grid } from 'semantic-ui-react'
import { Link } from 'react-router-dom';

const Event = ({ titleEvent, img, id, format, map, serveur, cashPrize, dateEvent, timeEvent, over }) => {
    return (
        <Grid className='event-component' stackable columns={3}>
            <Grid.Column width={8}>
                <div className='event-img' style={{ width: "fit-content", height: "fit-content" }}>
                    <div  className={over && "event-over"}>
                        {over && <p className='event-over-text'>Tournois terminé</p>}
                    </div>
                    <Image className={over && 'event-img'} src={img} />
                </div>
            </Grid.Column>
            <Grid.Column>
                <Container>
                    <Header className='title'>{titleEvent}
                        <Header.Subheader style={{ color: "white" }}>{dateEvent}, à {timeEvent}</Header.Subheader>
                    </Header>
                    <p>
                        Format: {format} <br />
                        Map: {map}<br />
                        Serveur: {serveur}<br />
                        Cash prize: {cashPrize}
                    </p>

                    <p>
                        {
                            over ?
                                <Link> Voir les résultats</Link> :
                                <Link to={`/event/${id}`}>En savoir plus</Link>
                        }
                    </p>
                </Container>
            </Grid.Column>
        </Grid>
    );
}

export default Event;
