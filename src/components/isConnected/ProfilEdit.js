import React, { Component } from 'react';
import '../../App.css';
import { Container, Header, Image,  Input, Form, Grid, GridColumn} from 'semantic-ui-react'
import axios from 'axios';
import ProfilModal from './Profil/ProfilModal';

class ProfilEdit extends Component {
    state = {
        isLoading: false,
        userId: "",
        userInfos: {},
        username: "",
        pseudo: "",
        idGame: "",
        rang: "",
        division: "",
        mainRole: "",
        subRole: ""
    }

    componentDidMount() {
        this.setState({ userInfos: this.props.userId });
        this.getUserInfos(this.props.userId);
        this.handleUpdate(this.props.userId);
    }

    getUserInfos = async (id) => {
        this.setState({ isLoading: true }); 
        await axios.get(`/users/see-user/id_user=${id}`, {
            headers: {
                Authorization: window.localStorage.getItem('token')
            }
        })

            .then(response => {
                this.setState({ userInfos: response.data, isLoading: false });
            })  
            .catch(err => console.log(err))

    }

    handleUpdate = async (id) => {
        const {pseudo, idGame, rang, division, mainRole, subRole} = this.state;

        await axios.put(`/users/see-user/id_user=${id}`, {
            username: {pseudo},
            idGame: {idGame},
            rang: {rang},
            division: {division},
            mainRole: {mainRole},
            subRole: {subRole}
        })
        .then(response => {
            this.setState({ status: response.status });
        })
        .catch(err => console.log(err))
    }

    render() {
        const {
            userInfos,
        } = this.state;
        return (
            <Container>
                <div style={{ textAlign: "center", marginBottom: 20, marginTop: 50 }}>
                    <Image style={{ margin: "auto" }} alt={`Logo-${userInfos.avatar}`} src={`${process.env.REACT_APP_FRONT}/images/${userInfos.avatar}`} size="tiny" />
                    <Header as="h1">Mon super compte de la mort qui tue</Header>
                    <h2>Bienvenu(e), {userInfos.username} !</h2>
                </div>

                <div style={{ textAlign: "center"}}>
                    <p>Edition de profil</p>
                </div>

                <Form onSubmit={this.handleSubmit}>
                <Grid>
                    <GridColumn width={2} floated={'right'}>
                        <ProfilModal userInfos={userInfos}></ProfilModal>
                    </GridColumn>
                    <GridColumn width={10}>
                        <Form.Field
                            name="pseudo"
                            type="text"
                            control={Input}
                            label="Pseudo"
                            placeholder={userInfos.username}
                        />
                        <div>
                            <h3>
                                Jeu(x)
                            </h3>
                            <select name='idGame'>
                                <option value="1">League of Legends</option>
                            </select>

                        </div>
                        <Grid>
                            <GridColumn width={6}>
                                <h3>Rôle(s)</h3>
                                <label>Rôle principal
                                    <select name='mainRole'>
                                        <option value="top">Toplane</option>
                                        <option value="jungle">Jungle</option>
                                        <option value="mid">Midlane</option>
                                        <option value="bot">Botlane</option>
                                        <option value="support">Support</option>
                                    </select>
                                </label>

                                <label>Rôle secondaire
                                    <select name='subRole'>
                                        <option value="top">Toplane</option>
                                        <option value="jungle">Jungle</option>
                                        <option value="mid">Midlane</option>
                                        <option value="bot">Botlane</option>
                                        <option value="support">Support</option>
                                    </select>
                                </label>
                            </GridColumn>
                            <GridColumn width={6}>
                                <h3>Rangs</h3>

                                <label>Rang
                                    <select name='rang'>
                                        <option value="fer">Fer</option>
                                        <option value="bronze">Bronze</option>
                                        <option value="argent">Argent</option>
                                        <option value="or">Or</option>
                                        <option value="platine">Platine</option>
                                        <option value="diamant">Diamant</option>
                                        <option value="master">Master</option>
                                        <option value="grandmaster">GrandMaster</option>
                                        <option value="challengeur">Challengeur</option>
                                    </select>
                                </label>

                                <label>Division
                                    <select name='division'>
                                        <option value="1">I</option>
                                        <option value="2">II</option>
                                        <option value="3">III</option>
                                        <option value="4">IV</option>
                                    </select>
                                </label>
                            </GridColumn>
                        </Grid>
                    </GridColumn>

                </Grid>

                <div style={{ textAlign: "center", marginTop: 30, marginBottom: 30 }}>
                    <Form.Button type="button" name="update" value="Update" onClick={this.handleUpdate}>Sauvegarder</Form.Button>
                </div>

                <Grid>
                    <GridColumn width={2} floated={'right'}>
                        <Image circular style={{ margin: "auto" }} alt="Logo-Aiko" src={`${process.env.REACT_APP_FRONT}/images/${userInfos.avatar}`} size="small" />
                    </GridColumn>
                    <GridColumn width={10}>
                        <div>
                            <h2>Equipes</h2>
                            <Form.Field
                            // name=""
                            type="text"
                            control={Input}
                            label="Lien vers la page équipe"
                            // placeholder={userInfos.username}
                            />
                        </div>
                        <div>
                            <h3>Email</h3>
                            <Form.Field
                            // name="email"
                            type="email"
                            control={Input}
                            label="Email général"
                            // placeholder={userInfos.username}
                            />
                            <p>{userInfos.email}</p>
                        </div>
                        <div>
                            <h3>Pseudo discord</h3>
                            <Form.Field
                            // name=""
                            type="text"
                            control={Input}
                            label="Pseudo Discord"
                            // placeholder={userInfos.username}
                            />
                        </div>
                        <div>
                            <h3>Pseudo in game</h3>
                            <Form.Field
                            // name=""
                            type="text"
                            control={Input}
                            label="Pseudo In Game"
                            // placeholder={userInfos.username}
                            />
                        </div>
                    </GridColumn>
                </Grid>

                </Form>

            </Container>
        );
    }
}

export default ProfilEdit;
