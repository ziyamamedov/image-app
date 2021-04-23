import styled from "styled-components";

const StyledCommentItem = styled.li`
  display: flex;
  flex-direction: column;
  font-size: 13px;
`;
const CommentDate = styled.p`
  color: #999999;
`;

//This func takes date in ms and returns it in dd.mm.yyyy
const getDate = (dateMs) => {
  let today = new Date(dateMs);
  var date = today.toJSON().slice(0, 10);
  return date.slice(8, 10) + "." + date.slice(5, 7) + "." + date.slice(0, 4);
};

const CommentItem = ({ comment }) => {
  return (
    <StyledCommentItem>
      <CommentDate>{getDate(comment.date)}</CommentDate>
      <p>{comment.text}</p>
    </StyledCommentItem>
  );
};

export default CommentItem;
