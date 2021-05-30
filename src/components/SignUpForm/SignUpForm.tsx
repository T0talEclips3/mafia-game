import styled from "styled-components";

const InputField = styled.input`
  height: 2em;
  width: 100%;
  border: 1px solid rgba(210, 210, 210, 0.3);
  padding: 1em 0.25em;
  margin: 0.6em 0;
  border-radius: 4px;
  font-size: 1em;
  line-height: 1.15px;
  &:focus,
  :active {
    outline: none;
    border: 1px solid rgb(0, 135, 202);
  }
`;

const Wrapper = styled.div`
  color: white;
  max-width: 30em;
  box-shadow: 0 10px 20px rgb(0 0 0 / 20%);
  padding: 40px;
  border: 1px solid rgba(210, 210, 210, 0.3);
  margin: auto;
  margin-top: 0.6em;
`;

const Form = styled.form`
  display: block;
`;

const Header = styled.h2`
  border-bottom: 1px solid rgba(210, 210, 210, 0.3);
  padding-bottom: 1em;
`;

const SubmitButton = styled.button`
  margin-top: 0.6em;
  width: 100%;
  height: 2em;
  font-size: 1em;
  border-radius: 4px;
  border: 1px solid rgba(22, 22, 22, 0.2);
  color: #444;
`;

const Or = styled.div`
  display: block;
  margin-top: 0.6em;
  position: relative;
  top: 0;
  text-align: center;
  align-items: center;
  display: flex;
  flex-direction: column;
  span {
    background-color: rgb(29, 31, 39);
    width: 30px;
    position: absolute;
    z-index: 1;
  }
  &:after {
    content: "";
    position: absolute;
    height: 1px;
    width: 100%;
    top: 11px;
    background: rgba(210, 210, 210, 0.3);
  }
`;

const SignUpForm = () => {
  return (
    <Wrapper>
      <Header>Sign Up</Header>
      <Form>
        <label style={{ display: "block" }} htmlFor='usernamefield'>
          Username <InputField type='text' id='usernamefield' />
        </label>
        <label style={{ display: "block" }} htmlFor='emailfield'>
          Email
          <InputField type='email' id='usernamefield' />
        </label>
        <label style={{ display: "block" }} htmlFor='passwordfield'>
          Password
          <InputField type='password' id='usernamefield' />
        </label>
        <label style={{ display: "block" }} htmlFor='passwordfield'>
          Password
          <InputField type='password' id='usernamefield' />
        </label>
        <fieldset
          style={{
            margin: "0.6em 0",
            border: "1px solid rgba(210, 210, 210, 0.3)",
            borderRadius: "4px",
          }}
        >
          <div>
            <input type='checkbox' />
            <label htmlFor=''>
              <span>
                Agree to the <a href='_blank'>End User License Agreement</a> and
                the <a  href='_blank'> Privacy Policy</a>.
              </span>
            </label>
          </div>
        </fieldset>
        <SubmitButton type='submit'>Create An Account</SubmitButton>
        <Or>
          <span>Or</span>
        </Or>
        <a
          style={{
            display: "block",
            color: "white",
            textDecoration: "none",
            marginTop: "1.9em",
            textAlign: "center",
          }}
          href='_blank'
        >
          Sign In
        </a>
      </Form>
    </Wrapper>
  );
};

export default SignUpForm;
