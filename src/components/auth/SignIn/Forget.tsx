import styled from "styled-components";

import { Link } from "react-router-dom";

const StyledLink = styled(Link)`
  float: right;
  color: white;
`;

const Forget = () => {
  return <StyledLink to='/account/reset'>Forgot Password?</StyledLink>;
};

export default Forget;
