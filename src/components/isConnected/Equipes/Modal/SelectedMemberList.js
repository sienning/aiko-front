import React from "react";
import { Grid } from 'semantic-ui-react'
import MemberCard from "../MemberCard";

/**
 * SelectedMemberList composant : Affiche la liste des membres sélectionnés
 * @param {Array} availableList Liste des membres sélectionnés
 * @param {Function} removeSelectedItem retire le membre de la sélection
 */
const SelectedMemberList = ({ selectedList, removeSelectedItem }) => {
    return (
        <Grid columns={5} >
            {
                selectedList.length > 0 ?
                    selectedList.map((member, i) => (
                        <Grid.Column key={i}>
                            <MemberCard
                                member={member}
                            />
                        </Grid.Column>
                    ))
                    : <p>C'est bien vide, ici ...</p>
            }
        </Grid>
    );
}

export default SelectedMemberList;