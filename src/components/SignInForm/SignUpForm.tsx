import styled from "styled-components";

const FormWrapper = styled.div`
  color: white;
  max-width: 30em;
  box-shadow: 0 10px 20px rgb(0 0 0 / 20%);
  padding: 40px;
  border: 1px solid rgba(210, 210, 210, 0.3);
  margin: auto;
  margin-top: 0.6em;
  h2 {
    border-bottom: 1px solid rgba(210, 210, 210, 0.3);
    padding-bottom: 1em;
  }
  form {
    display: block;
    a {
      float: right;
      color: white;
    }
    label {
      display: block;
    }
    input {
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
    }
    button {
      margin-top: 0.6em;
      width: 100%;
      height: 2em;
      font-size: 1em;
      border-radius: 4px;
      border: 1px solid rgba(22, 22, 22, 0.2);
      color: #444;
      cursor: pointer;
    }
  }
  div {
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
    a {
      display: block;
      color: white;
      text-decoration: none;
      margin-top: 1.9em;
      text-align: center;
    }
  }
`;

const SignInForm = () => {
  return (
    <FormWrapper>
      <h2>Sign In</h2>
      <form>
        <label htmlFor='usernamefield'>
          Username <input type='text' id='usernamefield' />
        </label>
        <a href='_blank'>Forgot Password?</a>
        <label htmlFor='passwordfield'>
          Password
          <input type='password' id='usernamefield' />
        </label>
        <button type='submit'>Sign In</button>
      </form>
      <div>
        <span>Or</span>
        <a href='_blank'>Sign Up</a>
      </div>
    </FormWrapper>
  );
};

export default SignInForm;
