import React, { useState } from 'react';
import { Modal, Grid, Image, Header, Flag, Button, Icon } from 'semantic-ui-react'

const ModalConnexion = ({ equipe }) => {
    const [open, setOpen] = useState(false);

    return (
        <Modal
            className='modal-savoir-plus'
            size='small'
            closeIcon
            open={open}
            trigger={
                <Button className='see-more'>
                    En savoir plus
                </Button>}
            onClose={() => setOpen(false)}
            onOpen={() => setOpen(true)}
        >
            <Modal.Content>
                <Grid stackable columns={2}>
                    <Grid.Column width={5}>
                        <Image style={{ margin: "auto" }} src={`/images/${equipe.iconSrc}`} />
                    </Grid.Column>
                    <Grid.Column>
                        <Grid columns={2}>
                            <Grid.Column>
                                <Header>
                                    {equipe.nom}
                                    <Header.Subheader style={{ color: "white" }}>
                                        Créée le {equipe.date}, par {equipe.auteur.username}
                                    </Header.Subheader>
                                </Header>

                            </Grid.Column>

                            {/* <div className='modal-header'> */}
                            <Grid.Column>
                                <Grid columns={3}>
                                    {
                                        equipe.reseaux.length > 0 &&
                                        equipe.reseaux.map((reseau, i) => (
                                            <Grid.Column key={i}>
                                                <Icon floated="right" size="large" link name={reseau.icon} onClick={() => window.open(`${reseau.link}${reseau.linkAddress}`, '_blank')} />
                                            </Grid.Column>
                                        ))
                                    }
                                </Grid>


                            </Grid.Column>
                        </Grid>

                        <div style={{ marginTop: 30 }}>
                            <p>{equipe.description}</p>
                        </div>
                    </Grid.Column>
                </Grid>
                <div style={{ marginTop: 30 }}>
                    <p>Nombre de LAN : {equipe.nbLan}</p>
                    <p>Nombre de tournois : {equipe.nbTournois}</p>
                    <p>Nombre de succès : {equipe.nbSucces}</p>
                </div>
                <div style={{ marginTop: 30 }}>
                    <Header>Entrainements</Header>
                    Calendrier
                </div>
                <div style={{ marginTop: 30 }}>
                    <p>
                        <b>Recrutement : </b> {equipe.recrutement}
                    </p>
                    <p>
                        <b>Tarif adhésion : </b> {equipe.tarifs === null ? "Gratuit" : equipe.tarifs + " €"}
                    </p>
                    <p>
                        <b>Langue(s) parlée(s) : </b>
                        {
                            equipe.langues.length > 0 &&
                            equipe.langues.map((langue, i) => (
                                <Flag key={i} name={langue.countryCode} />
                            ))
                        }
                    </p>

                    <Grid stackable columns={4}>
                        <Grid.Column width={6}>
                            <p> <b>profils recherchés : </b></p>
                        </Grid.Column>
                        <Grid.Column width={3}>
                            <Image size="mini" circular src={equipe.profilRecherche.rangImage} />
                        </Grid.Column>
                        <Grid.Column width={3}>
                            <Image circular size="mini" src={equipe.profilRecherche.roleImage} />
                        </Grid.Column>
                        <Grid.Column width={4}>
                            <p>{equipe.profilRecherche.description}</p>
                        </Grid.Column>
                    </Grid>
                </div>
                <div className="button-candidature">
                    <Button>
                        Envoyer ma candidature
                    </Button>
                </div>
            </Modal.Content>

        </Modal >
    );
}

export default ModalConnexion;
