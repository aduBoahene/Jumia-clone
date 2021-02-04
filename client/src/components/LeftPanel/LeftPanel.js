import React from 'react'
import SidebarIcons from '../SidebarIcons/SidebarIcons'
import './LeftPanel.css'
import StorefrontOutlinedIcon from '@material-ui/icons/StorefrontOutlined';
import DriveEtaOutlinedIcon from '@material-ui/icons/DriveEtaOutlined';
import MoreHorizOutlinedIcon from '@material-ui/icons/MoreHorizOutlined';
import ChildCareOutlinedIcon from '@material-ui/icons/ChildCareOutlined';
import FitnessCenterOutlinedIcon from '@material-ui/icons/FitnessCenterOutlined';
import LocalMallOutlinedIcon from '@material-ui/icons/LocalMallOutlined';
import ComputerOutlinedIcon from '@material-ui/icons/ComputerOutlined';
import LiveTvOutlinedIcon from '@material-ui/icons/LiveTvOutlined';
import HomeWorkOutlinedIcon from '@material-ui/icons/HomeWorkOutlined';
import LocalHospitalOutlinedIcon from '@material-ui/icons/LocalHospitalOutlined';
import PhoneIphoneOutlinedIcon from '@material-ui/icons/PhoneIphoneOutlined';
import SportsEsportsOutlinedIcon from '@material-ui/icons/SportsEsportsOutlined';

export default function LeftPanel() {
    return (
        <div className="LeftPanel">
            <SidebarIcons Icon={StorefrontOutlinedIcon} text="Super Market"/>
            <SidebarIcons Icon={PhoneIphoneOutlinedIcon} text="Phone & Tablets"/>
            <SidebarIcons Icon={LocalHospitalOutlinedIcon} text="Health & Beauty"/>
            <SidebarIcons Icon={HomeWorkOutlinedIcon} text="Home & Office"/>
            <SidebarIcons Icon={LiveTvOutlinedIcon} text="Electronics"/>
            <SidebarIcons Icon={ComputerOutlinedIcon} text="Computing"/>
            <SidebarIcons Icon={LocalMallOutlinedIcon} text="Fashion"/>
            <SidebarIcons Icon={FitnessCenterOutlinedIcon} text="Sporting Goods"/>
            <SidebarIcons Icon={ChildCareOutlinedIcon} text="Baby Products"/>
            <SidebarIcons Icon={SportsEsportsOutlinedIcon} text="Gaming"/>
            <SidebarIcons Icon={DriveEtaOutlinedIcon} text="Automobile"/>
            <SidebarIcons Icon={MoreHorizOutlinedIcon} text="Other Categories"/>

        </div>
    )
}
