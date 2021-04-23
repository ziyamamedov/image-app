import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import BigImage from "./BigImage";
import CommentForm from "./CommentForm";
import CommentList from "./CommentList";
import { closeModalAction } from "../../redux/actions";
import { ReactComponent as CloeSvg } from "../../icons/Close.svg";
import { ReactComponent as LoadingSvg } from "../../icons/Loading.svg";

const StyledModal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const ModalBackground = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  background-color: #000000db;
  cursor: pointer;
`;

const ModalWindow = styled.div`
  position: relative;
  background: white;
  padding: 1.5rem;
  display: flex;
  justify-content: center;
  width: 75%;
  z-index: 2;
  .col-1 {
    flex: 1.5;
    margin-right: 1rem;
  }
  .col-2 {
    flex: 1;
  }
`;
const StyledClsBtn = styled.div`
  position: absolute;
  top: 1rem;
  right: 1rem;
  width: 1.125rem;
  height: 1.125rem;
  cursor: pointer;
`;

function closeModal(dispatch) {
  dispatch(closeModalAction());
}

const Modal = () => {
  const dispatch = useDispatch();
  const modalState = useSelector((store) => store.modal);
  return (
    <StyledModal>
      <ModalBackground onClick={closeModal.bind(null, dispatch)} />
      <ModalWindow>
        {modalState.isLoading ? (
          <LoadingSvg />
        ) : (
          <>
            <div className="col-1">
              <BigImage url={modalState.url} />
              <CommentForm></CommentForm>
            </div>
            <div className="col-2">
              <CommentList comments={modalState.comments} />
            </div>
            <StyledClsBtn onClick={closeModal.bind(null, dispatch)}>
              <CloeSvg />
            </StyledClsBtn>
          </>
        )}
      </ModalWindow>
    </StyledModal>
  );
};

export default Modal;
