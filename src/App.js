import styled from "styled-components";
import Header from "./components/Header";
import Footer from "./components/Footer";

import ImageList from "./components/ImageLitst";
import Modal from "./components/modal/Modal";
import { useSelector, useDispatch } from "react-redux";
import { toggleResponsive } from "./redux/actions";
import { useEffect } from "react";

const StyledApp = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 0 auto;
  max-width: 95%;
  height: 100%;
  overflow: ${({ isModal }) => isModal && "hidden"};
`;
const screenMatchHandler = (dispatch) => {
  dispatch(toggleResponsive());
};
const mediaPhones = window.matchMedia("(max-width: 480px)");
const mediaDesktop = window.matchMedia("(min-width: 768px)");

function App() {
  const isModal = useSelector((state) => state.modal.isOpen);
  const dispatch = useDispatch();

  //In UseEffect added eventlisteners onwindow change
  useEffect(() => {
    mediaPhones.addEventListener(
      "change",
      screenMatchHandler.bind(null, dispatch)
    );

    mediaDesktop.addEventListener(
      "change",
      screenMatchHandler.bind(null, dispatch)
    );
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <StyledApp isModal={isModal}>
      <Header>Test App</Header>
      <ImageList></ImageList>
      {isModal && <Modal />}
      <Footer>© 2018-2019</Footer>
    </StyledApp>
  );
}

export default App;
