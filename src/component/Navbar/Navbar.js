import React from 'react'
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <div>
            <Link to="/">Home</Link>
            <Link to="/playlist">Playlistpage</Link>
            <Link to="/videolist">Videolistpage</Link>
        </div>
    )
}
export default Navbar;