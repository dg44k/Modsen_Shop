import React, { FC } from "react";
import IconSVGStar from "@/assets/icon-star.svg";
import { WrapperListStarsRate } from "./styled";
import { ListStarsRateProps } from "./types";
import { COUNT_RATE } from "@/constants/constants";

const ListStarsRate: FC<ListStarsRateProps> = ({ rate }) => {
  const rateRound = Math.round(rate);

  return (
    <WrapperListStarsRate>
      {Array.from({ length: COUNT_RATE }).map((_, index) => (
        <IconSVGStar
          key={rateRound - index}
          className={index < rateRound ? "active" : ""}
        />
      ))}
    </WrapperListStarsRate>
  );
};

export default ListStarsRate;
