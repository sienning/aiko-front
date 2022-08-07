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
        <div>
            {
                selectedList.length > 0 &&
                <p>Cliquer sur un profil pour le retirer de la liste.</p>
            }
            <Grid stackable columns={3} >
                {
                    selectedList.length > 0 ?
                        selectedList.map((member, i) => (
                            <Grid.Column key={i}>
                                <MemberCard
                                    isSelectable={true}
                                    removeSelectedItem={removeSelectedItem}
                                    member={member}
                                />
                            </Grid.Column>
                        ))
                        : <p>Veuillez sélectionner des profils dans la liste</p>
                }
            </Grid>
        </div>
    );
}

export default SelectedMemberList;