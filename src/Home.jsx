import React, { useEffect } from 'react';
import Navbar from './Components/Navbar';
import SideBar from './Components/SideBar';
import {useState} from 'react';
import {useAppDispatch,useAppSelector} from './hooks/useApp'
import { getHomePageVideos } from './store/reducers/getHomePageVideos';

const Home = () => {

  const dispatch = useAppDispatch();
  const videos = useAppSelector((state) => state.youtubeApp.videos);

  useEffect(()=> {
    dispatch(getHomePageVideos(false));
  },[dispatch])
  

  const [isSidebarVisible, setIsSidebarVisible] = useState(true);
  const toggleSideBar = () =>{
    setIsSidebarVisible(!isSidebarVisible);
  }

  return (
    <div>

    <Navbar 
    toggleSideBar = {toggleSideBar} />

    {isSidebarVisible ? <SideBar/> : null}


    </div>
  )
}

export default Home;
