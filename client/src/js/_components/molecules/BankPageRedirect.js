import React from 'react'
import { Button } from '@material-ui/core';
import {useLocation} from 'react-router-dom';
import AnimationModalSuccess from 'js/_components/atoms/AnimationModalSuccess'



function BankPageRedirect() {
    const location = useLocation();
    const {url} = location.state;
    const {bankName} = location.state;
    const [onUnloadWindow,setOnUnloadWindow] = React.useState(false);

    const handleClick = () =>{
       const myWindow = window.open(url, '_blank', 'location=yes,height=570,width=520,scrollbars=yes,status=yes',false)
  
       myWindow.addEventListener('unload',function(e){
           e.preventDefault();
            console.log(e)
            console.log("unloaded")
            setOnUnloadWindow(true);
              
        })

    }

    if(onUnloadWindow){
        return(
            <>
            <BankPageRedirect />
            <AnimationModalSuccess placeHolder={"Linking Bank"}/>    
            </>
        );
    }

    return (
        <>
    <div id="bank-selection-layout-1" className="bankSelectionLayout1">
        <div id="bank-selection-header" className="bankSelectionHeader">
            <div id="bank-selection-header-text-1"className="bankSelectionHeader1" >
                <p>Connect your account</p>
                </div>
            <div id="bank-selection-header-text-1"className="bankSelectionHeader2" >
                <p><b>Start by connecting your {bankName} accounts with budget tracker</b><br /> <br />
                Go to the bank site to sign in and connect your accounts. Then we’ll return you here and bring<br /> 
                in your transactions.</p>
            </div>  
            <div id="optional-selection" className="optionalSelection">
            <Button data-testId="continueButton" variant="outlined" color="primary" 
            onClick={handleClick}>
                Continue
            </Button>
            </div>  
        </div>
    </div>
    </>
    )
}

export default BankPageRedirect
