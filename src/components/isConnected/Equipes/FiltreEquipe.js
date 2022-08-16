import React from 'react';
import { Button, Form, Header } from 'semantic-ui-react'
import { Link } from 'react-router-dom';
import SearchBar from './SearchBar';

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
const FiltreEquipe = ({ handleSearchBar, listeEquipes, buttonFilterText, titleText, handleFilterButton }) => {
    return (
        <div className='filtre-equipe'>
            <Header as='h1'>{titleText}</Header>
            <Form>
                <SearchBar
                    placeholder="Rechercher une équipe ..."
                    isLoading={false}
                    repertoires={listeEquipes}
                    handleSearchBar={handleSearchBar}
                />
            </Form>
            <Link to="/edit-team/new" className='ui button creer-button'>Créer une équipe</Link>
            <Button onClick={() => handleFilterButton()} style={{ width: "100%", marginTop: 30 }} basic inverted className='equipe-button'>Voir {buttonFilterText}</Button>
        </div>
    );
}

export default FiltreEquipe;
