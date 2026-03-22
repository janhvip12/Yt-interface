import React from 'react';
import { useState } from 'react';
import '../Syles/NavBar.css';
import { RxHamburgerMenu } from "react-icons/rx";
import { FaYoutube } from "react-icons/fa6";
import { IoMdHome } from "react-icons/io";
import { IoMicOutline, IoCreateOutline } from "react-icons/io5";
import { CiSearch, CiBellOn, CiYoutube, CiSettings } from "react-icons/ci";
import { CgLivePhoto,  CgProfile } from "react-icons/cg";
import { HiOutlinePlus } from "react-icons/hi2";
import { SiYoutubeshorts, SiYoutubemusic } from "react-icons/si";
import { MdOutlineSubscriptions } from "react-icons/md";
import { HiDownload } from "react-icons/hi";

const Navbar = ({toggleSideBar, onSearch}) => {

    const[query,setQuery] = useState('');
    const handleSubmit = (e) =>{
        e.preventDefault();
        
    }

    const[isOpen, setIsOpen] = useState(false);
    const handleCreate = () =>{
        setIsOpen(!isOpen);
    }

    const[popup, setPopup] = useState(false);
    const togglePopup = () =>{
        setPopup(!popup);
    }

    const[isToggled, setIsToggles] = useState(false);

    const handleMenuClick = () =>{
        toggleSideBar();
        setIsToggles(!isToggled);
    }

  return (
    <nav>
        <div className='left'>

            <div className='menu-icon' onClick={handleMenuClick}>
            {isToggled ? '' :''}
            <RxHamburgerMenu />
            </div>
            
            { 
                isToggled && (

                    <div className='toggled-Menu'>

                        <div className='blocks'>
                            <IoMdHome className='the-menu-icon'/>
                            <span className='menu-txt'> Home </span>
                        </div>

                        <div className='blocks'>
                            <SiYoutubeshorts className='the-menu-icon' />
                            <span className='menu-txt'>Shorts </span>
                        </div>

                        <div className='blocks'>
                            <MdOutlineSubscriptions className='the-menu-icon' />
                            <span className='menu-txt'>Subscriptions </span>
                        </div>
        
                        <div className='blocks'>
                            <SiYoutubemusic  className='the-menu-icon' />
                            <span className='menu-txt'>YouTube Music </span>
                        </div>

                        <div className='blocks'>
                            <CgProfile  className='the-menu-icon' />
                            <span className='menu-txt'> You </span>
                        </div>

                        <div className='blocks'>
                            <HiDownload  className='the-menu-icon' />
                            <span className='menu-txt'> Download </span>
                        </div>

                    </div>


                )}

            <div id='yt-logo'> 
            <FaYoutube />
            <span>Premium <sup>IN</sup></span>
            </div>

        </div>


        <div className='mid'>

            <div className='search-box'>
                <form onSubmit={handleSubmit}>
                    <input type='text'
                    placeholder='Search'
                    value={query}
                    onChange={(e)=>setQuery(e.target.value)}
                    /> 
                    <button className='search-icon'>
                    <CiSearch />
                </button>

                </form>


            </div>

        
        <div className='mic'>
            <IoMicOutline />
            <span className='tootltip-mic'>Search with your voice </span>

        </div>

        </div>


        <div className='right'>

            <button className='create-btn' onClick={handleCreate}>
                <HiOutlinePlus className='plus' /> Create 
                {isOpen ? ' ' : ' '}
            </button>

            {
                isOpen && (
                    <ul className='dropdowm-list'>
                        <li><CiYoutube /> Upload a video</li>
                        <li><CgLivePhoto /> Go Live</li>
                        <li> <IoCreateOutline /> Create a post
 </li>
                    </ul>
                )
            }
            

            <div className='bell' onClick={togglePopup}>
                <CiBellOn />
            </div>
            {
                popup && (
                    <div className='popup-page'>

                        <div className='head'>
                            Notifications
                            <CiSettings className='setting' />
                        </div>

                        <div className='main'>
                        <CiBellOn id='bell-pop' />
                        <h2>Your notifications live here</h2>
                        <a href='#' className='bell-link'>
                            Subscribe to your favorite channels to get <br/> 
                            notified about their latest videos.
                        </a>
                        <button className='close-btn' onClick={togglePopup}> Close </button>
                        </div>
                     </div>
                )
            }



            <img src='https://plus.unsplash.com/premium_photo-1734388423030-114def7afff4?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170' alt='' className='profile'/>
        </div>
    </nav>
  )
}

export default Navbar
