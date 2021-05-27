import React from 'react'
import EnhancedEncryptionIcon from '@material-ui/icons/EnhancedEncryption';

export default function SideText2() {
    return (
        <>
        <div id="side-text-1" className="sideText1 sideText2">
           <h1> Serious about security</h1>
           <div id="lock-icon" className="lockIcon">
            <EnhancedEncryptionIcon className="IconStyle"/>
            </div>
            <div id="text-2" className="text2">
            <ul id="steps" className="SideTextSteps SideTextSteps2">
                <li>
                We are Norton <br/> certified to help <br/> ensure security for <br />sensitive data
                </li>
            </ul>
            </div>
        </div>
        </>
    )
}
