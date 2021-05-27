import React from 'react'
import BankSelectionHeaderText from '../atoms/BankSelectionHeaderText';
import SearchBar from '../atoms/SearchBar';
import BankTiles from '../organisms/BankTiles'


function BankSelectionLayout1() {
    return (
        <>
           
            <div id="bank-selection-layout-1" className="bankSelectionLayout1">
                <BankSelectionHeaderText />
                <SearchBar />
            <div id="optional-selection" className="optionalSelection">
            Or select from popular ones    
            </div>
                <BankTiles />
            </div>
    
        </>
    )
}

export default BankSelectionLayout1
