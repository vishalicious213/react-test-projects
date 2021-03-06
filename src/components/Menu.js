import React from 'react'
import { Link } from 'react-router-dom'

function Menu() {
    return (
        <div id='menu'>
            <ul id='navbar'>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/controlled'>Controlled Inputs</Link></li>
                <li><Link to='/customforms'>Custom Forms</Link></li>
                <li><Link to='/upload'>Upload File/Photo</Link></li>
                <li><Link to='/modal'>Toggle Modal</Link></li>
                <li><Link to='portal'>Portal Modal</Link></li>
                <li><Link to='cloudinary'>Cloudinary</Link></li>
                <li><Link to='/gcal'>Google Calendar</Link></li>
            </ul>
        </div>
    )
}

export default Menu;