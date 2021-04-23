import { useDispatch } from "react-redux";
import styled from "styled-components";
import {
  openModalAction,
  toggleModalLoadingAction,
  bigImgNotLoaded,
} from "../redux/actions";

const StyledImageItem = styled.li`
  margin: 0.5rem 0.5rem;
  cursor: pointer;
  img {
    display: block;
    max-width: 100%;
  }
`;

const clickHandler = (id, disp) => {
  fetch(`https://boiling-refuge-66454.herokuapp.com/images/${id}`)
    .then((response) => response.json())
    .then((image) => {
      disp(openModalAction(image));
      disp(bigImgNotLoaded());
      disp(toggleModalLoadingAction());
    });
};

const ImageItem = ({ url, id }) => {
  const dispatch = useDispatch();

  return (
    <StyledImageItem onClick={clickHandler.bind(null, id, dispatch)}>
      <img src={url} alt="just a beautiful" />
    </StyledImageItem>
  );
};

export default ImageItem;
