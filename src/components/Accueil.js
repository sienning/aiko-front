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
                        <a href="/">
                            <Button>Inscris toi</Button>
                        </a>
                    </div>
                    <div className='accueil-leviathanSide'>
                    </div>
                </Container >

                <section className="accueil-imgText">
                    <Image src="images/why.png"/>
                    <div>
                        <h2>Why</h2>
                        <p>Ullamco esse velit ipsum officia laboris veniam.
                        Consequat voluptate sit laborum proident laboris duis
                        minim deserunt veniam labore velit adipisicing eu.
                        Laboris cillum sit nulla nostrud fugiat nostrud sint ea dolor
                        aute.Ullamco esse velit ipsum officia laboris veniam.
                        Consequat voluptate sit laborum proident laboris duis
                        minim deserunt veniam labore velit adipisicing eu.
                        Laboris cillum sit nulla nostrud fugiat nostrud sint ea dolor
                        aute.</p>
                    </div>
                </section>

                <section className="accueil-commentaire" id="desktop">
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
                </section>

                <section className="accueil-commentaire" id="mobile">
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
                </section>

                <section className="accueil-imgText imgTextSwap" id="desktop">
                    <div>
                        <h2>Who</h2>
                        <p>Ullamco esse velit ipsum officia laboris veniam.
                        Consequat voluptate sit laborum proident laboris duis
                        minim deserunt veniam labore velit adipisicing eu.
                        Laboris cillum sit nulla nostrud fugiat nostrud sint ea dolor
                        aute.Ullamco esse velit ipsum officia laboris veniam.
                        Consequat voluptate sit laborum proident laboris duis
                        minim deserunt veniam labore velit adipisicing eu.
                        Laboris cillum sit nulla nostrud fugiat nostrud sint ea dolor
                        aute.</p>
                        <a href="/">
                            <Button className="button">Inscris toi !</Button>
                        </a>
                    </div>
                    <Image src="images/who.png"/>
                </section>

                <section className="accueil-imgText imgTextSwap" id="mobile">
                    <Image src="images/who.png"/>
                    <div>
                        <h2>Who</h2>
                        <p>Ullamco esse velit ipsum officia laboris veniam.
                        Consequat voluptate sit laborum proident laboris duis
                        minim deserunt veniam labore velit adipisicing eu.
                        Laboris cillum sit nulla nostrud fugiat nostrud sint ea dolor
                        aute.Ullamco esse velit ipsum officia laboris veniam.
                        Consequat voluptate sit laborum proident laboris duis
                        minim deserunt veniam labore velit adipisicing eu.
                        Laboris cillum sit nulla nostrud fugiat nostrud sint ea dolor
                        aute.</p>
                        <a href="/">
                            <Button className="button">Inscris toi !</Button>
                        </a>
                    </div>
                </section>

                <section className="accueil-imgText">
                <Image src="images/how.png"/>
                    <div>
                        <h2>How</h2>
                        <p>Ullamco esse velit ipsum officia laboris veniam.
                        Consequat voluptate sit laborum proident laboris duis
                        minim deserunt veniam labore velit adipisicing eu.
                        Laboris cillum sit nulla nostrud fugiat nostrud sint ea dolor
                        aute.Ullamco esse velit ipsum officia laboris veniam.
                        Consequat voluptate sit laborum proident laboris duis
                        minim deserunt veniam labore velit adipisicing eu.
                        Laboris cillum sit nulla nostrud fugiat nostrud sint ea dolor
                        aute.</p>
                    </div>
                </section>

                <div className="accueil-purpleDiv">
                    <Image src="images/frise-mini.png"/>
                </div>

                <div className="accueil-carrou">
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
