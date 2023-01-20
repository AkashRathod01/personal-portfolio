import React from 'react'
import "./menu.scss"
import { Facebook, Instagram, LinkedIn } from '@material-ui/icons'

export default function Menu(props) {
    return (
        <div className={'menu ' + (props.menuOpen && "active")}>
            <ul onClick={() => props.setMenuOpen(false)}>
                <li>
                    <a href="#intro">Home</a>
                </li>
                {/* <li>
                    <a href="#portfolio">Portfolio</a>
                </li> */}
                <li>
                    <a href="#skills">Skills</a>
                </li>
                <li>
                    <a href="#experiences">Experiences</a>
                </li>
                <li>
                    <a href="#projects">Projects</a>
                </li>
                <li>
                    <a href="#contact">Contact Me</a>
                </li>
                <li className='social-media'>
                    <div className="itemContainer">
                        <a href="https://www.facebook.com/profile.php?id=100027357120050" target="_blank"><Facebook className="icon" /></a>
                    </div>
                    <div className="itemContainer">
                        <a href="https://www.instagram.com/sky_rathod_001/" target="_blank"><Instagram className="icon" /></a>
                    </div>
                    <div className="itemContainer">
                        <a href="https://www.linkedin.com/in/akash-rathod-6588491b4/" target="_blank"><LinkedIn className="icon" /></a>
                    </div>
                </li>
            </ul>
        </div>
    )
}
