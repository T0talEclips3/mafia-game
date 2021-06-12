import { FormProvider } from "../../../context/auth";
import {
  Container,
  Heading,
  InputField,
  OrBlock,
  SubmitButton,
} from "../common";
import Forget from "./Forget";

const SignInForm = () => {
  return (
    <Container>
      <Heading>Sign In</Heading>
      <FormProvider>
        <InputField label='Username' fieldId='usernamefield' username />
        <Forget />
        <InputField label='Password' fieldId='passwordfield' password />
        <SubmitButton>Sign In</SubmitButton>
      </FormProvider>
      <OrBlock to='Sign Up' />
    </Container>
  );
};

export default SignInForm;
