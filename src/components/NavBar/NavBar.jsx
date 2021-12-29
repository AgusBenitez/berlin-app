import React from 'react';
import '../NavBar/NavBar.css';

const NavBar = () => {
    return (
        <>
            <nav>
                <a className='navBrand' href='#'><h1>Bookings</h1></a>
                <div className='navButtons'>
                    <a href='#'>Log in</a>
                    <button>Sign up</button>
                </div>
            </nav>
        </>
    )
}

export default NavBar
