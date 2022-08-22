import React from 'react';
import { Button, Card, CardMeta, Image, Modal, Header, GridColumn, Grid, Icon } from 'semantic-ui-react'
import { InlineWidget } from "react-calendly";
import '../../../App.css';

const CoachCard = ({ coach }) => {
    const [open, setOpen] = React.useState(false)

    var mainRoleTitle = ""
        var logoMainRole = ""
        switch (coach.mainRole) {
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
        switch (coach.subRole) {
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
        <Card  style={{ textAlign: "center" }} className='coach-card' >
            <Card.Content>
                <Image size="small" className='img-icon' src={
                    coach.discordId !== "0"
                        ? `https://cdn.discordapp.com/avatars/${coach.discordId}/${coach.avatar}`
                        : `/images/${coach.avatar}`
                } />
            </Card.Content>
            <Card.Description>
                {coach.username}
            </Card.Description>
            <CardMeta style={{ margin: "20px"}}>
                <Modal
                onClose={() => setOpen(false)}
                onOpen={() => setOpen(true)}
                open={open}
                trigger={<Button>Voir plus</Button>}
                >

                    <div>
                        <Grid>
                            <GridColumn width={4}>
                                <Image size="small" className='img-icon' src={
                                    coach.discordId !== "0"
                                        ? `https://cdn.discordapp.com/avatars/${coach.discordId}/${coach.avatar}`
                                        : `/images/${coach.avatar}`
                                } />
                            </GridColumn>
                            <GridColumn width={6}>
                                <h1>{coach.username}</h1>
                                <p>{coach.descriptionCoach}</p>
                            </GridColumn>
                        </Grid>
                        <div style={{marginTop: "20px", marginBottom: "20px"}}>
                            <InlineWidget url={`https://calendly.com/${coach.calendlyCoach}`} style={{ overflowY: "hidden" }} />
                        </div>
                        <div className='mc-grid' style={{margin: "20px"}}>
                            <div>
                                <h2>Rôle :</h2>
                            </div>
                            <div>
                                <Image size="small" style={{width: "75px", marginRight: "20px", marginLeft: "20px"}} className='img-icon' src={`/images/role/${logoMainRole}.webp`} alt={`Logo ${mainRoleTitle}`} />
                            </div>
                            <div>
                                <Image size="small" style={{width: "75px", marginRight: "20px"}} className='img-icon' src={`/images/role/${logoSubRole}.webp`} alt={`Logo ${subRoleTitle}`} />
                            </div>
                            <div>
                                <h2>Elo :</h2>              
                            </div>
                            <div>
                                <Image size="small" style={{width: "75px", marginLeft: "20px"}} className='img-icon' src={`${process.env.REACT_APP_FRONT}/images/rang/${coach.rang}.png`} alt={`Logo ${coach.rang}`} />
                            </div>
                            
                        </div>
                        <div className='mc-grid2'>
                            <h2 style={{margin: "0px"}}>Contact discord : {coach.discordName}</h2>
                            <h2 style={{margin: "0px"}}>Contact en jeu : {coach.inGameName}</h2>
                        </div>
                        <h2 style={{margin: "20px"}}>Expérience en tant que coach : {coach.levelCoach}</h2>
                    </div>
                </Modal>
            </CardMeta>
        </Card>
    )
}

export default CoachCard;