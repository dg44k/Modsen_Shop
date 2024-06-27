import { useGetProductsQuery } from "@/store/slices/apiSlice";
import React, { FC } from "react";
import Card from "../Card";
import { WrapperViewLastListCards } from "./styled";

const LastViewListCards: FC = () => {
  const { data, isLoading, isError } = useGetProductsQuery(undefined);
  if (isLoading) {
    return <div className="loading-api">Loading...</div>;
  }
  if (isError) {
    return <div className="error-api">Error...</div>;
  }

  return (
    <WrapperViewLastListCards>
      {data.slice(0, 6).map(item => (
        <Card key={item.id} alt={item.title} {...item} />
      ))}
    </WrapperViewLastListCards>
  );
};

export default LastViewListCards;
