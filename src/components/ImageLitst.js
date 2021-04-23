import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import ImageItem from "./ImageItem";
import { useEffect } from "react";
import { setImages, toggleImagesLoadingAction } from "../redux/actions";
import { ReactComponent as LoadingSvg } from "../icons/Loading.svg";

const StyledImageList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding-bottom: 2rem;
`;

const ImageList = () => {
  const imagesState = useSelector((store) => store.imagesState);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(toggleImagesLoadingAction());

    fetch("https://boiling-refuge-66454.herokuapp.com/images")
      .then((response) => response.json())
      .then((images) => {
        dispatch(setImages(images));
        dispatch(toggleImagesLoadingAction());
      });
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <StyledImageList>
      {imagesState.isLoading ? (
        <LoadingSvg />
      ) : (
        imagesState.images.map((image) => (
          <ImageItem url={image.url} key={image.id} id={image.id} />
        ))
      )}
    </StyledImageList>
  );
};

export default ImageList;
