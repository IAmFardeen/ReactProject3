import React,{useState} from 'react';



import Yearbilling from './Yearlybilling';




function FirstComponent(){

    const [inputValue ,changedValue]= useState("16");
    const [page, changePage] = useState("100")
    const numpages = [10,50,100,500,"1M"];
    var numpage=0;
    const pricingValue=(event)=>{
        var value = event.target.value;

        if(value<=8){
            value = 8;
            numpage = numpages[0];
           
        }
        else if(value>8 && value<=12){
            value = 12;
            numpage = numpages[1];
          
        }
        else if(value>12 && value<=16){
            value = 16;
            numpage = numpages[2];
           
        }
        else if(value>16 && value<=24){
            value= 24;
            numpage = numpages[3];
        
        }
        else if(value>24 && value<=36){
            value = 36;
            numpage = numpages[4];
           
        }
        changedValue(value);
        changePage(numpage);
        console.log(inputValue);

    }

    function switching(value){
       if(value!==0){
          changedValue(value);
       }
        
    }

  
    return(
        <div> I am fardeen
           <div>
            <p> 
                {page}K Pageviews
                </p>
            <input  id={"price-range"} type={"range"} min={0} max={36} onChange={pricingValue} value={inputValue}></input><br>
            </br>
            <label >
                ${inputValue}.00/month
            </label>
            <Yearbilling pricing={inputValue} onSwitch={switching} ></Yearbilling>
           </div>
        </div>
    )
}


export default FirstComponent;