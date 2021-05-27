import React from 'react';
import { Button } from '@material-ui/core';
import LockIcon from '@material-ui/icons/Lock';
import { Link } from 'react-router-dom';
function AlreadySignedIn() {
    return (
        <>
        <div id="Already-signedIn" className="alreadySignedIn">
            <div id="Already-signedIn-text" className="alreadySignedInText">
                Already have an account?
            </div>
            <Link to="/login">
                            <Button variant="contained" size="small" color="primary">
                   <span id="lockIcon" ><LockIcon /></span> Sign In
                </Button>
            </Link>
            </div>
        </>
    )
}

export default AlreadySignedIn
