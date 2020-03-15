import React from 'react';
import './styles.css'
import {Link} from 'react-router-dom';

function Nav(){

    const navStyle = {
        color: 'white'
    };

    return (
        <nav className="nav-bar">
            <h3>Logo</h3>
            <ul className="nav-links">
                <Link style={navStyle} to='/allbabies'>
                    <li>Babies</li>
                </Link>
                <Link style={navStyle} to='/allevents'>
                    <li>Events</li>
                </Link>
            </ul>
        </nav>
    )
}
export default Nav;