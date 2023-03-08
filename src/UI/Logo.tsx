import React from 'react';
import "../styles/PageStyle.css"


function Header() {
    return(
       <div id = "logo">
            <a title='На главную' href='/'>ScriptNit</a>
            <div>Сайт о скриптинге</div>
       </div> 
    )
}

export default Header;