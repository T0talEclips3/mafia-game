import {
  Container,
  FormProvider,
  Heading,
  InputField,
  OrBlock,
  SubmitButton,
} from "../common";
import Agreement from "./Agreement";

const SignUpForm = () => {
  return (
    <Container>
      <Heading>Sign Up</Heading>
      <FormProvider>
        <InputField label='Username' fieldId='usernamefield' username />
        <InputField label='Email' fieldId='usernamefield' password />
        <InputField label='Password' fieldId='usernamefield' email />
        <Agreement />
        <SubmitButton type='submit'>Create An Account</SubmitButton>
        <OrBlock to='Sign In' />
      </FormProvider>
    </Container>
  );
};

export default SignUpForm;
