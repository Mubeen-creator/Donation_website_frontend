import React, { useState } from 'react'
import { BsInstagram } from 'react-icons/bs'
import { FaBitcoin, FaGithub, FaYoutube } from 'react-icons/fa6'
import { GiHamburgerMenu } from 'react-icons/gi'
import { Link } from 'react-router-dom'

const Navbar = () => {

    const [show, setShow] = useState(false)

    return (
        <div className={show ? "navbar navbar_show" : "navbar"}>
            <div className='logo'>
                <img src="/logo.png" alt="logo" />
            </div>
            <div className='links'>
                <ul>
                    <li><Link to={"/"}>HOME</Link></li>
                    <li><Link to={"/donate"}>DONATE US</Link></li>
                    <li><Link to={"/about"}>ABOUT</Link></li>
                    <li><Link to={"/contact"}>CONTACT</Link></li>
                </ul>
                <ul>
                    <li><Link to={"/"}><FaBitcoin/></Link></li>
                    <li><Link to={"/"}><FaYoutube/></Link></li>
                    <li><Link to={"/"}><FaGithub/></Link></li>
                    <li><Link to={"/"}><BsInstagram/></Link></li>
                </ul>
            </div>
            <GiHamburgerMenu className='hamburger' onClick={() => setShow(!show)}/>
        </div>
    )
}

export default Navbar