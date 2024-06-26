import React, { FC, useState } from "react";
import {
  BigImageProduct,
  ListMiniImageProducts,
  MiniImageProduct,
  Modal,
  WrapperGalleryProducts,
} from "./styled";
import { GalleryProductsProps } from "./types";

const GalleryProducts: FC<GalleryProductsProps> = ({
  listImages,
  id,
  title,
}) => {
  const [images, setImages] = useState(listImages);
  const [bigImage, setBigImage] = useState(images[images.length - 1]);
  const [isModalOpen, setIsModalOpen] = useState(false);

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

  return (
    <WrapperGalleryProducts>
      <ListMiniImageProducts>
        {images.slice(0, listImages.length - 1).map((image: string, index) => (
          <MiniImageProduct
            key={id + `${index}`}
            src={image}
            alt={title}
            onClick={() => handleMiniImageClick(image, index)}
          />
        ))}
      </ListMiniImageProducts>
      <div>
        <BigImageProduct
          src={bigImage}
          alt={title}
          onClick={handleBigImageClick}
        />
      </div>
      {isModalOpen && (
        <Modal onClick={closeModal}>
          <img src={bigImage} alt={title} />
        </Modal>
      )}
    </WrapperGalleryProducts>
  );
};

export default GalleryProducts;
