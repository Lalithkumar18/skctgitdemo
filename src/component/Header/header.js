import React from 'react';
import './header.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faSearch} from '@fortawesome/free-solid-svg-icons';
import icon from './icon.jpg';
import profile from './profile1.png';
//import { useNavigate } from 'react-router-dom';
export const Navbar=()=>
{
    //const navigate= useNavigate();
    return(
        <div className='navbar'>

            <img src={icon} alt="" className='logo'/>
            <h1 className='H'>EPIC</h1> <h1 className='L'>MARKET</h1>

            <ul>
                <a href='/Body'><li>Home</li></a>
                <a href='/Shop'><li>Grocery</li></a>
                <a href='/About'><li>About</li></a>
                <a href='/Review'><li>Review</li></a>
                <li>Dashboard</li>
            </ul>
            <div className='search-box'>
                <input type="text" placeholder='Search'/><FontAwesomeIcon icon={faSearch} className='co'/>
            </div>
            <br></br>
            <a href='/Login' ><img src={profile} alt="" className='profileIcon'/></a>

        </div>
    )
}