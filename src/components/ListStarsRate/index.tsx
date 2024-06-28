import { FC } from "react";

import IconSVGStar from "@/assets/icon-star.svg";
import { COUNT_RATE } from "@/constants/detailCard";

import { WrapperListStarsRate } from "./styled";
import { ListStarsRateProps } from "./types";

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
