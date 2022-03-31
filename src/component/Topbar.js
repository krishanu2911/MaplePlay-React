import React from 'react'
import "../App.css"
import { Link } from 'react-router-dom';
// import
function Topbar() {
    return (
        <div className='topbar maple-flex'>
            <Link to="/login"><button className='topbarBtn boldest-font'>Login</button></Link>
            <Link to="/signup"><button className='topbarBtn boldest-font'>Signup</button></Link>
        </div>
    )
}
export default Topbar;