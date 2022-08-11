import React, { useState } from "react";
import { Grid, Input } from "semantic-ui-react";

const SearchBarModal = ({ repertoires, placeholder, isLoading, handleSearchBar }) => {
    const [searchValue, setSearchValue] = useState("");

    // ----------- SEARCH -----------
    /**
     * Lance la recherche du dossier ou fichier
     */
    const handleSearchInput = (e) => {
        console.log("repertoires : ", repertoires);
        setSearchValue(e.target.value);
        let inputVal = e.target.value.toLowerCase();
        let filteredDirectory = [];
        if (inputVal !== "") {
            repertoires.forEach(elt => {
                let addElt = "";
                elt.keys.forEach(key => {
                    if (key.toLowerCase().indexOf(inputVal) > -1) {
                        addElt = elt.name;
                    }
                })
                if (addElt !== "") filteredDirectory.push(addElt);
            })
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

export default SearchBarModal;