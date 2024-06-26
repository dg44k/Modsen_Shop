import DescriptionProduct from "@/components/DescriptionProduct";
import GalleryProduct from "@/components/GalleryProducts";
import InfoDetailProduct from "@/components/InfoDetailProduct";
import ListSimilarCard from "@/components/ListSimilarCard";
import { RootState } from "@/store";
import React, { FC } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {
  StyledError,
  StyledLoading,
  WrapperDetailCard,
  WrapperInfoBlockCard,
} from "./styled";
import { useGetProductQuery } from "@/store/slices/apiSlice";

const DetailCard: FC = () => {
  const { id } = useParams<{ id: string }>();
  const products = useSelector((state: RootState) => state.products.products);
  const { data, isLoading, isError } = useGetProductQuery(id);
  if (isLoading) {
    return <StyledLoading>Loading...</StyledLoading>;
  }
  if (isError) {
    return <StyledError>Error...</StyledError>;
  }
  return (
    <WrapperDetailCard>
      <WrapperInfoBlockCard>
        <GalleryProduct
          listImages={[
            ...products.slice(2, 4).map(elem => elem.image), //Чисто для примера добавил, чтобы увидеть работоспособность слайдера
            data.image,
          ]}
          id={data.id}
          title={data.title}
        />
        <InfoDetailProduct product={data} />
      </WrapperInfoBlockCard>
      <DescriptionProduct description={data.description} />
      <ListSimilarCard
        currentCategory={data.category}
        currentElementId={data.id}
      />
    </WrapperDetailCard>
  );
};

export default DetailCard;
