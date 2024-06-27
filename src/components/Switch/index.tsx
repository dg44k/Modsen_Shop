import { FC } from "react";
import { SwitchContainer, SwitchInput, SwitchSlider } from "./styled";
import { setIsChecked } from "@/store/slices/switchSlice";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/store/index";

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
