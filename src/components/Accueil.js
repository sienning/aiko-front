import React, { Component } from 'react';
import { Button, Container, Icon, Image } from 'semantic-ui-react';
import '../slider.js';

class Accueil extends Component {
   
    render() {
        return (
            <div  className="accueil-body">
                <iframe className='accueil-video'
                    src='https://www.youtube.com/embed/mDYqT0_9VR4?autoplay=1&mute=1&loop=1&controls=0&disablekb=1&modestbranding=0&showinfo=0&playlist=mDYqT0_9VR4'
                    frameborder='0'
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
                    <Image src="images/leviathan-corps.png"/>

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

                <section className="accueil-commentaire">
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

                <section className="accueil-imgText imgTextSwap">
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
                <section className='accueil-car'>
                    <h1>Les évènements Aiko</h1>
                    <div id='carousel1'>
                            <div className='item'>
                                <div className='carousel-image-event'>
                                    <a href='/'>
                                        <div className='carousel-image-text'>
                                            <h2 className='carousel-image-titre'>
                                                Open World Event
                                            </h2>
                                            <p className='carousel-image-date'>
                                                Lundi 9 octobre
                                            </p>
                                            <p className='carousel-image-participation'>
                                                Je participe <Icon name='long arrow alternate right' />
                                            </p>
                                        </div>
                                    </a>
                                </div>
                            </div>
                            <div className='item'>
                                <div className='carousel-image-event'>
                                    <a href='/'>
                                        <div className='carousel-image-text'>
                                            <h2 className='carousel-image-titre'>
                                                Open World Event Test
                                            </h2>
                                            <p className='carousel-image-date'>
                                                Lundi 9 octobre
                                            </p>
                                            <p className='carousel-image-participation'>
                                                Je participe <Icon name='long arrow alternate right' />
                                            </p>
                                        </div>
                                    </a>
                                </div>
                            </div>  
                    </div>
                    
                    <a href="/">
                        <Button className="button">Inscris toi !</Button>
                    </a>
                </section>

            </div>
        );
    }
}

export default Accueil;
