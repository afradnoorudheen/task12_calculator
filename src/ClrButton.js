import React from 'react';
import './ClrButton.css';

function ClrButton({children,setDisplay}){
    const clickClear = () =>{
        setDisplay("0");
    }
    return(
       <button onClick={clickClear} className="main-wrapper-clr"> 
          <span>
               {children} 
                 
          </span>
           
       </button>
    );
}
export default ClrButton;