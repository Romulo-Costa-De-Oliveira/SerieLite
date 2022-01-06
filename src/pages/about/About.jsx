import React, { Fragment } from 'react';
import './style.css';
import Menu from '../../components/menu/Menu';



export default function About() {
    return (
        <Fragment>
            <Menu />
            <div className="title">
                <h1>About</h1>
                <p className="description">Lorem ipsum dolor sit amet, consectetur adip Lorem ipsum dolor sit amet, consectetur adipLorem ipsum dolor sit amet, consectetur adip</p>
            </div>
        </Fragment>
    );
}