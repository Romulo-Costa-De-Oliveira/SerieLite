import React from 'react'

import "./Header.css"

export default function Header(props){
    return (
        <div className="Header">
            <div className="Logo">SerieLite</div>
            <input type="text" className="search" id="search" />
        </div>
    );
}
