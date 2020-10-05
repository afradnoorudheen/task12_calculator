import React from 'react';
import './Button.css';
import * as math from 'mathjs'


function Button({children,type,display,setDisplay}){
    const buttonClick = () =>{
        if(children==="="){
            try{
            setDisplay((math.evaluate(display)).toString());
            }
            catch(e){
                setDisplay("INVALID");
            }
        }
        
        else if(children==="x"){
             setDisplay(display.concat("*"));
        }
        else if(children==="."){
            if(display==="0")
            setDisplay(display.concat("."));
            else
            setDisplay(display.concat("."));
       }
        else if(display==="0"||display==="INVALID")
            setDisplay(children);
        else    
        setDisplay(display.concat(children));
    };
    return(
       <button onClick={buttonClick} className={`main-wrapper ${type}`}> 
          <span>
               {children} 
                
          </span>
           
       </button>
    );
}
export default Button;