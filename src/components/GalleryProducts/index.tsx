import { FC, useEffect, useState } from "react";

import * as StyledComponents from "./styled";
import { GalleryProductsProps } from "./types";

const GalleryProducts: FC<GalleryProductsProps> = ({
  listImages,
  id,
  title,
}) => {
  const [images, setImages] = useState(listImages);
  const [bigImage, setBigImage] = useState(images[images.length - 1]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    setImages(listImages);
    setBigImage(listImages[listImages.length - 1]);
  }, [listImages]);

  const handleMiniImageClick = (miniImage: string, index: number) => {
    const newImages = [...images];
    const temp = bigImage;
    setBigImage(miniImage);
    newImages[index] = temp;
    setImages(newImages);
  };

  const handleBigImageClick = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const sliceMiniImages = images.slice(0, listImages.length - 1);

  return (
    <StyledComponents.WrapperGalleryProducts>
      <StyledComponents.ListMiniImageProducts>
        {sliceMiniImages.map((image: string, index) => (
          <StyledComponents.MiniImageProduct
            key={id - index}
            src={image}
            alt={title}
            onClick={() => handleMiniImageClick(image, index)}
          />
        ))}
      </StyledComponents.ListMiniImageProducts>
      <StyledComponents.BigImageProduct
        src={bigImage}
        alt={title}
        onClick={handleBigImageClick}
      />
      {isModalOpen && (
        <StyledComponents.Modal onClick={closeModal}>
          <img src={bigImage} alt={title} />
        </StyledComponents.Modal>
      )}
    </StyledComponents.WrapperGalleryProducts>
  );
};

export default GalleryProducts;
