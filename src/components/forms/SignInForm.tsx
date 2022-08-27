import * as React from "react";
import {
  Button,
  InputContainer,
  InputField,
  InputLabel,
} from "../../utils/styles";
import {
  SignInFormHeading,
  SignInFormInputsContainer,
} from "../../utils/styles/auth";

export interface SignInFormProps {}

export function SignInForm(props: SignInFormProps) {
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <form onSubmit={onSubmit}>
      <SignInFormHeading>Sign in to continue</SignInFormHeading>

      <SignInFormInputsContainer>
        <InputContainer>
          <InputLabel htmlFor="email-input">Email</InputLabel>
          <InputField
            type="email"
            id="email-input"
            name="email"
            placeholder="ticho@proxitystudios.tk"
            required
          />
        </InputContainer>
        <InputContainer>
          <InputLabel htmlFor="password-input">Password</InputLabel>
          <InputField
            type="password"
            id="password-input"
            name="password"
            placeholder="******"
            required
            minLength={6}
            maxLength={18}
          />
        </InputContainer>
      </SignInFormInputsContainer>
      <Button
        css={{
          marginTop: "15px",
        }}
        width="full"
        type="submit"
      >
        Sign in
      </Button>
    </form>
  );
}

export default SignInForm;
