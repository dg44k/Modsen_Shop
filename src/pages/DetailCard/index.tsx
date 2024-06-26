import DescriptionProduct from "@/components/DescriptionProduct";
import GalleryProduct from "@/components/GalleryProducts";
import InfoDetailProduct from "@/components/InfoDetailProduct";
import ListSimilarCard from "@/components/ListSimilarCard";
import { RootState } from "@/store";
import { ProductType } from "@/types/types";
import React, { FC } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { WrapperDetailCard, WrapperInfoBlockCard } from "./styled";

const DetailCard: FC = () => {
  const { id } = useParams<{ id: string }>();
  const products = useSelector((state: RootState) => state.products.products);
  const targetProduct = products.find((elem: ProductType) => elem.id === +id);

  return (
    <WrapperDetailCard>
      <WrapperInfoBlockCard>
        <GalleryProduct
          listImages={[
            targetProduct.image,
            ...products.slice(2, 4).map(elem => elem.image),
          ]}
          id={targetProduct.id}
          title={targetProduct.title}
        />
        <InfoDetailProduct product={targetProduct} />
      </WrapperInfoBlockCard>
      <DescriptionProduct description={targetProduct.description} />
      <ListSimilarCard />
    </WrapperDetailCard>
  );
};

export default DetailCard;
