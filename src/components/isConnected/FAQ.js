import React, { Component } from 'react';
import '../App.css';
import { Container, Header, Image, Accordion, Button, Divider } from 'semantic-ui-react'

const panels = [
    {
        key: 'what-is-dog',
        title: 'What is a dog?',
        content: [
            'A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can be found as a welcome',
            'guest in many households across the world.',
        ].join(' '),
    },
    {
        key: 'kinds-of-dogs',
        title: 'What kinds of dogs are there?',
        content: [
            'There are many breeds of dogs. Each breed varies in size and temperament. Owners often select a breed of dog',
            'that they find to be compatible with their own lifestyle and desires from a companion.',
        ].join(' '),
    },
    {
        key: 'acquire-dog',
        title: 'How do you acquire a dog?',
        content: {
            content: (
                <div>
                    <p>
                        Three common ways for a prospective owner to acquire a dog is from
                        pet shops, private owners, or shelters.
                    </p>
                    <p>
                        A pet shop may be the most convenient way to buy a dog. Buying a dog
                        from a private owner allows you to assess the pedigree and
                        upbringing of your dog before choosing to take it home. Lastly,
                        finding your dog from a shelter, helps give a good home to a dog who
                        may not find one so readily.
                    </p>
                </div>
            ),
        },
    },
]

class FAQ extends Component {
    render() {
        return (
            <div className='faq'>
                <Container>
                    <div style={{ textAlign: "center", marginBottom: 20 }}>
                        <Image style={{ margin: "auto" }} alt="Logo-Aiko" src="/images/logo.png" size="tiny" />
                        <Header as="h1">Une question ?</Header>
                    </div>
                    <Divider horizontal>Thème</Divider>
                    <Container style={{ width: 500, marginBottom: 100 }}>
                        <Accordion inverted panels={panels} />
                    </Container>
                    <Divider horizontal>Thème</Divider>
                    <Container style={{ width: 500, marginBottom: 100 }}>
                        <Accordion inverted panels={panels} />
                    </Container>
                    <Container style={{ width: 600, marginBottom: 60 }} textAlign="justify">
                        <p>Vous n'avez pas trouvé la réponse à votre question ?</p>
                        <p>Venez nous la poser sur Discord</p>
                    </Container>
                    <Container textAlign="center">
                        <Button onClick={() => window.open("https://discord.gg/SXhDhU6nNg", '_blank')} icon="discord" content="Rejoignez-nous" />
                    </Container>
                </Container>
            </div>
        );
    }
}

export default FAQ;
