import React from 'react';
import { Form } from 'semantic-ui-react'
import { Link } from 'react-router-dom';


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
const FiltreEquipe = ({ isAuthor=true }) => {
    return (
        <div className='filtre-equipe'>
            <Form>
                <Form.Input icon="search" label="Recherche" placeholder="Rechercher une équipe ..." />

                {/* <div className='buttons'>
                    <Button size='small' className='reinitialiser-button'>Réinitialiser</Button>
                    <Form.Button size='small' className='appliquer-button'>Appliquer</Form.Button>
                </div> */}
            </Form>
            <Link to="/edit-team/new" className='ui button creer-button'>Créer une équipe</Link>
        </div>
    );
}

export default FiltreEquipe;
