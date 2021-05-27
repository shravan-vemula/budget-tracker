import React, { useState } from 'react'
import TextField from '@material-ui/core/TextField';




function TextFields(props) {


    console.log("props state text field " + props.state)

    var [className,setClassName] = useState("CheckValidity");

    function validateEmailId(email){
        const emailPattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
        if(email.length == 0){

            props.state.errorEmail = false
            return
        }
        if (emailPattern.test(email))
        {
            setClassName("CheckValidity");
            props.state.errorEmail = true
            return;
        }
        console.log("false");
        setClassName("displayBlock");
        props.state.errorEmail = false
    }

    function validateEntry(event){
        if(props.useCase == "EmailId"){
            
            
            validateEmailId(event.target.value);
        }
    }

    console.log(props.useCase)
    return (
    <React.Fragment>
        <div className="form-input-field" style={{marginTop: "20px"}}>
        <TextField required 
        id="standard-required-emailId" 
        label= {props.value}
        inputProps={{ "data-testid": "textField" }}
        variant="outlined"
        size="small"
        fullWidth
        onBlur= {validateEntry}
       />
        </div>
        <div id="check-validity" className={className}>
        <p className="validity-text length">Enter a Valid {props.useCase}</p>
            </div>

    </React.Fragment>
    )
}

export default TextFields;