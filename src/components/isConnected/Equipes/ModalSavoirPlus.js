import React, { useState } from 'react';
import { Modal, Button, Tab, Label, Menu } from 'semantic-ui-react'
import ModalMonEquipe from './ModalMonEquipe';
import ModalCandidatures from './ModalCandidatures';


const ModalSavoirPlus = ({ equipe, currentUser }) => {
    const [open, setOpen] = useState(false);
    const panes = [
        {
            menuItem: { key: 'team', icon: 'users', content: 'Mon équipe' },
            render: () => <ModalMonEquipe equipe={equipe} currentUser={currentUser} />,
        },
        {
            menuItem: (
                <Menu.Item key='messages'>
                    Candidatures<Label color={equipe.candidatures.length > 0 ? 'red' : "grey"} >{equipe.candidatures.length}</Label>
                </Menu.Item>
            ),
            render: () => <ModalCandidatures equipe={equipe} />,
        },
    ]

    return (
        <Modal
            className='modal-savoir-plus'
            size='small'
            closeIcon
            open={open}
            trigger={
                <Button className='see-more'>
                    Voir plus
                </Button>}
            onClose={() => setOpen(false)}
            onOpen={() => setOpen(true)}
        >
            <Modal.Content>
                {
                    equipe.auteur.username !== currentUser.username ?
                        <ModalMonEquipe equipe={equipe} currentUser={currentUser} /> :
                        <Tab className="tab-modal-equipes" panes={panes} />
                }
            </Modal.Content>

        </Modal >
    );
}

export default ModalSavoirPlus;
