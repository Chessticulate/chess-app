import React from 'react'; // Import React (not { React })
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

export default Navbar;