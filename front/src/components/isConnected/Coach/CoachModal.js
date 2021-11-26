import React, { useState } from 'react';
import { Modal, Card } from 'semantic-ui-react'
import CoachCard from './CoachCard';

const CoachModal = ({ user }) => {
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
            ><CoachCard user={user} /></Card>}
        >
            <Modal.Header>{user.username}</Modal.Header>

        </Modal>
    )
}

export default CoachModal;