import React from 'react';
import { Card, Image } from 'semantic-ui-react'


const CoachCard = ({ coach }) => {
    return (
        <Card  style={{ textAlign: "center" }} className='coach-card' >
            <Card.Content>
                <Image size="small" className='img-icon' src={
                    coach.discordId !== "0"
                        ? `https://cdn.discordapp.com/avatars/${coach.discordId}/${coach.avatar}`
                        : `/images/avatars/${coach.avatar}`
                } />
            </Card.Content>
            <Card.Description>

                {coach.username}
            </Card.Description>
        </Card>
    )
}

export default CoachCard;