import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import {
  openModalFromCacheAction,
  toggleModalLoadingAction,
  bigImgNotLoaded,
  getBigImageDataThunk,
} from "../redux/actions";

const StyledImageItem = styled.li`
  margin: 0.5rem 0.5rem;
  cursor: pointer;
  img {
    display: block;
    max-width: 100%;
  }
`;

const clickHandler = (id, disp, modalImages) => {
  let found = false;
  modalImages.forEach((elem, index) => {
    if (elem.id === id) {
      found = true;
      disp(openModalFromCacheAction(index));
      disp(bigImgNotLoaded());
      disp(toggleModalLoadingAction());
      return;
    }
  });

  if (!found) {
    disp(getBigImageDataThunk(id, modalImages));
  }
};

const ImageItem = ({ url, id }) => {
  const dispatch = useDispatch();
  const modalImages = useSelector((store) => store.modal.modalImages);

  return (
    <StyledImageItem
      onClick={clickHandler.bind(null, id, dispatch, modalImages)}
    >
      <img src={url} alt="just a beautiful" />
    </StyledImageItem>
  );
};

export default ImageItem;
