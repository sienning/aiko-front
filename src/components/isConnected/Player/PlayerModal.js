import React, { useState } from 'react';
import { Modal, Card } from 'semantic-ui-react'
import PlayerCard from './PlayerCard';

const PlayerModal = ({ player }) => {
    const [open, setOpen] = useState(false)

    return (
        <Modal
            closeIcon
            onClose={() => setOpen(false)}
            onOpen={() => setOpen(true)}
            open={open}
            trigger={<Card
                onClick={() => setOpen(true)}
                className="player_card"
                link
            ><PlayerCard player={player} /></Card>}
        >
            <Modal.Header>{player.username}</Modal.Header>

        </Modal>
    )
}

export default PlayerModal;