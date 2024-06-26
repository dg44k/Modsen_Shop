import DescriptionProduct from "@/components/DescriptionProduct";
import GalleryProduct from "@/components/GalleryProduct";
import InfoDetailProduct from "@/components/InfoDetailProduct";
import ListSimilarCard from "@/components/ListSimilarCard";
import { RootState } from "@/store";
import { ProductType } from "@/types/types";
import React, { FC } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const DetailCard: FC = () => {
  const { id } = useParams<{ id: string }>();
  const products = useSelector((state: RootState) => state.products.products);
  const targetProduct = products.find((elem: ProductType) => elem.id === +id);

  return (
    <div>
      <div>
        <GalleryProduct />
        <InfoDetailProduct product={targetProduct} />
      </div>
      <DescriptionProduct description={targetProduct.description} />
      <ListSimilarCard />
    </div>
  );
};

export default DetailCard;
