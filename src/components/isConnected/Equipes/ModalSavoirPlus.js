import React, { useState } from 'react';
import { Modal, Grid, Image, Header, Flag, Button } from 'semantic-ui-react'
import { Link } from 'react-router-dom';

const ModalConnexion = () => {
    const [open, setOpen] = useState(false)

    return (
        <Modal
            className='modal-savoir-plus'
            size='small'
            closeIcon
            open={open}
            trigger={
                <Link className='see-more'>
                    En savoir plus
                </Link>}
            onClose={() => setOpen(false)}
            onOpen={() => setOpen(true)}
        >
            <Modal.Content>
                <Grid columns={2}>
                    <Grid.Column width={5}>
                        <Image style={{ margin: "auto" }} src="/images/equipe-icon.png" />
                    </Grid.Column>
                    <Grid.Column>
                        <div className='modal-header'>
                            <div>
                                <Header>
                                    Nom de l'équipe
                                    <Header.Subheader style={{ color: "white" }}>
                                        Créée le ...
                                    </Header.Subheader>
                                </Header>
                            </div>
                            <div className='reseaux'>
                                réseaux
                            </div>
                        </div>

                        <div>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Gravida mauris venenatis placerat id risus proin fames commodo. Etiam et neque iaculis libero eget facilisi odio velit. Arcu adipiscing in tincidunt mauris vulputate aliquam.
                            </p>
                        </div>
                    </Grid.Column>
                </Grid>
                <div>
                    <p>Nombre de LAN : XXX</p>
                    <p>Nombre de tournois : XX</p>
                </div>
                <div>
                    <Header>Entrainements</Header>
                    Calendrier
                </div>
                <div>
                    <p>
                        <b>Recrutement : </b> Entretien Discord / Try Out
                    </p>
                    <p>
                        <b>Tarif adhésion : </b> Gratuit
                    </p>
                    <p>
                        <b>Langue(s) parlée(s) : </b> <Flag name="fr" /> <Flag name="gb eng" />
                    </p>
                    <p>
                        <b>profils recherchés : </b> Icônes
                    </p>
                </div>
                <div className="button-candidature">
                    <Button>
                        Envoyer ma candidature
                    </Button>
                </div>
            </Modal.Content>

        </Modal>
    );
}

export default ModalConnexion;
