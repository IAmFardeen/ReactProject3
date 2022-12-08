import { useState } from "react";

import Yearbilling from "./Yearlybilling";

function FirstComponent() {
  const [inputValue, changedValue] = useState({ value: 16, discount: false });

  const [page, changePage] = useState("100");
  const numpages = [10, 50, 100, 500, "1M"];
  var numpage = 0;
  const pricingValue = (event) => {
    var value = event.target.value;
    if (value <= 8) {
      inputValue.value = 8;
      numpage = numpages[0];
    } else if (value > 8 && value <= 12) {
      inputValue.value = 12;
      numpage = numpages[1];
    } else if (value > 12 && value <= 16) {
      inputValue.value = 16;
      numpage = numpages[2];
    } else if (value > 16 && value <= 24) {
      inputValue.value = 24;
      numpage = numpages[3];
    } else if (value > 24 && value <= 36) {
      inputValue.value = 36;
      numpage = numpages[4];
    }
    changedValue((prev) => {
      return { value: value, ...prev };
    });
    changePage(numpage);
  };

  function switching(input) {
    changedValue(input);
  }

  return (
    <div>
      {" "}
      I am fardeen
      <div>
        <p>{page}K Pageviews</p>
        <input
          id={"price-range"}
          type={"range"}
          min={0}
          max={36}
          onChange={pricingValue}
          value={inputValue.value}
        ></input>
        <br></br>
        <label>${inputValue.value}.00/month</label>
        <Yearbilling
          pricing={inputValue}
          onSwitch={switching}
          changedValue={changedValue}
        ></Yearbilling>
      </div>
    </div>
  );
}

export default FirstComponent;
