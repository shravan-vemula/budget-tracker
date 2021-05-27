import React from 'react'


 function BankLogoTile(logo) {
    return (
        <div id="bank-logo" className="bankLogo">
            <img src={logo.source} height="100%" width="50%"/>
        </div>
    )
}
export default BankLogoTile