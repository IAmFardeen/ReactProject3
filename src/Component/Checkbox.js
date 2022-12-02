import React from "react";
import "./Checkbox.css"


function Checkbox(props){
     

    function Discount(event){
           props.onDiscount(event.target.checked);
    }

    return(
    <label className="switch">
        <input type={"checkbox"} onChange={Discount}></input>
        <span className="slider round">   
        </span>
      
    </label>
    
    )
}

export default Checkbox;