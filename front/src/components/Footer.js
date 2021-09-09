import React, { Component } from 'react';
import '../App.css'
import { Image } from 'semantic-ui-react'

class Navigation extends Component {

    render() {
        return (
            <footer>
                <ul>
                    <li>Lien 1</li>
                    <li>Lien 2</li>
                    <li>Lien 3</li>
                </ul>
                <Image  />
            </footer>
        );
    }
}

export default Navigation;
