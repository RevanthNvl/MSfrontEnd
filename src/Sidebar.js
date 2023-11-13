import React from 'react'
import "./Sidebar.css"
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import AddIcon from '@mui/icons-material/Add';
import SidebarChannel from './SidebarChannel';
import SignalCellularAltIcon from '@mui/icons-material/SignalCellularAlt';
import InfoIcon from '@mui/icons-material/Info';
import CallIcon from '@mui/icons-material/Call';
import Avatar from '@mui/material/Avatar';
import MicIcon from '@mui/icons-material/Mic';
import HeadsetMicIcon from '@mui/icons-material/HeadsetMic';
import SettingsIcon from '@mui/icons-material/Settings';


function Sidebar() {
  return (
    <div className='sidebar'>
        <div className='sidebar__top'>
            <h3>Spideyy</h3>
            <ExpandMoreIcon />
        </div>
        
        <div className="sidebar__channels">
            <div className="sidebar__channelsHeader">
                <div className="sidebar__header">
                    <ExpandMoreIcon />
                    <h4>Text Channels</h4>
                </div>
                <AddIcon className='add__Channel'/>
            </div>

            <div className="sidebar__channelsList">
                <SidebarChannel/>
                <SidebarChannel/>
                <SidebarChannel/>
                <SidebarChannel/>
            </div>
        </div>

        <div className="sidebar__voice">
            <SignalCellularAltIcon className='sidebar__voiceIcon' fontSize='large'/>
            <div className="sidebar__voiceInfo">
                <h3>Voice Connected</h3>
                <p>Stream</p>            
            </div>
            <div className="sidebar__voiceIcons">
                <InfoIcon />
                <CallIcon />
            </div>
        </div>

        <div className="sidebar__profile">
            <Avatar className='avatar' src='#'/>
            <div className="sidebar__profileInfo">
                <h3>@username</h3>
                <p>#userId</p>
            </div>
            <div className="sidebar__profileIcon">
                <MicIcon />
                <HeadsetMicIcon />
                <SettingsIcon />
            </div>
        </div>
    </div>
  )
}

export default Sidebar