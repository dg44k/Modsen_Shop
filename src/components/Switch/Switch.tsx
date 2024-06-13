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
    const newChecked = !isChecked;
    setIsChecked(newChecked);
    if (onChange) {
      onChange(newChecked);
    }
  };

  return (
    <SwitchContainer>
      <SwitchInput
        type="checkbox"
        checked={isChecked}
        onChange={handleChange}
      />
      <SwitchSlider />
    </SwitchContainer>
  );
};

export default Switch;
