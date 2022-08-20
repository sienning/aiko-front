import React, { useState } from 'react';
import { Image, Modal, Icon, Reveal, Grid, Button } from 'semantic-ui-react'

const ProfilModal = ({ iconSrc, editIconSrc }) => {
    const [open, setOpen] = useState(false);
    const listIcons = [
        "avatar-default-01.png",
        "avatar-default-02.png",
        "avatar-default-03.png",
        "avatar-default-04.png",
        "avatar-default-05.png"
    ]
    const [selectedIconIndex, setSelectedIconIndex] = useState(listIcons.indexOf(iconSrc));
    const [currentIcon, setCurrentIcon] = useState(iconSrc);

    const selectIconIndex = (index) => {
        if (selectedIconIndex !== index) setSelectedIconIndex(index);
    }

    const handleSubmit = () => {
        setCurrentIcon(listIcons[selectedIconIndex]);
        editIconSrc(listIcons[selectedIconIndex])
        setOpen(false);
    }

    return (
        <Modal
            closeIcon
            open={open}
            onClose={() => setOpen(false)}
            onOpen={() => setOpen(true)}
            trigger={
                <Reveal className="equipe-fade" animated='fade'>
                    <Reveal.Content visible>
                        <Image style={{ display: "block" }} circular size='small' src={`/images/avatars/${currentIcon}`} />
                    </Reveal.Content>
                    <Reveal.Content className="equipe-reveal" hidden>
                        <Image className="equipe-fade-image" circular size='small' src={`/images/avatars/${currentIcon}`} />
                        <Icon size='huge' className='equipe-fade-icon' name="plus" />
                    </Reveal.Content>
                </Reveal>
            }
        >
            <h1> Choisir une icône </h1>
            <Modal.Content>
                <Grid columns="3">
                    {
                        listIcons.map((iconName, i) => (
                            <Grid.Column key={i}>
                                {
                                    i === selectedIconIndex && <Icon className='equipe-fade-icon' name="check" size='huge' />
                                }
                                <Image onClick={() => selectIconIndex(i)} className={ i === selectedIconIndex ? "equipe-fade-image" : "equipe-fade-image-not-selected" } size="large" circular src={`/images/avatars/${iconName}`}  />
                            </Grid.Column>
                        ))
                    }
                </Grid>
                <Button style={{ marginTop: 60, display: "flex", margin: 'auto' }} onClick={handleSubmit}>Valider</Button>
            </Modal.Content>
        </Modal>
    );
}

export default ProfilModal;
