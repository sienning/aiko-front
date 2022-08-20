import React, { Component } from 'react';
import '../../App.css';
import { Container, Header, Image, Input, Form, Grid, GridColumn, TextArea, Message } from 'semantic-ui-react'
import axios from 'axios';
import ProfilModal from './Profil/ProfilModal';

class CoachEdit extends Component {
    state = {
        isErrorMessage: false,
        isLoading: true,
        userId: "",
        userInfos: {},
        username: "",
        pseudo: "",
        idGame: "lol",
        rang: "",
        division: "",
        mainRole: "",
        subRole: "",
        calendlyCoach: "",
        descriptionCoach: "",
        levelCoach: "",
        avatar: "",

        jeux: [
            {
                key: 0,
                text: "League of Legends",
                value: "lol"
            }
        ],
        rolePrincipal: [
            {
                key: 0,
                text: "Toplane",
                value: "top"
            },
            {
                key: 1,
                text: "Jungle",
                value: "jungle"
            },
            {
                key: 2,
                text: "Midlane",
                value: "mid"
            },
            {
                key: 3,
                text: "Botlane",
                value: "bot"
            },
            {
                key: 4,
                text: "Support",
                value: "support"
            },
        ],
        roleSecondaire: [
            {
                key: 0,
                text: "Toplane",
                value: "top"
            },
            {
                key: 1,
                text: "Jungle",
                value: "jungle"
            },
            {
                key: 2,
                text: "Midlane",
                value: "mid"
            },
            {
                key: 3,
                text: "Botlane",
                value: "bot"
            },
            {
                key: 4,
                text: "Support",
                value: "support"
            },
        ],
        rangs: [
            {
                key: 0,
                text: "Fer",
                value: "fer"
            },
            {
                key: 1,
                text: "Bronze",
                value: "bronze"
            },
            {
                key: 2,
                text: "Argent",
                value: "argent"
            },
            {
                key: 3,
                text: "Or",
                value: "or"
            },
            {
                key: 4,
                text: "Platine",
                value: "platine"
            },
            {
                key: 5,
                text: "Diamant",
                value: "diamant"
            },
            {
                key: 6,
                text: "Master",
                value: "master"
            },
            {
                key: 7,
                text: "GrandMaster",
                value: "grandmaster"
            },
            {
                key: 8,
                text: "Challenger",
                value: "challenger"
            },
        ],
        divisions: [
            {
                key: 0,
                text: "I",
                value: "1"
            },
            {
                key: 1,
                text: "II",
                value: "2"
            },
            {
                key: 2,
                text: "III",
                value: "3"
            },
            {
                key: 3,
                text: "IV",
                value: "4"
            }
        ],
        niveauCoach: [
            {
                key: 0,
                text: "Casuel",
                value: "Casuel"
            },
            {
                key: 1,
                text: "Semi-professionnel",
                value: "Semi-professionnel"
            },
            {
                key: 2,
                text: "Professionnel",
                value: "Professionnel"
            },
        ],
    }

    componentDidMount() {
        this.setState({
            userId: this.props.userId,
        });
        this.getUserInfos(this.props.userId);
        // this.handleUpdate(this.props.userId);
    }

    handleChange = (e, { name, value }) => this.setState({ [name]: value })

    handleAvatarChange = (avatar) => {
        this.setState({ avatar: avatar });
    }
    handleJeuxChange = (e, { value }) => {
        this.setState({ idGame: value });
    }
    handleMainRoleChange = (e, { value }) => {
        this.setState({ mainRole: value });
    }
    handleSubRoleChange = (e, { value }) => {
        this.setState({ subRole: value });
    }
    handleRangChange = (e, { value }) => {
        this.setState({ rang: value });
    }
    handleDivisionChange = (e, { value }) => {
        this.setState({ division: value });
    }
    handleLevelCoachChange = (e, { value }) => {
        this.setState({ levelCoach: value });
    }
    handleDescriptionCoachChange = (e, { value }) => {
        this.setState({ descriptionCoach: value });
    }
    handleCalendlyCoachChange = (e, { value }) => {
        this.setState({ calendlyCoach: value, isErrorMessage: false });
    }

    getUserInfos = async (id) => {
        this.setState({ isLoading: true });
        await axios.get(`/users/see-user/id_user=${id}`, {
            headers: {
                Authorization: window.localStorage.getItem('token')
            }
        })
            .then(response => {
                console.log("user : ", response.data);
                const userData = response.data;
                this.setState({
                    isLoading: false,
                    userInfos: response.data,
                    avatar: userData.avatar,
                    pseudo: userData.username,
                    idGame: userData.idGame,
                    mainRole: userData.mainRole,
                    subRole: userData.subRole,
                    rang: userData.rang,
                    division: userData.division,
                    levelCoach: userData.levelCoach,
                    descriptionCoach: userData.descriptionCoach,
                    calendlyCoach: userData.calendlyCoach
                });
            })
            .catch(err => console.log(err))
    }

