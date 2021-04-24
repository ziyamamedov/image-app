import { useDispatch } from "react-redux";
import styled from "styled-components";
import { addCommentAction } from "../../redux/actions";

const StyledCommentForm = styled.form`
  display: flex;
  flex-direction: column;
`;

const StyledInput = styled.input`
  margin-bottom: 1.25rem;
  padding: 8px 11px;
  border: 1px solid #cccccc;
  border-radius: 3px;
`;

const StyledButton = styled.button`
  margin-bottom: 1.25rem;
  padding: 8px 11px;
  border: none;
  border-radius: 3px;
  background: #4997d0;
  color: white;
  cursor: pointer;
`;

const CommentForm = () => {
  const disp = useDispatch();

  const submitHandler = (e) => {
    e.preventDefault();
    disp(
      addCommentAction({
        id: 123,
        text: `${
          e.target.name.value
            ? e.target.name.value + ": " + e.target.comment.value
            : e.target.comment.value
        }`,
        date: Date.now(),
      })
    );
  };

  return (
    <StyledCommentForm onSubmit={submitHandler}>
      <StyledInput type="text" name="name" placeholder="Ваше имя" />
      <StyledInput
        type="text"
        name="comment"
        required
        placeholder="Ваш комментарий"
      />
      <StyledButton type="submit">Оставить комментарий</StyledButton>
    </StyledCommentForm>
  );
};

export default CommentForm;
