import React, { FC, useState } from "react";
import { SwitchContainer, SwitchInput, SwitchSlider } from "./styled";
import { SwitchProps } from "./types";

const Switch: FC = ({ checked, onChange }: SwitchProps) => {
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
