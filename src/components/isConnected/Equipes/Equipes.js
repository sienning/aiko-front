import axios from 'axios';
import React, { Component } from 'react';
import { Container, Grid, Loader, Segment } from 'semantic-ui-react'
import RedirectionConnexion from '../../RedirectionConnexion';
import EquipeCard from './EquipeCard';
import FiltreEquipe from './FiltreEquipe';

class Equipes extends Component {
    state = {
        isLoadingForCurrentUser: true,
        isLoadingForListeEquipes: true,
        listeEquipes: [],
        mesEquipes: [],
        displayListeEquipes: [],
        currentUser: {},
        buttonFilterText: "mes équipes",
        titleText: "Les équipes sur Aiko"
    }

    componentDidMount() {
        if (this.props.isConnected) {
            this.getCurrentUser();
            this.getListeEquipes();
        }
    }

    getCurrentUser = async () => {
        this.setState({ isLoadingForCurrentUser: true })
        await axios.get(`/users/see-user/id_user=${window.localStorage.getItem('userId')}`, {
            headers: {
                Authorization: window.localStorage.getItem('token')
            }
        })
            .then(response => {
                this.setState({ currentUser: response.data, isLoadingForCurrentUser: false });
            })
            .catch(err => {
                if (err.response.status === 401) {
                    this.props.logout()
                }
                console.log(err)
            })
    }

    getListeEquipes = async () => {
        console.log("getListeEquipes");
        this.setState({ isLoadingForListeEquipes: true })
        await axios.get(`/teams`, {
            headers: {
                Authorization: window.localStorage.getItem('token')
            }
        })
            .then(response => {
                console.log(response.data);
                if (response.data.length > 0) {
                    this.setState({ listeEquipes: response.data, displayListeEquipes: response.data });
                }
                this.setState({ isLoadingForListeEquipes: false });
            })
            .catch(err => {
                if (err.response.status === 401) {
                    this.props.logout()
                }
                console.log(err)
            })
    }

    handleSearchBar = (filteredArray) => {
        if (filteredArray.length > 0) {
            let newArray = this.makeNewAvailableList(filteredArray)
            this.setState({ displayListeEquipes: newArray })
        } else {
            let newArray = this.state.mesEquipes
            if (this.state.buttonFilterText === "mes équipes") {
                newArray = this.state.listeEquipes
            }
            this.setState({ displayListeEquipes: newArray })
        }
    }

    handleFilterButton = () => {
        if (this.state.buttonFilterText === "mes équipes") {
            this.setState({ buttonFilterText: "les équipes sur Aiko", titleText: "Mes équipes" })
            const mesEquipes = this.makeMesEquipesList(this.state.currentUser._id)
            this.setState({ displayListeEquipes: mesEquipes, mesEquipes: mesEquipes })
        } else {
            this.setState({ buttonFilterText: "mes équipes", titleText: "Les équipes sur Aiko" })
            this.setState({ displayListeEquipes: this.state.listeEquipes })

        }
    }

    makeNewAvailableList = (filteredArray) => {
        let res = this.state.listeEquipes.filter(elt => filteredArray.includes(elt.nom))
        return res;
    }

    makeMesEquipesList = (idUser) => {
        let res = [];
        const listeEquipes = this.state.listeEquipes
        if (listeEquipes.length > 0) {
            listeEquipes.forEach(equipe => {
                if (equipe.auteur._id === idUser) {
                    if (res.filter(r => r._id === equipe._id).length === 0) res.push(equipe);
                } else {
                    equipe.membres.forEach(membre => {
                        if (membre._id === idUser) {
                            if (res.filter(r => r._id === equipe._id).length === 0) res.push(equipe);
                        }
                    });
                    equipe.staff.forEach(st => {
                        if (st._id === idUser) {
                            if (res.filter(r => r._id === equipe._id).length === 0) res.push(equipe);
                        }
                    });
                    equipe.coach.forEach(c => {
                        if (c._id === idUser) {
                            if (res.filter(r => r._id === equipe._id).length === 0) res.push(equipe);
                        }
                    });
                    equipe.succes.forEach(su => {
                        if (su._id === idUser) {
                            if (res.filter(r => r._id === equipe._id).length === 0) res.push(equipe);
                        }
                    });
                }
            });
        }
        console.log("mes équipes : ", res);
        return res;
    }

    refresh = () => {
        this.getListeEquipes();
    }

    render() {
        const {
            isLoadingForCurrentUser,
            isLoadingForListeEquipes,
            displayListeEquipes,
            listeEquipes,
            currentUser,
            buttonFilterText,
            titleText,
        } = this.state;
        return (
            <div style={{ marginTop: 60 }}>
                {
                    !this.props.isConnected && <RedirectionConnexion />
                }
                <Container>
                    <Grid stackable columns={2} >
                        <Grid.Column width={4}>
                            <FiltreEquipe
                                handleSearchBar={this.handleSearchBar}
                                listeEquipes={listeEquipes}
                                buttonFilterText={buttonFilterText}
                                titleText={titleText}
                                handleFilterButton={this.handleFilterButton}
                            />
                        </Grid.Column>
                        <Grid.Column width={12}>
                            <Grid stackable columns={2}>
                                {
                                    isLoadingForCurrentUser && isLoadingForListeEquipes ?
                                        <Loader active inverted /> :
                                        displayListeEquipes.length > 0 ?
                                            displayListeEquipes.map((equipe, i) => (
                                                < Grid.Column key={i} >
                                                    <EquipeCard
                                                        refresh={this.refresh}
                                                        currentUser={currentUser}
                                                        equipe={equipe}
                                                    />
                                                </Grid.Column>
                                            ))
                                            : <p>Pas d'équipe disponible ...</p>
                                }
                            </Grid>
                        </Grid.Column>
                    </Grid>
                </Container >
            </div >
        );
    }
}

export default Equipes;
