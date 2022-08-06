import axios from 'axios';
import { useEffect, useState } from 'react';
import { Button, Container, Divider, Form, Grid, Header, Icon, Image, List, ListItem, Flag, Loader, Card, Message } from 'semantic-ui-react';
import listes from '../../../listes.json';
import MemberCard from './MemberCard';
import ModalAdd from './Modal/ModalAdd';
import ModalAddMember from './Modal/ModalAddMember';
import ModalProfil from './Modal/ModalProfil';
import ModalSelectIcon from './Modal/ModalSelectIcon';
import { useNavigate, useParams } from 'react-router-dom';
// import { InlineWidget } from "react-calendly";

const EditEquipe = ({ userId, logout }) => {
    const navigate = useNavigate();
    let params = useParams();

    const [shouldRedirect, setShouldRedirect] = useState(false); // BOOL
    const [messageSuccess, setMessageSuccess] = useState({
        isSucess: false,
        header: "",
        message: ""
    }); // BOOL
    const [messageError, setMessageError] = useState({
        isError: false,
        header: "",
        message: ""
    }); // BOOL
    const [isLoadingForUsers, setIsLoadingForUsers] = useState(true); // BOOL
    const [isLoadingForTeam, setIsLoadingForTeam] = useState(false); // BOOL

    const [users, setUsers] = useState([]);
    const [auteur, setAuteur] = useState({});

    const [iconSrc, setIconSrc] = useState("equipe-icon.png"); // INPUT
    const [nom, setNom] = useState(""); // INPUT
    const [description, setDescription] = useState(""); // INPUT
    const [nbLan, setNbLan] = useState(0); // INPUT
    const [nbTournois, setNbTournois] = useState(0); // INPUT
    const [nbSucces, setNbSucces] = useState(0); // INPUT
    const [jeux, setJeux] = useState([]); // DROPDOWN + SEARCHBAR
    const [recrutement, setRecrutement] = useState(""); // INPUT
    const [reseaux, setReseaux] = useState([]); // DROPDOWN + INPUT
    const [tarifs, setTarifs] = useState(""); // DROPDOWN + INPUT
    const [langues, setLangues] = useState([]); // DROPDOWN + SEARCH
    const [profilRecherche, setProfilRecherche] = useState({
        "rang": "",
        "rangImage": "",
        "role": "",
        "roleImage": "",
        "description": ""
    }); // DROPDOWN + SEARCH
    const [membres, setMembres] = useState([]); // DROPDOWN + SEARCH
    const [coach, setCoach] = useState([]); // DROPDOWN + SEARCH
    const [staff, setStaff] = useState([]); // DROPDOWN + SEARCH
    const [succes, setSucces] = useState([]); // DROPDOWN + SEARCH

    const getTeamContent = async (id) => {
        setIsLoadingForTeam(true);
        resetMessage();
        await axios.get(`/teams/get-content/${id}`, {
            headers: {
                Authorization: window.localStorage.getItem('token')
            }
        })
            .then(response => {
                const res = response.data;
                setNom(res.nom);
                setIconSrc(res.iconSrc);
                setDescription(res.description);
                setNbLan(res.nbLan);
                setNbTournois(res.nbTournois);
                setNbSucces(res.nbSucces);
                setJeux(res.jeux);
                setReseaux(res.reseaux);
                setMembres(res.membres);
                setCoach(res.coach);
                setStaff(res.staff);
                setSucces(res.succes);
                setRecrutement(res.recrutement);
                setTarifs(res.tarifs);
                setLangues(res.langues);
                setProfilRecherche(res.profilRecherche);
                setIsLoadingForTeam(false);
            })
            .catch(err => {
                if (err.response.status === 401) {
                    logout()
                }
                setMessageError({
                    isError: true,
                    header: "Une erreur s'est produite.",
                    message: "Le chargement du contenu de l'équipe a rencontré une erreur ..."
                })
                console.log(err)
            })
    }

    const getUsers = async () => {
        setIsLoadingForUsers(true);
        resetMessage();
        await axios.get(`/users/see-all-players`, {
            headers: {
                Authorization: window.localStorage.getItem('token')
            }
        })
            .then(response => {
                console.log(response.data);
                setIsLoadingForUsers(false);
                setUsers(response.data);
            })
            .catch(err => {
                if (err.response.status === 401) {
                    logout()
                }
                setMessageError({
                    isError: true,
                    header: "Une erreur s'est produite.",
                    message: "Le chargement des utilisateurs a rencontré une erreur ..."
                })
                console.log(err)
            })
    }

    const getAuteur = () => {
        resetMessage();
        axios.get(`/users/see-user/id_user=${userId}`, {
            headers: {
                Authorization: window.localStorage.getItem('token')
            }
        })
            .then(response => {
                console.log(response.data);
                setAuteur(response.data);
            })
            .catch(err => {
                if (err.response.status === 401) {
                    logout()
                }
                setMessageError({
                    isError: true,
                    header: "Une erreur s'est produite.",
                    message: "Le chargement des informations de l'auteur a rencontré une erreur ..."
                })
                console.log(err)
            })
    }

    const postTeam = async (team) => {
        setIsLoadingForTeam(true);
        resetMessage();

        await axios.post(`/teams/create-team`, {
            team: team
        }, {
            headers: {
                Authorization: window.localStorage.getItem('token')
            }
        })
            .then(response => {
                console.log(response.data);
                const res = response.data;
                if (res.status === 201) {
                    setMessageSuccess({
                        isSucess: true,
                        header: "Votre équipe est créée !",
                        message: "Amusez-vous bien !"
                    });
                    setTimeout(() => {
                        setMessageSuccess({
                            isSucess: true,
                            header: "Votre équipe est créée !",
                            message: "Amusez-vous bien ! Vous allez être redirigé sur la page des équipes ..."
                        });
                        setShouldRedirect(true);
                    }, 5000)
                } else {
                    console.log(response.code);
                    setMessageSuccess({
                        isSuccess: false,
                        header: "",
                        message: ""
                    });
                    setMessageError({
                        isError: true,
                        header: "Attention",
                        message: "Il semblerait que ce nom d'équipe soit déjà pris !"
                    });
                }
            })
            .catch(err => {
                if (err.response.status === 401) {
                    logout()
                }
                console.log(err)
            })
    }

    const editIconSrc = (newIconSrc) => {
        setIconSrc(newIconSrc)
    }

    /**
     * Nom de l'équipe
     * @param {Event} e 
     * @param {String} value 
     */
    const editNom = (e, { value }) => {
        setNom(value)
    }

    /**
     * Description de l'équipe
     * @param {Event} e 
     * @param {String} value 
     */
    const editDescription = (e, { value }) => {
        setDescription(value)
    }

    const editNbLan = (e, { value }) => {
        setNbLan(value)
    }

    const editNbTournois = (e, { value }) => {
        setNbTournois(value)
    }

    const editNbSucces = (e, { value }) => {
        setNbSucces(value)
    }

    const editMembres = (selectedUsers) => {
        setMembres(selectedUsers)
    }

    const editCoach = (selectedUsers) => {
        setCoach(selectedUsers)
    }

    const editStaff = (selectedUsers) => {
        setStaff(selectedUsers)
    }
    const editSucces = (selectedUsers) => {
        setSucces(selectedUsers)
    }

    const editJeux = (selectedGames) => {
        setJeux(selectedGames)
    }

    const editReseaux = (selectedSocials) => {
        setReseaux(selectedSocials)
    }

    const editRecrutement = (e, { value }) => {
        setRecrutement(value)
    }

    const editTarifs = (e, { value }) => {
        setTarifs(value)
    }

    const editLangues = (selectedLanguages) => {
        setLangues(selectedLanguages)
    }

    const editProfilRecherche = (profil) => {
        setProfilRecherche(profil)
    }

    const handleSauvegarder = () => {
        console.log("===== handleSauvegarder =====");
        console.log("profilRecherche : ", profilRecherche);
        const newTeam = {
            auteur: auteur,
            nom: nom,
            iconSrc: iconSrc,
            description: description,
            nbLan: nbLan,
            nbTournois: nbTournois,
            nbSucces: nbSucces,
            jeux: jeux,
            reseaux: reseaux,
            membres: membres,
            coach: coach,
            staff: staff,
            succes: succes,
            recrutement: recrutement,
            tarifs: tarifs,
            langues: langues,
            profilRecherche: profilRecherche
        }

        console.log(newTeam);
        postTeam(newTeam);

    }

    const resetMessage = () => {
        setMessageError({
            isError: false,
            header: "",
            message: ""
        })
        setMessageSuccess({
            isSuccess: false,
            header: "",
            message: ""
        })
    }

    useEffect(() => {
        getUsers();
        getAuteur();
    }, [])

    useEffect(() => {
        if (shouldRedirect) {
            navigate("/teams");
        }
    })

    useEffect(() => {
        console.log(params.id);
        if (params.id !== undefined) {
            getTeamContent(params.id);
        }
    }, [])

    return (
        <div className='edit-equipe' style={{ marginTop: 60 }}>
            {
                messageSuccess.isSucess &&
                <Message
                    style={{ zIndex: 10, position: "sticky", top: 0, margin: 30 }}
                    floating
                    success
                    header={messageSuccess.header}
                    content={messageSuccess.message}
                />
            }
            {
                messageError.isError &&
                <Message
                    style={{ zIndex: 10, position: "sticky", top: 0, margin: 30 }}
                    floating
                    negative
                    header={messageError.header}
                    content={messageError.message}
                />
            }
            <Form onSubmit={handleSauvegarder}>
                <Container textAlign='center'>
                    <Header as='h1'>Créer mon équipe</Header>
                </Container>
                <div className='top-equipe'>
                    <Image className='banniere-equipe' src={`/images/banniere-equipe.png`} />
                    <div className='nom-icon'>
                        <ModalSelectIcon editIconSrc={editIconSrc} />
                        <Form.Input required name="nom" onChange={editNom} className='edit-nom' style={{ display: "block" }} value={nom} placeholder="Nom de l'équipe" />
                    </div>
                </div>
                <Container>
                    <Grid stackable columns={2}>
                        <Grid.Column >
                            <Header>Description</Header>
                            <Form.TextArea
                                name="description"
                                placeholder={"Ajouter une description..."}
                                value={description}
                                rows={6}
                                onChange={editDescription}
                                style={{ width: "100%" }}
                            />
                        </Grid.Column>
                        <Grid.Column>
                            <Form.Input label="Nombre de LAN :" min="0" size="mini" syle={{ width: '10px' }} type='number' value={nbLan} onChange={editNbLan} />
                            <Form.Input label="Nombre de tournois :" min="0" size="mini" syle={{ width: '10px' }} type='number' value={nbTournois} onChange={editNbTournois} />
                            <Form.Input label="Succès :" min="0" size="mini" syle={{ width: '10px' }} type='number' value={nbSucces} onChange={editNbSucces} />
                        </Grid.Column>
                        <Grid.Column>
                            <Header>Jeux</Header>
                            <Divider />
                            <Grid columns={3}>
                                {
                                    jeux.length > 0 &&
                                    jeux.map((jeu, i) => (
                                        <Grid.Column key={i}>
                                            <Image size="small" src={jeu.icon} />
                                        </Grid.Column>
                                    ))
                                }
                                <Grid.Column>
                                    <ModalAdd
                                        type='jeux'
                                        editFunc={editJeux}
                                        list={listes.jeux}
                                        currentList={jeux}
                                    />
                                </Grid.Column>
                            </Grid>

                        </Grid.Column>
                        <Grid.Column>
                            <Header>Réseaux</Header>
                            <Divider />
                            <List inverted divided>
                                {
                                    reseaux.length > 0 &&
                                    reseaux.map((reseau, i) => (
                                        <ListItem key={i}><a className='purple-link' target="_blank" href={`${reseau.link}${reseau.linkAddress}`}><Icon name={reseau.icon} />{reseau.name}</a></ListItem>
                                    ))
                                }
                            </List>
                            <ModalAdd
                                type='reseaux'
                                editFunc={editReseaux}
                                list={listes.reseaux}
                                currentList={reseaux}
                            />
                        </Grid.Column>
                    </Grid>
                    <div style={{ marginTop: 40 }}>
                        <Header>Membres</Header>
                        <Divider />
                        {
                            // CHARGEMENT
                            isLoadingForUsers ?
                                <Loader active={isLoadingForUsers} />
                                :
                                <Card.Group>
                                    {
                                        // AFFICHAGE MEMBRES
                                        membres.length > 0 &&
                                        membres.map((membre, i) => (
                                            <MemberCard
                                                key={i}
                                                isSelectable={false}
                                                member={membre}
                                            />
                                        ))
                                    }

                                </Card.Group>
                        }
                        <br />
                        <br />
                        <Loader active={isLoadingForUsers} />
                        {
                            // Icone modale +
                            users.length > 0 &&
                            <ModalAddMember
                                editFunc={editMembres}
                                list={users}
                                currentList={membres}
                            />
                        }
                    </div>
                    {/* <Divider /> */}
                    <div style={{ marginTop: 40 }}>
                        <Grid columns={2}>
                            <Grid.Column>
                                <Header>Coach</Header>
                                <Divider />
                                {
                                    // CHARGEMENT
                                    isLoadingForUsers ?
                                        <Loader active={isLoadingForUsers} />
                                        :
                                        <Card.Group>

                                            {
                                                // AFFICHAGE COACHS
                                                coach.length > 0 &&
                                                coach.map((membre, i) => (
                                                    <MemberCard
                                                        key={i}
                                                        isSelectable={false}
                                                        member={membre}
                                                    />
                                                ))
                                            }

                                        </Card.Group>
                                }

                                <br />
                                <br />
                                <Loader active={isLoadingForUsers} />
                                {
                                    // Icone modale +
                                    users.length > 0 &&
                                    <ModalAddMember
                                        editFunc={editCoach}
                                        list={users}
                                        currentList={coach}
                                    />
                                }
                            </Grid.Column>

                            <Grid.Column>
                                <Header>Staff</Header>
                                <Divider />
                                {
                                    // CHARGEMENT
                                    isLoadingForUsers ?
                                        <Loader active={isLoadingForUsers} />
                                        :
                                        <Card.Group>

                                            {
                                                // AFFICHAGE STAFFS
                                                staff.length > 0 &&
                                                staff.map((membre, i) => (
                                                    <MemberCard
                                                        key={i}
                                                        isSelectable={false}
                                                        member={membre}
                                                    />
                                                ))
                                            }

                                        </Card.Group>
                                }

                                <br />
                                <br />

                                {/* CHARGEMENT + */}
                                <Loader active={isLoadingForUsers} />
                                {
                                    // Icon modale +
                                    users.length > 0 &&
                                    <ModalAddMember
                                        editFunc={editStaff}
                                        list={users}
                                        currentList={staff}
                                    />
                                }
                            </Grid.Column>
                        </Grid>
                    </div>
                    <div style={{ marginTop: 40 }}>
                        <Header>Succès</Header>
                        <Divider />
                        {
                            // CHARGEMENT
                            isLoadingForUsers ?
                                <Loader active={isLoadingForUsers} />
                                :
                                <Card.Group>

                                    {
                                        // AFFICHAGE SUCCES
                                        succes.length > 0 &&
                                        succes.map((membre, i) => (
                                            <MemberCard
                                                key={i}
                                                isSelectable={false}
                                                member={membre}
                                            />
                                        ))
                                    }

                                </Card.Group>
                        }

                        <br />
                        <br />

                        <Loader active={isLoadingForUsers} />
                        {
                            users.length > 0 &&
                            <ModalAddMember
                                editFunc={editSucces}
                                list={users}
                                currentList={succes}
                            />
                        }
                    </div>
                    <br />
                    <br />
                    <br />
                    <br />
                    <Header>Entraînements :</Header>
                    <div>
                        Là, on est censé avoir un calendrier
                        {/* <InlineWidget /> */}
                    </div>
                    <br />
                    <br />
                    <br />
                    <br />
                    <div>
                        <Form.Group inline>
                            <Form.Input onChange={editRecrutement} name="recrutement" label="Recrutement" placeholder="Entretien Discord / Try Out" />
                        </Form.Group>
                        <Form.Group inline>
                            <Form.Input onChange={editTarifs} name="tarif" type="number" label="Tarif adhésion" placeholder="Tarif" /> €
                        </Form.Group>
                        <div>
                            <br />
                            <Header>
                                Langue(s) parlée(s)
                            </Header>
                            <Divider />
                            <List inverted divided>
                                {
                                    langues.length > 0 &&
                                    langues.map(((langue, i) => (
                                        <List.Item key={i}>
                                            <div style={{ display: "inline-flex" }}>
                                                <Flag name={langue.countryCode} />
                                                <div>{langue.name}</div>
                                            </div>
                                        </List.Item>
                                    )))
                                }
                            </List>
                            <ModalAdd
                                type="langues"
                                editFunc={editLangues}
                                list={listes.langues}
                                currentList={[]}
                            />
                        </div>
                        <div>
                            <br />

                            <Header>Profil recherché</Header>
                            <Divider />

                            <Grid stackable style={{ maxWidth: "400px" }} columns={4}>
                                {
                                    profilRecherche.roleImage !== "" &&
                                    <Grid.Column>
                                        <Image size="mini" src={profilRecherche.roleImage} />
                                    </Grid.Column>
                                }
                                {
                                    profilRecherche.rangImage !== "" &&
                                    <Grid.Column>
                                        <Image size="mini" src={profilRecherche.rangImage} />
                                    </Grid.Column>
                                }
                                {
                                    profilRecherche.description !== "" &&
                                    <Grid.Column>
                                        {profilRecherche.description}
                                    </Grid.Column>
                                }
                                <Grid.Column>
                                    <ModalProfil
                                        listeRangs={listes.rangs}
                                        listeRoles={listes.roles}
                                        editProfilRecherche={editProfilRecherche}
                                        currentProfil={profilRecherche}
                                    />
                                </Grid.Column>
                            </Grid>

                            <br />
                        </div>
                    </div>
                    <Container textAlign='center'>
                        <Button type='submit'>Sauvegarder</Button>
                    </Container>
                </Container>
            </Form>
        </div >
    );
}

export default EditEquipe;