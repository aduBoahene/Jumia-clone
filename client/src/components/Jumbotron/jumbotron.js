import React from 'react';
import LeftPanel from '../LeftPanel/LeftPanel';
import MiddlePanel from '../MiddlePanel/MiddlePanel';
import RightPanel from '../RightPanel/RightPanel';
import './jumbotron.css';


function Jumbo() {
    return (
        <div className="jumbo">
           <LeftPanel/>
           <MiddlePanel/>
           <RightPanel/> 
        </div>
    )
}

export default Jumbo




