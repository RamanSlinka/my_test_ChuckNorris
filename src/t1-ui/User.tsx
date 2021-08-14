import React, {FC} from 'react';
// Styles
import {Wrapper} from './User.styles';


const User: FC<any> = ({nameCard, img}) => {

    return (
        <div>
            <Wrapper>
               <img src={img} alt="ChuckFace"/>
                {nameCard}
            </Wrapper>
        </div>
    )
}


export default User;