import { FC, useState } from "react";
import { ButtonCounter, SliceCounterValue, WrapperCounter } from "./styled";

const CounterProductCart: FC = () => {
  const [countProduct, setCountProduct] = useState(1);

  const handleMinusCountProduct = () => {
    if (countProduct === 1) return;

    setCountProduct(prev => prev - 1);
  };
  const handlePlusCountProduct = () => setCountProduct(prev => prev + 1);

  return (
    <WrapperCounter>
      <ButtonCounter onClick={handleMinusCountProduct}>-</ButtonCounter>
      <SliceCounterValue>{countProduct}</SliceCounterValue>
      <ButtonCounter className="count-btn" onClick={handlePlusCountProduct}>
        +
      </ButtonCounter>
    </WrapperCounter>
  );
};

export default CounterProductCart;
