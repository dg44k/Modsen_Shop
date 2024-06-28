import { FC } from "react";
import { useDispatch, useSelector } from "react-redux";

import { AppDispatch, RootState } from "@/store/index";
import { setIsChecked } from "@/store/slices/switchSlice";

import { SwitchContainer, SwitchInput, SwitchSlider } from "./styled";

const Switch: FC = () => {
  const isChecked = useSelector((state: RootState) => state.switch.checked);
  const dispatch = useDispatch<AppDispatch>();

  const handleChange = () => {
    dispatch(setIsChecked(!isChecked));
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
