import React, { useState } from 'react';
import { Modal, Icon, Button, Container, Form, Dropdown, Header } from 'semantic-ui-react'
// import SearchList from './SearchList';
// import SearchReseauxList from './SearchReseauxList';
// import SelectedList from './SelectedList';
// import SelectedReseauxList from './SelectedReseauxList';

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
const ModalProfil = ({ editProfilRecherche, listeRangs, listeRoles, currentProfil, liste }) => {
    const [open, setOpen] = useState(false)
    const [role, setRole] = useState({
        "value": "",
        "image": ""
    })
    const [rang, setRang] = useState({
        "value": "",
        "image": ""
    })
    const [description, setDescription] = useState("")

    const handleSubmit = () => {
        const profil = {
            "rang": rang.value,
            "rangImage": rang.image,
            "role": role.value,
            "roleImage": role.image,
            "description": description,
        }
        console.log("profil : ", profil);
        editProfilRecherche(profil);
        setOpen(false);
    }

    const handleSelectRole = (e, { value }) => {
        let filteredRole = listeRoles.results.filter(ro => ro.value === value)[0];
        let selectedRole = {
            "value": value,
            "image": filteredRole.image.src
        }
        console.log("selectedRole : ", selectedRole);
        setRole(selectedRole)
    }

    const handleSelectRang = (e, { value }) => {
        let filteredRang = listeRangs.results.filter(ro => ro.value === value)[0];
        let selectedRang = {
            "value": value,
            "image": filteredRang.image.src
        }
        console.log("selectedRang : ", selectedRang);
        setRang(selectedRang);
    }

    const handleDescription = (e) => {
        console.log(e);
        setDescription(e.target.value)
    }

    return (
        <Modal
            closeIcon
            open={open}
            onClose={() => setOpen(false)}
            onOpen={() => setOpen(true)}
            trigger={
                <Icon link className='icon-edit' size='big' name="pencil" onClick={() => setOpen(false)} />
            }
        >
            <h1> Profil recherché </h1>
            <Modal.Content>
                <Form onSubmit={handleSubmit}>
                    <div style={{ marginBottom: 30 }}>
                        <Header>Role</Header>
                        <Dropdown
                            placeholder='Le rôle du profil recherché'
                            value={role.value}
                            selection
                            fluid
                            search
                            onChange={handleSelectRole}
                            options={listeRoles.results}
                        />
                    </div>
                    <div style={{ marginBottom: 30 }}>
                        <Header>Rang</Header>
                        <Dropdown
                            placeholder='Le rang du profil recherché'
                            value={rang.value}
                            selection
                            fluid
                            search
                            onChange={handleSelectRang}
                            options={listeRangs.results}
                        />
                    </div>
                    <Form.TextArea value={description} onChange={handleDescription} label='Description' />
                    <Container textAlign="center" >
                        <Button type="submit" >Valider</Button>
                    </Container>
                </Form>
            </Modal.Content>
        </Modal>
    );
}

export default ModalProfil;
