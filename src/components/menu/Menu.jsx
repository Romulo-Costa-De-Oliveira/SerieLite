import React from 'react';
import Tab from "../tab/Tab"

export default function Menu() {
    return (
        <div className="tabs">
            
            <Tab text="Lançamentos" target="news" />
            <Tab text="Populares" target="toprated" />
            <Tab text="Buscar" target="search" />
            <Tab text="Sobre" target="about"/>

        </div>
    )
}