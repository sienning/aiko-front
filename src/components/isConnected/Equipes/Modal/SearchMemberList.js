import React from "react";
import { Grid } from 'semantic-ui-react'
import MemberCard from "../MemberCard";

/**
 * SearchMemberList composant : Affiche la liste des membres à ajouter
 * @param {Array} availableList Liste des membres disponibles
 * @param {Function} addSelectedItem Ajoute le membre à la sélection
 */
const SearchMemberList = ({ availableList, addSelectedItem }) => {
    return (
        <div style={{ marginTop: 30, maxHeight: "500px", overflowY: "scroll" }}>
            <Grid columns={3} >
                {
                    availableList.length > 0 ?
                        availableList.map((member, i) => (
                            <Grid.Column key={i}>
                                <MemberCard
                                    member={member}
                                />
                            </Grid.Column>
                        ))
                        : <Grid.Column>Plus de profil disponible...</Grid.Column>
                }
            </Grid>
        </div>
    );
}

export default SearchMemberList;