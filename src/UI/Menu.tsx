import React from 'react';
import "../styles/PageStyle.css"
import MenuButton from './MenuButton';


function Menu() {
    return(
       <div id = "menu">
            <ul>
            <MenuButton Name='TouhouGPT' Reference='/TouhouGPT' />
            <MenuButton Name='C#' Reference='/' />
            <MenuButton Name='JavaScript' Reference='/' />
            </ul>
       </div> 
    )
}

export default Menu;