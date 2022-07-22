import React from "react";
import { Icon, Image, List, Button, Flag } from 'semantic-ui-react'

const SearchList = ({ type, availableList, addSelectedItem, isIcon }) => {
    return (
        <div style={{ marginTop: 30, maxHeight: "500px",  overflowY: "scroll" }}>
            <List inverted divided>
                {
                    availableList.length > 0 ?
                        availableList.map((item, i) => (
                            <List.Item key={i}>
                                <Button onClick={() => addSelectedItem(item)} inverted basic circular icon="plus" />
                                {
                                    type === "langues" ?
                                        <div style={{ display: "inline-flex" }}>
                                            <div>{item.name}</div>
                                            <Flag name={item.countryCode} />
                                        </div>
                                        :
                                        isIcon ?
                                            <div style={{ display: "inline" }}>
                                                <Icon style={{ marginLeft: 10 }} name={item.icon} />
                                            </div> :
                                            <Image size="tiny" src={item.icon} />
                                }
                            </List.Item>
                        ))
                        : <List.Item>Plus d'élement disponible...</List.Item>
                }
            </List>
        </div>
    );
}

export default SearchList;