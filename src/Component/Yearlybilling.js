import React, {useState} from "react";

import Checkbox from "./Checkbox";



function Yearbilling(props){

  const [pricingvalue, changedValue] =useState()
  const inputValue = props.pricing;
  var price = 0;
  var FinalPrice = 0;

  function discount(event){
      if(event===true){
         price = inputValue/4
         FinalPrice = inputValue-price;
         changedValue(FinalPrice);
      }
      else{
        return
      }
      props.onSwitch(pricingvalue);
  
  }

 
  
  
    

return(
    <div>
        <span><p>Monthly Billing</p></span>

        <span><p>Yearly Billing</p></span>
        <Checkbox prices={inputValue} onDiscount={discount}></Checkbox>
        <div>
          -25% discount
        </div>

    </div>
)

}

export default Yearbilling;