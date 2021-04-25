import styled from "styled-components";

const StyledHeader = styled.header`
  text-align: center;
  text-transform: uppercase;
  font-family: "Roboto Condensed", sans-serif;
  padding: 1rem 0;
  width: 100%;
`;

const Header = ({ children }) => {
  return (
    <StyledHeader>
      <h1>{children}</h1>
    </StyledHeader>
  );
};

export default Header;
