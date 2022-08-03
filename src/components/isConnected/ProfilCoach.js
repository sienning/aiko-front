import React, { Component } from 'react';
import '../../App.css';
import { Container, Header, Image, Grid, GridColumn, Button } from 'semantic-ui-react'
import axios from 'axios';

class ProfilCoach extends Component {
    state = {
        isLoading: false,
        userId: "",
        userInfos: {},
        coachId: "",
        coachInfos: {},
    }

    componentDidMount() {
        this.setState({ 
            userInfos: this.props.userId,
            coachInfos: this.props.coachId
        });
        this.getUserInfos(this.props.userId);
        this.getCoachInfos(this.props.userId);
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

    getCoachInfos = async (id) => {
        this.setState({ isLoading: true });
        await axios.get(`/coachs/see-coach/idUser=${id}`, {
        })
            .then(response => {
                this.setState({ coachInfos: response.data, isLoading: false });
            })
            .catch(err => console.log(err))
    }

    render() {
        const {
            userInfos,
        } = this.state;

        var mainRoleTitle = ""
        var logoMainRole = ""
        switch (userInfos.mainRole) {
            case "top": 
                mainRoleTitle = "Toplane"
                logoMainRole = "top"
                break;
            case "jungle": 
                mainRoleTitle = "Jungle"
                logoMainRole = "jungle"
                break;
            case "mid": 
                mainRoleTitle = "Midlane"
                logoMainRole = "mid"
                break;
            case "bot": 
                mainRoleTitle = "Botlane"
                logoMainRole = "adc"
                break;
            case "support": 
                mainRoleTitle = "Support"
                logoMainRole = "support"
                break;
            default:
                mainRoleTitle = "Non renseigné"
                logoMainRole = "default"
                break;
        }

        var subRoleTitle = ""
        var logoSubRole = ""
        switch (userInfos.subRole) {
            case "top": 
                subRoleTitle = "Toplane"
                logoSubRole = "top"
                break;
            case "jungle": 
                subRoleTitle = "Jungle"
                logoSubRole = "jungle"
                break;
            case "mid": 
                subRoleTitle = "Midlane"
                logoSubRole = "mid"
                break;
            case "bot": 
                subRoleTitle = "Botlane"
                logoSubRole = "adc"
                break;
            case "support": 
                subRoleTitle = "Support"
                logoSubRole = "support"
                break;
            default:
                subRoleTitle = "Non renseigné"
                logoSubRole = "default"
                break;
        }

        return (
            <Container>
                <div style={{ textAlign: "center", marginBottom: 20, marginTop: 50 }}>
                    <Image style={{ margin: "auto" }} alt={`Logo-${userInfos.avatar}`} src={`${process.env.REACT_APP_FRONT}/images/${userInfos.avatar}`} size="tiny" />
                    <Header as="h1">Mon compte Coach</Header>
                    <h2>Bienvenu(e), {userInfos.username} !</h2>
                </div>

                <div style={{ textAlign: "center"}}>
                    <span><p>Profil</p></span>
                </div>

                <Grid>
                    <GridColumn width={2} floated={'right'}>
                        {
                            //userInfos.discordId ?
                            //<Image circular style={{ margin: "auto" }} alt="Logo-Aiko" src={`https://cdn.discordapp.com/avatars/${userInfos.discordId}/${userInfos.avatar}`} size="small" />
                            //: 
                            <Image circular style={{ margin: "auto" }} alt="Logo-Aiko" src={`${process.env.REACT_APP_FRONT}/images/${userInfos.avatar}`} size="small" />
                        }
                    </GridColumn>
                    <GridColumn width={10}>
                        <h2>
                            {userInfos.username}
                        </h2>
                        <div>
                            <h3>
                                Jeu(x)
                            </h3>
                            <Image src={`${process.env.REACT_APP_FRONT}/images/lol-logo.png`} size="small" alt="Logo-LeagueOfLegends"/>
                        </div>
                        <Grid>
                            <GridColumn width={6}>
                                <h3>Rôle(s)</h3>
                                <Image src={`${process.env.REACT_APP_FRONT}/images/role/${logoMainRole}.webp`} alt={`Logo ${mainRoleTitle}`}/>
                                <Image src={`${process.env.REACT_APP_FRONT}/images/role/${logoSubRole}.webp`} alt={`Logo ${subRoleTitle}`}/>
                            </GridColumn>
                            <GridColumn width={6}>
                                <h3>Rangs</h3>
                                <span>{userInfos.rang}</span>
                                <Image src={`${process.env.REACT_APP_FRONT}/images/rang/${userInfos.rang}.png`} alt={`Logo ${userInfos.rang}`}/>
                            </GridColumn>
                        </Grid>
                    </GridColumn>
                </Grid>
                <Grid>
                    <GridColumn width={2} floated={'right'}>
                        <Image circular style={{ margin: "auto" }} alt="Logo-Aiko" src={`${process.env.REACT_APP_FRONT}/images/${userInfos.avatar}`} size="small" />
                    </GridColumn>
                    <GridColumn width={10}>
                        <div>
                            <h2>Equipes</h2>
                            <a href="/">team link</a>
                        </div>
                        <div>
                            <h3>Email</h3>
                            <p>{userInfos.email}</p>
                        </div>
                        <div>
                            <h3>Pseudo discord</h3>
                            <p>{userInfos.discordName}</p>
                        </div>
                        <div>
                            <h3>Pseudo in game</h3>
                            <p>{userInfos.inGameName}</p>
                        </div>
                    </GridColumn>
                </Grid>

                <div style={{ textAlign: "center"}}>
                    <a href={`/edit-coach/${userInfos._id}`}>
                        <Button>Modifier</Button>
                    </a>
                </div>

            </Container>
        );
    }
}

export default ProfilCoach;
