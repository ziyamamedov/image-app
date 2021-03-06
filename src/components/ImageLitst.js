import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import ImageItem from "./ImageItem";
import { useEffect } from "react";
import { getImagesFromServerThunk } from "../redux/actions";
import { ReactComponent as LoadingSvg } from "../icons/Loading.svg";

const StyledImageList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding-bottom: 2rem;
  max-width: 1250px;
`;

const ImageList = () => {
  const imagesState = useSelector((store) => store.imagesState);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getImagesFromServerThunk());
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
