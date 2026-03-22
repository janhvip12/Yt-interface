import React from 'react';
import {useState} from 'react';
import '../Syles/SideBar.css';
import { GoHomeFill } from "react-icons/go";
import { SiYoutubeshorts } from "react-icons/si";
import { MdSubscriptions } from "react-icons/md";
import { SiYoutubemusic } from "react-icons/si";
import { FaHistory } from "react-icons/fa";
import { MdPlaylistPlay } from "react-icons/md";
import { PiYoutubeLogoLight } from "react-icons/pi";
import { MdOutlineWatchLater } from "react-icons/md";
import { SlLike } from "react-icons/sl";
import { HiDownload } from "react-icons/hi";
import { RiShoppingBag4Line } from "react-icons/ri";
import { IoMusicalNoteOutline } from "react-icons/io5";
import { BiMovie } from "react-icons/bi";
import { TbLivePhoto } from "react-icons/tb";
import { SiYoutubegaming } from "react-icons/si";
import { TbNews } from 'react-icons/tb';
import { GoTrophy } from "react-icons/go";
import { RiGraduationCapLine } from "react-icons/ri";
import { PiCoatHangerLight } from "react-icons/pi";
import { TbBrandApplePodcast } from "react-icons/tb";
import { SiYoutubestudio } from "react-icons/si";
import { SiYoutubekids } from "react-icons/si";
import { IoSettingsOutline } from "react-icons/io5";
import { LuFlag } from "react-icons/lu";
import { MdOutlineHelpOutline } from "react-icons/md";
import { RiFeedbackLine } from "react-icons/ri";



const SideBar = () => {
  return (

    <div className='sidebar-content'>
      <ul className='part1'>
        <li> <a href='#'> <GoHomeFill className='icon' /> Home </a> </li>
        <li> <a href='#'> <SiYoutubeshorts className='icon'/> Shorts</a> </li>
        <li> <a href='#'> <MdSubscriptions className='icon'/> Subscriptions </a> </li>
        <li> <a href='#'> <SiYoutubemusic className='icon'/> YouTube Music </a> </li> 
      </ul>



      <ul className='part2'> You 
        <li> <a href='#'><FaHistory className='icon'/> History</a></li>
        <li><a href='#'> <MdPlaylistPlay className='icon'/> Playlists</a></li>
        <li><a href='#'> <PiYoutubeLogoLight className='icon' /> Your videos</a></li>
        <li> <a href='#'> <MdOutlineWatchLater className='icon'/> Watch later</a> </li>
        <li> <a href='#'> <SlLike className='icon'/> Liked Videos</a></li>
        <li> <a href='#'> <HiDownload className='icon'/> Download</a></li>
      </ul>

      <ul className='part3'>Subscriptions 
      </ul>

      <ul className='part4'>Explore
        <li> <a href='#'> <RiShoppingBag4Line className='icon'/> Shopping </a></li>
        <li> <a href='#'> <IoMusicalNoteOutline className='icon' /> Music </a></li>
        <li> <a href='#'> <BiMovie className='icon'/> Movies </a></li>
        <li> <a href='#'> <TbLivePhoto className='icon'/> Live </a></li>
        <li> <a href='#'> <SiYoutubegaming className='icon'/> Gaming </a></li>
        <li> <a href='#'> <TbNews className='icon'/> News </a></li>
        <li> <a href='#'> <GoTrophy className='icon'/> Sports </a></li>
        <li> <a href='#'> <RiGraduationCapLine className='icon'/> Courses </a></li>
        <li> <a href='#'> <PiCoatHangerLight className='icon'/> Fashion & Beauty </a></li>
        <li> <a href='#'> <TbBrandApplePodcast className='icon'/> Podcasts </a></li>
      </ul>

      <ul className='part5'>More from YouTube
      <li> <a href='#'> <SiYoutubestudio className='icon'/> YouTube Studio </a> </li>
      <li> <a href='#'> <SiYoutubemusic className='icon'/> YouTube Music </a> </li>
      <li> <a href='#'>  <SiYoutubekids className='icon'/> YouTube Kids </a> </li>
      </ul>

      <ul className='part6'>
        <li> <a href='#'> <IoSettingsOutline className='icon'/> Settings </a> </li>
        <li> <a href='#'> <LuFlag className='icon'/> Report History </a> </li>
        <li> <a href='#'> <MdOutlineHelpOutline className='icon'/>  Help </a> </li>
        <li> <a href='#'> <RiFeedbackLine className='icon'/> Send feedback </a></li>
      </ul>
    </div>
  )
}

export default SideBar
