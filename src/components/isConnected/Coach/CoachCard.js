import React from 'react';
import { Card, Feed, Image } from 'semantic-ui-react'


const CoachCard = ({ currentUser, coach }) => {
    return (
        <Card  style={{ textAlign: "center" }} className='coach-card' >
            <Card.Content>
                <Image size="small" className='img-icon' src={
                    coach.discordId !== "0"
                        ? `https://cdn.discordapp.com/avatars/${coach.discordId}/${coach.avatar}`
                        : `/images/${coach.avatar}`
                } />
            </Card.Content>
            <Card.Description>

                {coach.username}
            </Card.Description>
        </Card>
    )
}

export default CoachCard;