import React from "react";
import { Grid } from "semantic-ui-react";

const SearchBar = ({ placeholder, isLoading }) => {
    const [searchValue, setSearchValue] = useState("");

    // ----------- SEARCH -----------
    /**
     * Lance la recherche du dossier ou fichier
     */
    const handleSearchInput = (e) => {
        setSearchValue(e.inputValue);
        let inputVal = e.inputValue.toUpperCase();
        let filteredDirectory = [];
        if (inputVal !== "") {
            repertoires.forEach(elt => {
                if (elt.name.toUpperCase().indexOf(inputVal) > -1) {
                    filteredDirectory.push(elt.name);
                }
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
                    loading={isLoading}
                    value={searchValue}
                    onClick={handleUndo}
                    placeholder={placeholder}
                    onChange={handleSearchInput}
                />
            </Grid.Column>
        </Grid>
    );
}

export default SearchBar;