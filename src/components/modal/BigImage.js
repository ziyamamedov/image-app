import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { ReactComponent as LoadingSvg } from "../../icons/Loading.svg";
import { bigImgLoaded } from "../../redux/actions";

const StyledBigImage = styled.img`
  max-width: 100%;

  display: ${(props) => (props.isImgLoaded ? "block" : "none")};
`;

const StyledImgWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: ${({ media }) => (media.phones ? "1rem" : "2rem")};
  width: ${({ media }) => media.phones && "100%"};
`;

const BigImage = ({ url }) => {
  const disp = useDispatch();
  const isImgLoaded = useSelector((store) => store.bigImage);
  const media = useSelector((store) => store.responsive);

  return (
    <StyledImgWrapper media={media}>
      <LoadingSvg style={{ display: isImgLoaded && "none" }} />
      <StyledBigImage
        onLoad={() => {
          disp(bigImgLoaded());
        }}
        isImgLoaded={isImgLoaded}
        src={url}
      />
    </StyledImgWrapper>
  );
};

export default BigImage;
