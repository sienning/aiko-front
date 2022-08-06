import React, { useState } from 'react';
import { Modal, Icon, Button, Divider, Container, Header } from 'semantic-ui-react'
import SearchMemberBarModal from './SearchMemberBarModal';
import SearchMemberList from './SearchMemberList';
import SelectedMemberList from './SelectedMemberList';

const ModalAddMember = ({ editFunc, list, currentList }) => {
    // const originalList = list
    const [open, setOpen] = useState(false)
    const [selectedList, setSelectedList] = useState(currentList)
    const [availableList, setAvailableList] = useState(list)
    const [updatedList, setUpdatedList] = useState(list)

    const addSelectedItem = (item) => {
        setSelectedList([...selectedList, item]);
        setAvailableList(availableList.filter(elt => elt.username !== item.username));
        setUpdatedList(updatedList.filter(elt => elt.username !== item.username));
    }

    const removeSelectedItem = (item) => {
        setAvailableList([...availableList, item]);
        setUpdatedList([...updatedList, item]);
        setSelectedList(selectedList.filter(elt => elt.username !== item.username));
    }

    const handleSearchBar = (filteredDirectory) => {
        if (filteredDirectory.length > 0) {
            setAvailableList(makeNewAvailableList(filteredDirectory));
        } else {
            setAvailableList(updatedList)
        }
    }

    const handleSubmit = () => {
        editFunc(selectedList);
        setOpen(false);
    }

    const makeNewAvailableList = (filteredDirectory) => {
        let res = availableList.filter(elt => filteredDirectory.includes(elt.username))
        return res;
    }

    return (
        <Modal
            closeIcon
            open={open}
            onClose={() => setOpen(false)}
            onOpen={() => setOpen(true)}
            trigger={
                <Icon link className='icon-edit' size='big' name="plus" onClick={() => setOpen(false)} />
            }
        >
            <h1> {list.name} </h1>
            <Modal.Content>
                <Header>Rechercher un joueur</Header>
                <SelectedMemberList
                    selectedList={selectedList}
                    removeSelectedItem={removeSelectedItem}
                />
                <Divider />
                <SearchMemberBarModal repertoires={availableList} handleSearchBar={handleSearchBar} placeholder={`Rechercher un joueur`} />
                <SearchMemberList
                    availableList={availableList}
                    addSelectedItem={addSelectedItem}
                />
                <Container style={{ marginTop: 40 }} textAlign="center" >
                    <Button type="submit" onClick={handleSubmit} >Valider</Button>
                </Container>
            </Modal.Content>
        </Modal>
    );
}

export default ModalAddMember;
