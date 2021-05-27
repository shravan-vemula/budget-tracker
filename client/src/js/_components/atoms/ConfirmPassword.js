import React,{useState} from 'react'
import TextField from '@material-ui/core/TextField';
import ClearOutlinedIcon from '@material-ui/icons/ClearOutlined';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';

function ConfirmPassword(props) {
    var [colorValue, handleValidity] = useState("secondary")
    var [passwordMatchInValidity, handlePasswordInvalidity] = useState("validity-text valid")
    var [passwordMatchValidity, handlePasswordValidity] = useState("validity-text valid")
    

    

    function ConfirmPasswordEvent(event){

        const password = event.target.value;
        console.log(password)

        if(document.getElementById("primary-password-filled-secondary").value == password){
            handlePasswordValidity("validity-text valid confirmed")
            handlePasswordInvalidity("validity-text valid")
            handleValidity("primary")
            props.state.confirmPassword = true
            console.log("state set to "+props.state.error)
        }
        else{
            handlePasswordValidity("validity-text valid ")
            handlePasswordInvalidity("validity-text ")
            props.state.confirmPassword = false
        }


    }
    return (
        <React.Fragment>
        <div className="password-input-field"style={{marginTop: "20px"}}>
        <TextField required 
        id="standard-password-input" 
        label="Confirm Password"
        type="password"
        variant="outlined"
        size="small"
        inputProps={{ "data-testid": "confirmPassword" }}
        color={colorValue}
        fullWidth
        onBlur={(event)=>{ConfirmPasswordEvent(event)}}
        />
        </div>
        <p className={passwordMatchInValidity}><span id="cross" className="validity-text cross"><ClearOutlinedIcon /></span>
            Does not match with given password
        </p>
        <p className={passwordMatchValidity}><span id="done" className="validity-text accepted success"><CheckCircleIcon /></span>
            Matches with the given password
        </p>
        </React.Fragment>
    )
}

export default ConfirmPassword
