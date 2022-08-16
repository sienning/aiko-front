import React, { useState } from "react";
import { Grid, Input } from "semantic-ui-react";

const SearchMemberBarModal = ({ repertoires, placeholder, isLoading, handleSearchBar }) => {
    const [searchValue, setSearchValue] = useState("");

    // ----------- SEARCH -----------
    /**
     * Lance la recherche du dossier ou fichier
     */
    const handleSearchInput = (e) => {
        console.log("repertoires : ", repertoires);
        setSearchValue(e.target.value);
        let inputVal = e.target.value.toLowerCase();
        console.log("inputVal : ", inputVal);

        let filteredDirectory = [];
        if (inputVal !== "") {
            repertoires.forEach(elt => {
                console.log("elt : ", elt);
                if (elt.username.toLowerCase().indexOf(inputVal) > -1) {
                    filteredDirectory.push(elt.username);
                }
            })
            console.log("filteredDirectory : ", filteredDirectory);
            handleSearchBar(filteredDirectory);
        } else {
            setSearchValue("");
            handleSearchBar([]);
        }
    }

    /**
     * Réinitialise la recherche
     */
    const handleUndo = () => {
        setSearchValue("");
        handleSearchBar([]);
    }

    return (
        <Grid className="barre-recherche">
            <Grid.Column>
                <Input
                    fluid
                    loading={isLoading}
                    value={searchValue}
                    onClick={handleUndo}
                    placeholder={placeholder}
                    onChange={handleSearchInput}
                    icon={searchValue !== "" ? { name: 'times', circular: true, link: true, onClick: () => { handleUndo() } } : "search"}
                />
            </Grid.Column>
        </Grid>
    );
}

export default SearchMemberBarModal;