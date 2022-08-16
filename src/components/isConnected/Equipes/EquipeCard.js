import React from 'react';
import { Link } from 'react-router-dom';
import { Image, Card, CardContent, Feed, CardMeta, Icon } from 'semantic-ui-react';
import ModalSavoirPlus from './ModalSavoirPlus';

const EquipeCard = ({ equipe, currentUser }) => {
    return (
        <Card className='equipe-card' >
            <CardContent>
                <Feed>
                    <Feed.Event>
                        <Feed.Label className='img-icon' image={`/images/profils/${equipe.iconSrc}`} />
                        <Feed.Content>
                            <Feed.Summary>
                                {equipe.nom}
                            </Feed.Summary>
                            <Feed.Extra style={{ color: "white" }}>
                                Créé par <b>{equipe.auteur.username}</b>
                            </Feed.Extra>
                        </Feed.Content>
                    </Feed.Event>
                </Feed>
                <div>
                    <p>Profil recherché :</p>
                    <div className='criterias'>
                        <div>
                            <Image size="mini" src={`${equipe.profilRecherche.rangImage}`} />
                        </div>
                        <div>
                            <Image size="mini" src={`${equipe.profilRecherche.roleImage}`} />
                        </div>
                        <div>
                            <p>{equipe.profilRecherche.description}</p>
                        </div>
                    </div>
                </div>

            </CardContent>
            <CardMeta>
                <ModalSavoirPlus equipe={equipe} />
                {
                    currentUser.username === equipe.auteur.username &&
                    <Link className='button ui' to={`/edit-team/${equipe._id}`} ><Icon name="pencil" /> Modifier </Link> 
                }
            </CardMeta>
        </Card>
    );
}

export default EquipeCard;
