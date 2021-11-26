import React from 'react';
import { Image, Card } from 'semantic-ui-react'


const CoachCard = ({ open, user }) => {
    return (
        <>
            <Card.Content>
                {
                    user.discordId ?
                        <Image className="pp_user" floated="right" size="tiny" circular src={`https://cdn.discordapp.com/avatars/${user.discordId}/${user.avatar}`} />
                        : <Image className="pp_user" floated="right" size="tiny" circular src={`${process.env.REACT_APP_SERVER}/images/${user.avatar}`} />
                }
                <Card.Header>{user.username}</Card.Header>
                <p>Info</p>
                <p>Info</p>
                <p>Info</p>
            </Card.Content>
        </>
    )
}

export default CoachCard;