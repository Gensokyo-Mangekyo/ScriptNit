import React from 'react';
import IMenuButton from '../Interfaces/IMenuButton';
import "../styles/PageStyle.css"


function MenuButton(ButtonInfo: IMenuButton) {
    return(
        <a href={ButtonInfo.Reference}><li>{ButtonInfo.Name}</li></a>
  
    )
}

export default MenuButton;