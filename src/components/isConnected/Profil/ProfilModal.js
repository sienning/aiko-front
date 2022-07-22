import React from 'react'
import { Button, Image, Modal } from 'semantic-ui-react'

function ProfilModal({userInfos}) {
  const [open, setOpen] = React.useState(false);

  return (
    <Modal
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
      trigger={<Image circular style={{ margin: "auto" }} alt="Logo-Aiko" src={`${process.env.REACT_APP_FRONT}/images/${userInfos.avatar}`} size="small" />}
    >
      <Modal.Header>Selectionne une image de profil</Modal.Header>
      <Modal.Content image>
        <Image size='medium' src={`${process.env.REACT_APP_FRONT}/images/${userInfos.avatar}`} wrapped />
      </Modal.Content>
      <Modal.Actions>
        <Button color='black' onClick={() => setOpen(false)}>
          Fermer
        </Button>
        <Button
          content="Cela me convient"
          labelPosition='right'
          icon='checkmark'
          onClick={() => setOpen(false)}
          positive
        />
      </Modal.Actions>
    </Modal>
  )
}

export default ProfilModal