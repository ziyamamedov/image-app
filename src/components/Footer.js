import styled from "styled-components";

const StyledFooter = styled.footer`
  text-align: center;
  font-family: "Roboto Condensed", sans-serif;

  padding: 1rem 0;
  color: #ccc;
  border-top: 1px solid #ccc;
`;

const Footer = ({ children }) => {
  return <StyledFooter>{children}</StyledFooter>;
};

export default Footer;
