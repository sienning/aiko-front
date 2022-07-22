import React, { useState } from 'react';
import { Image, Modal, Icon, Reveal, Grid, Button } from 'semantic-ui-react'

const ModalSelectIcon = ({ editIconSrc }) => {
    const [open, setOpen] = useState(false);
    const [selectedIconIndex, setSelectedIconIndex] = useState(0);
    const [currentIcon, setCurrentIcon] = useState("equipe-icon.png");

    const listIcons = [
        "equipe-icon.png",
        "team-ekko.jpeg",
        "team-jinx.jpeg",
        "team-vi.jpeg"
    ]

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
                        <Image style={{ display: "block" }} circular size='small' src={`images/profils/${currentIcon}`} />
                    </Reveal.Content>
                    <Reveal.Content className="equipe-reveal" hidden>
                        <Image className="equipe-fade-image" circular size='small' src={`images/profils/${currentIcon}`} />
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
                                <Image onClick={() => selectIconIndex(i)} className={ i === selectedIconIndex ? "equipe-fade-image" : "equipe-fade-image-not-selected" } size="large" circular src={`images/profils/${iconName}`}  />
                            </Grid.Column>
                        ))
                    }
                </Grid>
                <Button style={{ marginTop: 60, display: "flex", margin: 'auto' }} onClick={handleSubmit}>Valider</Button>
            </Modal.Content>
        </Modal>
    );
}

export default ModalSelectIcon;
