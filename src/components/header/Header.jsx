import React, { useState, } from 'react'
import { withRouter } from 'react-router-dom'

import "./Header.css"

function Header(props) {

    const [search, setSearch] = useState("");

    function buscar(e) {
        props.history.push("/search")
        console.log(e)
    }

    return (
        <div className="Header">
            <div className="Logo">SerieLite</div>
            <form className="searchBar" onSubmit={buscar}>
                <input
                    type="text"
                    className="search"
                    name="query"
                    id="search"
                    onChange={e => setSearch(e.target.value)}
                />
                <button type="submit"><span className="material-icons" type="submit">search</span></button>
            </form>
        </div>
    )
}
export default withRouter(Header)