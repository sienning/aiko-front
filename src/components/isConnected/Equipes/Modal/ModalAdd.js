import React, { useState } from 'react';
import { Modal, Icon, Button, Divider, Container } from 'semantic-ui-react'
import SearchBarModal from './SearchBarModal';
import SearchList from './SearchList';
import SearchReseauxList from './SearchReseauxList';
import SelectedList from './SelectedList';
import SelectedReseauxList from './SelectedReseauxList';

/**
 * 
 * Pour le premier tu as 5 choix : 
    Top lane
    Jungle
    Mid Lane
    Adc
    Support
 * Et dans les rang tu as : 
    Fer 
    Bronze
    Argent
    Or
    Platine
    Diamand
    Master 
    Grand Master 
    Challenger
 */
const ModalAdd = ({ type, editFunc, list, currentList, isIcon }) => {
    const originalList = list.results
    const [open, setOpen] = useState(false)
    const [selectedList, setSelectedList] = useState(currentList)
    const [availableList, setAvailableList] = useState(list.results)
    const [updatedList, setUpdatedList] = useState(list.results)

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
                <div>
                    {
                        type === "reseaux" ?
                            <SelectedReseauxList
                                selectedList={selectedList}
                                removeSelectedItem={removeSelectedItem}
                                list={list}
                                handleAddLink={handleAddLink}
                            />
                            : <SelectedList
                                type={type}
                                selectedList={selectedList}
                                removeSelectedItem={removeSelectedItem}
                                list={list}
                            />
                    }
                </div>
                <Divider />
                <SearchBarModal repertoires={availableList} handleSearchBar={handleSearchBar} placeholder={`Rechercher ${list.single}`} />
                {/* <Input disabled={availableList.length > 0 ? false : true} onChange={handleSearchBar} fluid placeholder={`Rechercher un ${list.single}`} /> */}
                {
                    type === "reseaux" ?
                        <SearchReseauxList
                            availableList={availableList}
                            addSelectedItem={addSelectedItem}
                        /> :
                        <SearchList
                            type={type}
                            availableList={availableList}
                            addSelectedItem={addSelectedItem}
                            isIcon={isIcon}
                        />
                }
                <Container textAlign="center" >
                    <Button type="submit" onClick={handleSubmit} >Valider</Button>
                </Container>
            </Modal.Content>
        </Modal>
    );
}

export default ModalAdd;
