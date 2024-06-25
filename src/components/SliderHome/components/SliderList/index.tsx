import React, { FC, useEffect, useRef, useState } from "react";
import SliderListItem from "../SliderListItem/index";
import { StyledSliderList } from "./styled";
import { setActiveIndex } from "@/store/slices/sliderSlice";
import { AppDispatch, RootState } from "@/store/index";
import { useDispatch, useSelector } from "react-redux";
import { SliderProps } from "../../types";

const SliderList: FC<SliderProps> = ({ slides }) => {
  const activeIndex = useSelector(
    (state: RootState) => state.slider.activeIndex,
  );
  const dispatch = useDispatch<AppDispatch>();
  const sliderRef = useRef<HTMLDivElement>(null);

  const [startX, setStartX] = useState(0);
  const [isDragging, setIsDragging] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      dispatch(setActiveIndex((activeIndex + 1) % slides.length));
    }, 5000);

    return () => clearInterval(interval);
  }, [activeIndex, dispatch, slides.length]);

  useEffect(() => {
    if (sliderRef.current) {
      sliderRef.current.style.transform = `translateX(-${activeIndex * 100}%)`;
    }
  }, [activeIndex]);

  const handleTouchStart = (e: React.TouchEvent) => {
    setStartX(e.touches[0].clientX);
    setIsDragging(true);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging) return;
    const diff = startX - e.touches[0].clientX;
    if (diff > 50) {
      dispatch(setActiveIndex((activeIndex + 1) % slides.length));
      setIsDragging(false);
    } else if (diff < -50) {
      dispatch(
        setActiveIndex((activeIndex - 1 + slides.length) % slides.length),
      );
      setIsDragging(false);
    }
  };

  return (
    <StyledSliderList
      ref={sliderRef}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
    >
      {slides.map(slide => (
        <SliderListItem key={slide.id} image={slide.image} alt={slide.title} />
      ))}
    </StyledSliderList>
  );
};

export default SliderList;
