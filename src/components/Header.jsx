import yashImg from '../assets/images/logo-yash.svg'
import githubImg from '../assets/images/icon-github.svg'
import linkedinImg from '../assets/images/icon-linkdein.svg'
import hungburgerImg from "../assets/images/icon-menu.svg"
import crossIcon from "../assets/images/icon-x.svg"
import { NavLink, useParams } from 'react-router-dom'
import { closeNav, openNav } from '../util/navbar'
import { useContext, useEffect, useState } from 'react'
import { ThemeContext } from '../store/ThemeContext'

export default function Header() {
    const [isClick, setIsClick] = useState(false);
    function handleCloseNav() {
        closeNav();
    }
    function handleOpenNav() {
        openNav();
        setIsClick(true)
    }

    const { theme, toggleTheme } = useContext(ThemeContext);

    useEffect(() => {
        document.body.className = theme === 'light' ? 'light-mode' : '';
    }, [theme]);

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
                    <button onClick={toggleTheme} id='themebtn'>
                        {theme === 'light' ?
                            <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 24 24"><path fill="black" d="M12 3a9 9 0 1 0 9 9c0-.46-.04-.92-.1-1.36a5.389 5.389 0 0 1-4.4 2.26a5.403 5.403 0 0 1-3.14-9.8c-.44-.06-.9-.1-1.36-.1" /></svg>
                            :
                            <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 24 24"><path fill="white" fill-rule="evenodd" d="M12 2a1 1 0 0 1 1 1v1a1 1 0 1 1-2 0V3a1 1 0 0 1 1-1M2 12a1 1 0 0 1 1-1h1a1 1 0 1 1 0 2H3a1 1 0 0 1-1-1m17 0a1 1 0 0 1 1-1h1a1 1 0 1 1 0 2h-1a1 1 0 0 1-1-1m-6 8a1 1 0 1 0-2 0v1a1 1 0 1 0 2 0zm5.364-3.05a1 1 0 1 0-1.414 1.414l.707.707a1 1 0 0 0 1.414-1.414zM4.929 4.929a1 1 0 0 1 1.414 0l.707.707A1 1 0 0 1 5.636 7.05l-.707-.707a1 1 0 0 1 0-1.414M7.05 18.364a1 1 0 1 0-1.414-1.414l-.707.707a1 1 0 1 0 1.414 1.414zM19.071 4.929a1 1 0 0 1 0 1.414l-.707.707a1 1 0 1 1-1.414-1.414l.707-.707a1 1 0 0 1 1.414 0M7 12a5 5 0 1 1 10 0a5 5 0 0 1-10 0" clip-rule="evenodd" /></svg>
                        }
                    </button>
                </div>
            </div>
            <div className="responsive" onClick={handleOpenNav}>
                <img src={hungburgerImg} alt="" />
            </div>
        </div>
    )
}