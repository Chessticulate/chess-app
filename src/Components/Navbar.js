import React from 'react'; // Import React (not { React })
import PropTypes from 'prop-types';
import '../Styles/Navbar.css';

const Navbar = ({ toggleChess, toggleTicTac }) => {
    return (
        <nav className='nav'>
            <header className='title'>Davenglaws Website</header>
            <ul>
                <li>
                    <p onClick={() => toggleChess()}>Chess</p>
                </li>
                <li>
                    <p onClick={() => toggleTicTac()}>TicTacToe</p>
                </li>    
            </ul>
        </nav>
    );
};

Navbar.propTypes = {
    toggleChess: PropTypes.func.isRequired,
    toggleTicTac: PropTypes.func.isRequired
};

export default Navbar;