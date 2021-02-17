import React from 'react'
import { Link } from 'react-router-dom'

function Menu() {
    return (
        <div id='menu'>
            <ul id='navbar'>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/controlled'>Controlled Inputs</Link></li>
                <li><Link to='/customforms'>Custom Forms</Link></li>
                <li><Link to='/upload'>Upload</Link></li>
            </ul>
        </div>
    )
}

export default Menu;