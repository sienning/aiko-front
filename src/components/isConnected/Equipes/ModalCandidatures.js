import React, { useState } from 'react';
import { Image, Button, List, Icon, Loader, Segment } from 'semantic-ui-react'
import axios from 'axios';

const ModalCandidatures = ({ equipe, refresh }) => {
    const [isLoadingForCandidature, setIsLoadingForCandidature] = useState(false);
    const [candidatures, setCandidatures] = useState(equipe.candidatures);

    const handleRemoveCandidature = async (candidat) => {
        setIsLoadingForCandidature(true)
        await axios.post(`/teams/remove-candidature/${equipe._id}`, {
            candidate: candidat
        }, {
            headers: {
                Authorization: window.localStorage.getItem('token')
            }
        })
            .then(response => {
                setIsLoadingForCandidature(false)
                let newCandidaturesList = candidatures.filter(candidate => candidate.username !== candidat.username)
                setCandidatures([...newCandidaturesList])
                refresh();

            })
            .catch(err => {
                console.log(err)
            })
    }

    const handleAddMember = async (candidat) => {
        setIsLoadingForCandidature(true)
        await axios.post(`/teams/add-member/${equipe._id}`, {
            member: candidat
        }, {
            headers: {
                Authorization: window.localStorage.getItem('token')
            }
        })
            .then(response => {
                console.log(response.data);
                setIsLoadingForCandidature(false)
                let newCandidaturesList = candidatures.filter(candidate => candidate.username !== candidat.username)
                setCandidatures([...newCandidaturesList])
                handleRemoveCandidature(candidat)
            })
            .catch(err => {
                console.log(err)
            })
    }

    return (
        <div style={{ marginTop: 30 }}>
            <List divided>
                {
                    isLoadingForCandidature ?
                        <Segment >
                            <Loader />
                        </Segment> :
                        candidatures.length > 0 ?
                            candidatures.map((candidat, i) => (
                                <List.Item key={i}>
                                    <List.Content floated='right'>
                                        <Button onClick={() => handleAddMember(candidat)} >Ajouter</Button>
                                        <Button onClick={() => handleRemoveCandidature(candidat)} basic icon><Icon name='times' /></Button>
                                    </List.Content>
                                    <Image size="mini" src={candidat.discordId === "0" ? `/images/${candidat.avatar}` : `https://cdn.discordapp.com/avatars/${candidat.discordId}/${candidat.avatar}`} />
                                    <List.Content>
                                        <List.Header style={{ color: "white" }}><u>{candidat.username}</u> souhaite intégrer votre équipe.</List.Header>
                                    </List.Content>
                                </List.Item>
                            )) :
                            <div>Pas de candidature ...</div>
                }
            </List>
        </div>
    );
}

export default ModalCandidatures;
