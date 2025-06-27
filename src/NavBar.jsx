
import React from 'react'
import { Link } from 'react-router-dom'


const NavBar = () => {
    return (
        <div className='navSection'>
            <ul>
                <Link to="/signup">
                    <li>First page</li>
                </Link>

                <Link to="/view">
                    <li>Second page</li>
                </Link>
                <li>Third page</li>
                <li>Fourth page</li>
            </ul>

        </div>
    )
}

export default NavBar