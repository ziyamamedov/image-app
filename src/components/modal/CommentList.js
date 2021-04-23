import styled from "styled-components";
import CommentItem from "./CommentItem";

const StyledCommentList = styled.ul`
  display: flex;
  flex-direction: column;
  font-size: 13px;
`;

const CommentList = ({ comments }) => {
  return (
    <StyledCommentList>
      {comments.length ? (
        comments.map((comment) => (
          <CommentItem key={comment.id} comment={comment} />
        ))
      ) : (
        <p style={{ color: "#999999" }}>Комментариев нет</p>
      )}
    </StyledCommentList>
  );
};

export default CommentList;
