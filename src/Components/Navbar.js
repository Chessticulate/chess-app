import { React, useState } from 'react';
import PropTypes from 'prop-types';
import {BrowserRouter, Link} from "react-router-dom";
import '../Styles/Navbar.css';

const Navbar = (setChess, setTicTac) => {
    // const toggleChess = () => {

    // }

    return (
        <nav className='nav'>
            <a href='/' className='title'>Davenglaws Website</a>
            <ul>
                <li>
                    <p onClick={setChess(true)}>Chess</p>
                </li>
                <li>
                    <p>TicTacToe</p>
                </li>    
            </ul>
        </nav>
    );
};

Navbar.propTypes = {};

export default Navbar;