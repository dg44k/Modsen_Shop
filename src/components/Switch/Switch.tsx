import React, { useState } from "react";
import styled from "styled-components";
import { SwitchContainer, SwitchInput, SwitchSlider } from "./styled";

interface SwitchProps {
  checked: boolean;
  onChange?: (checked: boolean) => void;
}

const Switch = ({ checked, onChange }: SwitchProps) => {
  const [isChecked, setIsChecked] = useState(checked);

  const handleChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <SwitchContainer>
      <SwitchInput
        type="checkbox"
        checked={isChecked}
        onChange={handleChange}
      />
      <SwitchSlider checked={isChecked} />
    </SwitchContainer>
  );
};

export default Switch;
