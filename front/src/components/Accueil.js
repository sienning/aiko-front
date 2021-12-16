import React, { Component } from 'react';
import { Button, Container, Image } from 'semantic-ui-react';
import { Carousel } from 'react-carousel-minimal';

class Accueil extends Component {
    data = [
        {
            image : "images/evenement.png",
            caption : "Open World Event",
        }
    ];

    captionStyle = {
        fontSize: '2em',
        fontWeight: 'bold',
    }

    render() {
        return (
            <div  className="accueil-body">
                <Container textAlign="center" >
                    <Image style={{ margin: "auto" }} src="images/logo.png" size="large" />
                    <h3>JOUEURS <span>●</span> COACHING <span>●</span> EQUIPES</h3>
                    <p>Votre plateforme de mise en relation entre joueurs et équipes, qui vous accompagne dans votre évolution grâce à du coaching personnalisé.</p>
                </Container >

                <section>
                    <div className="accueil-banBack">
                        <a href="/">
                            <Button>Inscris toi</Button>
                        </a>
                    </div>
                </section>

                <section className="accueil-imgText">
                    <Image src="images/why-min.png"/>
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
                    <Image src="images/who-min.png"/>
                </section>

                <section className="accueil-imgText">
                <Image src="images/how-min.png"/>
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
                    <Image src="images/banniereSeule.png"/>
                </div>

                <section className='accueil-car'>
                    <h1>Les évènement Aiko</h1>
                <Carousel
                    data = {this.data}
                    time={10000} automatic={false} pauseIconColor="white" pauseIconSize="40px"
                    width="800px" height="300px" radius="0"
                    captionStyle={this.captionStyle}
                    slideNumber={false} 
                    dots={true}
                    slideNumberStyle={this.slideNumberStyle}
                    captionPosition="bottom"  
                    slideBackgroundColor="darkgrey"
                    slideImageFit="cover"
                    thumbnails={false}
                    thumbnailWidth="100px"
                />
                </section>

                

            </div>
        );
    }
}

export default Accueil;
