import SliderHome from "@/components/SliderHome/SliderHome";
import React, { useEffect } from "react";
import {
  GlobalStylesForHome,
  StyledHeaderMain,
  StyledLinkViewAll,
} from "./styled";
import { useSelector } from "react-redux";
import { RootState } from "@/store/reducers/rootReducer";
import { ProductType } from "@/types/types";

const HomePage: React.FC = () => {
  const products: ProductType[] = useSelector(
    (state: RootState) => state.products.products,
  );

  return (
    <div>
      <GlobalStylesForHome />
      <SliderHome />
      <StyledHeaderMain>
        <h1 className="home__heading">Shop The Latest</h1>
        <StyledLinkViewAll to="/shop">View All</StyledLinkViewAll>
        <div>
          {products.map((product: ProductType) => (
            <div key={product.id}>
              <img src={product.image} alt={product.title} />
              <p>{product.title}</p>
            </div>
          ))}
        </div>
      </StyledHeaderMain>
    </div>
  );
};

export default HomePage;
