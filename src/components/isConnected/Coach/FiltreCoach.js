import React from 'react';
import {Form, Header } from 'semantic-ui-react'
import SearchBar from '../Equipes/SearchBar';

/**
 * 
 * Pour le premier tu as 5 choix : 
    Top lane
    Jungle
    Mid Lane
    Adc
    Support
 * Et dans les rang tu as : 
    Fer 
    Bronze
    Argent
    Or
    Platine
    Diamand
    Master 
    Grand Master 
    Challenger
 */
const FiltreCoach = ({ handleSearchBar, listeCoachs, titleText, handleFilterButton }) => {
    return (
        <div className='filtre-coach'>
            <Header as='h1'>{titleText}</Header>
            <Form>
                <SearchBar
                    placeholder="Rechercher un coach ..."
                    isLoading={false}
                    repertoires={listeCoachs}
                    handleSearchBar={handleSearchBar}
                />
            </Form>
        </div>
    );
}

export default FiltreCoach;