    handleUpdate = async (id) => {
        const { username, avatar, idGame, rang, division, mainRole, subRole, descriptionCoach, calendlyCoach, levelCoach } = this.state;
        if (calendlyCoach === "") {
            this.setState({ isErrorMessage: true });
        } else {
            console.log("id : ", id);

            const userUpdated = {
                avatar: { avatar },
                username: { username },
                idGame: { idGame },
                rang: { rang },
                division: { division },
                mainRole: { mainRole },
                subRole: { subRole },
                descriptionCoach: { descriptionCoach },
                calendlyCoach: { calendlyCoach },
                levelCoach: { levelCoach },
                coach: true
            }


            await axios.post(`/users/update-user/id_user=${id}`, { user: userUpdated }, {
                headers: {
                    Authorization: window.localStorage.getItem('token')
                }
            })
                .then(response => {
                    window.location.replace(`/my-profile/${this.state.userId}`);
                })
                .catch(err => console.log(err))
        }
    }

    render() {
        const {
            isLoading,
            isErrorMessage,
            userInfos,
            idGame,
            jeux,
            mainRole,
            subRole,
            rolePrincipal,
            roleSecondaire,
            rang,
            rangs,
            divisions,
            division,
            niveauCoach,
            calendlyCoach,
            descriptionCoach,
            levelCoach
        } = this.state;
        return (
            <Container>
                <div style={{ textAlign: "center", marginBottom: 20, marginTop: 50 }}>
                    <Image style={{ margin: "auto" }} alt={`Logo-${userInfos.avatar}`} src={`${process.env.REACT_APP_FRONT}/images/${userInfos.avatar}`} size="tiny" />
                    <Header as="h1">Modification Coach</Header>
                    <div>
                        <a href={`/my-coach/${userInfos._id}`}>
                            <span>Profil Coach</span>
                        </a>
                        <span> | </span>
                        <span>Modification Coach</span>
                    </div>
                </div>

                <Form loading={isLoading} onSubmit={() => this.handleUpdate(this.props.userId)}>
                    <Grid stackable>
                        <GridColumn width={2} floated={'right'}>
                            <ProfilModal userInfos={userInfos} editIconSrc={this.handleAvatarChange} ></ProfilModal>
                        </GridColumn>
                        <GridColumn width={10}>
                            <Grid stackable columns={2}>
                                <GridColumn width={6}>
                                    <Header>Jeu</Header>
                                    <Form.Dropdown
                                        value={idGame}
                                        fluid
                                        selection
                                        options={jeux}
                                        onChange={this.handleJeuxChange}
                                    />
                                </GridColumn>
                                <GridColumn width={6}>
                                    <Header>Niveau de coaching</Header>
                                    <Form.Dropdown
                                        value={levelCoach}
                                        fluid
                                        selection
                                        options={niveauCoach}
                                        onChange={this.handleLevelCoachChange}
                                    />
                                </GridColumn>
                            </Grid>
                            <div>

                            </div>
                            <Grid stackable style={{ marginTop: 40 }} columns={2}>
                                <GridColumn width={6}>
                                    <Header>Rôle(s)</Header>
                                    <Form.Dropdown
                                        label="Rôle principal"
                                        value={mainRole}
                                        fluid
                                        selection
                                        options={rolePrincipal}
                                        onChange={this.handleMainRoleChange}
                                    />

                                    <Form.Dropdown
                                        label="Rôle secondaire"
                                        value={subRole}
                                        fluid
                                        selection
                                        options={roleSecondaire}
                                        onChange={this.handleSubRoleChange}
                                    />
                                </GridColumn>
                                <GridColumn width={6}>
                                    <Header>Rang</Header>
                                    <Form.Dropdown
                                        label="Rang"
                                        value={rang}
                                        fluid
                                        selection
                                        options={rangs}
                                        onChange={this.handleRangChange}
                                    />

                                    <Form.Dropdown
                                        label="Division"
                                        value={division}
                                        fluid
                                        selection
                                        options={divisions}
                                        onChange={this.handleDivisionChange}
                                    />
                                </GridColumn>
                            </Grid>
                            <Grid stackable>
                                <GridColumn width={12}>
                                    <Header>Description</Header>
                                    <Form.Field
                                        required
                                        onChange={this.handleDescriptionCoachChange}
                                        name="description"
                                        type="text"
                                        control={TextArea}
                                        value={descriptionCoach}
                                        placeholder={userInfos.descriptionCoach}
                                    />
                                </GridColumn>
                            </Grid>

                            <Grid stackable>
                                <GridColumn width={12}>
                                    <Header>Lien calendly
                                        <Header.Subheader style={{ color: "white" }}>
                                            Si vous ne possédez pas de compte <u><a href='https://calendly.com/' target="_blank" rel="noreferrer" >Calendly</a></u>, veuillez vous en créer un!
                                        </Header.Subheader>
                                    </Header>
                                    <Input
                                        error={isErrorMessage}
                                        loading={isLoading}
                                        value={calendlyCoach}
                                        onChange={this.handleCalendlyCoachChange}
                                        label="https://calendly.com/"
                                        placeholder="adresse"
                                    />
                                </GridColumn>
                            </Grid>
                        </GridColumn>

                    </Grid>

                    {
                        isErrorMessage &&
                        <Message
                            negative
                            icon='meh'
                            header='Il manque quelque chose ...'
                            content='Il faut que tu entres ton lien calendly pour valider le formulaire'
                        />
                    }
                    <div style={{ textAlign: "center", marginTop: 30, marginBottom: 30 }}>
                        <Form.Button type="submit" name="update" value="Update" >Sauvegarder</Form.Button>
                    </div>

                </Form>

            </Container>
        );
    }
}

export default CoachEdit;
