import React, { Component } from 'react';
import { Button, Container, Image } from 'semantic-ui-react'

class Accueil extends Component {

    render() {
        return (
            <div  className="accueil-body">
                <Container textAlign="center" >
                    <Image style={{ margin: "auto" }} src="images/logo.png" size="large" />
                    <h3>JOUEURS ● COACHING ● EQUIPES</h3>
                    <p>Votre plateforme de mise en relation entre joueurs et équipes, qui vous accompagne dans votre évolution grâce à du coaching personnalisé.</p>
                    <a>
                        <Button>Inscris toi</Button>
                    </a>
                </Container >

                <section>
                    <Image></Image>
                    <div>
                        <h2>Why</h2>
                        <p>Ullamco esse velit ipsum officia laboris veniam.
                        Consequat voluptate sit laborum proident laboris duis
                        minim deserunt veniam labore velit adipisicing eu.
                        Laboris cillum sit nulla nostrud fugiat nostrud sint ea dolor
                        aute.</p>
                    </div>
                </section>

                <section>
                    <div>
                        <h2>Who</h2>
                        <p>Ullamco esse velit ipsum officia laboris veniam.
                        Consequat voluptate sit laborum proident laboris duis
                        minim deserunt veniam labore velit adipisicing eu.
                        Laboris cillum sit nulla nostrud fugiat nostrud sint ea dolor
                        aute.</p>
                        <a>
                            <Button>Inscris toi</Button>
                        </a>
                    </div>
                    <Image></Image>
                </section>

                <section>
                <Image></Image>
                    <div>
                        <h2>How</h2>
                        <p>Ullamco esse velit ipsum officia laboris veniam.
                        Consequat voluptate sit laborum proident laboris duis
                        minim deserunt veniam labore velit adipisicing eu.
                        Laboris cillum sit nulla nostrud fugiat nostrud sint ea dolor
                        aute.</p>
                    </div>
                </section>
            </div>
        );
    }
}

export default Accueil;
