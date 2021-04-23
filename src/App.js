import styled from "styled-components";
import Header from "./components/Header";
import Footer from "./components/Footer";

import ImageList from "./components/ImageLitst";
import Modal from "./components/modal/Modal";
import { useSelector } from "react-redux";

const StyledApp = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 0 auto;
  max-width: 95%;
  height: 100%;
`;

function App() {
  const isModal = useSelector((state) => state.modal.isOpen);

  return (
    <StyledApp>
      <Header>Test App</Header>
      <ImageList></ImageList>
      {isModal && <Modal />}
      <Footer>© 2018-2019</Footer>
    </StyledApp>
  );
}

export default App;
