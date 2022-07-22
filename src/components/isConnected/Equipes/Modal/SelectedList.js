import React from "react";
import { Image, List, Button, Icon, Flag } from 'semantic-ui-react'

const SelectedList = ({ type, selectedList, removeSelectedItem, list, isIcon }) => {
    return (
        <List divided inverted>
            {
                selectedList.length > 0 ?
                    selectedList.map((item, i) => (
                        <List.Item key={i}>
                            <Button onClick={() => removeSelectedItem(item)} inverted basic circular icon="minus" />
                            {
                                type === "langues" ?
                                    <div style={{ display: "inline-flex" }}>
                                        <div>{item.name}</div>
                                        <Flag name={item.countryCode} />
                                    </div> :
                                    isIcon ?
                                        <div style={{ display: "inline" }}>
                                            <Icon style={{ marginLeft: 10 }} name={item.icon} />
                                        </div> :
                                        <Image src={item.icon} size="tiny" />
                            }
                        </List.Item>
                    ))
                    : <p>Veuillez sélectionner {list.single}.</p>
            }
        </List>
    );
}

export default SelectedList;