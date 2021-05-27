import React from 'react'

function HeaderForForm(props) {

    return (
        <React.Fragment>
        <div className="header-signup">
            <h3 style={{fontSize: "26px",fontWeight: "400",padding: "4%",color:"#4C4C4C",marginLeft:'15%'}}>{props.heading}</h3>
        </div>
        </React.Fragment>
    )
}

export default HeaderForForm
