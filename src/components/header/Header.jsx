import React, { useState, } from 'react'
import { withRouter } from 'react-router-dom'

import "./Header.css"

function Header(props) {

    const [search, setSearch] = useState("");

    function buscar(e) {
        e.preventDefault()
        props.history.push("/search")
    }

    return (
        <div className="Header">
            <div className="Logo">SerieLite</div>
            <form onSubmit={buscar}>
                <input
                    type="text"
                    className="search"
                    name="query"
                    id="query"
                    onChange={e => setSearch(e.target.value)}
                />
                <button type="submit">procurar</button>
            </form>
        </div>
    )
}
export default withRouter(Header)