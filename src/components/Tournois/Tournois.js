import React, { Component } from 'react';
import { Container, Header } from 'semantic-ui-react'
import Event from './Event';
import events from './Events.json';

class Tournois extends Component {
    render() {
        return (
            <div className='tournois'>
                <Container style={{ marginBottom: 60, marginTop: 60 }} textAlign='center'>
                    <Header as={"h1"} >Les tournois AIKO</Header>
                </Container>
                {
                    events.map((ev, i) => (
                        <Event
                            key={ev.id}
                            titleEvent={ev.titleEvent}
                            img={ev.img}
                            id={i}
                            format={ev.format}
                            map={ev.map}
                            serveur={ev.serveur}
                            cashPrize={ev.cashPrize}
                            dateEvent={ev.dateEvent}
                            timeEvent={ev.timeEvent}
                            over={ev.over}
                        />
                    ))
                }

            </div>
        );
    }
}

export default Tournois;
