import { Avatar } from '@material-ui/core';
import React from 'react';
import './BreadCrumb.css';

export default function BreadCrumb({text,Icon,IconBack}) {
    return (
        <div className="BreadCrumb">
            <div className="BreadCrumb__layout">
                <Avatar className={IconBack}>
                    <Icon />
                </Avatar>
                <span className="BreadCrumb__text">{text}</span>
            </div>
        </div>
    )
}
