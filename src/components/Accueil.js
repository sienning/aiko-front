import React, { Component } from 'react';
import { Button, Container, Image } from 'semantic-ui-react';
// import Carousel from '../components/Slider';

class Accueil extends Component {
    render() {
        return (
            <div  className="accueil-body">
                <iframe className='accueil-video'
                    src='https://www.youtube.com/embed/mDYqT0_9VR4?autoplay=1&mute=1&loop=1&controls=0&disablekb=1&modestbranding=0&showinfo=0&playlist=mDYqT0_9VR4'
                    frameBorder='0'
                    allow='autoplay; encrypted-media;'
                    allowfullscreen
                    title='League of legends'
                />
                <Container textAlign="center" className='accueil-video-hover' >
                    <Image src="images/logo.png" className='logo-accueil'/>
                    <h3>JOUEURS <span>●</span> COACHING <span>●</span> EQUIPES</h3>
                    <p>Votre plateforme de mise en relation entre joueurs et équipes, qui vous accompagne dans votre évolution grâce à du coaching personnalisé.</p>
                    <div className="accueil-banBack">
                        <a href="/inscription">
                            <Button>Inscris toi</Button>
                        </a>
                    </div>
                    <div className='accueil-leviathanSide'>
                    </div>
                </Container >

                <section className="accueil-imgText">
                    <Image src="images/why.png"/>
                    <div>
                        <h2>Qui sommes nous?</h2>
                        <p>Aiko est une équipe composé de plusieurs étudiants. 
                        Nous avons décidé de créer Aiko afin d’aider les joueurs à s’intégrer dans l’Esport !
                        Nous mettons en relation les joueurs et coach afin qu’ils puissent se développer personnelement afin d’atteindre leurs objectifs.</p>
                    </div>
                </section>

                {/* <section className="accueil-commentaire" id="desktop">
                    <h2>Témoignages</h2>
                    <div>
                        <Image className="img" src="https://via.placeholder.com/100x100"/>
                        <div>
                            <div className="title">
                                <h3>Bananape</h3>
                                <p>★ ★ ★ ★</p>
                            </div>
                            <div className="message">
                                <p>"Ullamco esse velit ipsum officia laboris veniam.
                        Consequat voluptate sit laborum proident laboris duis
                        minim deserunt veniam labore velit adipisicing eu."</p>
                            </div>
                        </div>
                    </div>
                </section> */}

                {/* <section className="accueil-commentaire" id="mobile">
                    <h2>Témoignages</h2>
                    <div>
                        <div>
                            <Image className="img" src="https://via.placeholder.com/100x100"/>
                            <div className="title">
                                <h3>Bananape</h3>
                                <p>★ ★ ★ ★</p>
                            </div>
                        </div>
                        <div className="message">
                                <p>"Ullamco esse velit ipsum officia laboris veniam.
                        Consequat voluptate sit laborum proident laboris duis
                        minim deserunt veniam labore velit adipisicing eu."</p>
                            </div>
                    </div>
                </section> */}

                <section className="accueil-imgText imgTextSwap" id="desktop">
                    <div>
                        <h2>Les Coachs</h2>
                        <p>Les Aikoach ont pour but de vous faire atteindre vos objectifs personnels en s’adaptant à votre profil.
                             Ensemble, nous allons vous faire découvrir l’experience que vis un joueur Esport !
                             Coach Mental ou Coach Technique sont les prestations que nous mettons en avant pour réaliser vos objectifs.</p>
                    </div>
                    <Image src="images/who.png"/>
                    <div className='accueil-leviathanSide2'>
                    </div>
                </section>


                <section className="accueil-imgText imgTextSwap" id="mobile">
                    <Image src="images/who.png"/>
                    <div>
                        <h2>Les Coachs</h2>
                        <p>Les Aikoach ont pour but de vous faire atteindre vos objectifs personnels en s’adaptant à votre profil.
                             Ensemble, nous allons vous faire découvrir l’experience que vis un joueur Esport !
                             Coach Mental ou Coach Technique sont les prestations que nous mettons en avant pour réaliser vos objectifs.</p>
                    </div>
                </section>

                <section className="accueil-imgText">
                <Image src="images/how.png"/>
                    <div>
                        <h2>Section équipe</h2>
                        <p>Ullamco esse velit ipsum officia laboris veniam.
                        Consequat voluptate sit laborum proident laboris duis
                        minim deserunt veniam labore velit adipisicing eu.
                        Laboris cillum sit nulla nostrud fugiat nostrud sint ea dolor
                        aute.Ullamco esse velit ipsum officia laboris veniam.
                        Consequat voluptate sit laborum proident laboris duis
                        minim deserunt veniam labore velit adipisicing eu.
                        Laboris cillum sit nulla nostrud fugiat nostrud sint ea dolor
                        aute.</p>
                        <a href="/teams">
                            <Button className="button">Mon équipe</Button>
                        </a>
                    </div>
                    <div className="accueil-leviathanSide3">
                    </div>
                </section>

                <div className="accueil-carrou">
                    <div className='accueil-leviathanSide4'>
                    </div>
                    <a href='/'>
                        <div className='carrou'>
                            <p className='title'>World Event Tournament</p>
                            <small className='subtitle'>25 avril</small>
                            <small className='subtitle'>Je participe ➜</small>
                        </div>
                    </a>
                </div>

                {/* <Carousel></Carousel> */}

            </div>
        );
    }
}

export default Accueil;
