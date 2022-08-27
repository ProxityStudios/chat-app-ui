import Link from "next/link";
import * as React from "react";
import {
  Button,
  Divider,
  InputContainer,
  InputField,
  InputLabel,
} from "../../utils/styles";
import {
  SignUpFormFooter,
  SignUpFormHeading,
  SignUpFormInputsContainer,
} from "../../utils/styles/auth";

export interface SignUpFormProps {}

export function SignUpForm(props: SignUpFormProps) {
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <form onSubmit={onSubmit}>
      <SignUpFormHeading>Sign up to continue</SignUpFormHeading>
      <SignUpFormInputsContainer>
        <InputContainer>
          <InputLabel htmlFor="username-input">Username</InputLabel>
          <InputField
            type="text"
            id="username-input"
            name="username"
            placeholder="TichoIsCool"
            required
          />
        </InputContainer>

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
      </SignUpFormInputsContainer>

      <Button
        css={{
          marginTop: "20px",
        }}
        width="full"
        type="submit"
      >
        Sign up
      </Button>

      <Divider view="shortened" />

      <SignUpFormFooter>
        Already have an account?
        <Link href="/auth/sign-in">Sign in</Link>
      </SignUpFormFooter>
    </form>
  );
}

export default SignUpForm;
