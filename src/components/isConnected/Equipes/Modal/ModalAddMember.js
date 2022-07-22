import React, { useState } from 'react';
import { Modal, Icon, Button, Divider, Container, Header } from 'semantic-ui-react'
import SearchBarModal from './SearchBarModal';
import SearchMemberList from './SearchMemberList';
import SelectedMemberList from './SelectedMemberList';

const ModalAddMember = ({ editFunc, list, currentList }) => {
    const originalList = list
    const [open, setOpen] = useState(false)
    const [selectedList, setSelectedList] = useState(currentList)
    const [availableList, setAvailableList] = useState(list)
    const [updatedList, setUpdatedList] = useState(list)

    const addSelectedItem = (item) => {
        setSelectedList([...selectedList, item]);
        setAvailableList(availableList.filter(elt => elt.name !== item.name));
        setUpdatedList(updatedList.filter(elt => elt.name !== item.name));
    }

    const removeSelectedItem = (item) => {
        setAvailableList([...availableList, item]);
        setUpdatedList([...updatedList, item]);
        setSelectedList(selectedList.filter(elt => elt.name !== item.name));
    }

    const handleSearchBar = (filteredDirectory) => {
        console.log("NewAvailableList : ", makeNewAvailableList(filteredDirectory));
        if (filteredDirectory.length > 0) {
            setAvailableList(makeNewAvailableList(filteredDirectory));
        } else {
            setAvailableList(updatedList)
        }
    }

    const handleAddLink = (value, id) => {
        var newSelectedList = selectedList;
        newSelectedList[id].linkAddress = value;
        setSelectedList(newSelectedList);
    }

    const handleSubmit = () => {
        console.log("selectedList: ", selectedList);
        editFunc(selectedList);
        setOpen(false);
    }

    const makeNewAvailableList = (filteredDirectory) => {
        let res = availableList.filter(elt => filteredDirectory.includes(elt.name))
        return res;
    }

    return (
        <Modal
            closeIcon
            open={open}
            onClose={() => setOpen(false)}
            onOpen={() => setOpen(true)}
            trigger={
                <Icon link className='icon-edit' size='big' name="pencil" onClick={() => setOpen(false)} />
            }
        >
            <h1> {list.name} </h1>
            <Modal.Content>
                <Header>Rechercher un joueur</Header>
                <SelectedMemberList
                    availableList={availableList}
                    removeSelectedItem={removeSelectedItem}
                />
                <Divider />
                <SearchBarModal repertoires={availableList} handleSearchBar={handleSearchBar} placeholder={`Rechercher un joueur`} />
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
