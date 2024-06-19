import yashImg from '../assets/images/logo-yash.svg'
import githubImg from '../assets/images/icon-github.svg'
import linkedinImg from '../assets/images/icon-linkdein.svg'
import hungburgerImg from "../assets/images/icon-menu.svg"
import crossIcon from "../assets/images/icon-x.svg"
import { NavLink, useParams } from 'react-router-dom'
import { closeNav, openNav } from '../util/navbar'
import { useState } from 'react'

export default function Header() {
    const [isClick, setIsClick] = useState(false);
    function handleCloseNav() {
        closeNav();
    }
    function handleOpenNav() {
        openNav();
        setIsClick(true)
    }
    return (
        <div className="topnav" id="myTopNav">
            <div className="topnav_logo">
                <img src={yashImg} alt="23yash" />
            </div>
            <div className="navbar_flex">
                <div className="responsive cross" onClick={handleCloseNav}>
                    <img src={crossIcon} alt="" />
                </div>
                <div className="topnav_links" onClick={isClick && handleCloseNav}>
                    <NavLink to="/" activeClassName="active">Home</NavLink>
                    <NavLink to="/about" activeClassName="active">About</NavLink>
                    <NavLink to="/techstack" activeClassName="active">Tech Stack</NavLink>
                    <NavLink to="/projects" activeClassName="active">Project</NavLink>
                    <NavLink to="/achievements" activeClassName="active">Achievements</NavLink>
                    <NavLink to="/contact" activeClassName="active">Contact</NavLink>
                </div>
                <div className="topnav_socialmedia">
                    <a href="https://github.com/Yash1Hingu" target="_blank">
                        <img src={githubImg} alt="github" />
                    </a>
                    <a href="https://www.linkedin.com/in/hinguyash/" target="_blank">
                        <img src={linkedinImg} alt="linkdein" />
                    </a>
                </div>
            </div>
            <div className="responsive" onClick={handleOpenNav}>
                <img src={hungburgerImg} alt="" />
            </div>
        </div>
    )
}