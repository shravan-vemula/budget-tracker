import React,{useState} from 'react'
import TextField from '@material-ui/core/TextField';
import ClearOutlinedIcon from '@material-ui/icons/ClearOutlined';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';




function TextPasswordField(props) {




    
    var [classValue, handleDisplayCases] = useState("passwordValidity")
    var [colorValue, handleValidity] = useState("secondary")
    var [lenghtValidity, handleLength] = useState("validity-text valid")
    var [caseValidity, handleCase] = useState("validity-text valid")
    var [numberValidity, handleNumber] = useState("validity-text valid")
    var [symbolValidity, handleSymbol] = useState("validity-text valid")
    var [numberInValidity,handleNumberInvalidity] = useState("validity-text")
    var [SymbolInValidity,handleSymbolInvalidity] = useState("validity-text")
    var [caseInValidity,handleCaseInvalidity] = useState("validity-text")
    var [lengthInValidity,handleLengthInvalidity] = useState("validity-text")
    var [strongValidity,handleStrongValidity] = useState("strongEntry valid") 

    // function handleChange(){
    //     console.log(document.getElementsByClassName("passwordValidity").passwordValidityId.style.display);
    //     document.getElementsByClassName("passwordValidity").passwordValidityId.style.display+="none !important";
    // }
    


    console.log("props state " + props.state)

    function handleChange(event){
        let count = 0;
        handleDisplayCases("passwordValidity displayBlock");
        let validity = false
        let password = event.target.value
        if(password.length >= 8){
            handleLength("validity-text valid length")
            handleLengthInvalidity("validity-text valid")
            console.log("length checked")
            props.state.errorPassword = true
            validity = true
            count++;
        }
        else
        {
            console.log("length not checked")
            handleLength("validity-text valid")
            handleLengthInvalidity("validity-text")
            props.state.errorPassword = false
            validity = false
            count--;
        }

        if(password.match(/[a-z]/g) && password.match(/[A-Z]/g)){
            console.log("Cases checked")
            handleCase("validity-text valid length")
            handleCaseInvalidity("validity-text valid")
            props.state.errorPassword = true
            validity = true
            count++;
        }
        else
        {
            console.log("Cases not checked")
            handleCase("validity-text valid")
            handleCaseInvalidity("validity-text")
            props.state.errorPassword = false
            validity = false
            count--;
        }


        if(password.match(/[0-9]/g)){
            console.log("number checked")
            handleNumber("validity-text valid length")
            handleNumberInvalidity("validity-text valid")
            props.state.errorPassword = true
            validity = true
            count++;
        }
        else
        {
            console.log("number not checked")
            handleNumber("validity-text valid")
            handleNumberInvalidity("validity-text")
            props.state.errorPassword = false
            validity = false
            count--;
        }


        if(password.match(/[^a-zA-Z\d]/g)){
            handleSymbol("validity-text valid length")
            handleSymbolInvalidity("validity-text valid")
            props.state.errorPassword = true
            validity = true
            count++;

        }
        else
        {
            handleSymbol("validity-text valid")
            handleSymbolInvalidity("validity-text")
            props.state.errorPassword = false
            validity = false
            count--;
        }

        console.log(count)
        if(validity && count ==4){
            handleDisplayCases("passwordValidity")
            handleValidity("primary")
            handleStrongValidity("strongEntry success validity-text")
        }
        else{
            props.state.errorPassword = false
            handleDisplayCases("validity-text")
            handleStrongValidity("strongEntry valid")
        }

    }


    

    
    return (
        <React.Fragment>
        <div className="password-input-field"style={{marginTop: "20px"}}>
        <TextField required 
        id="primary-password-filled-secondary" 
        label={props.value}
        color={colorValue}
        type="password"
        variant="outlined"
        inputProps={{ "data-testid": "passwordField" }}
        size="small"
        fullWidth
        onChange= {(event)=>{handleChange(event)}}
        />

        <div className={classValue} id="passwordValidityId">
                        <p className={lengthInValidity}><span id="cross" className="validity-text cross"><ClearOutlinedIcon /></span>
                        Use 8 or more characters
                        </p>
                        <p className={lenghtValidity}><span id="done" className="validity-text accepted success"><CheckCircleIcon /></span>
                        Use 8 or more characters
                        </p>
                        <p className={caseInValidity}><span id="cross" className="validity-text cross"><ClearOutlinedIcon /></span>
                            Use upper and lower case letters (e.g. Aa) </p>
                            <p className={caseValidity}><span id="done" className="validity-text accepted success"><CheckCircleIcon /></span>
                            Use upper and lower case letters (e.g. Aa) </p>
                        <p className={numberInValidity}>
                        <span id="cross" className="validity-text cross"><ClearOutlinedIcon /></span>
                        Use a number (e.g. 1234)</p>
                        <p className={numberValidity}>
                        <span id="done" className="validity-text accepted success"><CheckCircleIcon /></span>
                        Use a number (e.g. 1234)</p>
                        <p className={SymbolInValidity}>
                        <span id="cross" className="validity-text cross"><ClearOutlinedIcon /></span>
                        Use a symbol (e.g. !@#$) </p> 
                        <p className={symbolValidity}>
                        <span id="done" className="validity-text accepted success"><CheckCircleIcon /></span>
                        Use a symbol (e.g. !@#$) </p> 
                    </div>

        
            <div className={strongValidity} id="strong-password">
                <p className="strong validity-text"> Password is strong </p>
            </div>
      
      
        </div>
    </React.Fragment>
    )
    
}


export default TextPasswordField
