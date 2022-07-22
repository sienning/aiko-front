import React, { useState } from 'react';
import {
    Input, Columns, ColumnsItem, IconName
} from '@bytel/trilogy-react-ts';

/**
 * SearchBar composant
 * @param {Boolean} isLoading Si le répertoire est chargé
 * @param {Function} handleSearchBar Change l'affichage en fonction de la barre de recherche
 * @param {Array} repertoires Liste du répertoire [{"name": <Searched_String>, ...}, ...]
 * @param {String} placeholder contenu du placeholder
 */
const SearchBar = ({
    isLoading,
    handleSearchBar,
    repertoires,
    placeholder,
}) => {
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
        <Columns className="barre-recherche">
            <ColumnsItem>
                <Input
                    loading={isLoading}
                    value={searchValue}
                    hasIcon={true}
                    customIcon={IconName.TIMES}
                    onIconClick={handleUndo}
                    placeholder={placeholder}
                    onChange={handleSearchInput}
                />
            </ColumnsItem>
            <ColumnsItem></ColumnsItem>
        </Columns>
    );
}

export default SearchBar;
