import React from 'react';
import { Image, Card, CardContent, Feed, CardMeta } from 'semantic-ui-react';
import ModalConnexion from './ModalSavoirPlus';

const EquipeCard = ({ nom }) => {
    return (
        <Card className='equipe-card' >
            <CardContent>
                <Feed>
                    <Feed.Event>
                        <Feed.Label className='img-icon' image='/images/equipe-icon.png' />
                        <Feed.Content>
                            <Feed.Summary>
                                {nom}
                            </Feed.Summary>
                            {/* <Rating defaultRating={note} maxRating={5} disabled /> */}
                        </Feed.Content>
                    </Feed.Event>
                </Feed>
                <div>
                    <p>Profil recherché :</p>
                    <div className='criterias'>
                        <div>
                            <Image src="/images/equipe-critere-1.png" />
                        </div>
                        <div>
                            <Image src="/images/equipe-critere-2.png" />
                        </div>
                    </div>
                </div>

            </CardContent>
            <CardMeta>
                <ModalConnexion/>
            </CardMeta>
        </Card>
    );
}

export default EquipeCard;
