import { Link } from "react-router-dom";
import { StyledHeader } from "./Header.styled";

const Header = () => {
  return (
    <StyledHeader>
      <Link to="/">App 1</Link>
      <Link to="/app2">App 2</Link>
    </StyledHeader>
  );
};

export default Header;
