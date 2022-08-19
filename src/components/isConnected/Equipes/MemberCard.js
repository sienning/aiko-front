import React from "react";
import { Image, Card, Button, Icon } from 'semantic-ui-react';

/**
 * @param {Object} member 
 * @param {Function} removeSelectedItem 
 * @param {Boolean} isSelectable 
 */
const MemberCard = ({ member, removeSelectedItem, isSelectable }) => {
    return (
        <Card
            columns={2}
        >
            <Card.Content>
                <Image
                    src={
                        member.discordId !== "0"
                            ? `https://cdn.discordapp.com/avatars/${member.discordId}/${member.avatar}`
                            : `/images/${member.avatar}`}
                    size="mini"
                    floated="left"
                    circular
                />
                <Card.Header> {member.username} </Card.Header>
                <Card.Meta>{member.prenom} {member.nom}</Card.Meta>
                {
                    isSelectable &&
                    <Card.Content extra>
                        <Button
                            icon
                            basic
                            color='red'
                            onClick={() => removeSelectedItem(member)}
                        >
                            <Icon name="trash alternate outline" />

                            Supprimer de la liste
                        </Button>
                    </Card.Content>
                }
            </Card.Content>
        </Card>
    );
}

export default MemberCard;