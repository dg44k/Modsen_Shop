import React, { FC, useState } from "react";
import { SliceCounterValue, WrapperCounter } from "./styled";

const CounterProductCart: FC = () => {
  const [countProduct, setCountProduct] = useState(1);

  const handleMinusCountProduct = () => {
    if (countProduct === 1) return;

    setCountProduct(prev => prev - 1);
  };
  const handlePlusCountProduct = () => setCountProduct(prev => prev + 1);

  return (
    <WrapperCounter>
      <div className="count-btn" onClick={handleMinusCountProduct}>
        -
      </div>
      <SliceCounterValue>{countProduct}</SliceCounterValue>
      <div className="count-btn" onClick={handlePlusCountProduct}>
        +
      </div>
    </WrapperCounter>
  );
};

export default CounterProductCart;
