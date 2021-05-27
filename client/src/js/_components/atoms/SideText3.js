import React from 'react'
import SecurityIcon from '@material-ui/icons/Security';

export default function SideText3() {
    return (
        <>
        <div id="side-text-1" className="sideText1 sideText2 sideText3">
           <h1>Trusted by millions</h1>
           <div id="lock-icon" className="lockIcon">
            <SecurityIcon className="IconStyle"/>
            </div>
            <div id="text-2" className="text2">
            <ul id="steps" className="SideTextSteps SideTextSteps2">
                <li>
                Over 300 million <br/> accounts added
                </li>
            </ul>
            </div>
        </div>
        </>
    )
}
