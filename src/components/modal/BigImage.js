import { findByLabelText } from "@testing-library/dom";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { ReactComponent as LoadingSvg } from "../../icons/Loading.svg";
import { bigImgLoaded } from "../../redux/actions";

const StyledBigImage = styled.img`
  max-width: 100%;
  min-width: 320px;
  margin-bottom: 1.8125rem;
  display: ${(props) => (props.isImgLoaded ? "block" : "none")};
`;

const divStyle = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};

const BigImage = ({ url }) => {
  const disp = useDispatch();
  const isImgLoaded = useSelector((store) => store.bigImage);

  return (
    <div style={divStyle}>
      <LoadingSvg style={{ display: isImgLoaded && "none" }} />
      <StyledBigImage
        onLoad={() => {
          console.log(isImgLoaded);
          disp(bigImgLoaded());
        }}
        isImgLoaded={isImgLoaded}
        src={url}
      />
    </div>
  );
};

export default BigImage;
