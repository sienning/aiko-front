import React from "react";
import { Image, Grid, Divider } from 'semantic-ui-react';

/**
 * 
 * @param {Object} member { icon, firstname, lastname, pseudo }
 * @returns 
 */
const MemberCard = ({member}) => {
    return (
        <Grid colums={2} >
            <Grid.Column>
                <Image src={member.icon} size="medium" />
            </Grid.Column>
            <Grid.Column>
                <p>{member.firstname} {member.lastname}</p>
                <Divider/>
                <p style={{ fontWeight: 30 }}>{member.pseudo}</p>
            </Grid.Column>
        </Grid>
    );
}

export default MemberCard;