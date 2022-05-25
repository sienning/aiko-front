import React, { Component } from 'react';
import { Container, Form, Grid, Button } from 'semantic-ui-react'
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
const FiltreEquipe = () => {
    return (
        <div className='filtre-equipe'>
            <Form>
                <Form.Input icon="search" label="Recherche" placeholder="Rechercher une équipe ..." />
                Filtres
                <Form.Checkbox label="Toplaner" />
                <Form.Checkbox label="Midlaner" />
                <Form.Checkbox label="ADC" />
                <Form.Checkbox label="Support" />
                <Form.Checkbox label="Jungler" />
                <div className='buttons'>
                    <Button size='small' className='reinitialiser-button'>Réinitialiser</Button>
                    <Form.Button size='small' className='appliquer-button'>Appliquer</Form.Button>
                </div>
            </Form>
            <Link to="/create-team" className='ui button creer-button'>Créer mon équipe</Link>
        </div>
    );
}

export default FiltreEquipe;
