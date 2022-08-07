import React from 'react';
import { Image, Card } from 'semantic-ui-react'


const PlayerCard = ({ open, player }) => {
    return (
        <>
        {
            console.log(player)
        }
            <Card.Content>
                <Image className="pp_user" floated="right" size="tiny" circular src={player.discordId !== "0" ? `https://cdn.discordapp.com/avatars/${player.discordId}/${player.avatar}` : `/images/${player.avatar}`} />
                <Card.Header>{player.username}</Card.Header>
                <p>Info</p>
                <p>Info</p>
                <p>Info</p>
            </Card.Content>
        </>
    )
}

export default PlayerCard;