import React from "react";
import { Icon, List, Button, Input } from 'semantic-ui-react'

const SelectedReseauxList = ({ selectedList, removeSelectedItem, list, handleAddLink }) => {
    return (
        <List divided inverted>
            {
                selectedList.length > 0 ?
                    selectedList.map((item, i) => (
                        <List.Item key={i}>
                            <Button onClick={() => removeSelectedItem(item)} inverted basic circular icon="minus" />
                            <div style={{ display: "inline" }}>
                                <Icon style={{ marginLeft: 10 }} name={item.icon} />
                                <div style={{ marginLeft: 40, display: "inline-flex" }}>
                                    <Input defaultValue={item.linkAddress} required onChange={(e, value) => handleAddLink(value.value, i)} label={item.link} placeholder="adresse" />
                                </div>
                            </div>
                        </List.Item>
                    ))

                    : <p>Veuillez sélectionner {list.single}.</p>
            }
        </List>
    );
}

export default SelectedReseauxList;