import React from 'react'
import './SidebarIcons.css'

export default function SidebarIcons({Icon,text}) {
    return (
        <div className="Sidebar">
            <Icon style={{ fontSize: 17 }}/>
            <span className="Sidebar__text">{text}</span>
        </div>
    )
}
