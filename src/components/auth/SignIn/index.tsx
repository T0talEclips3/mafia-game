import {
  Container,
  FormProvider,
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
        <InputField label='Username' fieldId='usernamefield' />
        <Forget />
        <InputField label='Password' fieldId='passwordfield' />
        <SubmitButton>Sign In</SubmitButton>
      </FormProvider>
      <OrBlock to='Sign Up' />
    </Container>
  );
};

export default SignInForm;
