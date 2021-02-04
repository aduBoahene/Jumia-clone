import React from 'react'
import BreadCrumb from '../BreadCrumb/BreadCrumb';
import './Bread.css';
import LocalMallOutlinedIcon from '@material-ui/icons/LocalMallOutlined';
import AirplanemodeActiveOutlinedIcon from '@material-ui/icons/AirplanemodeActiveOutlined';
import MobileScreenShareOutlinedIcon from '@material-ui/icons/MobileScreenShareOutlined';
import AdjustOutlinedIcon from '@material-ui/icons/AdjustOutlined';

export default function Bread() {
    return (
        <div className="Bread">
            <BreadCrumb Icon={LocalMallOutlinedIcon} text="Official Store" IconBack="aRed"/>
            <BreadCrumb Icon={AirplanemodeActiveOutlinedIcon} text="Jumia Global" IconBack="aBlue"/>
            <BreadCrumb Icon={MobileScreenShareOutlinedIcon} text="Recharge & Bills" IconBack="aGreen"/>
            <BreadCrumb Icon={AdjustOutlinedIcon} text="Jumia Prime" IconBack="aOrange"/>
        </div>
    )
}
