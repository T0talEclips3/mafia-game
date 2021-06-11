import styled from "styled-components";

import { Link } from "react-router-dom";

const Fieldset = styled.fieldset`
  margin: 0.6em 0;
  border: 1px solid rgba(210, 210, 210, 0.3);
  border-radius: 4px;
`;

const StyledLink = styled(Link)`
  color: var(--royal-blue);
`;

const Agreement = () => {
  return (
    <Fieldset>
      <div>
        <input type='checkbox' />
        <label>
          <span>
            Agree to the{" "}
            <StyledLink to='/account/agreement'>
              End User License Agreement
            </StyledLink>{" "}
            and the
            <StyledLink to='/account/policy'> Privacy Policy</StyledLink>.
          </span>
        </label>
      </div>
    </Fieldset>
  );
};
export default Agreement;
