import React, { useEffect, useState } from 'react';
import { Grid, Image, Header, Flag, Button, Icon, Divider } from 'semantic-ui-react'
import MemberCard from './MemberCard';
import { InlineWidget } from "react-calendly";
import axios from 'axios';

const ModalMonEquipe = ({ equipe, currentUser }) => {
    const [isLoadingForCandidature, setIsLoadingForCandidature] = useState(false);
    const [textButtonCandidature, setTextButtonCandidature] = useState("Envoyer ma candidature");
    const [iconButtonCandidature, setIconButtonCandidature] = useState("mail"); // ou check
    const [isDisabledForCandidature, setIsDisabledForCandidature] = useState(false); // ou check

    const renderDate = (date) => {
        var day, month, year, hours, minutes;
        let creationDate = new Date(date);
        day = creationDate.getDate();
        month = creationDate.getMonth() + 1;
        year = creationDate.getFullYear();
        hours = creationDate.getHours();
        minutes = creationDate.getMinutes();

        if (day < 10) {
            day = "0" + day;
        }

        if (month < 10) {
            month = "0" + month;
        }

        if (hours < 10) {
            hours = "0" + hours;
        }

        if (minutes < 10) {
            minutes = "0" + minutes;
        }

        return `${day}/${month}/${year} à ${hours}:${minutes}`;
    }

    const checkDisabled = () => {
        let listeUsernameCandidature = [];
        equipe.candidatures.forEach(candidat => (
            listeUsernameCandidature.push(candidat.username)
        ))
        if (listeUsernameCandidature.includes(currentUser.username)) {
            setTextButtonCandidature("Votre candidature est envoyée")
            setIsDisabledForCandidature(true);
            setIconButtonCandidature("check")
        }
    }

    const addCandidature = async () => {
        setIsLoadingForCandidature(true)
        await axios.post(`/teams/add-candidature/${equipe._id}`, {
            newCandidate: currentUser
        }, {
            headers: {
                Authorization: window.localStorage.getItem('token')
            }
        })
            .then(response => {
                setIsLoadingForCandidature(false)
                setTextButtonCandidature("Candidature envoyée")
                setIconButtonCandidature("check")
                setIsDisabledForCandidature(true);

                console.log(response.data);
            })
            .catch(err => {
                console.log(err);
            })
    }

    const verifyUserNotInTeam = () => {
        console.log("currentUser : ", currentUser);
        let res = true;
        if (equipe.auteur.username === currentUser.username)
            return false
        equipe.membres.forEach(user => {
            if (user.username === currentUser.username)
                res = false
        })
        equipe.coach.forEach(user => {
            if (user.username === currentUser.username)
                res = false
        })
        equipe.succes.forEach(user => {
            console.log(user);
            if (user.username === currentUser.username)
                res = false
        })
        equipe.staff.forEach(user => {
            if (user.username === currentUser.username)
                res = false
        })

        return res
    }

    useEffect(() => {
        checkDisabled();
    }, [checkDisabled])

    return (
        <div style={{ marginTop: 30 }}>
            <Grid stackable columns={2}>
                <Grid.Column width={5}>
                    <Image circular style={{ margin: "auto" }} src={`/images/profils/${equipe.iconSrc}`} />
                </Grid.Column>
                <Grid.Column width={11}>
                    <Grid stackable columns={2}>
                        <Grid.Column>
                            <Header>
                                {equipe.nom}
                                <Header.Subheader style={{ color: "white" }}>
                                    Créée le {renderDate(equipe.date)}, par <b>{equipe.auteur.username}</b>
                                </Header.Subheader>
                            </Header>

                        </Grid.Column>

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
                        <i>{equipe.description}</i>
                    </div>
                </Grid.Column>
            </Grid>
            <Divider />
            <div style={{ marginTop: 30 }}>
                <p>Nombre de LAN : {equipe.nbLan}</p>
                <p>Nombre de tournois : {equipe.nbTournois}</p>
                <p>Nombre de succès : {equipe.nbSucces}</p>
            </div>
            <div style={{ marginTop: 30 }}>
                <Header>Entrainements</Header>
                <InlineWidget url={`https://calendly.com/${equipe.calendlyLink}`} />
            </div>
            <div>
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
                <Divider />
                <div>
                    <Header as='h3'>Membres</Header>
                    <Grid stackable columns={3}>
                        {
                            equipe.membres.length > 0 ?
                                equipe.membres.map((membre, i) => (
                                    <Grid.Column key={i}>
                                        <MemberCard
                                            member={membre}
                                            isSelectable={false}
                                        />
                                    </Grid.Column>
                                ))
                                : <Grid.Column width={6}>
                                    Pas encore de membres ...
                                </Grid.Column>
                        }

                    </Grid>
                    <Header as='h3'>Coachs</Header>
                    <Grid stackable columns={3}>
                        {
                            equipe.coach.length > 0 ?
                                equipe.coach.map((co, i) => (
                                    <Grid.Column key={i}>
                                        <MemberCard
                                            member={co}
                                            isSelectable={false}
                                        />
                                    </Grid.Column>
                                ))
                                : <Grid.Column width={6}>
                                    Pas encore de coachs ...
                                </Grid.Column>
                        }

                    </Grid>
                    <Header as='h3'>Staff</Header>
                    <Grid stackable columns={3}>
                        {
                            equipe.staff.length > 0 ?
                                equipe.staff.map((st, i) => (
                                    <Grid.Column key={i}>
                                        <MemberCard
                                            member={st}
                                            isSelectable={false}
                                        />
                                    </Grid.Column>
                                ))
                                : <Grid.Column width={6}>
                                    Pas encore de staff ...
                                </Grid.Column>
                        }

                    </Grid>
                    <Header as='h3'>Succès</Header>
                    <Grid stackable columns={3}>
                        {
                            equipe.succes.length > 0 ?
                                equipe.succes.map((su, i) => (
                                    <Grid.Column key={i}>
                                        <MemberCard
                                            member={su}
                                            isSelectable={false}
                                        />
                                    </Grid.Column>
                                ))
                                : <Grid.Column width={6}>
                                    Pas encore de succès ...
                                </Grid.Column>
                        }

                    </Grid>
                </div>

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
            {
                verifyUserNotInTeam() &&
                <div className="button-candidature">
                    <Button disabled={isDisabledForCandidature} icon loading={isLoadingForCandidature} onClick={() => addCandidature()}>
                        <Icon name={iconButtonCandidature} />
                        {textButtonCandidature}
                    </Button>
                </div>
            }
        </div>
    );
}

export default ModalMonEquipe;
