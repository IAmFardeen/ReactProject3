import Checkbox from "./Checkbox";

function Yearbilling(props) {
  const inputValue = props.pricing;

  function discount(event) {
    if (!event) {
      props.changedValue((prev) => {
        return { value: +(prev.value * 0.75).toFixed(0), discount: true };
      });
    } else {
      props.changedValue((prev) => {
        return { value: +(prev.value / 0.75).toFixed(0), discount: false };
      });
    }
  }

  return (
    <div>
      <span>
        <p>Monthly Billing</p>
      </span>

      <span>
        <p>Yearly Billing</p>
      </span>
      <Checkbox prices={inputValue} onDiscount={discount}></Checkbox>
      <div>-25% discount</div>
    </div>
  );
}

export default Yearbilling;
