import { FC } from "react";
import { useParams } from "react-router-dom";

import DescriptionProduct from "@/components/DescriptionProduct";
import GalleryProduct from "@/components/GalleryProducts";
import InfoDetailProduct from "@/components/InfoDetailProduct";
import ListSimilarCard from "@/components/ListSimilarCard";
import { useGetProductQuery } from "@/store/slices/apiSlice";

import { WrapperDetailCard, WrapperInfoBlockCard } from "./styled";

const DetailCard: FC = () => {
  const { id } = useParams<{ id: string }>();
  const { data, isLoading, isError } = useGetProductQuery(id);
  if (isLoading) {
    return <div className="loading-api">Loading...</div>;
  }
  if (isError) {
    return <div className="error-api">Error...</div>;
  }

  return (
    <WrapperDetailCard>
      <WrapperInfoBlockCard>
        <GalleryProduct
          listImages={[data.image, data.image, data.image]} //Только для примера продублировал картинки, в апи 1 картинка
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
