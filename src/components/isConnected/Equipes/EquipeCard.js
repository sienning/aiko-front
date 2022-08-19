import React from 'react';
import { Link } from 'react-router-dom';
import { Image, Card, CardContent, Feed, CardMeta, Icon, Label } from 'semantic-ui-react';
import ModalSavoirPlus from './ModalSavoirPlus';

const EquipeCard = ({ equipe, currentUser, refresh }) => {
    return (
        <Card className='equipe-card' >
            {
                currentUser.username === equipe.auteur.username &&

                equipe.candidatures.length > 0 &&
                <Label color='red' floating>
                    {equipe.candidatures.length}
                </Label>
            }
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
                <ModalSavoirPlus refresh={refresh} currentUser={currentUser} equipe={equipe} />
                {
                    currentUser.username === equipe.auteur.username &&
                    <Link className='button ui' to={`/edit-team/${equipe._id}`} ><Icon name="pencil" /> Modifier </Link>
                }
            </CardMeta>
        </Card>
    );
}

export default EquipeCard;
