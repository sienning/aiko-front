import React from 'react';
import { Image, Card } from 'semantic-ui-react'


const PlayerCard = ({ open, player }) => {
    return (
        <>
            <Card.Content>
                {
                    player.discordId ?
                        <Image className="pp_user" floated="right" size="tiny" circular src={`https://cdn.discordapp.com/avatars/${player.discordId}/${player.avatar}`} />
                        : <Image className="pp_user" floated="right" size="tiny" circular src={`${process.env.REACT_APP_SERVER}/images/${player.avatar}`} />
                }
                <Card.Header>{player.username}</Card.Header>
                <p>Info</p>
                <p>Info</p>
                <p>Info</p>
            </Card.Content>
        </>
    )
}

export default PlayerCard;