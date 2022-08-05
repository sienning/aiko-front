import React, { Component } from 'react';
import '../App.css';
import { Container, Header, Image, Accordion, Button, Divider } from 'semantic-ui-react'

const panels = [
    {
        key: 'qui-sommes-nous',
        title: 'Qui sommes-nous?',
        content: [
            'Nous sommes une équipe qui souhaite cultiver la passion de la compétition et du développement personnel à travers l\'esport.',
        ].join(' '),
    },
    {
        key: 'inscription-tournoi',
        title: 'Comment s’inscrire à un tournoi ?',
        content: [
            'Nous t’invitons à rejoindre le serveur discord Aiko (lien) pour pouvoir t’inscrire au prochain tournoi.',
            'Tu y trouveras aussi le règlement, le déroulé du tournois et le cashprize!',
        ].join(' '),
    },
    {
        key: 'coaching',
        title: 'Comment se passe une séance de coaching ?',
        content: {
            content: (
                <div>
                    <p>
                        Il faut commencer par prendre rendez-vous avec un coach. Tu as le choix entre deux types de coach, ceux certifiés Aiko et ceux non certifiés.
                    </p>
                    <p>
                        Ensuite, tout se passe entre toi et le coach. Vous organisez votre rendez-vous en fonction des disponibilités de chacun.
                         Si tu es satisfait, tu peux renouveler l’expérience avec ton coach ou alors opter pour un autre coach. 
                    </p>
                </div>
            ),
        },
    },
    {
        key: 'coach-certifié',
        title: 'Qu’est ce qu’un coach certifié Aiko ? / Comment devenir coach certifié ?',
        content: {
            content: (
                <div>
                    <p>
                        Les coachs certifiés Aiko ont passé et réussi un entretien de compétence et motivation avec nos équipes.
                         Chez Aiko nous cherchons à réunir des passionnés bienveillants et pédagogue,
                          c’est pour cela que nous avons créé un processus de certification.
                           N’aies pas peur de tenter ta chance, chez Aiko, la motivation prime sur l’expérience et nous serons ravis d’échanger avec toi.
                    </p>
                </div>
            ),
        },
    },
    {
        key: 'inscription-connexion',
        title: 'Je n’arrive pas à m’inscrire/ me connecter ',
        content: [
            'Tu as un problème pour t’inscrire / te connecter ? Envoie un mail à help@aiko.fr et nos équipes t’aideront à résoudre ton problème.',
        ].join(' '),
    },
    {
        key: 'suppresion',
        title: 'Comment supprimer mon compte ?',
        content: [
            'Tu nous quittes ? :(',
            'Envoie un mail à help@aiko.fr et nos équipes t’aideront à supprimer ton compte',
        ].join(' '),
    },
]

class FAQ extends Component {
    render() {
        return (
            <div className='faq'>
                <Container>
                    <div style={{ textAlign: "center", marginBottom: 20 }}>
                        <Image style={{ margin: "auto" }} alt="Logo-Aiko" src="/images/aiko-leviathan.png" size="small" />
                        <Header as="h1">Une question ?</Header>
                    </div>
                </Container>
                <Container className='border-faq'>
                    <Divider horizontal>Questions fréquentes</Divider>
                    <Container style={{ width: 500 }}>
                        <Accordion inverted panels={panels} />
                    </Container>
                </Container>
                <Container style={{ fontSize: 15, width: 600, marginBottom: 60, marginTop: 20 }} textAlign="justified">
                    <p>Vous n'avez pas trouvé la réponse à votre question ?</p>
                    <p>Venez nous la poser sur Discord</p>
                </Container>
                <Container className='join-discord' textAlign="center">
                    <Button onClick={() => window.open("https://discord.gg/SXhDhU6nNg", '_blank')} icon="discord" content="Rejoignez-nous" />
                </Container>
            </div>
        );
    }
}

export default FAQ;
