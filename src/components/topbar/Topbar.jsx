import React from 'react'
import "./topbar.scss"
import { Facebook, Instagram, LinkedIn } from '@material-ui/icons'

export default function Topbar({ menuOpen, setMenuOpen }) {
    return (
        <div className={'topbar ' + (menuOpen && "active")}>
            <div className="wrapper">
                <div className="left">
                    <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
                        <span className="line1"></span>
                        <span className="line2"></span>
                        <span className="line3"></span>
                    </div>
                </div>
                <div className="middle">
                    <a href="#intro" className='logo'>Portfo<span className='halflogo'>lio...</span></a>
                </div>
                <div className="right">
                    <div className="itemContainer">
                        <a href="https://www.facebook.com/profile.php?id=100027357120050" target="_blank"><Facebook className="icon" /></a>
                    </div>
                    <div className="itemContainer">
                        <a href="https://www.instagram.com/sky_rathod_001/" target="_blank"><Instagram className="icon" /></a>
                    </div>
                    <div className="itemContainer">
                        <a href="https://www.linkedin.com/in/akash-rathod-6588491b4/" target="_blank"><LinkedIn className="icon" /></a>
                    </div>
                </div>
            </div>
        </div>
    )
}
