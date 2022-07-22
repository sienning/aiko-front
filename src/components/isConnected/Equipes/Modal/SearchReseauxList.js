import React from "react";
import { Icon, List, Button } from 'semantic-ui-react'

const SearchReseauxList = ({ availableList, addSelectedItem }) => {
    return (
        <List inverted divided>
            {
                availableList.length > 0 ?
                    availableList.map((item, i) => (
                        <List.Item key={i}>
                            <Button onClick={() => addSelectedItem(item)} inverted basic circular icon="plus" />
                            <div style={{ display: "inline" }}>
                                <Icon style={{ marginLeft: 10 }} name={item.icon} />
                            </div>
                        </List.Item>
                    ))
                    : <List.Item>Plus d'élement disponible...</List.Item>
            }
        </List>
    );
}

export default SearchReseauxList;