import React from 'react';
import './styles.css'
import {Link} from 'react-router-dom';

function Nav(){

    const navStyle = {
        color: 'white'
    };

    return (
        <nav className="nav-bar">
            <Link style={navStyle} to='/'>
                <img 
                src="https://www.reddingdesigns.com/images/icons/nav-home.png"
                alt="new" className="foto-nav"
                />
            </Link>
            
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