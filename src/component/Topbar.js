import React from 'react'
import "../App.css"
import { Link } from 'react-router-dom';
function Topbar() {
    return (
        <div className='topbar maple-flex'>
            <h1 className='lightcolor'>Maple Play</h1>
            <div className='gap-m maple-flex'>
             <Link to="/login"><button className='topbarBtn boldest-font'>Login</button></Link>
            <Link to="/signup"><button className='topbarBtn boldest-font'>Signup</button></Link>   
            </div>
        </div>
    )
}
export default Topbar;