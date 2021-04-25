import { useSelector } from "react-redux";
import styled from "styled-components";
import CommentItem from "./CommentItem";

const StyledCommentList = styled.ul`
  display: flex;
  flex-direction: column;
  font-size: 13px;
  padding: 0 ${({ phones }) => phones && "1.5rem"};
  margin-bottom: ${({ phones }) => phones && "1rem"};
  height: ${({ phones }) => (phones ? "7.5rem" : "21rem")};
  overflow: auto;
`;

const CommentList = ({ comments }) => {
  const phones = useSelector((store) => store.responsive.phones);

  return (
    <StyledCommentList phones={phones}>
      {comments.length ? (
        comments.map((comment, idx) => (
          <CommentItem key={idx} comment={comment} />
        ))
      ) : (
        <p style={{ color: "#999999" }}>Комментариев нет</p>
      )}
    </StyledCommentList>
  );
};

export default CommentList;
