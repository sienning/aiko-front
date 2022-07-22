import axios from 'axios';
import { useEffect, useState } from 'react';
import { Button, Container, Divider, Form, Grid, Header, Icon, Image, Input, List, ListItem, Flag, TextArea, Loader } from 'semantic-ui-react';
import listes from '../../../listes.json';
import MemberCard from './MemberCard';
import ModalAdd from './Modal/ModalAdd';
import ModalAddMember from './Modal/ModalAddMember';
import ModalProfil from './Modal/ModalProfil';
import ModalSelectIcon from './Modal/ModalSelectIcon';
// import { InlineWidget } from "react-calendly";

const EditEquipe = ({ userId, logout }) => {
    const [isLoadingForUsers, setIsLoadingForUsers] = useState(true); // BOOL

    const [users, setUsers] = useState([]);

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


    const getUsers = async () => {
        setIsLoadingForUsers(true);
        await axios.get(`/users/see-players/id_user=${userId}`, {
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
        console.log("nom équipe : ", nom);
        console.log("description équipe : ", description);
        console.log("nbLan : ", nbLan);
        console.log("nbTournois : ", nbTournois);
        console.log("nbSucces : ", nbSucces);
        console.log("jeux : ", jeux);
        console.log("recrutement : ", recrutement);
        console.log("reseaux : ", reseaux);
        console.log("tarifs : ", tarifs);
        console.log("langues : ", langues);
        console.log("profilRecherche : ", profilRecherche);
        console.log("membres : ", membres);
    }

    useEffect(() => {
        getUsers();
    }, [])

    return (
        <div className='edit-equipe' style={{ marginTop: 60 }}>
            <Form onSubmit={handleSauvegarder}>
                <Container textAlign='center'>
                    <Header as='h1'>Créer mon équipe</Header>
                </Container>
                <div className='top-equipe'>
                    <Image className='banniere-equipe' src={`images/banniere-equipe.png`} />
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

                        <Grid columns={3}>
                            {
                                isLoadingForUsers &&
                                <Grid.Column>
                                    <Loader active={isLoadingForUsers} />
                                </Grid.Column>
                            }
                            {
                                membres.length > 0 &&
                                membres.map((membre, i) => (
                                    <Grid.Column key={i}>
                                        <MemberCard
                                            member={membre}
                                        />
                                    </Grid.Column>
                                ))
                            }
                            <Grid.Column>
                                <Loader active={isLoadingForUsers} />
                                {
                                    users.length > 0 &&
                                    <ModalAddMember
                                        editFunc={editMembres}
                                        list={users}
                                        currentList={membres}
                                    />
                                }
                            </Grid.Column>
                        </Grid>
                    </div>
                    <div style={{ marginTop: 40 }}>
                        {/* <Grid columns={2}>
                            <Grid.Column>
                                <Header>Coach</Header>
                                <Divider />
                                <Grid columns={3}>
                                    {
                                        isLoadingForUsers &&
                                        <Grid.Column>
                                            <Loader active={isLoadingForUsers} />
                                        </Grid.Column>
                                    }
                                    {
                                        membres.length > 0 &&
                                        membres.map((membre, i) => (
                                            <Grid.Column key={i}>
                                                <MemberCard
                                                    member={membre}
                                                />
                                            </Grid.Column>
                                        ))
                                    }
                                    <Grid.Column>
                                        <Loader active={isLoadingForUsers} />
                                        {
                                            users.length > 0 &&
                                            <ModalAddMember
                                                type='membre'
                                                editFunc={editMembres}
                                                list={listes.reseaux}
                                                currentList={reseaux}
                                            />
                                        }
                                    </Grid.Column>
                                </Grid>
                            </Grid.Column>
                            <Grid.Column>
                                <Header>Staff</Header>
                                <Divider />

                                <Grid columns={3}>
                                    {
                                        isLoadingForUsers &&
                                        <Grid.Column>
                                            <Loader active={isLoadingForUsers} />
                                        </Grid.Column>
                                    }
                                    {

                                        membres.length > 0 &&
                                        membres.map((membre, i) => (
                                            <Grid.Column key={i}>
                                                <MemberCard
                                                    member={membre}
                                                />
                                            </Grid.Column>
                                        ))
                                    }
                                    <Grid.Column>
                                        <Loader active={isLoadingForUsers} />
                                        {
                                            users.length > 0 &&
                                            <ModalAddMember
                                                type='membre'
                                                editFunc={editMembres}
                                                list={listes.reseaux}
                                                currentList={reseaux}
                                            />
                                        }
                                    </Grid.Column>
                                </Grid>
                            </Grid.Column>
                        </Grid> */}
                    </div>
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
        </div>
    );
}

export default EditEquipe;
