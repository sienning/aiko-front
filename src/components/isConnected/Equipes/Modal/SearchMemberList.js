import React from "react";
import { List, Image } from 'semantic-ui-react'

/**
 * SearchMemberList composant : Affiche la liste des membres à ajouter
 * @param {Array} availableList Liste des membres disponibles
 * @param {Function} addSelectedItem Ajoute le membre à la sélection
 */
const SearchMemberList = ({ availableList, addSelectedItem }) => {
    return (
        <div style={{ marginTop: 30, maxHeight: "500px", overflowY: "scroll" }}>
            <List size="large" selection inverted divided >
                {
                    availableList.length > 0 ?
                        availableList.map((member, i) => (
                            <List.Item onClick={() => addSelectedItem(member)} key={i}>
                                <Image circular size="mini" src={member.discordId !== undefined ? `https://cdn.discordapp.com/avatars/${member.discordId}/${member.avatar}` : `/images/${member.avatar}`} />
                                <List.Content>
                                    <List.Header>{member.username}</List.Header>
                                    <List.Description>
                                        {member.prenom} {member.nom}
                                    </List.Description>
                                </List.Content>
                            </List.Item>
                        ))
                        : <List.Item>Plus de profil disponible...</List.Item>
                }
            </List>
        </div>
    );
}

export default SearchMemberList;